import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('dist/index.html', 'utf8');
const content = JSON.parse(await readFile('content/landing.json', 'utf8'));
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one H1');
assert.match(html, /<html lang="it">/);
assert.match(html, /name="robots" content="noindex,nofollow"/);
assert.ok(!html.includes('{{'), 'No unresolved template markers');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const url = match[1];
  if (!url.startsWith('https:')) await access(`dist/${url}`);
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Unique IDs');
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), 'Anchor target exists');
for (const menu of content.menus) {
  assert.ok(html.includes(menu.name));
  assert.ok(html.includes(menu.price));
  for (const course of menu.courses) assert.ok(html.includes(course));
}
const contacts = [...html.matchAll(/href="(https:\/\/wa.me\/[^"]+)"/g)];
assert.equal(contacts.length, 2);
for (const [,value] of contacts) {
  const url = new URL(value);
  assert.equal(url.pathname, `/${content.whatsappNumber}`);
  assert.equal(url.searchParams.get('text'), content.whatsappMessage);
}
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
assert.equal(schema['@type'], 'Restaurant');
assert.equal(schema.name, 'Il Desco Ristorante');
assert.ok(!/<script[^>]+src=/.test(html), 'No external tracking scripts');
assert.match(await readFile('dist/_headers','utf8'), /X-Robots-Tag: noindex/);
console.log('PASS: Italian static HTML, local assets, anchors, official menus, WhatsApp links, JSON-LD syntax and preview index blocking.');
