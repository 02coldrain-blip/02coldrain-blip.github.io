import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git") continue;
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtml(target)));
    else if (entry.name.endsWith(".html")) files.push(target);
  }

  return files;
}

function readMeta(html, pattern, label) {
  const match = html.match(pattern);
  if (!match) throw new Error(`Missing ${label}`);
  return match[1];
}

function addSharedHeadPolish(html) {
  if (!html.includes('meta name="color-scheme"')) {
    html = html.replace(
      '    <meta name="theme-color" content="#080909" />',
      '    <meta name="theme-color" content="#080909" />\n    <meta name="color-scheme" content="dark" />',
    );
  }

  if (!html.includes('rel="preload" href="/assets/anton-')) {
    html = html.replace(
      '    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />',
      '    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n' +
        '    <link rel="preload" href="/assets/anton-latin-400-normal-Byf51wtH.woff2" as="font" type="font/woff2" crossorigin />\n' +
        '    <link rel="preload" href="/assets/inter-latin-400-normal-C38fXH4l.woff2" as="font" type="font/woff2" crossorigin />',
    );
  }

  if (!html.includes('property="og:site_name"')) {
    html = html.replace(
      '    <meta property="og:type" content="website" />',
      '    <meta property="og:type" content="website" />\n    <meta property="og:site_name" content="PARALLEL" />',
    );
  }

  if (!html.includes('property="og:image:alt"')) {
    html = html.replace(
      '    <meta property="og:image:height" content="630" />',
      '    <meta property="og:image:height" content="630" />\n    <meta property="og:image:alt" content="PARALLEL — AI Creative Production Studio" />',
    );
  }

  if (!html.includes('name="twitter:title"')) {
    const title = readMeta(html, /<title>(.*?)<\/title>/, "title");
    const description = readMeta(
      html,
      /<meta name="description" content="(.*?)" \/>/,
      "description",
    );
    html = html.replace(
      '    <meta name="twitter:card" content="summary_large_image" />',
      '    <meta name="twitter:card" content="summary_large_image" />\n' +
        `    <meta name="twitter:title" content="${title}" />\n` +
        `    <meta name="twitter:description" content="${description}" />\n` +
        '    <meta name="twitter:image" content="https://thatsparallel.space/og-image.png" />',
    );
  }

  return html;
}

function polishButtonsAndMedia(html) {
  return html
    .replace(/<button(?![^>]*\btype=)/g, '<button type="button"')
    .replace(/preload="auto"/g, 'preload="metadata"');
}

function build404(html) {
  html = html
    .replace(
      '<meta name="description" content="PARALLEL is an independent creative studio. AI video and images, bold ideas and complete advertising production for brands." />',
      '<meta name="description" content="The page you’re looking for isn’t here. Return to PARALLEL." />\n    <meta name="robots" content="noindex, follow" />',
    )
    .replace(
      '<meta property="og:title" content="PARALLEL — AI Creative Production Studio" />',
      '<meta property="og:title" content="Page not found — PARALLEL" />',
    )
    .replace(
      '<meta property="og:description" content="PARALLEL is an independent creative studio. AI video and images, bold ideas and complete advertising production for brands." />',
      '<meta property="og:description" content="The page you’re looking for isn’t here. Return to PARALLEL." />',
    )
    .replace(
      '<title>PARALLEL — AI Creative Production Studio</title>',
      '<title>Page not found — PARALLEL</title>',
    )
    .replace(
      /\s*<link rel="canonical" href="https:\/\/thatsparallel\.space\/" \/><meta property="og:url" content="https:\/\/thatsparallel\.space\/" \/>/,
      "",
    )
    .replace('data-route="/"', 'data-route="/ssr-pending"')
    .replace(
      /<main id="main" tabindex="-1" class="page-transition">[\s\S]*?<\/main>/,
      '<main id="main" tabindex="-1" class="page-transition"><section class="inner-page not-found"><p class="eyebrow lime">[ 404 / A DIFFERENT REALITY ]</p><h1 class="display-heading">NOT IN<br/>THIS WORLD.</h1><p class="body-copy">The page you’re looking for isn’t here.</p><a class="pill-button solid" href="/">BACK TO REALITY <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></section></main>',
    );

  return html
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      '<meta name="twitter:title" content="Page not found — PARALLEL" />',
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      '<meta name="twitter:description" content="The page you’re looking for isn’t here. Return to PARALLEL." />',
    );
}

for (const file of await collectHtml(root)) {
  let html = await readFile(file, "utf8");
  html = addSharedHeadPolish(html);
  html = polishButtonsAndMedia(html);
  if (path.basename(file) === "404.html") html = build404(html);
  await writeFile(file, html, "utf8");
}

const bundleNames = ["index-ByvSNv6Y.js", "index-real-estate-20261019.js"];
for (const name of bundleNames) {
  const file = path.join(root, "assets", name);
  let source = await readFile(file, "utf8");
  source = source.replace(/\(`button`,\{(?!type:)/g, '(`button`,{type:`button`,');
  source = source.replace(
    'r?.summary||i?.description||`PARALLEL is an independent creative studio. AI video and images, bold ideas and complete advertising production for brands.`',
    'r?.summary||i?.description||(e.pathname===`/`?`PARALLEL is an independent creative studio. AI video and images, bold ideas and complete advertising production for brands.`:`The page you’re looking for isn’t here. Return to PARALLEL.`)',
  );
  source = source
    .replace(
      'function Xr(){let e=k();return(0,x.useEffect)(()=>{let t=',
      'function Xr(){let e=k();return(0,x.useEffect)(()=>{let l=e.pathname.replace(/\\/$/,``)||`/`,t=',
    )
    .replace('r=Dr(e.pathname.split(`/work/`)[1])', 'r=Dr(l.split(`/work/`)[1])')
    .replace(
      'i=kr.find(t=>e.pathname===`/work/category/${t.key}`)',
      'i=kr.find(t=>l===`/work/category/${t.key}`)',
    )
    .replace('e.pathname===`/work`?', 'l===`/work`?')
    .replace(':e.pathname===`/`?', ':l===`/`?')
    .replace('(e.pathname===`/`?', '(l===`/`?')
    .replace('${e.pathname}`}', '${l}`}');
  await writeFile(file, source, "utf8");
}

const cssFile = path.join(root, "assets", "index-JUsGZi35.css");
let css = await readFile(cssFile, "utf8");
const marker = "/* PARALLEL accessibility polish */";
if (!css.includes(marker)) {
  css +=
    `\n${marker}\n` +
    ':root{color-scheme:dark}a,button{touch-action:manipulation}.logo,.desktop-nav a,.text-link,.footer-links>a{min-height:44px}.desktop-nav a,.footer-links>a{display:inline-flex;align-items:center}.header-cta{min-height:44px}@media (width<=767px){.footer-links{font-size:10px}}\n';
  await writeFile(cssFile, css, "utf8");
}

console.log("Polished static HTML, runtime bundles, and shared CSS.");
