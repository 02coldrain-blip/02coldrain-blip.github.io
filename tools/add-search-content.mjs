import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Only the content layer and its asset references are regenerated. Existing
// metadata, translated snapshots and compiled application bundles stay intact.
const root = fileURLToPath(new URL('..', import.meta.url));
const context = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'assets/search-content.js'), 'utf8'), context);
const { markup, schema } = context.window.parallelSearchContent;
let updated = 0;
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'assets' || entry.name === 'media' || entry.name === 'tools') continue;
    const file = join(directory, entry.name);
    if (entry.isDirectory()) { visit(file); continue; }
    if (!entry.name.endsWith('.html')) continue;
    const original = readFileSync(file, 'utf8');
    const local = relative(root, file).replaceAll('\\', '/');
    const language = local.startsWith('ru/') ? 'ru' : 'en';
    const route = '/' + local.replace(/^ru\//, '').replace(/(?:^|\/)index\.html$/, '').replace(/\.html$/, '');
    const content = markup(route, language);
    let html = original.replace(/<!-- search-content:start -->[\s\S]*?<!-- search-content:end -->/g, '')
      .replace(/\s*<script id="search-service-schema" type="application\/ld\+json">[\s\S]*?<\/script>/g, '')
      .replace(/\s*<script defer src="\/assets\/search-content\.js(?:\?v=[^"]+)?"><\/script>/g, '')
      .replace(/\/assets\/locale\.(js|css)\?v=[^"']+/g, '/assets/locale.$1?v=4');
    if (!html.includes('<script defer src="/assets/locale.js?v=4"></script>')) throw new Error(`Missing locale hook: ${local}`);
    html = html.replace('<script defer src="/assets/locale.js?v=4"></script>', '<script defer src="/assets/search-content.js?v=1"></script>\n  <script defer src="/assets/locale.js?v=4"></script>');
    if (content) {
      const block = `<!-- search-content:start -->${content}<!-- search-content:end -->`;
      if (route === '/') html = html.replace(/<section id="about"/, `${block}<section id="about"`);
      else if (route.startsWith('/work/category/')) html = html.replace('<div class="work-outro">', `${block}<div class="work-outro">`);
      else html = html.replace(/(<div class="project-story">[\s\S]*?<\/div>)/, `$1${block}`);
      if (!html.includes(block)) throw new Error(`Missing content anchor: ${local}`);
    }
    const data = schema(route, language);
    if (data) html = html.replace('</head>', `  <script id="search-service-schema" type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>\n  </head>`);
    if (html !== original) { writeFileSync(file, html); updated++; }
  }
}
visit(root);
const sitemapFile = join(root, 'sitemap.xml');
const sitemap = readFileSync(sitemapFile, 'utf8');
const updatedSitemap = sitemap.replace(/<url><loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (entry, address, tail) => {
  const pathname = new URL(address).pathname;
  const language = pathname.startsWith('/ru/') ? 'ru' : 'en';
  const route = pathname.replace(/^\/ru(?=\/)/, '').replace(/\/$/, '') || '/';
  if (!markup(route, language)) return entry;
  return `<url><loc>${address}</loc><lastmod>2026-10-26</lastmod>${tail.replace(/<lastmod>[^<]+<\/lastmod>/g, '')}</url>`;
});
if (updatedSitemap !== sitemap) writeFileSync(sitemapFile, updatedSitemap);
console.log(`Updated ${updated} HTML files; service/FAQ/case content is included in static HTML and SPA navigation.`);
