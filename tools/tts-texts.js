/* Verzamelt alle vaste Spaanse teksten die de app voorleest, met een passende stem per regio.
   Gebruik: node tools/tts-texts.js > texts.json   (de GitHub-actie "Stemmen maken" doet dit automatisch)
   Uitvoer: [{ k: sleutel, text, voice, (ns, pitch, rate, say = uitspraak als die afwijkt van text) }]; het bestand heet audio/<k>.mp3. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const out = new Map();
const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
  .filter(f => !/(app|lesson|ai|sync)\.js$/.test(f));
/* Elke cursus wordt apart geladen (self.SPT_COURSE), zodat alleen de lesstof van die cursus meedoet. */
function load(course) {
  const ctx = vm.createContext({ console, setTimeout, clearTimeout });
  ctx.window = ctx; ctx.globalThis = ctx; ctx.self = ctx; ctx.SPT_COURSE = course;
  for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
  return ctx.SPT;
}
let S = load('es-nl');

/* Edge-neurale stemmen per land: [vrouw, man]. Standaard Mexicaans. */
const VOICES = {
  MX: ['es-MX-DaliaNeural', 'es-MX-JorgeNeural'], CO: ['es-CO-SalomeNeural', 'es-CO-GonzaloNeural'], AR: ['es-AR-ElenaNeural', 'es-AR-TomasNeural'],
  CL: ['es-CL-CatalinaNeural', 'es-CL-LorenzoNeural'], PE: ['es-PE-CamilaNeural', 'es-PE-AlexNeural'], CR: ['es-CR-MariaNeural', 'es-CR-JuanNeural'],
  GT: ['es-GT-MartaNeural', 'es-GT-AndresNeural'], EC: ['es-EC-AndreaNeural', 'es-EC-LuisNeural'], PA: ['es-PA-MargaritaNeural', 'es-PA-RobertoNeural'],
  DO: ['es-DO-RamonaNeural', 'es-DO-EmilioNeural'], CU: ['es-CU-BelkysNeural', 'es-CU-ManuelNeural'], VE: ['es-VE-PaolaNeural', 'es-VE-SebastianNeural'],
  UY: ['es-UY-ValentinaNeural', 'es-UY-MateoNeural'], BO: ['es-BO-SofiaNeural', 'es-BO-MarceloNeural'], PY: ['es-PY-TaniaNeural', 'es-PY-MarioNeural'],
  SV: ['es-SV-LorenaNeural', 'es-SV-RodrigoNeural'], HN: ['es-HN-KarlaNeural', 'es-HN-CarlosNeural'], NI: ['es-NI-YolandaNeural', 'es-NI-FedericoNeural'],
  PR: ['es-PR-KarinaNeural', 'es-PR-VictorNeural'], US: ['es-US-PalomaNeural', 'es-US-AlonsoNeural'],
  ES: ['es-ES-ElviraNeural', 'es-ES-AlvaroNeural'], GQ: ['es-GQ-TeresaNeural', 'es-GQ-JavierNeural']
};
const DEF = VOICES.MX[0];
function country(place) {
  const cps = [...String(place || '')].map(c => c.codePointAt(0)).filter(c => c >= 0x1F1E6 && c <= 0x1F1FF);
  return cps.length >= 2 ? String.fromCharCode(cps[0] - 0x1F1E6 + 65, cps[1] - 0x1F1E6 + 65) : null;
}
/* Dialogen (naamruimte 'ch'): elke spreker een eigen stem die past bij man/vrouw.
   Mannen herkennen we aan de naam (eerste woord niet op -a), met een paar uitzonderingen. */
