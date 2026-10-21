import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const origin = 'https://thatsparallel.space';
const assetVersion = '3';
const source = readFileSync(join(root, 'assets/locale.js'), 'utf8');
const dictionary = source.slice(source.indexOf('  const strings = {'), source.indexOf('  const originalText ='));
const { strings, pageMetadata } = new Function(`${dictionary}\nreturn { strings, pageMetadata: pages };`)();
const pages = [];
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === 'ru') continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
}

function routeFor(path) {
  const name = relative(root, path).split(sep).join('/');
  return name === 'index.html' ? '/' : `/${name.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
}
function urlFor(route, language) {
  return `${origin}${language === 'ru' ? '/ru' : ''}${route === '/' ? '/' : `${route}/`}`;
}
function alternates(route) {
  return `\n  <link rel="alternate" hreflang="en" href="${urlFor(route, 'en')}" />\n  <link rel="alternate" hreflang="ru" href="${urlFor(route, 'ru')}" />`;
}
function decode(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|nbsp|#39|#x27);/g, entity => ({
    '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>', '&nbsp;': ' ', '&#39;': "'", '&#x27;': "'"
  })[entity]);
}
function escape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function translate(value) {
  const key = decode(value).trim().replace(/\s+/g, ' ');
  let result = strings[key];
  if (!result) {
    const price = /^From \$(\d+) \/ scene$/.exec(key);
    const count = /^(\d+) PROJECTS?$/.exec(key);
    const video = /^(.+) creative video$/.exec(key);
    const category = /^([^:]+): (.+)$/.exec(key);
    if (price) result = `От $${price[1]} за сцену`;
    else if (count) result = `${count[1]} ${count[1] === '1' ? 'проект' : 'проекта'}`;
    else if (video && strings[video[1]]) result = `Креативное видео: ${strings[video[1]].toLowerCase()}`;
    else if (category && strings[category[1]] && strings[category[2]]) result = `${strings[category[1]]}: ${strings[category[2]]}`;
  }
  return result ? `${value.match(/^\s*/)[0]}${escape(result)}${value.match(/\s*$/)[0]}` : value;
}
function translateBody(body) {
  return body.split(/(<[^>]+>)/g).map(part => {
    if (!part.startsWith('<')) return translate(part);
    if (!/^<[a-z]/i.test(part)) return part;
    let tag = part.replace(/\b(alt|aria-label|title|placeholder)="([^"]*)"/g,
      (_, name, value) => `${name}="${translate(value)}"`);
    if (/^<a\b/i.test(tag)) tag = tag.replace(/\bhref="\/(?!\/)([^"]*)"/, (_, path) => `href="/ru/${path}"`);
    return tag;
  }).join('');
}
function meta(html, selector, value) {
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*("\\s*\\/>)`);
  return html.replace(pattern, (_, before, after) => `${before}${escape(value)}${after}`);
}

