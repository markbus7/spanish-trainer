/* Eigen getekende iconen en illustraties (SVG), zodat de app er overal hetzelfde uitziet.
   - S.Icons.line(naam): lijn-iconen voor de tabbalk en de bovenbalk (kleur = currentColor, zachte vulling).
   - S.Icons.art(naam): kleine gekleurde illustraties voor het dagplan, de lesstappen en de woordspellen.
   - S.Icons.el(naam, klasse): een <span> met de illustratie erin; valt terug op de emoji als de naam onbekend is. */
(function (S) {
  'use strict';

  /* ---------- lijn-iconen (24×24) ---------- */
  const gear = (() => { // tandwiel met 8 tanden, berekend
    const pts = []; const n = 8;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, w = Math.PI / n * 0.55;
      [[a - w * 1.25, 7.2], [a - w * 0.7, 10], [a + w * 0.7, 10], [a + w * 1.25, 7.2]].forEach(([b, r]) => pts.push((12 + r * Math.cos(b)).toFixed(2) + ' ' + (12 + r * Math.sin(b)).toFixed(2)));
    }
    return 'M' + pts.join('L') + 'Z';
  })();
  const LINE = {
    hoy: '<path class="fill" d="M4.5 10.6 12 4l7.5 6.6V19a1.8 1.8 0 0 1-1.8 1.8H14.6v-5.6H9.4v5.6H6.3A1.8 1.8 0 0 1 4.5 19z"/><path d="M2.8 11.8 12 3.6l9.2 8.2M4.5 10.6V19a1.8 1.8 0 0 0 1.8 1.8h3.1v-5.6h5.2v5.6h3.1a1.8 1.8 0 0 0 1.8-1.8v-8.4"/>',
    ruta: '<path class="fill" d="M3.5 6.2 9 4.2l6 2 5.5-2v13.6l-5.5 2-6-2-5.5 2z"/><path d="M3.5 6.2 9 4.2l6 2 5.5-2v13.6l-5.5 2-6-2-5.5 2zM9 4.2v13.6M15 6.2v13.6"/><circle class="dot" cx="12" cy="10.5" r="1.3"/>',
    practica: '<path class="fill" d="M4 8.5h3.6a2.4 2.4 0 1 1 4.8 0H16v3.6a2.4 2.4 0 1 1 0 4.8V20.5H4z"/><path d="M4 8.5h3.6a2.4 2.4 0 1 1 4.8 0H16v3.6a2.4 2.4 0 1 1 0 4.8v3.6H4z"/>',
    docente: '<path class="fill" d="M12 8.6c4.6 0 7.6 2.7 7.6 5.8S16.6 20 12 20s-7.6-2.5-7.6-5.6 3-5.8 7.6-5.8z"/><path d="M12 8.6c4.6 0 7.6 2.7 7.6 5.8S16.6 20 12 20s-7.6-2.5-7.6-5.6 3-5.8 7.6-5.8z"/><path d="M5.3 11.2C3.4 10.6 2.3 9 2.6 7.4c1.7.1 3 1.4 3.6 3M4.6 13.8c-1.9.2-3.4-.6-3.8-2 1.5-.6 3.1-.2 4.1.9M7.4 9.6C6.6 7.8 6.9 6 8.2 5.1c1.1 1.2 1.2 3 .5 4.3M18.7 11.2c1.9-.6 3-2.2 2.7-3.8-1.7.1-3 1.4-3.6 3M19.4 13.8c1.9.2 3.4-.6 3.8-2-1.5-.6-3.1-.2-4.1.9M16.6 9.6c.8-1.8.5-3.6-.8-4.5-1.1 1.2-1.2 3-.5 4.3"/><path d="M9.8 16.3q2.2 1.6 4.4 0"/><circle class="dot" cx="9.1" cy="13.6" r="1.1"/><circle class="dot" cx="14.9" cy="13.6" r="1.1"/>',
    perfil: '<circle class="fill" cx="12" cy="8.2" r="3.9"/><path class="fill" d="M4.3 20.5a7.7 7.7 0 0 1 15.4 0z"/><circle cx="12" cy="8.2" r="3.9"/><path d="M4.3 20.5a7.7 7.7 0 0 1 15.4 0z"/>',
    ajustes: `<path class="fill" d="${gear}"/><path d="${gear}"/><circle cx="12" cy="12" r="2.9"/>`
  };
  function line(name) {
    const b = LINE[name]; if (!b) return '';
    return `<svg class="ic-line" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${b}</svg>`;
  }

  /* ---------- illustraties (48×48), vlak en zonder randen zodat ze in licht én donker werken ---------- */
  const C = { o: '#e2603a', o2: '#f08a5d', t: '#1b998b', t2: '#7fd3c7', g: '#f2b134', g2: '#f9d27a', p: '#f0789f', p2: '#f9b9cf', b: '#3b82d6', b2: '#9cc4f2', cream: '#fff8ee', ink: '#3a2c25', brown: '#8a5a3c', green: '#3a9d5d' };
  // Letters op de speltegels in de doeltaal: rooster van 3×3 (middelste rij omcirkeld), kruiswoord, husselwoord.
  const LETTERS = {
    es: { grid: 'SOLMARPEZ', word: 'SOL', mix: 'LOS' },
    en: { grid: 'SUNSEACAT', word: 'SUN', mix: 'NUS' },
    nl: { grid: 'ZONZEEVIS', word: 'ZON', mix: 'NOZ' }
  };
  const LET = LETTERS[(window.SPT && window.SPT.course && window.SPT.course.target) || 'es'] || LETTERS.es;
  const ART = {
    // 🔁 herhaling: twee kaartjes met ronde pijlen
    review: `<rect x="7" y="9" width="23" height="29" rx="5" fill="${C.t2}" transform="rotate(-11 18.5 23.5)"/>
      <rect x="15" y="10" width="25" height="30" rx="5" fill="${C.cream}"/><rect x="15" y="10" width="25" height="30" rx="5" fill="none" stroke="${C.t}" stroke-width="2.4"/>
      <path d="M21.5 25a6 6 0 0 1 10.2-4.3M33.5 25a6 6 0 0 1-10.2 4.3" fill="none" stroke="${C.t}" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M32.6 16.9l-.6 4.1-4-.9M22.4 33.1l.6-4.1 4 .9" fill="none" stroke="${C.t}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
    // 🃏 woorden: woordkaartjes
    vocab: `<rect x="6" y="11" width="24" height="29" rx="5" fill="${C.g}" transform="rotate(-12 18 25.5)"/>
      <rect x="17" y="8" width="25" height="31" rx="5" fill="${C.o}"/>
      <text x="29.5" y="28" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="15" fill="#fff">${(window.SPT && window.SPT.course && { en: 'Aa', nl: 'ij' }[window.SPT.course.target]) || 'ñ'}</text>
      <rect x="22" y="31.5" width="15" height="2.6" rx="1.3" fill="#fff" opacity=".7"/>`,
    // 🧩 grammatica: bouwblokken
    grammar: `<rect x="6" y="25" width="17" height="15" rx="3.5" fill="${C.t}"/><rect x="25" y="25" width="17" height="15" rx="3.5" fill="${C.g}"/>
      <rect x="15" y="8" width="18" height="15" rx="3.5" fill="${C.o}"/>
      <path d="M10 32.5h9M29 32.5h9M19.5 15.5h9" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>`,
    // 💬 dialoog: twee tekstballonnen
    dialogue: `<path d="M6 12a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v7a6 6 0 0 1-6 6h-9l-6 5v-5.3A6 6 0 0 1 6 19z" fill="${C.o}"/>
      <circle cx="13.5" cy="15.5" r="1.9" fill="#fff"/><circle cx="19" cy="15.5" r="1.9" fill="#fff"/><circle cx="24.5" cy="15.5" r="1.9" fill="#fff"/>
      <path d="M42 26a6 6 0 0 0-6-6H25a6 6 0 0 0-6 6v5a6 6 0 0 0 6 6h7l5.5 4.5V36.6A6 6 0 0 0 42 31z" fill="${C.t}"/>
      <rect x="24.5" y="25.5" width="12" height="2.4" rx="1.2" fill="#fff" opacity=".9"/><rect x="24.5" y="30" width="8" height="2.4" rx="1.2" fill="#fff" opacity=".9"/>`,
    // 📖 lezen: open boek
    read: `<path d="M4 13.5c6-2.4 13-2 19.4 1.5V40c-6.4-3.5-13.4-3.9-19.4-1.5z" fill="${C.b}"/><path d="M44 13.5c-6-2.4-13-2-19.4 1.5V40c6.4-3.5 13.4-3.9 19.4-1.5z" fill="${C.b}"/>
      <path d="M7 11c5.4-1.8 11.3-1.2 17 2.2v24.4c-5.7-3.4-11.6-4-17-2.2z" fill="${C.cream}"/><path d="M41 11c-5.4-1.8-11.3-1.2-17 2.2v24.4c5.7-3.4 11.6-4 17-2.2z" fill="#f3e7d6"/>
      <path d="M11 17.5c3.2-.6 6.5-.2 9.5 1.2M11 22.5c3.2-.6 6.5-.2 9.5 1.2M11 27.5c3.2-.6 6.5-.2 9.5 1.2M27.5 18.7c3-1.4 6.3-1.8 9.5-1.2M27.5 23.7c3-1.4 6.3-1.8 9.5-1.2" stroke="${C.b2}" stroke-width="2" stroke-linecap="round" fill="none"/>`,
    // 🎙️ spreken / toepassen: microfoon met geluidsgolven
    speak: `<path d="M9 19.5a5 5 0 0 0 0 9M5.5 16a10 10 0 0 0 0 16M39 19.5a5 5 0 0 1 0 9M42.5 16a10 10 0 0 1 0 16" fill="none" stroke="${C.t}" stroke-width="2.6" stroke-linecap="round"/>
      <rect x="17" y="5" width="14" height="24" rx="7" fill="${C.p}"/><path d="M17 15h5M17 20h5" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
      <path d="M13 22.5a11 11 0 0 0 22 0" fill="none" stroke="${C.brown}" stroke-width="2.8" stroke-linecap="round"/><path d="M24 33.5V41M17.5 42.5h13" stroke="${C.brown}" stroke-width="2.8" stroke-linecap="round"/>`,
    // 🏁 unittoets: geblokte vlag
    test: `<path d="M12 6v37" stroke="${C.brown}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M13.5 8.5c6-3 11 3 17 0s9-1 11-.5v17c-2-.5-5-2.5-11 .5s-11-3-17 0z" fill="#fff"/>
      <path d="M13.5 8.5c3-1.5 5.7-.6 8.5.5v8.5c-2.8-1.1-5.5-2-8.5-.5zM30.5 8.5c3.4-1.7 6-1.3 8.2-.8v8.5c-2.2-.5-4.8-.9-8.2.8zM22 17.5c2.8 1.1 5.6 1.7 8.5.5v8.5c-2.9 1.2-5.7.6-8.5-.5z" fill="${C.ink}"/>
      <path d="M13.5 8.5c6-3 11 3 17 0s9-1 11-.5v17c-2-.5-5-2.5-11 .5s-11-3-17 0z" fill="none" stroke="${C.ink}" stroke-width="1.4" stroke-linejoin="round"/>`,
    // 🎁 dagbeloning: cadeau
    gift: `<rect x="8" y="20" width="32" height="21" rx="3.5" fill="${C.g}"/><rect x="6" y="14" width="36" height="9" rx="3" fill="${C.g2}"/>
      <rect x="21" y="14" width="6" height="27" fill="${C.o}"/>
      <path d="M24 14c-3.5-6-11-7.5-11-2.6 0 3 5 2.6 11 2.6zM24 14c3.5-6 11-7.5 11-2.6 0 3-5 2.6-11 2.6z" fill="none" stroke="${C.o}" stroke-width="2.8" stroke-linejoin="round"/>`,
    // 🏆 beloning ontvangen: beker
    trophy: `<path d="M15 9h18v9a9 9 0 0 1-18 0z" fill="${C.g}"/><path d="M15 12H9.5v2a6 6 0 0 0 6 6M33 12h5.5v2a6 6 0 0 1-6 6" fill="none" stroke="${C.g}" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M19 11.5v6a5 5 0 0 0 3 4.6" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".55" fill="none"/>
      <rect x="21.5" y="26" width="5" height="7" fill="#d9952a"/><rect x="15" y="33" width="18" height="7" rx="2.5" fill="${C.brown}"/><rect x="19" y="35.5" width="10" height="2" rx="1" fill="${C.g2}"/>`,
    // 🎓 examen: afstudeerhoed
    exam: `<path d="M24 8 4 17l20 9 20-9z" fill="#3d5a80"/><path d="M12 21v9c0 3.3 5.4 6 12 6s12-2.7 12-6v-9l-12 5.4z" fill="#2c4466"/>
      <path d="M40 18.5v11" stroke="${C.g}" stroke-width="2.4" stroke-linecap="round"/><circle cx="40" cy="31.5" r="2.8" fill="${C.g}"/><circle cx="24" cy="17" r="2" fill="${C.g}"/>`,
    // ⏸️ gepauzeerd
    pause: `<circle cx="24" cy="24" r="18" fill="${C.o}"/><rect x="17.5" y="15.5" width="4.6" height="17" rx="2.2" fill="#fff"/><rect x="25.9" y="15.5" width="4.6" height="17" rx="2.2" fill="#fff"/>`,
    // ⚡ woordensprint
    sprint: `<circle cx="24" cy="24" r="19" fill="${C.o}"/><circle cx="24" cy="24" r="14.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="1.5 3.5" opacity=".6"/>
      <path d="M27 7.5 14 27h9l-3 13.5L34 20h-9.5z" fill="${C.g}" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>`,
    // 🎧 dictee / luisteren
    listen: `<path d="M9 28v-4a15 15 0 0 1 30 0v4" fill="none" stroke="${C.t}" stroke-width="4" stroke-linecap="round"/>
      <rect x="6" y="25" width="10" height="16" rx="4.5" fill="${C.p}"/><rect x="32" y="25" width="10" height="16" rx="4.5" fill="${C.p}"/>
      <rect x="9" y="28.5" width="3" height="9" rx="1.5" fill="#fff" opacity=".55"/><path d="M21 31.5v4M24 29v9M27 31.5v4" stroke="${C.o}" stroke-width="2.4" stroke-linecap="round"/>`,
    // 🎲 woordspellen
    dice: `<rect x="5" y="15" width="22" height="22" rx="5" fill="${C.cream}" transform="rotate(-14 16 26)"/><rect x="5" y="15" width="22" height="22" rx="5" fill="none" stroke="${C.o}" stroke-width="2.2" transform="rotate(-14 16 26)"/>
      <g fill="${C.o}" transform="rotate(-14 16 26)"><circle cx="10.5" cy="20.5" r="2"/><circle cx="16" cy="26" r="2"/><circle cx="21.5" cy="31.5" r="2"/></g>
      <rect x="23" y="9" width="20" height="20" rx="4.5" fill="${C.t}" transform="rotate(12 33 19)"/>
      <g fill="#fff" transform="rotate(12 33 19)"><circle cx="28" cy="14" r="1.9"/><circle cx="38" cy="14" r="1.9"/><circle cx="28" cy="24" r="1.9"/><circle cx="38" cy="24" r="1.9"/></g>`,
    // 📚 woordenboek
    books: `<rect x="7" y="32" width="34" height="8" rx="2" fill="${C.t}"/><rect x="10" y="24" width="30" height="8" rx="2" fill="${C.o}"/><rect x="6" y="16" width="31" height="8" rx="2" fill="${C.b}"/>
      <path d="M11 36h22M14 28h20M10 20h20" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".55"/>
      <g transform="rotate(-18 30 12)"><rect x="18" y="8" width="24" height="7" rx="2" fill="${C.g}"/><path d="M22 11.5h14" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/></g>`,
    // 🧭 niveautest
    compass: `<circle cx="24" cy="24" r="18" fill="${C.t}"/><circle cx="24" cy="24" r="14" fill="${C.cream}"/>
      <path d="M24 13v3M24 32v3M13 24h3M32 24h3" stroke="${C.t}" stroke-width="2" stroke-linecap="round"/>
      <path d="M24 24 30.5 15.5 27 26.5z" fill="${C.o}"/><path d="M24 24 17.5 32.5 21 21.5z" fill="#b9aea3"/><circle cx="24" cy="24" r="2.2" fill="${C.ink}"/>`,
    // 🌎 regio's
    globe: `<circle cx="24" cy="24" r="18" fill="${C.b}"/>
      <path d="M16 9.5c3 1 5 3.5 4.5 6.5-.4 2.6-3.6 3-4 5.6-.3 2.2 2.7 3.4 4.4 5 2.3 2.1 1.8 5.4.8 8.4-.6 1.8-.2 3.6.6 5.3A18 18 0 0 1 9 32c2-1.4 2.6-4 2-6.6-.8-3.2-3.8-4.4-4.8-6.8A18 18 0 0 1 16 9.5z" fill="${C.green}"/>
      <path d="M30 8.5c-1.5 2-1 4.5 1.5 5.5 2 .8 4.4.2 5.8 2 1.3 1.6.4 3.6 1.4 5.3 1 1.8 3 2 4.6 2.2A18 18 0 0 0 30 8.5z" fill="${C.green}"/>
      <ellipse cx="18" cy="15" rx="5" ry="2.6" transform="rotate(-30 18 15)" fill="#fff" opacity=".25"/>`,
    // 🗂️ alle spellen
    allgames: `<path d="M5 14a4 4 0 0 1 4-4h9l4 4h17a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="${C.g}"/>
      <rect x="11" y="9" width="12" height="16" rx="2.5" fill="${C.t}" transform="rotate(-10 17 17)"/><rect x="22" y="8" width="12" height="16" rx="2.5" fill="${C.cream}" transform="rotate(8 28 16)"/>
      <path d="M5 20a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" fill="${C.g2}"/><rect x="18" y="25" width="12" height="3" rx="1.5" fill="${C.o}" opacity=".8"/>`,
    // woordspellen
    sopa: `<rect x="5" y="5" width="30" height="30" rx="5" fill="${C.cream}"/>
      ${[0, 1, 2].map(r => [0, 1, 2].map(c => `<text x="${12 + c * 8}" y="${16.5 + r * 8.5}" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="7" fill="${C.ink}" opacity=".55">${LET.grid[r * 3 + c]}</text>`).join('')).join('')}
      <rect x="7" y="18.5" width="26" height="9" rx="4.5" fill="none" stroke="${C.t}" stroke-width="2.4"/>
      <circle cx="31" cy="31" r="8" fill="${C.t2}" fill-opacity=".35" stroke="${C.o}" stroke-width="3.2"/><path d="M36.8 36.8 43 43" stroke="${C.o}" stroke-width="4.4" stroke-linecap="round"/>`,
    cruci: `${[[8, 8, 1], [17, 8, 1], [26, 8, 1], [26, 17, 1], [8, 17, 0], [17, 17, 0], [26, 26, 1], [17, 26, 1], [8, 26, 0], [8, 35, 0]].map(([x, y, on]) => `<rect x="${x}" y="${y}" width="8.2" height="8.2" rx="1.6" fill="${on ? C.cream : '#4b3b33'}"/>`).join('')}
      <text x="12.1" y="14.9" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="6.5" fill="${C.o}">${LET.word[0]}</text><text x="21.1" y="14.9" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="6.5" fill="${C.o}">${LET.word[1]}</text><text x="30.1" y="14.9" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="6.5" fill="${C.o}">${LET.word[2]}</text>
      <g transform="rotate(40 36 30)"><rect x="32.5" y="14" width="7" height="24" rx="1.5" fill="${C.g}"/><rect x="32.5" y="14" width="7" height="4" rx="1.5" fill="${C.p}"/><path d="M32.5 38h7l-3.5 6z" fill="#f3d9b5"/><path d="M35 42.3 36 44l1-1.7z" fill="${C.ink}"/></g>`,
    revoltijo: `<g transform="rotate(-12 13 27)"><rect x="5" y="19" width="16" height="16" rx="3.5" fill="${C.g}"/><text x="13" y="31.5" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="11" fill="${C.ink}">${LET.mix[0]}</text></g>
      <g transform="rotate(8 24 21)"><rect x="16" y="13" width="16" height="16" rx="3.5" fill="${C.o}"/><text x="24" y="25.5" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="11" fill="#fff">${LET.mix[1]}</text></g>
      <g transform="rotate(-6 35 30)"><rect x="27" y="22" width="16" height="16" rx="3.5" fill="${C.t}"/><text x="35" y="34.5" text-anchor="middle" font-family="system-ui,sans-serif" font-weight="800" font-size="11" fill="#fff">${LET.mix[2]}</text></g>
      <path d="M9 43.5c8 2.5 22 2.5 30-1" fill="none" stroke="${C.p}" stroke-width="2.6" stroke-linecap="round"/><path d="M35.5 40.5l3.8 2-2 3.6" fill="none" stroke="${C.p}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`,
    volcan: `<circle cx="16" cy="10" r="4.5" fill="#cfc3b8"/><circle cx="22" cy="7.5" r="5" fill="#ddd2c8"/><circle cx="28" cy="10" r="4" fill="#cfc3b8"/>
      <path d="M4 42 18 17h12l14 25z" fill="${C.brown}"/><path d="M18 17h12l3.2 5.8c-2.6 1.8-4.2-.6-6 1.4-1.6 1.8-3.2-1.6-5 0-1.8 1.6-3.6-.2-4.6-1.2z" fill="${C.o}"/>
      <path d="M21.5 23.5c-.6 3-2.5 5-2 8M27 24.5c.4 2.6 2 4 1.6 6.5" stroke="${C.g}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      <path d="M4 42h40" stroke="${C.green}" stroke-width="3" stroke-linecap="round"/>`,
    parejas: `<g transform="rotate(-10 16 25)"><rect x="5" y="10" width="21" height="29" rx="4" fill="${C.t}"/><rect x="8.5" y="13.5" width="14" height="22" rx="2.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-dasharray="2.6 2.2" opacity=".75"/></g>
      <g transform="rotate(9 32 25)"><rect x="21" y="10" width="21" height="29" rx="4" fill="${C.cream}"/><rect x="21" y="10" width="21" height="29" rx="4" fill="none" stroke="${C.p}" stroke-width="2"/>
      <path d="M31.5 31s-6.5-4-6.5-8.2a3.4 3.4 0 0 1 6.5-1.5 3.4 3.4 0 0 1 6.5 1.5c0 4.2-6.5 8.2-6.5 8.2z" fill="${C.p}"/></g>`
  };
  // emoji → illustratie (zodat bestaande teksten met emoji's vanzelf een tekening krijgen)
  const EMOJI = { '🔁': 'review', '🃏': 'vocab', '🧩': 'grammar', '💬': 'dialogue', '📖': 'read', '🎙️': 'speak', '🗣️': 'dialogue', '🏁': 'test', '🎁': 'gift', '🏆': 'trophy', '🎓': 'exam', '⏸️': 'pause', '📘': 'read', '⚡': 'sprint', '🎧': 'listen', '🎲': 'dice', '📚': 'books', '🧭': 'compass', '🌎': 'globe', '🗂️': 'allgames' };
  function art(name) {
    const n = ART[name] ? name : EMOJI[name]; if (!n) return '';
    return `<svg class="ic-art" viewBox="0 0 48 48" aria-hidden="true">${ART[n]}</svg>`;
  }
  /* <span> met de illustratie; onbekend → gewoon de emoji (tekst). */
  function el(name, cls) {
    const s = document.createElement('span'); s.className = 'ic ' + (cls || '');
    const a = art(name); if (a) s.innerHTML = a; else s.textContent = name;
    return s;
  }
  /* Klein app-logo (Lupe op een warm vlak) voor de bovenbalk. */
  function logo() {
    return `<span class="logo-mark" aria-hidden="true">${S.Tutor ? S.Tutor.svg(30, { face: true }) : ''}</span>`;
  }
  /* Vervang de emoji's in de tabbalk en het tandwiel door de eigen lijn-iconen. */
  function decorate() {
    document.querySelectorAll('.tabbar a[data-tab]').forEach(a => {
      const sp = a.querySelector('span'); const ic = line(a.dataset.tab);
      if (sp && ic && !sp.querySelector('svg')) { sp.innerHTML = ic; sp.classList.add('tab-ic'); }
    });
    const g = document.querySelector('.tb-gear'); if (g && !g.querySelector('svg')) g.innerHTML = line('ajustes');
  }
  S.Icons = { line, art, el, has: n => !!(ART[n] || EMOJI[n]), logo, decorate, LINE, ART };
})(window.SPT);
