/* Maakt content/kaarten/es.js (kaart van «Op reis»). Eenmalig, buiten de app:
   npm i world-atlas@2 topojson-client@3 topojson-simplify@3 d3-geo@3 && node tools/kaart-maken.mjs content/kaarten/es.js */
import fs from 'fs';
import { feature } from 'topojson-client';
import * as d3 from 'd3-geo';
import { presimplify, simplify as tsimp } from 'topojson-simplify';
let topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
topo = tsimp(presimplify(topo), 0.003);
const all = feature(topo, topo.objects.countries).features;
const t110 = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-110m.json'));
const all110 = feature(t110, t110.objects.countries).features;
const ES = { mx:484, gt:320, sv:222, hn:340, ni:558, cr:188, pa:591, cu:192, do:214, pr:630, ve:862, co:170, ec:218, pe:604, bo:68, cl:152, ar:32, uy:858, py:600, es:724, gq:226 };
const byNum = n => all.find(f => +f.id === n);
const W = 600, H = 800;
const bbox = { type:'MultiPoint', coordinates:[[-118,33],[-118,-56],[-34,-56],[-34,33],[-76,-56],[-76,33]] };
const proj = d3.geoNaturalEarth1().fitExtent([[10,10],[W-10,H-10]], bbox).clipExtent([[0,0],[W,H]]);
const round = s => s.replace(/(\d+)\.(\d)\d*/g, '$1.$2').replace(/\.0(?=\D)/g,'');
const clipW = d3.geoPath(proj);
// achtergrondland: alles wat in beeld valt, behalve de Spaanstalige landen
const nums = new Set(Object.values(ES));
const inView = f => { const b = d3.geoBounds(f); return b[1][0] > -125 && b[0][0] < -30 && b[1][1] > -60 && b[0][1] < 40; };
// kleine eilandjes weg (minder bytes)
function simplify(f, minArea) {
  const g = f.geometry; if (g.type !== 'MultiPolygon') return f;
  const keep = g.coordinates.filter(p => d3.geoArea({type:'Polygon',coordinates:p}) > minArea);
  return { ...f, geometry: { type:'MultiPolygon', coordinates: keep.length ? keep : g.coordinates } };
}
const bg = all110.filter(f => !nums.has(+f.id) && inView(f)).map(f => clipW(simplify(f, 2e-5))).filter(Boolean).join('');
const out = { w: W, h: H, bg: round(bg), c: {} };
for (const [id, n] of Object.entries(ES)) {
  if (id === 'es' || id === 'gq') continue;
  let f = simplify(byNum(n), id === 'pr' || id === 'cu' || id==='do' ? 1e-6 : 6e-6);
  out.c[id] = { d: round(clipW(f)), p: clipW.centroid(byNum(n)).map(v => Math.round(v)) };
}
// inzet Spanje (+ Canarische eilanden) en Equatoriaal-Guinea rechtsboven in de oceaan
function inset(id, n, box, minA, keep) {
  let f = simplify(byNum(n), minA);
  if (keep) f = { ...f, geometry: { type:'MultiPolygon', coordinates: f.geometry.coordinates.filter(keep) } };
  const pr = d3.geoMercator().fitExtent([[box[0]+8, box[1]+8],[box[0]+box[2]-8, box[1]+box[3]-8]], f);
  const p = d3.geoPath(pr);
  out.c[id] = { d: round(p(f)), p: p.centroid(f).map(v => Math.round(v)), box };
}
inset('es', 724, [452, 18, 132, 104], 1e-5, p => p[0][0][0] > -10);
inset('gq', 226, [496, 134, 88, 74], 1e-7);
fs.writeFileSync('map.json', JSON.stringify(out));
fs.writeFileSync(process.argv[2] || 'es.js', `/* Kaart voor de uitbreiding «Op reis» (Spaans): Latijns-Amerika, met Spanje en Equatoriaal-Guinea als inzet.
   Gemaakt met tools/kaart-maken.mjs uit Natural Earth (publiek domein, via world-atlas). Niet met de hand bewerken. */
(function (S) {
  'use strict';
  (S.MAPS || (S.MAPS = {})).es = ${JSON.stringify(out)};
})(window.SPT);
`);
console.log(fs.statSync('map.json').size, Object.fromEntries(Object.entries(out.c).map(([k,v])=>[k,v.p])));
