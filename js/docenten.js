/* Een eigen docent per doeltaal. Spaans houdt Profe Lupe (de axolotl in js/tutor.js); elke andere taal krijgt een dier dat bij het land past,
   met een eigen naam, aanspreekvorm, karakter (voor de AI) en tekening. De kleding komt uit de sfeer van de taal (js/look-<taal>.js);
   heeft een taal geen eigen sfeer, dan draagt de docent de kleding uit `wear` hieronder.
   Nieuwe taal: hier een rij. Zonder rij blijft Lupe de docent.
   def = {
     name, title            naam en aanspreekvorm («Frau Bärbel»); overal waar de app «Lupe» / «Profe Lupe» zegt, komt dit te staan
     hi, mic                korte begroeting in de doeltaal; testzin voor de microfoontest
     nl / es                { what: 'een bruine beer uit Berlijn', tagline } voor Nederlandse en Spaanse uitleg
     persona                karakter voor de AI-docent (Engels, vult de opdracht in js/ai.js)
     voice                  optioneel: stem voor haar Spaanse zinnen in een cursus met Spaanse uitleg (tools/tts-texts.js)
     icon                   lijn-icoon (24×24) voor het tabblad
     art                    de tekening: kleuren en SVG-stukken, zelfde maten als Lupe (hoofd rond 60,66), zie svg() in js/tutor.js
   } */
