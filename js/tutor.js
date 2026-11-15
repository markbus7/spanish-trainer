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

  /* ---------- Lupe als begeleider door de hele app ----------
     Kort zinnetje in het Spaans (dat zegt ze als je erop tikt) met de Nederlandse betekenis eronder.
     Uit te zetten in Instellingen (lupeCoach). */
  const coachOn = () => S.Store.state.settings.lupeCoach !== false;
  // vaste keuze per dag, zodat de tekst niet bij elke klik verspringt
  const daily = (list, salt = 0) => list[(S.U.dayIndex() + salt) % list.length];
  function coach(line, opt = {}) {
    if (!line || !coachOn()) return null;
    const h = S.U.h;
    const canTalk = S.Speech.canSpeak();
    const el = h('div', { class: 'lupe-coach' + (opt.cls ? ' ' + opt.cls : '') + (canTalk ? ' can-talk' : ''), role: canTalk ? 'button' : null, tabindex: canTalk ? 0 : null,
      title: canTalk ? 'Tik om Lupe te horen' : null, 'aria-label': canTalk ? 'Profe Lupe: ' + line.es + '. Tik om te horen.' : null },
      avatar(opt.size || 52, 'coach-av'),
      h('div', { class: 'lc-bubble' },
        opt.label !== false ? h('div', { class: 'lc-who' }, opt.label || 'Profe Lupe') : null,
        h('div', { class: 'lc-es', lang: 'es' }, line.es),
        line.nl ? h('div', { class: 'lc-nl' }, line.nl) : null));
    if (canTalk) {
      const talk = () => { S.Speech.unlock && S.Speech.unlock(); say(line.es); };
      el.onclick = e => { if (e.target.closest('a,button')) return; talk(); };
      el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); talk(); } };
    }
    // Hardop alleen als dat gevraagd wordt (bijv. na een les) en voorlezen voor Lupe aan staat.
    if (opt.speak && canTalk && S.Store.state.settings.tutorVoice) setTimeout(() => say(line.es), opt.delay || 600);
    return el;
  }

  /* Lupe groot in het midden, met een emoji-badge (eindscherm van een les of spel). */
  function hero(line, emoji, opt = {}) {
    const el = coach(line, Object.assign({ size: 92, cls: 'lc-hero' }, opt));
    if (el && emoji) el.querySelector('.coach-av').append(S.U.h('span', { class: 'lc-badge', 'aria-hidden': 'true' }, emoji));
    return el;
  }

  /* Wat Lupe zegt. Alles in Latijns-Amerikaans Spaans (ustedes, geen vosotros), zonder mannelijke/vrouwelijke vormen voor de leerling. */
  const L = {
    hello(c) {
      // c: { paused, goalDone, streak, lapsed, due, step, unit, min, goal }
      if (c.paused) return { es: '¡Hola! Te quedaste a mitad de una lección. ¿Seguimos donde ibas?', nl: 'Je was halverwege een les. Zullen we verdergaan waar je was?' };
      if (c.goalDone) return daily([
        { es: '¡Meta del día cumplida! Estoy muy orgullosa de ti.', nl: 'Dagdoel gehaald! Ik ben heel trots op je.' },
        { es: '¡Órale! Ya cumpliste tu meta. Todo lo que hagas ahora es extra.', nl: 'Je dagdoel is binnen. Alles wat je nu nog doet, is extra.' }]);
      if (c.lapsed) return { es: '¡Qué gusto verte otra vez! Empecemos con algo cortito.', nl: 'Fijn dat je er weer bent! We beginnen met iets korts.' };
      if (c.due >= 15) return { es: `Hoy tienes ${c.due} repasos. Empecemos por ahí, así no se te olvida nada.`, nl: `Je hebt vandaag ${c.due} herhalingen. Begin daarmee, dan vergeet je niets.` };
      if (c.step === 'test') return { es: '¡Hoy toca la prueba de la unidad! Tú puedes.', nl: 'Vandaag is de unittoets aan de beurt. Jij kunt dit!' };
      if (c.streak >= 3) return daily([
        { es: `¡Llevas ${c.streak} días seguidos! ¡Qué padre!`, nl: `Al ${c.streak} dagen op rij! Super.` },
        { es: `${c.streak} días seguidos. ¡No rompas la racha!`, nl: `${c.streak} dagen op rij. Hou je reeks vast!` }]);
      if (c.min > 0) return { es: '¡Vas muy bien hoy! Un poquito más y llegas a tu meta.', nl: 'Je bent goed bezig vandaag. Nog even en je haalt je dagdoel.' };
      return daily([
        { es: `¿Empezamos? Hoy vemos: ${c.unit}.`, nl: `Zullen we beginnen? Vandaag: ${c.unitNl || c.unit}.` },
        { es: 'Un ratito cada día hace la diferencia. ¡Vamos!', nl: 'Elke dag een beetje maakt het verschil. Kom op!' },
        { es: '¡Hola! Te preparé un plan para hoy. ¡Vamos!', nl: 'Ik heb een plan voor vandaag voor je klaargezet.' }]);
    },
    welcome: { es: '¡Hola! Soy Lupe, tu profe de español.', nl: 'Ik ben Lupe, een axolotl uit Xochimilco in Mexico-Stad. Ik help je stap voor stap. Tik op mij om me te horen!' },
    streak(n) {
      if (n === 5) return '¡Cinco seguidas! ¡Órale!';
      if (n === 10) return '¡Diez seguidas! ¡Qué padre!';
      if (n === 15 || n === 20 || n === 30) return `¡${n} seguidas! ¡Imparable!`;
      return null;
    },
    summary(c) {
      // c: { pct, passed, mistakes, unitDone, exam }
      if (c.passed === false) return { es: 'Casi lo logras. Repasamos un poco y lo intentamos otra vez, ¿va?', nl: 'Bijna! We herhalen even en proberen het dan nog eens, goed?' };
      if (c.unitDone) return { es: '¡Felicidades! Terminaste la unidad. ¡Qué orgullo!', nl: 'Gefeliciteerd, je hebt de unit afgerond. Ik ben trots op je!' };
      if (!c.total) return { es: '¡Listo! Buen trabajo.', nl: 'Klaar. Goed gedaan!' };
      if (c.pct === 100) return { es: '¡Perfecto! Sin ningún error. ¡Eres una estrella!', nl: 'Perfect, geen enkele fout!' };
      if (c.pct >= 90) return { es: '¡Excelente trabajo! Casi sin errores.', nl: 'Uitstekend, bijna foutloos.' };
      if (c.pct >= 70) return { es: '¡Muy bien! Vas avanzando.', nl: 'Heel goed, je gaat vooruit.' + (c.mistakes ? ' Kijk nog even naar de woorden hieronder.' : '') };
      return { es: 'Cada error te enseña algo. ¡Ánimo, vamos bien!', nl: 'Van elke fout leer je iets. De lastige woorden komen vanzelf terug in je herhaling.' };
    },
    result(c) {
      // c: { level, up, down, first }
      if (c.up) return { es: '¡Subiste de nivel! ¡Qué padre! Se nota que practicas.', nl: 'Je bent een niveau omhoog gegaan. Je merkt dat je oefent!' };
      if (c.down) return { es: 'No te preocupes, a veces pasa. Repasamos juntos y lo intentas otra vez.', nl: 'Geen zorgen, dat gebeurt soms. We herhalen samen en je probeert het later nog eens.' };
      if (c.first) return { es: '¡Gracias por hacer la prueba! Ahora sé por dónde empezar contigo.', nl: 'Bedankt voor het maken van de test. Nu weet ik waar we beginnen.' };
      return { es: `¡Bien hecho! Tu nivel es ${c.level || 'A1'}. Seguimos practicando juntos.`, nl: `Goed gedaan! Je niveau is ${c.level || 'A1'}. We oefenen samen verder.` };
    },
    profile(c) {
      // c: { words, days, streak }
      if (!c.days) return { es: 'Aquí vas a ver todo lo que aprendes. ¡Empecemos hoy!', nl: 'Hier zie je straks alles wat je leert. Zullen we vandaag beginnen?' };
      if (c.words >= 20) return daily([
        { es: `¡Ya conoces ${c.words} palabras! Estoy muy orgullosa de ti.`, nl: `Je kent al ${c.words} woorden. Ik ben heel trots op je!` },
        { es: `${c.words} palabras en ${c.days} días. ¡Qué padre!`, nl: `${c.words} woorden in ${c.days} ${c.days === 1 ? 'dag' : 'dagen'}. Super!` }]);
      return { es: '¡Buen comienzo! Poco a poco se llega lejos.', nl: 'Goed begin! Beetje bij beetje kom je ver.' };
    },
    game(score) {
      if (score >= 0.95) return { es: '¡Perfecto! ¡Qué buena memoria!', nl: 'Perfect! Wat een goed geheugen.' };
      if (score >= 0.7) return { es: '¡Muy bien jugado!', nl: 'Heel goed gespeeld!' };
      return { es: '¡Sigue así! Las palabras difíciles vuelven pronto.', nl: 'Ga zo door! De lastige woorden komen snel terug.' };
    },
    review: { es: '¡Todo repasado! Nos vemos mañana.', nl: 'Alles herhaald voor vandaag. Tot morgen!' }
  };

  S.Tutor = Object.assign(LUPE, { svg, avatar, say, spoken, setTalking, hookSpeech, coach, hero, coachOn, lines: L });
})(window.SPT);
