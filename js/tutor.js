/* De docente: Lupe, een ajolote (axolotl) uit Xochimilco. Eigen getekende SVG, met mond die beweegt als ze praat. */
(function (S) {
  'use strict';
  const LUPE = {
    name: 'Lupe',
    title: 'Profe Lupe',
    tagline: 'Ajolota uit Xochimilco · jouw docente',
    persona: `Your name is Lupe ("Profe Lupe"). You are a cheerful pink axolotl (ajolote) from the canals of Xochimilco in Mexico City, and you are the learner's personal Spanish teacher in this app.
Personality: warm, patient, playful and encouraging; you love tacos al pastor, music and boat trips on the trajineras. Now and then (not every message) you use a light Mexican expression such as "¡Órale!", "¡Qué padre!" or "¡Ánimo!". Keep the jokes short and never let them get in the way of the teaching.
Speak as Lupe in the first person. Do not mention being an AI or a language model unless the learner asks.`
  };

  /* Het figuur. Mond: .m-closed en .m-open; CSS wisselt ze af tijdens het praten. */
  function svg(size) {
    const fronds = side => {
      const x = side < 0 ? 24 : 96;
      return [-38, -78, -118].map(a => {
        const r = a * -side;
        return `<g transform="translate(${x} 58) rotate(${r})"><g class="gill"><ellipse cx="0" cy="-17" rx="6.5" ry="15" fill="#e0568a"/><path d="M0 -4 L0 -29" stroke="#f9b9cf" stroke-width="2" stroke-linecap="round"/><path d="M0 -11 l-4 -3 M0 -17 l-4 -3 M0 -23 l-3.5 -3 M0 -11 l4 -3 M0 -17 l4 -3 M0 -23 l3.5 -3" stroke="#f9b9cf" stroke-width="1.4" stroke-linecap="round"/></g></g>`;
      }).join('');
    };
    return `<svg class="lupe-svg" viewBox="0 0 120 120" width="${size}" height="${size}" role="img" aria-label="Lupe, de docente" xmlns="http://www.w3.org/2000/svg">
  <g class="gills-l">${fronds(-1)}</g><g class="gills-r">${fronds(1)}</g>
  <path d="M30 98 Q60 122 90 98 L94 120 L26 120 Z" fill="#1b998b"/>
  <path d="M34 104 Q60 120 86 104" fill="none" stroke="#f2b134" stroke-width="3" stroke-dasharray="4 3"/>
  <ellipse cx="60" cy="68" rx="42" ry="35" fill="#f7a9c6"/>
  <ellipse cx="60" cy="80" rx="27" ry="18" fill="#fbc8da"/>
  <g class="lupe-flower" transform="translate(84 37)">
    <circle r="9" fill="#f59a1b"/><circle r="6.5" fill="#f7b733"/><circle r="3.4" fill="#e2603a"/>
    <path d="M-7 7 Q-12 12 -15 10" stroke="#3a8f4a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  </g>
  <g class="lupe-eyes">
    <circle cx="42" cy="63" r="6" fill="#2a1a22"/><circle cx="78" cy="63" r="6" fill="#2a1a22"/>
    <circle cx="44" cy="61" r="2.1" fill="#fff"/><circle cx="80" cy="61" r="2.1" fill="#fff"/>
  </g>
  <ellipse cx="31" cy="76" rx="6.5" ry="4" fill="#f0789f" opacity=".65"/><ellipse cx="89" cy="76" rx="6.5" ry="4" fill="#f0789f" opacity=".65"/>
  <path class="m-closed" d="M49 80 Q60 90 71 80" fill="none" stroke="#7a2944" stroke-width="3" stroke-linecap="round"/>
  <g class="m-open"><path d="M49 79 Q60 98 71 79 Q60 83 49 79 Z" fill="#7a2944"/><ellipse cx="60" cy="88.5" rx="5" ry="2.6" fill="#f0789f"/></g>
</svg>`;
  }

  /* Een avatar-element. Alle avatars op de pagina gaan "praten" zolang Speech iets voorleest dat van Lupe komt. */
  function avatar(size = 56, cls = '') {
    const el = document.createElement('div');
    el.className = 'lupe ' + cls;
    el.innerHTML = svg(size);
    return el;
  }
  /* Lupe klinkt standaard als een meisje: een vrouwenstem met een veel hogere toon. In Instellingen kan het ook als een volwassen vrouw. */
  const VOICES = { girl: { pitch: 1.65, rate: 1.08, female: true }, woman: { pitch: 1.15, rate: 1.03, female: true } };
  let speaking = null; // tekst die Lupe nu uitspreekt
  function setTalking(on) {
    document.querySelectorAll('.lupe').forEach(el => el.classList.toggle('talking', !!on));
  }
  /* Laat Lupe iets zeggen (met bewegende mond). */
  function say(text) {
    if (!text) return Promise.resolve();
    speaking = text;
    // Lupe is een vrolijke kleine axolotl: een meisjesstem, hoger en iets vlotter dan de gewone voorleesstem.
    return S.Speech.say(text, VOICES[S.Store.state.settings.lupeVoice] || VOICES.girl);
  }
  function hookSpeech() {
    const prev = S.Speech.onTalk;
    S.Speech.onTalk = (on, text) => {
      if (prev) prev(on, text);
      if (on && text !== speaking) { speaking = null; setTalking(false); return; }
      setTalking(on);
      if (!on) speaking = null;
    };
  }

  /* Wat Lupe hardop zegt: alleen Spaans. Emoji en opmaak eraf. */
  function spoken(text, mode) {
    const clean = t => String(t).replace(/\*\*/g, '').replace(/[*_`#>]/g, '')
      .replace(/\p{Extended_Pictographic}|️|‍/gu, '').replace(/\s*\n+\s*/g, '. ').replace(/\.\s*\./g, '.').replace(/\s+/g, ' ').trim();
    const reply = String(text || '').split(/\n\s*---\s*\n/)[0];
    if (mode === 'roleplay') return clean(reply);
    // Vraag/correctie: de uitleg is meestal Nederlands. Spaanse voorbeelden staan vet; die lezen we voor.
    const bold = [...String(text || '').matchAll(/\*\*(.+?)\*\*/g)].map(m => clean(m[1])).filter(t => t && /[a-záéíóúñü]/i.test(t) && !/:$/.test(t));
    // losse woorden ("por", "para") alleen als er geen hele zinnen zijn; die blijven wel aantikbaar
    const long = bold.filter(t => t.split(' ').length > 1);
    if (long.length) return long.map(t => /[.!?…]$/.test(t) ? t : t + '.').join(' ');
    if (bold.length) return bold.map(t => /[.!?…]$/.test(t) ? t : t + '.').join(' ');
    return S.Store.state.settings.explain === 'es' ? clean(text) : '';
  }

  S.Tutor = Object.assign(LUPE, { svg, avatar, say, spoken, setTalking, hookSpeech });
})(window.SPT);
