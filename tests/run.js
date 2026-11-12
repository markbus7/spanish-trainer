/* Controleert lesstof, vervoegingen en antwoordcontrole.  Gebruik: node tests/run.js */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, setTimeout, clearTimeout });
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['js/core.js', 'js/conjugate.js', 'js/curriculum.js', 'content/a1.js', 'content/a2.js', 'content/a1-plus.js', 'content/a2-plus.js', 'content/b1.js', 'content/b2.js', 'content/extra.js', 'content/oefeningen-plus.js', 'content/synoniemen.js', 'js/gen.js', 'js/games.js', 'js/words.js']) {
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
ok(units.length === 36, 'aantal units = ' + units.length);
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
  ok(list.every(x => x.k === S.Speech.key(x.text) && /^es-[A-Z]{2}-\w+Neural$/.test(x.voice)), 'opnames: sleutels en stemnamen');
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
  ok(!miss.size, 'opnames: ' + miss.size + ' teksten ontbreken, bv. ' + [...miss].slice(0, 5).join(' | '));
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
  for (const src of [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1])) ok(assets.includes("'" + src + "'"), 'sw.js cachet ' + src);
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
  // samenvoegen tussen apparaten: nieuwste stand per zin
  const A = { updated: 2, partial: { 'x|a|1': { a: 'Hola amigo', k: [0], t: 5 }, 'x|a|2': { t: 9 } } };
  const B = { updated: 1, partial: { 'x|a|1': { t: 7 }, 'x|a|2': { a: 'Buen día', k: [0], t: 3 } } };
  const M = S.Store.mergeStates(A, B);
  ok(!M.partial['x|a|1'].a && !M.partial['x|a|2'].a, 'partial samenvoegen');
}

const words = units.reduce((a, u) => a + u.vocab.length, 0), ex = units.reduce((a, u) => a + u.ex.length, 0);
console.log(`\n${checks - fails}/${checks} controles geslaagd · ${units.length} units · ${words} woorden · ${ex} oefeningen · ${Object.keys(S.conj.VERBS).length} werkwoorden`);
process.exit(fails ? 1 : 0);
