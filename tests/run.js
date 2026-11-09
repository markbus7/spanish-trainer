/* Controleert lesstof, vervoegingen en antwoordcontrole.  Gebruik: node tests/run.js */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, setTimeout, clearTimeout });
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['js/core.js', 'js/conjugate.js', 'js/curriculum.js', 'content/a1.js', 'content/a2.js', 'content/a1-plus.js', 'content/a2-plus.js', 'content/extra.js', 'js/gen.js']) {
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
  'decir|prog': 'estoy diciendo|estás diciendo|está diciendo|estamos diciendo|están diciendo'
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
ok(units.length === 22, 'aantal units = ' + units.length);
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
['A1', 'A2', 'B1', 'B2'].forEach(l => ok(S.placement.filter(q => q.lv === l).length === 8, 'plaatsingstoets ' + l));
S.placement.forEach((q, i) => ok(new Set(q.o).size === q.o.length, 'plaatsingsvraag ' + i));
ok(S.Gen.levelExam('A1').items.length >= 20 && S.Gen.levelExam('A2').items.length >= 20, 'niveau-examens');

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

const words = units.reduce((a, u) => a + u.vocab.length, 0), ex = units.reduce((a, u) => a + u.ex.length, 0);
console.log(`\n${checks - fails}/${checks} controles geslaagd · ${units.length} units · ${words} woorden · ${ex} oefeningen · ${Object.keys(S.conj.VERBS).length} werkwoorden`);
process.exit(fails ? 1 : 0);
