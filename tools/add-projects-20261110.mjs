import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('..', import.meta.url));
const origin = 'https://thatsparallel.space';
const context = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'assets/portfolio-additions.js'), 'utf8'), context);
const additions = context.window.parallelPortfolioAdditions;
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const json = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const route = (slug, language) => `${language === 'ru' ? '/ru' : ''}/work/${slug}/`;
const groupLabel = { 'real-estate': ['REAL ESTATE', 'НЕДВИЖИМОСТЬ'], furniture: ['FURNITURE', 'МЕБЕЛЬ'], brands: ['BRANDS', 'БРЕНДЫ'], hotels: ['HOTEL STORIES', 'ОТЕЛИ'] };
const plural = count => count % 10 === 1 && count % 100 !== 11 ? 'проект' : count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 12 || count % 100 > 14) ? 'проекта' : 'проектов';
const arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>';
const backArrow = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>';
const play = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>';

// The prebuilt router already supports /work/:slug. Only extend its project
// data and metadata lookup; no component, routing or visual-system rewrite.
const bundleFile = join(root, 'assets/index-real-estate-20261019.js');
let bundle = readFileSync(bundleFile, 'utf8');
const start = bundle.indexOf('var Er=[') + 'var Er='.length;
const end = bundle.indexOf('],Dr=e=>Er.find', start) + 1;
if (start < 10 || end < start) throw new Error('Original project data anchor changed');
const originalArray = bundle.slice(start, end).replace('...window.parallelPortfolioAdditions.projects,', '');
const originalProjects = new Function(`return (${originalArray});`)();
const projects = [...additions.projects, ...originalProjects];
if (!bundle.includes('import "./portfolio-additions.js?v=1";')) bundle = `import "./portfolio-additions.js?v=1";\n${bundle}`;
if (!bundle.includes('var Er=[...window.parallelPortfolioAdditions.projects,')) bundle = bundle.replace('var Er=[', 'var Er=[...window.parallelPortfolioAdditions.projects,');
const metaFallback = 'if(!seoMeta)seoMeta=window.parallelPortfolioAdditions.metadata[l];';
if (!bundle.includes(metaFallback)) {
  const marker = '[l];document.title=seoMeta?.title';
  if (!bundle.includes(marker)) throw new Error('Runtime metadata anchor changed');
  bundle = bundle.replace(marker, `[l];${metaFallback}document.title=seoMeta?.title`);
}
if (bundle !== readFileSync(bundleFile, 'utf8')) writeFileSync(bundleFile, bundle);

const localeFile = join(root, 'assets/locale.js');
let locale = readFileSync(localeFile, 'utf8');
for (const name of ['dictionary', 'metadata']) locale = locale.replace(new RegExp(`    // portfolio-additions:${name}:start[\\s\\S]*?    // portfolio-additions:${name}:end\\r?\\n`, 'g'), '');
const pairs = data => Object.entries(data).map(([key, value]) => `    ${JSON.stringify(key)}: ${JSON.stringify(value)},`).join('\n');
locale = locale.replace('const strings = {', `const strings = {\n    // portfolio-additions:dictionary:start\n${pairs(additions.dictionary)}\n    // portfolio-additions:dictionary:end`);
locale = locale.replace('const pages = {', `const pages = {\n    // portfolio-additions:metadata:start\n${pairs(additions.russianMetadata)}\n    // portfolio-additions:metadata:end`);
writeFileSync(localeFile, locale);

const labels = language => language === 'ru' ? {
  video: 'ВИДЕО', type: 'Тип материала: видео', studio: 'РАБОТА СТУДИИ', direction: '01 / КОНЦЕПЦИЯ', materials: 'СОСТАВ ПРОЕКТА', cta: 'ОБСУДИТЬ ПОХОЖИЙ ПРОЕКТ', next: 'СЛЕДУЮЩИЙ ПРОЕКТ'
} : { video: 'VIDEO', type: 'Media type: video', studio: 'STUDIO WORK', direction: '01 / THE DIRECTION', materials: 'PROJECT MATERIALS', cta: 'MAKE SOMETHING LIKE THIS', next: 'NEXT PERSPECTIVE' };
function content(project, language) {
  return language === 'ru' ? { ...project, ...additions.entries.find(entry => entry.slug === project.slug)?.ru } : project;
}
function nextProject(project) {
  const group = projects.filter(item => item.portfolioGroup === project.portfolioGroup);
  return group[(group.findIndex(item => item.slug === project.slug) + 1) % group.length];
}
function nextLink(project, language) {
  const next = nextProject(project), l = labels(language), value = content(next, language);
  // Existing project titles are translated by the dictionary in RU snapshots.
  const title = language === 'ru' ? additions.dictionary[value.title] || allStrings[value.title] || value.title : value.title;
  return `<a class="next-project" href="${route(next.slug, language)}" data-discover="true"><span class="eyebrow">${l.next}</span><span>${esc(title)}</span>${arrow}</a>`;
}
const dictionarySource = locale.slice(locale.indexOf('  const strings = {'), locale.indexOf('  const originalText ='));
const { strings: allStrings } = new Function(`${dictionarySource}\nreturn { strings };`)();