const FEMALE = new Set(['Yarisel', 'Coralis', 'Abuela Lupe', 'Señora Elena', 'Beatriz', 'Isabel', 'Carmen', 'Raquel', 'Inés', 'Pilar', 'Mercedes', 'Luz', 'Sol', 'Belén', 'Abigail', 'Ruth', 'Esther', 'Maribel', 'Soledad', 'Rocío', 'Consuelo', 'Nicole', 'Doña Rosa']);
const MALE = new Set(['Turista', 'Guía Mauricio', 'Mark', 'Luca', 'Nicola', 'Joshua', 'Elías']);
const isMale = w => MALE.has(w) || (!FEMALE.has(w) && !/(a|ora)$/i.test(String(w).split(/\s+/)[0].replace(/[.,]/g, '')) && !/^(Sra|Señorita|Doña|Tía|Abuela|Doctora|Profa)\b/i.test(w));
// eerst de stem van het land; doen er twee mannen of twee vrouwen mee (of Mark naast een man uit het land), dan een andere stem
function castVoices(who, c) {
  const [vf, vm] = VOICES[c] || VOICES.MX;
  const pool = { f: [vf, 'es-MX-DaliaNeural', 'es-US-PalomaNeural', 'es-CO-SalomeNeural'], m: [vm, 'es-MX-JorgeNeural', 'es-US-AlonsoNeural', 'es-CO-GonzaloNeural'] };
  const taken = new Set(), cast = {};
  const pick = g => { const v = pool[g].find(x => !taken.has(x)) || pool[g][0]; taken.add(v); return v; };
  who.filter(w => w !== 'Mark').forEach(w => { cast[w] = pick(isMale(w) ? 'm' : 'f'); });
  if (who.includes('Mark')) cast.Mark = pick('m');
  return cast;
}
/* Wat meer leven in dialoogzinnen: uitroepen iets vlotter en hoger, vragen iets hoger. */
function mood(es) {
  if (/[¡!]/.test(es)) return { rate: '+8%', pitch: '+5Hz' };
  if (/[¿?]/.test(es)) return { pitch: '+3Hz' };
  return {};
}
let LV = 'X'; // niveau van de unit die nu wordt doorlopen (voor 'offline downloaden per niveau'); X = overig
function add(text, voice = DEF) {
  if (!text || !/[a-záéíóúñü]/i.test(text)) return;
  const k = S.Speech.key(text);
  if (!out.has(k)) out.set(k, { k, text: S.Speech.clean(text), voice, lv: [LV] });
  else if (!out.get(k).lv.includes(LV)) out.get(k).lv.push(LV);
}
const ES = /[¿¡áéíóúñ]|\b(el|la|los|las|un|una|de|que|y|es|en|yo|tú|usted|no)\b/i;

