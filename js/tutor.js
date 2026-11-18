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

  /* Het figuur. Mond: .m-closed en .m-open; CSS wisselt ze af tijdens het praten.
     Elke tekening krijgt eigen id's voor de kleurverlopen (anders verdwijnen ze als de eerste Lupe op de pagina verborgen is).
     opt.face: alleen het hoofd, ingezoomd (voor het logo en het app-icoon). */
  let uid = 0;
  function svg(size, opt) {
    opt = opt || {};
    const id = 'lp' + (++uid), u = k => `url(#${id}${k})`;
    const fronds = side => {
      const x = side < 0 ? 25 : 95;
      return [-38, -78, -118].map((a, i) => {
        const r = a * -side, len = i === 1 ? 1 : .92;
        return `<g transform="translate(${x} 57) rotate(${r}) scale(${len})"><g class="gill"><path d="M0 0C-9.5-5-11-23 0-33C11-23 9.5-5 0 0Z" fill="${u('g')}"/><path d="M0-3V-28" stroke="#ffd3e2" stroke-width="1.6" stroke-linecap="round" opacity=".9"/><path d="M-1-9l-5.5-3.5M-1-15.5-6.8-19M-1-22l-4.6-3.4M1-9l5.5-3.5M1-15.5 6.8-19M1-22l4.6-3.4" stroke="#ffd3e2" stroke-width="1.2" stroke-linecap="round" opacity=".6"/></g></g>`;
      }).join('');
    };
    const petals = [0, 45, 90, 135, 180, 225, 270, 315].map(d => `<circle cx="${(5.2 * Math.cos(d * Math.PI / 180)).toFixed(2)}" cy="${(5.2 * Math.sin(d * Math.PI / 180)).toFixed(2)}" r="3.7" fill="#f28c1b"/>`).join('');
    // opt.full: Lupe met haar hele lijf (huipil-jurkje, armpjes, pootjes en staart). size = hoogte.
    const full = !!opt.full && !opt.face;
    const vb = opt.face ? '-6 12 132 92' : full ? '-8 14 140 150' : '0 0 120 120',
      w = opt.face ? Math.round(size * 132 / 92) : full ? Math.round(size * 140 / 150) : size;
    // armpje met vier slanke vingertjes zoals een echte axolotl; a = draaihoek (0 = langs het lijf)
    const SK = '#f4a6c4', SPOT = '#d9668f';
    const arm = (x, y, a, side) => `<g class="lupe-arm${side > 0 ? ' arm-r' : ' arm-l'}" transform="translate(${x} ${y}) rotate(${a})"><g class="arm-in">
      <path d="M0 0C-1 7-1 13 0 18" fill="none" stroke="${SK}" stroke-width="8.5" stroke-linecap="round"/>
      <g stroke="${SK}" stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M-1 18-6.5 23.5"/><path d="M-.5 19-3.2 26"/><path d="M.5 19 1.8 26.5"/><path d="M1 18 6 24"/></g>
      <g fill="#ffd6e5"><circle cx="-6.5" cy="23.5" r="1.3"/><circle cx="-3.2" cy="26" r="1.3"/><circle cx="1.8" cy="26.5" r="1.3"/><circle cx="6" cy="24" r="1.3"/></g>
      <g fill="${SPOT}" opacity=".5"><circle cx="-1.6" cy="6" r="1"/><circle cx="1.4" cy="11" r=".9"/></g></g></g>`;
    // achterpootje met vijf teentjes
    const leg = (x, s) => `<g transform="translate(${x} 142) scale(${s} 1)"><path d="M0 0C-1 5-3 9-5 12" fill="none" stroke="${SK}" stroke-width="9" stroke-linecap="round"/>
      <g stroke="${SK}" stroke-width="2.6" stroke-linecap="round" fill="none"><path d="M-5 12-12 13"/><path d="M-5 12.5-10.5 17"/><path d="M-5 13-6.5 18.5"/><path d="M-4.5 13-2 18"/><path d="M-4 12.5 1 15.5"/></g>
      <g fill="#ffd6e5"><circle cx="-12" cy="13" r="1.3"/><circle cx="-10.5" cy="17" r="1.3"/><circle cx="-6.5" cy="18.5" r="1.3"/><circle cx="-2" cy="18" r="1.3"/><circle cx="1" cy="15.5" r="1.3"/></g></g>`;
    const body = full ? `
  <g class="lupe-tail">
    <path d="M74 111C90 113 102 122 113 130C120 135 126 133 130 125C133 133 132 145 123 151C112 157 96 154 85 148C79 145 75 141 72 134Z" fill="${u('t')}" opacity=".55"/>
    <g stroke="#fff" stroke-width=".8" opacity=".6" fill="none"><path d="M85 117 83 127"/><path d="M97 123 93 133"/><path d="M108 129 102 138"/><path d="M121 133 114 141"/><path d="M127 141 119 145"/><path d="M96 151 97 144"/><path d="M110 153 108 146"/></g>
    <path d="M74 120C89 126 101 135 112 140C119 143 125 141 129 135C126 145 117 150 107 149C94 147 83 142 74 136Z" fill="${u('s')}"/>
    <g fill="${SPOT}" opacity=".45"><circle cx="90" cy="133" r="1.3"/><circle cx="102" cy="139" r="1.1"/><circle cx="114" cy="144" r="1"/><circle cx="84" cy="128" r="1"/></g>
  </g>
  <g class="lupe-legs">${leg(47, 1)}${leg(73, -1)}</g>
  ${arm(30, 101, opt.wave ? 14 : 22, -1)}
  ${opt.wave ? arm(91, 103, -128, 1) : arm(90, 101, -22, 1)}
  <path d="M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z" fill="${u('h')}"/>
  <path d="M31 129Q60 140 89 129" fill="none" stroke="#fff4e6" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M30 135.5Q60 146 90 135.5" fill="none" stroke="#f2b134" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
  <g><circle cx="42" cy="122" r="3.1" fill="#f0789f"/><circle cx="60" cy="125" r="3.4" fill="#f2b134"/><circle cx="78" cy="122" r="3.1" fill="#f0789f"/><circle cx="42" cy="122" r="1.1" fill="#fff4e6"/><circle cx="60" cy="125" r="1.2" fill="#fff4e6"/><circle cx="78" cy="122" r="1.1" fill="#fff4e6"/></g>
  <path d="M49 106l3 4 3-4 3 4 3-4 3 4 3-4 3 4" fill="none" stroke="#fff4e6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>` : '';
    return `<svg class="lupe-svg${full ? ' lupe-full' + (opt.wave ? ' waving' : '') : ''}" viewBox="${vb}" width="${w}" height="${size}" role="img" aria-label="Lupe, de docente" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${id}s" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#ffd6e5"/><stop offset=".55" stop-color="#f8aecb"/><stop offset="1" stop-color="#ec88b0"/></radialGradient>
    <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="-33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c8396f"/><stop offset="1" stop-color="#f07ea8"/></linearGradient>
    <linearGradient id="${id}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22ae9e"/><stop offset="1" stop-color="#147c70"/></linearGradient>
    <linearGradient id="${id}t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f07ea8"/><stop offset="1" stop-color="#ffc4da"/></linearGradient>
  </defs>
  ${body}
  <g class="gills-l">${fronds(-1)}</g><g class="gills-r">${fronds(1)}</g>
  ${opt.face || full ? '' : `<path d="M20 121C22 101 36 91 60 91S98 101 100 121Z" fill="${u('h')}"/>
  <path d="M31 95.5Q60 113 89 95.5" fill="none" stroke="#fff4e6" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M30 103Q60 120 90 103" fill="none" stroke="#f2b134" stroke-width="2" stroke-dasharray="3 3" stroke-linecap="round"/>
  <g><circle cx="42" cy="113" r="3.1" fill="#f0789f"/><circle cx="60" cy="116" r="3.1" fill="#f2b134"/><circle cx="78" cy="113" r="3.1" fill="#f0789f"/><circle cx="42" cy="113" r="1.1" fill="#fff4e6"/><circle cx="60" cy="116" r="1.1" fill="#fff4e6"/><circle cx="78" cy="113" r="1.1" fill="#fff4e6"/></g>`}
  <path d="M60 34C88 34 105 47 105 66C105 87 87 99 60 99C33 99 15 87 15 66C15 47 32 34 60 34Z" fill="${u('s')}"/>
  <path d="M24 80C34 92 46 96 60 96S86 92 96 80C88 86 76 89 60 89S32 86 24 80Z" fill="#ffdce8" opacity=".7"/>
  <ellipse cx="43" cy="45" rx="11" ry="5" transform="rotate(-22 43 45)" fill="#fff" opacity=".4"/>
  <g fill="#e483aa" opacity=".55"><circle cx="58" cy="39" r="1.9"/><circle cx="66" cy="41.5" r="1.4"/><circle cx="51" cy="42.5" r="1.3"/><circle cx="31" cy="58" r="1.5"/><circle cx="91" cy="60" r="1.5"/></g>
  <g class="lupe-flower" transform="translate(85 38)">
    <ellipse cx="-8" cy="6" rx="5" ry="2.4" transform="rotate(35 -8 6)" fill="#3a9d5d"/><ellipse cx="6" cy="8.5" rx="4.4" ry="2.1" transform="rotate(-30 6 8.5)" fill="#2f8a50"/>
    ${petals}<circle r="5" fill="#f7b733"/><circle r="2.3" fill="#e2603a"/>
  </g>
  <g class="lupe-eyes">
    <circle cx="42" cy="63" r="6.6" fill="#2a1a22"/><circle cx="78" cy="63" r="6.6" fill="#2a1a22"/>
    <circle cx="44.4" cy="60.6" r="2.4" fill="#fff"/><circle cx="80.4" cy="60.6" r="2.4" fill="#fff"/>
    <circle cx="40" cy="65.6" r="1.1" fill="#fff" opacity=".75"/><circle cx="76" cy="65.6" r="1.1" fill="#fff" opacity=".75"/>
  </g>
  <ellipse cx="30.5" cy="76" rx="7" ry="4.2" fill="#f0789f" opacity=".55"/><ellipse cx="89.5" cy="76" rx="7" ry="4.2" fill="#f0789f" opacity=".55"/>
  <path class="m-closed" d="M43 79.5Q60 91 77 79.5" fill="none" stroke="#7a2944" stroke-width="2.9" stroke-linecap="round"/>
  <g class="m-open"><path d="M49 79Q60 98 71 79Q60 83 49 79Z" fill="#7a2944"/><ellipse cx="60" cy="88.5" rx="5" ry="2.6" fill="#f0789f"/></g>
</svg>`;
  }

  /* Een avatar-element. Alle avatars op de pagina gaan "praten" zolang Speech iets voorleest dat van Lupe komt. */
  /* opt: { full: hele lijf, wave: zwaait } */
  function avatar(size = 64, cls = '', opt) {
    const el = document.createElement('div');
    el.className = 'lupe ' + cls + (opt && opt.full ? ' full' : '');
    el.innerHTML = svg(size, opt);
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
      avatar(opt.size || (opt.full ? 128 : 64), 'coach-av', { full: opt.full, wave: opt.wave }),
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

  /* Lupe groot in het midden met haar hele lijf, met een emoji-badge (welkom, eindscherm van een les of spel). */
  function hero(line, emoji, opt = {}) {
    const el = coach(line, Object.assign({ size: 176, full: true, cls: 'lc-hero' }, opt));
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
