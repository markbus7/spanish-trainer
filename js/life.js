/* Jouw leven: je personage leeft in een wereld die vanzelf meegroeit met wat je weet.
   Er is niets te kopen. Elke stap volgt uit wat je kent, in ALLE talen van je profiel samen:
   elk woord of elke zin in je herhaling telt mee, 🌱 = 1 punt, 🌳 = 2, ⭐ = 3.
   Een lange weg: van een rugzak bij het kampvuur, via tentje, hutje, casita en strandhuis, naar een hacienda en je eigen eiland.
   Onderweg komt er steeds iets bij (hangmat, gitaar, fiets, moestuin, hond, barbecue, surfplank, velero, paard ...).
   Scènes: je ziet je personage leven, bezig met wat er al is (kampvuur, lezen in de hangmat, fietsen, tuinieren, slapen ...). */
(function (S) {
  'use strict';

  /* De weg. home = nieuw onderkomen (en landschap), add = er komt iets bij, ride = nieuw vervoer. */
  const STEPS = [
    { at: 0, home: 'mochila', name: 'Rugzak', icon: '🎒', es: 'la mochila', en: 'the backpack', nl: 'de rugzak' },
    { at: 20, add: 'fire', name: 'Kampvuur', icon: '🔥', es: 'la fogata', en: 'the campfire', nl: 'het kampvuur' },
    { at: 50, home: 'tienda', name: 'Tentje', icon: '⛺', es: 'la tienda de campaña', en: 'the tent', nl: 'de tent' },
    { at: 90, add: 'hammock', name: 'Hangmat', icon: '🌿', es: 'la hamaca', en: 'the hammock', nl: 'de hangmat' },
    { at: 140, add: 'guitar', name: 'Gitaar', icon: '🎸', es: 'la guitarra', en: 'the guitar', nl: 'de gitaar' },
    { at: 190, ride: 'step', name: 'Step', icon: '🛴', es: 'el patín del diablo', en: 'the scooter', nl: 'de step' },
    { at: 250, home: 'cabana', name: 'Hutje met palmdak', icon: '🛖', es: 'la cabaña', en: 'the cabin', nl: 'de hut' },
    { at: 330, ride: 'bike', name: 'Fiets', icon: '🚲', es: 'la bicicleta', en: 'the bicycle', nl: 'de fiets' },
    { at: 420, add: 'garden', name: 'Moestuin', icon: '🌻', es: 'el huerto', en: 'the vegetable garden', nl: 'de moestuin' },
    { at: 520, home: 'casita', name: 'Casita in het dorp', icon: '🏡', es: 'la casita', en: 'the little house', nl: 'het huisje' },
    { at: 640, add: 'dog', name: 'Hondje Coco', icon: '🐶', es: 'el perrito', en: 'the puppy', nl: 'het hondje' },
    { at: 770, ride: 'moto', name: 'Scooter', icon: '🛵', es: 'la motoneta', en: 'the moped', nl: 'de scooter' },
    { at: 920, home: 'jardin', name: 'Huis met tuin', icon: '🏠', es: 'la casa con jardín', en: 'the house with a garden', nl: 'het huis met tuin' },
    { at: 1090, add: 'grill', name: 'Barbecue', icon: '🍖', es: 'la parrilla', en: 'the grill', nl: 'de barbecue' },
    { at: 1280, ride: 'car', name: 'Autootje', icon: '🚗', es: 'el carro', en: 'the car', nl: 'de auto' },
    { at: 1500, home: 'playa', name: 'Huis aan zee', icon: '🏖️', es: 'la casa en la playa', en: 'the beach house', nl: 'het strandhuis' },
    { at: 1750, add: 'surf', name: 'Surfplank', icon: '🏄', es: 'la tabla de surf', en: 'the surfboard', nl: 'de surfplank' },
    { at: 2030, ride: 'van', name: 'Busje', icon: '🚐', es: 'la combi', en: 'the van', nl: 'het busje' },
    { at: 2350, add: 'boat', name: 'Zeilbootje', icon: '⛵', es: 'el velero', en: 'the sailboat', nl: 'de zeilboot' },
    { at: 2700, home: 'hacienda', name: 'Hacienda', icon: '🌵', es: 'la hacienda', en: 'the ranch', nl: 'de hacienda' },
    { at: 3100, add: 'horse', name: 'Paard', icon: '🐴', es: 'el caballo', en: 'the horse', nl: 'het paard' },
    { at: 3550, add: 'fountain', name: 'Fontein', icon: '⛲', es: 'la fuente', en: 'the fountain', nl: 'de fontein' },
    { at: 4050, ride: 'plane', name: 'Vliegtuigje', icon: '✈️', es: 'la avioneta', en: 'the small plane', nl: 'het vliegtuigje' },
    { at: 4600, home: 'isla', name: 'Je eigen eiland', icon: '🏝️', es: 'la isla', en: 'the island', nl: 'het eiland' },
    { at: 5300, add: 'lighthouse', name: 'Vuurtoren', icon: '🗼', es: 'el faro', en: 'the lighthouse', nl: 'de vuurtoren' },
    { at: 6100, add: 'fireworks', name: 'Groot feest', icon: '🎆', es: 'la fiesta', en: 'the party', nl: 'het feest' }
  ];
  const BIOME = { mochila: 'bosque', tienda: 'bosque', cabana: 'bosque', casita: 'pueblo', jardin: 'pueblo', playa: 'mar', hacienda: 'campo', isla: 'isla' };
  /* Waar iets kan staan: een kampvuur hoort bij kamperen, een boot bij het water. */
  const FITS = { fire: ['bosque'], surf: ['mar', 'isla'], boat: ['mar', 'isla'], garden: ['bosque', 'pueblo', 'campo'], horse: ['campo'], fountain: ['campo'], lighthouse: ['isla'] };

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
  function stepAt(points) { let i = 0; STEPS.forEach((s, n) => { if (points >= s.at) i = n; }); return i; }
  /* Wat je hebt bij stap i: onderkomen, landschap, spullen, vervoer. */
  function world(i) {
    let home = 'mochila', ride = null, plane = false; const items = new Set();
    STEPS.slice(0, i + 1).forEach(s => { if (s.home) home = s.home; if (s.add) items.add(s.add); if (s.ride === 'plane') plane = true; else if (s.ride) ride = s.ride; });
    const biome = BIOME[home];
    [...items].forEach(k => { if (FITS[k] && !FITS[k].includes(biome)) items.delete(k); });
    return { home, biome, ride, plane, items, bike: STEPS.slice(0, i + 1).some(s => s.ride === 'bike') };
  }
  function now() {
    const t = total(), i = stepAt(t.points), next = STEPS[i + 1] || null;
    const from = STEPS[i].at, pct = next ? (t.points - from) / (next.at - from) : 1;
    return Object.assign(t, { i, step: STEPS[i], next, left: next ? next.at - t.points : 0, pct: Math.max(0, Math.min(1, pct)), world: world(i) });
  }
  /* Woord voor de stap in de taal die je nu leert. */
  const word = st => st[(S.course && S.course.target) || 'es'] || st.es;

  /* ---------- tekeningen (huizen in eigen maat 240×150, grond op y≈128; in de wereld op x 210, y 192) ---------- */
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
`,
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
      <path d="M22 78C30 70 40 76 46 70C52 78 62 72 66 78" fill="none" stroke="#3a9d5d" stroke-width="3"/>${[26, 34, 44, 54, 62].map((x, i) => `<circle cx="${x}" cy="${74 + (i % 2) * 3}" r="2.6" fill="#d14f8a"/>`).join('')}`
  };
  const RIDES = {
    step: () => `<g transform="translate(196 128)"><circle cx="-14" cy="-4" r="4.5" fill="#33333d"/><circle cx="16" cy="-4" r="4.5" fill="#33333d"/><path d="M-14-8H14L18-8" stroke="#e8344e" stroke-width="4" stroke-linecap="round"/><path d="M12-8 8-40" stroke="#9a9aa6" stroke-width="3" stroke-linecap="round"/><path d="M0-40H16" stroke="#33333d" stroke-width="3.4" stroke-linecap="round"/></g>`,
    bike: () => `<g transform="translate(222 128)" fill="none" stroke-linecap="round"><circle cx="-26" cy="-11" r="10" stroke="#33333d" stroke-width="3"/><circle cx="6" cy="-11" r="10" stroke="#33333d" stroke-width="3"/><path d="M-26-11-14-30H2L6-11M-14-30-8-11H6M-8-11-10-30" stroke="#2fa79a" stroke-width="3"/><path d="M-16-34H-10" stroke="#33333d" stroke-width="3"/><path d="M2-30 0-38H6" stroke="#33333d" stroke-width="2.6"/><path d="M4-34H14V-28H6" stroke="#c48a4e" stroke-width="2.4"/></g>`,
    moto: () => `<g transform="translate(212 128)"><circle cx="-18" cy="-7" r="7" fill="#33333d"/><circle cx="16" cy="-7" r="7" fill="#33333d"/><circle cx="-18" cy="-7" r="2.5" fill="#bbb"/><circle cx="16" cy="-7" r="2.5" fill="#bbb"/>
      <path d="M-24-12C-24-24-14-28-4-26L0-12Z" fill="#7fc6e8"/><path d="M-6-12H20C24-12 24-20 18-22L10-24 8-42" fill="#7fc6e8" stroke="#5aa8cc" stroke-width="1"/><path d="M8-42H16" stroke="#33333d" stroke-width="3" stroke-linecap="round"/><path d="M-14-28H0" stroke="#7a4a22" stroke-width="5" stroke-linecap="round"/><circle cx="12" cy="-34" r="2.6" fill="#ffd23f"/></g>`,
    car: () => `<g transform="translate(210 128)"><path d="M-30-10C-30-22-22-36 0-36C18-36 26-26 28-12V-6H-30Z" fill="#3a9d5d"/><path d="M-20-14C-20-24-12-32 0-32C10-32 16-24 18-14Z" fill="#bfe8ff"/><path d="M0-32V-14" stroke="#3a9d5d" stroke-width="2.4"/><circle cx="-18" cy="-6" r="7" fill="#33333d"/><circle cx="16" cy="-6" r="7" fill="#33333d"/><circle cx="-18" cy="-6" r="2.5" fill="#ccc"/><circle cx="16" cy="-6" r="2.5" fill="#ccc"/><circle cx="25" cy="-16" r="2.2" fill="#ffd23f"/></g>`,
    van: () => `<g transform="translate(206 128)"><rect x="-30" y="-40" width="58" height="34" rx="9" fill="#ff8a1e"/><path d="M-30-24H28V-14C28-10 26-6 22-6H-26C-28-6-30-8-30-12Z" fill="#fff4e6"/><rect x="-24" y="-35" width="12" height="9" rx="2" fill="#bfe8ff"/><rect x="-8" y="-35" width="12" height="9" rx="2" fill="#bfe8ff"/><rect x="8" y="-35" width="14" height="9" rx="2" fill="#bfe8ff"/><path d="M-2-38V-24" stroke="#ff8a1e" stroke-width="2"/><circle cx="-16" cy="-6" r="6.5" fill="#33333d"/><circle cx="16" cy="-6" r="6.5" fill="#33333d"/><path d="M-26-46H22" stroke="#7a4a22" stroke-width="2.5" stroke-linecap="round"/><rect x="-22" y="-52" width="34" height="5" rx="2" fill="#2fa79a"/></g>`,
    plane: () => `<g transform="translate(205 34) rotate(-8)"><path d="M-26 0C-26-6-16-8 0-8C16-8 26-4 28 0C26 4 16 6 0 6C-16 6-26 4-26 0Z" fill="#e8344e"/><path d="M-6-2-14-22H-6L6-2Z" fill="#fff"/><path d="M-6 2-14 20H-6L6 2Z" fill="#f2f2f2"/><path d="M-24-2-30-12H-24L-18-2Z" fill="#fff"/><circle cx="18" cy="-1" r="3" fill="#bfe8ff"/><path d="M28-4V4" stroke="#33333d" stroke-width="2"/></g>`
  };

  /* Je eigen eiland: een witte villa met houten accenten en grote ramen (zelfde maat als de andere huizen). */
  HOMES.isla = u => `${G(u + 'wl', '#ffffff', '#e8eef2', true)}${G(u + 'wd', '#d9a066', '#a8703e', true)}
      <rect x="40" y="88" width="132" height="40" fill="url(#${u}wl)"/><rect x="70" y="58" width="84" height="32" fill="url(#${u}wl)"/>
      <path d="M34 88H178" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/><path d="M64 58H160" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/>
      <rect x="134" y="62" width="16" height="26" fill="url(#${u}wd)"/><rect x="44" y="92" width="22" height="36" fill="url(#${u}wd)"/>
      <rect x="76" y="64" width="50" height="20" rx="2" fill="#8fd4ff"/><path d="M92 64v20M109 64v20" stroke="#fff" stroke-width="1.5"/>
      <rect x="74" y="96" width="56" height="26" rx="2" fill="#8fd4ff"/><path d="M93 96v26M111 96v26" stroke="#fff" stroke-width="1.5"/>
      <rect x="140" y="98" width="20" height="30" rx="2" fill="#7a5a3a"/><circle cx="156" cy="114" r="1.6" fill="#ffd23f"/>
      <path d="M70 58V52H154V58" fill="none" stroke="#c9d4dc" stroke-width="2"/><path d="M72 52v6M84 52v6M96 52v6M108 52v6M120 52v6M132 52v6M144 52v6" stroke="#c9d4dc" stroke-width="1.2"/>
      <rect x="20" y="122" width="34" height="8" rx="3" fill="#7fd6f0" stroke="#fff" stroke-width="2"/>
      ${palm(186, 130, .9)}${palm(28, 128, .75)}`;

  /* ---------- landschap ---------- */
  const SKY = {
    dawn: ['#a8c8f0', '#ffd2a8'], day: ['#6fc0f0', '#d8f0ff'], dusk: ['#5a4a9a', '#ff9a6a'], night: ['#0c1434', '#2a3a6a']
  };
  const cloud = (x, y, s, d) => `<g class="lv-cloud" style="animation-duration:${d}s"><g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="22" ry="9" fill="#fff" opacity=".92"/><circle cx="-8" cy="-6" r="9" fill="#fff" opacity=".92"/><circle cx="7" cy="-8" r="11" fill="#fff" opacity=".92"/></g></g>`;
  function skyLayer(u, sky) {
    let out = `<rect width="400" height="240" fill="url(#${u}sky)"/>`;
    if (sky === 'night') {
      out += `<circle cx="326" cy="46" r="15" fill="#fff6d8"/><circle cx="332" cy="41" r="13" fill="url(#${u}sky)"/>`;
      for (let k = 0; k < 34; k++) { const x = (k * 97) % 390 + 5, y = (k * 53) % 120 + 6; out += `<circle class="lv-star" style="animation-delay:${(k % 7) * .4}s" cx="${x}" cy="${y}" r="${k % 3 ? 1 : 1.6}" fill="#fff"/>`; }
    } else if (sky === 'day') out += `<circle cx="330" cy="46" r="20" fill="#ffe27a"/><circle cx="330" cy="46" r="28" fill="#ffe27a" opacity=".25"/>` + cloud(60, 40, 1, 60) + cloud(220, 26, .8, 80) + cloud(140, 70, .6, 70);
    if (sky === 'day' || sky === 'dawn') out += `<g class="lv-birds">${[[0, 0], [14, 6], [26, -2]].map(([x, y]) => `<path d="M${x} ${y + 60}q4-4 8 0q4-4 8 0" stroke="#33333d" stroke-width="1.4" fill="none" opacity=".6"/>`).join('')}</g>`;
    if (sky === 'dawn') out += `<circle cx="70" cy="150" r="24" fill="#ffb86a" opacity=".9"/>` + cloud(260, 40, .9, 90);
    else out += `<circle cx="330" cy="150" r="26" fill="#ff7a4a" opacity=".85"/>` + cloud(90, 50, .8, 90);
    return out;
  }
  const pine = (x, y, s = 1, c = '#2f7a4a') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-34 12-10H6L14 4H-14L-6-10H-12Z" fill="${c}"/><rect x="-2" y="4" width="4" height="5" fill="#6a4a2a"/></g>`;
  const tree = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0V-26" stroke="#8a5a30" stroke-width="6" stroke-linecap="round"/><circle cx="0" cy="-38" r="17" fill="#4fae62"/><circle cx="-11" cy="-30" r="11" fill="#43a058"/><circle cx="11" cy="-31" r="11" fill="#43a058"/><circle cx="-5" cy="-44" r="6" fill="#6cc27a" opacity=".7"/></g>`;
  function land(u, biome) {
    const field = `<rect y="172" width="400" height="68" fill="url(#${u}gr)"/><path d="M200 192C190 210 176 226 170 240H236C232 226 222 210 212 192Z" fill="#e8d2a6" opacity=".75"/>`;
    const tufts = [16, 48, 140, 252, 290, 380, 330].map((x, k) => tuft(x, 200 + (k % 3) * 14)).join('');
    if (biome === 'bosque') return `<path d="M0 172 54 112 96 150 150 92 214 158 270 108 330 150 372 120 400 140V180H0Z" fill="#8fb0c8"/><path d="M150 92 166 108 158 106 150 112 142 104 136 106Z M270 108 282 120 274 118 266 124 260 118Z" fill="#fff" opacity=".8"/>`
      + [8, 26, 300, 322, 346, 368, 392].map((x, k) => pine(x, 174, .8 + (k % 3) * .15, k % 2 ? '#2f7a4a' : '#3a8a54')).join('') + field + tufts;
    if (biome === 'pueblo') {
      const hs = [[8, '#f2b6c4'], [34, '#ffe08a'], [58, '#9ad0f0'], [300, '#c9a8f0'], [326, '#ffb08a'], [352, '#b8e0a8'], [378, '#f2b6c4']];
      return `<path d="M0 170C60 150 120 160 200 154S340 146 400 160V180H0Z" fill="#a8cf8a"/>`
        + hs.map(([x, c]) => `<rect x="${x}" y="152" width="20" height="16" fill="${c}"/><path d="M${x - 2} 153 ${x + 10} 144 ${x + 22} 153Z" fill="#d8704a"/><rect x="${x + 7}" y="160" width="5" height="8" fill="#7a5a3a" opacity=".6"/>`).join('')
        + `<rect x="84" y="136" width="18" height="32" fill="#fff4e0"/><path d="M82 138a11 11 0 0 1 22 0Z" fill="#e8b84a"/><path d="M93 122v6M90 125h6" stroke="#7a5a3a" stroke-width="1.5"/>` + field + tufts;
    }
    if (biome === 'campo') return `<path d="M0 160 70 120 130 150 200 112 280 146 340 118 400 150V180H0Z" fill="#c8a88a" opacity=".8"/><path d="M0 176C80 160 160 170 240 162S360 158 400 166V186H0Z" fill="#c8d88a"/>`
      + [20, 50, 300, 330, 360, 390].map((x, k) => `<g transform="translate(${x} ${176 + (k % 2) * 4})" fill="#5aa88a"><path d="M0 0-8-14-1-3Z"/><path d="M0 0 8-14 1-3Z"/><path d="M0 0 0-16 2-2Z"/><path d="M0 0-12-8-1-1Z"/><path d="M0 0 12-8 1-1Z"/></g>`).join('')
      + `<rect y="176" width="400" height="64" fill="url(#${u}gr)" opacity=".9"/>` + tufts;
    if (biome === 'mar') return `<rect y="146" width="400" height="44" fill="url(#${u}sea)"/><path d="M0 146H400" stroke="#fff" stroke-width="1" opacity=".6"/>`
      + `<g class="lv-wave">${[20, 110, 230, 320].map(x => `<path d="M${x} 160c8-3 16 3 24 0s16-3 24 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>`).join('')}</g>`
      + `<path d="M0 184C100 176 300 178 400 184V240H0Z" fill="#f2dcaa"/><path d="M0 184C100 176 300 178 400 184" stroke="#fff" stroke-width="3" opacity=".7" fill="none"/>`
      + `<path d="M0 205C80 198 160 206 250 200" stroke="#e2c88e" stroke-width="2" fill="none" opacity=".6"/>`;
    // isla: zee rondom, eiland in het midden
    return `<rect y="140" width="400" height="100" fill="url(#${u}sea)"/><g class="lv-wave">${[10, 120, 300, 350].map((x, k) => `<path d="M${x} ${156 + (k % 2) * 60}c8-3 16 3 24 0s16-3 24 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>`).join('')}</g>`
      + `<ellipse cx="210" cy="206" rx="188" ry="34" fill="#f2dcaa"/><ellipse cx="210" cy="200" rx="160" ry="22" fill="url(#${u}gr)"/>`;
  }

  /* ---------- spullen ---------- */
  const fire = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="2" rx="26" ry="7" fill="#ffb03f" opacity=".25"/><path d="M-16 2 16-4M-16-4 16 2" stroke="#7a4a22" stroke-width="5" stroke-linecap="round"/>
    <g class="lv-flame"><path d="M0-30C10-18 12-8 6 0H-6C-12-8-8-18 0-30Z" fill="#ff8a1e"/><path d="M0-18C5-10 6-5 3 0H-3C-6-5-4-10 0-18Z" fill="#ffd23f"/></g>
    <circle class="lv-spark" cx="-4" cy="-30" r="1.6" fill="#ffb03f"/><circle class="lv-spark" style="animation-delay:.7s" cx="5" cy="-32" r="1.3" fill="#ffd23f"/><circle class="lv-spark" style="animation-delay:1.3s" cx="0" cy="-28" r="1.2" fill="#ff8a1e"/></g>`;
  const hammockTrees = biome => biome === 'mar' || biome === 'isla' ? palm(14, 196, .9) + palm(112, 194, .85) : tree(16, 196, .95) + tree(110, 194, .9);
  const hammockCloth = `<path d="M24 160 34 176M104 158 94 176" stroke="#c9a87a" stroke-width="1.5"/><path d="M34 176Q64 200 94 176Q64 190 34 176Z" fill="#e8344e"/><path d="M38 179Q64 197 90 179" stroke="#ffd23f" stroke-width="2.4" fill="none"/><path d="M42 183Q64 196 86 183" stroke="#2fa79a" stroke-width="2.4" fill="none"/>`;
  const garden = () => `<g transform="translate(12 204)"><rect x="0" y="0" width="86" height="22" rx="5" fill="#8a5a36"/><path d="M4 7H82M4 15H82" stroke="#6a4226" stroke-width="2"/>
    ${[10, 30, 50, 70].map((x, k) => `<g class="lv-sway" style="animation-delay:${k * .3}s"><path d="M${x} 6V-10" stroke="#3a9d5d" stroke-width="2.2"/><path d="M${x} -2c-6-2-8-6-6-8 4 0 6 4 6 8Zm0-4c6-2 8-6 6-8-4 0-6 4-6 8Z" fill="#4fb466"/>${k % 2 ? `<circle cx="${x}" cy="-12" r="5" fill="#ffd23f"/><circle cx="${x}" cy="-12" r="2.2" fill="#7a4a22"/>` : `<circle cx="${x - 3}" cy="-5" r="3" fill="#e8344e"/><circle cx="${x + 3}" cy="-8" r="3" fill="#e8344e"/>`}</g>`).join('')}
    ${[20, 40, 60, 78].map(x => `<ellipse cx="${x}" cy="15" rx="5" ry="3.5" fill="#7cc46a"/>`).join('')}</g>`;
  const dog = (x, y, cls = '', flip) => `<g transform="translate(${x} ${y})${flip ? ' scale(-1 1)' : ''}"><g class="${cls}">
    <g class="lv-wag" style="transform-origin:${11}px ${-14}px"><path d="M11-14C18-18 20-24 18-28" stroke="#c88a4a" stroke-width="4" stroke-linecap="round" fill="none"/></g>
    <ellipse cx="0" cy="-12" rx="13" ry="8" fill="#e0a868"/><ellipse cx="-2" cy="-9" rx="8" ry="4.5" fill="#fff4e2"/>
    <path d="M-8-6V0M-3-6V0M5-6V0M9-6V0" stroke="#d09858" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="-13" cy="-21" r="8" fill="#e0a868"/><ellipse cx="-19" cy="-18" rx="5" ry="3.6" fill="#fff4e2"/><circle cx="-23" cy="-19" r="1.8" fill="#2a1a12"/>
    <path d="M-10-27C-6-30-2-26-4-18" fill="#a86a32"/><ellipse cx="-8" cy="-22" rx="3.5" ry="7" transform="rotate(20 -8 -22)" fill="#a86a32"/><circle cx="-15" cy="-23" r="1.5" fill="#2a1a12"/><path d="M-16-16q2 2 4 0" stroke="#e8344e" stroke-width="1.6" fill="none"/>
    <path d="M-8-15h6" stroke="#e8344e" stroke-width="2.4"/></g></g>`;
  const grill = (x, y, smoke) => `<g transform="translate(${x} ${y})"><path d="M-10 0-4-14M10 0 4-14M0 0V-14" stroke="#33333d" stroke-width="2"/><path d="M-16-16H16C16-6 8-2 0-2S-16-6-16-16Z" fill="#33333d"/><path d="M-15-17H15" stroke="#9a9aa6" stroke-width="2.4"/>
    <ellipse cx="-6" cy="-19" rx="5" ry="2.4" fill="#a8502a"/><ellipse cx="6" cy="-19" rx="5" ry="2.4" fill="#c86a3a"/>${smoke ? puffs(0, -22) : ''}</g>`;
  const puffs = (x, y) => [0, 1, 2].map(k => `<circle class="lv-smoke" style="animation-delay:${k * 1.1}s" cx="${x}" cy="${y}" r="5" fill="#e8e4e0"/>`).join('');
  const surfboard = (x, y, r = -8) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0-58C8-46 9-10 6 0H-6C-9-10-8-46 0-58Z" fill="#ffd23f"/><path d="M0-56V-2" stroke="#e8344e" stroke-width="3"/><path d="M-2-10l-4 8M2-10l4 8" stroke="#2fa79a" stroke-width="2"/></g>`;
  const boat = (x, y, s = 1, crew = '') => `<g transform="translate(${x} ${y}) scale(${s})"><g class="lv-rock"><path d="M0-6V-56" stroke="#7a4a22" stroke-width="2.4"/><path d="M2-54C20-40 24-22 22-10H2Z" fill="#fff"/><path d="M-2-48C-14-36-16-22-15-12H-2Z" fill="#ffe2e8"/><path d="M0-56l10 3-10 3Z" fill="#e8344e"/>
    ${crew}<path d="M-28-8H30L22 6H-20Z" fill="#2f6fb5"/><path d="M-28-8H30" stroke="#fff" stroke-width="2"/></g></g>`;
  const horse = (x, y) => `<g transform="translate(${x} ${y})"><g class="lv-swish" style="transform-origin:28px -50px"><path d="M28-50C40-46 42-30 38-18C34-28 32-38 28-44Z" fill="#5a3418"/></g>
    <path d="M-20-6V-36M-12-6V-36M14-6V-36M22-6V-36" stroke="#a8683a" stroke-width="6" stroke-linecap="round"/><path d="M-20-2h0M-12-2h0M14-2h0M22-2h0" stroke="#3a2416" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="2" cy="-44" rx="30" ry="15" fill="#c27a42"/><path d="M-20-50C-26-62-30-74-32-82L-18-86C-14-74-10-62-6-54Z" fill="#c27a42"/>
    <path d="M-32-82C-42-82-48-76-46-70C-44-66-38-66-32-70L-20-74Z" fill="#c27a42"/><circle cx="-30" cy="-78" r="2" fill="#2a1a12"/><circle cx="-44" cy="-71" r="1.3" fill="#2a1a12"/>
    <path d="M-24-88l-2-8 6 5Z" fill="#a8683a"/><path d="M-20-88C-14-80-10-68-4-56" stroke="#5a3418" stroke-width="6" stroke-linecap="round" fill="none"/><ellipse cx="6" cy="-46" rx="14" ry="5" fill="#d8945a" opacity=".6"/></g>`;
  const fountain = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="-2" rx="22" ry="7" fill="#bfa98a"/><path d="M-20-2V-12H20V-2" fill="#d8c6a8"/><ellipse cx="0" cy="-12" rx="20" ry="5.5" fill="#7fd6f0"/><path d="M0-12V-34" stroke="#d8c6a8" stroke-width="4"/><ellipse cx="0" cy="-34" rx="8" ry="2.5" fill="#d8c6a8"/>
    <g class="lv-spray"><path d="M0-36C-8-40-12-30-14-16M0-36C8-40 12-30 14-16M0-36V-46" stroke="#a8e4f8" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>`;
  const lighthouse = (x, y, night) => `<g transform="translate(${x} ${y})">${night ? `<g class="lv-beam" style="transform-origin:0px -80px"><path d="M0-80 90-100V-60Z" fill="#fff6c8" opacity=".35"/></g>` : ''}
    <path d="M-12 0-8-70H8L12 0Z" fill="#fff"/><path d="M-11-14H11L10-26H-10ZM-9-42H9L8-54H-8Z" fill="#e8344e"/><rect x="-9" y="-80" width="18" height="10" fill="${night ? '#ffe27a' : '#bfe8ff'}"/><path d="M-11-80H11L0-92Z" fill="#33333d"/><path d="M-13-70H13" stroke="#33333d" stroke-width="2"/></g>`;
  const bunting = () => `<path d="M130 112Q210 128 290 112" stroke="#7a5a3a" stroke-width="1" fill="none"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(k => { const x = 140 + k * 20, y = 116 + Math.sin((k + .5) / 8 * Math.PI) * 7; return `<path d="M${x - 6} ${y}h12l-6 10Z" fill="${['#e8344e', '#ffd23f', '#2fa79a', '#f0789f', '#3a78d6', '#ff8a1e', '#9a6ad8', '#3a9d5d'][k]}"/>`; }).join('')}`;
  const fireworks = () => [[80, 50, '#ffd23f'], [300, 40, '#f0789f'], [190, 30, '#7fd6f0']].map(([x, y, c], k) => `<g class="lv-burst" style="animation-delay:${k * .9}s;transform-origin:${x}px ${y}px">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path d="M${x} ${y}l${(Math.cos(a / 57.3) * 18).toFixed(1)} ${(Math.sin(a / 57.3) * 18).toFixed(1)}" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}</g>`).join('');
  const notes = (x, y) => ['♪', '♫', '♪'].map((n, k) => `<text class="lv-note" style="animation-delay:${k * .8}s" x="${x + k * 6}" y="${y}" font-size="14" fill="#9a6ad8" font-family="serif">${n}</text>`).join('');
  const zzz = (x, y) => ['z', 'Z', 'z'].map((n, k) => `<text class="lv-z" style="animation-delay:${k * .9}s" x="${x}" y="${y}" font-size="${10 + k * 3}" fill="#fff" font-family="sans-serif" font-weight="700">${n}</text>`).join('');
  const ride = (k, x = 350, y = 218) => k && RIDES[k] ? `<g transform="translate(${x - 210} ${y - 128})">${RIDES[k]()}</g>` : '';
  const flyingPlane = () => `<g class="lv-fly"><g transform="translate(-170 -6) scale(.8)">${RIDES.plane()}</g></g>`;

  /* ---------- je personage ---------- */
  function me(cx, foot, hgt, opt = {}) {
    const st = S.Store && S.Store.state, c = st && st.me && S.Cast && S.Cast.get(st.me);
    if (!c) return '';
    const w = hgt * 120 / 182;
    return S.Cast.svg(c.id, hgt, { full: true, look: st.meLook || {} })
      .replace(/^<svg[^>]*>/, `<svg x="${(cx - w / 2).toFixed(1)}" y="${(foot - hgt).toFixed(1)}" width="${w.toFixed(1)}" height="${hgt}" viewBox="0 0 120 182" overflow="visible" class="${opt.cls || ''}">`);
  }
  const hasMe = () => { const st = S.Store && S.Store.state; return !!(st && st.me && S.Cast && S.Cast.get(st.me)); };

  /* ---------- scènes: wat je personage aan het doen is ---------- */
  const ACTS = [
    { id: 'walk', label: '🥾 Wandelen', sky: 'day', ok: () => true,
      draw: () => `<g class="lv-walk"><g class="lv-flip">${me(60, 230, 92, { cls: 'lv-step' })}</g></g>` },
    { id: 'morning', label: '🥾 Ochtendwandeling', sky: 'dawn', ok: () => true, draw: () => `<g class="lv-walk"><g class="lv-flip">${me(60, 230, 92, { cls: 'lv-step' })}</g></g>` },
    { id: 'evening', label: '🥾 Avondwandeling', sky: 'dusk', ok: () => true, draw: () => `<g class="lv-walk"><g class="lv-flip">${me(60, 230, 92, { cls: 'lv-step' })}</g></g>` },
    { id: 'garden', label: '🌻 Tuinieren', sky: 'dawn', ok: w => w.items.has('garden'),
      draw: () => `${me(116, 230, 92, { cls: 'lv-bob' })}<g transform="translate(92 186) rotate(-24)"><path d="M0 0H18V12H0Z" fill="#2fa79a"/><path d="M0 4-14-4" stroke="#2fa79a" stroke-width="3"/><path d="M2 0C4-8 14-8 16 0" stroke="#1d7a70" stroke-width="2" fill="none"/></g>
        ${[0, 1, 2, 3].map(k => `<ellipse class="lv-drop" style="animation-delay:${k * .25}s" cx="${76 + k * 3}" cy="190" rx="1.2" ry="2.2" fill="#7fd6f0"/>`).join('')}` },
    { id: 'hammock', label: '📖 Lezen in de hangmat', sky: 'day', ok: w => w.items.has('hammock'), hide: ['hammock'],
      draw: w => `${hammockTrees(w.biome)}<g class="lv-swing" style="transform-origin:64px 160px"><path d="M24 160 30 174M104 158 98 174" stroke="#c9a87a" stroke-width="1.5"/><path d="M30 174Q64 214 98 174Q64 192 30 174Z" fill="#b5263a"/>${hasMe() ? `<g transform="rotate(-80 64 178)">${me(64, 214, 72)}</g>` : ''}<path d="M30 174Q64 212 98 174Q64 200 30 174Z" fill="#e8344e"/><path d="M34 178Q64 208 94 178" stroke="#ffd23f" stroke-width="2.4" fill="none"/><path d="M40 184Q64 206 88 184" stroke="#2fa79a" stroke-width="2.4" fill="none"/><g transform="translate(74 150) rotate(-10)"><path d="M0 0 10-4 20 0V12L10 8 0 12Z" fill="#fff"/><path d="M10-4V8" stroke="#2f6fb5" stroke-width="1.4"/><path d="M0 0V12M20 0V12" stroke="#2f6fb5" stroke-width="1.4"/></g></g>` },
    { id: 'bike', label: '🚲 Fietstochtje', sky: 'day', ok: w => w.bike, hideRide: true,
      draw: () => `<g class="lv-ride"><g transform="translate(0 232)">${me(0, -14, 80, { cls: 'lv-pedal' })}<g transform="translate(-212 -128)">${RIDES.bike()}</g></g></g>` },
    { id: 'dog', label: '🐶 Spelen met Coco', sky: 'day', ok: w => w.items.has('dog'), hide: ['dog'],
      draw: () => `${me(70, 230, 92, { cls: 'lv-bob' })}${dog(130, 230, 'lv-jump')}<circle class="lv-ball" cx="98" cy="196" r="4.5" fill="#e8344e"/><path class="lv-ball" d="M94 196h9" stroke="#fff" stroke-width="1.2"/>` },
    { id: 'surf', label: '🏄 Surfen', sky: 'day', ok: w => w.items.has('surf'), hide: ['surf'],
      draw: w => `<g class="lv-surf" style="transform-origin:80px 172px"><path d="M40 176C60 164 80 164 120 170" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>${me(80, 172, 56)}<path d="M58 172C70 176 92 176 104 172C94 168 70 168 58 172Z" fill="#ffd23f"/><path d="M60 172H102" stroke="#e8344e" stroke-width="1.6"/></g>` },
    { id: 'sail', label: '⛵ Zeilen', sky: 'day', ok: w => w.items.has('boat'), hide: ['boat'],
      draw: w => boat(84, w.biome === 'isla' ? 176 : 170, 1.15, me(-6, -2, 40)) },
    { id: 'horse', label: '🐴 Paard verzorgen', sky: 'day', ok: w => w.items.has('horse'), hide: ['horse'],
      draw: () => `${horse(310, 226)}${me(226, 232, 92, { cls: 'lv-bob' })}<g class="lv-brush"><rect x="258" y="182" width="14" height="7" rx="2" fill="#7a4a22"/><path d="M259 189v4M263 189v4M267 189v4M271 189v4" stroke="#c9a87a" stroke-width="1.4"/></g>` },
    { id: 'fire', label: '🔥 Bij het kampvuur', sky: 'dusk', ok: w => w.items.has('fire'), hide: ['fire'],
      draw: () => `${me(76, 230, 90, { cls: 'lv-bob' })}${fire(126, 214)}<path d="M96 200 122 188" stroke="#8a5a30" stroke-width="2" stroke-linecap="round"/><ellipse cx="124" cy="187" rx="4" ry="3" fill="#fff4e6"/>` },
    { id: 'guitar', label: '🎸 Gitaar spelen', sky: 'dusk', ok: w => w.items.has('guitar'),
      draw: () => `${me(84, 230, 92, { cls: 'lv-bob' })}<g transform="translate(86 196) rotate(-32)"><path d="M0-3H34" stroke="#7a4a22" stroke-width="4" stroke-linecap="round"/><circle cx="-4" cy="-3" r="9" fill="#d98a3a"/><circle cx="-14" cy="-3" r="11" fill="#d98a3a"/><circle cx="-8" cy="-3" r="3" fill="#5a3418"/><path d="M-20-3H34" stroke="#fff4e6" stroke-width=".8"/><rect x="32" y="-6" width="7" height="6" rx="1.5" fill="#5a3418"/></g>${notes(112, 160)}` },
    { id: 'grill', label: '🍖 Barbecue', sky: 'dusk', ok: w => w.items.has('grill'), hide: ['grill'],
      draw: () => `${me(250, 232, 92, { cls: 'lv-bob' })}${grill(292, 224, true)}<path d="M266 198 284 190" stroke="#9a9aa6" stroke-width="2" stroke-linecap="round"/><rect x="282" y="187" width="7" height="5" rx="1" fill="#9a9aa6"/>` },
    { id: 'party', label: '🎆 Feest', sky: 'night', ok: w => w.items.has('fireworks'),
      draw: () => `${fireworks()}<g class="lv-hop">${me(80, 230, 92)}</g>` },
    { id: 'sleep', label: '😴 Slapen', sky: 'night', ok: () => true,
      draw: w => w.home === 'mochila' ? `<g transform="rotate(-88 70 214)">${me(70, 254, 70)}</g><path d="M42 222C40 208 50 204 70 206H98C108 208 110 222 98 226H48Z" fill="#2f6fb5"/><path d="M60 206V226" stroke="#1f4f8e" stroke-width="1.5"/>${zzz(56, 196)}`
        : zzz(224, 150) }
  ];
  function acts(w) { return ACTS.filter(a => a.ok(w)); }
  /* Wat past bij dit moment van de dag, met wat je al hebt (het nieuwste eerst). */
  function pick(w, hour) {
    const av = acts(w).map(a => a.id), has = id => av.includes(id), last = list => list.filter(has).pop();
    if (hour >= 22 || hour < 6) return 'sleep';
    if (hour >= 18) return w.items.has('fireworks') && hour >= 20 ? 'party' : last(['fire', 'guitar', 'grill']) || 'evening';
    return hour < 10 ? 'morning' : 'walk';
  }

  /* De hele wereld als svg-tekst. opt.act = scène-id, opt.w = breedte. */
  function scene(i, opt = {}) {
    const w = world(i), u = 'lf' + (++uid);
    const act = ACTS.find(a => a.id === opt.act && a.ok(w)) || ACTS.find(a => a.id === pick(w, new Date().getHours()));
    const sky = act.sky, night = sky === 'night', hide = new Set(act.hide || []);
    let home = HOMES[w.home](u);
    if (night) home = home.replace(/#8fd4ff|#bfe8ff/g, '#ffd76a');
    const it = k => w.items.has(k) && !hide.has(k);
    const back = (it('hammock') ? hammockTrees(w.biome) + hammockCloth : '')
      + (it('boat') ? boat(84, w.biome === 'isla' ? 176 : 170, .9) : '')
      + (it('horse') ? horse(318, 214) : '') + (w.items.has('lighthouse') ? lighthouse(372, 176, night) : '');
    const smoke = w.home === 'jardin' && sky !== 'day' ? puffs(255, 66) : '';
    const front = (it('garden') ? garden() : '') + (it('fountain') ? fountain(120, 214) : '') + (it('fire') ? fire(126, 214) : '')
      + (it('grill') ? grill(290, 224, false) : '') + (it('surf') ? surfboard(352, 196) : '') + (act.hideRide ? '' : ride(w.ride))
      + (it('dog') ? (sky === 'night' ? dog(162, 234, 'lv-idle') : dog(162, 234, 'lv-jump') + `<circle class="lv-ball" cx="140" cy="200" r="4.5" fill="#e8344e"/>`) : '');
    const shade = night ? `<rect width="400" height="240" fill="#0a1030" opacity=".32"/>` : sky === 'dusk' ? `<rect width="400" height="240" fill="#ff7a4a" opacity=".08"/>` : '';
    return `<svg class="life-svg" viewBox="0 0 400 240" ${opt.w ? `width="${opt.w}" height="${Math.round(opt.w * .6)}"` : ''} role="img" aria-label="${STEPS[i].name}: ${act.label.replace(/^\S+\s/, '')}" xmlns="http://www.w3.org/2000/svg">
  <defs>${G(u + 'sky', SKY[sky][0], SKY[sky][1], true)}${G(u + 'gr', w.biome === 'mar' ? '#f2dcaa' : '#9ed882', w.biome === 'mar' ? '#e8cc90' : '#5fb35e', true)}${G(u + 'sea', '#5ec4ea', '#1f8ac0', true)}</defs>
  ${skyLayer(u, sky)}${w.plane && !night ? flyingPlane() : ''}${land(u, w.biome)}${back}<g transform="translate(82 26) scale(1.3)">${home}</g>${smoke}${w.items.has('fireworks') ? bunting() : ''}${front}${shade}${night && w.items.has('lighthouse') ? lighthouse(372, 176, true) : ''}${act.draw(w)}</svg>`;
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
  /* Wat is er nieuw sinds je vorige bezoek? Eén keer per profiel (niet per taal). Geeft de nieuwe stappen terug. */
  function fresh(i) {
    const k = 'spt.life.' + (S.Profiles ? S.Profiles.activeId() : 'main');
    let seen = null; try { seen = localStorage.getItem(k); } catch (e) { /* negeer */ }
    try { if (seen == null || +seen < i) localStorage.setItem(k, String(i)); } catch (e) { /* negeer */ }
    return seen != null && +seen < i ? STEPS.slice(+seen + 1, i + 1) : [];
  }

  S.Life = { STEPS, ACTS, score, total, now, stepAt, world, acts, pick, scene, word, adoptMe, fresh };
})(window.SPT = window.SPT || {});
