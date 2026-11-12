/* Verzamelt alle vaste Spaanse teksten die de app voorleest, met een passende stem per regio.
   Gebruik: node tools/tts-texts.js > texts.json   (de GitHub-actie "Stemmen maken" doet dit automatisch)
   Uitvoer: [{ k: sleutel, text, voice }]; het bestand heet audio/<k>.mp3. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = vm.createContext({ console, setTimeout, clearTimeout });
ctx.window = ctx; ctx.globalThis = ctx; ctx.self = ctx;
const files = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/src="((?:js|content)\/[^"?]+\.js)(?:\?[^"]*)?"/g)].map(m => m[1])
  .filter(f => !/(app|lesson|ai|sync)\.js$/.test(f));
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const S = ctx.SPT;

/* Edge-neurale stemmen per land: [vrouw, man]. Standaard Mexicaans. */
const VOICES = {
  MX: ['es-MX-DaliaNeural', 'es-MX-JorgeNeural'], CO: ['es-CO-SalomeNeural', 'es-CO-GonzaloNeural'], AR: ['es-AR-ElenaNeural', 'es-AR-TomasNeural'],
  CL: ['es-CL-CatalinaNeural', 'es-CL-LorenzoNeural'], PE: ['es-PE-CamilaNeural', 'es-PE-AlexNeural'], CR: ['es-CR-MariaNeural', 'es-CR-JuanNeural'],
  GT: ['es-GT-MartaNeural', 'es-GT-AndresNeural'], EC: ['es-EC-AndreaNeural', 'es-EC-LuisNeural'], PA: ['es-PA-MargaritaNeural', 'es-PA-RobertoNeural'],
  DO: ['es-DO-RamonaNeural', 'es-DO-EmilioNeural'], CU: ['es-CU-BelkysNeural', 'es-CU-ManuelNeural'], VE: ['es-VE-PaolaNeural', 'es-VE-SebastianNeural'],
  UY: ['es-UY-ValentinaNeural', 'es-UY-MateoNeural'], BO: ['es-BO-SofiaNeural', 'es-BO-MarceloNeural'], PY: ['es-PY-TaniaNeural', 'es-PY-MarioNeural'],
  SV: ['es-SV-LorenaNeural', 'es-SV-RodrigoNeural'], HN: ['es-HN-KarlaNeural', 'es-HN-CarlosNeural'], NI: ['es-NI-YolandaNeural', 'es-NI-FedericoNeural'],
  PR: ['es-PR-KarinaNeural', 'es-PR-VictorNeural'], US: ['es-US-PalomaNeural', 'es-US-AlonsoNeural']
};
const DEF = VOICES.MX[0];
function country(place) {
  const cps = [...String(place || '')].map(c => c.codePointAt(0)).filter(c => c >= 0x1F1E6 && c <= 0x1F1FF);
  return cps.length >= 2 ? String.fromCharCode(cps[0] - 0x1F1E6 + 65, cps[1] - 0x1F1E6 + 65) : null;
}
const out = new Map();
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
    u.dialogue.lines.forEach(([w, es]) => add(es, w === 'Mark' ? vm_ : (who.filter(x => x !== 'Mark').indexOf(w) % 2 ? vm_ : vf)));
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
(S.regions || []).forEach(r => { const v = VOICES[r.id.toUpperCase()]; (r.words || []).forEach(([es]) => add(es, v ? v[0] : DEF)); });
add('¡Hola! ¿Cómo estás? Bienvenido a tu clase de español.');

const list = [...out.values()];
if (process.argv.includes('--stats')) {
  const chars = list.reduce((s, x) => s + x.text.length, 0);
  console.error(list.length + ' teksten, ' + chars + ' tekens, ' + new Set(list.map(x => x.voice)).size + ' stemmen');
}
process.stdout.write(JSON.stringify(list));
