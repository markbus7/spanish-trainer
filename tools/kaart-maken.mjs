/* Maakt de kaarten van «Op reis»: content/kaarten/<taal>.js (één per doeltaal). Eenmalig, buiten de app:
   npm i world-atlas@2 topojson-client@3 topojson-simplify@3 d3-geo@3 && node tools/kaart-maken.mjs <taal> [uitvoer.js]
   Talen: es (Latijns-Amerika + inzet Spanje/Eq.-Guinea), en (wereldkaart), nl (Nederland en België + inzetten),
   fr (Canada, Haïti en Afrika + kader met Frankrijk, België en Zwitserland);
   tr (van Nederland tot Azerbeidzjan); de (Midden-Europa: Duitsland, Oostenrijk, Zwitserland, Liechtenstein, Luxemburg, Oost-België).
   Nieuwe taal: voeg hieronder een kaart toe (landcode → ISO-nummer uit Natural Earth), en zet de vlagknoppen
   (pin) in de landenlijst van die taal (content/<cursus>/landen.js). */
import fs from 'fs';
import { feature } from 'topojson-client';
import * as d3 from 'd3-geo';
import { presimplify, simplify as tsimp } from 'topojson-simplify';
let topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
topo = tsimp(presimplify(topo), 0.003);
const all = feature(topo, topo.objects.countries).features;
const t110 = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-110m.json'));
const all110 = feature(t110, t110.objects.countries).features;
const byNum = n => all.find(f => +f.id === n);
const round = s => s.replace(/(\d+)\.(\d)\d*/g, '$1.$2').replace(/\.0(?=\D)/g, '');
// kleine eilandjes weg (minder bytes)
function simplify(f, minArea) {
  const g = f.geometry; if (g.type !== 'MultiPolygon') return f;
  const keep = g.coordinates.filter(p => d3.geoArea({ type: 'Polygon', coordinates: p }) > minArea);
  return { ...f, geometry: { type: 'MultiPolygon', coordinates: keep.length ? keep : g.coordinates } };
}
const only = (f, keep) => keep && f.geometry.type === 'MultiPolygon' ? { ...f, geometry: { ...f.geometry, coordinates: f.geometry.coordinates.filter(keep) } } : f;
/* Inzet: een land in een eigen kader (box = [x, y, b, h]) met een eigen projectie. */
function inset(out, id, n, box, minA, keep) {
  const f = only(simplify(byNum(n), minA), keep);
  const pr = d3.geoMercator().fitExtent([[box[0] + 8, box[1] + 8], [box[0] + box[2] - 8, box[1] + box[3] - 8]], f);
  const p = d3.geoPath(pr);
  out.c[id] = { d: round(p(f)), p: p.centroid(f).map(v => Math.round(v)), box };
}