for (const u of S.C.all()) {
  LV = u.level;
  const c = country(u.dialogue && u.dialogue.place) || country(u.reading && u.reading.place);
  const [vf, vm_] = VOICES[c] || VOICES.MX;
  u.vocab.forEach(w => { add(w[0]); add(w[0].replace(/…/g, '').trim()); });
  (u.grammar || []).forEach(g => (g.ex || []).forEach(([e]) => add(e)));
  if (u.dialogue) {
    const who = [...new Set(u.dialogue.lines.map(l => l[0]))];
    u.dialogue.lines.forEach(([w, es]) => add(es, w === 'Mark' ? vm_ : (who.filter(x => x !== 'Mark').indexOf(w) % 2 ? vm_ : vf))); // oude opnames (andere plekken)
    const cast = castVoices(who, c);
    u.dialogue.lines.forEach(([w, es]) => {
      const k = S.Speech.clipKey(es, 'ch');
      // personage uit de vaste cast (js/cast.js): altijd dezelfde stem, met zijn eigen toonhoogte en tempo
      const ch = S.Cast && S.Cast.forSpeaker(w, u.dialogue.place), cv = ch && ch.voice;
      const m = mood(es), num = x => parseInt(x || 0, 10);
      const spec = cv ? { voice: cv.v, pitch: (num(m.pitch) + cv.pitch >= 0 ? '+' : '') + (num(m.pitch) + cv.pitch) + 'Hz', rate: (num(m.rate) + cv.rate >= 0 ? '+' : '') + (num(m.rate) + cv.rate) + '%' } : Object.assign({ voice: cast[w] }, m);
      if (!out.has(k)) out.set(k, Object.assign({ k, ns: 'ch', text: S.Speech.clean(es), lv: [LV] }, spec));
      else if (!out.get(k).lv.includes(LV)) out.get(k).lv.push(LV);
    });
  }
  if (u.reading) {
    u.reading.p.forEach(([es]) => {
      add(es, vf);
      es.split(/(?<=[.!?»])\s+/).forEach(x => add(x.replace(/[«»]/g, '').trim(), vf));
    });
    (u.reading.words || []).forEach(([es]) => add(es));
  }
  (u.say || []).forEach(([es]) => add(es));
  if (u.task && u.task.model) add(u.task.model);
  u.ex.forEach(e => {
    if (e.t === 'order') add(e.s);
    if (e.t === 'tr') add(e.a[0]);
    if (e.t === 'cloze') { const a = (e.o || e.a)[0]; add(e.s.replace('___', a)); add(a); }
    if (e.t === 'match') e.p.forEach(([es]) => add(es));
    if (e.t === 'mc' && e.o.every(o => ES.test(o))) add(e.o[0]);
  });
  (u.verbs || []).forEach(v => (u.tenses || []).forEach(t => {
    if (!S.conj.table(v, t)) return;
    S.conj.personsFor(t).forEach(p => {
      const a = S.conj.alternatives(v, t, p)[0]; if (!a) return;
      add(a); add(S.conj.personLabel(t, p) + ' ' + a);
    });
  }));
}
// niveautest: de ingevulde zin wordt na het antwoord voorgelezen
(S.placement || []).forEach(q => {
  LV = q.lv;
  if (q.q.includes('___')) add(q.q.replace('___', q.o[0]));
});
// woordspellen lezen de eerste vorm van een woord voor (zonder '…' en zonder alternatief na '/')
for (const u of S.C.all()) {
  LV = u.level;
  S.C.words(u).forEach(w => add(String(w.es).split(/\s*\/\s*/)[0].replace(/…|\.\.\./g, '').trim()));
}
// Vervoegingstabellen (Práctica): elke vorm van elk werkwoord heeft een 🔊-knop
for (const v of Object.keys(S.conj.VERBS)) for (const t of Object.keys(S.conj.TENSES)) {
  const tb = S.conj.table(v, t); if (!tb) continue;
  LV = S.conj.TENSES[t].level || 'X';
  S.conj.personsFor(t).forEach(p => add(tb[p]));
}
LV = 'X';
(S.phrases || []).forEach(p => add(p[0]));
/* Op reis (content/landen.js): alles van een land met de stem van dat land, in naamruimte 'pl-<land>'.
   Woorden met een uitspraakhint (4e veld) houden hun sleutel, maar de stem leest de hint. De klankzinnen
   komen ook zonder naamruimte (Mexicaanse stem) voor de knop «Neutraal». */
for (const p of S.places || []) {
  const [vf, vm_] = VOICES[p.voice] || VOICES.MX, ns = 'pl-' + p.id;
  const put = (text, voice, said) => {
    if (!text) return;
    const k = S.Speech.clipKey(text, ns);
    if (!out.has(k)) out.set(k, Object.assign({ k, ns, text: S.Speech.clean(text), voice, lv: [ns + ':X'] }, said ? { say: S.Speech.clean(said) } : {}));
  };
  put(p.hello[0], vm_, p.hello[2]);
  (p.sounds || []).forEach(([, , es, , neu], i) => { put(es, i % 2 ? vm_ : vf); add(neu || es); });
  p.words.forEach(([es, , , said]) => put(es, vf, said));
}
add('¡Hola! ¿Cómo estás? Bienvenido a tu clase de español.');

/* Profe Lupe: al haar vaste zinnen (begroeting, feedback, eindschermen, grammaticasamenvatting), in twee varianten
   (instelling 'Stem van Lupe': meisje of vrouw). Mexicaanse vrouwenstem; het meisje iets hoger en vlotter.
   Eigen sleutel (naamruimte lupe-…), zodat dezelfde zin in de lesstof zijn gewone stem houdt. */
