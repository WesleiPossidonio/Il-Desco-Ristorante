import { build } from 'esbuild';
import { readFile, mkdir, cp, writeFile, access, rm } from 'node:fs/promises';
const c = JSON.parse(await readFile('content/landing.json', 'utf8'));
if (c.whatsappNumber && !/^[1-9]\d{7,14}$/.test(c.whatsappNumber)) throw new Error('Invalid international WhatsApp number');
for (const asset of [c.heroImage, c.restaurantImage, c.menuPdf].filter(Boolean)) {
  if (!asset.startsWith('assets/') || asset.includes('..')) throw new Error('Assets must use local assets/ paths');
  await access(`public/${asset}`);
}
const schema = JSON.stringify({ '@context':'https://schema.org', '@type':'Restaurant', name:'Il Desco Ristorante', url:'https://www.ildescopadova.com/it/home/', address:{'@type':'PostalAddress', addressLocality:'Padova', addressCountry:'IT'} }).replaceAll('<', '\\u003c');
const esc = s => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const image = (path, alt, hero=false) => path ? `<img src="${esc(path)}" alt="${esc(alt)}" width="${hero ? 1672 : 4500}" height="${hero ? 941 : 3000}" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">` : '';
const contact = location => c.whatsappNumber ? `<a class="button" data-cta-location="${location}" href="https://wa.me/${esc(c.whatsappNumber)}?text=${encodeURIComponent(c.whatsappMessage)}">Richiedi disponibilità su WhatsApp</a>` : '<p class="availability">Il contatto WhatsApp sarà disponibile a breve.</p>';
let html = await readFile('templates/landing.html', 'utf8');
const values = {...c, schema, heroContact:contact('hero'), footerContact:contact('footer'), title:esc(c.title), description:esc(c.description), heroText:esc(c.heroText), presentationText:esc(c.presentationText), hero:image(c.heroImage,'',true), restaurant:image(c.restaurantImage,'Gli interni del ristorante Il Desco'), menus:c.menus.length ? c.menus.map(m=>`<article class="menu-card" aria-labelledby="${esc(m.id)}"><h3 id="${esc(m.id)}">${esc(m.name)}</h3><p class="menu-price">${esc(m.price)} <span>a persona</span></p><ul class="menu-courses">${m.courses.map(course=>`<li>${esc(course)}</li>`).join('')}</ul></article>`).join('') : '<p>Le proposte di Natale stanno arrivando.</p>', menuPdf:esc(c.menuPdf)};
html = html.replace(/\{\{(\w+)\}\}/g, (_, key) => values[key] ?? '');
await rm('dist', {recursive:true, force:true});
await mkdir('dist/assets', {recursive:true});
await cp('public', 'dist', {recursive:true});
await writeFile('dist/index.html',html);
await writeFile('dist/robots.txt','User-agent: *\nDisallow: /\n');
console.log('Static preview built; contact and menus reflect the confirmed content configuration.');

await build({ entryPoints: ['src/js/main.js'], outdir: 'dist/assets/js', bundle: true, splitting: true, format: 'esm', minify: true, target: ['es2020'], legalComments: 'linked' });
