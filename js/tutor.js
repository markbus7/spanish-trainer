/* De docente: Lupe, een ajolote (axolotl) uit Xochimilco. Eigen getekende SVG, met mond die beweegt als ze praat. */
(function (S) {
  'use strict';
  const LUPE = {
    name: 'Lupe',
    title: 'Profe Lupe',
    tagline: 'Ajolota uit Xochimilco · jouw docente',
    persona: `Your name is Lupe ("Profe Lupe"). You are a cheerful pink axolotl (ajolote) from the canals of Xochimilco in Mexico City, and you are the learner's personal ${S.course.ai.target} teacher in this app${S.course.target !== 'es' ? ' (you are a native Spanish speaker who teaches ' + S.course.ai.target + ' to Spanish speakers)' : ''}.
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
  /* lang: 'es' voor Lupes eigen Spaanse zinnetjes; leeg = de doeltaal van de cursus (voorbeelden uit haar antwoorden). */
  function say(text, lang) {
    if (!text) return Promise.resolve();
    speaking = text;
    // Lupe is een vrolijke kleine axolotl: een meisjesstem, hoger en iets vlotter dan de gewone voorleesstem.
    // Vaste zinnen van Lupe zijn vooraf ingesproken (audio/, met een eigen Mexicaanse stem per keuze meisje/vrouw).
    // Wat niet is ingesproken (AI-antwoorden), leest het apparaat voor met de hoge stem hieronder.
    const v = S.Store.state.settings.lupeVoice === 'woman' ? 'woman' : 'girl';
    return S.Speech.say(text, Object.assign({ clipNs: 'lupe-' + v, lang: lang || S.course.target }, VOICES[v]));
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
    text = S.Mistakes ? S.Mistakes.strip(text) : text;
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
        h('div', { class: 'lc-es', lang: line.lang || 'es' }, line.es),
        line.nl && S.course.ui === 'nl' ? h('div', { class: 'lc-nl' }, line.nl) : null));
    if (canTalk) {
      const talk = () => { S.Speech.unlock && S.Speech.unlock(); say(line.es, line.lang || 'es'); };
      el.onclick = e => { if (e.target.closest('a,button')) return; talk(); };
      el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); talk(); } };
    }
    // Hardop alleen als dat gevraagd wordt (bijv. na een les) en voorlezen voor Lupe aan staat.
    if (opt.speak && canTalk && S.Store.state.settings.tutorVoice) setTimeout(() => say(line.es, line.lang || 'es'), opt.delay || 600);
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
      if (c.chestReady) return L.chestReady;
      if (c.planDone) return daily([
        { es: '¡Plan cumplido! Lo que hagas ahora es extra.', nl: 'Je dagplan is af. Zin in meer? Hieronder staat je volgende stap.' },
        { es: '¡Plan cumplido! ¿Seguimos con la próxima lección?', nl: 'Je dagplan is af. Zullen we verder met de volgende les? Tik hieronder op «Ga verder».' }]);
      if (c.goalDone) return daily([
        { es: '¡Meta del día cumplida! Estoy muy orgullosa de ti.', nl: 'Dagdoel gehaald! Ik ben heel trots op je.' },
        { es: '¡Órale! Ya cumpliste tu meta. Todo lo que hagas ahora es extra.', nl: 'Je dagdoel is binnen. Alles wat je nu nog doet, is extra.' }]);
      if (c.lapsed) return { es: '¡Qué gusto verte otra vez! Empecemos con algo cortito.', nl: 'Fijn dat je er weer bent! We beginnen met iets korts.' };
      if (c.due >= 15) return { es: dueEs(c.due), nl: `Je hebt vandaag ${c.due} herhalingen. Begin daarmee, dan vergeet je niets.` };
      if (c.planLeft === 1) return { es: '¡Ya casi! Solo te falta una tarea.', nl: 'Bijna! Nog maar één taak, dan krijg je je dagbeloning.' };
      if (c.planLeft === 2 && c.planN) return { es: '¡Una tarea menos! Sigue así.', nl: 'Eén taak afgevinkt. Ga zo door!' };
      if (c.step === 'test') return { es: '¡Hoy toca la prueba de la unidad! Tú puedes.', nl: 'Vandaag is de unittoets aan de beurt. Jij kunt dit!' };
      if (c.streak >= 3) return daily(streakEs(c.streak).map((es, i) => ({ es, nl: i ? `${c.streak} dagen op rij. Hou je reeks vast!` : `Al ${c.streak} dagen op rij! Super.` })));
      if (c.min > 0) return { es: '¡Vas muy bien hoy! Un poquito más y llegas a tu meta.', nl: 'Je bent goed bezig vandaag. Nog even en je haalt je dagdoel.' };
      return daily([
        { es: `¿Empezamos? Hoy vemos: ${c.unit}.`, nl: `Zullen we beginnen? Vandaag: ${c.unitNl || c.unit}.` },
        { es: 'Un ratito cada día hace la diferencia. ¡Vamos!', nl: 'Elke dag een beetje maakt het verschil. Kom op!' },
        { es: '¡Hola! Te preparé un plan para hoy. ¡Vamos!', nl: 'Ik heb een plan voor vandaag voor je klaargezet.' }]);
    },
    welcome: { es: '¡Hola! Soy Lupe, tu profe de ' + ((S.course && S.course.name.es) || 'español') + '.', nl: 'Ik ben Lupe, een axolotl uit Xochimilco in Mexico-Stad. Ik help je stap voor stap. Tik op mij om me te horen!' },
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
        { es: wordsEs(c.words), nl: `Je kent al ${c.words} woorden. Ik ben heel trots op je!` },
        { es: 'Cada palabra nueva cuenta. ¡Qué padre!', nl: `${c.words} woorden in ${c.days} ${c.days === 1 ? 'dag' : 'dagen'}. Super!` }]);
      return { es: '¡Buen comienzo! Poco a poco se llega lejos.', nl: 'Goed begin! Beetje bij beetje kom je ver.' };
    },
    game(score) {
      if (score >= 0.95) return { es: '¡Perfecto! ¡Qué buena memoria!', nl: 'Perfect! Wat een goed geheugen.' };
      if (score >= 0.7) return { es: '¡Muy bien jugado!', nl: 'Heel goed gespeeld!' };
      return { es: '¡Sigue así! Las palabras difíciles vuelven pronto.', nl: 'Ga zo door! De lastige woorden komen snel terug.' };
    },
    review: { es: '¡Todo repasado! Nos vemos mañana.', nl: 'Alles herhaald voor vandaag. Tot morgen!' },
    chestReady: { es: '¡Terminaste tu plan de hoy! Abre tu cofre.', nl: 'Je dagplan is af! Open je beloning.' },
    /* Bij het openen van de dagbeloning. */
    planDone(c = {}) {
      if (c.streak >= 2 && c.streak <= 30) return { es: `¡Plan del día completado! Llevas ${c.streak} días seguidos.`, nl: `Dagplan voltooid, al ${c.streak} dagen op rij!` };
      return daily([
        { es: '¡Plan del día completado! ¡Qué padre!', nl: 'Je hebt je hele dagplan afgerond!' },
        { es: '¡Lo lograste! Estoy muy orgullosa de ti.', nl: 'Het is je gelukt. Ik ben trots op je!' }]);
    },
    voiceOn: '¡Perfecto! Ahora te hablo en voz alta.',
    voiceTest: '¡Hola! Soy Lupe. ¿Te gusta mi voz?',
    /* Alle vaste zinnen die Lupe kan zeggen, voor het inspreken (tools/tts-texts.js). units: [{ title, level, grammar }] */
    every(units = []) {
      const out = new Set(), add = x => { if (x && x.es) out.add(x.es); else if (typeof x === 'string') out.add(x); };
      // daily() kiest per dag een variant: loop een paar 'dagen' door om ze allemaal te krijgen
      const U = S.U, pickAll = fn => { const keep = U.dayIndex; for (let d = 0; d < 6; d++) { U.dayIndex = () => d; try { add(fn()); } finally { U.dayIndex = keep; } } };
      [{ paused: 1 }, { lapsed: 1 }, { step: 'test' }, { min: 1 }, { chestReady: 1 }, { planLeft: 1 }, { planLeft: 2, planN: 1 }].forEach(c => add(L.hello(c)));
      pickAll(() => L.hello({ goalDone: 1 })); pickAll(() => L.hello({ planDone: 1 })); pickAll(() => L.planDone());
      for (let n = 2; n <= 30; n++) add(L.planDone({ streak: n }));
      units.forEach(u => pickAll(() => L.hello({ unit: u.title })));
      for (let n = 15; n <= DUE_MAX + 1; n++) add(dueEs(n));
      for (let n = 3; n <= STREAK_MAX + 1; n++) streakEs(n).forEach(add);
      for (let n = 1; n <= 40; n++) add(L.streak(n));
      add(L.welcome); add(L.review); add(L.voiceOn); add(L.voiceTest);
      [{ passed: false }, { unitDone: 1 }, { total: 0 }, ...[100, 95, 80, 10].map(pct => ({ pct, total: 1, mistakes: 1 }))].forEach(c => add(L.summary(c)));
      [{ up: 1 }, { down: 1 }, { first: 1 }, ...['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => ({ level }))].forEach(c => add(L.result(c)));
      add(L.profile({ days: 0 })); add(L.profile({ days: 1, words: 5 }));
      for (let n = 20; n <= 6000; n++) add(wordsEs(n));
      add('Cada palabra nueva cuenta. ¡Qué padre!');
      [1, 0.8, 0].forEach(x => add(L.game(x)));
      units.forEach(u => (u.grammar || []).forEach(g => add(g.sum)));
      return [...out];
    }
  };
  /* Zinnen met een getal: per getal vooraf ingesproken, dus binnen een vaste grens (daarboven een vaste zin). */
  const DUE_MAX = 100, STREAK_MAX = 100;
  function dueEs(n) {
    return n > DUE_MAX ? 'Hoy tienes más de cien repasos. Empecemos por ahí, así no se te olvida nada.'
      : `Hoy tienes ${n} repasos. Empecemos por ahí, así no se te olvida nada.`;
  }
  function streakEs(n) {
    return n > STREAK_MAX ? ['¡Llevas más de cien días seguidos! ¡Qué padre!', 'Más de cien días seguidos. ¡No rompas la racha!']
      : [`¡Llevas ${n} días seguidos! ¡Qué padre!`, `${n} días seguidos. ¡No rompas la racha!`];
  }
  // aantal woorden afgerond (tientallen, boven 100 per 50, boven 1000 per 100): zo blijft het aantal opnames klein
  function wordsEs(n) {
    const r = n < 100 ? Math.floor(n / 10) * 10 : n < 1000 ? Math.floor(n / 50) * 50 : Math.min(5000, Math.floor(n / 100) * 100);
    return r === n ? `¡Ya conoces ${r} palabras! Estoy muy orgullosa de ti.` : `¡Ya conoces más de ${r} palabras! Estoy muy orgullosa de ti.`;
  }

  S.Tutor = Object.assign(LUPE, { svg, avatar, say, spoken, setTalking, hookSpeech, coach, hero, coachOn, lines: L });
})(window.SPT);
