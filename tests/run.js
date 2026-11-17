/* Controleert lesstof, vervoegingen en antwoordcontrole.  Gebruik: node tests/run.js */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, setTimeout, clearTimeout });
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['js/core.js', 'js/i18n.js', 'js/i18n-es.js', 'js/conjugate.js', 'js/curriculum.js', 'content/a1.js', 'content/a2.js', 'content/a1-plus.js', 'content/a2-plus.js', 'content/b1.js', 'content/b2.js', 'content/extra.js', 'content/oefeningen-plus.js', 'content/synoniemen.js', 'content/uitleg.js', 'js/gen.js', 'js/games.js', 'js/words.js', 'js/vocab.js', 'js/woordtoets.js', 'js/dagplan.js', 'js/mistakes.js', 'js/tutor.js', 'js/ai.js']) {
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
  'hacer|condperf': 'habría hecho|habrías hecho|habría hecho|habríamos hecho|habrían hecho', 'ver|plussubj': 'hubiera visto|hubieras visto|hubiera visto|hubiéramos visto|hubieran visto'
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
ok(units.length === 38, 'aantal units = ' + units.length);
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

/* ---------- opnames: alles wat een les voorleest, moet in de inspreeklijst staan ---------- */
{
  const list = JSON.parse(require('child_process').execFileSync(process.execPath, [path.join(root, 'tools/tts-texts.js')], { maxBuffer: 64 << 20 }).toString());
  const have = new Set(list.map(x => x.k));
  ok(list.every(x => x.k === S.Speech.clipKey(x.text, x.ns) && /^(es-[A-Z]{2}|en-US|nl-NL)-\w+Neural$/.test(x.voice)), 'opnames: sleutels en stemnamen');
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
  ok(list.some(x => x.ns === 'en-es') && list.some(x => x.ns === 'nl-es') && list.filter(x => x.ns && !x.ns.startsWith('lupe')).every(x => x.lv.every(l => l.startsWith(x.ns + ':'))), 'opnames: Engels en Nederlands met eigen naamruimte en niveaus');
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
  const saved = JSON.stringify(St.state);
  St.state = St.mergeStates({}, {});
  const reply = '¡Claro! ¿Y tú?\n---\n❌ soy cansado → ✅ estoy cansado — toestand\n<log>[{"w":"soy cansado","c":"estoy cansado","why":"toestand = estar","tag":"ser-estar"},{"w":"el coche","c":"el carro","why":"in Latijns-Amerika","tag":"vocab","es":"el carro","nl":"de auto"},{"w":"x","c":"y","tag":"bestaat-niet"}]</log>';
  ok(!Mi.strip(reply).includes('<log') && Mi.strip(reply).endsWith('toestand'), 'lupe-log: blok wordt verborgen');
  ok(Mi.strip('Hola amigo\n<lo') === 'Hola amigo' && Mi.strip('Hola\n<log>[{"w":') === 'Hola', 'lupe-log: half binnengekomen blok ook verborgen');
  ok(!S.Tutor.spoken(reply, 'roleplay').includes('log') && !S.Tutor.spoken(reply, 'write').includes('carro"'), 'lupe-log: Lupe leest het blok niet voor');
  const p = Mi.parse(reply);
  ok(p && p.length === 3 && p[2].tag === 'other' && p[0].es === '', 'lupe-log: onbekend onderwerp wordt overig');
  ok(Mi.parse('geen blok') === null && Mi.parse('<log>kapot</log>') === null && Mi.parse('<log>[]</log>').length === 0, 'lupe-log: zonder of met kapot blok');
  const rec = Mi.record(reply, 'roleplay', 'Soy cansado y tengo un coche', { sc: 'En el café' });
  ok(rec.length === 3 && St.state.lupe.log.length === 3 && St.state.lupe.n === 1, 'lupe-log: fouten bewaard');
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
  ok(txt.includes('ser vs. estar: 2×') && txt.includes('«soy cansado» → «estoy cansado»') && txt.includes('el carro = de auto'), 'lupe-log: rapport als tekst');
  const ses = Mi.practice(['ser-estar'], [w.id]);
  ok(ses.items.length > 0 && ses.items.some(it => it.tag === 'ser-estar'), 'lupe-log: oefensessie voor de fouten');
  const A = JSON.parse(JSON.stringify(St.state)), B = JSON.parse(JSON.stringify(St.state));
  B.lupe.log.push({ t: Date.now() + 99, m: 'write', w: 'a', c: 'b', tag: 'gender' }); B.updated = 5;
  const m = St.mergeStates(A, B);
  ok(m.lupe.log.length === 7 && JSON.stringify(St.mergeStates(m, m).lupe) === JSON.stringify(m.lupe) && St.mergeStates(B, A).lupe.log.length === 7, 'lupe-log: sync voegt samen, idempotent');
  ok(!/vosotros/i.test(S.AI.roleplaySystem({ role: 'x', goal: 'y' }).replace(/never "vosotros"/g, '')) && S.AI.roleplaySystem({ role: 'x', goal: 'y' }).includes('<log>') && S.AI.writingSystem().includes('<log>'), 'lupe-log: prompts vragen om het blok');
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
    ok(K.placement.length >= 12 && K.placement.every(q => q.lv === 'A1') && K.scenarios.length >= 4 && K.phrases.length >= 10 && !K.regions.length, w + 'niveautest, gesprekken en uitdrukkingen');
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
    for (let r = 0; r < 5; r++) { const b = K.Gen.levelTestBand('A1'); ok(b.items.length >= 8 && b.items.every(it => it.options.includes(it.answer)), w + 'niveautest A1'); }
    ok(!K.Gen.levelTestBand('A2').items.length && K.C.available('A1') && !K.C.available('A2'), w + 'alleen A1 beschikbaar');
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
const words = units.reduce((a, u) => a + u.vocab.length, 0), ex = units.reduce((a, u) => a + u.ex.length, 0);
console.log(`\n${checks - fails}/${checks} controles geslaagd · ${units.length} units · ${words} woorden · ${ex} oefeningen · ${Object.keys(S.conj.VERBS).length} werkwoorden`);
process.exit(fails ? 1 : 0);
})();
