/* Controleert lesstof, vervoegingen en antwoordcontrole.  Gebruik: node tests/run.js */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, setTimeout, clearTimeout });
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['js/core.js', 'js/badges.js', 'js/i18n.js', 'js/i18n-es.js', 'js/conjugate.js', 'js/curriculum.js', 'content/a1.js', 'content/a2.js', 'content/a1-plus.js', 'content/a2-plus.js', 'content/b1.js', 'content/b2.js', 'content/b2-2.js', 'content/extra.js', 'content/landen.js', 'content/landen-praten.js', 'content/kaarten/es.js', 'content/oefeningen-plus.js', 'content/synoniemen.js', 'content/uitleg.js', 'js/uitzonderingen.js', 'content/regiowoorden.js', 'js/regio.js', 'js/gen.js', 'js/games.js', 'js/words.js', 'js/vocab.js', 'js/woordtoets.js', 'js/dagplan.js', 'js/gloss.js', 'js/mistakes.js', 'js/docenten.js', 'js/tutor.js', 'js/ai.js', 'js/mundo.js', 'js/begrippen.js', 'js/begrippen-fr.js', 'js/begrippen-de.js', 'js/begrippen-tr.js', 'js/zwak.js', 'content/beslisregels.js', 'js/strategie.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const S = ctx.SPT;
let fails = 0, checks = 0;
const ok = (cond, msg) => { checks++; if (!cond) { fails++; console.log('✗ ' + msg); } };

/* ---------- vervoegingen ---------- */
const known = {
  'ser|pres': 'soy eres es somos son', 'estar|pres': 'estoy estás está estamos están', 'ir|pres': 'voy vas va vamos van',
  'tener|pres': 'tengo tienes tiene tenemos tienen', 'querer|pres': 'quiero quieres quiere queremos quieren',
  'poder|pres': 'puedo puedes puede podemos pueden', 'pedir|pres': 'pido pides pide pedimos piden', 'jugar|pres': 'juego juegas juega jugamos juegan',
  'decir|pres': 'digo dices dice decimos dicen', 'venir|pres': 'vengo vienes viene venimos vienen', 'conocer|pres': 'conozco conoces conoce conocemos conocen',
  'seguir|pres': 'sigo sigues sigue seguimos siguen', 'oír|pres': 'oigo oyes oye oímos oyen', 'construir|pres': 'construyo construyes construye construimos construyen',
  'hablar|pret': 'hablé hablaste habló hablamos hablaron', 'comer|pret': 'comí comiste comió comimos comieron', 'vivir|pret': 'viví viviste vivió vivimos vivieron',
  'llegar|pret': 'llegué llegaste llegó llegamos llegaron', 'buscar|pret': 'busqué buscaste buscó buscamos buscaron', 'empezar|pret': 'empecé empezaste empezó empezamos empezaron',
  'leer|pret': 'leí leíste leyó leímos leyeron', 'dormir|pret': 'dormí dormiste durmió dormimos durmieron', 'pedir|pret': 'pedí pediste pidió pedimos pidieron',
  'sentir|pret': 'sentí sentiste sintió sentimos sintieron', 'hacer|pret': 'hice hiciste hizo hicimos hicieron', 'tener|pret': 'tuve tuviste tuvo tuvimos tuvieron',
  'ir|pret': 'fui fuiste fue fuimos fueron', 'dar|pret': 'di diste dio dimos dieron', 'ver|pret': 'vi viste vio vimos vieron', 'decir|pret': 'dije dijiste dijo dijimos dijeron',
  'hablar|imp': 'hablaba hablabas hablaba hablábamos hablaban', 'vivir|imp': 'vivía vivías vivía vivíamos vivían', 'ser|imp': 'era eras era éramos eran',
  'ir|imp': 'iba ibas iba íbamos iban', 'ver|imp': 'veía veías veía veíamos veían',
  'hablar|fut': 'hablaré hablarás hablará hablaremos hablarán', 'tener|fut': 'tendré tendrás tendrá tendremos tendrán', 'hacer|fut': 'haré harás hará haremos harán',
  'decir|fut': 'diré dirás dirá diremos dirán', 'salir|fut': 'saldré saldrás saldrá saldremos saldrán', 'poder|cond': 'podría podrías podría podríamos podrían',
  'hablar|subj': 'hable hables hable hablemos hablen', 'tener|subj': 'tenga tengas tenga tengamos tengan', 'ir|subj': 'vaya vayas vaya vayamos vayan',
  'dormir|subj': 'duerma duermas duerma durmamos duerman', 'pedir|subj': 'pida pidas pida pidamos pidan', 'empezar|subj': 'empiece empieces empiece empecemos empiecen',
  'buscar|subj': 'busque busques busque busquemos busquen', 'llegar|subj': 'llegue llegues llegue lleguemos lleguen', 'sentir|subj': 'sienta sientas sienta sintamos sientan',
  'levantarse|pres': 'me levanto|te levantas|se levanta|nos levantamos|se levantan', 'acostarse|pres': 'me acuesto|te acuestas|se acuesta|nos acostamos|se acuestan',
  'vestirse|pres': 'me visto|te vistes|se viste|nos vestimos|se visten', 'despertarse|pres': 'me despierto|te despiertas|se despierta|nos despertamos|se despiertan',
  'hacer|perf': 'he hecho|has hecho|ha hecho|hemos hecho|han hecho', 'volver|perf': 'he vuelto|has vuelto|ha vuelto|hemos vuelto|han vuelto',
  'leer|perf': 'he leído|has leído|ha leído|hemos leído|han leído', 'ir|perf': 'he ido|has ido|ha ido|hemos ido|han ido',
  'dormir|prog': 'estoy durmiendo|estás durmiendo|está durmiendo|estamos durmiendo|están durmiendo', 'leer|prog': 'estoy leyendo|estás leyendo|está leyendo|estamos leyendo|están leyendo',
  'decir|prog': 'estoy diciendo|estás diciendo|está diciendo|estamos diciendo|están diciendo',
  'hablar|impsubj': 'hablara hablaras hablara habláramos hablaran', 'tener|impsubj': 'tuviera tuvieras tuviera tuviéramos tuvieran',
  'ser|impsubj': 'fuera fueras fuera fuéramos fueran', 'decir|impsubj': 'dijera dijeras dijera dijéramos dijeran',
  'dormir|impsubj': 'durmiera durmieras durmiera durmiéramos durmieran', 'leer|impsubj': 'leyera leyeras leyera leyéramos leyeran',
  'saber|impsubj': 'supiera supieras supiera supiéramos supieran', 'haber|impsubj': 'hubiera hubieras hubiera hubiéramos hubieran',
  'hacer|condperf': 'habría hecho|habrías hecho|habría hecho|habríamos hecho|habrían hecho', 'ver|plussubj': 'hubiera visto|hubieras visto|hubiera visto|hubiéramos visto|hubieran visto',
  'decir|perfsubj': 'haya dicho|hayas dicho|haya dicho|hayamos dicho|hayan dicho', 'volver|futperf': 'habré vuelto|habrás vuelto|habrá vuelto|habremos vuelto|habrán vuelto'
};
for (const [k, v] of Object.entries(known)) {
  const [verb, tense] = k.split('|');
  const want = v.includes('|') ? v.split('|') : v.split(' ');
  const got = S.conj.table(verb, tense);
  ok(got && JSON.stringify(got) === JSON.stringify(want), `vervoeging ${verb} ${tense}: ${got && got.join(', ')} ≠ ${want.join(', ')}`);
}
const imper = { hablar: ['habla', 'hable', 'hablen'], comer: ['come', 'coma', 'coman'], decir: ['di', 'diga', 'digan'], hacer: ['haz', 'haga', 'hagan'], ir: ['ve', 'vaya', 'vayan'],
  ser: ['sé', 'sea', 'sean'], tener: ['ten', 'tenga', 'tengan'], venir: ['ven', 'venga', 'vengan'], poner: ['pon', 'ponga', 'pongan'], salir: ['sal', 'salga', 'salgan'],
  seguir: ['sigue', 'siga', 'sigan'], cruzar: ['cruza', 'cruce', 'crucen'], pensar: ['piensa', 'piense', 'piensen'], dormir: ['duerme', 'duerma', 'duerman'], dar: ['da', 'dé', 'den'], estar: ['está', 'esté', 'estén'] };
for (const [v, want] of Object.entries(imper)) { const t = S.conj.table(v, 'imper'); ok(t && [t[1], t[2], t[4]].join() === want.join(), `imperativo ${v}: ${t && [t[1], t[2], t[4]]}`); }
ok(S.conj.alternatives('ducharse', 'prog', 0).includes('estoy duchándome'), 'alternatief estoy duchándome');
ok(S.conj.alternatives('levantarse', 'ira', 3).includes('vamos a levantarnos'), 'alternatief vamos a levantarnos');

/* ---------- antwoordcontrole ---------- */
const C = S.check.check;
ok(C('Me llamo Mark', ['Me llamo Mark.']).ok, 'leestekens negeren');
ok(C('esta', ['está']).ok && C('esta', ['está']).warn === 'accent', 'accent vergeten = goed met waarschuwing');
ok(!C('esta', ['está'], { strict: true }).ok, 'strenge accenten');
ok(C('soy de holanda', ['Yo soy de Holanda.']).ok, 'voornaamwoord optioneel (antwoord met)');
ok(C('yo soy de holanda', ['Soy de Holanda.']).ok, 'voornaamwoord optioneel (gebruiker met)');
ok(C('me llamo', ['(yo) me llamo']).ok, 'haakjes optioneel');
ok(C('arquitectur', ['arquitectura']).warn === 'typo', 'kleine typfout herkend');
ok(!C('soy', ['eres']).ok, 'fout antwoord');
ok(!C('tengo', ['tienes'], { noTypo: true }).ok, 'geen typfout-coulance bij vervoegen');
ok(C('ano', ['año']).warn === 'enye', 'ñ-waarschuwing');

/* ---------- lesstof ---------- */
const units = S.C.all();
ok(units.length === 52, 'aantal units = ' + units.length);
const ids = new Set();
const tags = S.C.TAGS;
for (const u of units) {
  const where = u.id;
  ok(!ids.has(u.id), 'dubbel id ' + u.id); ids.add(u.id);
  ['id', 'level', 'title', 'nl', 'icon'].forEach(k => ok(typeof u[k] === 'string' && u[k], where + ' mist ' + k));
  ok(Array.isArray(u.goals) && u.goals.length >= 2, where + ' doelen');
  ok(u.vocab.length >= 20, where + ' te weinig woorden: ' + u.vocab.length);
  const seen = new Set();
  u.vocab.forEach((w, i) => {
    ok(Array.isArray(w) && w.length >= 2 && w.length <= 3 && w.every(x => typeof x === 'string' && x.trim()), where + ' woord ' + i);
    ok(!seen.has(w[0]), where + ' dubbel woord ' + w[0]); seen.add(w[0]);
  });
  ok(u.grammar.length >= 2, where + ' grammatica');
  u.grammar.forEach((g, gi) => {
    ok(g.t && g.html, where + ' grammatica ' + gi);
    const open = (g.html.match(/<(b|i|p|s)>/g) || []).length, close = (g.html.match(/<\/(b|i|p|s)>/g) || []).length;
    ok(open === close, where + ' grammatica ' + gi + ' html-tags niet in balans');
    if (g.table) ok(g.table.every(r => r.length === g.table[0].length), where + ' tabel ' + gi + ' kolommen');
  });
  ok(u.ex.length >= 12, where + ' te weinig oefeningen: ' + u.ex.length);
  u.ex.forEach((e, i) => {
    const w = where + ' ex' + i;
    ok(['mc', 'cloze', 'tr', 'order', 'match'].includes(e.t), w + ' type');
    if (e.tag) ok(tags[e.tag], w + ' onbekende tag ' + e.tag);
    if (e.t === 'mc') { ok(e.q && e.o.length >= 2 && new Set(e.o).size === e.o.length, w + ' mc opties'); }
    if (e.t === 'cloze') {
      ok((e.s.match(/___/g) || []).length === 1, w + ' cloze moet precies één ___ hebben');
      ok(Array.isArray(e.a) && e.a.length, w + ' cloze antwoord');
      if (e.o) ok(e.o[0] === e.a[0] && new Set(e.o).size === e.o.length, w + ' cloze opties: eerste moet het antwoord zijn');
      if (!e.o) ok(e.h || e.nl, w + ' cloze zonder opties heeft hint/vertaling nodig');
    }
    if (e.t === 'tr') ok(e.nl && e.a.length, w + ' vertaling');
    if (e.t === 'order') ok(e.s.split(' ').length >= 3, w + ' order');
    if (e.t === 'match') ok(e.p.length >= 3 && e.p.length <= 6, w + ' match');
  });
  ok(u.dialogue && u.dialogue.lines.length >= 6, where + ' dialoog');
  u.dialogue.lines.forEach((l, i) => ok(l.length === 3 && l.every(Boolean), where + ' dialoogregel ' + i));
  ok(u.dialogue.q.length >= 3 && u.dialogue.q.every(q => new Set(q.o).size === q.o.length), where + ' dialoogvragen');
  ok(u.culture && u.culture.html, where + ' cultuur');
  ok(u.reading && u.reading.t && u.reading.p.length >= 3, where + ' leestekst');
  if (u.reading) {
    u.reading.p.forEach((pp, i) => ok(pp.length === 2 && pp.every(x => typeof x === 'string' && x.trim()), where + ' leestekst alinea ' + i));
    ok(u.reading.q.length >= 3 && u.reading.q.every(q => q.t === 'mc' && new Set(q.o).size === q.o.length), where + ' leesvragen');
  }
  ok(u.say.length >= 2 && u.task && u.task.model && u.scenario && u.scenario.role, where + ' toepassen');
  (u.verbs || []).forEach(v => ok(S.conj.info(v), where + ' werkwoord onbekend: ' + v));
  (u.tenses || []).forEach(t => ok(S.conj.TENSES[t], where + ' tijd onbekend: ' + t));
  // sessies genereren zonder fouten
  for (const st of S.Gen.STEPS) {
    const ses = S.Gen.stepSession(u, st.id);
    ok(ses && ses.items.length && ses.items.every(Boolean), where + ' sessie ' + st.id);
    ses.items.forEach(it => { if (it.kind === 'mc') ok(it.options.includes(it.answer) && new Set(it.options).size === it.options.length, where + ' ' + st.id + ' mc-item opties ' + (it.prompt || it.q || it.sentence)); });
    ses.items.forEach(it => { if (it.kind === 'type') ok(it.answers && it.answers.length && it.answers.every(Boolean), where + ' ' + st.id + ' type-item zonder antwoord'); });
  }
}
// hervatte toets van vóór v1.16.1 (leesvraag zonder src) krijgt de tekst er weer bij
{ const u = units.find(u => u.reading); const it = { ...S.Gen.stepSession(u, 'test').items.find(it => it.src) }; delete it.src;
  const back = S.Paused.unpack(S.Paused.pack({ queue: [it], idx: 0, graded: new Map(), mistakes: [], xp: 0, streak: 0, bestStreak: 0, activeMs: 0, paidXp: 0, paidMs: 0 })).queue;
  S.Gen.attachSrc(back); ok(back[0].src && back[0].src.reading === u.reading, 'hervatte leesvraag krijgt tekst terug'); }
// leesvraag in de unittoets brengt de tekst mee (📖 Tekst), anders kun je hem niet beantwoorden
for (const u of units.filter(u => u.reading)) {
  const rq = S.Gen.stepSession(u, 'test').items.filter(it => it.skill === 'read' && it.q && it.q.startsWith('«'));
  ok(rq.length === 1 && rq[0].src && rq[0].src.kind === 'reading' && rq[0].src.reading === u.reading, u.id + ' unittoets: leesvraag zonder tekst');
}
['A1', 'A2', 'B1'].forEach(l => ok(S.placement.filter(q => q.lv === l).length >= 16, 'niveautest: genoeg vragen voor ' + l));
ok(S.placement.filter(q => q.lv === 'B2').length >= 8, 'niveautest: genoeg vragen voor B2');
ok(new Set(S.placement.map(q => q.q)).size === S.placement.length, 'niveautest: geen dubbele vragen');
S.placement.forEach((q, i) => ok(!/vosotros|vuestr/i.test(q.q + ' ' + q.o.join(' ')), 'niveautest zonder vosotros ' + i));
for (let r = 0; r < 20; r++) ['A1', 'A2', 'B1', 'B2'].forEach(l => {
  const b = S.Gen.levelTestBand(l);
  ok(b.items.length >= 8 && b.items.length <= 10, 'niveautest-blok ' + l + ': ' + b.items.length + ' vragen');
  b.items.forEach(it => ok(it.kind === 'mc' && it.options.includes(it.answer) && new Set(it.options).size === it.options.length && !it.srsId, 'niveautest-vraag ' + l + ' ' + (it.q || it.sentence)));
});
const LR = S.Gen.levelTestResult;
ok(LR({ A1: { ok: 9, n: 10 }, A2: { ok: 6, n: 10 } }).level === 'A1' && LR({ A1: { ok: 9, n: 10 }, A2: { ok: 6, n: 10 } }).next === 'A2', 'uitslag: A1 beheerst, op weg naar A2');
ok(LR({ A1: { ok: 5, n: 10 } }).level === null, 'uitslag: beginner');
ok(LR({ A1: { ok: 10, n: 10 }, A2: { ok: 8, n: 10 }, B1: { ok: 7, n: 10 }, B2: { ok: 3, n: 8 } }).level === 'B1', 'uitslag: B1');
{ // samenvoegen van testhistorie en spelstatistiek
  const a = { settings: {}, updated: 2, tests: [{ d: 1, level: 'A1', bands: {} }, { d: 3, level: 'A2', bands: {} }], games: { sopa: { n: 2, words: 10, good: 8 } } };
  const b = { settings: {}, updated: 1, tests: [{ d: 1, level: 'A1', bands: {} }, { d: 2, level: 'A2', bands: {} }], games: { sopa: { n: 3, words: 12, good: 9 }, volcan: { n: 1, words: 4, good: 4 } } };
  const m = S.Store.mergeStates(a, b);
  ok(m.tests.map(t => t.d).join() === '1,2,3', 'sync: niveautests samengevoegd');
  ok(m.games.sopa.n === 3 && m.games.volcan.words === 4, 'sync: spelstatistiek samengevoegd');
  ok(JSON.stringify(S.Store.mergeStates(m, m).tests) === JSON.stringify(m.tests), 'sync: idempotent');
}
S.placement.forEach((q, i) => ok(new Set(q.o).size === q.o.length, 'plaatsingsvraag ' + i));
ok(['A1', 'A2', 'B1', 'B2'].every(l => S.Gen.levelExam(l).items.length >= 20), 'niveau-examens');
ok(S.C.unitsOf('B1').length === 10, 'B1 heeft 10 units');

/* ---------- samenvoegen bij synchroniseren ---------- */
{
  const M = (a, b) => S.Store.mergeStates(a, b);
  const base = () => JSON.parse(JSON.stringify(S.Store.state));
  const a = base(), b = base();
  a.updated = 100; b.updated = 200;
  a.settings.aiKey = 'geheim'; b.settings.aiKey = ''; b.settings.goal = 30;
  a.units.u1 = { steps: { w1: true }, best: 0.5, done: false }; b.units.u1 = { steps: { w2: true }, best: 0.8, done: true }; b.units.u2 = { steps: { w1: true }, best: 0, done: false };
  a.srs.x = { d: 10, i: 3, e: 2.4, r: 2, l: 0, s: 1, t: 500 }; b.srs.x = { d: 5, i: 1, e: 2.4, r: 1, l: 0, s: 1, t: 400 }; b.srs.y = { d: 1, i: 1, e: 2.4, r: 1, l: 0, s: 2 };
  a.days['2026-01-01'] = { min: 10, xp: 50, items: 20, ok: 15, done: { review: true } }; b.days['2026-01-01'] = { min: 5, xp: 70, items: 10, ok: 9, done: {} };
  a.xp = 300; b.xp = 250; a.badges = ['first']; b.badges = ['goal'];
  a.streak = { cur: 3, best: 3, last: '2026-01-03' }; b.streak = { cur: 1, best: 5, last: '2026-01-02' };
  const m = M(a, b);
  ok(m.settings.goal === 30 && m.settings.aiKey === 'geheim', 'merge: instellingen van nieuwste, AI-sleutel blijft lokaal');
  ok(m.units.u1.done && m.units.u1.steps.w1 && m.units.u1.steps.w2 && m.units.u1.best === 0.8 && m.units.u2, 'merge: units samengevoegd');
  ok(m.srs.x.t === 500 && m.srs.y, 'merge: SRS meest recente kaart');
  ok(m.days['2026-01-01'].min === 10 && m.days['2026-01-01'].xp === 70 && m.days['2026-01-01'].done.review, 'merge: dagen');
  ok(m.xp === 300 && m.badges.length === 2 && m.streak.cur === 3 && m.streak.best === 5, 'merge: xp, badges, streak');
  ok(JSON.stringify(M(m, b)) === JSON.stringify(M(m, M(m, b))) && M(m, a).xp === 300, 'merge: idempotent');
  const r = base(); r.epoch = 999; r.updated = 1;
  ok(Object.keys(M(r, b).units).length === 0 && Object.keys(M(b, r).units).length === 0, 'merge: wissen (epoch) wint');
}

/* ---------- Op reis (uitbreiding Spaans per land) ---------- */
{
  const Mu = S.Mundo, M = S.MAPS.es, ps = Mu.list();
  ok(ps.length >= 21 && ['mx', 'co', 'ar', 'pa', 'es', 'gq'].every(id => Mu.get(id)), 'op reis: alle Spaanstalige landen, ook Spanje');
  ok(new Set(ps.map(p => p.id)).size === ps.length, 'op reis: unieke landcodes');
  ps.forEach(p => {
    ok(p.noShape || (M.c[p.id] && M.c[p.id].d.length > 20), 'op reis: ' + p.id + ' staat op de kaart');
    ok(p.pin && p.pin[0] >= 15 && p.pin[0] <= M.w - 15 && p.pin[1] >= 15 && p.pin[1] <= M.h - 15, 'op reis: ' + p.id + ' vlagknop binnen de kaart');
    ok(S.placeGroups.some(g => g.id === p.group), 'op reis: ' + p.id + ' heeft een groep');
    ok(p.hello && p.hello.length >= 2 && p.intro && p.sounds.length >= 2 && p.sounds.every(x => (x.length === 4 || x.length === 5) && x.every(Boolean) && x[4] !== x[2]), 'op reis: ' + p.id + ' begroeting, intro en klanken');
    ok(p.words.length >= 8 && p.words.every(w => w[0] && w[1] && (!w[2] || ['i', 'g'].includes(w[2]))), 'op reis: ' + p.id + ' woorden en labels');
    ok(new Set(p.words.map(w => w[0])).size === p.words.length, 'op reis: ' + p.id + ' geen dubbele woorden');
    ok(!p.unit || S.C.get(p.unit), 'op reis: ' + p.id + ' link naar unit bestaat');
    const pr = Mu.practice(p), qz = Mu.quiz(p);
    ok(pr.items.length >= p.words.length * 2 && qz.items.length === Math.min(10, p.words.length), 'op reis: ' + p.id + ' oefening en toets');
    ok([...pr.items, ...qz.items].every(it => it.kind !== 'mc' || (it.options.includes(it.answer) && new Set(it.options).size === it.options.length)), 'op reis: ' + p.id + ' meerkeuze heeft het antwoord, zonder dubbele opties');
    ok([...pr.items, ...qz.items].every(it => !it.srsId), 'op reis: ' + p.id + ' niets in de gewone herhaling');
    ok(qz.items.every(it => !it.word || !it.word.note.startsWith('grof') || it.q === 'Wat betekent dit?'), 'op reis: ' + p.id + ' grove woorden alleen herkennen');
  });
  ok(Mu.get('pa').sounds.find(x => x[2].includes('pelaos'))[4].startsWith('Voy para') && Mu.list().every(p => p.sounds.every(x => !/\b(vos|vosotros|che|po|pa’)\b/i.test(x[4] || ''))), 'op reis: neutrale versie van klankzinnen zonder lokale vormen');
  { // verdieping per land: voortgang en opdracht voor de docent
    const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep)); S.Store.state.places = {};
    const ar = Mu.get('ar');
    ok(!Mu.finish(ar, 'dialog', { ok: 3, total: 3 }).first && S.Store.state.places.ar.d && !S.Store.state.places.ar.stamp && Mu.status('ar') === 'seen', 'op reis: dialoog gedaan telt als bezocht, geeft geen stempel');
    const m = S.Store.mergeStates({ updated: 2, places: { ar: { v: 5, d: 9 } } }, { updated: 1, places: { ar: { v: 3, d: 4, t: 6 } } });
    ok(m.places.ar.d === 4 && m.places.ar.t === 6, 'op reis: dialoog en gesprek samenvoegen bij synchroniseren');
    S.Store.state = keep;
    const sys = S.AI.roleplaySystem(Mu.talkScenario(ar)), plain = S.AI.roleplaySystem(S.scenarios[0]);
    ok(/LOCAL VARIETY/.test(sys) && sys.includes('Argentinië') && sys.includes('che = ') && /never mark them as mistakes/i.test(sys) && /exception/.test(sys) && !sys.includes('boludo'), 'op reis: de docent praat zoals in het land, legt lokale woorden uit en rekent neutraal Spaans goed');
    ok(!/LOCAL VARIETY/.test(plain), 'op reis: gewone rollenspellen blijven neutraal');
    ok(Mu.talks().length === Mu.list().length && new Set(Mu.talks().map(x => x.id)).size === Mu.list().length, 'op reis: elk land een eigen gesprek');
  }
  const pa = Mu.get('pa');
  ok(Mu.search(pa, 'FRIN').length === 1 && Mu.search(pa, 'xopa').length === 1 && Mu.search(pa, 'vriend').length >= 1, 'op reis: zoeken zonder accenten/hoofdletters, Spaans en Nederlands');
  ok(Mu.search(pa, '').length === pa.words.length && Mu.search(pa, '', 'g').every(i => pa.words[i][2] === 'g') && Mu.search(pa, '', 'ok').every(i => !pa.words[i][2]), 'op reis: zoekfilters');
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep)); S.Store.state.places = {};
  const ar = Mu.get('ar');
  ok(Mu.status('ar') === 'new', 'op reis: nieuw land');
  ok(!Mu.finish(ar, 'quiz', { ok: 7, total: 10 }).first && Mu.status('ar') === 'seen' && S.Store.state.places.ar.best === 0.7, 'op reis: 70% = geen stempel');
  ok(Mu.finish(ar, 'quiz', { ok: 8, total: 10 }).first && Mu.status('ar') === 'stamp' && Mu.stamps() === 1, 'op reis: 80% = stempel');
  ok(!Mu.finish(ar, 'quiz', { ok: 10, total: 10 }).first && S.Store.state.places.ar.best === 1, 'op reis: tweede keer geen nieuwe stempel');
  S.Store.state = keep;
  const Mg = (a, b) => S.Store.mergeStates(a, b);
  if (Mg) {
    const a = { updated: 2, places: { ar: { v: 5, n: 1, best: 0.5 } } }, b = { updated: 1, places: { ar: { v: 3, n: 4, best: 0.9, stamp: 7 }, mx: { v: 9 } } };
    const m = Mg(a, b);
    ok(m.places.ar.v === 3 && m.places.ar.n === 4 && m.places.ar.best === 0.9 && m.places.ar.stamp === 7 && m.places.mx.v === 9, 'op reis: voortgang samenvoegen bij synchroniseren');
  }
}

