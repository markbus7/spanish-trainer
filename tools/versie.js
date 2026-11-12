#!/usr/bin/env node
/* Verhoog de versie op alle plekken tegelijk: node tools/versie.js 1.9.3
   - js/version.js (nummer + datum van vandaag)
   - package.json
   - index.html (?v=… achter elk script en de stylesheet, zodat de browser nooit een oud bestand uit zijn cache haalt) */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const n = process.argv[2];
if (!/^\d+\.\d+\.\d+$/.test(n || '')) { console.error('Gebruik: node tools/versie.js 1.2.3'); process.exit(1); }
const date = new Date().toISOString().slice(0, 10);
const edit = (f, fn) => { const p = path.join(root, f); fs.writeFileSync(p, fn(fs.readFileSync(p, 'utf8'))); };
edit('js/version.js', t => t.replace(/number:\s*'[^']*'/, `number: '${n}'`).replace(/date:\s*'[^']*'/, `date: '${date}'`));
edit('package.json', t => t.replace(/"version":\s*"[^"]*"/, `"version": "${n}"`));
edit('index.html', t => t.replace(/(<script src="[^"?]+|<link rel="stylesheet" href="[^"?]+)(\?v=[^"]*)?"/g, `$1?v=${n}"`));
console.log('Versie ' + n + ' (' + date + ')');