visit(root);
for (const path of pages) {
  const route = routeFor(path);
  const original = readFileSync(path, 'utf8');
  let html = original.includes('/assets/locale.js')
    ? original.replace(/\/assets\/locale\.(css|js)(?:\?v=[^"']+)?(?=["'])/g, (_, extension) => `/assets/locale.${extension}?v=${assetVersion}`)
    : original.replace('</head>', `\n  <link rel="stylesheet" href="/assets/locale.css?v=${assetVersion}" />\n  <script defer src="/assets/locale.js?v=${assetVersion}"></script>\n  </head>`);
  if (route !== '/404') {
    html = html.replace(/\s*<link rel="alternate" hreflang="(?:en|ru)"[^>]*>/g, '');
    html = html.replace('</head>', `${alternates(route)}\n  </head>`);
  }
  html = html.replace(/^[ \t]+$/gm, '');
  if (html !== original) writeFileSync(path, html);
  const ruPath = join(root, 'ru', relative(root, path));
  const [title, description] = pageMetadata[route] || ['Страница не найдена — PARALLEL', 'Страница, которую вы ищете, не найдена.'];
  let ru = html.replace('<html lang="en">', '<html lang="ru" data-locale="ru">');
  ru = ru.replace(/(<title>)[\s\S]*?(<\/title>)/, (_, before, after) => `${before}${escape(title)}${after}`);
  for (const selector of ['name="description"', 'property="og:description"', 'name="twitter:description"']) ru = meta(ru, selector, description);
  for (const selector of ['property="og:title"', 'name="twitter:title"']) ru = meta(ru, selector, title);
  ru = ru.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${urlFor(route, 'ru')}$2`);
  ru = ru.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${urlFor(route, 'ru')}$2`);
  ru = ru.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (_, before, data, after) => {
    const schema = JSON.parse(data);
    for (const entity of schema['@graph'] || [schema]) {
      if (entity['@type'] === 'Organization') entity.description = pageMetadata['/'][1];
      if (entity['@type'] === 'WebSite') { entity.url = urlFor('/', 'ru'); entity.inLanguage = 'ru'; }
      if (entity['@type'] === 'CreativeWork') {
        entity.name = title.replace(/ \| PARALLEL$/, '');
        entity.description = description;
        entity.url = urlFor(route, 'ru');
        entity.inLanguage = 'ru';
      }
      for (const item of entity.itemListElement || []) {
        const itemRoute = new URL(item.item).pathname.replace(/\/$/, '') || '/';
        if (pageMetadata[itemRoute]) {
          item.item = urlFor(itemRoute, 'ru');
          item.name = pageMetadata[itemRoute][0].replace(/ \| PARALLEL$/, '');
        }
      }
    }
    return `${before}${JSON.stringify(schema).replace(/</g, '\\u003c')}${after}`;
  });
  ru = ru.replace('</head>', `  <script>document.documentElement.classList.add('js-ru-pending')</script>\n  </head>`);
  const bodyStart = ru.indexOf('<body>');
  const bodyEnd = ru.lastIndexOf('</body>');
  if (bodyStart < 0 || bodyEnd < 0) throw new Error(`Missing body: ${path}`);
  const body = translateBody(ru.slice(bodyStart, bodyEnd)).replace(/(<div id="root" data-route=")[^"]*(")/, '$1/ru-static$2');
  ru = ru.slice(0, bodyStart) + body + ru.slice(bodyEnd);
  mkdirSync(dirname(ruPath), { recursive: true });
  writeFileSync(ruPath, ru);
}

const sitemapPath = join(root, 'sitemap.xml');
let sitemap = readFileSync(sitemapPath, 'utf8');
sitemap = sitemap.replace(/\s+xmlns:xhtml="[^"]*"/, '');
sitemap = sitemap.replace(/\s*<url><loc>https:\/\/thatsparallel\.space\/ru[^<]*<\/loc>[\s\S]*?<\/url>/g, '');
sitemap = sitemap.replace(/\s*<xhtml:link[^>]*\/>/g, '');
sitemap = sitemap.replace('<urlset ', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" ');
sitemap = sitemap.replace(/<url><loc>(https:\/\/thatsparallel\.space\/(?!ru\/)[^<]*)<\/loc>([\s\S]*?)<\/url>/g,
  (_, enUrl, content) => {
    const route = new URL(enUrl).pathname.replace(/\/$/, '') || '/';
    const ruUrl = urlFor(route, 'ru');
    const links = `\n    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n    <xhtml:link rel="alternate" hreflang="ru" href="${ruUrl}"/>`;
    return `<url><loc>${enUrl}</loc>${links}${content}</url>\n  <url><loc>${ruUrl}</loc>${links}\n  </url>`;
  });
writeFileSync(sitemapPath, sitemap);

const bundlePath = join(root, 'assets/index-real-estate-20261019.js');
let bundle = readFileSync(bundlePath, 'utf8');
const oldRouter = '(0,j.jsx)(Mn,{children:(0,j.jsx)(Zr,{})})';
const newRouter = '(0,j.jsx)(Mn,{basename:window.location.pathname===`/ru`||window.location.pathname.startsWith(`/ru/`)?`/ru`:`/`,children:(0,j.jsx)(Zr,{})})';
if (bundle.includes(oldRouter)) {
  bundle = bundle.replace(oldRouter, newRouter);
  writeFileSync(bundlePath, bundle);
} else if (!bundle.includes(newRouter)) throw new Error('Could not locate BrowserRouter in prebuilt bundle');

console.log(`Localized ${pages.length} HTML pages; updated sitemap and router.`);