for (const project of additions.projects) {
  for (const language of ['en', 'ru']) {
    const p = content(project, language), l = labels(language), prefix = language === 'ru' ? '/ru' : '';
    let html = readFileSync(join(root, prefix, 'work/furniture-sofa-film/index.html'), 'utf8');
    const address = origin + route(project.slug, language);
    const title = language === 'ru' ? additions.russianMetadata[`/work/${project.slug}`][0] : additions.metadata[`/work/${project.slug}`].title;
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
    for (const [attribute, value] of [['name="description"', p.summary], ['property="og:title"', title], ['property="og:description"', p.summary], ['name="twitter:title"', title], ['name="twitter:description"', p.summary], ['property="og:url"', address], ['property="og:image"', origin + p.image], ['name="twitter:image"', origin + p.image], ['property="og:image:alt"', p.alt]]) {
      const pattern = new RegExp(`(<meta ${attribute} content=")[^"]*(")`);
      if (!pattern.test(html)) throw new Error(`Missing ${attribute}`);
      html = html.replace(pattern, (_, before, after) => before + esc(value) + after);
    }
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${address}$2`);
    for (const code of ['en', 'ru']) html = html.replace(new RegExp(`(<link rel="alternate" hreflang="${code}" href=")[^"]*(")`), `$1${origin + route(project.slug, code)}$2`);
    const group = groupLabel[p.portfolioGroup][language === 'ru' ? 1 : 0];
    const main = `<main id="main" tabindex="-1" class="page-transition"><article class="inner-page project-page"><a class="text-link project-back" href="${prefix}/work/category/${p.portfolioGroup}/" data-discover="true">${backArrow}${language === 'ru' ? 'НАЗАД: ' : 'BACK TO '}${group}</a><div class="project-intro"><div><p class="eyebrow lime">${esc(p.category)} / ${l.studio}</p><h1 class="project-title">${esc(p.title)}</h1></div><p class="project-summary">${esc(p.summary)}</p></div><figure class="project-hero project-hero--portrait"><span class="media-type-badge media-type-badge--detail" aria-label="${l.type}">${play}${l.video}</span><video class="project-video" poster="${p.image}" width="540" height="960" style="aspect-ratio:540 / 960" controls="" playsinline="" preload="metadata" aria-label="${esc(p.title)}"><source src="${p.video}" type="video/mp4"/></video><figcaption>${esc(p.mediaNote)}</figcaption></figure><div class="project-story"><div><p class="eyebrow lime">${l.direction}</p><h2>${esc(p.summary)}</h2></div><div><p class="body-copy">${esc(p.direction)}</p><h3 class="eyebrow">${l.materials}</h3><ul>${p.deliverables.map(item => `<li>${esc(item)}</li>`).join('')}</ul><button type="button" class="pill-button">${l.cta} ${arrow}</button></div></div>${nextLink(project, language)}</article></main>`;
    html = html.replace(/<main\b[\s\S]*?<\/main>/, main);
    const crumbs = [{ name: language === 'ru' ? 'Главная' : 'Home', item: `${origin}${prefix}/` }, { name: language === 'ru' ? 'Работы' : 'Work', item: `${origin}${prefix}/work/` }, { name: group, item: `${origin}${prefix}/work/category/${p.portfolioGroup}/` }, { name: p.title, item: address }];
    const graph = [
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })) },
      { '@type': 'CreativeWork', name: p.title, description: p.summary, url: address, inLanguage: language, image: origin + p.image, creator: { '@id': `${origin}/#organization` } },
      { '@type': 'VideoObject', name: p.title, description: p.summary, thumbnailUrl: origin + p.image, contentUrl: origin + p.video, uploadDate: '2026-11-10', duration: `PT${p.duration}S`, inLanguage: language }
    ];
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>`);
    const directory = join(root, prefix, 'work', p.slug);
    mkdirSync(directory, { recursive: true }); writeFileSync(join(directory, 'index.html'), html);
  }
}

function card(project, language) {
  const p = content(project, language), l = labels(language);
  return `<a class="project-card project-card--portrait" aria-label="${esc(p.category)}: ${esc(p.title)}" href="${route(p.slug, language)}" data-discover="true"><div class="card-media" style="aspect-ratio:540 / 960"><img src="${p.image}" alt="${esc(p.alt)}" width="540" height="960" loading="lazy" decoding="async"/><span class="media-type-badge" aria-label="${l.type}">${play}${l.video}</span></div><div class="card-caption"><div><span class="card-category eyebrow">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.discipline)}</p></div>${arrow}</div></a>`;
}
for (const key of Object.keys(groupLabel)) {
  const group = projects.filter(project => project.portfolioGroup === key);
  const added = additions.projects.filter(project => project.portfolioGroup === key);
  if (!added.length) continue;
  for (const language of ['en', 'ru']) {
    const file = join(root, language === 'ru' ? 'ru' : '', 'work/category', key, 'index.html');
    let html = readFileSync(file, 'utf8');
    for (const project of added) html = html.replace(new RegExp(`<a class="project-card[^>]*href="/(?:ru/)?work/${project.slug}/?"[^>]*>[\\s\\S]*?</a>`, 'g'), '');
    html = html.replace(/<div class="work-grid portfolio-grid" data-count="\d+">/, `<div class="work-grid portfolio-grid" data-count="${group.length}">${added.map(project => card(project, language)).join('')}`);
    html = html.replace(/(<p class="filter-status eyebrow"[^>]*>)[\s\S]*?(<\/p>)/, `$1${group.length} ${language === 'ru' ? plural(group.length).toUpperCase() : 'PROJECTS'}$2`);
    writeFileSync(file, html);
  }
}

