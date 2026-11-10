import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
const root = fileURLToPath(new URL('..', import.meta.url));
const context = { window: {} };
vm.runInNewContext(readFileSync(join(root, 'assets/portfolio-additions.js'), 'utf8'), context);
const { projects, metadata, russianMetadata } = context.window.parallelPortfolioAdditions;
assert.equal(projects.length, 4);
const bundle = readFileSync(join(root, 'assets/index-real-estate-20261019.js'), 'utf8');
assert(bundle.startsWith('import "./portfolio-additions.js?v=1";'));
const dataStart = bundle.indexOf('var Er=[') + 'var Er='.length;
const dataEnd = bundle.indexOf('],Dr=e=>Er.find', dataStart) + 1;
const allProjects = vm.runInNewContext(`(${bundle.slice(dataStart, dataEnd)})`, context);
assert.equal(allProjects.length, 18);
assert.equal(new Set(allProjects.map(project => project.slug)).size, 18);
assert(bundle.includes('if(!seoMeta)seoMeta=window.parallelPortfolioAdditions.metadata[l];'));
const locale = readFileSync(join(root, 'assets/locale.js'), 'utf8');
const dictionary = locale.slice(locale.indexOf('  const strings = {'), locale.indexOf('  const originalText ='));
const { strings, pages } = new Function(`${dictionary}\nreturn { strings, pages };`)();
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 48);
for (const project of projects) {
  for (const language of ['en', 'ru']) {
    const prefix = language === 'ru' ? '/ru' : '';
    const address = `https://thatsparallel.space${prefix}/work/${project.slug}/`;
    const html = readFileSync(join(root, prefix, 'work', project.slug, 'index.html'), 'utf8');
    const title = language === 'ru' ? russianMetadata[`/work/${project.slug}`][0] : metadata[`/work/${project.slug}`].title;
    assert(html.includes(`<title>${title}</title>`), address);
    assert(html.includes(`href="${address}"`), address);
    assert(html.includes(`src="${project.video}"`), address);
    assert(!html.includes('project-budget'), 'No invented price');
    assert(html.includes(`href="${prefix}/work/category/${project.portfolioGroup}/"`), address);
    const group = allProjects.filter(item => item.portfolioGroup === project.portfolioGroup);
    const next = group[(group.findIndex(item => item.slug === project.slug) + 1) % group.length];
    assert(html.includes(`class="next-project" href="${prefix}/work/${next.slug}/"`), address);
    if (language === 'ru') { assert(pages[`/work/${project.slug}`]); assert(strings[project.title]); }
    for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      const graph = JSON.parse(json)['@graph'];
      for (const item of graph || []) if (item['@type'] === 'VideoObject') {
        assert.equal(item.contentUrl, 'https://thatsparallel.space' + project.video);
        assert.equal(item.uploadDate, '2026-11-10');
      }
    }
  }
  for (const asset of [project.image, project.video, project.previewVideo]) {
    const file = join(root, asset), bytes = readFileSync(file);
    assert(statSync(file).size > 5000, asset);
    assert(statSync(file).size < 20 * 1024 * 1024, asset);
    assert(asset.endsWith('.webp') ? bytes.subarray(8, 12).toString() === 'WEBP' : bytes.subarray(4, 8).toString() === 'ftyp', asset);
  }
}
for (const [category, count] of Object.entries({ 'real-estate': 3, furniture: 5, brands: 6, hotels: 4 })) {
  for (const language of ['en', 'ru']) {
    const html = readFileSync(join(root, language === 'ru' ? 'ru' : '', 'work/category', category, 'index.html'), 'utf8');
    assert.equal((html.match(/class="project-card /g) || []).length, count);
    assert(html.includes(`data-count="${count}"`));
    const expectedLabel = language === 'ru' ? `${count} ${count >= 5 ? 'ПРОЕКТОВ' : 'ПРОЕКТА'}` : `${count} PROJECTS`;
    assert(html.replace(/<!--[\s\S]*?-->/g, '').includes(expectedLabel), category);
  }
}
console.log('PASS: 4 new projects; 8 EN/RU pages; 18 unique project records; 48 sitemap URLs; category counts, locale metadata, navigation, video schemas and 12 optimized assets.');