const LUPE = { girl: { voice: 'es-MX-DaliaNeural', pitch: '+30Hz', rate: '+6%' }, woman: { voice: 'es-MX-DaliaNeural', pitch: '+0Hz', rate: '+0%' } };
for (const es of S.Tutor.lines.every(S.C.all())) for (const [v, o] of Object.entries(LUPE)) {
  const ns = 'lupe-' + v, k = S.Speech.clipKey(es, ns);
  if (!out.has(k)) out.set(k, { k, ns, text: S.Speech.clean(es), voice: o.voice, pitch: o.pitch, rate: o.rate, lv: ['X'] });
}


/* Andere cursussen (uitleg in het Spaans): Amerikaans-Engelse en Nederlandse stemmen, eigen naamruimte (= cursus-id),
   en per niveau 'cursus:niveau' voor offline downloaden. */
const OTHER = { 'en-es': ['en-US-JennyNeural', 'en-US-GuyNeural'], 'en-nl': ['en-US-AriaNeural', 'en-US-GuyNeural'], 'nl-es': ['nl-NL-FennaNeural', 'nl-NL-MaartenNeural'] };
for (const [course, [vf, vm_]] of Object.entries(OTHER)) {
  S = load(course);
  const ns = S.course.ns;
  let lv = 'X';
  const put = (text, voice = vf) => {
    if (!text || !/[a-z]/i.test(text)) return;
    const k = S.Speech.clipKey(text, ns), L = course + ':' + lv;
    if (!out.has(k)) out.set(k, { k, ns, text: S.Speech.clean(text), voice, lv: [L] });
    else if (!out.get(k).lv.includes(L)) out.get(k).lv.push(L);
  };
  for (const u of S.C.all()) {
    lv = u.level;
    u.vocab.forEach(w => { put(w[0]); put(w[0].replace(/…/g, '').trim()); });
    (u.grammar || []).forEach(g => { (g.ex || []).forEach(([e]) => put(e)); put(g.sum); });
    const who = [...new Set(u.dialogue.lines.map(l => l[0]))];
    u.dialogue.lines.forEach(([w, t]) => put(t, who.indexOf(w) % 2 ? vm_ : vf));
    u.reading.p.forEach(([t]) => { put(t); t.split(/(?<=[.!?»”])\s+/).forEach(x => put(x.replace(/[«»“”]/g, '').trim())); });
    (u.say || []).forEach(([t]) => put(t));
    if (u.task && u.task.model) put(u.task.model);
    u.ex.forEach(e => {
      if (e.t === 'order') put(e.s);
      if (e.t === 'tr') put(e.a[0]);
      if (e.t === 'cloze') { const a = (e.o || e.a)[0]; put(e.s.replace('___', a)); put(a); }
      if (e.t === 'match') e.p.forEach(([t]) => put(t));
    });
    S.C.words(u).forEach(w => put(String(w.es).split(/\s*\/\s*/)[0].replace(/…|\.\.\./g, '').trim()));
  }
  (S.placement || []).forEach(q => { lv = q.lv; if (q.q.includes('___')) put(q.q.replace('___', q.o[0])); });
  lv = 'X';
  (S.phrases || []).forEach(p => put(p[0]));
  put(S.course.hello);
  // Lupes eigen Spaanse zinnen in deze cursus (bijv. «tu profe de inglés»), met haar Mexicaanse stem
  for (const es of S.Tutor.lines.every([])) for (const [v, o] of Object.entries(LUPE)) {
    const lns = 'lupe-' + v, k = S.Speech.clipKey(es, lns);
    if (!out.has(k)) out.set(k, { k, ns: lns, text: S.Speech.clean(es), voice: o.voice, pitch: o.pitch, rate: o.rate, lv: ['X'] });
  }
}
const list = [...out.values()];
if (process.argv.includes('--stats')) {
  const chars = list.reduce((s, x) => s + x.text.length, 0);
  console.error(list.length + ' teksten, ' + chars + ' tekens, ' + new Set(list.map(x => x.voice)).size + ' stemmen');
}
process.stdout.write(JSON.stringify(list));