/* ---------- opnames: alles wat een les voorleest, moet in de inspreeklijst staan ---------- */
{
  const list = JSON.parse(require('child_process').execFileSync(process.execPath, [path.join(root, 'tools/tts-texts.js')], { maxBuffer: 64 << 20 }).toString());
  const have = new Set(list.map(x => x.k));
  ok(list.every(x => x.k === S.Speech.clipKey(x.text, x.ns) && /^(es-[A-Z]{2}|en-[A-Z]{2}|nl-(NL|BE)|af-ZA|fr-(FR|BE|CH|CA)|de-(DE|AT|CH)|tr-TR|az-AZ)-\w+Neural$/.test(x.voice)), 'opnames: sleutels en stemnamen');
  // invulzinnen: voorgelezen met een stilte op het gat, hints tussen haakjes niet
  ok(JSON.stringify(S.Speech.gapParts('Did you ___ the email?')) === JSON.stringify(['Did you …', null, '… the email?']), 'invulzin: stukken rond het gat');
  ok(JSON.stringify(S.Speech.gapParts('¡___ la verdad! (decir, tú)')) === JSON.stringify([null, '… la verdad!']), 'invulzin: gat vooraan, hint weg');
  ok(S.Speech.gapParts('Hola') === null, 'invulzin: zonder gat');
  ok((S.placement || []).every(q => !q.q.includes('___') || q.nl), 'niveautest: elke invulzin heeft een vertaling');
  ok(S.Speech.key('¿Cómo  está usted?') === S.Speech.key('¿cómo está usted?'), 'opnames: sleutel negeert hoofdletters en spaties');
  const miss = new Set();
  const want = t => { if (t && !have.has(S.Speech.key(t))) miss.add(t); };
  for (const u of units) for (const st of S.Gen.STEPS) {
    for (const it of S.Gen.stepSession(u, st.id).items) {
      want(it.audio); if (it.speakPrompt) want(it.prompt); if (it.kind === 'listen' || it.kind === 'speak') want(it.text);
      if (it.word) want(it.word.es); if (it.pairs) it.pairs.forEach(p => want(p[0]));
      const exp = it.answer || (it.answers && it.answers[0]);
      if (it.sentence) want(it.sentence.replace('___', exp)); else if (it.speakAnswer) want(exp);
      if (it.conj) want(it.person + ' ' + exp);
    }
    u.dialogue.lines.forEach(l => want(l[1])); u.reading.p.forEach(p => want(p[0]));
  }
  { // dialogen: eigen opname per zin (naamruimte ch, stem van het personage), mannen met een mannenstem en vrouwen met een vrouwenstem
    const dlg = new Map(list.filter(x => x.ns === 'ch').map(x => [x.k, x.voice]));
    const male = v => /(Jorge|Gonzalo|Alonso|Tomas|Lorenzo|Alex|Juan|Andres|Luis|Roberto|Emilio|Manuel|Sebastian|Mateo|Marcelo|Mario|Rodrigo|Carlos|Federico|Victor|Alvaro|Javier)Neural$/.test(v);
    const G = { Mateo: 1, Diego: 1, Carlos: 1, Facundo: 1, Mesero: 1, Mark: 1, 'Sr. Huamán': 1, 'Guía Mauricio': 1, Sofía: 0, Juliana: 0, Ana: 0, Fer: 1, Yarisel: 0, Coralis: 0, 'Abuela Lupe': 0 };
    let bad = [];
    for (const u of units) u.dialogue && u.dialogue.lines.forEach(([w, es]) => {
      const v = dlg.get(S.Speech.clipKey(es, 'ch'));
      if (!v) bad.push('geen opname: ' + es); else if (w in G && male(v) !== !!G[w]) bad.push(w + ' → ' + v);
    });
    ok(!bad.length, 'opnames: dialoogstem past bij de spreker' + (bad.length ? ' (' + bad.slice(0, 3).join('; ') + ')' : ''));
  }
  ok(list.some(x => x.ns === 'en-es') && list.some(x => x.ns === 'nl-es') && list.filter(x => x.ns && !x.ns.startsWith('lupe') && x.ns !== 'ch').every(x => x.lv.every(l => l.startsWith(x.ns + ':'))), 'opnames: Engels en Nederlands met eigen naamruimte en niveaus');
  ok(!miss.size, 'opnames: ' + miss.size + ' teksten ontbreken, bv. ' + [...miss].slice(0, 5).join(' | '));
  // Profe Lupe: vaste zinnen zijn in beide stemvarianten ingesproken, ook die met een getal
  const L = S.Tutor.lines, lupeMiss = [];
  const lupe = es => ['girl', 'woman'].forEach(v => { if (!have.has(S.Speech.clipKey(es, 'lupe-' + v))) lupeMiss.push(v + ': ' + es); });
  [L.hello({ due: 37 }), L.hello({ due: 412 }), L.hello({ streak: 12 }), L.hello({ streak: 250 }), L.hello({ unit: units[0].title }),
    L.summary({ pct: 100, total: 9 }), L.summary({ pct: 75, total: 9, mistakes: 2 }), L.result({ level: 'B1' }), L.profile({ words: 20, days: 3 }),
    L.profile({ words: 137, days: 3 }), L.profile({ words: 1234, days: 9 }), L.profile({ words: 9999, days: 9 }), L.game(0.5), L.review, L.welcome]
    .forEach(x => lupe(x.es));
  lupe(L.streak(10)); lupe(L.voiceTest); units.forEach(u => (u.grammar || []).forEach(g => g.sum && lupe(g.sum)));
  ok(!lupeMiss.length, 'opnames: Lupe-zinnen ontbreken: ' + lupeMiss.slice(0, 4).join(' | '));
  ok(S.Speech.clipKey('Hola', 'lupe-girl') !== S.Speech.key('Hola') && S.Speech.clipKey('Hola') === S.Speech.key('Hola'), 'opnames: Lupe heeft eigen sleutels');
}

/* ---------- woordspellen ---------- */
{
  const G = S.Games.gen;
  ok(S.Games.GAMES.length === 5, 'spellen: vijf spellen');
  ok(G.plain('Niño está') === 'NIÑO ESTA' && G.plain('pingüino') === 'PINGUINO', 'spellen: accenten weg, ñ blijft');
  const gw = G.gameWord({ id: 'w|x|0', unit: 'x', es: 'el perro / la perra', nl: 'hond / teef' });
  ok(gw.key === 'perro' && gw.letters === 'PERRO' && gw.say === 'el perro' && gw.nl === 'hond', 'spellen: lidwoord eraf, voorleesvorm blijft');
  ok(G.gameWord({ id: 'a', es: '¿cómo estás?', nl: '' }).key === 'cómo estás', 'spellen: vraagtekens eraf');
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (const u of units) {
    const ws = S.C.words(u).map(G.gameWord).filter(Boolean);
    // woordzoeker: elk geplaatst woord staat echt in het veld
    const grid = ws.filter(w => G.FIT.grid(w, 11)).slice(0, 9);
    if (grid.length >= 4) {
      const P = G.wordSearch(grid, 12, { rnd, reverse: true });
      ok(P.placed.length >= Math.min(grid.length, 6), 'woordzoeker ' + u.id + ': genoeg woorden geplaatst');
      ok(P.placed.every(p => p.cells.map(([r, c]) => P.grid[r][c]).join('') === p.w.letters), 'woordzoeker ' + u.id + ': letters kloppen');
      ok(P.grid.every(r => r.every(x => /^[A-ZÑ]$/.test(x))), 'woordzoeker ' + u.id + ': veld helemaal gevuld');
    }
    // kruiswoord: kruisingen kloppen en elke rij van 2+ letters is een woord uit de lijst
    const cw = ws.filter(w => G.FIT.grid(w, 9));
    if (cw.length >= 4) {
      const P = G.crossword(cw, { rnd, want: 9, maxW: 13, maxH: 11 });
      const cell = {};
      let clash = false;
      P.words.forEach(p => p.cells.forEach(([r, c], i) => { const k = r + ',' + c; if (cell[k] && cell[k] !== p.w.letters[i]) clash = true; cell[k] = p.w.letters[i]; }));
      ok(!clash, 'kruiswoord ' + u.id + ': kruisingen kloppen');
      ok(P.words.length >= 3 && P.cols <= 13 && P.rows <= 11, 'kruiswoord ' + u.id + ': ' + P.words.length + ' woorden in ' + P.cols + '×' + P.rows);
      const runs = [], names = new Set(P.words.map(p => p.d + p.r + ',' + p.c + p.w.letters));
      for (const d of ['h', 'v']) for (let a = 0; a < (d === 'h' ? P.rows : P.cols); a++) {
        let run = '', st = null;
        for (let b = 0; b <= (d === 'h' ? P.cols : P.rows); b++) {
          const [r, c] = d === 'h' ? [a, b] : [b, a]; const x = cell[r + ',' + c];
          if (x) { if (!run) st = [r, c]; run += x; } else { if (run.length > 1) runs.push(d + st[0] + ',' + st[1] + run); run = ''; }
        }
      }
      ok(runs.every(x => names.has(x)), 'kruiswoord ' + u.id + ': geen losse lettercombinaties');
      ok(new Set(P.words.map(p => p.n)).size <= P.words.length && P.words.every(p => p.n >= 1), 'kruiswoord ' + u.id + ': nummering');
    }
    // husselaar: altijd dezelfde letters, nooit al goed
    ws.filter(G.FIT.phrase).forEach(w => {
      const k = w.key.replace(/ /g, ''), s = G.scramble(k, rnd).join('');
      ok([...s].sort().join('') === [...k].sort().join('') && (s !== k || new Set(k).size < 2), 'husselaar: ' + w.key);
    });
  }
  ok(['A1', 'A2', 'B1'].every(l => G.poolFor(l, x => G.FIT.grid(x, 10)).length >= 60), 'spellen: genoeg puzzelwoorden per niveau');
}

/* ---------- woordenboek en eigen woorden ---------- */
{
  const keep = S.Store.state;
  S.Store.state = JSON.parse(JSON.stringify(keep)); S.Store.state.myWords = {}; S.Store.state.srs = {};
  const W = S.Words;
  ok(W.search('perro', 'all').some(w => w.es.includes('perro')), 'woordenboek: vindt perro');
  ok(W.search('hond', 'all').some(w => w.es.includes('perro')), 'woordenboek: zoekt ook in het Nederlands');
  ok(W.search('', 'B1').every(w => w.level === 'B1'), 'woordenboek: filter op niveau');
  const r = W.addMine('la chamba', 'het werk (Mexico)');
  ok(r && r.id && S.Store.state.srs[r.id], 'eigen woord: komt in de herhaling');
  ok(W.addMine('La Chamba', 'werk').dup, 'eigen woord: geen dubbele');
  ok(!W.addMine('', 'x'), 'eigen woord: leeg wordt geweigerd');
  const key = r.id.split('|')[2];
  const it = S.Gen.reviewSession(50, [r.id]).items[0];
  ok(it && it.word && it.word.es === 'la chamba' && (it.options ? it.options.length >= 2 : true), 'eigen woord: herhaalkaart werkt');
  const before = JSON.parse(JSON.stringify(S.Store.state));
  W.removeMine(key);
  ok(!W.mine().length && !S.Store.state.srs[r.id], 'eigen woord: verwijderen');
  S.Store.state.updated = Date.now() + 5;
  const m = S.Store.mergeStates(S.Store.state, before);
  ok(m.myWords[key].del && !m.srs[r.id], 'eigen woord: verwijdering overleeft synchroniseren');
  S.Store.state = keep;
}

{ // mijn woordenschat: overzicht van alles in de herhaling
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const V = S.Vocab, t = S.U.dayIndex(), u = S.C.all()[0];
  S.Store.state.srs = {
    ['w|' + u.id + '|0']: { d: t, i: 1, e: 2.4, r: 0, l: 2, s: Date.now() },
    ['w|' + u.id + '|1']: { d: t + 30, i: 30, e: 2.8, r: 5, l: 0, s: Date.now() },
    ['x|' + u.id + '|0']: { d: t + 8, i: 8, e: 2.5, r: 3, l: 0, s: Date.now() },
    'c|hablar|pres': { d: t, i: 3, e: 2.5, r: 2, l: 0, s: Date.now() },
    'w|bestaat-niet|0': { d: t, i: 1, e: 2.5, r: 1, l: 0 }
  };
  const list = V.all();
  ok(list.length === 4, 'woordenschat: onvindbare items vallen weg');
  ok(list.every(x => x.es && typeof x.nl === 'string'), 'woordenschat: elk item heeft Spaans en Nederlands');
  const c = V.counts(list);
  ok(c.weak === 1 && c.mastered === 1 && c.known === 1 && c.learning === 1 && c.w === 2 && c.x === 1 && c.c === 1, 'woordenschat: telling per groep en soort');
  ok(V.filter(list, { sort: 'weak' })[0].id === 'w|' + u.id + '|0', 'woordenschat: zwakste eerst');
  ok(V.filter(list, { sort: 'strong' })[0].id === 'w|' + u.id + '|1', 'woordenschat: sterkste eerst');
  ok(V.filter(list, { type: 'c' }).length === 1 && V.filter(list, { q: 'hablar' }).length === 1, 'woordenschat: filter op soort en zoeken');
  ok(list.every(x => !x.es.includes('___')), 'woordenschat: invulzinnen staan ingevuld');
  // voorbeeldzin: 'hola' komt voor in de dialoog van unit 1
  ok(V.example(V.describe('w|' + u.id + '|0')), 'woordenschat: voorbeeldzin gevonden');
  // alle oefeningen zijn te beschrijven
  let bad = 0; S.C.all().forEach(un => un.ex.forEach((_, i) => { S.Store.state.srs['x|' + un.id + '|' + i] = { d: t, i: 0, e: 2.5, r: 0, l: 0 }; if (!V.describe('x|' + un.id + '|' + i)) bad++; }));
  ok(!bad, 'woordenschat: elke oefening is te tonen (' + bad + ' niet)');
  // totaal goed/fout wordt geteld
  const id = 'w|' + u.id + '|1'; S.SRS.grade(id, true); S.SRS.grade(id, false);
  ok(S.Store.state.srs[id].g === 1 && S.Store.state.srs[id].f === 1, 'woordenschat: totaal goed/fout geteld');
  S.Store.state = keep;
}

{ // herhaling: teller klopt met wat 'Nog een ronde' oefent
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const t = S.U.dayIndex(); S.Store.state.srs = {};
  S.C.all().slice(0, 3).forEach(u => u.vocab.forEach((_, i) => { S.Store.state.srs['w|' + u.id + '|' + i] = { d: t, i: 0, e: 2.5, r: 0, l: 0 }; }));
  S.Store.state.srs['w|bestaat-niet|0'] = { d: t, i: 0, e: 2.5, r: 0, l: 0 };
  const n = S.Gen.reviewCount();
  ok(n < S.SRS.dueCount(), 'herhaling: onvindbare items tellen niet mee');
  const sess = S.Gen.reviewSession(25);
  ok(sess.items.length === Math.min(n, 25), 'herhaling: ronde bevat precies de resterende (max 25)');
  S.Store.state = keep;
}

{ // moeilijk en makkelijk afwisselen
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const G = S.Gen, t = S.U.dayIndex(); S.Store.state.srs = {};
  const runOf = xs => { let m = 0, r = 0; xs.forEach(x => { r = G.isHard(x) ? r + 1 : 0; m = Math.max(m, r); }); return m; };
  const mkH = n => Array.from({ length: n }, (_, i) => ({ kind: 'type', translate: true, n: 'h' + i }));
  const mkE = n => Array.from({ length: n }, (_, i) => ({ kind: 'mc', n: 'e' + i }));
  for (const [h, e] of [[10, 5], [6, 10], [3, 3], [12, 4], [1, 9]]) {
    const out = G.mix(S.U.shuffle(mkH(h).concat(mkE(e))));
    ok(out.length === h + e && new Set(out).size === h + e, `afwisselen ${h}/${e}: alle vragen blijven`);
    ok(!G.isHard(out[0]) && !G.isHard(out[out.length - 1]), `afwisselen ${h}/${e}: begint en eindigt makkelijk`);
    ok(runOf(out) <= Math.max(1, Math.ceil(h / (e - 1))), `afwisselen ${h}/${e}: niet te veel moeilijke op rij (${runOf(out)})`);
  }
  ok(runOf(G.mix(mkH(8).concat(mkE(5)))) <= 2, 'afwisselen: 8 moeilijke + 5 makkelijke → max 2 op rij');
  // keepOrder houdt de opbouw van de lesstof
  const ord = G.mix(mkE(3).concat(mkH(6)), { keepOrder: true }).filter(G.isHard).map(x => x.n).join();
  ok(ord === 'h0,h1,h2,h3,h4,h5', 'afwisselen: volgorde van de lesstof blijft');
  // vaak fout → moeilijker; al lang bekend → makkelijker
  S.Store.state.srs = { a: { d: t, i: 0, e: 2, r: 0, l: 3, g: 1, f: 4 }, b: { d: t, i: 30, e: 2.8, r: 6, l: 0, g: 6, f: 0 } };
  ok(G.isHard({ kind: 'mc', fill: true, srsId: 'a' }) && !G.isHard({ kind: 'type', srsId: 'b' }), 'afwisselen: zwakke kaart zwaar, sterke kaart licht');
  // na fouten op rij: makkelijkere vraag naar voren, niet voorbij een uitleg
  const q = [{ kind: 'mc' }, ...mkH(2), { kind: 'mc', n: 'x' }, { kind: 'info' }, { kind: 'mc', n: 'y' }];
  ok(G.easeNext(q, 1) && q[1].n === 'x' && q.length === 6, 'afwisselen: makkelijke vraag naar voren');
  const q2 = [...mkH(2), { kind: 'card' }, { kind: 'mc' }];
  ok(!G.easeNext(q2, 0), 'afwisselen: niet voorbij een woordkaart');
  // echte herhaling: SRS-keuze blijft gelijk
  S.C.all().slice(0, 4).forEach(u => u.vocab.forEach((_, i) => { S.Store.state.srs['w|' + u.id + '|' + i] = { d: t - 1, i: 30, e: 2.5, r: i % 4, l: i % 3, g: 1, f: i % 5 }; }));
  const due = S.SRS.due(25), ses = G.reviewSession(25);
  ok(ses.items.length === due.length && ses.items.every(it => due.includes(it.srsId)), 'afwisselen: herhaling oefent dezelfde items');
  ok(runOf(ses.items) <= 2 || ses.items.filter(G.isHard).length * 1 > 2 * (ses.items.length - ses.items.filter(G.isHard).length + 1), 'afwisselen: herhaling max 2 moeilijke op rij');
  S.Store.state = keep;
}

/* ---------- onderbroken oefening hervatten ---------- */
{
  const P = S.Paused, G = S.Gen;
  const u = units.find(x => x.level === 'A1');
  // alle soorten sessies moeten te bewaren zijn (geen kringverwijzingen of functies)
  const sessions = [...G.STEPS.map(st => G.stepSession(u, st.id)), G.reviewSession(20, Object.keys(S.Store.state.srs).slice(0, 20)), G.levelExam('A1'), G.listenTraining(5), G.speakTraining(5)].filter(Boolean);
  for (const ses of sessions) {
    const q = ses.items.filter(Boolean).slice();
    let packed = null;
    try { packed = P.pack({ queue: q, idx: 1, graded: new Map(), mistakes: [], xp: 0, streak: 0, bestStreak: 0, activeMs: 0 }); } catch (e) { /* faalt hieronder */ }
    ok(packed && P.unpack(packed).queue.length === q.length, 'hervatten: sessie te bewaren: ' + ses.title);
  }
  // rondgang: herhaalkopie, antwoorden, fouten en score blijven gelijk
  const q = G.stepSession(u, 'vocab1').items.slice();
  const a = q[2], b = q[3];
  const copy = Object.assign({}, a, { retry: true, orig: a }); q.push(copy);
  const graded = new Map([[a, false], [b, true]]);
  const pk = P.pack({ queue: q, idx: 4, graded, mistakes: [{ it: a, r: { ok: false, expected: 'x' } }], xp: 20, streak: 1, bestStreak: 2, activeMs: 65000, paidXp: 10, paidMs: 30000 });
  const R = P.unpack(JSON.parse(JSON.stringify(pk)));
  ok(R.idx === 4 && R.xp === 20 && R.streak === 1 && R.bestStreak === 2 && R.activeMs === 65000 && R.paidXp === 10 && R.paidMs === 30000, 'hervatten: positie en score bewaard');
  ok(R.queue.length === q.length && R.queue[q.length - 1].orig === R.queue[2], 'hervatten: herhaalkopie wijst naar zijn origineel');
  ok(R.graded.get(R.queue[2]) === false && R.graded.get(R.queue[3]) === true && R.graded.size === 2, 'hervatten: antwoorden bewaard');
  ok(R.mistakes.length === 1 && R.mistakes[0].it === R.queue[2], 'hervatten: fouten bewaard');
  // opslaan, wissen en synchroniseren
  const keep = JSON.parse(JSON.stringify(S.Store.state));
  P.set({ desc: { kind: 'step', unit: u.id, step: 'vocab1' }, title: 't', idx: 4, n: q.length, snap: pk });
  ok(P.get() && P.get().idx === 4, 'hervatten: bewaard in de voortgang');
  const withPause = JSON.parse(JSON.stringify(S.Store.state));
  const other = JSON.parse(JSON.stringify(keep)); other.updated = Date.now() + 1e6; other.paused = { t: 0, data: null };
  ok(S.Store.mergeStates(other, withPause).paused.data, 'sync: onderbroken oefening komt naar het andere apparaat');
  const t0 = withPause.paused.t; const cleared = JSON.parse(JSON.stringify(withPause)); cleared.paused = { t: t0 + 5, data: null };
  ok(!S.Store.mergeStates(withPause, cleared).paused.data && !S.Store.mergeStates(cleared, withPause).paused.data, 'sync: afgemaakte oefening komt niet terug');
  const m2 = S.Store.mergeStates(withPause, other);
  ok(JSON.stringify(S.Store.mergeStates(m2, m2).paused) === JSON.stringify(m2.paused), 'sync: hervatten idempotent');
  P.clear(); ok(!P.get(), 'hervatten: wissen');
  S.Store.state.paused = { t: Date.now() - 31 * 864e5, data: { snap: pk, idx: 1, n: 2 } };
  ok(!P.get(), 'hervatten: na 30 dagen vervallen');
  S.Store.state = keep;
}

