/* Mijn leven: je personage woont steeds mooier naarmate je meer weet.
   Er is niets te kopen. De fase volgt vanzelf uit wat je kent, in ALLE talen van je profiel samen:
   elk woord of elke zin in je herhaling telt mee, 🌱 = 1 punt, 🌳 = 2, ⭐ = 3.
   Van rugzak en kampvuurtje, via tentje, hutje en casita, naar een hacienda; het vervoer groeit mee. */
(function (S) {
  'use strict';

  const STAGES = [
    { id: 'mochila', at: 0, home: 'Rugzak en kampvuur', ride: 'te voet', es: 'la mochila', en: 'the backpack', nl: 'de rugzak' },
    { id: 'tienda', at: 50, home: 'Tentje', ride: 'step', es: 'la tienda de campaña', en: 'the tent', nl: 'de tent' },
    { id: 'cabana', at: 175, home: 'Hutje met palmdak', ride: 'fiets', es: 'la cabaña', en: 'the cabin', nl: 'de hut' },
    { id: 'casita', at: 400, home: 'Casita', ride: 'scooter', es: 'la casita', en: 'the little house', nl: 'het huisje' },
    { id: 'jardin', at: 750, home: 'Huis met tuin', ride: 'autootje', es: 'la casa con jardín', en: 'the house with a garden', nl: 'het huis met tuin' },
    { id: 'playa', at: 1250, home: 'Huis aan zee', ride: 'busje', es: 'la casa en la playa', en: 'the beach house', nl: 'het strandhuis' },
    { id: 'hacienda', at: 2000, home: 'Hacienda', ride: 'vliegtuigje', es: 'la hacienda', en: 'the hacienda', nl: 'de hacienda' }
  ];

  /* Punten uit één herhalingsbak (srs-object van een cursus). Zelfde grenzen als SRS.status. */
  function score(srs) {
    const o = { learning: 0, known: 0, mastered: 0 };
    for (const k in srs || {}) { const i = srs[k].i || 0; o[i >= 21 ? 'mastered' : i >= 7 ? 'known' : 'learning']++; }
    o.points = o.learning + o.known * 2 + o.mastered * 3;
    return o;
  }
  /* Alle cursussen van het actieve profiel samen; de open cursus komt uit het geheugen (meest actueel). */
  function total() {
    const P = S.Profiles, cur = S.course && S.course.id;
    const ids = (P && P.active() && P.active().courses) || [cur];
    const sum = { learning: 0, known: 0, mastered: 0, points: 0, langs: 0 };
    ids.forEach(c => {
      let srs = null;
      if (c === cur) srs = S.Store.state.srs;
      else try { const d = JSON.parse(localStorage.getItem(P.storeKey(P.activeId(), c)) || 'null'); srs = d && d.srs; } catch (e) { srs = null; }
      if (!srs) return;
      const o = score(srs); if (o.points) sum.langs++;
      ['learning', 'known', 'mastered', 'points'].forEach(k => { sum[k] += o[k]; });
    });
    return sum;
  }
  function stageAt(points) { let i = 0; STAGES.forEach((s, n) => { if (points >= s.at) i = n; }); return i; }
  function now() {
    const t = total(), i = stageAt(t.points), next = STAGES[i + 1] || null;
    const from = STAGES[i].at, pct = next ? (t.points - from) / (next.at - from) : 1;
    return Object.assign(t, { i, stage: STAGES[i], next, left: next ? next.at - t.points : 0, pct: Math.max(0, Math.min(1, pct)) });
  }
  /* Woord voor de fase in de taal die je nu leert. */
  const word = st => st[(S.course && S.course.target) || 'es'] || st.es;

  /* ---------- tekeningen (viewBox 240×150, grond op y≈128) ---------- */
  let uid = 0;
  const G = (id, a, b, v) => `<linearGradient id="${id}" x1="0" y1="0" x2="${v ? 0 : 1}" y2="${v ? 1 : 0}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  const palm = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0C-2-20 2-44 8-62" fill="none" stroke="#9a6a3a" stroke-width="5" stroke-linecap="round"/><path d="M0 0C-2-20 2-44 8-62" fill="none" stroke="#c48a4e" stroke-width="2" stroke-dasharray="3 4" stroke-linecap="round"/>
    <g fill="#3fa65a"><path d="M8-62C-6-72-22-68-30-56C-16-62-4-60 8-62Z"/><path d="M8-62C22-74 38-70 46-58C32-64 20-62 8-62Z"/><path d="M8-62C0-80 10-90 22-92C14-82 10-72 8-62Z"/><path d="M8-62C-10-64-20-52-22-40C-12-52-2-58 8-62Z" fill="#2f8a4a"/><path d="M8-62C26-62 34-50 36-38C26-50 16-58 8-62Z" fill="#2f8a4a"/></g>
    <circle cx="6" cy="-60" r="3" fill="#7a4a22"/><circle cx="11" cy="-59" r="3" fill="#6a3e1c"/></g>`;
  const bush = (x, y, c = '#4fb466') => `<g><circle cx="${x}" cy="${y}" r="8" fill="${c}"/><circle cx="${x + 9}" cy="${y - 3}" r="9" fill="${c}"/><circle cx="${x + 18}" cy="${y}" r="7" fill="${c}"/><circle cx="${x + 6}" cy="${y - 6}" r="2" fill="#f0789f"/><circle cx="${x + 14}" cy="${y - 7}" r="2" fill="#ffd23f"/></g>`;
  const tuft = (x, y) => `<path d="M${x} ${y}l-2-6M${x} ${y}l1-7M${x} ${y}l4-5" stroke="#3c9a52" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;

  const HOMES = {
    mochila: u => `${G(u + 'bp', '#f6a04a', '#d9681a', true)}
      <ellipse cx="146" cy="126" rx="26" ry="9" fill="#9a8f84"/><path d="M122 126C124 112 136 106 148 108C162 110 170 118 170 126Z" fill="#b6aca0"/><path d="M128 120C134 114 146 112 156 114" stroke="#fff" stroke-width="2" opacity=".35" fill="none" stroke-linecap="round"/>
      <g transform="rotate(-6 100 100)"><rect x="80" y="70" width="42" height="56" rx="12" fill="url(#${u}bp)"/><path d="M80 86C80 70 122 70 122 86V92H80Z" fill="#c4561a"/><rect x="88" y="98" width="26" height="20" rx="6" fill="#e2803a"/><path d="M92 104h18" stroke="#c4561a" stroke-width="2" stroke-linecap="round"/><rect x="98" y="88" width="6" height="8" rx="2" fill="#ffd23f"/>
      <path d="M84 72C86 62 116 62 118 72" stroke="#7a3a12" stroke-width="3" fill="none"/><rect x="76" y="62" width="50" height="9" rx="4.5" fill="#2fa79a"/><path d="M78 66.5h46" stroke="#1d7a70" stroke-width="1.5" stroke-dasharray="4 3"/></g>
      <g transform="translate(176 124)"><path d="M-16 2 16-4M-16-4 16 2" stroke="#7a4a22" stroke-width="5" stroke-linecap="round"/><path d="M0-30C10-18 12-8 6 0H-6C-12-8-8-18 0-30Z" fill="#ff8a1e"/><path d="M0-18C5-10 6-5 3 0H-3C-6-5-4-10 0-18Z" fill="#ffd23f"/><circle cx="-10" cy="-34" r="1.6" fill="#ffb03f" opacity=".8"/><circle cx="9" cy="-40" r="1.2" fill="#ffb03f" opacity=".6"/></g>`,
    tienda: u => `${G(u + 'tt', '#3fc0b0', '#1d8a7e')}
      <path d="M58 128 104 58 150 128Z" fill="url(#${u}tt)"/><path d="M104 58 150 128H170L118 58Z" fill="#17716a"/><path d="M104 58 118 58" stroke="#17716a" stroke-width="2"/>
      <path d="M90 128 104 84 118 128Z" fill="#0f4d48"/><path d="M104 84 118 128H112L104 96Z" fill="#ffd23f" opacity=".85"/>
      <path d="M104 58V40" stroke="#6a4a2a" stroke-width="2.4"/><path d="M104 40l16 5-16 5Z" fill="#e8344e"/>
      <path d="M58 128 40 132M170 128 192 132" stroke="#c9bba8" stroke-width="1.4"/><circle cx="40" cy="132" r="1.8" fill="#8a7a66"/><circle cx="192" cy="132" r="1.8" fill="#8a7a66"/>
      <path d="M70 108 104 58" stroke="#fff" stroke-width="2" opacity=".25"/>${bush(160, 124)}`,
    cabana: u => `${G(u + 'wd', '#c9925a', '#9a6436', true)}${G(u + 'th', '#f2cf7a', '#c99a3e', true)}
      ${palm(184, 128, .95)}
      <path d="M62 92H150V128H62Z" fill="url(#${u}wd)"/><path d="M62 102H150M62 112H150M62 122H150" stroke="#7a4a22" stroke-width="1.4" opacity=".45"/>
      <path d="M48 96 106 54 164 96Z" fill="url(#${u}th)"/><path d="M48 96 106 54 164 96" fill="none" stroke="#b07e2e" stroke-width="2"/><path d="M58 96l6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8 6 8 6-8" fill="#e2b45a" stroke="#b07e2e" stroke-width="1"/>
      <path d="M72 84 106 60M86 88 106 72M140 84 106 60M126 88 106 72" stroke="#b07e2e" stroke-width="1.2" opacity=".6"/>
      <rect x="96" y="104" width="20" height="24" rx="2" fill="#5a3418"/><circle cx="112" cy="117" r="1.4" fill="#ffd23f"/>
      <rect x="70" y="104" width="16" height="12" rx="2" fill="#8fd4ff"/><path d="M78 104v12M70 110h16" stroke="#7a4a22" stroke-width="1.6"/>
      <rect x="126" y="104" width="16" height="12" rx="2" fill="#8fd4ff"/><path d="M134 104v12M126 110h16" stroke="#7a4a22" stroke-width="1.6"/>`,
    casita: u => `${G(u + 'wl', '#ffb0c8', '#f07aa0', true)}${G(u + 'rf', '#e8714a', '#b8452a', true)}
      <rect x="60" y="80" width="92" height="48" fill="url(#${u}wl)"/><path d="M60 122H152V128H60Z" fill="#d35a84" opacity=".5"/>
      <path d="M52 82 106 50 160 82Z" fill="url(#${u}rf)"/><path d="M52 82H160" stroke="#8e3020" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 76h84M74 70h64M86 63h40M96 57h20" stroke="#8e3020" stroke-width="1.2" opacity=".45" stroke-dasharray="5 2"/>
      <rect x="96" y="98" width="22" height="30" rx="11" fill="#2f6fb5"/><path d="M98 112h18" stroke="#1f4f8e" stroke-width="1.5"/><circle cx="114" cy="114" r="1.6" fill="#ffd23f"/>
      <rect x="68" y="94" width="18" height="16" rx="3" fill="#bfe8ff"/><path d="M77 94v16M68 102h18" stroke="#fff" stroke-width="1.6"/><rect x="66" y="110" width="22" height="5" rx="2" fill="#7a4a22"/><circle cx="70" cy="109" r="2.4" fill="#e8344e"/><circle cx="77" cy="108" r="2.4" fill="#ffd23f"/><circle cx="84" cy="109" r="2.4" fill="#e8344e"/>
      <rect x="128" y="94" width="18" height="16" rx="3" fill="#bfe8ff"/><path d="M137 94v16M128 102h18" stroke="#fff" stroke-width="1.6"/><rect x="126" y="110" width="22" height="5" rx="2" fill="#7a4a22"/><circle cx="131" cy="109" r="2.4" fill="#9a6ad8"/><circle cx="138" cy="108" r="2.4" fill="#ffd23f"/><circle cx="145" cy="109" r="2.4" fill="#9a6ad8"/>
      <path d="M152 92C162 86 168 96 162 104C170 110 164 122 156 120" fill="none" stroke="#3a9d5d" stroke-width="2.5"/><circle cx="160" cy="96" r="3" fill="#d14f8a"/><circle cx="164" cy="108" r="3" fill="#d14f8a"/><circle cx="158" cy="118" r="2.6" fill="#f0789f"/>
      ${palm(42, 128, .7)}`,
    jardin: u => `${G(u + 'wl', '#ffe08a', '#f2bc4a', true)}${G(u + 'rf', '#e85a4a', '#b5352a', true)}
      <rect x="54" y="66" width="100" height="62" fill="url(#${u}wl)"/><rect x="128" y="34" width="10" height="20" fill="#9a4a3a"/>
      <path d="M44 68 104 32 164 68Z" fill="url(#${u}rf)"/><path d="M44 68H164" stroke="#8e2a20" stroke-width="3" stroke-linecap="round"/>
      <rect x="94" y="96" width="20" height="32" rx="2" fill="#7a4a22"/><circle cx="110" cy="113" r="1.6" fill="#ffd23f"/><path d="M90 96h28" stroke="#c4561a" stroke-width="3"/>
      ${[66, 128].map(x => `<rect x="${x}" y="74" width="16" height="16" rx="2" fill="#bfe8ff"/><path d="M${x + 8} 74v16M${x} 82h16" stroke="#fff" stroke-width="1.6"/><path d="M${x - 2} 74h20" stroke="#c4561a" stroke-width="2"/>`).join('')}
      ${[66, 128].map(x => `<rect x="${x}" y="100" width="16" height="14" rx="2" fill="#bfe8ff"/><path d="M${x + 8} 100v14" stroke="#fff" stroke-width="1.6"/><path d="M${x - 2} 100h20" stroke="#c4561a" stroke-width="2"/>`).join('')}
      <g fill="#fff" stroke="#d6cbbd" stroke-width=".8">${[20, 30, 40, 168, 178, 188, 198].map(x => `<path d="M${x} 130V114L${x + 3} 110 ${x + 6} 114V130Z"/>`).join('')}</g><path d="M18 120H48M166 120H206" stroke="#fff" stroke-width="2.5"/>
      ${bush(158, 126, '#3f9e58')}<g transform="translate(206 128)"><path d="M0 0V-30" stroke="#8a5a30" stroke-width="5"/><circle cx="0" cy="-42" r="18" fill="#4fb466"/><circle cx="-8" cy="-46" r="3" fill="#ff8a1e"/><circle cx="7" cy="-38" r="3" fill="#ff8a1e"/><circle cx="4" cy="-52" r="3" fill="#ff8a1e"/></g>`,
    playa: u => `${G(u + 'sea', '#7fd6f0', '#2f9fd0', true)}${G(u + 'wl', '#ffffff', '#e6eef4', true)}
      <path d="M12 128C8 116 14 106 30 104C80 98 160 98 210 104C226 106 232 116 228 128Z" fill="url(#${u}sea)" opacity=".9"/><path d="M20 112c8-3 16 3 24 0s16-3 24 0M150 110c8-3 16 3 24 0s16-3 24 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>
      <circle cx="210" cy="40" r="14" fill="#ffd23f" opacity=".9"/>
      <rect x="62" y="74" width="88" height="54" fill="url(#${u}wl)"/><path d="M52 76 106 46 160 76Z" fill="#2f7fd0"/><path d="M52 76H160" stroke="#1f5a9e" stroke-width="3" stroke-linecap="round"/>
      <rect x="96" y="98" width="20" height="30" rx="3" fill="#2fa79a"/><circle cx="112" cy="114" r="1.6" fill="#ffd23f"/>
      ${[70, 128].map(x => `<rect x="${x}" y="88" width="16" height="16" rx="8" fill="#8fd4ff"/><path d="M${x} 96h16" stroke="#fff" stroke-width="1.6"/><path d="M${x - 2} 106h20" stroke="#2f7fd0" stroke-width="2.5"/>`).join('')}
      <path d="M58 128H154" stroke="#c9b48a" stroke-width="4"/><path d="M60 118H152" stroke="#fff" stroke-width="1.5" opacity=".7"/>
      ${palm(26, 130, .85)}`,
    hacienda: u => `${G(u + 'wl', '#fff4e0', '#f2dcb8', true)}${G(u + 'rf', '#e2703a', '#b04a22', true)}
      <rect x="22" y="78" width="164" height="50" fill="url(#${u}wl)"/><path d="M14 80 34 64H174L194 80Z" fill="url(#${u}rf)"/><path d="M14 80H194" stroke="#8e3a1a" stroke-width="3" stroke-linecap="round"/>
      <rect x="140" y="36" width="30" height="44" fill="url(#${u}wl)"/><path d="M136 38 155 20 174 38Z" fill="url(#${u}rf)"/><path d="M148 62V48A7 7 0 0 1 162 48V62Z" fill="#7a4a22"/><circle cx="155" cy="54" r="4" fill="#ffd23f"/><path d="M155 20V12" stroke="#7a4a22" stroke-width="1.6"/><path d="M151 14h8" stroke="#7a4a22" stroke-width="1.6"/>
      ${[30, 58, 86, 114].map(x => `<path d="M${x} 128V104A12 12 0 0 1 ${x + 24} 104V128Z" fill="#8a5a30" opacity=".85"/><path d="M${x} 128V104A12 12 0 0 1 ${x + 24} 104V128" fill="none" stroke="#e8c79a" stroke-width="2"/>`).join('')}
      <path d="M22 92H186" stroke="#e2c49a" stroke-width="2"/>${[34, 62, 90, 118].map(x => `<rect x="${x}" y="82" width="14" height="8" rx="2" fill="#8fd4ff"/>`).join('')}
      <path d="M22 78C30 70 40 76 46 70C52 78 62 72 66 78" fill="none" stroke="#3a9d5d" stroke-width="3"/>${[26, 34, 44, 54, 62].map((x, i) => `<circle cx="${x}" cy="${74 + (i % 2) * 3}" r="2.6" fill="#d14f8a"/>`).join('')}
      <g transform="translate(206 128)"><ellipse cx="0" cy="-2" rx="16" ry="5" fill="#bfa98a"/><path d="M-14-2V-10H14V-2" fill="#d8c6a8"/><ellipse cx="0" cy="-10" rx="14" ry="4" fill="#7fd6f0"/><path d="M0-10V-26" stroke="#d8c6a8" stroke-width="3"/><path d="M0-26C-6-24-8-18-10-12M0-26C6-24 8-18 10-12" stroke="#7fd6f0" stroke-width="1.6" fill="none"/></g>`
  };
  const RIDES = {
    mochila: () => '',
    tienda: () => `<g transform="translate(196 128)"><circle cx="-14" cy="-4" r="4.5" fill="#33333d"/><circle cx="16" cy="-4" r="4.5" fill="#33333d"/><path d="M-14-8H14L18-8" stroke="#e8344e" stroke-width="4" stroke-linecap="round"/><path d="M12-8 8-40" stroke="#9a9aa6" stroke-width="3" stroke-linecap="round"/><path d="M0-40H16" stroke="#33333d" stroke-width="3.4" stroke-linecap="round"/></g>`,
    cabana: () => `<g transform="translate(222 128)" fill="none" stroke-linecap="round"><circle cx="-26" cy="-11" r="10" stroke="#33333d" stroke-width="3"/><circle cx="6" cy="-11" r="10" stroke="#33333d" stroke-width="3"/><path d="M-26-11-14-30H2L6-11M-14-30-8-11H6M-8-11-10-30" stroke="#2fa79a" stroke-width="3"/><path d="M-16-34H-10" stroke="#33333d" stroke-width="3"/><path d="M2-30 0-38H6" stroke="#33333d" stroke-width="2.6"/><path d="M4-34H14V-28H6" stroke="#c48a4e" stroke-width="2.4"/></g>`,
    casita: () => `<g transform="translate(212 128)"><circle cx="-18" cy="-7" r="7" fill="#33333d"/><circle cx="16" cy="-7" r="7" fill="#33333d"/><circle cx="-18" cy="-7" r="2.5" fill="#bbb"/><circle cx="16" cy="-7" r="2.5" fill="#bbb"/>
      <path d="M-24-12C-24-24-14-28-4-26L0-12Z" fill="#7fc6e8"/><path d="M-6-12H20C24-12 24-20 18-22L10-24 8-42" fill="#7fc6e8" stroke="#5aa8cc" stroke-width="1"/><path d="M8-42H16" stroke="#33333d" stroke-width="3" stroke-linecap="round"/><path d="M-14-28H0" stroke="#7a4a22" stroke-width="5" stroke-linecap="round"/><circle cx="12" cy="-34" r="2.6" fill="#ffd23f"/></g>`,
    jardin: () => `<g transform="translate(210 128)"><path d="M-30-10C-30-22-22-36 0-36C18-36 26-26 28-12V-6H-30Z" fill="#3a9d5d"/><path d="M-20-14C-20-24-12-32 0-32C10-32 16-24 18-14Z" fill="#bfe8ff"/><path d="M0-32V-14" stroke="#3a9d5d" stroke-width="2.4"/><circle cx="-18" cy="-6" r="7" fill="#33333d"/><circle cx="16" cy="-6" r="7" fill="#33333d"/><circle cx="-18" cy="-6" r="2.5" fill="#ccc"/><circle cx="16" cy="-6" r="2.5" fill="#ccc"/><circle cx="25" cy="-16" r="2.2" fill="#ffd23f"/></g>`,
    playa: () => `<g transform="translate(206 128)"><rect x="-30" y="-40" width="58" height="34" rx="9" fill="#ff8a1e"/><path d="M-30-24H28V-14C28-10 26-6 22-6H-26C-28-6-30-8-30-12Z" fill="#fff4e6"/><rect x="-24" y="-35" width="12" height="9" rx="2" fill="#bfe8ff"/><rect x="-8" y="-35" width="12" height="9" rx="2" fill="#bfe8ff"/><rect x="8" y="-35" width="14" height="9" rx="2" fill="#bfe8ff"/><path d="M-2-38V-24" stroke="#ff8a1e" stroke-width="2"/><circle cx="-16" cy="-6" r="6.5" fill="#33333d"/><circle cx="16" cy="-6" r="6.5" fill="#33333d"/><path d="M-26-46H22" stroke="#7a4a22" stroke-width="2.5" stroke-linecap="round"/><rect x="-22" y="-52" width="34" height="5" rx="2" fill="#2fa79a"/></g>`,
    hacienda: () => `<g transform="translate(205 34) rotate(-8)"><path d="M-26 0C-26-6-16-8 0-8C16-8 26-4 28 0C26 4 16 6 0 6C-16 6-26 4-26 0Z" fill="#e8344e"/><path d="M-6-2-14-22H-6L6-2Z" fill="#fff"/><path d="M-6 2-14 20H-6L6 2Z" fill="#f2f2f2"/><path d="M-24-2-30-12H-24L-18-2Z" fill="#fff"/><circle cx="18" cy="-1" r="3" fill="#bfe8ff"/><path d="M28-4V4" stroke="#33333d" stroke-width="2"/></g>`
  };

  /* De hele scène als svg-tekst: grond, huis, vervoer. opt.mini = zonder vervoer-bijzaken, kleiner. */
  function scene(i, opt = {}) {
    const st = STAGES[i] || STAGES[0], u = 'lf' + (++uid);
    const ground = `<ellipse cx="120" cy="132" rx="116" ry="12" fill="url(#${u}gr)"/>${[30, 58, 150, 214].map(x => tuft(x, 134)).join('')}`;
    return `<svg class="life-svg" viewBox="0 0 240 150" ${opt.w ? `width="${opt.w}" height="${Math.round(opt.w * 150 / 240)}"` : ''} role="img" aria-label="${st.home}${st.ride !== 'te voet' ? ', ' + st.ride : ''}" xmlns="http://www.w3.org/2000/svg">
  <defs>${G(u + 'gr', '#a8dc8a', '#6cbf6a', true)}</defs>${ground}${HOMES[st.id](u)}${opt.noRide ? '' : RIDES[st.id]()}</svg>`;
  }

  /* Je personage is van jou, niet van één taal: nog niets gekozen in deze cursus? Neem het over uit een andere cursus van je profiel. */
  function adoptMe(st) {
    if (st.me !== undefined) return false;
    const P = S.Profiles, cur = S.course && S.course.id; if (!P || !P.active()) return false;
    for (const c of P.active().courses || []) {
      if (c === cur) continue;
      try { const d = JSON.parse(localStorage.getItem(P.storeKey(P.activeId(), c)) || 'null'); if (d && d.me !== undefined) { st.me = d.me; if (d.meLook) st.meLook = d.meLook; return true; } } catch (e) { /* negeer */ }
    }
    return false;
  }
  /* Nieuwe fase sinds de vorige keer? Eén keer per profiel vieren (niet per taal). */
  function fresh(i) {
    const k = 'spt.life.' + (S.Profiles ? S.Profiles.activeId() : 'main');
    let seen = null; try { seen = localStorage.getItem(k); } catch (e) { /* negeer */ }
    try { if (seen == null || +seen < i) localStorage.setItem(k, String(i)); } catch (e) { /* negeer */ }
    return seen != null && +seen < i;
  }

  S.Life = { STAGES, score, total, now, stageAt, scene, word, adoptMe, fresh };
})(window.SPT = window.SPT || {});