const MAPS = {
  /* Spaans: Latijns-Amerika, met Spanje en Equatoriaal-Guinea als inzet rechtsboven in de oceaan. */
  es() {
    const ES = { mx: 484, gt: 320, sv: 222, hn: 340, ni: 558, cr: 188, pa: 591, cu: 192, do: 214, pr: 630, ve: 862, co: 170, ec: 218, pe: 604, bo: 68, cl: 152, ar: 32, uy: 858, py: 600, es: 724, gq: 226 };
    const W = 600, H = 800;
    const bbox = { type: 'MultiPoint', coordinates: [[-118, 33], [-118, -56], [-34, -56], [-34, 33], [-76, -56], [-76, 33]] };
    const proj = d3.geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H - 10]], bbox).clipExtent([[0, 0], [W, H]]);
    const clipW = d3.geoPath(proj);
    const nums = new Set(Object.values(ES));
    const inView = f => { const b = d3.geoBounds(f); return b[1][0] > -125 && b[0][0] < -30 && b[1][1] > -60 && b[0][1] < 40; };
    const bg = all110.filter(f => !nums.has(+f.id) && inView(f)).map(f => clipW(simplify(f, 2e-5))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    for (const [id, n] of Object.entries(ES)) {
      if (id === 'es' || id === 'gq') continue;
      const f = simplify(byNum(n), id === 'pr' || id === 'cu' || id === 'do' ? 1e-6 : 6e-6);
      out.c[id] = { d: round(clipW(f)), p: clipW.centroid(byNum(n)).map(v => Math.round(v)) };
    }
    inset(out, 'es', 724, [452, 18, 132, 104], 1e-5, p => p[0][0][0] > -10);
    inset(out, 'gq', 226, [496, 134, 88, 74], 1e-7);
    return { out, title: 'Latijns-Amerika, met Spanje en Equatoriaal-Guinea als inzet' };
  },
  /* Engels: de hele wereld (zonder Antarctica), alle Engelstalige landen in kleur. */
  en() {
    const EN = { us: 840, ca: 124, jm: 388, gb: 826, ie: 372, ng: 566, ke: 404, za: 710, in: 356, sg: 702, ph: 608, au: 36, nz: 554 };
    const W = 1000, H = 520;
    const bbox = { type: 'MultiPoint', coordinates: [[-168, 72], [-168, -47], [179, -47], [179, 72], [0, 72], [0, -47]] };
    const proj = d3.geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], bbox).clipExtent([[0, 0], [W, H]]);
    const path = d3.geoPath(proj).digits(0); // hele pixels: op een wereldkaart van 1000 breed genoeg
    const nums = new Set(Object.values(EN));
    const bg = all110.filter(f => !nums.has(+f.id) && +f.id !== 10).map(f => path(simplify(f, 1e-4))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    for (const [id, n] of Object.entries(EN)) {
      // grote landen uit de grovere kaart (minder bytes), kleine en eilanden uit de fijnere
      const small = ['sg', 'jm', 'ph', 'nz', 'gb', 'ie'].includes(id);
      const f = small ? simplify(byNum(n), ['sg', 'jm'].includes(id) ? 0 : 4e-6) : simplify(all110.find(x => +x.id === n), 4e-5);
      out.c[id] = { d: round(path(f)), p: path.centroid(id === 'us' ? only(byNum(n), p => p[0][0][0] > -130) : byNum(n)).map(v => Math.round(v)) };
    }
    return { out, title: 'de wereld, met de Engelstalige landen in kleur', k: 1.25 };
  },
  /* Nederlands: Nederland en België groot, met Suriname, de ABC-eilanden en Zuid-Afrika (Afrikaans) als inzet. */
  nl() {
    const NL = { nl: 528, be: 56 };
    const W = 600, H = 640;
    const bbox = { type: 'MultiPoint', coordinates: [[1.4, 53.9], [8.4, 53.9], [8.4, 49.2], [1.4, 49.2]] };
    const proj = d3.geoMercator().fitExtent([[150, 10], [W - 10, H - 10]], bbox).clipExtent([[0, 0], [W, H]]);
    const path = d3.geoPath(proj);
    const nums = new Set(Object.values(NL));
    const bg = all.filter(f => !nums.has(+f.id)).map(f => path(simplify(f, 1e-7))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    const europe = p => p[0][0][0] > 0 && p[0][0][1] > 45;
    for (const [id, n] of Object.entries(NL)) {
      const f = only(simplify(byNum(n), 5e-8), europe);
      out.c[id] = { d: round(path(f)), p: path.centroid(f).map(v => Math.round(v)) };
    }
    inset(out, 'sr', 740, [12, 16, 150, 150], 1e-7);
    inset(out, 'cw', 531, [12, 196, 150, 96], 0);
    inset(out, 'za', 710, [12, 470, 170, 150], 1e-6, p => p[0][0][0] < 33);
    // Aruba naast Curaçao in hetzelfde kader (zelfde projectie als Curaçao)
    const cw = only(byNum(531)), aw = byNum(533), both = { type: 'FeatureCollection', features: [cw, aw] }, box = out.c.cw.box;
    const pr = d3.geoMercator().fitExtent([[box[0] + 8, box[1] + 14], [box[0] + box[2] - 8, box[1] + box[3] - 8]], both), p2 = d3.geoPath(pr);
    out.c.cw = { d: round(p2(cw) + p2(aw)), p: p2.centroid(cw).map(v => Math.round(v)), box };
    return { out, title: 'Nederland en België, met Suriname, Curaçao en Aruba en Zuid-Afrika als inzet' };
  },
  /* Duits: Midden-Europa met Duitsland, Oostenrijk, Zwitserland, Liechtenstein, Luxemburg en België (Oost-België). */
  de() {
    const DE = { de: 276, at: 40, ch: 756, li: 438, lu: 442, be: 56 };
    const W = 600, H = 600;
    const bbox = { type: 'MultiPoint', coordinates: [[2.3, 55.2], [17.4, 55.2], [17.4, 45.6], [2.3, 45.6]] };
    const proj = d3.geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], bbox).clipExtent([[0, 0], [W, H]]);
    const path = d3.geoPath(proj);
    const nums = new Set(Object.values(DE));
    const bg = all.filter(f => !nums.has(+f.id)).map(f => path(simplify(f, 1e-7))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    for (const [id, n] of Object.entries(DE)) {
      const f = simplify(byNum(n), id === 'de' ? 2e-8 : 0);
      // België: de vlag op Oost-België (Eupen), waar Duits de officiële taal is
      out.c[id] = { d: round(path(f)), p: (id === 'be' ? proj([6.04, 50.63]) : path.centroid(f)).map(v => Math.round(v)) };
    }
    return { out, title: 'Midden-Europa: Duitsland, Oostenrijk, Zwitserland, Liechtenstein, Luxemburg en Oost-België' };
  },
  /* Frans: de Atlantische wereld (Canada/Québec, Haïti, West- en Centraal-Afrika), met Frankrijk, België en Zwitserland
     samen in één uitvergroot kader midden in de oceaan. */
  fr() {
    const FR = { ca: 124, ht: 332, ma: 504, sn: 686, ci: 384, cd: 180 };
    const EU = { fr: 250, be: 56, ch: 756 };
    const W = 1000, H = 600;
    const bbox = { type: 'MultiPoint', coordinates: [[-97, 60], [-97, -15], [44, -15], [44, 60], [-26, 60], [-26, -15]] };
    const proj = d3.geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], bbox).clipExtent([[0, 0], [W, H]]);
    const path = d3.geoPath(proj).digits(0);
    const nums = new Set(Object.values(FR));
    const inView = f => { const b = d3.geoBounds(f); return b[1][0] > -110 && b[0][0] < 55 && b[1][1] > -25 && b[0][1] < 68; };
    const bg = all110.filter(f => !nums.has(+f.id) && +f.id !== 10 && inView(f)).map(f => path(simplify(f, 1e-4))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    for (const [id, n] of Object.entries(FR)) {
      const f = id === 'ht' ? simplify(byNum(n), 0) : simplify(all110.find(x => +x.id === n), 4e-5);
      // Canada: het zwaartepunt op Québec leggen (de Franstalige provincie)
      out.c[id] = { d: round(path(f)), p: (id === 'ca' ? proj([-72, 49]) : path.centroid(byNum(n))).map(v => Math.round(v)) };
    }
    // Europa uitvergroot: alleen het vasteland van Frankrijk (plus Corsica), België en Zwitserland, in één kader
    const box = [296, 158, 240, 240];
    const europe = p => p[0][0][0] > -6 && p[0][0][0] < 11 && p[0][0][1] > 40 && p[0][0][1] < 52;
    const fs3 = Object.fromEntries(Object.entries(EU).map(([id, n]) => [id, only(simplify(byNum(n), 2e-6), europe)]));
    const pr = d3.geoMercator().fitExtent([[box[0] + 10, box[1] + 10], [box[0] + box[2] - 10, box[1] + box[3] - 10]], { type: 'FeatureCollection', features: Object.values(fs3) });
    const p2 = d3.geoPath(pr);
    for (const id of Object.keys(EU)) out.c[id] = { d: round(p2(fs3[id])), p: p2.centroid(fs3[id]).map(v => Math.round(v)), box };
    return { out, title: 'de Atlantische wereld (Canada, Haïti, Afrika), met Frankrijk, België en Zwitserland uitvergroot', k: 1.25 };
  },
  /* Turks: van Nederland tot Azerbeidzjan. Turkije en Cyprus, de Balkan (Bulgarije), de Turkse gemeenschap in Duitsland
     en Nederland, en Azerbeidzjan (zustertaal Azerbeidzjaans). */
  tr() {
    const TR = { tr: 792, cy: 196, bg: 100, de: 276, nl: 528, az: 31 };
    const W = 900, H = 560;
    const bbox = { type: 'MultiPoint', coordinates: [[0.5, 55.2], [51.5, 55.2], [51.5, 33.8], [0.5, 33.8]] };
    const proj = d3.geoMercator().fitExtent([[8, 8], [W - 8, H - 8]], bbox).clipExtent([[0, 0], [W, H]]);
    const path = d3.geoPath(proj);
    const nums = new Set(Object.values(TR));
    const ncy = all.find(f => f.properties && f.properties.name === 'N. Cyprus');
    const inView = f => { const b = d3.geoBounds(f); return b[1][0] > -6 && b[0][0] < 58 && b[1][1] > 30 && b[0][1] < 60; };
    const bg = all.filter(f => !nums.has(+f.id) && f !== ncy && inView(f)).map(f => path(simplify(f, 3e-6))).filter(Boolean).join('');
    const out = { w: W, h: H, bg: round(bg), c: {} };
    const europe = p => p[0][0][0] > 0 && p[0][0][1] > 45;
    for (const [id, n] of Object.entries(TR)) {
      const f = id === 'nl' ? only(simplify(byNum(n), 1e-7), europe) : simplify(byNum(n), id === 'cy' ? 0 : 1e-6);
      // Cyprus: het hele eiland (zuid en noord) als één vorm
      out.c[id] = { d: round(path(f) + (id === 'cy' && ncy ? path(ncy) : '')), p: path.centroid(f).map(v => Math.round(v)) };
    }
    return { out, title: 'van Nederland tot Azerbeidzjan, met Turkije, Cyprus, Bulgarije, Duitsland, Nederland en Azerbeidzjan in kleur', k: 1.1 };
  }
};

const lang = process.argv[2] || 'es';
const { out, title, k } = MAPS[lang]();
if (k) out.k = k;
const file = process.argv[3] || `content/kaarten/${lang}.js`;
const guard = `\n  if (S.course && S.course.target !== '${lang}') return; // alleen voor cursussen met deze doeltaal`;
fs.writeFileSync(file, `/* Kaart voor de uitbreiding «Op reis» (${lang}): ${title}.
   Gemaakt met tools/kaart-maken.mjs uit Natural Earth (publiek domein, via world-atlas). Niet met de hand bewerken. */
(function (S) {
  'use strict';${guard}
  (S.MAPS || (S.MAPS = {})).${lang} = ${JSON.stringify(out)};
})(window.SPT);
`);
console.log(fs.statSync(file).size, Object.fromEntries(Object.entries(out.c).map(([id, v]) => [id, v.p])));
