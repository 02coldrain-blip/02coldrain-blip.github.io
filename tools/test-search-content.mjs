import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('..', import.meta.url));
const context = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'assets/search-content.js'), 'utf8'), context);
const { markup, schema } = context.window.parallelSearchContent;
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, 40);
const titles = new Set(), descriptions = new Set();
let blocks = 0, services = 0;
for (const address of urls) {
  const pathname = new URL(address).pathname;
  const language = pathname.startsWith('/ru/') ? 'ru' : 'en';
  const route = pathname.replace(/^\/ru(?=\/)/, '').replace(/\/$/, '') || '/';
  const html = readFileSync(join(root, pathname, 'index.html'), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, address);
  assert(html.includes(`<html lang="${language}"`), address);
  assert(html.includes(`<link rel="canonical" href="${address}"`), address);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert(title && description, address);
  assert(!titles.has(title), `Duplicate title: ${address}`); titles.add(title);
  assert(!descriptions.has(description), `Duplicate description: ${address}`); descriptions.add(description);
  assert.equal((html.match(/src="\/assets\/search-content\.js/g) || []).length, 1, address);
  assert(html.indexOf('/assets/search-content.js') < html.indexOf('/assets/locale.js'), address);
  const block = markup(route, language);
  assert.equal((html.match(/class="search-content(?: |")/g) || []).length, block ? 1 : 0, address);
  if (block) {
    blocks++;
    assert(html.includes(block), `Static/runtime mismatch: ${address}`);
    assert.equal((block.match(/id="search-content-heading"/g) || []).length, 1);
    for (const [, target] of block.matchAll(/href="(\/[^"]+)"/g)) {
      assert.equal(target.startsWith('/ru/'), language === 'ru', target);
      const targetPath = target.split('#')[0];
      assert(existsSync(join(root, targetPath, 'index.html')), `Broken link: ${target}`);
      if (target.includes('#production')) assert(readFileSync(join(root, targetPath, 'index.html'), 'utf8').includes('id="production"'), target);
    }
    const sitemapEntry = sitemap.match(new RegExp(`<url><loc>${address.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>([\\s\\S]*?)</url>`))?.[1];
    assert(sitemapEntry?.includes('<lastmod>2026-10-26</lastmod>'), address);
  }
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(json);
    if (data['@type'] === 'Service') {
      services++;
      assert.equal(data.url, address);
      assert.equal(data.name, schema(route, language).name);
      assert(block.includes(data.name) && block.includes(data.description), address);
    }
  }
}
assert.equal(blocks, 14);
assert.equal(services, 8);
assert.equal(markup('/work', 'en'), '');
assert.equal(markup('/404', 'ru'), '');
console.log('PASS: 40 indexable pages; 14 matching static/runtime content blocks; 8 Service schemas; unique metadata; working EN/RU links and sitemap lastmod.');