// Keep static category counts and next-project navigation consistent with React.
for (const language of ['en', 'ru']) {
  const prefix = language === 'ru' ? 'ru' : '';
  for (const name of ['index.html', 'work/index.html']) {
    const file = join(root, prefix, name);
    let html = readFileSync(file, 'utf8');
    html = html.replace(/<a class="category-card"[\s\S]*?<\/a>/g, cardHtml => {
      const key = cardHtml.match(/\/work\/category\/([^/"#]+)/)?.[1];
      const count = projects.filter(project => project.portfolioGroup === key).length;
      return cardHtml.replace(/\d+ (?:projects|проектов|проекта|проект)(?=<)/g, `${count} ${language === 'ru' ? plural(count) : 'projects'}`);
    }); writeFileSync(file, html);
  }
  for (const project of projects) {
    if (!additions.projects.some(item => item.portfolioGroup === project.portfolioGroup)) continue;
    const file = join(root, prefix, 'work', project.slug, 'index.html');
    let html = readFileSync(file, 'utf8');
    html = html.replace(/<a class="next-project"[\s\S]*?<\/a>/, nextLink(project, language)); writeFileSync(file, html);
  }
}

// Cache-bust only the changed runtime assets, across existing and new routes.
function updateAssets(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['assets', 'media', 'tools'].includes(entry.name)) continue;
    const file = join(directory, entry.name);
    if (entry.isDirectory()) updateAssets(file);
    else if (entry.name.endsWith('.html')) {
      const html = readFileSync(file, 'utf8');
      const updated = html.replace(/\/assets\/index-real-estate-20261019\.js(?:\?[^"']*)?/g, '/assets/index-real-estate-20261019.js?v=20261110').replace(/\/assets\/locale\.js\?v=\d+/g, '/assets/locale.js?v=5');
      if (updated !== html) writeFileSync(file, updated);
    }
  }
}
updateAssets(root);

const sitemapFile = join(root, 'sitemap.xml');
let sitemap = readFileSync(sitemapFile, 'utf8');
for (const project of additions.projects) {
  for (const language of ['en', 'ru']) {
    const address = origin + route(project.slug, language), p = content(project, language);
    const links = `<xhtml:link rel="alternate" hreflang="en" href="${origin + route(project.slug, 'en')}"/><xhtml:link rel="alternate" hreflang="ru" href="${origin + route(project.slug, 'ru')}"/>`;
    const xml = `<url><loc>${address}</loc><lastmod>2026-11-10</lastmod>${links}<video:video><video:thumbnail_loc>${origin + p.image}</video:thumbnail_loc><video:title>${esc(p.title)}</video:title><video:description>${esc(p.summary)}</video:description><video:content_loc>${origin + p.video}</video:content_loc></video:video></url>`;
    if (sitemap.includes(`<loc>${address}</loc>`)) sitemap = sitemap.replace(new RegExp(`<url><loc>${address.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>[\\s\\S]*?</url>`), xml);
    else sitemap = sitemap.replace('</urlset>', `  ${xml}\n</urlset>`);
  }
}
sitemap = sitemap.replace(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (whole, address, rest) => {
  const path = new URL(address).pathname.replace(/^\/ru(?=\/)/, '');
  if (!['/', '/work/', '/work/category/brands/', '/work/category/furniture/', '/work/category/real-estate/'].includes(path)) return whole;
  return `<url><loc>${address}</loc><lastmod>2026-11-10</lastmod>${rest.replace(/<lastmod>[^<]*<\/lastmod>/g, '')}</url>`;
});
writeFileSync(sitemapFile, sitemap);
console.log('Added four projects, eight EN/RU detail pages, updated category counts, navigation, runtime data and sitemap.');