/* ---------- antwoordknoppen: geen botsende klassen ---------- */
{
  // Een losse regel als `.stack {…}` (profielbalk) gold ook voor de antwoordknoppen en drukte ze plat tot één strookje van 12px.
  const css = fs.readFileSync(path.join(root, 'css/app.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const lesson = fs.readFileSync(path.join(root, 'js/lesson.js'), 'utf8');
  const line = lesson.split('\n').find(l => l.includes("class: 'options' +")) || '';
  const mods = [...line.matchAll(/'\s+([\w-]+)'/g)].map(m => m[1]);
  ok(mods.length > 0, 'antwoordknoppen: modifier-klasse gevonden');
  const selectors = [...css.matchAll(/([^{}]+)\{/g)].flatMap(m => m[1].split(',').map(x => x.trim()));
  for (const m of mods) {
    const bad = selectors.filter(sel => new RegExp('\\.' + m + '(?![\\w-])').test(sel) && !sel.includes('.options.' + m));
    ok(!bad.length, 'antwoordknoppen: .' + m + ' komt alleen voor als .options.' + m + (bad.length ? ' (ook in: ' + bad.join(' | ') + ')' : ''));
  }
}

/* ---------- versie en offline-cache ---------- */
{
  const vctx = vm.createContext({}); vctx.self = vctx;
  vm.runInContext(fs.readFileSync(path.join(root, 'js/version.js'), 'utf8'), vctx);
  const V = vctx.SPT_VERSION || {};
  ok(/^\d+\.\d+\.\d+$/.test(V.number || ''), 'versie: nummer heeft de vorm 1.2.3');
  ok(/^\d{4}-\d{2}-\d{2}$/.test(V.date || '') && !isNaN(Date.parse(V.date)), 'versie: geldige datum');
  ok(String(require(path.join(root, 'package.json')).version) === V.number, 'versie: package.json en js/version.js gelijk');
  const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  ok(sw.includes("importScripts('js/version.js')"), 'sw.js haalt versie uit js/version.js');
  const assets = (/const ASSETS = \[([^\]]*)\]/.exec(sw) || [, ''])[1];
  for (const src of [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1])) {
    const [file, q] = src.split('?');
    ok(assets.includes("'" + file + "'"), 'sw.js cachet ' + file);
    ok(q === 'v=' + V.number, 'index.html laadt ' + file + ' met ?v=' + V.number + ' (gebruik node tools/versie.js)');
  }
  ok(html.includes('href="css/app.css?v=' + V.number + '"'), 'index.html laadt css/app.css met ?v=' + V.number);
  // Wat is er nieuw: bovenste blok = huidige versie, nieuwste eerst, elk blok met tekst
  vm.runInContext(fs.readFileSync(path.join(root, 'js/changelog.js'), 'utf8'), vctx);
  const LOG = vctx.SPT_CHANGELOG || [];
  ok(LOG.length && LOG[0].v === V.number, 'changelog: bovenste versie is ' + V.number + ' (node tools/versie.js ' + V.number + ' "wat er nieuw is")');
  ok(LOG[0] && LOG[0].date === V.date, 'changelog: datum bovenste versie gelijk aan js/version.js');
  const num = v => v.split('.').reduce((a, x) => a * 1000 + +x, 0);
  LOG.forEach((e, i) => {
    ok(/^\d+\.\d+\.\d+$/.test(e.v) && /^\d{4}-\d{2}-\d{2}$/.test(e.date), 'changelog: versie en datum geldig bij ' + e.v);
    ok(Array.isArray(e.nl) && e.nl.length && e.nl.every(x => typeof x === 'string' && x.trim() && !/TODO/.test(x)), 'changelog: Nederlandse tekst bij ' + e.v);
    ok(!e.es || (Array.isArray(e.es) && e.es.every(x => typeof x === 'string')), 'changelog: es is een lijst bij ' + e.v);
    if (i) ok(num(LOG[i - 1].v) > num(e.v), 'changelog: nieuwste eerst (' + LOG[i - 1].v + ' vóór ' + e.v + ')');
  });
  ok(/updateViaCache:\s*'none'/.test(fs.readFileSync(path.join(root, 'js/app.js'), 'utf8')), 'service worker wordt zonder HTTP-cache bijgewerkt');
}

/* ---------- synoniemen en woordvormen bij typvragen ---------- */
{
  const G = S.Gen, allEs = new Set(units.flatMap(u => u.vocab.map(v => v[0])));
  for (const k of Object.keys(S.synonyms)) ok(allEs.has(k), 'synoniem-sleutel bestaat niet in een woordenlijst: ' + k);
  const find = es => { for (const u of units) { const i = u.vocab.findIndex(v => v[0] === es); if (i >= 0) return S.C.word(u, i); } };
  const item = es => G.wordItem(find(es), 'type', units[0]);
  const T = (es, user) => G.checkType(user, item(es));
  const taal = item('el idioma');
  ok(T('el idioma', 'el idioma').ok && !T('el idioma', 'el idioma').warn, 'el idioma goed');
  ok(T('el idioma', 'la lengua').ok && T('el idioma', 'la lengua').warn === 'synonym', 'la lengua = goed synoniem');
  const fout = T('el idioma', 'el lengua');
  ok(!fout.ok && fout.warn === 'article-wrong' && fout.best === 'la lengua' && fout.gender === 'vrouwelijk', 'el lengua fout, met lidwoord-hint: ' + JSON.stringify(fout));
  const fout2 = T('el idioma', 'la idioma');
  ok(!fout2.ok && fout2.warn === 'article-wrong' && fout2.gender === 'mannelijk', 'la idioma is geen typfout: ' + JSON.stringify(fout2));
  ok(T('el idioma', 'lengua').ok && T('el idioma', 'lengua').warn === 'article', 'lengua zonder lidwoord = lidwoord-waarschuwing');
  ok(T('el agua', 'la agua').gender === '', 'el agua: geen geslachtsclaim');
  ok(!T('el idioma', 'el español').ok, 'fout blijft fout');
  ok(taal.syn.includes('la lengua'), 'synoniemen op item');
  // dezelfde Nederlandse vertaling telt automatisch
  ok(T('la chamba', 'el trabajo').ok && T('el trabajo', 'la chamba').ok, 'het werk: chamba ↔ trabajo');
  ok(T('deberías…', 'tendrías que').ok, 'je zou moeten: deberías ↔ tendrías que');
  // vormen met / en o/a
  const F = es => G.forms(es);
  ok(['el maestro', 'la maestra'].every(x => F('el / la maestro/a').includes(x)) && !F('el / la maestro/a').includes('a'), 'el / la maestro/a: ' + F('el / la maestro/a'));
  ok(['el jefe', 'la jefa'].every(x => F('el / la jefe/a').includes(x)), 'jefe/jefa');
  ok(['el anfitrión', 'la anfitriona'].every(x => F('el / la anfitrión/ona').includes(x)), 'anfitrión/anfitriona: ' + F('el / la anfitrión/ona'));
  ok(['el estudiante', 'la estudiante'].every(x => F('el / la estudiante').includes(x)), 'el / la estudiante');
  ok(['estar resfriado', 'estar resfriada'].every(x => F('estar resfriado/a').includes(x)), 'resfriado/a');
  ok(F('sacar / tomar fotos').includes('sacar fotos') && F('sacar / tomar fotos').includes('tomar fotos'), 'sacar / tomar fotos');
  ok(F('seguro / segura de sí mismo/a').includes('seguro de sí mismo') && F('seguro / segura de sí mismo/a').includes('segura de sí misma'), 'seguro de sí mismo');
  ok(F('y').includes('y'), 'kort woord blijft');
  ok(T('el / la mejor amigo/a', 'la mejor amiga').ok && T('el / la mejor amigo/a', 'el mejor amigo').ok, 'mejor amigo/amiga');
  // er zijn genoeg synoniemen
  let n = 0; units.forEach(u => S.C.words(u).forEach(w => { n += G.wordSynonyms(w).length; }));
  ok(n > 100, 'aantal synoniemen ' + n);
}
/* ---------- ⓘ uitleg zonder AI (content/uitleg.js) ---------- */
{
  const UL = S.Uitleg;
  const texts = [];
  units.forEach(u => {
    if (u.dialogue) u.dialogue.lines.forEach(l => texts.push(l[1]));
    if (u.reading) u.reading.p.forEach(p => texts.push(p[0]));
    u.grammar.forEach(g => (g.ex || []).forEach(e => texts.push(e[0])));
    u.say.forEach(e => texts.push(e[0]));
    u.ex.forEach(e => { if (e.s) texts.push(e.a ? e.s.replace('___', e.a[0]) : e.s); (e.a || []).forEach(a => texts.push(a)); });
  });
  const normed = texts.map(UL.norm);
  Object.keys(UL.ZINNEN).forEach(k => { const n = UL.norm(k); ok(normed.some(t => t.includes(n)), 'uitleg: zin staat niet (meer) in de lesstof: ' + k); });
  UL._patterns.forEach(p => ok(normed.some(t => p.re.test(t)), 'uitleg: patroon raakt geen enkele zin: ' + p.t));
  const tags = h => ['b', 'i', 's'].every(t => (h.match(new RegExp('<' + t + '>', 'g')) || []).length === (h.match(new RegExp('</' + t + '>', 'g')) || []).length);
  Object.entries(UL.ZINNEN).forEach(([k, v]) => ok(tags(v) && !/vosotros(?!<\/s>)/.test(v.replace(/<s>[^<]*<\/s>/g, '')), 'uitleg: html/vosotros in ' + k));
  UL.UITDRUKKINGEN.forEach(([p, t, v]) => ok(tags(v), 'uitleg: html in ' + t));
  const ex = UL.find('Bueno, nos vemos en clase. ¡Chao!');
  ok(ex.some(n => /la clase/.test(n.html) && /en casa/.test(n.html)), 'uitleg: en clase (zonder lidwoord) bij «nos vemos en clase»');
  ok(ex.length <= 5, 'uitleg: niet te veel notities tegelijk');
  ok(UL.find('Me gustan los perros.').some(n => n.t === 'gustar'), 'uitleg: gustar herkend');
  ok(!UL.find('Hay que estudiar.').some(n => n.t === 'hay'), 'uitleg: hay que ≠ hay');
  ok(!UL.find('Soy de Jalisco.').some(n => n.t === 'jalar'), 'uitleg: Jalisco ≠ jalar');
  const seen = new Set(); UL.find('Me gusta el café.', { seen }); ok(!UL.find('Me gusta el té.', { seen }).some(n => n.t === 'gustar'), 'uitleg: algemene uitleg maar één keer per scherm');
  ok(UL.find('Hola.', { extra: 'Eigen uitleg' })[0].html === 'Eigen uitleg', 'uitleg: veld in de lesstof gaat voor');
  // dekking: minstens de helft van de dialoogzinnen A1–B1 heeft uitleg
  const dl = units.filter(u => u.level < 'B2' && u.dialogue).flatMap(u => u.dialogue.lines.map(l => l[1]));
  const covered = dl.filter(t => UL.find(t).length).length;
  ok(covered / dl.length >= 0.5, `uitleg: dekking dialogen A1–B1 ${covered}/${dl.length}`);
  console.log(`ⓘ uitleg: ${Object.keys(UL.ZINNEN).length} zinnen, ${UL.UITDRUKKINGEN.length} uitdrukkingen · ${covered}/${dl.length} dialoogzinnen A1–B1 hebben uitleg`);
}

/* ---------- uitleg bij vervoegingsvragen ---------- */
Object.entries(S.conj.TENSES).forEach(([k, T]) => ok(T.nl && T.tip, 'tijd ' + k + ' mist Nederlandse uitleg (nl/tip)'));
Object.keys(S.conj.TENSES).forEach(t => S.conj.personsFor(t).forEach(p => ok(S.conj.personNl(t, p), 'geen Nederlandse persoon voor ' + t + '/' + p)));
ok(!S.conj.PERSONS.some(p => /vosotros/.test(p)), 'vosotros hoort niet in Latijns-Amerikaans Spaans');

/* ---------- per woord vergelijken (zinsvertaling: alleen foute woorden opnieuw) ---------- */
{
  const P = S.check.parts;
  const p = P('buenos dias, como es usted?', ['Buenos días, ¿cómo está usted?']);
  ok(p && p.st.join() === 'ok,accent,accent,bad,ok', 'per woord: ' + (p && p.st.join()));
  ok(p && p.k.join() === '0,1,2,4' && S.check.partsUsable(p), 'goede woorden bewaard: ' + (p && p.k));
  const segs = S.check.words(p.a); ok(segs.join('') === p.a && segs.length === 11, 'woorden en tussenstukken');
  // vakje "está" invullen geeft weer de hele zin
  const filled = segs.map((x, i) => i === 7 ? 'está' : x).join('');
  ok(S.check.check(filled, ['Buenos días, ¿cómo está usted?']).ok, 'ingevulde zin is goed');
  ok(!S.check.partsUsable(P('hola', ['Buenos días, ¿cómo está usted?'])), 'niets goed: hele zin typen');
  ok(!S.check.partsUsable(P('buenos días cómo está usted', ['Buenos días, ¿cómo está usted?'])), 'alles goed: geen vakjes');
  const q = P('me llamo pedro', ['(Yo) me llamo Ana.']);
  ok(q && q.a === 'me llamo Ana.' && q.k.join() === '0,1', 'optioneel (yo): ' + (q && q.a));
  ok(P('tengo hambre mucho', ['Tengo mucha hambre.', 'Tengo hambre.']).a === 'Tengo hambre.', 'beste alternatief gekozen');
  ok(P('', ['Hola']) === null, 'leeg antwoord');
  // dictee: verkeerd gehoorde naam, de rest goed → alleen de naam opnieuw
  const dct = P('akika es japonesa y artista', ['Aiko es japonesa y artista.']);
  ok(dct && dct.st.join() === 'bad,ok,ok,ok,ok' && S.check.partsUsable(dct), 'dictee per woord: ' + (dct && dct.st.join()));
  ok(/R\.listen[\s\S]{0,400}partialInput\(it\.keep/.test(fs.readFileSync(path.join(root, 'js/lesson.js'), 'utf8')), 'dictee-herkansing vult goede woorden in');
  // samenvoegen tussen apparaten: nieuwste stand per zin
  const A = { updated: 2, partial: { 'x|a|1': { a: 'Hola amigo', k: [0], t: 5 }, 'x|a|2': { t: 9 } } };
  const B = { updated: 1, partial: { 'x|a|1': { t: 7 }, 'x|a|2': { a: 'Buen día', k: [0], t: 3 } } };
  const M = S.Store.mergeStates(A, B);
  ok(!M.partial['x|a|1'].a && !M.partial['x|a|2'].a, 'partial samenvoegen');
}

/* ---------- docente Lupe: wat ze hardop zegt ---------- */
{
  const sp = S.Tutor.spoken;
  ok(sp('¡Hola! ¿Qué vas a pedir? 🌮\n---\n✅ ¡Perfecto!', 'roleplay') === '¡Hola! ¿Qué vas a pedir?', 'rollenspel: alleen het antwoord, zonder emoji en feedback: ' + sp('¡Hola! ¿Qué vas a pedir? 🌮\n---\n✅ ¡Perfecto!', 'roleplay'));
  ok(sp('Je gebruikt **por** voor oorzaak. Voorbeeld: **Lo hice por ti.** (Ik deed het voor jou.)', 'ask') === 'Lo hice por ti.', 'vraag: alleen vetgedrukt Spaans: ' + sp('Je gebruikt **por** voor oorzaak. Voorbeeld: **Lo hice por ti.**', 'ask'));
  ok(sp('**Verbeterde versie:** **Ayer fui al mercado.**', 'write') === 'Ayer fui al mercado.', 'labels met dubbele punt niet voorlezen');
  ok(sp('Alleen Nederlandse uitleg zonder voorbeelden.', 'ask') === '', 'geen Spaans → niets voorlezen');
  const long = 'Hola. '.repeat(60);
  ok(S.Speech.chunks(long).length > 1 && S.Speech.chunks(long).every(c => c.length <= 190), 'lange tekst in stukken voor de stem');
  ok(S.Speech.chunks('¿Cómo estás?').length === 1, 'korte tekst blijft één stuk');
  ok(S.Speech.slowFactor(false, true) === 1 && S.Speech.slowFactor(true, true) <= 0.65 && S.Speech.slowFactor(2, true) < S.Speech.slowFactor(1, true) && S.Speech.slowFactor(2) < S.Speech.slowFactor(1) && S.Speech.slowFactor(9, true) >= 0.5, '🐢 langzaam en 🐌 heel langzaam');
  const sys = S.AI.askSystem();
  ok(/Lupe/.test(sys) && /\*\*bold\*\*/.test(sys), 'docente-prompt noemt Lupe en de vetregel');
  // «Vraag het Lupe»: het scherm (dialoog, vraag, antwoord) gaat mee in de prompt
  vm.runInContext(fs.readFileSync(path.join(root, 'js/ask.js'), 'utf8'), ctx, { filename: 'js/ask.js' });
  const askSys = S.Ask.system({ text: 'Daniel: Bueno, nos vemos en clase. ¡Chao!' });
  ok(/nos vemos en clase/.test(askSys) && /<screen>/.test(askSys) && /Lupe/.test(askSys), 'vraag-het-Lupe: schermtekst en Lupe in de prompt');
  ok(/not answered yet/i.test(askSys), 'vraag-het-Lupe: verklapt geen antwoord op een open vraag');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  ok(html.indexOf('js/ask.js') > html.indexOf('js/lesson.js') && html.indexOf('js/ask.js') < html.indexOf('js/app.js'), 'vraag-het-Lupe: script geladen tussen lesson.js en app.js');
  ok(sw.includes("'js/ask.js'"), 'vraag-het-Lupe: script zit in de offline-cache');
}
{ // vaste cast van getekende personages in de dialogen (js/cast.js)
  const c = vm.createContext({ console }); c.window = c; c.SPT = {};
  vm.runInContext(fs.readFileSync(path.join(root, 'js/cast.js'), 'utf8'), c, { filename: 'js/cast.js' });
  const K = c.SPT.Cast, html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const ids = [...K.list, ...K.players].map(x => x.id);
  ok(new Set(ids).size === ids.length, 'cast: elk personage heeft een eigen id');
  const broken = ids.filter(id => { const v = K.svg(id, 40); return !v.startsWith('<svg') || /NaN|undefined|null/.test(v) || !v.includes('m-open') || !v.includes('m-closed'); });
  ok(!broken.length, 'cast: elke tekening is geldig en heeft een mond die kan bewegen' + (broken.length ? ' (' + broken.join(', ') + ')' : ''));
  const loose = [];
  for (const u of units) if (u.dialogue) new Set(u.dialogue.lines.map(l => l[0])).forEach(w => { if (w !== 'Mark' && !K.forSpeaker(w, u.dialogue.place)) loose.push(w + ' (' + u.id + ')'); });
  ok(!loose.length, 'cast: elke dialoogspreker (behalve jij) is een getekend personage' + (loose.length ? ': ' + loose.join(', ') : ''));
  ok(K.list.every(x => x.voice && /^es-[A-Z]{2}-\w+Neural$/.test(x.voice.v)), 'cast: elk personage heeft een vaste stem');
  ok(K.forSpeaker('Diego', 'Lima 🇵🇪').id !== K.forSpeaker('Diego', 'Monterrey 🇲🇽').id, 'cast: dezelfde naam in een ander land kan iemand anders zijn');
  const badFull = [];
  ids.forEach(id => ['slim', '', 'stout'].forEach(b => { const v = K.svg(id, 120, { full: true, look: { build: b } }); if (!v.startsWith('<svg') || /NaN|undefined|null/.test(v)) badFull.push(id + '/' + (b || 'normaal')); }));
  ok(!badFull.length, 'cast: heel lijf in elk postuur geldig' + (badFull.length ? ': ' + badFull.slice(0, 5).join(', ') : ''));
  const nid = v => v.replace(/cs\d+/g, 'X');
  ok(nid(K.svg('p-zorro', 120, { full: true, look: { build: 'slim' } })) !== nid(K.svg('p-zorro', 120, { full: true, look: { build: 'stout' } })), 'cast: postuur verandert de tekening');
  ok(K.players.length >= 6 && K.players.every(x => x.player), 'cast: keuze uit eigen personages voor je profiel');
  // uitbreiding: dieren en kleding per land; oude keuzes blijven werken
  ok(['p-zorro', 'p-gato', 'p-perro', 'p-conejo', 'p-panda', 'p-tortuga', 'p-loro', 'p-ajolote'].every(id => K.get(id) && K.get(id).player), 'cast: de eerste acht eigen personages bestaan nog (opgeslagen keuzes blijven werken)');
  ok(K.players.length >= 28 && K.GROUPS.every(([g]) => K.players.some(x => (x.group || '') === g)) && K.players.every(x => K.GROUPS.some(([g]) => g === (x.group || ''))), 'cast: elke streek heeft eigen dieren en elk dier hoort bij een streek');
  ok(['es', 'de', 'fr', 'tr', 'en', 'nl'].every(l => K.GROUPS.some(g => g[2] === l)), 'cast: voor elke doeltaal is er een groep dieren');
  ok(K.players.every(x => x.nl && x.animal && x.trait), 'cast: elk eigen personage heeft een Nederlandse en Spaanse naam');
  const badLook = [];
  Object.keys(K.LOOKS).forEach(k => K.LOOKS[k].forEach(([v]) => ['p-zorro', 'p-loro', 'p-ajolote', 'p-koe'].forEach(id => [false, true].forEach(full => {
    const x = K.svg(id, 100, { full, look: { [k]: v } }); if (!x.startsWith('<svg') || /NaN|undefined|null/.test(x) || !x.includes('m-open')) badLook.push(id + '/' + k + '=' + v);
  }))));
  ok(!badLook.length, 'cast: elke hoed, bril, halsding, opdruk en schoen geeft een geldige tekening' + (badLook.length ? ': ' + badLook.slice(0, 5).join(', ') : ''));
  ['hat', 'glasses', 'neck', 'print'].forEach(k => { const base = nid(K.svg('p-gato', 100, { look: {} })), same = K.LOOKS[k].filter(([v]) => v && nid(K.svg('p-gato', 100, { look: { [k]: v } })) === base).map(x => x[0]);
    ok(!same.length, 'cast: elke keuze bij ' + k + ' is zichtbaar op de tekening' + (same.length ? ': ' + same.join(', ') : '')); });
  { const base = nid(K.svg('p-gato', 100, { full: true, look: {} })), same = K.LOOKS.shoes.filter(([v]) => v && nid(K.svg('p-gato', 100, { full: true, look: { shoes: v } })) === base);
    ok(!same.length, 'cast: elke schoen is zichtbaar in het hele lijf'); }
  ok(K.svg('p-gato', 100, { look: { hat: 'bestaat-niet', print: 'x', shoes: 'y', neck: 'z', glasses: 'q' }, full: true }).startsWith('<svg'), 'cast: een onbekende keuze (uit een nieuwere versie) breekt de tekening niet');
  ok([...K.list, ...K.players].every(x => { const v = K.svg(x.id, 60); return (v.match(/<svg/g) || []).length === 1 && v.includes('-sh"'); }), 'cast: elk personage krijgt de afwerking (omlijning en schaduw)');
  // Jouw leven: fase volgt uit punten (alle talen samen), elke fase heeft een tekening
  vm.runInContext(fs.readFileSync(path.join(root, 'js/life.js'), 'utf8'), c, { filename: 'js/life.js' });
  const LF = c.window.SPT.Life;
  ok(LF && LF.STEPS.length >= 20 && LF.STEPS.every((s, i) => i === 0 ? s.at === 0 : s.at > LF.STEPS[i - 1].at), 'leven: een lange weg met oplopende drempels');
  ok(LF.STEPS.every(s => s.es && s.en && s.nl && s.icon && s.name && (s.home || s.add || s.ride)), 'leven: elke stap heeft een naam, icoon en woord in elke taal');
  const badScene = [];
  LF.STEPS.forEach((s, i) => LF.acts(LF.world(i)).forEach(a => { const v = LF.scene(i, { act: a.id }); if (!v.startsWith('<svg') || /NaN|undefined/.test(v)) badScene.push(i + ':' + a.id); }));
  ok(!badScene.length, 'leven: elke scène in elke stap is een geldige tekening' + (badScene.length ? ' (' + badScene.slice(0, 5).join(', ') + ')' : ''));
  ok(LF.acts(LF.world(0)).length <= 4 && LF.acts(LF.world(LF.STEPS.length - 1)).length >= 12, 'leven: scènes komen erbij naarmate je meer hebt');
  ok(!LF.world(LF.STEPS.findIndex(s => s.home === 'casita')).items.has('fire'), 'leven: spullen staan alleen waar ze passen (geen kampvuur in het dorp)');
  // genoeg stappen voor meer talen: één volle taal (±7.200 punten) haalt maar een klein deel van de weg
  ok(LF.STEPS.length >= 50 && LF.STEPS[LF.STEPS.length - 1].at >= 40000, 'leven: lange weg, ook als er talen bijkomen (' + LF.STEPS.length + ' stappen, eind ' + LF.STEPS[LF.STEPS.length - 1].at + ')');
  ok(LF.stepAt(7200) < LF.STEPS.length / 2 && LF.stepAt(15000) < LF.STEPS.length * .7, 'leven: één taal vult het leven niet');
  ok(LF.STEPS.every((s, i) => !i || s.at - LF.STEPS[i - 1].at <= 2400), 'leven: nooit te lang wachten op de volgende stap');
  const badPrev = LF.STEPS.map((s, i) => [i, LF.showAct(i)]).filter(([i, a]) => !LF.acts(LF.world(i)).some(x => x.id === a));
  ok(!badPrev.length, 'leven: voorproefje toont het nieuwe ding in gebruik' + (badPrev.length ? ' (' + badPrev.join(' ') + ')' : ''));
  ok(LF.showAct(LF.STEPS.findIndex(s => s.add === 'kayak')) === 'kayak' && LF.showAct(LF.STEPS.findIndex(s => s.add === 'pupils')) === 'teach', 'leven: voorproefje kajak en les geven');
  ok(LF.chapter(0).first && LF.STEPS.filter((s, i) => LF.chapter(i).first).length >= 10 && LF.STEPS.every((s, i) => !/undefined/.test(LF.chapter(i).name)), 'leven: de weg is ingedeeld in hoofdstukken (landschappen)');
  {
    const fl = LF.scene(10, { act: 'walk', langs: [{ target: 'es', points: 7000 }, { target: 'en', points: 40 }, { target: 'xx', points: 5 }] });
    ok((fl.match(/class="life-flag"/g) || []).length === 3 && /XX<\/text>/.test(fl) && !/NaN|undefined/.test(fl), 'leven: een vlag per taal, ook voor een taal die er later bijkomt');
    ok(LF.langStage(0) === 0 && LF.langStage(1) === 1 && LF.langStage(7000) === 5 && LF.scene(10, { act: 'walk' }).indexOf('life-flag') < 0, 'leven: vlag groeit mee met hoe goed je de taal kent');
  }
  ok(!LF.world(LF.STEPS.length - 1).items.has('llama') && LF.world(LF.STEPS.findIndex(s => s.add === 'train')).items.has('llama'), 'leven: Andes-dieren blijven in de Andes');
  const sc = LF.score({ a: { i: 1 }, b: { i: 10 }, c: { i: 30 } });
  ok(sc.points === 6 && LF.stepAt(0) === 0 && LF.stepAt(1e6) === LF.STEPS.length - 1, 'leven: 🌱 1, 🌳 2, ⭐ 3 punten');
  {
    // per hoofdtaal: vanuit het Nederlands tellen alle talen samen, vanuit het Spaans begint het opnieuw
    const SS = c.window.SPT, keep = { P: SS.Profiles, course: SS.course, Store: SS.Store, C: SS.COURSES, ls: c.localStorage };
    const data = { 'k:es-nl': { srs: { a: { i: 1 } } }, 'k:de-nl': { srs: { b: { i: 30 } } }, 'k:en-es': { srs: { c: { i: 30 }, d: { i: 30 } } } };
    SS.COURSES = { 'es-nl': { ui: 'nl' }, 'de-nl': { ui: 'nl' }, 'en-es': { ui: 'es' } };
    SS.Profiles = { active: () => ({ courses: ['es-nl', 'de-nl', 'en-es'] }), activeId: () => 'x', storeKey: (id, cc) => 'k:' + cc };
    c.localStorage = { getItem: k => JSON.stringify(data[k] || null), setItem() {} };
    SS.course = { id: 'es-nl' }; SS.Store = { state: data['k:es-nl'] }; const nl = LF.total().points;
    SS.course = { id: 'en-es' }; SS.Store = { state: data['k:en-es'] }; const es = LF.total().points;
    Object.assign(SS, { Profiles: keep.P, course: keep.course, Store: keep.Store, COURSES: keep.C }); c.localStorage = keep.ls;
    ok(nl === 4 && es === 6, 'leven: talen met dezelfde hoofdtaal tellen samen, een andere hoofdtaal begint opnieuw (' + nl + '/' + es + ')');
  }
  ok(html.indexOf('js/life.js') > html.indexOf('js/cast.js') && html.indexOf('js/life.js') < html.indexOf('js/app.js') && sw.includes("'js/life.js'"), 'leven: script geladen en in de offline-cache');
  ok(html.indexOf('js/cast.js') > html.indexOf('js/tutor.js') && html.indexOf('js/cast.js') < html.indexOf('js/lesson.js') && sw.includes("'js/cast.js'"), 'cast: script geladen en in de offline-cache');
}
{ // eigen iconen en illustraties (js/icons.js)
  const c = vm.createContext({ console }); c.window = c; c.SPT = {};
  vm.runInContext(fs.readFileSync(path.join(root, 'js/icons.js'), 'utf8'), c, { filename: 'js/icons.js' });
  const I = c.SPT.Icons, html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  ['hoy', 'ruta', 'practica', 'docente', 'perfil'].forEach(t => ok(I.line(t).startsWith('<svg') && html.includes('data-tab="' + t + '"'), 'iconen: tabbalk heeft een eigen icoon voor ' + t));
  ['sopa', 'cruci', 'revoltijo', 'volcan', 'parejas', 'review', 'vocab', 'grammar', 'dialogue', 'read', 'speak', 'test', 'gift', 'trophy', 'exam', 'pause'].forEach(n => ok(I.has(n) && /<svg[^>]*viewBox="0 0 48 48"/.test(I.art(n)), 'iconen: illustratie ' + n));
  ['🃏', '🧩', '💬', '📖', '🎙️', '🏁', '🔁', '🎁', '⚡', '🎧'].forEach(e => ok(I.has(e), 'iconen: emoji ' + e + ' heeft een illustratie'));
  ok(I.art('onbekend') === '' && !I.has('🐢'), 'iconen: onbekende naam geeft niets (emoji blijft staan)');
  ok(html.indexOf('js/icons.js') > html.indexOf('js/tutor.js') && html.indexOf('js/icons.js') < html.indexOf('js/app.js') && sw.includes("'js/icons.js'"), 'iconen: script geladen na tutor.js en in de offline-cache');
  ok(sw.includes("'icons/apple-touch-icon.png'") && fs.existsSync(path.join(root, 'icons/apple-touch-icon.png')), 'iconen: app-icoon voor het beginscherm');
}

{ // eigen tekening per unit (js/unit-art.js)
  const c = vm.createContext({ console }); c.window = c; c.SPT = {};
  vm.runInContext(fs.readFileSync(path.join(root, 'js/unit-art.js'), 'utf8'), c, { filename: 'js/unit-art.js' });
  const I = c.SPT.Icons, html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  units.forEach(u => { const s = I.unitSvg(u.id); ok(/^<svg[^>]*viewBox="0 0 48 48"/.test(s) && !/undefined|NaN/.test(s), 'unittekening: ' + u.id + ' heeft een eigen tekening'); });
  const bodies = units.map(u => I.UNIT_ART[u.id]); ok(new Set(bodies).size === bodies.length, 'unittekening: elke unit een andere tekening');
  ok(I.unitSvg('en-a1-01') === '', 'unittekening: andere cursussen houden hun emoji');
  ok(html.indexOf('js/unit-art.js') > html.indexOf('js/icons.js') && html.indexOf('js/unit-art.js') < html.indexOf('js/app.js') && sw.includes("'js/unit-art.js'"), 'unittekening: script geladen en in de offline-cache');
}

/* ---------- eigen docent per taal: Spaans houdt Lupe, elke andere doeltaal heeft een rij in js/docenten.js ---------- */
{
  ok(!S.Docent && S.Tutor.name === 'Lupe' && S.Tutor.title === 'Profe Lupe' && /axolotl/.test(S.Tutor.persona) && S.Tutor.svg(100, { full: true }).includes('class="gill"'), 'docent: in de Spaanse cursus blijft Lupe de axolotl');
  ok(S.docentNaam('Rapport van Profe Lupe') === 'Rapport van Profe Lupe' && S.t('Vraag het Lupe') === 'Vraag het Lupe', 'docent: Spaanse cursus houdt de naam Lupe');
  const targets = [...new Set(Object.values(S.COURSES).map(c => c.target))].filter(t => t !== 'es');
  ok(targets.every(t => S.Docenten[t]), 'docent: elke doeltaal heeft een eigen docent: ' + targets.filter(t => !S.Docenten[t]).join(', '));
  const names = Object.values(S.Docenten).map(d => d.name);
  ok(new Set(names).size === names.length && Object.values(S.Docenten).every(d => d.title.includes(d.name) && d.hi.includes(d.name) && d.mic.includes(d.name) && d.nl.what && d.es.what && d.icon && d.art && typeof d.persona === 'function'), 'docent: elke docent heeft naam, aanspreekvorm, begroeting, karakter en tekening');
  ok(fs.readFileSync(path.join(root, 'sw.js'), 'utf8').includes("'js/docenten.js'") && fs.readFileSync(path.join(root, 'index.html'), 'utf8').indexOf('js/docenten.js') < fs.readFileSync(path.join(root, 'index.html'), 'utf8').indexOf('js/tutor.js'), 'docent: script geladen vóór tutor.js en in de offline-cache');
}

/* ---------- Profe Lupe als begeleider: elke situatie heeft een Spaanse zin, Latijns-Amerikaans ---------- */
{
  const L = S.Tutor.lines, out = [];
  const hello = { paused: false, goalDone: false, streak: 0, lapsed: false, due: 0, step: 'vocab', unit: 'Saludos', unitNl: 'Begroeten', min: 0 };
  [{}, { paused: true }, { goalDone: true }, { lapsed: true }, { due: 20 }, { step: 'test' }, { streak: 4 }, { min: 3 }].forEach(c => out.push(L.hello(Object.assign({}, hello, c))));
  [{ pct: 100, total: 9 }, { pct: 92, total: 9 }, { pct: 75, total: 9, mistakes: 2 }, { pct: 40, total: 9 }, { passed: false, total: 9, pct: 60 }, { unitDone: true, total: 9, pct: 85 }, { total: 0 }].forEach(c => out.push(L.summary(c)));
  [{ up: true }, { down: true }, { first: true }, { level: 'A2' }].forEach(c => out.push(L.result(c)));
  [{ days: 0 }, { days: 3, words: 5 }, { days: 9, words: 120 }].forEach(c => out.push(L.profile(c)));
  [1, 0.8, 0.2].forEach(x => out.push(L.game(x)));
  out.push(L.welcome, L.review);
  out.forEach((l, i) => {
    ok(l && typeof l.es === 'string' && l.es.length > 3 && typeof l.nl === 'string', 'Lupe-zin ' + i + ' heeft es en nl');
    ok(l && !/\b(vosotros|vosotras|os|vuestro|vuestra|habéis|tenéis|sois|estáis|vais)\b/i.test(l.es), 'Lupe-zin zonder vosotros: ' + (l && l.es));
    ok(l && !/undefined|NaN/.test(l.es + l.nl), 'Lupe-zin zonder lege waarde: ' + (l && l.es));
  });
  ok(L.streak(5) && L.streak(10) && !L.streak(4), 'Lupe juicht bij 5 en 10 op rij');
}

/* ---------- microfoon: spraakherkenning met terugkoppeling (nagebootste herkenning) ---------- */
async function micTests() {
  const Sp = S.Speech;
  let script = null;
  class FakeRec { start() { Sp._fake = this; setTimeout(() => script && script(this), 0); } stop() { setTimeout(() => this.onend && this.onend(), 0); } abort() { } }
  const res = (txt, fin, alts) => { const r = (alts || [txt]).map(t => ({ transcript: t })); r.isFinal = fin; return r; };
  const ev = list => ({ results: list });
  ctx.webkitSpeechRecognition = FakeRec;
  ok(Sp.canListen(), 'mic: spraakherkenning gevonden');
  // tussentijdse tekst + einde zonder isFinal (zo doet Safari het soms): het gehoorde telt
  let states = [], inter = [];
  script = r => { r.onstart(); r.onspeechstart(); r.onresult(ev([res('hola', false)])); r.onresult(ev([res('hola Lupe', false)])); r.onend(); };
  let got = await Sp.listen({ onState: s => states.push(s), onInterim: t => inter.push(t) });
  ok(got[0] === 'hola Lupe', 'mic: tussentijdse tekst wordt het antwoord: ' + got);
  ok(states.includes('listening') && states.includes('speech'), 'mic: status luistert/hoort je: ' + states);
  ok(inter.join('|') === 'hola|hola Lupe', 'mic: live tekst: ' + inter);
  ok(!Sp.isListening(), 'mic: na afloop luistert hij niet meer');
  // definitieve uitslag met alternatieven
  script = r => { r.onstart(); r.onresult(ev([res('', true, ['¿Cómo estás?', 'como estas'])])); r.onend(); };
  got = await Sp.listen();
  ok(got.length === 2 && got[0] === '¿Cómo estás?', 'mic: alternatieven: ' + got);
  // fouten krijgen een duidelijke melding met uitleg
  for (const code of ['not-allowed', 'service-not-allowed', 'audio-capture', 'network', 'language-not-supported']) {
    script = r => { r.onstart(); r.onerror({ error: code }); r.onend(); };
    let err = null; try { await Sp.listen(); } catch (e) { err = e; }
    ok(err && err.code === code && err.help && err.help.length > 20 && !/Spraakherkenning: /.test(err.message), 'mic: foutmelding ' + code + ': ' + (err && err.message));
  }
  // niets gezegd
  script = r => { r.onstart(); r.onerror({ error: 'no-speech' }); r.onend(); };
  let err = null; try { await Sp.listen(); } catch (e) { err = e; }
  ok(err && err.code === 'no-speech' && /niets/i.test(err.message), 'mic: niets gehoord');
  // zelf stoppen (nog eens tikken) na wat tekst = klaar
  script = r => { r.onstart(); r.onresult(ev([res('quiero un café', false)])); setTimeout(() => Sp.stopListening(), 5); };
  got = await Sp.listen();
  ok(got[0] === 'quiero un café', 'mic: tik nog eens = klaar met wat er gehoord is');
  // iPad-gedrag: na stop() komt er nooit 'onend'. Vroeger bleef hij dan hangen en deed een tweede keer niets meer.
  class HangRec { start() { Sp._fake = this; this.aborted = 0; setTimeout(() => script && script(this), 0); } stop() { } abort() { this.aborted++; } }
  ctx.webkitSpeechRecognition = HangRec;
  script = r => { r.onstart(); r.onresult(ev([res('hola', false)])); setTimeout(() => Sp.stopListening(), 5); };
  let t0 = Date.now();
  got = await Sp.listen();
  const hung = Sp._fake;
  ok(got[0] === 'hola' && Date.now() - t0 < 3000 && hung.aborted >= 1, 'mic: stop zonder onend rondt toch af en laat de microfoon los');
  ok(!Sp.isListening(), 'mic: na hangende stop luistert hij niet meer');
  // tweede keer starten werkt meteen weer
  script = r => { r.onstart(); r.onresult(ev([res('otra vez', true)])); r.onend(); };
  got = await Sp.listen();
  ok(got[0] === 'otra vez', 'mic: tweede keer starten werkt weer: ' + got);
  // een oude herkenning die nog loopt wordt opgeruimd als je opnieuw start
  script = r => { r.onstart(); };
  const first = Sp.listen().then(v => ['ok', v], e => ['err', e.code]);
  await new Promise(r => setTimeout(r, 10));
  const old = Sp._fake;
  script = r => { r.onstart(); r.onresult(ev([res('nuevo', true)])); r.onend(); };
  got = await Sp.listen();
  const f = await first;
  ok(got[0] === 'nuevo' && old.aborted >= 1 && f[0] === 'err', 'mic: oude herkenning wordt afgebroken bij opnieuw starten: ' + f);
  // iPad: de tweede spreekoefening startte 'doof' (luistert, hoort niets, stopt meteen). Dan stil één keer opnieuw.
  let starts = 0;
  script = r => { starts++; if (starts === 1) { r.onstart(); r.onerror({ error: 'no-speech' }); r.onend(); } else { r.onstart(); r.onsoundstart(); r.onresult(ev([res('buenas noches', true)])); r.onend(); } };
  got = await Sp.listen();
  ok(starts === 2 && got[0] === 'buenas noches', 'mic: dove start wordt één keer opnieuw geprobeerd: ' + starts + ' ' + got);
  // echt niets gezegd (ook de tweede keer): gewoon de melding, niet eindeloos opnieuw
  starts = 0; script = r => { starts++; r.onstart(); r.onerror({ error: 'no-speech' }); r.onend(); };
  err = null; try { await Sp.listen(); } catch (e) { err = e; }
  ok(starts === 2 && err && err.code === 'no-speech', 'mic: na één nieuwe poging volgt de melding: ' + starts);
  // wel geluid gehoord maar geen tekst: niet stil opnieuw (dan sprak je echt onduidelijk)
  starts = 0; script = r => { starts++; r.onstart(); r.onsoundstart(); r.onerror({ error: 'no-speech' }); r.onend(); };
  err = null; try { await Sp.listen(); } catch (e) { err = e; }
  ok(starts === 1 && err && err.code === 'no-speech', 'mic: na gehoord geluid geen stille herhaling: ' + starts);
  // vóór het luisteren laat het afspelen echt los: opname-element leeg en tikgeluid-context dicht
  let released = 0; const relOld = S.Sound.release; S.Sound.release = () => { released++; };
  const fakeEl = { src: 'audio/x.mp3', pause() {}, removeAttribute(a) { if (a === 'src') this.src = ''; }, load() { this.loaded = true; } };
  const elOld = Sp.el; Sp.el = fakeEl;
  script = r => { r.onstart(); r.onresult(ev([res('sí', true)])); r.onend(); };
  await Sp.listen();
  ok(released === 1 && fakeEl.src === '' && fakeEl.loaded, 'mic: opname en tikgeluid laten het geluidskanaal los vóór het luisteren');
  Sp.el = elOld; S.Sound.release = relOld;
  // Safari: is de vorige herkenning nog niet echt klaar (geen 'end'), dan eerst afbreken en wachten; anders start de nieuwe doof
  let busy = null, deafStarts = 0;
  class OneRec { start() { if (busy) deafStarts++; busy = this; Sp._fake = this; setTimeout(() => script && script(this), 0); } _end() { if (busy === this) busy = null; this.onend && this.onend(); } stop() { setTimeout(() => this._end(), 3000); } abort() { setTimeout(() => this._end(), 300); } }
  ctx.webkitSpeechRecognition = OneRec;
  script = r => { r.onstart(); r.onresult(ev([res('uno', false)])); setTimeout(() => Sp.stopListening(), 5); };
  got = await Sp.listen();
  script = r => { r.onstart(); r.onresult(ev([res('dos', true)])); r.onend(); };
  got = await Sp.listen();
  ok(got[0] === 'dos' && deafStarts === 0, 'mic: tweede start wacht tot Safari de vorige echt heeft afgesloten: ' + deafStarts);
  ok(/stop\(\)/.test(Sp.micLogText()) && /vorige/.test(Sp.micLogText()), 'mic: logboek houdt bij wat er gebeurde');
  // iPhone/iPad (WebKit-fout 321436): na stop() of abort() blijft elke volgende beurt doof. Daar dus nooit afkappen.
  let cut = false, gStarts = 0;
  class IOSRec { start() { gStarts++; Sp._fake = this; const deaf = cut; setTimeout(() => { this.onstart(); if (!deaf) script && script(this); }, 0); }
    stop() { cut = true; } abort() { cut = true; } }
  ctx.webkitSpeechRecognition = IOSRec; Sp.gentleMode = true;
  // tik nog eens = klaar, terwijl de herkenning nog loopt; hij stopt pas 'vanzelf' 300 ms later
  script = r => { r.onresult(ev([res('primera vez', false)])); setTimeout(() => Sp.stopListening(), 5); setTimeout(() => r.onend(), 300); };
  got = await Sp.listen();
  ok(got[0] === 'primera vez' && !cut, 'mic iOS: tik = klaar zonder stop()/abort()');
  script = r => { r.onresult(ev([res('segunda vez', true)])); setTimeout(() => r.onend(), 20); };
  got = await Sp.listen();
  ok(got[0] === 'segunda vez' && !cut && gStarts === 2, 'mic iOS: tweede beurt hoort weer (wachtte op het vanzelf stoppen)');
  Sp.abortListening();
  ok(!cut, 'mic iOS: les verlaten kapt de herkenning niet af');
  Sp.gentleMode = null;
  // naar de achtergrond: meteen loslaten
  script = r => { r.onstart(); r.onresult(ev([res('adiós', false)])); setTimeout(() => Sp.abortListening(), 5); };
  got = await Sp.listen();
  ok(got[0] === 'adiós' && !Sp.isListening(), 'mic: abortListening laat meteen los');
  ctx.webkitSpeechRecognition = FakeRec;
  // geen browserondersteuning
  delete ctx.webkitSpeechRecognition;
  err = null; try { await Sp.listen(); } catch (e) { err = e; }
  ok(err && err.code === 'unsupported' && err.help, 'mic: niet ondersteund');
  ok(Sp.micError('onbekend').help, 'mic: onbekende fout heeft ook uitleg');
}

(async () => {
await micTests();

/* ---------- fouten uit gesprekken met Lupe ---------- */
{
  const Mi = S.Mistakes, St = S.Store;
  // tijdsonafhankelijk testen: alle «al verwerkt»-updates op een vast moment in het verleden
  const RW0 = S.reworked; S.reworked = (RW0 || []).map(x => Object.assign({}, x, { date: '2026-11-24T20:00:00Z' }));
  const saved = JSON.stringify(St.state);
  St.state = St.mergeStates({}, {});
  const reply = '¡Claro! ¿Y tú?\n---\n❌ soy cansado → ✅ estoy cansado — toestand\n<log>[{"w":"soy cansado","c":"estoy cansado","why":"toestand = estar","tag":"ser-estar"},{"w":"el coche","c":"el carro","why":"in Latijns-Amerika","tag":"vocab","es":"el carro","nl":"de auto"},{"w":"x","c":"y","tag":"bestaat-niet"}]</log>';
  ok(!Mi.strip(reply).includes('<log') && Mi.strip(reply).endsWith('toestand'), 'lupe-log: blok wordt verborgen');
  ok(Mi.strip('Hola amigo\n<lo') === 'Hola amigo' && Mi.strip('Hola\n<log>[{"w":') === 'Hola', 'lupe-log: half binnengekomen blok ook verborgen');
  {
    const G = S.Gloss;
    const full = 'Hola, ¿qué onda? Me gustaría un café.\n---\n✅ ¡Perfecto!\n<fix>Quiero un café, por favor.</fix>\n<gloss>[["Hola","Hoi"],["¿qué onda?","hoe is het?"],["Me gustaría","ik zou graag willen"],["un","een"],["café","koffie"]]</gloss>\n<log>[]</log>';
    const vis = G.strip(full);
    ok(!/<(fix|gloss|log)/.test(vis) && vis.endsWith('¡Perfecto!'), 'gloss: blokken verborgen');
    ok(G.strip('Hola\n<gloss>[["Ho') === 'Hola' && G.strip('Hola\n<gl') === 'Hola' && G.strip('Hola\n<fix>Qui') === 'Hola', 'gloss: half binnengekomen blok verborgen');
    ok(S.Mistakes.strip(full) === vis, 'gloss: Mistakes.strip haalt ook gloss/fix weg');
    const gl = G.parseGloss(full);
    ok(gl && gl.length === 5 && gl[2].m === 'ik zou graag willen', 'gloss: lijst gelezen');
    ok(G.parseFix(full) === 'Quiero un café, por favor.', 'gloss: verbeterde versie gelezen');
    const w = G.words('Hola, ¿qué onda? Me gustaría un café.');
    const al = G.align(w, gl);
    ok(w.length === 7 && al[1].g === 1 && al[2].g === 1 && al[3].g === 2 && al[4].g === 2 && al[6].m === 'koffie', 'gloss: woorden en uitdrukkingen gekoppeld');
    ok(G.align(['Hola', 'amigo'], gl)[1] === null, 'gloss: onbekend woord blijft leeg');
    const d = G.diff('yo quero un cafe por favor', 'Yo quiero un café, por favor.');
    ok(d && d.map(o => o.t).join() === 'eq,del,ins,eq,eq,eq,eq', 'diff: fout woord vervangen');
    ok(d[4].acc && !d[0].acc && d[4].f.s === 'café,', 'diff: accent apart herkend, hoofdletter niet');
    const d2 = G.diff('ayer yo va a la playa', 'Ayer fui a la playa.');
    ok(d2.filter(o => o.t === 'del').length === 2 && d2.filter(o => o.t === 'ins').length === 1 && G.summary(d2).ok === 4, 'diff: twee weg, één erbij');
    const d3 = G.diff('Me gusta mucho', 'Me gusta mucho.');
    ok(G.summary(d3).bad === 0, 'diff: alleen leesteken = goed');
    ok(G.diff('', 'Hola') === null, 'diff: lege tekst');
    // tik op een woord in een dialoog: lesstof, vervoegde vormen, meervoud, uitdrukkingen
    const L = w => G.lookup(w) || {};
    ok(L('banco').m === 'de bank' && L('Disculpe').src === 'les', 'woordtik: woord uit de les');
    ok(L('está').t === 'estar' && L('está').src === 'vorm' && /hij/.test(L('está').w), 'woordtik: está = vorm van estar (niet esta)');
    ok(L('tengo').t === 'tener' && L('voy').t === 'ir' && L('fui').src === 'vorm', 'woordtik: vervoegingen terug naar het hele werkwoord');
    ok(L('cuadras').t === 'cuadra' && L('casas').t === 'casa', 'woordtik: meervoud terug naar enkelvoud');
    ok(L('hay').m && L('muy').m && L('dos').m, 'woordtik: kleine woordjes');
    ok(G.lookup('xyzzy') === null, 'woordtik: onbekend woord = null');
    const ph = G.phrases('Con mucho gusto.');
    ok(ph.length === 1 && ph[0].t === 'mucho gusto' && ph[0].les, 'woordtik: uitdrukking uit de les gevonden');
    ok(G.align(G.words('Con mucho gusto.'), ph)[2].g === 0, 'woordtik: uitdrukking licht samen op');
    {
      let n = 0, miss = 0;
      S.C.all().filter(u => u.level === 'A1').forEach(u => { const walk = o => { if (!o || typeof o !== 'object') return; if (Array.isArray(o.lines)) o.lines.forEach(l => G.words(l[1]).forEach(w => { n++; if (!G.lookup(w) && !/^\p{Lu}/u.test(w)) miss++; })); Object.values(o).forEach(walk); }; walk(u); });
      ok(n > 300 && miss / n < 0.05, 'woordtik: A1-dialogen bijna helemaal gedekt (' + (n - miss) + '/' + n + ')');
    }
    const prompt = S.AI.roleplaySystem({ role: 'mesero', goal: 'pedir' });
    ok(prompt.includes('<gloss>') && prompt.includes('<fix>') && prompt.indexOf('<fix>') < prompt.indexOf('LOGGING'), 'gloss: regels in rollenspelprompt, log blijft laatste');
    ok(S.AI.writingSystem().includes('<fix>') && !S.AI.writingSystem().includes('<gloss>'), 'gloss: correctie vraagt alleen verbeterde versie');
  }
  ok(!S.Tutor.spoken(reply, 'roleplay').includes('log') && !S.Tutor.spoken(reply, 'write').includes('carro"'), 'lupe-log: Lupe leest het blok niet voor');
  const p = Mi.parse(reply);
  ok(p && p.length === 3 && p[2].tag === 'other' && p[0].es === '', 'lupe-log: onbekend onderwerp wordt overig');
  ok(Mi.parse('geen blok') === null && Mi.parse('<log>kapot</log>') === null && Mi.parse('<log>[]</log>').length === 0, 'lupe-log: zonder of met kapot blok');
  const rec = Mi.record(reply, 'roleplay', 'Soy cansado y tengo un coche', { sc: 'En el café' });
  ok(rec.length === 3 && St.state.lupe.log.length === 3 && St.state.lupe.n === 1, 'lupe-log: fouten bewaard');
  ok(St.state.lupe.log.every(e => !('u' in e)), 'privacy: je eigen bericht wordt niet bewaard');
  {
    const old = { log: [{ t: 1, w: 'a', c: 'b', tag: 'other', u: 'Mi hermana se llama Femke' }], n: 1 };
    const m = Mi.merge(old, { log: [], n: 0 });
    ok(m.log.length === 1 && !('u' in m.log[0]) && Mi.scrubAll(JSON.parse(JSON.stringify(old))).log[0].u === undefined, 'privacy: oude berichten weg bij sync en laden');
    const rp = S.AI.roleplaySystem({ role: 'Eres doña Rosa. Haces preguntas sobre la familia del estudiante.', goal: 'familia' });
    ok(rp.includes('PRIVACY') && rp.includes('INVENTED character') && rp.includes('Jouw rol') && S.AI.askSystem().includes('PRIVACY') && S.AI.writingSystem().includes('PRIVACY'), 'privacy: Lupe vraagt niet naar echte persoonlijke dingen, rolkaartje in rollenspel');
    ok(Mi.promptRule().includes('replace a person\'s name'), 'privacy: geen namen in het foutenlog');
  }
  ok(St.state.tags['ser-estar'] && St.state.tags['ser-estar'].no === 1, 'lupe-log: telt mee in zwakke punten');
  const w = Mi.findWord('el carro');
  ok(w && rec[1].srs === w.id && St.state.srs[w.id] && St.state.srs[w.id].d <= S.U.dayIndex(), 'lupe-log: fout woord staat vandaag in de herhaling');
  Mi.record('ok <log>[{"w":"la problema","c":"el problema","tag":"gender"},{"w":"soy en casa","c":"estoy en casa","tag":"ser-estar"},{"w":"el xyzwort","c":"el gugelhupf","tag":"vocab","es":"el gugelhupf","nl":"tulband"}]</log>', 'write', 'tekst');
  ok(Object.values(St.state.myWords).some(m => m.es === 'el gugelhupf'), 'lupe-log: onbekend woord wordt eigen woord');
  const r = Mi.report(30);
  ok(r.total === 6 && r.topics[0].tag === 'ser-estar' && r.topics[0].n === 2 && r.words.length === 2, 'lupe-log: rapport telt per onderwerp');
  ok(r.topics[0].units.length === 1 && r.topics[0].units[0].ex.some(e => e.tag === 'ser-estar'), 'lupe-log: rapport noemt de les');
  ok(Mi.focus(7, 2).length === 1 && Mi.focus(7, 2)[0].tag === 'ser-estar', 'lupe-log: Hoy-focus vanaf 2×');
  const txt = Mi.asText(r);
  ok(txt.includes('ser vs. estar [ser-estar]: 2×') && txt.includes('«soy cansado» → «estoy cansado»') && txt.includes('el carro = de auto'), 'lupe-log: rapport als tekst');
  {
    // fouten uit gewone oefeningen gaan ook in het rapport (en mee in de sync)
    const u4 = S.C.get('a1-04'), i4 = u4.ex.findIndex(e => e.tag === 'contractions' && e.t === 'cloze');
    const it4 = S.Gen.normEx(u4.ex[i4 >= 0 ? i4 : 0], u4, i4 >= 0 ? i4 : 0);
    ok(Mi.exercise(it4, { ok: true, user: 'al', expected: 'al' }) === null && Mi.exercise(it4, { ok: false, self: true }) === null, 'oefenfouten: goed of zelf beoordeeld telt niet');
    const e1 = Mi.exercise(it4, { ok: false, user: 'a el', expected: 'al' });
    const e2 = Mi.exercise({ kind: 'type', translate: true, prompt: 'Waar is de wc?', tag: 'hay-estar', srsId: 'x|a1-04|12' }, { ok: false, dontKnow: true, user: '', expected: '¿Dónde está el baño?' });
    ok(e1 && e1.u === 'a el' && e1.id === it4.srsId && e2.dk === 1 && e2.k === 'vertalen' && e2.t > e1.t, 'oefenfouten: bewaard met id, soort en antwoord');
    const RW = S.reworked; S.reworked = []; // tijdsonafhankelijk: hier zonder «al verwerkt»
    const rx = Mi.report(30);
    ok(rx.exTotal === 2 && rx.exTopics.length === 2 && rx.total === 6, 'oefenfouten: apart geteld in het rapport');
    const tx = Mi.asText(rx);
    ok(tx.includes('Fouten in gewone oefeningen') && tx.includes('ik: «a el» → goed: «al»') && tx.includes('[x|a1-04|12]') && tx.includes('(a1-04)'), 'oefenfouten: in de rapporttekst met ids');
    S.reworked = RW;
    const A2 = { log: [], n: 0, ex: [e1] }, B2 = { log: [], n: 0, ex: [e1, e2] };
    const mx = Mi.merge(A2, B2);
    ok(mx.ex.length === 2 && JSON.stringify(Mi.merge(mx, mx)) === JSON.stringify(mx), 'oefenfouten: sync voegt samen, idempotent');
    const card = St.state.srs['x|a1-04|5'] = St.state.srs['x|a1-04|5'] || { i: 0, d: 0, r: 0, l: 0 };
    card.f = 4; card.g = 1;
    const hd = Mi.hardItems();
    ok(hd.some(x => x.id === 'x|a1-04|5' && x.unit === 'a1-04' && x.f === 4 && x.a), 'oefenfouten: vaak fout uit de herhaling, met antwoord');
    ok(Mi.asText(Mi.report(30)).includes('[x|a1-04|5]'), 'oefenfouten: vaak fout staat in de tekst');
    ok(Mi.asText(Mi.report(30)).includes('✔ al verwerkt in v') && Mi.asText(Mi.report(30)).includes('Al verwerkt in eerdere updates'), 'verwerkt: Lupe ziet wat al in de app zit');
    ok((S.reworked || []).every(x => (x.tag ? S.C.TAGS[x.tag] && S.C.get(x.unit) : x.ids.every(id => { const [k, a, b] = id.split('|'); return k === 'c' ? !!S.conj.table(a, b) : k === 'x' ? !!(S.C.get(a) && S.C.get(a).ex[+b]) : !!(S.C.get(a) && S.C.word(S.C.get(a), +b)); })) && /^\d{4}-\d\d-\d\d(T\d\d:\d\d:\d\dZ)?$/.test(x.date)), 'verwerkt: tags, units en woorden bestaan');
    { // Lupe 27 nov, negende ronde: gerichte tip bij een bekende fout + nieuwe antwoorden
      const u4b = S.C.get('a1-04'), T = S.Gen.tipFor, f = (s) => u4b.ex.find(e => (e.s === s || e.nl === s) && (e.fb || !/centro de la ciudad|Salvador/.test(s)));
      const est = f('Nosotros ___ en el centro de la ciudad.'), sal = f('Wij reizen naar El Salvador.'), izq = f('Ga links af. (u)');
      ok(est && /ser/.test(T('somos', est.fb)) && /est-/.test(T('esas', est.fb)) && T('estamos', est.fb) && !T('', est.fb), 'gerichte tip: ser in plaats van estar');
      ok(/ser/.test(T('Nosotros somos en el centro.', est.fb)), 'gerichte tip: ook bij een meerkeuzezin');
      ok(sal && sal.uitz && /Uitzondering/.test(T('Viajamos al Salvador', sal.fb)) && /plak/.test(T('Es el carro de el señor Pérez', sal.fb)) && /del señor/.test(T('Es el carro de señor Perez', sal.fb)), 'gerichte tip: al/del en de uitzondering El Salvador');
      ok(izq && /a la/.test(T('gira izquerda', izq.fb)) && /qui/.test(T('Gire a la izquerda', izq.fb)) && /gire/.test(T('Gira a la izquierda', izq.fb)), 'gerichte tip: a la izquierda');
      const nx = S.Gen.normEx(est, u4b, u4b.ex.indexOf(est));
      ok(nx.fb === est.fb && !S.Gen.checkType('somos', nx).ok && S.Gen.checkType('estamos', nx).ok, 'gerichte tip: komt mee in de oefening');
      const bus = f('Waar is het busstation?');
      ok(C('donde esta la parada de bus', bus.a, { strict: false }).ok && C('¿Dónde está la parada de autobús?', bus.a).ok, 'busstation: parada de bus/autobús telt, ook zonder accenten');
      ok(C('donde esta mi telefono', f('Waar is mijn telefoon?').a, { strict: false }).ok, 'telefoon: teléfono telt, ook zonder accent');
      const post = S.Gen.wordItem(S.C.word(u4b, 35), 'type', u4b);
      ok(S.Gen.checkType('el correo', post).ok && S.Gen.checkType('la oficina de correos', post).ok, 'postkantoor: el correo telt ook goed');
      ok(u4b.ex.filter(e => e.t === 'match').length >= 2 && (S.Gloss.lookup('está') || {}).t === 'estar', 'koppeloefening estar verandert de tikvertaling niet');
      ok(u4b.grammar.some(g => /eSTAr/.test(g.t) && /Uitzondering/.test(g.html)) && u4b.grammar.some(g => /twee vragen/.test(g.t) && /Uitzondering/.test(g.html) && /Reden/.test(g.html)), 'andere aanpak: ezelsbruggetje en stappenplan, uitzondering met reden');
    }
    const md = S.md ? S.md('- **Titel** (uitleg erbij)\n  Waar: a1-04\n  Wat: iets\n- Tweede') : '';
    ok(!S.md || (md.match(/<li>/g) || []).length === 2 && md.includes('Waar: a1-04'), 'voorstellen: ingesprongen regels horen bij hetzelfde punt');
  }
  {
    // verwerkt in de lesstof? Dan staat het niet meer bij «voor de volgende update»
    const wi = S.C.word(S.C.get('a1-01'), 17);
    ok(wi && wi.es === 'encantado / encantada', 'update-check: w|a1-01|17 is encantado / encantada');
    St.state.lupe.fix = (St.state.lupe.fix || []).concat([{ t: Date.now(), q: wi.nl, u: 'mucho gusto', a: ['encantado'], id: wi.id, unit: 'a1-01' }, { t: Date.now() + 1, q: wi.nl, u: 'qué onda', a: ['encantado'], id: wi.id, unit: 'a1-01' }]);
    const fl = Mi.report(30).fix;
    ok(!fl.some(e => e.u === 'mucho gusto') && fl.some(e => e.u === 'qué onda'), 'update-check: verwerkt antwoord valt weg, open punt blijft');
    St.state.lupe.fix = St.state.lupe.fix.filter(e => e.id !== wi.id);
  }
  {
    // leerling met oude cijfers van vóór de update: Lupe krijgt die punten niet meer als open punt
    const keep = JSON.stringify(St.state);
    const before = new Date('2026-11-24T12:00:00Z').getTime();
    St.state.lupe.ex = [{ t: before, id: 'x|a1-04|14', tag: 'contractions', k: 'invullen', q: 'La panadería está ___ lado del banco.', u: 'a el', a: 'al' }];
    St.state.lupe.log = [{ t: before, m: 'roleplay', w: 'a el museo', c: 'al museo', tag: 'contractions' }];
    St.state.tags.contractions = { ok: 8, no: 13 }; St.state.tags['hay-estar'] = { ok: 23, no: 17 };
    St.state.srs['x|a1-04|14'] = { i: 0, d: 0, r: 0, l: 2, f: 5, g: 2, t: before };
    St.state.srs['w|a1-03|32'] = { i: 0, d: 0, r: 0, l: 1, f: 3, g: 4, t: before };
    let tx = Mi.asText(Mi.report(30, new Date('2026-11-24T22:00:00Z').getTime()));
    ok(!tx.includes('[x|a1-04|14]') && !tx.includes('[w|a1-03|32]') && !/al \/ del \[contractions\]: \d/.test(tx) && !/hay vs\. estar \[hay-estar\]: \d/.test(tx) && /punten hierboven weggelaten/.test(tx), 'verwerkt: oude fouten van vóór de update niet meer als open punt');
    ctx.self = { SPT_VERSION: { number: '9.0.0' } };
    Mi.exercise({ kind: 'mc', fill: true, sentence: 'Voy ___ museo.', tag: 'contractions', srsId: 'x|a1-04|14' }, { ok: false, user: 'a el', expected: 'al' });
    tx = Mi.asText(Mi.report(30));
    ok(tx.includes('[x|a1-04|14]') && /gemaakt in v[\d.]+ of nieuwer: 1/.test(tx) && /· ná v[\d.]+/.test(tx), 'verwerkt: nieuwe fout ná de update komt terug, met aantal');
    ok(St.state.lupe.ex.slice(-1)[0].v === '9.0.0', 'verwerkt: fout bewaart de app-versie');
    // fout ná de mergedatum, maar nog in een oude app-versie (niet bijgewerkt): telt als vóór de update
    St.state.lupe.ex = [{ t: Date.now(), v: '1.0.0', id: 'x|a1-04|14', tag: 'contractions', k: 'invullen', q: 'Voy ___ museo.', u: 'a el', a: 'al' }];
    tx = Mi.asText(Mi.report(30));
    ok(!/al \/ del \[contractions\]: \d/.test(tx), 'verwerkt: fout in oude app-versie telt niet als nieuw');
    St.state.lupe.log = [{ t: Date.now(), v: '1.0.0', m: 'write', w: 'donde es', c: 'dónde está', tag: 'zz-test' }];
    ok(/· v1\.0\.0/.test(Mi.asText(Mi.report(30))), 'verwerkt: versie zichtbaar bij elke fout');
    delete ctx.self;
    St.state = JSON.parse(keep);
  }
  const ses = Mi.practice(['ser-estar'], [w.id]);
  ok(ses.items.length > 0 && ses.items.some(it => it.tag === 'ser-estar'), 'lupe-log: oefensessie voor de fouten');
  const A = JSON.parse(JSON.stringify(St.state)), B = JSON.parse(JSON.stringify(St.state));
  B.lupe.log.push({ t: Date.now() + 99, m: 'write', w: 'a', c: 'b', tag: 'gender' }); B.updated = 5;
  const m = St.mergeStates(A, B);
  ok(m.lupe.log.length === 7 && JSON.stringify(St.mergeStates(m, m).lupe) === JSON.stringify(m.lupe) && St.mergeStates(B, A).lupe.log.length === 7, 'lupe-log: sync voegt samen, idempotent');
  ok(!/vosotros/i.test(S.AI.roleplaySystem({ role: 'x', goal: 'y' }).replace(/never "vosotros"/g, '')) && S.AI.roleplaySystem({ role: 'x', goal: 'y' }).includes('<log>') && S.AI.writingSystem().includes('<log>'), 'lupe-log: prompts vragen om het blok');
  // herbeoordeling: Lupe keurt een fout gerekend antwoord toch goed → rapport + voortaan goed
  const tr = S.C.all().flatMap(u => u.ex.map((e, i) => S.Gen.normEx(e, u, i))).find(x => x && x.translate);
  ok(Mi.regrade(tr, 'mi respuesta', { correct: false }) === null && !Mi.accepted(tr.prompt, 'mi respuesta'), 'herbeoordeling: afgekeurd wordt niet bewaard');
  const fx = Mi.regrade(tr, 'Mi respuesta', { correct: true, feedback: 'Está bien.', better: 'x', app: 'Voeg «mi respuesta» toe als goed antwoord.' });
  ok(fx && fx.unit && S.C.get(fx.unit) && fx.a.length && Mi.accepted(tr.prompt, 'mi respuésta ') && !Mi.accepted(tr.prompt, 'otra'), 'herbeoordeling: bewaard en voortaan goed');
  Mi.regrade(tr, 'mi respuesta', { correct: true, app: 'nog eens' });
  ok(St.state.lupe.fix.length === 1 && Mi.report(30).fix.length === 1, 'herbeoordeling: dubbel antwoord één keer');
  const ut = Mi.updateText(Mi.report(30));
  ok(ut.includes('«mi respuesta»') && ut.includes('nog eens') && ut.includes(tr.prompt) && Mi.asText(Mi.report(30)).includes('Voor de volgende update'), 'herbeoordeling: in het rapport om te delen');
  St.state.lupe.update = { t: Date.now(), text: '- Voeg meer oefeningen toe' };
  ok(Mi.updateText(Mi.report(30)).includes('Voorstellen van Lupe') && !Mi.updateText(Mi.report(30), { proposal: false }).includes('Voorstellen van Lupe'), 'herbeoordeling: voorstellen van Lupe');
  const F1 = JSON.parse(JSON.stringify(St.state)), F2 = JSON.parse(JSON.stringify(St.state));
  F2.lupe.fix.push({ t: Date.now() + 5, q: 'otra', u: 'algo', a: [] });
  const fm = St.mergeStates(F1, F2);
  ok(fm.lupe.fix.length === 2 && fm.lupe.update && JSON.stringify(St.mergeStates(fm, fm).lupe.fix) === JSON.stringify(fm.lupe.fix), 'herbeoordeling: sync voegt samen');
  St.state = JSON.parse(saved);
}

/* ---------- dagplan op Hoy ---------- */
{
  const D = S.Dagplan;
  let st = D.status({ done: {} }, { due: 5 });
  ok(st.n === 0 && !st.all && st.next === 'review', 'dagplan: leeg begint bij herhaling');
  st = D.status({ done: {} }, { due: 0 });
  ok(st.tasks.review.done && st.tasks.review.free && st.next === 'learn', 'dagplan: niets te herhalen telt als klaar');
  st = D.status({ done: { review0: true } }, { due: 3 });
  ok(st.tasks.review.done, 'dagplan: eerder vandaag niets te herhalen blijft klaar');
  st = D.status({ done: { review: true, learn: 2, speak: true } }, { due: 4 });
  ok(st.all && st.n === 3 && !st.chest && st.next === null, 'dagplan: alles af, beloning nog dicht');
  const day = { done: { review: true, learn: 1 } };
  const f1 = D.fresh(day, D.status(day, { due: 1 }));
  ok(f1.join() === 'review,learn' && D.fresh(day, D.status(day, { due: 1 })).length === 0, 'dagplan: afvinken wordt één keer getoond');
  const free = { done: {} };
  ok(D.fresh(free, D.status(free, { due: 0 })).length === 0, 'dagplan: vrije herhaling geen afvinkmoment');
  const now = new Date(2026, 10, 18, 15); // woensdag
  const k = d => S.U.todayKey(new Date(2026, 10, d, 15));
  const wk = D.week({ [k(16)]: { min: 5, done: { chest: true } }, [k(17)]: { min: 3, done: {} } }, now);
  ok(wk.length === 7 && wk[0].label === 'ma' && wk[0].state === 'star' && wk[1].state === 'fire' && wk[2].today && wk[2].state === 'miss' && wk[3].state === 'future', 'dagplan: weekstrook ma–zo met ster, vuur en vandaag');
  ok(D.week({}, new Date(2026, 10, 22, 2))[5].today, 'dagplan: zondag 02:00 telt nog als zaterdag');
  ok(D.plansDone({ a: { done: { chest: true } }, b: { done: {} }, c: {} }) === 1, 'dagplan: geopende beloningen tellen');
  const cal = D.calendar({ [k(16)]: { min: 30, xp: 50, items: 10, ok: 9, done: { chest: true } }, [k(17)]: { min: 3, done: {} }, [k(10)]: { min: 0, items: 4, done: {} }, [k(1)]: { min: 12, done: {} } }, now, 12);
  const last = cal.weeks[11].cells;
  ok(cal.weeks.length === 12 && cal.weeks.every(w => w.cells.length === 7) && last[0].key === k(16) && last[0].date.getDay() === 1, 'kalender: 12 weken, kolom begint op maandag, nieuwste rechts');
  ok(last[0].level === 4 && last[0].plan && last[1].level === 1 && last[2].today && last[2].level === 0 && last[3].future && !last[2].future, 'kalender: niveaus, vandaag en toekomst');
  ok(cal.weeks[10].cells[1].level === 1, 'kalender: alleen antwoorden zonder minuten telt ook als geoefend');
  ok(cal.active === 4 && cal.weekActive === 2 && cal.weekPast === 3 && Math.round(cal.min) === 45, 'kalender: telt oefendagen, minuten en deze week');
  ok(cal.weeks.filter(w => w.month).map(w => w.month).join() === 'sep,okt,nov' && cal.weeks[0].month === 'sep', 'kalender: maandnamen boven de kolom waar de maand begint');
  ok(D.calendar(null, now, 12).active === 0, 'kalender: lege voortgang');
  const L = S.Tutor.lines;
  ok(L.hello({ chestReady: 1 }).es === L.chestReady.es && L.hello({ paused: 1, chestReady: 1 }).es !== L.chestReady.es, 'Lupe: beloning klaar, maar onderbroken les gaat voor');
  ok(L.every([]).includes(L.planDone({ streak: 12 }).es) && L.every([]).includes(L.hello({ planLeft: 1 }).es), 'Lupe: dagplanzinnen worden ingesproken');
}
{ // woordtoets: veel woorden in één keer testen, ook van units die je nog niet deed
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const W = S.WordTest, u = S.C.all()[0];
  S.Store.state.srs = { ['w|' + u.id + '|0']: { d: 0, i: 1, e: 2.4, r: 1, l: 0 } };
  const all = W.pool('A1', 'all'), nw = W.pool('A1', 'new');
  ok(all.length > 200 && new Set(all.map(([w]) => w.es)).size === all.length, 'woordtoets: heel A1, elk woord één keer');
  ok(nw.length === all.length - 1 && !nw.some(([w]) => w.id === 'w|' + u.id + '|0'), 'woordtoets: «alleen nieuwe» slaat woorden in je herhaling over');
  const ses = W.session({ src: 'A1', which: 'new', len: 'n50', form: 'type', what: 'w' });
  ok(ses.items.length === 50 && ses.items.every(it => it.srsId && it.srsId[0] === 'w' && it.kind === 'type' && it.wt === W.KNOWN.type && it.wt >= 7), 'woordtoets: 50 getypte woorden, goed = bekend (>= 7 dagen)');
  ok(W.session({ src: u.id, which: 'all', len: 'n25', form: 'fast', what: 'w' }).items.every(it => it.kind === 'mc' && it.wt === W.KNOWN.mc && it.wt < 7), 'woordtoets: meerkeuze goed = aan het leren, niet bekend');
  ok(W.session({ src: u.id, which: 'all', len: 'all', form: 'fast', what: 'w' }).items.length === W.pool(u.id, 'all').length, 'woordtoets: «alles» = hele unit');
  const tz = W.session({ src: 'A1', which: 'new', len: 'n100', form: 'type', what: 'ws' });
  const nx = tz.items.filter(it => it.srsId[0] === 'x').length;
  ok(!tz.timer && tz.items.length === 100 && nx >= 25 && nx <= 40 && tz.items.every(it => it.kind === 'type' && it.wt === W.KNOWN.type), 'woordtoets: 100 vragen, ±1 zin op 3 woorden, bij typen alleen typzinnen');
  ok(W.sentPool('A1', 'all').every(([e]) => e.t !== 'match'), 'woordtoets: geen koppelvragen als zin');
  S.Store.state = keep;
}
{ // snelle sprint: eerst wat aan de beurt is, dan zwakke woorden, dan de rest
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const t = S.U.dayIndex(), all = S.C.all(), u0 = all[0], uFar = all[all.length - 1];
  S.Store.state.units = { [u0.id]: { steps: { vocab1: 1 } } };
  const id = (u, i) => 'w|' + u.id + '|' + i;
  S.Store.state.srs = {
    [id(uFar, 0)]: { d: t - 2, i: 1, e: 2.4, r: 1, l: 0 }, // aan de beurt, uit een unit waar je nog niet aan begon
    [id(u0, 1)]: { d: t, i: 3, e: 2.4, r: 1, l: 0 },
    [id(u0, 2)]: { d: t + 3, i: 3, e: 2.4, r: 0, l: 4 }, // zwak
    [id(u0, 3)]: { d: t + 30, i: 30, e: 2.8, r: 5, l: 0 }
  };
  const pk = S.Gen.sprintPick(10).map(([w]) => w.id);
  ok(pk.length === 10 && pk[0] === id(uFar, 0) && pk[1] === id(u0, 1) && pk[2] === id(u0, 2), 'sprint: eerst aan de beurt (oudste eerst), dan zwak');
  ok(pk.slice(3).every(x => x.startsWith('w|' + u0.id + '|')), 'sprint: aanvullen alleen uit begonnen units');
  ok(S.Gen.sprint(30).items.length === 30 && S.Gen.sprint(30).timer === 120, 'sprint: 30 vragen, 2 minuten');
  S.Store.state = keep;
}
{ // profielen: bestaande voortgang (spt.v1) blijft onaangeroerd, nieuwe profielen krijgen eigen sleutels
  const mem = {};
  const ls = { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); }, removeItem: k => { delete mem[k]; } };
  const old = JSON.stringify({ v: 1, name: 'Mark', xp: 1234, srs: { 'w|a1-01|0': { d: 1, i: 3, e: 2.5, r: 1, l: 0 } }, settings: { goal: 30, aiKey: 'sk-geheim' }, placement: { done: true, level: 'A2' } });
  mem['spt.v1'] = old; mem['spt.sync'] = JSON.stringify({ token: 'ghp_x', gistId: 'abc', login: 'mark' });
  const mk = () => {
    const c = vm.createContext({ console, setTimeout, clearTimeout, localStorage: ls, sessionStorage: ls, TextEncoder, crypto: globalThis.crypto, fetch: async () => { throw new Error('geen netwerk in test'); } });
    c.window = c; c.globalThis = c;
    for (const f of ['js/core.js', 'js/sync.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
    return c.SPT;
  };
  let P1 = mk();
  ok(P1.Profiles.activeId() === 'main' && !P1.Profiles.many(), 'profielen: zonder register is er één profiel (main)');
  ok(!('spt.profiles' in mem), 'profielen: register wordt niet geschreven zolang er niets verandert');
  P1.Store.load();
  ok(P1.Store.state.xp === 1234 && P1.Store.state.name === 'Mark', 'profielen: main laadt de bestaande voortgang uit spt.v1');
  ok(mem['spt.v1'] === old, 'profielen: spt.v1 is na laden nog exact hetzelfde');
  ok(P1.Sync.status().file === 'espanol-latino-voortgang.json' && P1.Sync.status().gistId === 'abc', 'profielen: bestaande sync houdt het oude gist-bestand');
  const id = P1.Profiles.add('Ana María', '🌺');
  ok(P1.Profiles.many() && mem['spt.p.' + id] && JSON.parse(mem['spt.p.' + id]).name === 'Ana María', 'profielen: nieuw profiel met eigen lege voortgang');
  ok(mem['spt.v1'] === old && mem['spt.sync'].includes('ghp_x'), 'profielen: nieuw profiel laat main ongemoeid');
  // overschakelen (zonder herladen in de test): nieuwe context leest het actieve profiel
  P1.Profiles.reg.active = id; P1.Profiles.write();
  const P2 = mk(); P2.Store.load();
  ok(P2.Store.state.name === 'Ana María' && P2.Store.state.xp === 0 && !P2.Store.state.settings.aiKey, 'profielen: tweede profiel laadt eigen voortgang, zonder AI-sleutel');
  ok(!P2.Sync.enabled(), 'profielen: tweede profiel heeft geen token van main');
  P2.Store.state.xp = 50; P2.Store.save();
  ok(JSON.parse(mem['spt.p.' + id]).xp === 50 && mem['spt.v1'] === old, 'profielen: opslaan in profiel 2 raakt spt.v1 niet');
  const ff = P2.Sync.freshFile('Ana María');
  ok(/^espanol-latino-voortgang-ana-maria-[a-z0-9]{1,4}\.json$/.test(ff) && ff !== 'espanol-latino-voortgang.json', 'profielen: nieuw gist-bestand per profiel (' + ff + ')');
  await P2.Profiles.setPin('2580');
  ok(P2.Profiles.hasPin() && !JSON.parse(mem['spt.profiles']).pin.includes('2580'), 'pincode: opgeslagen als hash, niet als tekst');
  const P3 = mk();
  ok(P3.Profiles.locked() && !(await P3.Profiles.unlock('1111')) && P3.Profiles.locked(), 'pincode: verkeerde code ontgrendelt niet');
  ok((await P3.Profiles.unlock('2580')) && !P3.Profiles.locked(), 'pincode: juiste code ontgrendelt');
  let bad = false; try { await P3.Profiles.setPin('12'); } catch (e) { bad = true; }
  ok(bad, 'pincode: te kort wordt geweigerd');
  ok(!P3.Profiles.remove('main') && P3.Profiles.remove(id) && !('spt.p.' + id in mem) && P3.Profiles.activeId() === 'main' && mem['spt.v1'] === old, 'profielen: main kan niet weg; ander profiel wel, en dan terug naar main');
  // één cursus weghalen (bv. een ongebruikte Spaans→Nederlands-cursus in het hoofdprofiel)
  P3.Profiles.addCourse('main', 'nl-es');
  ok(P3.Profiles.get('main').courses.join() === 'es-nl,nl-es' && 'spt.p.main.nl-es' in mem, 'cursus weg: extra cursus aangezet');
  ok(!P3.Profiles.canRemoveCourse('main', 'es-nl') && !P3.Profiles.removeCourse('main', 'es-nl') && mem['spt.v1'] === old, 'cursus weg: hoofdcursus (Spaans, spt.v1) kan niet weg');
  P3.Profiles.get('main').course = 'nl-es';
  ok(P3.Profiles.removeCourse('main', 'nl-es') && !('spt.p.main.nl-es' in mem) && P3.Profiles.get('main').courses.join() === 'es-nl' && P3.Profiles.get('main').course === 'es-nl' && mem['spt.v1'] === old, 'cursus weg: extra cursus weg, terug naar de hoofdcursus, Spaanse voortgang onaangeroerd');
  ok(!P3.Profiles.canRemoveCourse('main', 'es-nl') && !P3.Profiles.removeCourse('main', 'nl-es'), 'cursus weg: een profiel houdt altijd minstens één cursus');
  { // AI-sleutel hoort bij het profiel: bij wisselen van cursus/taal blijft hij, oude sleutel gaat vanzelf mee over
    ok(!('spt.aikey' in mem) || mem['spt.aikey'] === 'sk-geheim', 'AI-sleutel: vooraf alleen in spt.v1 (of al overgezet)');
    delete mem['spt.aikey'];
    const PA = mk(); PA.Store.load();
    ok(PA.Store.state.settings.aiKey === 'sk-geheim' && mem['spt.aikey'] === 'sk-geheim' && mem['spt.v1'] === old, 'AI-sleutel: bestaande sleutel uit de Spaanse cursus naar het profiel, spt.v1 onaangeroerd');
    PA.Profiles.addCourse('main', 'en-nl'); PA.Profiles.get('main').course = 'en-nl'; PA.Profiles.write();
    const PB = mk(); PB.Store.load();
    ok(PB.course.id === 'en-nl' && PB.Store.state.settings.aiKey === 'sk-geheim', 'AI-sleutel: werkt ook in een andere cursus (Engels)');
    PB.Store.save();
    ok(!mem['spt.p.main.en-nl'].includes('sk-geheim'), 'AI-sleutel: staat niet in het cursusbestand');
    PB.Store.state.settings.aiKey = 'sk-nieuw'; PB.Store.save();
    ok(mem['spt.aikey'] === 'sk-nieuw' && !mem['spt.v1'].includes('sk-geheim'), 'AI-sleutel: nieuwe sleutel geldt voor het profiel, oude kopie weg');
    PA.Profiles.get('main').course = 'es-nl'; PA.Profiles.write();
    const PC = mk(); PC.Store.load();
    ok(PC.Store.state.settings.aiKey === 'sk-nieuw', 'AI-sleutel: terug in Spaans dezelfde nieuwe sleutel');
    PC.Store.state.settings.aiKey = ''; PC.Store.save();
    const PD = mk(); PD.Store.load();
    ok(PD.Store.state.settings.aiKey === '' && mem['spt.aikey'] === '', 'AI-sleutel: verwijderen blijft verwijderd (komt niet terug uit oude kopie)');
    PD.Profiles.removeCourse('main', 'en-nl');
  }
  ok(P3.Sync.courseFile('espanol-latino-voortgang.json', 'nl-es') === 'espanol-latino-voortgang--nl-es.json' && P3.Sync.courseFile('espanol-latino-voortgang--en-es.json', 'nl-es') === 'espanol-latino-voortgang--nl-es.json', 'cursus weg: juist gist-bestand per cursus');
  { // alleen het cursusbestand gaat uit de gist, het hoofdbestand blijft
    const calls = [];
    const c = vm.createContext({ console, setTimeout, clearTimeout, localStorage: ls, sessionStorage: ls, TextEncoder, crypto: globalThis.crypto,
      fetch: async (u, o) => { calls.push([(o && o.method) || 'GET', u, o && o.body]); return { ok: true, status: 200, json: async () => /\/gists\?/.test(u) ? [{ id: 'g1', files: { 'espanol-latino-voortgang.json': {}, 'espanol-latino-voortgang--nl-es.json': {} } }] : {} }; } });
    c.window = c; c.globalThis = c;
    for (const f of ['js/core.js', 'js/sync.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
    const n = await c.SPT.Sync.removeCourse('espanol-latino-voortgang.json', 'nl-es', undefined, 'main');
    const patch = calls.find(x => x[0] === 'PATCH');
    ok(n === 1 && patch && JSON.parse(patch[2]).files['espanol-latino-voortgang--nl-es.json'] === null && !('espanol-latino-voortgang.json' in JSON.parse(patch[2]).files) && !calls.some(x => x[0] === 'DELETE'), 'cursus weg: alleen het cursusbestand uit de gist, hoofdbestand blijft');
    c.SPT.Store.load(); c.SPT.Store.frozen = true; const before = mem['spt.v1']; c.SPT.Store.state.xp = 1; c.SPT.Store.save();
    ok(mem['spt.v1'] === before, 'cursus weg: bevroren opslag schrijft niets terug');
  }
}
{ // cursussen met uitleg in het Spaans: Engels (en-es) en Nederlands (nl-es)
  const list = JSON.parse(require('child_process').execFileSync(process.execPath, [path.join(root, 'tools/tts-texts.js')], { maxBuffer: 64 << 20 }).toString());
  const have = new Set(list.map(x => x.k));
  const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
    .filter(f => !/(app|lesson|ai|sync|ask)\.js$/.test(f));
  for (const course of ['en-es', 'nl-es']) {
    const c = vm.createContext({ console, setTimeout, clearTimeout }); c.window = c; c.globalThis = c; c.self = c; c.SPT_COURSE = course;
    for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
    const K = c.SPT, us = K.C.all(), w = course + ': ';
    ok(K.course.id === course && K.course.ui === 'es' && K.i18n.on, w + 'cursus actief met Spaanse schermteksten');
    ok(us.length >= 5 && us.every(u => u.id.startsWith(course.slice(0, 2) + '-')), w + 'alleen eigen lesstof (' + us.length + ' units)');
    ok(K.placement.length >= 12 && K.placement.every(q => K.C.available(q.lv)) && K.scenarios.length >= 4 && K.phrases.length >= 10 && !K.regions.length, w + 'niveautest, gesprekken en uitdrukkingen');
    const latam = /vosotros|vuestr|\b(sois|habéis|tenéis|podéis|queréis|coche|ordenador|móvil|zumo|vale)\b/i;
    const ids = new Set();
    for (const u of us) {
      const where = w + u.id;
      ok(!ids.has(u.id), where + ' dubbel id'); ids.add(u.id);
      ['id', 'level', 'title', 'nl', 'icon'].forEach(k => ok(typeof u[k] === 'string' && u[k], where + ' mist ' + k));
      ok(u.goals.length >= 2 && u.vocab.length >= 20 && u.grammar.length >= 2 && u.ex.length >= 12, where + ' omvang');
      const seen = new Set(); u.vocab.forEach(v => { ok(v.length >= 2 && v.every(x => typeof x === 'string' && x.trim()), where + ' woord ' + v[0]); ok(!seen.has(v[0]), where + ' dubbel woord ' + v[0]); seen.add(v[0]); });
      u.grammar.forEach((g, gi) => {
        const open = (g.html.match(/<(b|i|p|s)>/g) || []).length, close = (g.html.match(/<\/(b|i|p|s)>/g) || []).length;
        ok(g.t && open === close, where + ' grammatica ' + gi + ' html');
        if (g.table) ok(g.table.every(r => r.length === g.table[0].length), where + ' tabel ' + gi);
      });
      u.ex.forEach((e, i) => {
        const x = where + ' ex' + i;
        ok(!e.tag || K.C.TAGS[e.tag], x + ' tag ' + e.tag);
        if (e.t === 'mc') ok(new Set(e.o).size === e.o.length, x + ' mc');
        if (e.t === 'cloze') ok((e.s.match(/___/g) || []).length === 1 && (!e.o || (e.o[0] === e.a[0] && new Set(e.o).size === e.o.length)), x + ' cloze');
        if (e.t === 'tr') ok(e.nl && e.a.length, x + ' tr');
        if (e.t === 'order') ok(e.s.split(' ').length >= 3, x + ' order');
        if (e.t === 'match') ok(e.p.length >= 3 && e.p.length <= 6, x + ' match');
      });
      ok(u.dialogue.lines.length >= 6 && u.dialogue.lines.every(l => l.length === 3 && l.every(Boolean)) && u.dialogue.q.length >= 3, where + ' dialoog');
      ok(u.reading.p.length >= 3 && u.reading.q.length >= 3 && u.say.length >= 2 && u.task.model && u.scenario.role, where + ' lezen/toepassen');
      // Spaanse uitleg: Latijns-Amerikaans
      const esText = [u.nl, ...u.goals, ...u.grammar.map(g => g.t + ' ' + g.html), u.culture.html, ...u.vocab.map(v => v[1]), ...u.ex.map(e => (e.nl || '') + ' ' + (e.q || '') + ' ' + (e.x || '')), u.task.nl, u.scenario.nl, u.scenario.goal].join(' ');
      ok(!latam.test(esText), where + ' uitleg niet Latijns-Amerikaans: ' + (esText.match(latam) || [])[0]);
      for (const st of K.Gen.STEPS) {
        const ses = K.Gen.stepSession(u, st.id);
        ok(ses && ses.items.length && ses.items.every(Boolean), where + ' sessie ' + st.id);
        ses.items.forEach(it => { if (it.kind === 'mc') ok(it.options.includes(it.answer) && new Set(it.options).size === it.options.length, where + ' ' + st.id + ' mc-item ' + (it.prompt || it.q || it.sentence)); });
        // alles wat voorgelezen wordt, is ingesproken met de stem van deze cursus
        ses.items.forEach(it => { [it.audio, it.word && it.word.es].forEach(t => t && ok(have.has(K.Speech.clipKey(t, course)), where + ' opname ontbreekt: ' + t)); });
      }
      u.dialogue.lines.forEach(l => ok(have.has(K.Speech.clipKey(l[1], course)), where + ' dialoog-opname: ' + l[1]));
    }
    const lvls = K.C.LEVELS.map(L => L.id).filter(l => K.C.available(l));
    ok(lvls[0] === 'A1' && lvls.every((l, i) => l === K.C.LEVELS[i].id), w + 'niveaus op volgorde: ' + lvls.join(','));
    for (const l of lvls) {
      ok(K.C.unitsOf(l).length === 10 && K.placement.filter(q => q.lv === l).length >= 12, w + l + ': 10 units en 12+ toetsvragen');
      for (let r = 0; r < 5; r++) { const b = K.Gen.levelTestBand(l); ok(b.items.length >= 8 && b.items.every(it => it.options.includes(it.answer)), w + 'niveautest ' + l); }
    }
    const nx = K.C.LEVELS[lvls.length];
    ok(!nx || (!K.Gen.levelTestBand(nx.id).items.length && !K.C.available(nx.id)), w + 'volgend niveau nog niet beschikbaar');
    // antwoordcontrole: lidwoorden van de doeltaal
    const it = { answers: [course === 'en-es' ? 'the house' : 'het huis'], articleOptional: true };
    ok(K.Gen.checkType(course === 'en-es' ? 'house' : 'huis', it).ok, w + 'lidwoord mag ontbreken');
    if (course === 'nl-es') ok(!K.Gen.checkType('de huis', it).ok && K.Gen.checkType('de huis', it).warn === 'article-wrong', w + 'verkeerd lidwoord de/het');
    ok(K.check.check("I'm from Panama", ["I'm from Panama."]).ok || course !== 'en-es', w + 'apostrof');
    // schermteksten
    ok(K.t('Vandaag') !== 'Vandaag' && K.t('Instellingen') !== 'Instellingen', w + 'schermteksten vertaald');
    ok(K.t(K.U.plural(3, 'dag', 'dagen')) === '3 días', w + 'meervoud vertaald: ' + K.U.plural(3, 'dag', 'dagen'));
    ok(Object.values(K.i18n.dict).every(v => !latam.test(v)), w + 'vertaling Latijns-Amerikaans');
  }
}
{ // Op reis in elke taal: elke cursus met een landenlijst heeft een eigen kaart, vlaggen en opnames per land
  const list = JSON.parse(require('child_process').execFileSync(process.execPath, [path.join(root, 'tools/tts-texts.js')], { maxBuffer: 64 << 20 }).toString());
  const have = new Set(list.map(x => x.k));
  const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
    .filter(f => !/(app|lesson|ai|sync|ask)\.js$/.test(f));
  const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  // één rij per cursus met een kaart: [doeltaal, minimaal aantal landen]
  const deep = ['es-nl', 'en-nl', 'fr-nl', 'de-nl', 'tr-nl', 'nl-es']; // cursussen waarin elk land een dialoog en een gesprek met de docent heeft
  const want = { 'es-nl': ['es', 21], 'en-nl': ['en', 12], 'nl-es': ['nl', 5], 'fr-nl': ['fr', 9], 'de-nl': ['de', 5], 'tr-nl': ['tr', 6] };
  for (const course of Object.keys(S.COURSES)) {
    const w = 'op reis ' + course + ': ';
    const c = vm.createContext({ console, setTimeout, clearTimeout }); c.window = c; c.globalThis = c; c.self = c; c.SPT_COURSE = course;
    for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
    const K = c.SPT, Mu = K.Mundo, ps = Mu.list(), meta = Mu.meta();
    ok(Object.keys(K.MAPS || {}).every(t => t === K.course.target), w + 'alleen de kaart van de eigen doeltaal');
    if (!want[course]) { ok(!ps.length, w + 'geen landen van een andere cursus'); continue; }
    const [tg, min] = want[course], M = K.MAPS[tg], k = M && (M.k || 1);
    ok(meta.target === tg && K.course.target === tg && M, w + 'kaart ' + tg + ' geladen');
    ok(ps.length >= min && new Set(ps.map(p => p.id)).size === ps.length, w + ps.length + ' landen, unieke codes');
    ok(meta.intro && ps.some(p => p.voice === meta.base), w + 'inleiding en basisstem');
    ps.forEach(p => {
      const v = w + p.id + ' ';
      ok(fs.existsSync(path.join(root, 'icons/vlaggen/' + (p.flagImg || p.id) + '.png')) && files.some(f => f.includes('kaarten/' + tg)) && sw.includes('content/kaarten/' + tg + '.js'), v + 'vlag en kaartbestand');
      ok(p.noShape || (M.c[p.id] && M.c[p.id].d.length > 20), v + 'staat op de kaart');
      ok(p.pin && p.pin[0] >= 15 * k && p.pin[0] <= M.w - 15 * k && p.pin[1] >= 15 * k && p.pin[1] <= M.h - 15 * k, v + 'vlagknop binnen de kaart');
      ok(K.placeGroups.some(g => g.id === p.group), v + 'heeft een groep');
      ok(p.hello && p.hello.length >= 2 && p.intro && p.sounds.length >= 2 && p.sounds.every(x => (x.length === 4 || x.length === 5) && x.every(Boolean) && x[4] !== x[2]), v + 'begroeting, intro en klanken');
      ok(p.words.length >= 8 && p.words.every(w2 => w2[0] && w2[1] && (!w2[2] || ['i', 'g'].includes(w2[2]))) && new Set(p.words.map(x => x[0])).size === p.words.length, v + 'woorden en labels, geen dubbele');
      const pr = Mu.practice(p), qz = Mu.quiz(p);
      ok(pr.items.length >= p.words.length * 2 && qz.items.length === Math.min(10, p.words.length) && [...pr.items, ...qz.items].every(it => it.kind !== 'mc' || (it.options.includes(it.answer) && new Set(it.options).size === it.options.length)), v + 'oefening en toets');
      // alles wat de landpagina voorleest, is ingesproken met de stem van dat land
      const ns = Mu.ns(p), clip = (t, n) => have.has(K.Speech.clipKey(t, n));
      ok(ns === (tg === 'es' ? 'pl-' + p.id : 'pl-' + tg + '-' + p.id), v + 'eigen naamruimte voor opnames');
      ok(clip(p.hello[0], ns) && p.sounds.every(x => clip(x[2], ns)) && p.words.every(x => clip(x[0], ns)), v + 'opnames per land');
      ok(p.voice === meta.base || p.sounds.every(x => have.has(K.Speech.clipKey(x[4] || x[2], K.course.ns))), v + 'neutrale versie ingesproken');
      // verdieping: een eigen dialoog en een eigen gesprek met de docent (content/…/landen-praten.js)
      if (deep.includes(course)) ok(p.dialog && p.talk, v + 'heeft een dialoog en een gesprek met de docent');
      if (p.dialog) {
        const d = p.dialog, who = [...new Set(d.lines.map(l => l[0]))];
        ok(d.t && d.nl && d.place && d.lines.length >= 7 && d.lines.every(l => l[0] && l[1] && l[2]) && who.length >= 2 && who.every(x => ['f', 'm'].includes(d.who[x])), v + 'dialoog: titel, plaats, zinnen met vertaling, stem per spreker');
        ok(d.q.length >= 3 && d.q.every(q => q.t === 'mc' && q.q && q.o.length >= 3 && new Set(q.o).size === q.o.length), v + 'dialoog: drie vragen met unieke opties');
        ok(d.lines.filter(l => l[3]).length >= 3 && d.lines.every(l => !l[3] || /^(🗺️|⚠️ <b>(Uitzondering|Excepción):<\/b>)/.test(l[3])), v + 'dialoog: lokale woorden uitgelegd, afwijkingen heten uitzondering');
        ok(d.lines.every(l => !/Uitzondering|Excepción/.test(l[3] || '') || /(Reden|Motivo):/.test(l[3])), v + 'dialoog: elke uitzondering heeft een reden');
        ok(d.lines.every(l => clip(l[1], ns)) && d.q.every(q => clip(q.q, ns)), v + 'dialoog ingesproken in de naamruimte van het land');
        const vs = who.map(x => (list.find(y => y.k === K.Speech.clipKey(d.lines.find(l => l[0] === x)[1], ns)) || {}).voice);
        ok(new Set(vs).size === who.length, v + 'dialoog: elke spreker een eigen stem (' + vs.join(', ') + ')');
        if (tg === 'es') ok(who.every(x => x === 'Mark' || K.Cast.forSpeaker(x, d.place)) && K.Cast.country(d.place) === p.voice, v + 'dialoog: de spreker van het land is een getekend personage uit dat land');
        const ses = Mu.dialogSession(p);
        ok(ses.items[0].kind === 'dialogue' && ses.items[0].clipNs === ns && ses.items.length === 1 + d.q.length && ses.items.slice(1).every(it => it.kind === 'mc' && it.options.includes(it.answer) && !it.srsId), v + 'dialoog: les met vragen, niets in de herhaling');
        const lokaal = p.words.filter(x => x[2] !== 'g').map(x => x[0].split(/\s*\/\s*/)[0].replace(/[¡!¿?]/g, '').toLowerCase());
        ok(p.voice === meta.base && tg !== 'es' || lokaal.filter(x => d.lines.some(l => l[1].toLowerCase().includes(x))).length >= 2, v + 'dialoog gebruikt woorden van het land');
        ok(!p.words.filter(x => x[2] === 'g').some(x => d.lines.some(l => new RegExp('(^|[^\\p{L}])' + x[0].replace(/[¡!¿?]/g, '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^\\p{L}]|$)', 'iu').test(l[1]))), v + 'dialoog zonder grove woorden');
      }
      if (p.talk) {
        const t = p.talk, sc = Mu.talkScenario(p);
        ok(t.title && t.place && t.nl && t.goal && t.role && t.local, v + 'gesprek: titel, plaats, uitleg, doel, rol en taalgebruik');
        ok(sc.id === 'pais-' + tg + '-' + p.id && sc.local.words.length >= 6 && !p.words.filter(x => x[2] === 'g').some(x => sc.local.words.some(y => y.startsWith(x[0] + ' ='))), v + 'gesprek: de docent krijgt de woorden van het land mee, zonder de grove');
      }
    });
    ok(list.filter(x => String(x.ns || '').startsWith(Mu.nsFor(tg, ''))).every(x => !/^es-MX/.test(x.voice) || tg === 'es'), w + 'geen Mexicaanse stem in een ander land');
  }
}
{ // Spaanse «smaaknamen» (tabbladen, spellen, uitroepen, tegelletters) staan in elke cursus in de doeltaal
  const src = f => fs.readFileSync(path.join(root, f), 'utf8');
  const TERMS = ['Hoy', 'Ruta', 'Práctica', 'Docente', 'Perfil', 'Tu ruta', 'Juegos de palabras', 'Sopa de letras', 'Crucigrama', 'Revoltijo', 'El volcán', 'Parejas', '¡Perfecto!', '¡Muy bien!', '¡Sigue así!'];
  for (const course of Object.keys(S.COURSES)) {
    const w = 'doeltaalnamen ' + course + ': ';
    const c = vm.createContext({ console, setTimeout, clearTimeout }); c.window = c; c.globalThis = c; c.self = c; c.SPT_COURSE = course;
    for (const f of ['js/core.js', 'js/i18n.js', 'js/i18n-es.js']) vm.runInContext(src(f), c, { filename: f });
    const K = c.SPT, tg = K.course.target;
    if (tg === 'es') { ok(TERMS.every(x => K.tl(x) === x && K.t(x) === x), w + 'Spaanse cursus houdt de Spaanse namen'); continue; }
    ok(TERMS.every(x => K.tl(x) !== x), w + 'alle namen vertaald: ' + TERMS.filter(x => K.tl(x) === x).join(', '));
    ok(TERMS.every(x => !(tg === 'fr' ? /[¡¿áíóúñ]/ : /[¡¿áéíóúñ]/).test(K.tl(x))), w + 'geen Spaanse tekens in de namen'); // het Frans heeft zelf een é
    ok(K.t('← Práctica') === '← ' + K.tl('Práctica') && K.t('🔎 Sopa de letras') === '🔎 ' + K.tl('Sopa de letras'), w + 'met pijltje of emoji ervoor');
    if (K.course.ui === 'nl') ok(K.t('Lupe begroet je op Hoy en in Perfil.') === 'Lupe begroet je op ' + K.tl('Hoy') + ' en in ' + K.tl('Perfil') + '.', w + 'tabnamen midden in een zin');
    else ok(K.t('Vandaag niets te herhalen') === 'Hoy no hay nada que repasar', w + '«Hoy» als gewoon woord blijft Spaans');
    ok(new RegExp('\\b' + tg + ': \\{ grid: \'[A-Z]{9}\'').test(src('js/icons.js')), w + 'eigen letters op de speltegels');
    ok(new RegExp('\\b' + tg + ': \\[').test(src('js/lesson.js').slice(src('js/lesson.js').indexOf('const PRAISES'))), w + 'eigen lof in de les');
  }
  ok(/target !== 'es' && S\.course\.ui === 'nl'/.test(src('js/app.js')) && /if \(!ES\) \{ location\.hash = '#\/practica'/.test(src('js/app.js')), 'doeltaalnamen: Docente en vervoegingstabellen per cursus');
}
{ // Cursussen met Nederlandse uitleg en een andere doeltaal dan Spaans (Engels, Duits, …): één rij per cursus.
  // pre = begin van de unit-id's, name = taalnaam in schermteksten, lupe = Lupes «¡Una tarea menos! Sigue así.» in de doeltaal
  // (alleen als ze in die taal praat), art = [woord met lidwoord, zonder], extra(K, w) = eigen controles van die cursus.
  const NL_COURSES = {
    'de-nl': { pre: 'de', name: 'Duits', lupe: 'Eine Aufgabe weniger! Weiter so.', art: ['das Haus', 'Haus'], extra(K, w) {
      const ck = (u, a) => K.check.check(u, [a]);
      ok(ck('ich heisse anna', 'Ich heiße Anna.').ok && ck('ich heisse anna', 'Ich heiße Anna.').warn === 'accent' && ck('Schon', 'schön').warn === 'accent', w + 'ss voor ß en ontbrekende umlaut: goed met waarschuwing');
      const r = K.Gen.checkType('der Haus', { answers: ['das Haus'], articleOptional: true });
      ok(!r.ok && r.warn === 'article-wrong' && /onzijdig/.test(r.gender), w + 'fout lidwoord der/die/das met geslacht');
      ok(K.C.all().length === 40 && K.C.unitsOf('B2').length === 10, w + 'A1–B2 = 40 units');
      // uitzonderingen worden benoemd, met reden
      const U = K.Uitz, has = (l, re) => l.some(x => re.test(x.t + ' ' + x.html));
      ok(U.label() === '⚠️ Uitzondering' && has(U.forWord('das Mädchen'), /-chen/) && has(U.find('Ich helfe dir gern.'), /derde naamval/) && has(U.find('Ich bin zu Hause geblieben.'), /sein/) && has(U.find('Er fährt nach Berlin.'), /ä/) && has(U.find('Berlin ist größer als München.'), /Umlaut/), w + 'uitzonderingen met reden (das Mädchen, helfen + dir, ist geblieben, fährt, größer)');
      ok(U.RULES.de.every(x => /Uitzondering/.test(x.html) && /Waarom\?/.test(x.html)), w + 'elke uitzonderingsregel noemt «Uitzondering» en «Waarom?»');
      ok(!U.find('Ich wohne in einem kleinen Dorf und lerne Deutsch.').length, w + 'geen valse uitzonderingen');
    } },
    'fr-nl': { pre: 'fr', name: 'Frans', lupe: 'Une tâche de moins\u00a0! Continue comme ça.', art: ['la maison', 'maison'], extra(K, w) {
      const ck = (u, a) => K.check.check(u, [a]);
      // Franse leestekens: spatie vóór ? ! is een vaste spatie; met of zonder typen is allebei goed
      ok(K.C.get('fr-a1-01').vocab.some(v => v[0] === 'Comment ça va\u00a0?') && ck('comment ça va?', 'Comment ça va\u00a0?').exact && ck('Comment ça va ?', 'Comment ça va\u00a0?').exact, w + 'vaste spatie vóór het vraagteken');
      // accenten: alle Franse accenten mogen ontbreken (bijna goed), een ander woord blijft fout
      ok(ck('Je suis etudiant', 'Je suis étudiant.').warn === 'accent' && ck('le pere', 'le père').warn === 'accent' && ck('la foret', 'la forêt').warn === 'accent' && ck('le garcon', 'le garçon').warn === 'accent' && ck('la soeur', 'la sœur').ok && !ck('la mère', 'le père').ok, w + 'accent grave, circonflexe, cedille en œ');
      // lidwoord: l' telt als lidwoord, fout geslacht blijft fout met uitleg
      const it = a => ({ answers: [a], articleOptional: true });
      ok(K.Gen.checkType('eau', it("l'eau")).ok && K.Gen.checkType('école', it('une école')).ok, w + "l' en une mogen ontbreken");
      const r = K.Gen.checkType('le maison', it('la maison'));
      ok(!r.ok && r.warn === 'article-wrong' && /vrouwelijk/.test(r.gender), w + 'verkeerd lidwoord le/la met geslacht');
      // uitzonderingen worden benoemd, met reden
      const U = K.Uitz, has = (l, re) => l.some(x => re.test(x.t + ' ' + x.html));
      ok(U.label() === '⚠️ Uitzondering' && has(U.forWord('mon amie'), /klinker/) && has(U.forWord('au printemps'), /en été/) && has(U.forWord('soixante-dix'), /60/) && has(U.forItem({ kind: 'mc', sentence: 'Vous ___ du sport ?', answer: 'faites' }, { expected: 'faites' }), /êtes/), w + 'mon amie, au printemps, soixante-dix, vous faites');
      ok(!U.find('Je mange une pomme rouge').length, w + 'geen valse uitzonderingen');
      ok(K.C.all().every(u => u.grammar.some(g => /Uitzondering|Let op/.test(g.html))), w + 'elke unit benoemt uitzonderingen in de uitleg');
    } },
    'en-nl': { pre: 'en', name: 'Engels', lupe: 'One task down! Keep it up.', art: ['the house', 'house'], extra(K, w) {
      ok(K.C.LEVELS.every(L => K.placement.filter(q => q.lv === L.id).length >= 12), w + 'niveautest: 12+ vragen voor elk niveau A1–C2');
      ok(K.scenarios.some(x => x.lv === 'C2'), w + 'gesprek op C2');
      ok(K.Gen.levelTestResult({ A1: { ok: 8, n: 8 }, A2: { ok: 8, n: 8 }, B1: { ok: 8, n: 8 }, B2: { ok: 8, n: 8 }, C1: { ok: 7, n: 8 }, C2: { ok: 2, n: 8 } }).level === 'C1', w + 'niveautest tot C1/C2');
      // Britse spelling telt goed (alleen als de Amerikaanse vorm in het antwoord staat)
      const ck = (u, a) => K.check.check(u, [a]);
      ok(ck('My favourite colour is grey.', 'My favorite color is gray.').warn === 'british' && ck('We travelled to the centre.', 'We traveled to the center.').ok
        && ck('She organised the programme.', 'She organized the program.').ok && ck('I analysed the catalogue.', 'I analyzed the catalog.').ok, w + 'Britse spelling wordt goedgerekend');
      ok(!ck('our', 'or').ok && !ck('four', 'for').ok && ck('My favorite color.', 'My favorite color.').exact, w + 'Britse spelling: geen valse treffers');
      ok(K.check.parts('My favourite colour is blue', 'My favorite color is gray').k.join() === '0,1,2,3', w + 'Britse spelling telt per woord als goed');
      ok(K.check.check("I've lived here since 2015", ["I've lived here since 2015."]).ok, w + 'apostrof en punt');
    } },
    'tr-nl': { pre: 'tr', name: 'Turks', lupe: 'Bir görev daha bitti! Böyle devam.', art: ['ev', 'ev'], extra(K, w) {
      // Turkse letters: İ/i en I/ı zijn aparte paren; zonder Turkse tekens typen is «bijna goed» (accent), nooit zomaar goed
      const ck = (u, a) => K.check.check(u, [a]);
      ok(K.lower('İSTANBUL') === 'istanbul' && K.lower('IŞIK') === 'ışık' && K.upper('iyi') === 'İYİ' && K.upper('kız') === 'KIZ', w + 'hoofd- en kleine letters met İ/ı');
      ok(ck('İstanbul’da yaşıyorum.', "İstanbul'da yaşıyorum").exact && ck('istanbul’da yaşıyorum', "İstanbul'da yaşıyorum.").exact, w + 'İstanbul met en zonder hoofdletter');
      const noMarks = ck('Cay istiyorum', 'Çay istiyorum.'), dotless = ck('Istanbul', 'İstanbul'), wrongI = ck('kiz', 'kız');
      ok(noMarks.ok && !noMarks.exact && dotless.ok && !dotless.exact && wrongI.ok && !wrongI.exact, w + 'zonder Turkse tekens: goed met waarschuwing');
      ok(!ck('Çay istiyorsun', 'Çay istiyorum').ok && !ck('evde', 'evden').ok, w + 'een andere uitgang blijft fout');
      ok(K.C.all().every(u => u.grammar.some(g => /Uitzondering|Let op/.test(g.html)) || u.ex.some(e => /Uitzondering/.test(e.x || ''))) , w + 'uitzonderingen en valkuilen benoemd in elke unit');
      ok(K.C.all().flatMap(u => u.grammar).filter(g => /⚠️ Uitzondering/.test(g.html)).every(g => /Waarom\?/.test(g.html)), w + 'elke ⚠️ Uitzondering heeft een «Waarom?»');
      // woordspellen: Turkse letters blijven eigen letters (Ç is geen C), en de puzzel vult met Turkse letters
      const gw = K.Games.gen.gameWord({ id: 'w', unit: 'u', es: 'çay', nl: 'thee' }), gi = K.Games.gen.gameWord({ id: 'w', unit: 'u', es: 'İyi', nl: 'goed' });
      ok(gw.plain === 'ÇAY' && gi.key === 'iyi' && gi.plain === 'İYİ' && K.Games.gen.gameWord({ id: 'w', unit: 'u', es: 'kız', nl: 'meisje' }).plain === 'KIZ', w + 'spelwoorden houden Turkse letters');
    } }
  };
  ok(Object.values(S.COURSES).filter(c => c.ui === 'nl' && c.target !== 'es').every(c => NL_COURSES[c.id]), 'elke cursus met Nederlandse uitleg heeft een rij in NL_COURSES (tests/run.js)');
  const list = JSON.parse(require('child_process').execFileSync(process.execPath, [path.join(root, 'tools/tts-texts.js')], { maxBuffer: 64 << 20 }).toString());
  const have = new Set(list.map(x => x.k));
  const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
    .filter(f => !/(app|lesson|ai|sync|ask)\.js$/.test(f));
  for (const [course, cfg] of Object.entries(NL_COURSES)) {
    const w = course + ': ';
    ok(files.includes('content/' + course + '/extra.js') && fs.readFileSync(path.join(root, 'sw.js'), 'utf8').includes('content/' + course + '/extra.js'), w + 'bestanden in index.html en sw.js');
    const c = vm.createContext({ console, setTimeout, clearTimeout }); c.window = c; c.globalThis = c; c.self = c; c.SPT_COURSE = course;
    for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f });
    const K = c.SPT, us = K.C.all(), tg = K.course.target;
    const avail = K.C.LEVELS.filter(L => K.C.available(L.id));
    ok(K.course.id === course && K.course.ui === 'nl' && tg === cfg.pre && !K.i18n.on && K.i18n.sub, w + 'cursus actief, Nederlandse schermteksten');
    ok(K.t('Typ in het Spaans') === 'Typ in het ' + cfg.name && K.t('Nederlands met Spaanse samenvattingen') === 'Nederlands met ' + cfg.name + 'e samenvattingen' && K.t('Vandaag') === 'Vandaag', w + '«Spaans» wordt «' + cfg.name + '» in schermteksten');
    ok(us.length >= 5 && us.every(u => new RegExp('^' + cfg.pre + '-(a1|a2|b1|b2|c1|c2)-\\d\\d$').test(u.id)), w + 'alleen eigen lesstof (' + us.length + ' units)');
    ok(avail.length && avail[0].id === 'A1' && avail.every((L, i) => L.id === K.C.LEVELS[i].id || K.course.allLevels), w + 'niveaus op volgorde vanaf A1');
    ok(avail.every(L => K.placement.filter(q => q.lv === L.id).length >= 12), w + 'niveautest: 12+ vragen voor elk niveau met lesstof');
    ok(K.placement.every(q => q.o.length === 3 && new Set(q.o).size === 3 && q.q.trim()), w + 'niveautestvragen: 3 verschillende opties');
    ok(K.scenarios.length >= 4 && K.phrases.length >= 10 && !K.regions.length, w + 'gesprekken en uitdrukkingen');
    ok(K.C.LEVELS.every(L => L.can.every(t => !/subjuntivo|voseo|Spaans/.test(t))), w + 'eigen can-do-teksten');
    for (const L of avail) { const b = K.Gen.levelTestBand(L.id); ok(b.items.length >= 8 && b.items.every(it => it.options.includes(it.answer)), w + 'niveautest ' + L.id); }
    if (cfg.lupe) { // Lupe praat de doeltaal in deze cursus
      ok(K.Tutor.lineLang === tg && K.Tutor.loc({ es: '¡Una tarea menos! Sigue así.', nl: 'x' }).es === cfg.lupe && K.Tutor.loc({ es: '¡Llevas 12 días seguidos! ¡Qué padre!' }).lang === tg, w + 'Lupe zegt haar zinnen in de doeltaal');
      const lupeLines = K.Tutor.lines.every(us);
      ok(lupeLines.every(t => !/[¡¿ñ]|\b(Hoy|tienes|Llevas|Ya conoces|seguidas)\b/.test(t)), w + 'geen Spaanse Lupe-zinnen meer: ' + lupeLines.filter(t => /[¡¿ñ]/.test(t)).slice(0, 3).join(' | '));
      ok(lupeLines.every(t => have.has(K.Speech.clipKey(t, 'lupe-girl')) && have.has(K.Speech.clipKey(t, 'lupe-woman'))), w + 'alle Lupe-zinnen worden ingesproken');
    } else ok(K.Tutor.lineLang === 'es', w + 'Lupe praat Spaans (geen vertaling)');
    // eigen docent per doeltaal (js/docenten.js): naam, tekening en AI-karakter; nergens meer «Lupe»
    const Dc = K.Docent;
    ok(Dc && K.Tutor.name === Dc.name && K.Tutor.title === Dc.title && Dc.name !== 'Lupe', w + 'eigen docent: ' + (Dc && Dc.title));
    if (Dc) {
      const all = K.Tutor.lines.every(us).concat([K.Tutor.lines.welcome.nl, K.Tutor.tagline, K.Tutor.persona, K.Tutor.aria, K.Tutor.hi]);
      ok(all.every(t => !/Lupe|axolotl|ajolot|Xochimilco/i.test(t)), w + 'docent: geen Lupe meer in haar zinnen en karakter: ' + all.filter(t => /Lupe|axolotl|Xochimilco/i.test(t)).slice(0, 2).join(' | '));
      ok(K.Tutor.lines.every(us).some(t => t.includes(Dc.name)) && K.Tutor.persona.includes(Dc.name) && K.Tutor.persona.includes(K.course.ai.target), w + 'docent stelt zich voor met haar eigen naam, ook in de AI-opdracht');
      ok(K.t('Rapport van Profe Lupe') === 'Rapport van ' + Dc.title && K.t('Vraag het Lupe') === 'Vraag het ' + Dc.name && !/Lupe/.test(K.t('Lupe’s voorstellen en Lupe\'s advies')), w + 'schermteksten noemen de docent van deze cursus');
      ok(K.Mistakes.asText(K.Mistakes.report(30)).startsWith('Rapport van ' + Dc.title), w + 'rapport draagt de naam van de docent');
      for (const o of [{ full: true, wave: true }, {}, { face: true }]) { const g = K.Tutor.svg(100, o); ok(g.includes('m-open') && g.includes('m-closed') && g.includes('lupe-eyes') && !g.includes('class="gill"') && !/undefined|NaN/.test(g), w + 'tekening van de docent compleet ' + JSON.stringify(o)); }
      ok(K.Icons.line('docente').includes(Dc.icon) && !K.Icons.line('docente').includes(K.Icons.LINE.docente), w + 'eigen tabicoon voor de docent');
    }
    const ids = new Set();
    for (const u of us) {
      const where = w + u.id;
      ok(!ids.has(u.id), where + ' dubbel id'); ids.add(u.id);
      ['id', 'level', 'title', 'nl', 'icon'].forEach(k => ok(typeof u[k] === 'string' && u[k], where + ' mist ' + k));
      ok(u.id.slice(cfg.pre.length + 1, cfg.pre.length + 3) === u.level.toLowerCase(), where + ' niveau past bij id');
      ok(u.goals.length >= 2 && u.vocab.length >= 20 && u.grammar.length >= 2 && u.ex.length >= 12, where + ' omvang');
      const seen = new Set(); u.vocab.forEach(v => { ok(v.length >= 2 && v.every(x => typeof x === 'string' && x.trim()), where + ' woord ' + v[0]); ok(!seen.has(v[0]), where + ' dubbel woord ' + v[0]); seen.add(v[0]); });
      u.grammar.forEach((g, gi) => {
        const open = (g.html.match(/<(b|i|p|s)>/g) || []).length, close = (g.html.match(/<\/(b|i|p|s)>/g) || []).length;
        ok(g.t && open === close, where + ' grammatica ' + gi + ' html');
        if (g.table) ok(g.table.every(r => r.length === g.table[0].length), where + ' tabel ' + gi);
      });
      u.ex.forEach((e, i) => {
        const x = where + ' ex' + i;
        ok(e.tag && K.C.TAGS[e.tag], x + ' tag ' + e.tag);
        if (e.t === 'mc') ok(e.o.length >= 3 && new Set(e.o).size === e.o.length, x + ' mc');
        if (e.t === 'cloze') ok((e.s.match(/___/g) || []).length === 1 && (!e.o || (e.o[0] === e.a[0] && new Set(e.o).size === e.o.length)), x + ' cloze');
        if (e.t === 'tr') ok(e.nl && e.a.length, x + ' tr');
        if (e.t === 'order') ok(e.s.split(' ').length >= 3, x + ' order');
        if (e.t === 'match') ok(e.p.length >= 3 && e.p.length <= 6, x + ' match');
      });
      ok(u.dialogue.lines.length >= 6 && u.dialogue.lines.every(l => l.length === 3 && l.every(Boolean)) && u.dialogue.q.length >= 3 && u.dialogue.q.every(q => new Set(q.o).size === q.o.length), where + ' dialoog');
      ok(u.reading.p.length >= 3 && u.reading.p.every(p => p.length === 2 && p.every(x => x.trim())) && u.reading.q.length >= 3 && u.reading.q.every(q => q.t === 'mc' && new Set(q.o).size === q.o.length) && u.say.length >= 2 && u.task.model && u.task.nl && u.scenario.role && u.scenario.goal && u.culture.html, where + ' lezen/toepassen');
      ok(!/vosotros|\b(el|la|los|las) [a-z]+ (es|son)\b/i.test(u.grammar.map(g => g.html).join(' ')), where + ' geen Spaans in de uitleg');
      for (const st of K.Gen.STEPS) {
        const ses = K.Gen.stepSession(u, st.id);
        ok(ses && ses.items.length && ses.items.every(Boolean), where + ' sessie ' + st.id);
        ses.items.forEach(it => { if (it.kind === 'mc') ok(it.options.includes(it.answer) && new Set(it.options).size === it.options.length, where + ' ' + st.id + ' mc-item ' + (it.prompt || it.q || it.sentence)); });
        ses.items.forEach(it => { [it.audio, it.word && it.word.es].forEach(t => t && ok(have.has(K.Speech.clipKey(t, course)), where + ' opname ontbreekt: ' + t)); });
      }
      u.dialogue.lines.forEach(l => ok(have.has(K.Speech.clipKey(l[1], course)), where + ' dialoog-opname: ' + l[1]));
    }
    // elk niveau met lesstof is compleet: 10 units
    for (const L of avail) ok(K.C.unitsOf(L.id).length === 10, w + L.id + ': 10 units (' + K.C.unitsOf(L.id).length + ')');
    ok(K.Gen.checkType(cfg.art[1], { answers: [cfg.art[0]], articleOptional: true }).ok || !K.lang.arts, w + 'lidwoord mag ontbreken');
    if (cfg.extra) cfg.extra(K, w);
  }
}
{ // ⚠️ uitzonderingen altijd benoemd (js/uitzonderingen.js), in elke cursus
  const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
    .filter(f => !/(app|lesson|ai|sync|ask)\.js$/.test(f));
  ok(files.includes('js/uitzonderingen.js') && fs.readFileSync(path.join(root, 'sw.js'), 'utf8').includes('js/uitzonderingen.js'), 'uitzonderingen: in index.html en sw.js');
  const load = course => { const c = vm.createContext({ console, setTimeout, clearTimeout }); c.window = c; c.globalThis = c; c.self = c; c.SPT_COURSE = course; for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), c, { filename: f }); return c.SPT; };
  const has = (l, re) => l.some(x => re.test(x.t + ' ' + x.html));
  { const K = load('es-nl'), U = K.Uitz, w = 'uitzondering es-nl: ';
    // Marks voorbeeld: «___ tema de hoy es la familia» moet zeggen dát het een uitzondering is, en waarom
    const tema = U.forItem({ kind: 'mc', sentence: '___ tema de hoy es la familia.', answer: 'El' }, { expected: 'El', ok: false });
    ok(has(tema, /mannelijk/) && has(tema, /Waarom/) && K.Uitz.label() === '⚠️ Uitzondering', w + 'el tema (fout én met reden)');
    ok(has(U.forItem({ kind: 'mc', sentence: '___ tema de hoy es la familia.', answer: 'El' }, { expected: 'El', ok: true }), /mannelijk/), w + 'el tema ook bij goed antwoord');
    ok(has(U.forItem({ kind: 'mc', sentence: '¿Dónde ___ la fiesta de Ana?', answer: 'es' }, { expected: 'es' }), /evenement/), w + '¿dónde es la fiesta?');
    ok(has(U.forItem({ kind: 'mc', q: 'Welk lidwoord? ___ mano', answer: 'la' }, { expected: 'la' }), /vrouwelijk/), w + 'la mano');
    ok(has(U.forWord('el agua'), /beklemtoonde/) && has(U.forWord('el día'), /mannelijk/) && has(U.forWord('la foto'), /fotografía/), w + 'el agua, el día, la foto');
    ok(has(U.forItem({ kind: 'type', conj: { verb: 'tener', tense: 'pres', person: 0 } }, { expected: 'tengo' }), /teno/), w + 'tengo (onregelmatig, niet teno)');
    ok(has(U.forItem({ kind: 'type', conj: { verb: 'hacer', tense: 'pret', person: 2 } }, { expected: 'hizo' }), /sterke verleden tijd/), w + 'hizo');
    ok(!U.forItem({ kind: 'type', conj: { verb: 'hablar', tense: 'pres', person: 0 } }, { expected: 'hablo' }).length, w + 'hablo is geen uitzondering');
    ok(!U.find('Me gusta el café con leche').length && !U.forWord('el puesto').some(x => x.verb), w + 'geen valse uitzonderingen');
    // juiste vertaalzin: geen werkwoord-blokken (alleen bij een fout woord)
    ok(!U.forItem({ kind: 'type', translate: true, answers: ['Tengo dos hermanos.'] }, { expected: 'Tengo dos hermanos.', ok: true }).length, w + 'goede vertaalzin zonder werkwoordblok');
    ok(has(U.forItem({ kind: 'type', translate: true }, { expected: 'Tengo dos hermanos.', ok: false, parts: { a: 'Tengo dos hermanos.', st: ['bad', 'ok', 'ok'], k: [0] } }), /teno/), w + 'fout getypte tengo krijgt het blok');
    ok(Object.keys(U.GRAMMAR).every(t => K.C.all().some(u => u.grammar.some(g => g.t === t))), w + 'elke grammatica-uitzondering hoort bij een bestaand onderdeel');
    // elke regel compileert en raakt iets in de lesstof (of in een eigen voorbeeld)
    const all = K.C.all().flatMap(u => [...u.vocab.map(v => Array.isArray(v) ? v[0] : v.es), ...u.ex.map(e => (e.s ? e.s.replace('___', (e.a || e.o || [''])[0]) : '') + ' ' + (e.t === 'mc' ? e.o.join(' ') : '') + ' ' + (e.t === 'tr' ? e.a[0] : '')), ...(u.dialogue ? u.dialogue.lines.map(l => l[1]) : [])]).join(' \n ').toLowerCase();
    U._rules().forEach(r => ok(new RegExp(r.re.source, 'u').test(all.replace(/[¡!¿?.,;:«»"“”()…]/g, ' ').replace(/ +/g, ' ')) || /cairo|tranvía|víctima|análisis|radio|él|muert/.test(r.p), w + 'regel raakt de lesstof: ' + r.t));
  }
  { const K = load('en-nl'), U = K.Uitz, w = 'uitzondering en-nl: ';
    ok(has(U.forItem({ kind: 'type', sentence: 'We ___ to Chicago last year.', answers: ['went'] }, { expected: 'went' }), /goed<\/s>/), w + 'went (niet goed)');
    ok(has(U.forWord('children'), /onregelmatig/) && has(U.forWord('an hour'), /klank/) && has(U.forWord('some advice'), /ontelbaar/), w + 'children, an hour, advice');
    ok(U.label() === '⚠️ Uitzondering', w + 'label Nederlands');
  }
  { const K = load('tr-nl'), U = K.Uitz, w = 'uitzondering tr-nl: ';
    ok(has(U.forWord('saatler'), /Arabisch/) && has(U.forWord('meyve suyu'), /suv/) && has(U.forItem({ kind: 'mc', sentence: 'Okula ___.', answer: 'gidiyorum' }, { expected: 'gidiyorum' }), /t een d/), w + 'saatler, meyve suyu, gidiyorum');
    ok(has(U.forText('Bana bir bilet, lütfen.'), /bene/) && !U.find('Evde çay içiyorum.').length && U.label() === '⚠️ Uitzondering', w + 'bana; geen valse uitzonderingen');
    const all = K.C.all().flatMap(u => [...u.vocab.map(v => v[0]), ...u.ex.map(e => (e.s ? e.s.replace('___', (e.o || e.a || [''])[0]) : '') + ' ' + (e.t === 'mc' ? e.o.join(' ') : '') + ' ' + (e.t === 'tr' ? e.a[0] : '')), ...u.dialogue.lines.map(l => l[1]), ...u.reading.p.map(p => p[0])]).join(' \n ').toLowerCase();
    U.RULES.tr.forEach(r => ok(new RegExp('(?<![\\p{L}\\d])(?:' + r.p + ')(?![\\p{L}\\d])', 'u').test(all), w + 'regel raakt de lesstof: ' + r.t));
  }
  { const K = load('en-es'), U = K.Uitz, w = 'uitzondering en-es: ';
    ok(U.label() === '⚠️ Excepción' && has(U.forWord('children'), /irregular/) && has(U.forItem({ kind: 'type', sentence: 'We ___ to Chicago.', answers: ['went'] }, { expected: 'went' }), /verbo irregular/), w + 'uitleg in het Spaans');
  }
  { const K = load('nl-es'), U = K.Uitz, w = 'uitzondering nl-es: ';
    ok(has(U.forWord('het meisje'), /siempre de het/) && has(U.forWord('de kinderen'), /-eren/) && has(U.forItem({ kind: 'type', sentence: 'Ik ___ naar huis.', answers: ['ging'] }, { expected: 'ging' }), /verbo irregular/), w + 'meisje, kinderen, ging');
  }
}
{ // badges: reeksen met trappen en voortgang, uit de opgeslagen voortgang berekend
  const B = S.Badges, w = 'badges: ';
  const st = { units: {}, srs: {}, days: {}, xp: 0, streak: { cur: 0, best: 0 }, badges: [], done: {}, tests: [], skills: {}, settings: { goal: 20 }, placement: {} };
  const env = { streak: 0, levels: [{ id: 'A1', total: 10, done: 0, passed: false }, { id: 'A2', total: 10, done: 0, passed: false }], places: { total: 22, stamps: 0 }, units: 40 };
  let v = B.view(st, env);
  ok(v.earned === 0 && v.total > 60 && v.series.length >= 14, w + 'leeg profiel: 0 van ' + v.total);
  const ids = v.series.flatMap(x => x.tiers.map(t => t.id)).concat(v.special.map(x => x.id));
  ok(new Set(ids).size === ids.length, w + 'unieke ids');
  ['first', 'placement', 'streak3', 'streak7', 'streak30', 'words50', 'words250', 'words500', 'unit1', 'perfect', 'A1', 'A2', 'ai', 'goal', 'game', 'games10', 'plan', 'plan7', 'plan30', 'early', 'night']
    .forEach(id => ok(ids.includes(id) && B.info(id), w + 'oude badge blijft: ' + id));
  ok(v.series.every(x => x.tiers.every(t => t.left && /^nog |^doe /.test(t.left))), w + 'elke trap zegt wat je nog moet doen');
  ok(v.series.every(x => x.tip && typeof x.name === 'string' && !/=>/.test(x.name) && x.tiers.every(t => t.name && !/Infinity|undefined|NaN/.test(t.name + t.desc) && /^(Rond|Haal|Doe|Leer|Krijg|Oefen|Verdien|Speel|Stuur|Geef)\b.*\.$/.test(t.desc))) && v.special.every(b => /\.$/.test(b.desc)), w + 'elke badge legt concreet uit wat je moet doen');
  ok(/7 keer je hele dagplan.*niet achter elkaar/.test(v.series.find(x => x.id === 'plans').tiers[1].desc) && /Alle 22 landen/.test(v.series.find(x => x.id === 'travel').tiers.slice(-1)[0].name), w + 'dagplannen en landen duidelijk');
  // 7 lessen gedaan, 2 units, 1 foutloos, 48 woorden
  st.units = { a: { steps: { vocab1: true, vocab2: true, grammar: true, dialogue: true, read: true, apply: true, test: true }, done: true, best: 1 }, b: { steps: {}, tested: true, best: .85 } };
  for (let i = 0; i < 48; i++) st.srs['w|x' + i] = { i: i < 3 ? 30 : 2 };
  st.streak.best = 5; env.streak = 2; env.levels[0].done = 2;
  v = B.view(st, env);
  const se = id => v.series.find(x => x.id === id);
  ok(se('lessons').next.id === 'les10' && se('lessons').next.left === 'nog 3 lessen' && se('lessons').got === 1, w + 'nog 3 lessen: ' + se('lessons').next.left);
  ok(se('words').next.id === 'words50' && se('words').next.left === 'nog 2 woorden' && Math.abs(se('words').next.frac - .96) < 1e-9, w + 'nog 2 woorden');
  ok(se('streak').got === 1 && se('streak').next.id === 'streak7' && se('streak').next.left === 'nog 5 dagen op rij', w + 'reeks: record telt, voortgang vanaf nu: ' + se('streak').next.left);
  ok(se('levels').next.id === 'A1' && /nog 8 units in A1/.test(se('levels').next.left), w + 'niveau: ' + se('levels').next.left);
  ok(se('units').got === 1 && se('perfect').got === 1 && se('travel').tiers[se('travel').tiers.length - 1].goal === 22, w + 'units, foutloos, alle 22 landen');
  ok(se('skills').next.left === 'nog woordenschat, grammatica, luisteren, spreken, lezen, schrijven', w + 'allrounder noemt wat ontbreekt');
  ok(B.view(st, Object.assign({}, env, { places: null })).series.every(x => x.id !== 'travel'), w + 'geen landen = geen reisbadges');
  const earn = B.earnable(st, env);
  ok(['first', 'unit1', 'perfect', 'streak3'].every(id => earn.includes(id)) && !earn.includes('les10') && !earn.includes('words50'), w + 'verdienbaar: ' + earn.join(','));
  ok(v.near[0].frac >= v.near[v.near.length - 1].frac && v.near[0].id === 'words50', w + 'bijna binnen: dichtstbij eerst (' + v.near[0].id + ')');
  // weekend: zaterdag 2026-11-21 en zondag 2026-11-22
  st.days = { '2026-11-21': { min: 5 }, '2026-11-22': { min: 3 } };
  ok(B.view(st, env).special.find(x => x.id === 'weekend').earned, w + 'weekendkrijger');
  // badges die je al had, blijven behaald (ook als de teller lager is)
  st.badges = ['words50']; ok(se('words') && B.view(st, env).series.find(x => x.id === 'words').got === 1, w + 'oude badge blijft behaald');
  // samenvoegen: datum = eerste keer, tellers = hoogste
  {
    const base = () => JSON.parse(JSON.stringify(S.Store.state)), p = base(), q = base();
    Object.assign(p, { updated: 2, badges: ['ai'], badgeAt: { ai: 200 }, done: { ai: 3, games: 9 } }); Object.assign(q, { updated: 1, badges: ['game'], badgeAt: { ai: 100, game: 50 }, done: { ai: 7, games: 2 } });
    const x = S.Store.mergeStates(p, q);
    ok(x.badgeAt.ai === 100 && x.badgeAt.game === 50 && x.done.ai === 7 && x.done.games === 9, w + 'samenvoegen: datum en tellers');
  }
}
{ // 📖 grammaticabegrippen (js/begrippen.js): elk begrip uitgelegd, met LatAm-Spaanse voorbeelden; uitzonderingen met reden
  const G = S.Begrippen, w = 'begrippen: ';
  ok(G && G.B.length >= 40, w + 'aantal ' + (G && G.B.length));
  const ids = new Set(G.B.map(b => b.id)), cats = new Set(G.CATS.map(c => c[0]));
  ok(ids.size === G.B.length, w + 'dubbele id');
  ['lidwoord', 'bn', 'zn', 'ww', 'vervoegen', 'onderwerp', 'vnw', 'pv', 'subjuntivo', 'gerundio', 'deelwoord'].forEach(id => ok(ids.has(id), w + 'mist ' + id));
  G.B.forEach(b => {
    const at = w + b.id + ' ';
    ok(b.t && b.k && b.html && cats.has(b.c) && Array.isArray(b.a) && b.a.length, at + 'velden');
    if (!G.fits(b, 'es')) return; // begrip dat alleen in een andere doeltaal bestaat (S.Begrippen.add … extra)
    ok(b.es && b.es.n && b.es.html && b.es.ex && b.es.ex.length >= 1, at + 'Spaans blok met voorbeelden');
    (b.rel || []).forEach(r => ok(ids.has(r), at + 'verwant bestaat niet: ' + r));
    ['es', 'en', 'fr', 'de', 'tr'].forEach(l => (b[l] && b[l].uz || []).forEach(([t, html]) => ok(t && /waarom|reden/i.test(html), at + l + ' uitzondering zonder reden: ' + t)));
    const txt = JSON.stringify(b.es).replace(/<[^>]+>/g, '');
    ok(!/(?<!\p{L})(?:vosotros|vosotras|os|habláis|tenéis|coméis|ordenador|coche|móvil|zumo|vale)(?!\p{L})/iu.test(txt), at + 'geen Spanje-vormen');
    ok(b.es.ex.every(([e, n]) => e && n), at + 'voorbeeld met vertaling');
    ok(b.a.every(p => { try { new RegExp(p, 'iu'); return true; } catch (e) { return false; } }), at + 'patroon geldig');
  });
  // tikbare woorden vinden in Nederlandse uitleg (langste eerst, elk begrip één keer)
  const m = G.match('Het voltooid deelwoord komt na haber; het lidwoord past bij het zelfstandig naamwoord. Weer een lidwoord.');
  ok(m.map(x => x.id).join() === 'deelwoord,lidwoord,zn', w + 'match: ' + m.map(x => x.id + '=' + x.s).join(', '));
  ok(G.match('lidwoorden en bijvoeglijke naamwoorden').map(x => x.id).join() === 'lidwoord,bn', w + 'meervoudsvormen');
  ok(!G.match('hulpwerkwoorden').some(x => x.id === 'ww') && G.match('hulpwerkwoorden')[0].id === 'hulpww', w + 'geen werkwoord binnen hulpwerkwoord');
  ok(G.match('de pretérito imperfecto en de pretérito indefinido').map(x => x.id).join() === 'imperfecto,indefinido', w + 'Spaanse tijdnamen');
  ok(!G.match('Ik oefen regelmatig en dat is wijs.').length, w + 'gewone woorden niet onderstrepen');
  ok(G.search('gerundio').length === 1 && G.search('lidwoord')[0].id === 'lidwoord' && G.search('el artículo')[0].id === 'lidwoord', w + 'zoeken');
  // de uitleg in de lesstof gebruikt de begrippen echt: in de meeste grammaticablokken staat er minstens één
  const gr = units.flatMap(u => u.grammar || []);
  const hit = gr.filter(g => G.match(String(g.html).replace(/<[^>]+>/g, ' ')).length).length;
  ok(hit / gr.length > 0.6, w + 'begrippen in grammaticauitleg: ' + hit + '/' + gr.length);
  const files = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  ok(files.indexOf('js/begrippen.js') > 0 && files.indexOf('js/begrippen.js') < files.indexOf('js/lesson.js') && fs.readFileSync(path.join(root, 'sw.js'), 'utf8').includes('js/begrippen.js'), w + 'in index.html (vóór lesson.js) en sw.js');
  // Frans: eigen bestand js/begrippen-fr.js; elk begrip (behalve por/para) heeft een Frans blok met voorbeelden, Franse titels en zoekwoorden
  { const c0 = S.course; S.course = { target: 'fr', ui: 'nl' };
    ok(!G.fits(G.get('por-para'), 'fr') && G.list('fr').length >= 48, w + 'Frans: aantal ' + G.list('fr').length);
    G.list('fr').forEach(b => { const k = b.fr; ok(k && k.n && k.html && k.ex && k.ex.length >= 2 && k.ex.every(([e, n]) => e && n), w + 'fr ' + b.id + ' blok met voorbeelden');
      (k.table || []).forEach(r => ok(r.length === k.table[0].length, w + 'fr ' + b.id + ' tabelrij')); });
    ok(G.title(G.get('indefinido')) === 'Passé composé' && G.title(G.get('lidwoord')) === 'Lidwoord', w + 'Frans: eigen titel');
    ok(G.match('De subjonctif, de passé composé, de imparfait en de gérondif.').map(x => x.id).join() === 'subjuntivo,indefinido,imperfecto,gerundio', w + 'Franse tijdnamen tikbaar');
    ok(G.search('subjonctif')[0].id === 'subjuntivo', w + 'Frans zoeken');
    S.course = c0; G.match('x'); }
  // Duits: eigen bestand js/begrippen-de.js; Duitse blokken plus begrippen die alleen in het Duits bestaan (naamval, Umlaut …)
  { const c0 = S.course; S.course = { target: 'de', ui: 'nl' };
    const dl = G.list('de');
    ok(dl.length >= 60 && !G.fits(G.get('por-para'), 'de') && !G.fits(G.get('subjuntivo'), 'de') && G.fits(G.get('de-naamval'), 'de') && !G.fits(G.get('de-naamval'), 'es') && !G.fits(G.get('de-umlaut'), 'fr'), w + 'Duits: aantal ' + dl.length + ', eigen begrippen alleen bij Duits');
    dl.forEach(b => { const k = b.de; ok(k && k.n && k.html && k.ex && k.ex.length >= 1 && k.ex.every(([e, n]) => e && n) && b.t && b.k && b.html && G.CATS.some(c => c[0] === b.c), w + 'de ' + b.id + ' blok met voorbeelden');
      (k.table || []).forEach(r => ok(r.length === k.table[0].length, w + 'de ' + b.id + ' tabelrij'));
      (k.uz || []).forEach(u => ok(u[0] && /<b>Waarom\?<\/b>/.test(u[1]), w + 'de ' + b.id + ' uitzondering met reden: ' + u[0]));
      if (/^de-/.test(b.id)) (b.rel || []).forEach(r => ok(G.get(r) && G.fits(G.get(r), 'de'), w + 'de ' + b.id + ' verwijst naar ' + r)); });
    ok(G.title(G.get('condicional')).startsWith('Konjunktiv II') && G.title(G.get('lidwoord')) === 'Lidwoord', w + 'Duits: eigen titel');
    ok(G.match('De Akkusativ, de derde naamval, de Konjunktiv II, een scheidbaar werkwoord en de Umlaut.').map(x => x.id).join() === 'de-akkusativ,de-dativ,condicional,de-trennbar,de-umlaut', w + 'Duitse termen tikbaar: ' + G.match('De Akkusativ, de derde naamval, de Konjunktiv II, een scheidbaar werkwoord en de Umlaut.').map(x => x.id).join());
    ok(G.match('de Konjunktiv I en het Partizip I')[0].id === 'de-konj1' && G.match('het Partizip II')[0].id === 'deelwoord' && G.search('Dativ').some(b => b.id === 'de-dativ'), w + 'Konjunktiv I ≠ II, Partizip I ≠ II, zoeken');
    S.course = c0; G.match('x'); }
  // Turks: eigen bestand js/begrippen-tr.js; Turkse blokken plus begrippen die alleen in het Turks bestaan (klinkerharmonie, naamval …)
  { const c0 = S.course; S.course = { target: 'tr', ui: 'nl' };
    const tl = G.list('tr');
    ok(tl.length >= 58 && !G.fits(G.get('por-para'), 'tr') && !G.fits(G.get('stamwissel'), 'tr') && G.fits(G.get('tr-klinkerharmonie'), 'tr') && !G.fits(G.get('tr-klinkerharmonie'), 'es') && !G.fits(G.get('tr-naamval'), 'de') && !G.fits(G.get('de-naamval'), 'tr'), w + 'Turks: aantal ' + tl.length + ', eigen begrippen alleen bij Turks');
    tl.forEach(b => { const k = b.tr; ok(k && k.n && k.html && k.ex && k.ex.length >= 2 && k.ex.every(([e, n]) => e && n) && b.t && b.k && b.html && G.CATS.some(c => c[0] === b.c), w + 'tr ' + b.id + ' blok met voorbeelden');
      (k.table || []).forEach(r => ok(r.length === k.table[0].length, w + 'tr ' + b.id + ' tabelrij'));
      (k.uz || []).forEach(u => ok(u[0] && /<b>Waarom\?<\/b>/.test(u[1]), w + 'tr ' + b.id + ' uitzondering met reden: ' + u[0]));
      ok(!/Lima|Quito|Mexic|Spaans/.test(JSON.stringify([G.title(b), k.k || b.k, k.gen || b.html, k])), w + 'tr ' + b.id + ' geen Spaanse resten');
      if (/^tr-/.test(b.id)) (b.rel || []).forEach(r => ok(G.get(r) && G.fits(G.get(r), 'tr'), w + 'tr ' + b.id + ' verwijst naar ' + r)); });
    ok(G.title(G.get('indefinido')) === 'Verleden tijd (-di)' && G.title(G.get('aanspreken')) === 'Sen en siz' && G.title(G.get('lidwoord')) === 'Lidwoord', w + 'Turks: eigen titel');
    const tm = G.match('De klinkerharmonie, een naamval, het achtervoegsel, de brede tijd, van horen zeggen en een achterzetsel.').map(x => x.id).join();
    ok(tm === 'tr-klinkerharmonie,tr-naamval,tr-achtervoegsel,tr-bredetijd,perfecto,tr-achterzetsel', w + 'Turkse termen tikbaar: ' + tm);
    ok(G.search('ünlü uyumu')[0].id === 'tr-klinkerharmonie' && G.search('geniş zaman').some(b => b.id === 'tr-bredetijd'), w + 'Turks zoeken');
    S.course = c0; G.match('x'); }
  // Engels: begrippen zonder Engels blok (por/para, stamklinkerwisseling) horen niet bij de Engelse cursus
  ok(!G.fits(G.get('por-para'), 'en') && G.fits(G.get('lidwoord'), 'en') && G.list('en').length < G.list('es').length, w + 'per doeltaal');
}
{ // 🗺️ regiowoorden met landvlaggetjes (js/regio.js): Mark kende «hermana» en kreeg zonder land «la ñaña»
  const R = S.Regio, w = 'regio: ';
  const n = R.info({ es: 'la ñaña', nl: 'de zus', note: 'EC (informeel) · ñaño = broer' });
  ok(n && n.codes.join() === 'EC' && n.informal && n.std === 'la hermana' && n.names === 'Ecuador' && n.extra === 'ñaño = broer', w + 'la ñaña → Ecuador, informeel, standaard la hermana: ' + JSON.stringify(n));
  ok(R.parse('AR · UY').codes.join() === 'AR,UY' && R.parse('BO · PE · EC').codes.length === 3 && R.parse('Andes').groups[0] === 'andes', w + 'meerdere landen en regio');
  ok(R.parse('Mexico').codes[0] === 'MX' && R.parse('MX, informeel').informal && R.parse('informeel, o.a. CO · PE · CL').codes.join() === 'CO,PE,CL', w + 'landnaam en informeel');
  ['ES: la patata', 'MX ook: güero / güera', 'MX informeel: la panza', 'ES vaker: añadir', 'LatAm', 'in LatAm vaak = het weer', 'ook: rosa', 'AR/PE/UY: el mozo · ES: el camarero', 'arriendo: CO · CL; MX: la renta']
    .forEach(x => ok(!R.parse(x), w + 'geen regiowoord: ' + x));
  ok(R.parse('CO; MX: el embotellamiento') && R.parse('AR · ook: la micro (CL)'), w + 'regiowoord met alternatieven in de notitie');
  ok(R.places({ codes: ['MX', 'CO', 'VE'], groups: [] }) === 'Mexico, Colombia en Venezuela', w + 'namen in een zin');
  // elke landcode heeft een vlag-afbeelding
  Object.values(R.LAND).forEach(l => ok(fs.existsSync(path.join(root, 'icons/vlaggen', l[0] + '.png')), w + 'vlag ' + l[0]));
  // elk standaardwoord hoort bij een echt regiowoord in de lesstof (geen tikfouten in de sleutel)
  const reg = new Map(); units.forEach(u => u.vocab.forEach(v => { if (v[2] && R.parse(v[2])) reg.set(v[0], v); }));
  Object.keys(S.regioStd.es).forEach(k => ok(reg.has(k), w + 'standaardwoord zonder regiowoord: ' + k));
  ok(reg.size > 100, w + 'regiowoorden gevonden: ' + reg.size);
  // vraag naar een regiowoord: het standaardwoord is nooit een foute keuze en bij typen ook goed
  const u3 = units.find(u => u.id === 'a1-03'), i = u3.vocab.findIndex(v => v[0] === 'la ñaña'), wd = S.C.word(u3, i);
  for (let k = 0; k < 30; k++) { const it = S.Gen.wordItem(wd, 'mc-nl', u3); ok(!it.options.some(o => /hermana/.test(o)), w + 'hermana geen afleider'); }
  const ty = S.Gen.wordItem(wd, 'type', u3);
  ok(S.Gen.checkType('la hermana', ty).ok && S.Gen.checkType('hermana', ty).ok && S.Gen.checkType('la ñaña', ty).ok, w + 'typvraag: hermana én ñaña goed');
  ok(R.lookup('ñaña') && R.lookup('¡Qué chido!') && !R.lookup('hermana'), w + 'tikvertaling vindt regiowoord');
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  ok(['content/regiowoorden.js', 'js/regio.js'].every(f => html.includes(f) && sw.includes(f)) && html.indexOf('js/regio.js') < html.indexOf('js/lesson.js'), w + 'in index.html (vóór lesson.js) en sw.js');
}
{
  // overtypen na een fout: één van de vormen is goed, spaties en schuine strepen tellen niet
  const w = 'overtypen: ';
  const lsrc = fs.readFileSync(path.join(root, 'js/lesson.js'), 'utf8');
  const fnSrc = lsrc.match(/function retypeOk\(v, answers\) \{[\s\S]*?\n    \}/)[0];
  const retypeOk = vm.runInContext('(function(){ const S = SPT; return ' + fnSrc + '; })()', ctx);
  const ans = S.Gen.forms('animado / animada');
  ok(retypeOk('animado', ans) && retypeOk('animada', ans) && retypeOk('Animado / animada', ans), w + 'één vorm of beide');
  ok(retypeOk('animado/animada', ans) && retypeOk('animado /animada', ans) && retypeOk('animado  /  animada', ans), w + 'spaties rond / maken niet uit');
  ok(!retypeOk('animad', ans) && !retypeOk('animados', ans) && !retypeOk('', ans), w + 'echt anders blijft fout');
  ok(retypeOk('me llamo', ['(yo) me llamo']) && retypeOk('yo me llamo', ['(yo) me llamo']) && retypeOk('¿Cómo estás', ['¿Cómo estás?']), w + 'haakjes en leestekens');
  ok(retypeOk('levendig gezellig', ['levendig, gezellig']) && retypeOk('Cómo  estás?', ['¿Cómo estás?']), w + 'komma en dubbele spaties');
  ok(/answers = \[\.\.\.new Set\(\[target[^\n]*r\.alts/.test(lsrc), w + 'alle vormen (r.alts) tellen mee');
}
const words = units.reduce((a, u) => a + u.vocab.length, 0), ex = units.reduce((a, u) => a + u.ex.length, 0);
/* ---------- Lupe 27 nov: ¿cómo estás? en hint bij een half getypte uitdrukking ---------- */
{
  const u1 = S.C.get('a1-01'), wi = S.Gen.wordItem(S.C.word(u1, 6), 'type', u1);
  ok(S.Gen.checkType('¿Cómo estás?', wi).ok && S.Gen.checkType('como estas', wi).ok, '«¿cómo estás?» goed bij «hoe is het?»');
  const u4 = S.C.get('a1-04'), der = S.Gen.wordItem(S.C.word(u4, 25), 'type', u4);
  const r1 = S.Gen.checkType('derecha', der);
  ok(!r1.ok && r1.warn === 'incomplete' && r1.hint === 'a la …', '«derecha» is fout met hint «a la …»: ' + JSON.stringify(r1));
  const r2 = S.Gen.checkType('debajo', S.Gen.wordItem(S.C.word(u4, 41), 'type', u4));
  ok(!r2.ok && r2.hint === '… de', '«debajo» krijgt hint «… de»');
  ok(!S.Gen.checkType('izquierda', der).hint, 'een ander woord krijgt geen hint');
}
{ // zwakke punten: grammatica en woorden op één plek
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const t = S.U.dayIndex(), u = S.C.all()[0];
  S.Store.state.tags = { 'ser-estar': { ok: 2, no: 6 }, articles: { ok: 9, no: 1 }, gustar: { ok: 1, no: 1 }, vocab: { ok: 0, no: 9 } };
  S.Store.state.srs = { ['w|' + u.id + '|0']: { d: t, i: 1, e: 2.4, r: 0, l: 2, s: Date.now() }, ['w|' + u.id + '|1']: { d: t + 30, i: 30, e: 2.8, r: 5, l: 0, s: Date.now() } };
  const sm = S.Weak.summary();
  ok(sm.topics.length === 1 && sm.topics[0].tag === 'ser-estar' && Math.round(sm.topics[0].pct * 100) === 25, 'zwak: alleen onderwerpen onder 80% met genoeg antwoorden, geen vocab');
  ok(sm.words.length === 1 && sm.words[0].id === 'w|' + u.id + '|0', 'zwak: alleen zwakke kaarten');
  const ses = S.Weak.session(['ser-estar'], ['w|' + u.id + '|0']);
  ok(ses.items.length > 1 && ses.items.some(i => i.srsId === 'w|' + u.id + '|0'), 'zwak: oefensessie met onderwerp en woord');
  S.Store.state = keep;
}
{ // 🧪 andere aanpak bij hardnekkige fouten: strategie kiezen, effect meten, wat werkt krijgt voorrang
  const keep = S.Store.state; S.Store.state = JSON.parse(JSON.stringify(keep));
  const St = S.Store.state, X = S.Strat, t0 = new Date('2026-11-20T12:00:00Z').getTime(), DAY = 864e5;
  St.strat = {}; St.lupe = { log: [], n: 0, ex: [] }; St.srs = {};
  St.units = { 'a1-04': { steps: { grammar: 1 }, best: 0, done: true }, 'a1-02': { steps: { grammar: 1 }, best: 0, done: true } };
  St.tags = { contractions: { ok: 8, no: 13 }, 'hay-estar': { ok: 3, no: 9 }, articles: { ok: 9, no: 1 }, gender: { ok: 2, no: 2 }, vocab: { ok: 0, no: 30 } };
  ok(X.isStubborn('contractions') && !X.isStubborn('articles') && !X.isStubborn('gender'), 'strategie: hardnekkig = vaak geoefend en onder 70%');
  ok(X.keyOf({ tag: 'vocab' }) === '' && X.keyOf({ tag: 'conj', conj: { verb: 'estar', tense: 'pres' } }) === 'c|estar|pres' && X.keyOf({ tag: 'x', sk: 'y' }) === 'y', 'strategie: onderwerp van een vraag');
  const tp = X.topics();
  ok(tp.length === 2 && tp[0].key === 'hay-estar' && tp[1].key === 'contractions' && tp.every(t => t.next), 'strategie: hardnekkige onderwerpen, zwakste eerst, met voorstel: ' + tp.map(t => t.key));
  ok(S.beslis && S.beslis.contractions && X.pick('contractions').id === 'regel', 'strategie: begint met de beslisregel');
  for (const sid of ['regel', 'contrast', 'bouw', 'dictee', 'spreid']) {
    const ses = X.session('contractions', sid, 1);
    const q = ses ? ses.items.filter(i => i.kind !== 'info') : [];
    ok(ses && q.length >= 3 && ses.items[0].kind === 'info' && ses.items[0].strat && q.every(i => i.sk === 'contractions' && i.st === 1 && i.tag), 'strategie ' + sid + ': ronde met intro en gemerkte vragen');
    if (sid === 'contrast') ok(q.filter(i => i.q === 'Welke zin is goed?').length >= 3 && q.filter(i => i.q === 'Welke zin is goed?').every(i => i.options.includes(i.answer) && new Set(i.options).size === i.options.length && !/___/.test(i.answer)), 'strategie contrast: hele zinnen naast elkaar');
    if (sid === 'dictee') ok(q.filter(i => i.kind === 'listen').length >= 3 && q.filter(i => i.kind === 'listen').every(i => !/___/.test(i.text)), 'strategie dictee: hele zinnen');
    if (sid === 'bouw') ok(q.every(i => i.kind === 'order' || i.kind === 'type') && q.every(i => !i.options), 'strategie bouw: zonder keuzes');
    if (sid === 'spreid') ok(q.length === 3, 'strategie spreid: 3 vragen per dag');
    if (sid === 'regel') ok(ses.items[1].strat && /al/.test(ses.items[1].strat.html) && /Uitzondering/.test(ses.items[1].strat.html), 'strategie regel: beslisregel met uitzondering erbij');
  }
  ok(!X.available('contractions', 'fouten') && !X.available('contractions', 'lupe'), 'strategie: eigen fouten/docent alleen als het kan');
  St.lupe.ex = [{ t: t0, id: 'x|a1-04|14', tag: 'contractions', q: 'q', u: 'a el', a: 'al' }, { t: t0 + 1, id: 'x|a1-04|15', tag: 'contractions', q: 'q2', u: 'de el', a: 'del' }];
  const fs2 = X.session('contractions', 'fouten', 1);
  ok(fs2 && /a el/.test(fs2.items[1].strat.html) && fs2.items.some(i => i.srsId === 'x|a1-04|14'), 'strategie fouten: je eigen fouten op de kaart en opnieuw gevraagd');
  // poging 1 (regel): tijdens 4/5, daarna 2/6 → hielp niet
  const a = X.begin('contractions', 'regel', t0);
  ok(Math.round(a.b[0] / a.b[1] * 100) === 38, 'strategie: uitgangspunt bewaard');
  for (let i = 0; i < 5; i++) X.answer({ tag: 'contractions', st: a.t, sk: 'contractions' }, i < 4, t0 + i);
  ok(X.verdict(a).state === 'open' && a.in[0] === 4 && a.in[1] === 5 && a.af[1] === 0, 'strategie: vragen uit de ronde zelf tellen niet als effect');
  for (let i = 0; i < 6; i++) X.answer({ tag: 'contractions' }, i < 2, t0 + DAY + i);
  ok(X.verdict(a).state === 'niet' && X.verdict(a).sticks === false, 'strategie: geen verbetering = hielp niet');
  ok(X.pick('contractions').id !== 'regel', 'strategie: wat niet hielp komt niet meteen terug');
  // poging 2 (contrast): daarna 6/7, ook een dag later → werkt en blijft hangen
  const b = X.begin('contractions', 'contrast', t0 + 2 * DAY);
  for (let i = 0; i < 7; i++) X.answer({ tag: 'contractions' }, i > 0, t0 + 3 * DAY + i);
  const vb = X.verdict(b);
  ok(vb.state === 'werkt' && vb.sticks === true && /werkt/.test(X.tryText(b)) && /blijft hangen/.test(X.tryText(b)), 'strategie: verbetering die een dag later nog staat = werkt en blijft hangen');
  const G = X.stats();
  ok(G.contrast.werkt === 1 && G.regel.niet === 1 && G.contrast.score > G.dictee.score && G.regel.score < G.dictee.score, 'strategie: score per strategie');
  ok(X.rank('hay-estar')[0].s.id === 'contrast' || !X.available('hay-estar', 'contrast'), 'strategie: wat bij jou werkt gaat voor bij een ander onderwerp');
  ok(X.rank('hay-estar').findIndex(x => x.s.id === 'regel') > 0, 'strategie: wat niet werkte zakt');
  const tx = X.asText();
  ok(/al \/ del \[contractions\]/.test(tx) && /Beslisregel: 38% → 33%/.test(tx) && /hielp niet/.test(tx) && /Contrastparen/.test(tx) && /Wat bij deze leerling werkt/.test(tx) && /hay vs\. estar \[hay-estar\].*nog geen andere aanpak/.test(tx), 'strategie: tekst voor het rapport: ' + tx);
  ok(S.Mistakes.asText(S.Mistakes.report(30)).includes('Hardnekkige onderwerpen en geprobeerde leerstrategieën'), 'strategie: staat in het rapport van de docent');
  { // eerdere updaterondes (S.reworked) tellen als «al geprobeerd», met de fouten erna
    const E = X.earlier('contractions');
    ok(E.length >= 2 && E.every((r, i) => !i || r.t >= E[i - 1].t) && E[E.length - 1].last, 'strategie: eerdere updates over dit onderwerp, oudste eerst');
    St.lupe.ex.push({ t: t0, v: E[0].v, id: 'x|a1-04|7', tag: 'contractions', q: 'q', u: 'a el', a: 'al' }, { t: t0, v: '99.0.0', id: 'x|a1-04|7', tag: 'contractions', q: 'q', u: 'a el', a: 'al' });
    const E2 = X.earlier('contractions');
    ok(E2[0].n === E[0].n + 1 && E2[E2.length - 1].n === E[E.length - 1].n + 1, 'strategie: fouten per periode na een update');
    ok(/Extra oefeningen en uitleg \(.*v[\d.]+\)/.test(X.asText()), 'strategie: eerdere rondes in de rapporttekst');
    St.lupe.ex.length -= 2;
  }
  // werkwoordstijd
  St.srs['c|estar|pres'] = { d: 0, i: 0, e: 2, r: 0, l: 3, f: 6, g: 3 };
  ok(X.isStubborn('c|estar|pres') && X.label('c|estar|pres').startsWith('estar vervoegen'), 'strategie: hardnekkige werkwoordstijd');
  for (const sid of ['regel', 'contrast', 'bouw', 'dictee', 'spreid']) { const ses = X.session('c|estar|pres', sid, 2); ok(ses && ses.items.filter(i => i.kind !== 'info').length >= 3 && ses.items.filter(i => i.kind !== 'info').every(i => i.sk === 'c|estar|pres'), 'strategie ' + sid + ': werkwoordstijd'); }
  // elke dag een beetje: dag telt bij de eerste vraag van die dag
  const c = X.begin('hay-estar', 'spreid', t0); St.strat['hay-estar'].drip = { t: c.t, s: S.U.dayIndex(new Date(t0)), n: 0, d: 0 };
  X.answer({ tag: 'hay-estar', st: c.t, sk: 'hay-estar' }, true, t0); X.answer({ tag: 'hay-estar', st: c.t, sk: 'hay-estar' }, true, t0 + 5);
  ok(St.strat['hay-estar'].drip.n === 1, 'strategie spreid: één dag geteld');
  // synchroniseren: pogingen van beide apparaten, de volste versie per poging
  const other = JSON.parse(JSON.stringify(St.strat)); other.contractions.tries[1].af = [1, 2]; other.contractions.tries.push({ s: 'dictee', t: t0 + 9 * DAY, b: [1, 2], in: [0, 0], af: [0, 0], ld: [0, 0] }); other.gustar = { r: '10', u: 5, tries: [] };
  const m = X.merge(St.strat, other), m2 = X.merge(other, St.strat);
  ok(m.contractions.tries.length === 3 && m.contractions.tries[1].af[1] === 7 && m.gustar && JSON.stringify(m.contractions.tries) === JSON.stringify(m2.contractions.tries), 'strategie: samenvoegen bij synchroniseren');
  const files = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  ok(['js/strategie.js', 'content/beslisregels.js'].every(f => files.includes(f) && sw.includes(f)), 'strategie: in index.html en sw.js');
  Object.entries(S.beslis).forEach(([k, r]) => {
    ok(/^c\|/.test(k) ? !!S.conj.table(k.split('|')[1], k.split('|')[2]) : !!S.C.TAGS[k], 'beslisregel: bestaand onderwerp ' + k);
    (r.html.match(/<p>[^<]*Uitzondering[\s\S]*?<\/p>/g) || []).forEach(p => ok(/Reden:/.test(p), 'beslisregel ' + k + ': uitzondering met reden'));
    ok(!/vosotros/i.test(r.html), 'beslisregel ' + k + ': Latijns-Amerikaans');
  });
  S.Store.state = keep;
}
{ // laatste unittoets overleeft synchroniseren (nieuwste wint)
  const a = { updated: 2, units: { u1: { steps: {}, best: 0.6, done: false, last: { t: 100, score: 0.6 } } } };
  const b = { updated: 1, units: { u1: { steps: {}, best: 0.7, done: false, last: { t: 200, score: 0.7 } } } };
  const m = S.Store.mergeStates(a, b);
  ok(m.units.u1.last.t === 200 && m.units.u1.best === 0.7, 'unittoets: nieuwste laatste toets blijft bewaard na sync');
}
{ // vlaggen ook op Windows: eigen vlaggenlettertype en geen <select> met cursusnamen
  const css = fs.readFileSync(path.join(root, 'css/app.css'), 'utf8'), html = fs.readFileSync(path.join(root, 'index.html'), 'utf8'), sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8'), app = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
  ok(fs.existsSync(path.join(root, 'icons/vlaggen/TwemojiCountryFlags.woff2')) && sw.includes("'icons/vlaggen/TwemojiCountryFlags.woff2'"), 'vlaggen: lettertype bestaat en staat in sw.js');
  ok(/@font-face \{ font-family: 'Vlaggen'/.test(css) && /:root\.vlagfont \{ --font: 'Vlaggen'[^}]*--serif: 'Vlaggen'/.test(css), 'vlaggen: @font-face en .vlagfont in css');
  ok(html.includes("classList.add('vlagfont')") && html.indexOf('vlagfont') < html.indexOf('css/app.css'), 'vlaggen: index.html test of de browser vlaggen tekent');
  ok(!app.split('\n').some(l => /h\('select'/.test(l) && /CNAME|LNAME|\.flag/.test(l)), 'vlaggen: geen <select> met vlaggen (gebruik coursePick)');
}
{ // leestekst en vraag samen in beeld
  const css = fs.readFileSync(path.join(root, 'css/app.css'), 'utf8'), ls = fs.readFileSync(path.join(root, 'js/lesson.js'), 'utf8');
  ok(/function textSource\(\)/.test(ls) && /syncText\(\);/.test(ls) && !ls.includes('ls-src-btn'), 'tekst naast vraag: tekstvak in de les, geen losse «Lees eerst»-knop meer');
  ok(/@container lesson \(min-width: \d+px\) \{\s*\.ls\.with-txt \{ display: grid/.test(css) && /\.ls-txt \{[^}]*overflow-y: auto/.test(css), 'tekst naast vraag: naast elkaar op breed scherm, eigen scrollvak op smal scherm');
  const t = S.Gen.stepSession(S.C.get('a1-04'), 'test').items.find(i => i.src);
  ok(t && t.src.reading && t.skill === 'read' && S.Gen.stepSession(S.C.get('a1-04'), 'read').items.slice(1).some(i => i.skill === 'read' && i.kind === 'mc'), 'tekst naast vraag: leesvragen herkenbaar (src of skill read)');
}
console.log(`\n${checks - fails}/${checks} controles geslaagd · ${units.length} units · ${words} woorden · ${ex} oefeningen · ${Object.keys(S.conj.VERBS).length} werkwoorden`);
process.exit(fails ? 1 : 0);
})();