(function (S) {
  'use strict';
  const HEAD = 'M60 34C88 34 105 47 105 66C105 87 87 99 60 99C33 99 15 87 15 66C15 47 32 34 60 34Z';
  const BODY = 'M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z';
  const BUST = 'M20 121C22 101 36 91 60 91S98 101 100 121Z';
  const mirror = s => `<g transform="translate(120 0) scale(-1 1)">${s}</g>`;
  const both = s => s + mirror(s);
  const shine = '<ellipse cx="43" cy="45" rx="11" ry="5" transform="rotate(-22 43 45)" fill="#fff" opacity=".4"/>';
  /* neus met een glimmertje; daaronder het lijntje naar de mond */
  const nose = (y, col, w = 5.6) => `<path d="M${60 - w} ${y}Q60 ${y - 3.2} ${60 + w} ${y}Q${60 + w - .6} ${y + 4.6} 60 ${y + 5.6}Q${60 - w + .6} ${y + 4.6} ${60 - w} ${y}Z" fill="${col}"/><ellipse cx="${60 - w * .36}" cy="${y + .4}" rx="${w * .3}" ry="1" fill="#fff" opacity=".45"/>`;
  const star = (x, y, r, col) => { const p = []; for (let i = 0; i < 10; i++) { const a = (i * 36 - 90) * Math.PI / 180, q = i % 2 ? r * .42 : r; p.push((x + q * Math.cos(a)).toFixed(2) + ' ' + (y + q * Math.sin(a)).toFixed(2)); } return `<path d="M${p.join('L')}Z" fill="${col}"/>`; };
  const tulip = (x, y, k, c1, c2) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M0 0C-5.4-.6-6.4-6-5.6-10.6C-3.8-9.4-2.6-8.2-1.9-6.6C-1.5-8.8-.8-10.6 0-12C.8-10.6 1.5-8.8 1.9-6.6C2.6-8.2 3.8-9.4 5.6-10.6C6.4-6 5.4-.6 0 0Z" fill="${c1}"/><path d="M0 0C-2.4-2.6-2.6-6.6 0-12C2.6-6.6 2.4-2.6 0 0Z" fill="${c2}"/></g>`;
  const sleeveShape = 'M-6.5 3.5C-8 -2-4.5-6 .5-6S8-2 6.5 3.5C3.5 6-3.5 6-6.5 3.5Z';
  const sleeve = (x, flip, fill, trim) => `<g transform="translate(${x} 100) scale(${flip} 1)"><path d="${sleeveShape}" fill="${fill}"/><path d="M-6.3 3.4C-3.3 5.8 3.3 5.8 6.3 3.4" fill="none" stroke="${trim}" stroke-width="1.7" stroke-linecap="round"/><path d="M-3-3.5Q0-4.8 3-3.5" stroke="#fff" stroke-width=".9" opacity=".35" fill="none" stroke-linecap="round"/></g>`;
  /* staart als dikke gebogen lijn met ringen (wasbeer, kat) */
  const ringTail = (d, w, base, ring, dash, tip) => `<path d="${d}" fill="none" stroke="${base}" stroke-width="${w}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${ring}" stroke-width="${w}" stroke-dasharray="${dash}" stroke-dashoffset="-7"/>${tip || ''}`;

  /* ---------- Engels: Ms. Ruby, een wasbeer uit New York ---------- */
  const NAVY = '#27408b', NAVY2 = '#1a2c66', RED = '#d8343f', RED2 = '#a8232d', MASK = '#3d414d';
  const ruby = {
    skin: ['#eceef2', '#b9bdc7', '#8a909d'], sk: '#aab0bb', paw: MASK, foot: MASK,
    ears: () => both(`<path d="M19 53C15 38 19 27 26 22C36 26 44 33 48 41Z" fill="${MASK}"/><path d="M24 47C22 38 24 31 27.5 28C33.5 31 38.5 35.5 41.5 40.5Z" fill="#e6c9cf"/><path d="M19 53C15 38 19 27 26 22" fill="none" stroke="#f4f5f7" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>`),
    head: K => `<clipPath id="${K.id}k"><path d="${HEAD}"/></clipPath><path d="${HEAD}" fill="${K.u('s')}"/>
      <g clip-path="url(#${K.id}k)">${both(`<ellipse cx="37" cy="48.5" rx="15" ry="6" transform="rotate(-20 37 48.5)" fill="#f6f7f9"/><ellipse cx="38.5" cy="65" rx="18.5" ry="12.5" transform="rotate(-16 38.5 65)" fill="${MASK}"/>`)}
      <path d="M60 36C63.5 46 63.5 58 60 70C56.5 58 56.5 46 60 36Z" fill="#7b8190" opacity=".55"/>
      <ellipse cx="60" cy="84" rx="19" ry="14" fill="#fbfbfc"/></g>${shine}`,
    face: K => `${K.eyes(['#c98a3a', '#c98a3a'])}${nose(73.6, '#2b2d36')}<path d="M60 79.2V81" stroke="#5a4a52" stroke-width="1.5" stroke-linecap="round"/>${K.mouth({ dy: .8, stroke: '#5a4a52' })}`,
    tail: () => ringTail('M78 131C96 138 113 131 116 114C117 105 112 99 107 101', 13, '#aab0bb', MASK, '6 8', `<circle cx="107" cy="101" r="6.5" fill="${MASK}"/>`),
    wear: {
      /* rode strik met een ster */
      hat: () => `<g class="lupe-flower" transform="translate(87 38) rotate(18)"><path d="M-1 0C-7-6-12-6-13.5-1.5C-13 4-8 5.5-1 1Z" fill="${RED}"/><path d="M1 0C7-6 12-6 13.5-1.5C13 4 8 5.5 1 1Z" fill="${RED}"/><path d="M-1 2.5-5.5 10.5-1.6 9 .4 12.6 2 3Z" fill="${RED2}"/><path d="M-12 -2Q-8 -1 -3 0M12 -2Q8 -1 3 0" stroke="${RED2}" stroke-width=".9" fill="none" stroke-linecap="round"/><circle r="3.4" fill="#fff"/>${star(0, .2, 2.5, NAVY)}</g>`,
      /* jurkje in rood-wit-blauw: blauw met sterren, rood-wit gestreepte rok */
      dress: id => `<g class="lupe-dress"><clipPath id="${id}c"><path d="${BODY}"/></clipPath><path d="${BODY}" fill="${NAVY}"/>
        <g clip-path="url(#${id}c)"><path d="M24 121Q60 131 96 121V152H24Z" fill="#fbfbfc"/>
          ${[36, 48, 60, 72, 84].map(x => `<path d="M${x - 3.2} 120L${x - 4.2 + (x - 60) * .08} 152H${x + 4.2 + (x - 60) * .08}L${x + 3.2} 120Z" fill="${RED}"/>`).join('')}
          <path d="M41 93C36 106 33 120 31 135Q36 137 40 138C40 124 42 108 46 94Z" fill="#fff" opacity=".12"/></g>
        <path d="M31.6 121Q60 131 88.4 121" fill="none" stroke="#f2b134" stroke-width="2" stroke-linecap="round"/>
        ${star(46, 110, 2.6, '#fff')}${star(60, 113.5, 2.6, '#fff')}${star(74, 110, 2.6, '#fff')}${star(53, 103, 1.9, '#fff')}${star(67, 103, 1.9, '#fff')}
        <path d="M47 94.5Q53.5 104 60 97.5Q66.5 104 73 94.5Q60 99 47 94.5Z" fill="#fbfbfc"/></g>${sleeve(35.5, -1, RED, '#fbfbfc')}${sleeve(84.5, 1, RED, '#fbfbfc')}`,
      bust: id => `<clipPath id="${id}c"><path d="${BUST}"/></clipPath><path d="${BUST}" fill="${NAVY}"/>
        <g clip-path="url(#${id}c)"><path d="M14 113Q60 126 106 113V124H14Z" fill="${RED}"/><path d="M14 112.5Q60 125.5 106 112.5" fill="none" stroke="#fbfbfc" stroke-width="2.4"/></g>
        ${star(40, 105.5, 3.2, '#fff')}${star(60, 109.5, 3.2, '#fff')}${star(80, 105.5, 3.2, '#fff')}
        <path d="M43 94Q52 106 60 98Q68 106 77 94Q60 100 43 94Z" fill="#fbfbfc"/>`
    }
  };

  /* ---------- Nederlands: Juf Saar, een Friese koe ---------- */
  const COW = '#3a3537', ORANGE = '#f28c1b', ORANGE2 = '#d96f0c', DELFT = '#2d5fb8', MUZ = '#f9bfcb';
  const saar = {
    skin: ['#ffffff', '#f8f5f0', '#ddd5c8'], sk: '#f4efe8', edge: '#cdbfae', paw: '#4a4245', foot: '#4a4245',
    ears: () => `<path d="M27 49C17 40 7 41 2 48C7 57 17 60 28 57Z" fill="${COW}"/><path d="M23 50C17 46 11 46 7.5 49C11 53.5 17 55 23.5 54Z" fill="#f4a9b8"/>
      <path d="M93 49C103 40 113 41 118 48C113 57 103 60 92 57Z" fill="#f8f5f0" stroke="#cdbfae" stroke-width=".9"/><path d="M97 50C103 46 109 46 112.5 49C109 53.5 103 55 96.5 54Z" fill="#f4a9b8"/>
      ${both(`<path d="M36 40C31 33 31 26 35 21C40 25 43.5 31 44.5 38Z" fill="#f3e3c0" stroke="#d6c193" stroke-width=".9" stroke-linejoin="round"/>`)}`,
    head: K => `<clipPath id="${K.id}k"><path d="${HEAD}"/></clipPath><path d="${HEAD}" fill="${K.u('s')}" stroke="#cdbfae" stroke-width=".9"/>
      <g clip-path="url(#${K.id}k)"><path d="M12 44C22 34 40 33 52 40C58 48 58 62 50 72C40 80 24 78 14 70Z" fill="${COW}"/><path d="M82 30C92 30 104 38 108 50C100 55 88 52 82 44C79 39 79 33 82 30Z" fill="${COW}"/></g>
      <ellipse cx="60" cy="84.5" rx="23" ry="13.5" fill="${MUZ}" stroke="#e99db0" stroke-width=".9"/>
      <ellipse cx="50" cy="79.5" rx="2.3" ry="3.1" transform="rotate(12 50 79.5)" fill="#c9627d"/><ellipse cx="70" cy="79.5" rx="2.3" ry="3.1" transform="rotate(-12 70 79.5)" fill="#c9627d"/>
      <ellipse cx="74" cy="43" rx="8" ry="3.6" transform="rotate(14 74 43)" fill="#fff" opacity=".5"/>`,
    face: K => `${K.eyes(['#a9743c', '#a9743c'])}${K.mouth({ dy: 5.2, stroke: '#b04a68' })}`,
    tail: () => `<path d="M80 131C96 131 108 123 111 109" fill="none" stroke="#cdbfae" stroke-width="5.6" stroke-linecap="round"/><path d="M80 131C96 131 108 123 111 109" fill="none" stroke="#f8f5f0" stroke-width="4" stroke-linecap="round"/><path d="M111 111C105 105 105 96 111 90C118 96 118 105 111 111Z" fill="${COW}"/>`,
    wear: {
      /* rode tulp achter het oor */
      hat: () => `<g class="lupe-flower" transform="translate(92 43) rotate(24)"><path d="M0 1C-7 2-11-1-12.5-5C-7-6-3-4 0 1Z" fill="#3a9d5d"/><path d="M0 1C7 2 11-1 12.5-5C7-6 3-4 0 1Z" fill="#2f8a50"/>${tulip(0, 0, 1.5, '#e5383b', '#f2686a')}</g>`,
      /* oranje jurkje met een Delfts blauwe rand vol tulpjes */
      dress: id => `<g class="lupe-dress"><clipPath id="${id}c"><path d="${BODY}"/></clipPath><path d="${BODY}" fill="${ORANGE}"/>
        <g clip-path="url(#${id}c)"><path d="M24 126Q60 136 96 126V140Q60 150 24 140Z" fill="#fdfaf3"/>
          <path d="M24 126Q60 136 96 126M24 140Q60 150 96 140" fill="none" stroke="${DELFT}" stroke-width="1.6"/>
          ${[[38, 136.4], [49, 139], [60, 139.9], [71, 139], [82, 136.4]].map(([x, y]) => tulip(x, y, .62, DELFT, '#7fa3e6') + `<path d="M${x} ${y}v2.6" stroke="${DELFT}" stroke-width=".8"/>`).join('')}
          <path d="M41 93C36 106 33 120 31 135Q36 137 40 138C40 124 42 108 46 94Z" fill="#fff" opacity=".16"/>
          <g fill="none" stroke="${ORANGE2}" stroke-linecap="round" opacity=".55" stroke-width="1.1"><path d="M48 108Q46 117 45 126"/><path d="M60 109V129"/><path d="M72 108Q74 117 75 126"/></g></g>
        <path d="M46.5 94.5Q53.5 105 60 98Q66.5 105 73.5 94.5Q60 99.5 46.5 94.5Z" fill="#fdfaf3" stroke="${DELFT}" stroke-width=".8"/>
        ${tulip(60, 112, .95, '#e5383b', '#f2686a')}<path d="M60 112v5" stroke="#2f8a50" stroke-width="1.2" stroke-linecap="round"/></g>${sleeve(35.5, -1, ORANGE, '#fdfaf3')}${sleeve(84.5, 1, ORANGE, '#fdfaf3')}`,
      bust: id => `<clipPath id="${id}c"><path d="${BUST}"/></clipPath><path d="${BUST}" fill="${ORANGE}"/>
        <g clip-path="url(#${id}c)"><path d="M14 112Q60 125 106 112V124H14Z" fill="#fdfaf3"/><path d="M14 112Q60 125 106 112" fill="none" stroke="${DELFT}" stroke-width="2"/>
        ${[[36, 121.5], [60, 124.5], [84, 121.5]].map(([x, y]) => tulip(x, y, .8, DELFT, '#7fa3e6')).join('')}</g>
        <path d="M43 94Q52 106 60 98Q68 106 77 94Q60 100 43 94Z" fill="#fdfaf3" stroke="${DELFT}" stroke-width=".9"/>`
    }
  };

  /* ---------- Duits: Frau Bärbel, een bruine beer uit Berlijn ---------- */
  const baerbel = {
    skin: ['#e9bd92', '#c98f5f', '#a2683c'], sk: '#c68a5a', paw: '#8a5632', foot: '#8a5632',
    ears: K => both(`<circle cx="27" cy="42" r="13.5" fill="${K.u('s')}"/><circle cx="28" cy="43.5" r="7.4" fill="#f4d2ac"/>`),
    head: K => `<path d="${HEAD}" fill="${K.u('s')}"/>${shine}<ellipse cx="60" cy="82.5" rx="18.5" ry="13.6" fill="#f8e3c8"/>`,
    face: K => `${K.eyes()}${K.cheeks('#ef7f7f', .42)}${nose(73.2, '#4a2c20', 6.2)}<path d="M60 79V81.2" stroke="#6b4030" stroke-width="1.6" stroke-linecap="round"/>${K.mouth({ dy: 1.2, stroke: '#6b4030' })}`,
    tail: K => `<circle cx="93" cy="134" r="8.5" fill="${K.u('s')}"/>`
  };

  /* ---------- Frans: Madame Colette, een abrikooskleurige poedel uit Parijs ---------- */
  const CURL = '#eeb680', CURL2 = '#f7cf9f';
  const puff = (pts, fill) => pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`).join('');
  const colette = {
    skin: ['#fff3e0', '#f8d7ae', '#e4ad79'], sk: '#f3c99b', paw: CURL2, foot: CURL2, fluffy: true,
    ears: () => both(puff([[17, 57, 8.5], [12, 67, 9.5], [10, 79, 10], [12, 91, 9.6], [18, 100, 8], [23, 70, 8.5], [24, 86, 9], [25, 96, 7]], CURL) + puff([[12, 69, 4.2], [11, 83, 4.4], [16, 96, 3.8]], CURL2))
      + puff([[44, 35, 9.5], [60, 30, 11.5], [76, 35, 9.5], [52, 40, 8.5], [68, 40, 8.5]], CURL) + puff([[55, 29, 4.6], [70, 33, 3.8], [45, 34, 3.6]], CURL2),
    head: K => `<path d="${HEAD}" fill="${K.u('s')}"/>${shine}<ellipse cx="60" cy="82.5" rx="17" ry="13" fill="#fffaf1"/>`,
    face: K => `${K.eyes()}${K.cheeks('#f08aa0', .5)}${nose(73.4, '#3a2a2e', 5.2)}<path d="M60 79V81.2" stroke="#6b4a44" stroke-width="1.5" stroke-linecap="round"/>${K.mouth({ dy: 1.2, stroke: '#6b4a44' })}`,
    tail: () => `<path d="M80 131C92 131 100 124 103 114" fill="none" stroke="#f3c99b" stroke-width="5" stroke-linecap="round"/>${puff([[104, 108, 8.5], [98, 104, 6.5], [110, 103, 6.5], [104, 99, 6.5]], CURL)}${puff([[102, 103, 3.4], [108, 107, 2.8]], CURL2)}`
  };

  /* ---------- Turks: Pamuk Öğretmen, een Van-kat (wit, met een blauw en een amberkleurig oog) ---------- */
  const AUB = '#dc8f52', AUB2 = '#b96c35';
  const pamuk = {
    skin: ['#ffffff', '#f7f3ec', '#dad0c1'], sk: '#f4efe6', edge: '#cdbfae', paw: '#fbe3e6', foot: '#f7f3ec',
    ears: () => both(`<path d="M19 54C15 38 18 26 24 20C35 25 44 33 49 42Z" fill="${AUB}" stroke="${AUB2}" stroke-width=".9" stroke-linejoin="round"/><path d="M23.5 47C21.5 38 23 31 26 27.5C32.5 31 38 36 41.5 41Z" fill="#f9bcc8"/>`),
    head: K => `<clipPath id="${K.id}k"><path d="${HEAD}"/></clipPath><path d="${HEAD}" fill="${K.u('s')}" stroke="#cdbfae" stroke-width=".9"/>
      <g clip-path="url(#${K.id}k)">${both(`<path d="M10 52C14 38 28 30 52 31C54 38 50 46 42 50C32 54 20 56 10 52Z" fill="${AUB}"/><path d="M26 40q5 4 4 10M36 36q4 5 3 11" fill="none" stroke="${AUB2}" stroke-width="1.3" stroke-linecap="round" opacity=".6"/>`)}</g>
      <ellipse cx="60" cy="83" rx="15" ry="10.5" fill="#fff" opacity=".85"/>
      <g fill="none" stroke="#bfb3a2" stroke-width=".9" stroke-linecap="round">${both('<path d="M33 79.5 15 76M33 82.5 14 84"/>')}</g>`,
    face: K => `${K.eyes(['#4aa6e6', '#eaa935'])}${K.cheeks('#f59ab0', .5)}<path d="M56.4 74.6Q60 73.4 63.6 74.6Q62.4 78.6 60 79.2Q57.6 78.6 56.4 74.6Z" fill="#f08aa0"/>
      <g class="m-closed" fill="none" stroke="#8a5a5a" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M60 79.2V81.2M52.6 81Q56.3 86 60 81.2Q63.7 86 67.4 81"/></g>
      <g class="m-open"><path d="M60 79.2V81" stroke="#8a5a5a" stroke-width="1.9" stroke-linecap="round"/><path d="M54.2 81.4Q60 83 65.8 81.4Q65.2 90.6 60 90.6Q54.8 90.6 54.2 81.4Z" fill="#8e3253"/><path d="M56.6 88.6Q60 85.4 63.4 88.6Q62 90.5 60 90.5Q58 90.5 56.6 88.6Z" fill="#f37fa6"/></g>`,
    tail: () => ringTail('M78 131C96 139 114 131 117 113C118 104 113 98 108 100', 12.5, AUB, AUB2, '4.5 9', '<circle cx="108" cy="100" r="6.2" fill="#f7f3ec" stroke="#cdbfae" stroke-width=".8"/>')
  };

  /* Lijn-iconen voor het tabblad (zelfde stijl als js/icons.js): kop, oren, ogen en mond. */
  const KOP = 'M12 8.6c4.6 0 7.6 2.7 7.6 5.8S16.6 20 12 20s-7.6-2.5-7.6-5.6 3-5.8 7.6-5.8z';
  const kop = (extra, face) => `<path class="fill" d="${KOP}"/>${extra}<path d="${KOP}"/>${face || '<path d="M9.8 16.4q2.2 1.6 4.4 0"/><circle class="dot" cx="9.1" cy="13.4" r="1.1"/><circle class="dot" cx="14.9" cy="13.4" r="1.1"/>'}`;
  const ICON = {
    en: kop('<path d="M5.6 11.2 4.6 5.4l4.9 3.5M18.4 11.2l1-5.8-4.9 3.5"/><path d="M6.2 13.6c.5-1.5 1.8-2.2 3.2-2.1 1.2.1 2 .9 2.1 2M17.8 13.6c-.5-1.5-1.8-2.2-3.2-2.1-1.2.1-2 .9-2.1 2"/>'),
    nl: kop('<path d="M5.4 11c-1.7-1.3-3.4-1-4.2.3 1 1.5 2.6 1.9 4 1.2M18.6 11c1.7-1.3 3.4-1 4.2.3-1 1.5-2.6 1.9-4 1.2M8.2 8.9C7 7.6 6.9 6 7.8 4.6M15.8 8.9c1.2-1.3 1.3-2.9.4-4.3"/>',
      '<path d="M8.6 15.4h6.8a1.6 1.6 0 0 1 0 3.2H8.6a1.6 1.6 0 0 1 0-3.2z"/><circle class="dot" cx="10.6" cy="17" r=".7"/><circle class="dot" cx="13.4" cy="17" r=".7"/><circle class="dot" cx="9.1" cy="12.6" r="1.1"/><circle class="dot" cx="14.9" cy="12.6" r="1.1"/>'),
    de: kop('<circle cx="6" cy="8.2" r="2.6"/><circle cx="18" cy="8.2" r="2.6"/>', '<path d="M9.9 16.6q2.1 1.4 4.2 0M12 15.2v.9"/><path class="dot" d="M10.9 14.3h2.2l-1.1 1.2z"/><circle class="dot" cx="8.9" cy="12.8" r="1.1"/><circle class="dot" cx="15.1" cy="12.8" r="1.1"/>'),
    fr: kop('<path d="M5.6 10.4c-2.3.5-3.5 3.2-2.7 6.4 1.5.5 2.6 0 3.2-1.2M18.4 10.4c2.3.5 3.5 3.2 2.7 6.4-1.5.5-2.6 0-3.2-1.2"/><circle cx="12" cy="6.4" r="2.5"/>'),
    tr: kop('<path d="M5.6 11.2 4.4 4.8l5.2 4M18.4 11.2l1.2-6.4-5.2 4"/><path d="M3.4 14.6 1 14M3.6 16.4l-2.2.7M20.6 14.6 23 14M20.4 16.4l2.2.7"/>', '<path d="M9.6 16.2q1.2 1.4 2.4 0 1.2 1.4 2.4 0"/><circle class="dot" cx="9.1" cy="13.2" r="1.1"/><circle class="dot" cx="14.9" cy="13.2" r="1.1"/>')
  };

  const teaches = (lang, to) => `(you are a native speaker of ${lang} who teaches it to ${to} speakers)`;
  const persona = (name, title, who, likes, sayings) => c => `Your name is ${name} ("${title}"). ${who}, and you are the learner's personal ${c.ai.target} teacher in this app ${teaches(c.ai.target, c.ui === 'nl' ? 'Dutch' : 'Spanish')}.
Personality: warm, patient, playful and encouraging; ${likes}. Now and then (not every message) you use a light expression such as ${sayings}. Keep the jokes short and never let them get in the way of the teaching.
Speak as ${name} in the first person. Do not mention being an AI or a language model unless the learner asks.`;

  const DOCENTEN = {
    en: { name: 'Ruby', title: 'Ms. Ruby', hi: 'Hi! I’m Ruby', mic: 'Hello Ruby, how are you?', art: ruby, icon: ICON.en, voice: 'es-US-PalomaNeural',
      nl: { what: 'een wasbeer uit New York', tagline: 'Wasbeer uit New York · jouw docent' },
      es: { what: 'una mapache de Nueva York', tagline: 'Mapache de Nueva York · tu profe' },
      persona: persona('Ruby', 'Ms. Ruby', 'You are a cheerful, curious raccoon from New York City', 'you love bagels, baseball and road trips across the States', '"Awesome!", "Way to go!" or "You got this!"') },
    nl: { name: 'Saar', title: 'Juf Saar', hi: 'Hallo! Ik ben Saar', mic: 'Hallo Saar, hoe gaat het?', art: saar, icon: ICON.nl,
      nl: { what: 'een koe uit Friesland', tagline: 'Koe uit Friesland · jouw docent' },
      es: { what: 'una vaca de Frisia, en el norte de los Países Bajos', tagline: 'Vaca de Frisia · tu profe' },
      persona: persona('Saar', 'Juf Saar', 'You are a cheerful black-and-white cow from Friesland in the north of the Netherlands', 'you love stroopwafels, cycling along the canals and ice skating in winter', '"Lekker bezig!", "Goed zo!" or "Gezellig!"') },
    de: { name: 'Bärbel', title: 'Frau Bärbel', hi: 'Hallo! Ich bin Bärbel', mic: 'Hallo Bärbel, wie geht es dir?', art: baerbel, icon: ICON.de,
      nl: { what: 'een bruine beer uit Berlijn', tagline: 'Bruine beer uit Berlijn · jouw docent' },
      es: { what: 'una osa parda de Berlín', tagline: 'Osa de Berlín · tu profe' },
      persona: persona('Bärbel', 'Frau Bärbel', 'You are a cheerful brown bear from Berlin (the bear is the symbol of the city)', 'you love fresh Brezeln, hiking in the Black Forest and Christmas markets', '"Super!", "Na klar!" or "Toll gemacht!"') },
    fr: { name: 'Colette', title: 'Madame Colette', hi: 'Salut ! Moi, c’est Colette', mic: 'Bonjour Colette, comment ça va ?', art: colette, icon: ICON.fr,
      nl: { what: 'een poedel uit Parijs', tagline: 'Poedel uit Parijs · jouw docent' },
      es: { what: 'una caniche de París', tagline: 'Caniche de París · tu profe' },
      persona: persona('Colette', 'Madame Colette', 'You are a cheerful, elegant apricot poodle from Paris', 'you love warm croissants, strolling along the Seine and old chansons', '"Oh là là !", "Bravo !" or "Chapeau !"') },
    tr: { name: 'Pamuk', title: 'Pamuk Öğretmen', hi: 'Merhaba! Ben Pamuk', mic: 'Merhaba Pamuk, nasılsın?', art: pamuk, icon: ICON.tr,
      nl: { what: 'een Van-kat uit Turkije, met één blauw en één amberkleurig oog', tagline: 'Van-kat uit Turkije · jouw docent' },
      es: { what: 'una gata Van de Turquía, con un ojo azul y otro ámbar', tagline: 'Gata Van de Turquía · tu profe' },
      persona: persona('Pamuk', 'Pamuk Öğretmen', 'You are a cheerful white Van cat (Van kedisi) with one blue and one amber eye, from the city of Van in eastern Türkiye, now living in İstanbul', 'you love simit with çay, ferry rides across the Bosphorus and dozing in the sun', '"Aferin!", "Harika!" or "Kolay gelsin!"') }
  };
  S.Docenten = DOCENTEN;
  /* De docent van deze cursus; null = Profe Lupe (Spaans, of een taal zonder eigen docent). */
  S.Docent = (S.course && S.course.target !== 'es' && DOCENTEN[S.course.target]) || null;
  /* «Lupe» in een schermtekst wordt de naam van de docent van deze cursus (en «Profe Lupe» haar aanspreekvorm). */
  const D = S.Docent, gen = D && D.name + (/[aiouy]$/i.test(D.name) ? '’s' : 's');
  S.docentNaam = D ? s => (typeof s === 'string' && s.indexOf('Lupe') >= 0
    ? s.replace(/(Abuela |abuela )?Profe Lupe/g, (m, a) => a ? m : D.title).replace(/(Abuela |abuela )?\bLupe(['’]?s)?(?![A-Za-zÀ-ÿ])/g, (m, a, g) => a ? m : g ? gen : D.name) : s) : s => s;
})(window.SPT);
