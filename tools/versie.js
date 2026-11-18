#!/usr/bin/env node
/* Verhoog de versie op alle plekken tegelijk: node tools/versie.js 1.9.3
   - js/version.js (nummer + datum van vandaag)
   - package.json
   - index.html (?v=… achter elk script en de stylesheet, zodat de browser nooit een oud bestand uit zijn cache haalt)
   - js/changelog.js: «Wat is er nieuw» krijgt bovenaan een blok voor deze versie.
     Geef de wijzigingen mee in gewone taal:  node tools/versie.js 1.9.3 "Wat er nieuw is" "Nog iets"
     Zonder tekst komt er een TODO te staan; de tests falen tot je die invult. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const n = process.argv[2], notes = process.argv.slice(3).filter(x => x.trim());
if (!/^\d+\.\d+\.\d+$/.test(n || '')) { console.error('Gebruik: node tools/versie.js 1.2.3'); process.exit(1); }
const date = new Date().toISOString().slice(0, 10);
const edit = (f, fn) => { const p = path.join(root, f); fs.writeFileSync(p, fn(fs.readFileSync(p, 'utf8'))); };
edit('js/version.js', t => t.replace(/number:\s*'[^']*'/, `number: '${n}'`).replace(/date:\s*'[^']*'/, `date: '${date}'`));
edit('package.json', t => t.replace(/"version":\s*"[^"]*"/, `"version": "${n}"`));
edit('index.html', t => t.replace(/(<script src="[^"?]+|<link rel="stylesheet" href="[^"?]+)(\?v=[^"]*)?"/g, `$1?v=${n}"`));
edit('js/changelog.js', t => {
  const q = x => "'" + x.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
  const block = "  { v: '" + n + "', date: '" + date + "',\n    nl: [" + (notes.length ? notes.map(q).join(', ') : "'TODO: schrijf hier wat er nieuw is'") + "],\n    es: [] },\n";
  const re = new RegExp("  \\{ v: '" + n.replace(/\./g, '\\.') + "', date: '[^']*',");
  if (re.test(t)) { // versie staat er al: alleen de datum bijwerken
    t = t.replace(re, "  { v: '" + n + "', date: '" + date + "',");
    return t;
  }
  return t.replace('self.SPT_CHANGELOG = [\n', m => m + block);
});
console.log('Versie ' + n + ' (' + date + ')');
