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

  /* ---------- onderkomens, 2,5D: voorgevel + zijgevel + dakvlak, met schaduw, kozijnen, dakpannen ----------
     Huizen staan in hun eigen maat (grond op y=128, midden rond x=106) en worden in de wereld vergroot. */
  const R = n => Math.round(n * 10) / 10;
  const darker = (hex, f) => { const n = parseInt(hex.slice(1), 16), c = s => Math.max(0, Math.min(255, Math.round(((n >> s) & 255) * f))); return '#' + [16, 8, 0].map(s => c(s).toString(16).padStart(2, '0')).join(''); };
  /* zijgevel-ruimte: lokale (u, v) met u langs de diepte (0..d) en v omlaag vanaf de bovenkant van de muur (0..h) */
  const sideM = (o) => `matrix(1 ${R(-o.dy / o.d)} 0 1 ${o.x + o.w} ${o.base - o.h})`;
  function win(x, y, w, h, o = {}) {
    const fr = o.frame || '#fff', gl = o.glass || '#9ad8ff', arch = o.arch;
    const pane = arch ? `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z` : `M${x} ${y}h${w}v${h}h${-w}Z`;
    return `<g>${o.shutter ? `<rect x="${x - w * .5 - 2}" y="${y - 1}" width="${w * .5}" height="${h + 2}" rx="1" fill="${o.shutter}"/><rect x="${x + w + 2}" y="${y - 1}" width="${w * .5}" height="${h + 2}" rx="1" fill="${o.shutter}"/><path d="M${x - w * .5} ${y + 3}h${w * .5 - 4}M${x - w * .5} ${y + 7}h${w * .5 - 4}M${x - w * .5} ${y + 11}h${w * .5 - 4}M${x + w + 4} ${y + 3}h${w * .5 - 4}M${x + w + 4} ${y + 7}h${w * .5 - 4}M${x + w + 4} ${y + 11}h${w * .5 - 4}" stroke="#000" stroke-width=".6" opacity=".2"/>` : ''}
      <path d="${pane}" fill="${fr}"/><path d="${pane}" fill="${gl}" transform="translate(${R(x + w / 2)} ${R(y + h / 2)}) scale(.8) translate(${R(-x - w / 2)} ${R(-y - h / 2)})"/>
      <path d="M${x + w * .25} ${y + h * .85}L${x + w * .6} ${y + h * .2}" stroke="#fff" stroke-width="${R(w * .12)}" opacity=".45" stroke-linecap="round"/>
      ${o.cross === false ? '' : `<path d="M${x + w / 2} ${y + (arch ? w * .2 : 1)}V${y + h - 1}M${x + 1} ${y + h * .55}H${x + w - 1}" stroke="${fr}" stroke-width="1.3"/>`}
      <rect x="${x - 1.5}" y="${y + h}" width="${w + 3}" height="2.2" rx="1" fill="${o.sill || '#e8dccb'}"/>
      ${o.box ? `<rect x="${x - 1}" y="${y + h + 2}" width="${w + 2}" height="4" rx="1.2" fill="#8a5a36"/>${[0, 1, 2, 3].map(k => `<circle cx="${R(x + 1.5 + k * (w - 3) / 3)}" cy="${y + h + 1.5}" r="2.2" fill="${o.box[k % o.box.length]}"/>`).join('')}<path d="M${x} ${y + h + 2}c2-3 4-3 6 0m4 0c2-3 4-3 6 0" stroke="#3a9d5d" stroke-width="1.2" fill="none"/>` : ''}</g>`;
  }
  function door(x, y, w, h, c, o = {}) {
    const top = o.arch ? `M${x} ${y + h}V${y + w / 2}A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2}V${y + h}Z` : `M${x} ${y + h}V${y}H${x + w}V${y + h}Z`;
    return `<g><path d="${top}" fill="${darker(c, .7)}" transform="translate(-1.2 -1.2)"/><path d="${top}" fill="${c}"/>
      <rect x="${x + w * .18}" y="${y + (o.arch ? w * .55 : h * .12)}" width="${w * .26}" height="${h * .3}" rx="1" fill="#000" opacity=".12"/><rect x="${x + w * .56}" y="${y + (o.arch ? w * .55 : h * .12)}" width="${w * .26}" height="${h * .3}" rx="1" fill="#000" opacity=".12"/>
      <rect x="${x + w * .18}" y="${y + h * .58}" width="${w * .26}" height="${h * .3}" rx="1" fill="#000" opacity=".12"/><rect x="${x + w * .56}" y="${y + h * .58}" width="${w * .26}" height="${h * .3}" rx="1" fill="#000" opacity=".12"/>
      <circle cx="${x + w * .8}" cy="${y + h * .55}" r="1.4" fill="#ffd23f"/><rect x="${x - 3}" y="${y + h}" width="${w + 6}" height="3" rx="1" fill="#cfc2ae"/></g>`;
  }
  /* het huis zelf: o = { x, w, h, d, dy, roofH, eave, wall:[voor, zij], roof:[licht, donker], tiles, base, front, side, chimney, gableDeco } */
  function house(u, o) {
    o = Object.assign({ base: 128, d: 34, dy: 10, eave: 6, roofH: 30, tiles: 'tile' }, o);
    const { x, w, h, d, dy, base, eave, roofH } = o, top = base - h, mid = x + w / 2;
    const P0 = [x - eave, top + 2], P1 = [mid, top - roofH], P2 = [x + w + eave, top + 2];
    const L = Math.hypot(P2[0] - P1[0], P2[1] - P1[1]), ax = (P2[0] - P1[0]) / L, ay = (P2[1] - P1[1]) / L;
    const roofM = `matrix(${R(ax * 1000) / 1000} ${R(ay * 1000) / 1000} 1 ${R(-dy / d * 1000) / 1000} ${P1[0]} ${P1[1]})`;
    const id = u + 'h' + (o.key || '');
    const tilePat = o.tiles === 'thatch'
      ? `<pattern id="${id}t" width="6" height="7" patternUnits="userSpaceOnUse"><rect width="6" height="7" fill="${o.roof[0]}"/><path d="M1 0v6M4 1v6" stroke="${o.roof[1]}" stroke-width="1" opacity=".7"/></pattern>`
      : o.tiles === 'flat' ? `<pattern id="${id}t" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="${o.roof[0]}"/></pattern>`
      : `<pattern id="${id}t" width="7" height="6" patternUnits="userSpaceOnUse"><rect width="7" height="6" fill="${o.roof[0]}"/><path d="M0 6h7" stroke="${o.roof[1]}" stroke-width="1.6"/><path d="M0 6q1.75-4 3.5 0q1.75-4 3.5 0" fill="none" stroke="${o.roof[1]}" stroke-width=".8" opacity=".6"/></pattern>`;
    const sideWall = `<path d="M${x + w} ${base}L${x + w + d} ${base - dy}V${top - dy}L${x + w} ${top}Z" fill="${o.wall[1]}"/>`;
    const gable = `<path d="M${x} ${top}L${mid} ${top - roofH + 3}L${x + w} ${top}Z" fill="${o.wall[0]}"/>`;
    const roofSide = `<g transform="${roofM}"><rect x="0" y="0" width="${R(L)}" height="${d}" fill="url(#${id}t)"/><rect x="0" y="0" width="${R(L)}" height="${d}" fill="url(#${u}rs)"/></g>`;
    const ridge = `<path d="M${P1[0]} ${P1[1]}L${P1[0] + d} ${P1[1] - dy}" stroke="${darker(o.roof[1], .85)}" stroke-width="3" stroke-linecap="round"/>`;
    const edge = `<path d="M${P0[0]} ${P0[1]}L${P1[0]} ${P1[1]}L${P2[0]} ${P2[1]}" fill="none" stroke="${darker(o.roof[1], .8)}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/><path d="M${P0[0]} ${P0[1] - 1}L${P1[0]} ${P1[1] - 1}L${P2[0]} ${P2[1] - 1}" fill="none" stroke="${o.roof[0]}" stroke-width="1.2" opacity=".8"/>`;
    const eaveShadow = `<path d="M${x} ${top}L${mid} ${top - roofH + 3}L${x + w} ${top}L${x + w} ${top + 5}L${mid} ${top - roofH + 8}L${x} ${top + 5}Z" fill="#000" opacity=".1"/><path d="M${x + w} ${top}L${x + w + d} ${top - dy}V${top - dy + 5}L${x + w} ${top + 5}Z" fill="#000" opacity=".12"/>`;
    const found = `<path d="M${x - 1} ${base - 4}H${x + w + 1}V${base}H${x - 1}Z" fill="${o.found || '#b8a58e'}"/><path d="M${x + w} ${base - 4}L${x + w + d} ${base - dy - 4}V${base - dy}L${x + w} ${base}Z" fill="${darker(o.found || '#b8a58e', .8)}"/>`;
    const chim = o.chimney ? `<path d="M${o.chimney} ${top - roofH * .55}v-14h9v${14 - 4}Z" fill="#a8523a"/><rect x="${o.chimney - 1}" y="${top - roofH * .55 - 16}" width="11" height="3" fill="#7a3a2a"/>` : '';
    return `<defs>${tilePat}${G(u + 'rs', 'rgba(0,0,0,0)', 'rgba(0,0,0,.18)', true)}</defs>
      <ellipse cx="${x + w / 2 + d / 2}" cy="${base + 1}" rx="${w / 2 + d / 2 + 10}" ry="5" fill="#000" opacity=".14"/>
      ${o.behind || ''}${sideWall}<g transform="${sideM(o)}">${o.side || ''}</g>${chim}${roofSide}${ridge}<rect x="${x}" y="${top}" width="${w}" height="${h}" fill="${o.wall[0]}"/>${gable}
      ${o.texture || ''}${eaveShadow}${found}<g>${o.front || ''}</g>${o.gableDeco || ''}${edge}${o.after || ''}`;
  }

  const HOMES = {
    mochila: u => `${G(u + 'bp', '#f6a04a', '#d9681a', true)}${G(u + 'rk', '#c4bab0', '#8e8478', true)}
      <ellipse cx="118" cy="129" rx="58" ry="5" fill="#000" opacity=".12"/>
      <path d="M128 128C126 112 138 102 152 104C166 106 176 116 174 128Z" fill="url(#${u}rk)"/><path d="M136 116C142 108 154 106 162 110" stroke="#fff" stroke-width="2" opacity=".35" fill="none" stroke-linecap="round"/><path d="M150 112l4 8M160 116l-3 6" stroke="#6e655a" stroke-width="1" opacity=".5"/>
      <path d="M60 128C60 120 64 116 70 116H98C104 116 108 120 108 128Z" fill="#9a6a3a"/><ellipse cx="62" cy="122" rx="4" ry="6" fill="#c48a4e"/><circle cx="62" cy="122" r="2" fill="#9a6a3a"/><path d="M70 120H100" stroke="#7a4a22" stroke-width="1" opacity=".5"/>
      <g transform="rotate(-6 100 100)"><rect x="80" y="70" width="42" height="56" rx="12" fill="url(#${u}bp)"/><path d="M80 112C86 118 116 118 122 112V114C122 122 116 126 110 126H92C86 126 80 122 80 114Z" fill="#000" opacity=".1"/>
        <path d="M80 86C80 70 122 70 122 86V92H80Z" fill="#c4561a"/><path d="M84 90C92 94 110 94 118 90" stroke="#a8461a" stroke-width="1.5" fill="none"/><rect x="88" y="98" width="26" height="20" rx="6" fill="#e2803a"/><rect x="88" y="98" width="26" height="6" rx="3" fill="#c4561a"/><rect x="99" y="102" width="4" height="6" rx="1.5" fill="#ffd23f"/>
        <rect x="98" y="88" width="6" height="8" rx="2" fill="#ffd23f"/><path d="M84 72C86 62 116 62 118 72" stroke="#7a3a12" stroke-width="3" fill="none"/>
        <rect x="74" y="60" width="54" height="11" rx="5.5" fill="#2fa79a"/><rect x="74" y="60" width="54" height="4" rx="2" fill="#4fc4b4"/><path d="M84 60v11M118 60v11" stroke="#7a4a22" stroke-width="2"/>
        <path d="M80 92C76 100 76 112 80 120M122 92C126 100 126 112 122 120" stroke="#a8461a" stroke-width="3" fill="none"/><circle cx="101" cy="80" r="3" fill="#fff" opacity=".25"/></g>
      <g transform="translate(150 126)"><path d="M-6 0V-16" stroke="#9a9aa6" stroke-width="1.4"/><rect x="-10" y="-26" width="8" height="10" rx="2" fill="#ffd23f" opacity=".9"/><path d="M-11-26h10" stroke="#33333d" stroke-width="1.6"/></g>`,

    tienda: u => `${G(u + 'tt', '#3fc0b0', '#1d8a7e')}${G(u + 'ts', '#1f8a7e', '#14625a')}
      <ellipse cx="114" cy="129" rx="70" ry="6" fill="#000" opacity=".14"/>
      <path d="M48 130H168L178 124H60Z" fill="#c9b48a" opacity=".6"/>
      <path d="M104 52 166 46 186 124 150 128Z" fill="url(#${u}ts)"/><path d="M110 56 170 50" stroke="#fff" stroke-width="1" opacity=".2"/><path d="M128 60 160 120M146 56 174 118" stroke="#000" stroke-width="1" opacity=".1"/>
      <path d="M58 128 104 52 150 128Z" fill="url(#${u}tt)"/><path d="M104 52 58 128" stroke="#fff" stroke-width="2" opacity=".3"/>
      <path d="M86 128 104 80 122 128Z" fill="#0f4d48"/><path d="M90 128C94 116 98 108 104 98L98 128Z" fill="#2fa79a"/><path d="M104 80 122 128H116C112 112 108 96 104 86Z" fill="#ffd23f" opacity=".9"/>
      <path d="M94 128C96 122 104 120 112 122L114 128Z" fill="#e8344e"/><path d="M98 124h12" stroke="#fff" stroke-width="1" opacity=".6"/>
      <path d="M104 52V36" stroke="#6a4a2a" stroke-width="2.4"/><path d="M104 36l16 5-16 5Z" fill="#e8344e"/><path d="M104 36l16 5-16 1Z" fill="#fff" opacity=".2"/>
      <path d="M104 52 166 46" stroke="#14625a" stroke-width="3" stroke-linecap="round"/>
      <path d="M58 128 34 134M150 128 158 134M186 124 204 130M166 46 200 126" stroke="#c9bba8" stroke-width="1.2"/>${[[34, 134], [158, 134], [204, 130], [200, 126]].map(([a, b]) => `<path d="M${a} ${b}l2 4" stroke="#7a5a3a" stroke-width="2"/>`).join('')}
      <g transform="translate(126 94)"><path d="M0 0V8" stroke="#7a5a3a" stroke-width="1"/><rect x="-4" y="8" width="8" height="10" rx="2" fill="#ffd23f"/><path d="M-5 8h10M-5 18h10" stroke="#33333d" stroke-width="1.6"/></g>`,

    cabana: u => `${G(u + 'wd', '#c9925a', '#9a6436', true)}${G(u + 'wd2', '#a8703e', '#7a4a22', true)}
      ${palm(196, 130, .95)}
      ${house(u, { key: 'c', x: 62, w: 76, h: 34, d: 34, dy: 10, roofH: 34, eave: 12, wall: [`url(#${u}wd)`, `url(#${u}wd2)`], roof: ['#e8c06a', '#b8862e'], tiles: 'thatch', found: '#7a4a22',
        texture: `<path d="M62 103H138M62 110H138M62 117H138M62 124H138" stroke="#7a4a22" stroke-width="1.2" opacity=".45"/>`,
        side: `<path d="M0 7H34M0 14H34M0 21H34M0 28H34" stroke="#5a3418" stroke-width="1.2" opacity=".4"/>${win(10, 8, 14, 12, { frame: '#7a4a22', glass: '#9ad8ff' })}`,
        front: `${door(91, 106, 18, 22, '#5a3418')}${win(68, 104, 14, 11, { frame: '#7a4a22' })}${win(118, 104, 14, 11, { frame: '#7a4a22' })}`,
        gableDeco: `<path d="M50 96l6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6 6 6 6-6" fill="none" stroke="#b8862e" stroke-width="1.6"/><circle cx="100" cy="84" r="5" fill="#7a4a22"/><circle cx="100" cy="84" r="3" fill="#ffd23f" opacity=".7"/>` })}
      <path d="M58 128h84v3H58Z" fill="#7a4a22"/>`,

    casita: u => `${G(u + 'wl', '#ffb6cc', '#f48aac', true)}${G(u + 'ws', '#e47a9c', '#c85a80', true)}
      ${palm(34, 128, .72)}
      ${house(u, { key: 'k', x: 58, w: 84, h: 44, d: 36, dy: 11, roofH: 30, eave: 8, wall: [`url(#${u}wl)`, `url(#${u}ws)`], roof: ['#e8714a', '#a8402a'], found: '#c8768e',
        texture: [[66, 92], [130, 98], [80, 120], [124, 118], [104, 90]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="4" ry="2" fill="#fff" opacity=".18"/>`).join(''),
        side: `${win(10, 12, 14, 14, { frame: '#fff', arch: true, glass: '#9ad8ff' })}<path d="M0 40H36" stroke="#000" stroke-width="1" opacity=".08"/>`,
        front: `${door(90, 98, 20, 30, '#2f6fb5', { arch: true })}${win(66, 96, 14, 14, { box: ['#e8344e', '#ffd23f'] })}${win(120, 96, 14, 14, { box: ['#9a6ad8', '#ffd23f'] })}
          <path d="M100 92v-4" stroke="#33333d" stroke-width="1"/><path d="M96 88h8l-1 4h-6Z" fill="#33333d"/><circle cx="100" cy="93" r="2" fill="#ffe27a"/>
          <g transform="translate(84 126)"><path d="M-4 0h8l-1-7h-6Z" fill="#c4561a"/><circle cx="0" cy="-10" r="4" fill="#3a9d5d"/><circle cx="-2" cy="-12" r="1.6" fill="#e8344e"/></g>`,
        after: `<path d="M142 96C150 88 158 96 154 104C162 108 160 120 150 122" fill="none" stroke="#3a9d5d" stroke-width="2.5"/>${[[148, 92], [156, 98], [152, 106], [158, 112], [150, 118]].map(([a, b], k) => `<circle cx="${a}" cy="${b}" r="3" fill="${k % 2 ? '#d14f8a' : '#f0789f'}"/>`).join('')}` })}`,

    jardin: u => `${G(u + 'wl', '#ffe598', '#f4c65a', true)}${G(u + 'ws', '#e8b84a', '#cc9a32', true)}
      ${house(u, { key: 'j', x: 54, w: 92, h: 62, d: 40, dy: 12, roofH: 34, eave: 8, wall: [`url(#${u}wl)`, `url(#${u}ws)`], roof: ['#e45a4a', '#a8352a'], chimney: 158, found: '#b8a58e',
        texture: `<path d="M54 96H146" stroke="#d8a840" stroke-width="2"/>`,
        side: `${win(8, 10, 14, 15, { frame: '#fff' })}${win(8, 40, 14, 14, { frame: '#fff' })}`,
        front: `${win(64, 74, 16, 16, { shutter: '#3a9d5d' })}${win(120, 74, 16, 16, { shutter: '#3a9d5d' })}${win(64, 104, 16, 14, { shutter: '#3a9d5d', box: ['#e8344e', '#fff'] })}${win(120, 104, 16, 14, { shutter: '#3a9d5d', box: ['#ffd23f', '#e8344e'] })}
          ${door(91, 100, 18, 28, '#7a4a22')}<path d="M86 98 100 90 114 98Z" fill="#a8352a"/><path d="M88 98V128M112 98V128" stroke="#fff" stroke-width="2"/>`,
        gableDeco: `<circle cx="100" cy="52" r="5" fill="#fff"/><circle cx="100" cy="52" r="3.4" fill="#9ad8ff"/>` })}
      <g fill="#fff" stroke="#d6cbbd" stroke-width=".8">${[14, 22, 30, 38, 172, 180, 188, 196, 204].map(x => `<path d="M${x} 132V116L${x + 3} 112 ${x + 6} 116V132Z"/>`).join('')}</g><path d="M12 122H46M170 122H212" stroke="#fff" stroke-width="2.5"/>
      ${bush(30, 130, "#3f9e58")}<g transform="translate(222 130)"><path d="M0 0V-30" stroke="#8a5a30" stroke-width="5"/><circle cx="0" cy="-42" r="18" fill="#4fb466"/><circle cx="-7" cy="-48" r="7" fill="#6cc27a" opacity=".6"/><circle cx="-8" cy="-46" r="3" fill="#ff8a1e"/><circle cx="7" cy="-38" r="3" fill="#ff8a1e"/><circle cx="4" cy="-52" r="3" fill="#ff8a1e"/><circle cx="-12" cy="-34" r="3" fill="#ff8a1e"/></g>`,

    playa: u => `${G(u + 'wl', '#ffffff', '#e6eef4', true)}${G(u + 'ws', '#d6e2ea', '#b8c8d4', true)}
      ${palm(22, 132, .85)}
      ${house(u, { key: 'p', x: 60, w: 84, h: 48, d: 36, dy: 10, roofH: 28, eave: 9, wall: [`url(#${u}wl)`, `url(#${u}ws)`], roof: ['#3a8ae0', '#1f5aa8'], found: '#a8835a',
        texture: `<path d="M60 88H144M60 96H144M60 104H144M60 112H144M60 120H144" stroke="#c8d6e0" stroke-width="1"/>`,
        side: `${win(10, 12, 14, 14, { frame: '#fff', glass: '#9ad8ff', cross: false })}<path d="M0 8H36M0 16H36M0 24H36M0 32H36M0 40H36" stroke="#9fb2c0" stroke-width="1" opacity=".6"/>`,
        front: `${door(92, 98, 18, 30, '#2fa79a')}<circle cx="77" cy="100" r="8" fill="#fff"/><circle cx="77" cy="100" r="6" fill="#9ad8ff"/><path d="M73 104 80 96" stroke="#fff" stroke-width="1.6" opacity=".6"/><circle cx="127" cy="100" r="8" fill="#fff"/><circle cx="127" cy="100" r="6" fill="#9ad8ff"/><path d="M123 104 130 96" stroke="#fff" stroke-width="1.6" opacity=".6"/>
          <g transform="translate(70 70)"><path d="M0 0c2-6 10-6 12 0" stroke="#fff" stroke-width="1.5" fill="none" opacity=".0"/></g>`,
        after: `<path d="M52 128H168" stroke="#a8835a" stroke-width="5"/><path d="M52 118H150" stroke="#fff" stroke-width="1.8"/>${[54, 66, 78, 126, 138, 150].map(x => `<path d="M${x} 118V128" stroke="#fff" stroke-width="1.6"/>`).join('')}
          <g transform="translate(154 128)"><path d="M0 0V-24" stroke="#7a4a22" stroke-width="1.6"/><path d="M-16-20C-12-32 12-32 16-20Z" fill="#ffd23f"/><path d="M-16-20C-10-24-6-24 0-20C6-24 10-24 16-20" fill="#e8344e"/></g>` })}`,

    hacienda: u => `${G(u + 'wl', '#fff4e0', '#f2dcb8', true)}${G(u + 'ws', '#e8d0a8', '#d4b88a', true)}
      ${house(u, { key: 'a', x: 18, w: 150, h: 48, d: 30, dy: 9, roofH: 18, eave: 8, wall: [`url(#${u}wl)`, `url(#${u}ws)`], roof: ['#e2703a', '#a8452a'], found: '#c8a880',
        side: `${win(8, 12, 12, 14, { frame: '#7a4a22', arch: true })}`,
        front: `${[24, 54, 84, 114, 144].map(x => `<path d="M${x} 128V104A10 10 0 0 1 ${x + 20} 104V128Z" fill="#8a5a30"/><path d="M${x} 128V104A10 10 0 0 1 ${x + 20} 104V128" fill="none" stroke="#e8c79a" stroke-width="2.4"/><path d="M${x + 2} 128V106A8 8 0 0 1 ${x + 18} 106" fill="none" stroke="#000" stroke-width="1" opacity=".15"/>`).join('')}
          ${[30, 60, 90, 120, 150].map(x => `<rect x="${x - 2}" y="86" width="12" height="9" rx="1.5" fill="#fff"/><rect x="${x - .5}" y="87.5" width="9" height="6" fill="#9ad8ff"/>`).join('')}<path d="M18 98H168" stroke="#e2c49a" stroke-width="2"/>
          <path d="M20 84C30 76 38 84 46 76C54 84 64 78 70 84" fill="none" stroke="#3a9d5d" stroke-width="3"/>${[24, 32, 40, 48, 56, 64].map((x, i) => `<circle cx="${x}" cy="${80 + (i % 2) * 3}" r="2.6" fill="${i % 2 ? '#d14f8a' : '#f0789f'}"/>`).join('')}`,
        behind: `<g><rect x="134" y="34" width="28" height="48" fill="url(#${u}wl)"/><path d="M162 34l8-3V78l-8 3Z" fill="url(#${u}ws)"/><path d="M130 36 148 18 166 36Z" fill="#e2703a"/><path d="M148 18 170 32 166 36Z" fill="#a8452a"/><path d="M141 62V48A7 7 0 0 1 155 48V62Z" fill="#7a4a22"/><circle cx="148" cy="54" r="4" fill="#ffd23f"/><path d="M148 18V10M144 12h8" stroke="#7a4a22" stroke-width="1.6"/></g>` })}`,

    isla: u => `${G(u + 'wl', '#ffffff', '#eef2f5', true)}${G(u + 'ws', '#dde6ec', '#c4d0d8', true)}${G(u + 'wd', '#d9a066', '#a8703e', true)}
      ${palm(28, 130, .78)}${palm(196, 132, .9)}
      <ellipse cx="112" cy="130" rx="86" ry="6" fill="#000" opacity=".14"/>
      <path d="M150 128L178 120V86L150 92Z" fill="url(#${u}ws)"/><rect x="40" y="92" width="110" height="36" fill="url(#${u}wl)"/>
      <path d="M140 92L162 86V58L140 62Z" fill="url(#${u}ws)"/><rect x="72" y="62" width="68" height="30" fill="url(#${u}wl)"/>
      <path d="M34 92H152L182 84H64Z" fill="#f2f4f6"/><path d="M34 92H152V96H34Z" fill="#7a5a3a"/><path d="M152 92 182 84V88L152 96Z" fill="#5a3e26"/>
      <path d="M66 62H142L166 56H90Z" fill="#f2f4f6"/><path d="M66 62H142V65H66Z" fill="#7a5a3a"/><path d="M142 62 166 56V59L142 65Z" fill="#5a3e26"/>
      <rect x="120" y="66" width="16" height="26" fill="url(#${u}wd)"/><path d="M122 70v20M126 70v20M130 70v20M134 70v20" stroke="#7a4a22" stroke-width=".8" opacity=".5"/>
      <rect x="44" y="96" width="22" height="32" fill="url(#${u}wd)"/><path d="M46 100v26M50 100v26M54 100v26M58 100v26M62 100v26" stroke="#7a4a22" stroke-width=".8" opacity=".5"/>
      <rect x="78" y="67" width="38" height="22" rx="1" fill="#33404a"/><rect x="79.5" y="68.5" width="35" height="19" fill="#9ad8ff"/><path d="M91 68v20M103 68v20" stroke="#33404a" stroke-width="1.4"/><path d="M82 86 92 70M95 86 104 72" stroke="#fff" stroke-width="2" opacity=".4"/>
      <rect x="72" y="99" width="50" height="26" rx="1" fill="#33404a"/><rect x="73.5" y="100.5" width="47" height="23" fill="#9ad8ff"/><path d="M89 100v25M105 100v25" stroke="#33404a" stroke-width="1.4"/><path d="M76 122 88 102M93 122 104 104" stroke="#fff" stroke-width="2" opacity=".4"/>
      ${door(128, 100, 16, 28, '#5a3e26')}
      <path d="M68 58V54H142V58M72 54v4M84 54v4M96 54v4M108 54v4M120 54v4M132 54v4" fill="none" stroke="#c4d0d8" stroke-width="1.2"/>
      <path d="M152 106 176 100M152 112 176 106" stroke="#7a5a3a" stroke-width="1" opacity=".3"/>
      <rect x="16" y="124" width="40" height="9" rx="3" fill="#5ec4ea" stroke="#fff" stroke-width="2"/><path d="M22 128c4-2 8 2 12 0s8-2 12 0" stroke="#fff" stroke-width="1" fill="none" opacity=".7"/>`
  };
  /* wiel met band, velg, glans en naaf */
  const wheel = (cx, cy, r, rim = '#d8dce2') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#2a2a32"/><circle cx="${cx}" cy="${cy}" r="${R(r * .55)}" fill="${rim}"/><circle cx="${cx}" cy="${cy}" r="${R(r * .55)}" fill="none" stroke="#9aa0a8" stroke-width=".8"/><circle cx="${cx}" cy="${cy}" r="${R(r * .2)}" fill="#6a6e76"/><path d="M${R(cx - r * .7)} ${R(cy - r * .4)}a${r * .8} ${r * .8} 0 0 1 ${R(r * .5)} ${R(-r * .5)}" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/>`;
  const spoked = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2a2a32" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r - 2}" fill="none" stroke="#b8bcc4" stroke-width=".8"/>${[0, 30, 60, 90, 120, 150].map(a => `<path d="M${R(cx + Math.cos(a / 57.3) * (r - 2))} ${R(cy + Math.sin(a / 57.3) * (r - 2))}L${R(cx - Math.cos(a / 57.3) * (r - 2))} ${R(cy - Math.sin(a / 57.3) * (r - 2))}" stroke="#c8ccd4" stroke-width=".5"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="1.6" fill="#6a6e76"/>`;
  const RIDES = {
    step: () => `<g transform="translate(196 128)"><ellipse cx="1" cy="1" rx="22" ry="2.4" fill="#000" opacity=".15"/>${wheel(-14, -4, 4.5, '#e8344e')}${wheel(16, -4, 4.5, '#e8344e')}
      <path d="M-16-8H12C15-8 17-9 18-11" stroke="#c42a40" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M-16-9H12" stroke="#ff6a7e" stroke-width="1.4" stroke-linecap="round"/><path d="M-14-6H8" stroke="#33333d" stroke-width="1.2" opacity=".6"/>
      <path d="M14-9 8-40" stroke="#9a9aa6" stroke-width="3.2" stroke-linecap="round"/><path d="M13.5-10 7.8-38" stroke="#e8eaee" stroke-width="1" stroke-linecap="round"/><path d="M0-40H16" stroke="#33333d" stroke-width="3.6" stroke-linecap="round"/><circle cx="0" cy="-40" r="2.2" fill="#e8344e"/><circle cx="16" cy="-40" r="2.2" fill="#e8344e"/></g>`,
    bike: () => `<g transform="translate(222 128)" fill="none" stroke-linecap="round"><ellipse cx="-10" cy="0" rx="26" ry="2.6" fill="#000" stroke="none" opacity=".14"/>${spoked(-26, -11, 10)}${spoked(6, -11, 10)}
      <path d="M-26-11-14-30H2L6-11M-14-30-8-11H6M-8-11-10-30" stroke="#1f8a7e" stroke-width="3.2" stroke-linejoin="round"/><path d="M-25-12-14-29H1M-13-29-8-12" stroke="#5fd4c4" stroke-width="1" opacity=".8"/>
      <circle cx="-8" cy="-11" r="3.4" stroke="#33333d" stroke-width="1.6"/><path d="M-8-11-5-7" stroke="#33333d" stroke-width="1.6"/>
      <path d="M-17-34H-9" stroke="#33333d" stroke-width="3.4"/><path d="M2-30 0-38H6" stroke="#33333d" stroke-width="2.6"/><path d="M4-34H15V-27H6" stroke="#a8703e" stroke-width="2.4"/><path d="M5-31H14" stroke="#c48a4e" stroke-width="1.2"/><circle cx="8" cy="-24" r="1.6" fill="#ffd23f" stroke="none"/></g>`,
    moto: () => `<g transform="translate(212 128)"><ellipse cx="-1" cy="1" rx="28" ry="2.6" fill="#000" opacity=".15"/>${wheel(-18, -7, 7)}${wheel(16, -7, 7)}
      <path d="M-26-12C-27-24-16-29-5-27L-1-12Z" fill="#6ab8de"/><path d="M-24-15C-24-23-16-26-8-25" stroke="#bfe8ff" stroke-width="1.6" fill="none" opacity=".8"/>
      <path d="M-6-12H20C24-12 25-19 19-22L10-24L8-42" fill="#7fc6e8"/><path d="M-6-12H20C23-12 24-15 23-17H-4Z" fill="#000" opacity=".1"/><path d="M10-24 8-42" stroke="#5aa8cc" stroke-width="2.4"/>
      <path d="M-24-12C-22-8-14-8-12-12M10-12C12-8 20-8 22-12" stroke="#5aa8cc" stroke-width="2" fill="none"/>
      <path d="M6-42H17" stroke="#33333d" stroke-width="3.2" stroke-linecap="round"/><path d="M-15-28H1" stroke="#6a3e1c" stroke-width="5.5" stroke-linecap="round"/><path d="M-14-29.5H0" stroke="#a8703e" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="13" cy="-34" r="3" fill="#fff6c8"/><circle cx="13" cy="-34" r="1.6" fill="#ffd23f"/><rect x="-28" y="-20" width="4" height="3" rx="1" fill="#e8344e"/></g>`,
    car: () => `<g transform="translate(210 128)"><ellipse cx="0" cy="0" rx="34" ry="3" fill="#000" opacity=".16"/>
      <path d="M-31-9C-32-17-28-20-22-21L-16-33C-13-37-8-38 0-38C10-38 15-36 18-32L24-22C30-21 32-17 31-9V-5H-31Z" fill="#3a9d5d"/><path d="M-31-12H31V-6C31-5 30-4 28-4H-28C-30-4-31-5-31-6Z" fill="#2a7a46"/>
      <path d="M-14-22-10-32C-8-34-5-35 -1-35V-22Z M2-35C8-35 12-34 14-32L19-22H2Z" fill="#bfe8ff"/><path d="M-10-24-6-32M6-24 10-32" stroke="#fff" stroke-width="1.6" opacity=".6"/>
      <path d="M-28-18H28" stroke="#5fc07e" stroke-width="1.2"/><path d="M-1-20V-10" stroke="#2a7a46" stroke-width="1"/><rect x="-6" y="-17" width="4" height="1.4" rx=".7" fill="#e8eaee"/><rect x="8" y="-17" width="4" height="1.4" rx=".7" fill="#e8eaee"/>
      ${wheel(-18, -5, 7)}${wheel(17, -5, 7)}<path d="M-26-7C-25-14-11-14-10-7M9-7C10-14 24-14 25-7" fill="none" stroke="#2a7a46" stroke-width="2"/>
      <circle cx="29" cy="-15" r="2.4" fill="#fff6c8"/><rect x="-32" y="-16" width="3" height="4" rx="1" fill="#e8344e"/><rect x="25" y="-8" width="8" height="3" rx="1.4" fill="#c8ccd4"/><rect x="-33" y="-8" width="8" height="3" rx="1.4" fill="#c8ccd4"/></g>`,
    van: () => `<g transform="translate(206 128)"><ellipse cx="0" cy="0" rx="34" ry="3" fill="#000" opacity=".16"/>
      <rect x="-31" y="-41" width="60" height="36" rx="10" fill="#ff8a1e"/><path d="M-31-24H29V-13C29-8 26-5 21-5H-25C-29-5-31-8-31-12Z" fill="#fff4e6"/><path d="M-31-24H29" stroke="#e8701a" stroke-width="1.4"/><path d="M-31-10H29V-12C29-8 26-5 21-5H-25C-29-5-31-8-31-10Z" fill="#000" opacity=".08"/>
      <path d="M-8-17C-8-21-2-21 0-17C2-21 8-21 8-17C8-13 0-10 0-10C0-10-8-13-8-17Z" fill="#ff8a1e" opacity=".85" transform="translate(0 2) scale(.8)"/>
      <rect x="-25" y="-36" width="12" height="9" rx="2" fill="#bfe8ff"/><rect x="-9" y="-36" width="12" height="9" rx="2" fill="#bfe8ff"/><path d="M7-36H20C23-36 24-34 24-31V-27H7Z" fill="#bfe8ff"/><path d="M-22-29l4-5M-6-29l4-5M10-29l5-6" stroke="#fff" stroke-width="1.4" opacity=".6"/>
      <path d="M4-38V-24" stroke="#e8701a" stroke-width="1.6"/><circle cx="26" cy="-17" r="2.6" fill="#fff6c8"/><rect x="-32" y="-14" width="3" height="5" rx="1" fill="#e8344e"/>
      ${wheel(-16, -5, 6.5)}${wheel(16, -5, 6.5)}<path d="M-27-46H23" stroke="#7a4a22" stroke-width="2.4" stroke-linecap="round"/><path d="M-22-46V-41M18-46V-41" stroke="#7a4a22" stroke-width="1.6"/><rect x="-24" y="-53" width="38" height="6" rx="3" fill="#2fa79a"/><path d="M-22-50H12" stroke="#5fd4c4" stroke-width="1.2"/></g>`,
    plane: () => `<g transform="translate(205 34) rotate(-8)"><path d="M-6-2-14-22H-6L6-2Z" fill="#e2e6ea"/>
      <path d="M-26 0C-26-6-16-9 0-9C16-9 26-5 29 0C26 5 16 7 0 7C-16 7-26 5-26 0Z" fill="#e8344e"/><path d="M-24 2C-10 5 14 5 28 1C26 5 16 7 0 7C-16 7-26 5-24 2Z" fill="#000" opacity=".15"/><path d="M-20-4C-6-7 10-7 22-4" stroke="#fff" stroke-width="1.4" opacity=".5" fill="none"/>
      <path d="M-26-2-32-14H-25L-18-2Z" fill="#fff"/><path d="M-6 2-14 21H-6L6 2Z" fill="#fff"/><path d="M-12 16H-5" stroke="#e8344e" stroke-width="2"/>
      <circle cx="16" cy="-2" r="3.2" fill="#bfe8ff"/><circle cx="8" cy="-2" r="2.2" fill="#bfe8ff"/><circle cx="0" cy="-2" r="2.2" fill="#bfe8ff"/>
      <g><path d="M29-8V8" stroke="#33333d" stroke-width="2.2" stroke-linecap="round"/></g><circle cx="29" cy="0" r="2" fill="#ffd23f"/></g>`
  };

  /* ---------- landschap: lucht met licht, lagen bergen/heuvels die verder weg blauwer worden, grond met paadje en bloemetjes ---------- */
  const SKY = {
    dawn: ['#9cc0ec', '#ffd2a8'], day: ['#5fb8ee', '#d8f0ff'], dusk: ['#4e4290', '#ff9a6a'], night: ['#0a1230', '#26386a']
  };
  const RG = (id, c, o = 1) => `<radialGradient id="${id}"><stop offset="0" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`;
  const cloud = (x, y, s, d, tint = '#fff', under = '#d6e4f2') => `<g class="lv-cloud" style="animation-duration:${d}s"><g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-30 4C-34-4-24-10-16-6C-14-18 4-22 10-12C16-20 30-16 30-6C38-6 40 4 32 6H-26C-30 6-31 5-30 4Z" fill="${under}"/>
    <path d="M-28 1C-32-6-22-12-15-8C-13-19 3-23 9-14C15-21 28-17 28-8C35-8 36 1 30 2C10 0-10 0-28 1Z" fill="${tint}"/>
    <path d="M-12-12C-8-17 0-18 4-14" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9"/></g></g>`;
  function skyLayer(u, sky) {
    let out = `<rect width="400" height="240" fill="url(#${u}sky)"/>`;
    if (sky === 'night') {
      out += `<defs>${RG(u + 'mg', '#fff6d8', .35)}</defs><circle cx="326" cy="46" r="40" fill="url(#${u}mg)"/><circle cx="326" cy="46" r="15" fill="#fff6d8"/><circle cx="321" cy="42" r="3" fill="#e8dcb8"/><circle cx="330" cy="51" r="2.2" fill="#e8dcb8"/><circle cx="331" cy="40" r="1.5" fill="#e8dcb8"/>`;
      for (let k = 0; k < 40; k++) { const x = (k * 97) % 390 + 5, y = (k * 53) % 130 + 6; out += `<circle class="lv-star" style="animation-delay:${(k % 7) * .4}s" cx="${x}" cy="${y}" r="${k % 3 ? .9 : 1.5}" fill="${k % 5 ? '#fff' : '#ffe8a8'}"/>`; }
      out += `<path d="M30 30h4M32 28v4M250 20h5M252.5 17.5v5" stroke="#fff" stroke-width=".8" opacity=".8"/>`;
      return out;
    }
    if (sky === 'day') out += `<defs>${RG(u + 'sg', '#fff3b0', .9)}</defs><circle cx="330" cy="44" r="58" fill="url(#${u}sg)"/><circle cx="330" cy="44" r="19" fill="#ffe680"/><circle cx="330" cy="44" r="15" fill="#fff2a8"/>`
      + cloud(60, 40, 1, 60) + cloud(220, 28, .8, 80) + cloud(140, 74, .55, 70);
    if (sky === 'dawn') out += `<defs>${RG(u + 'sg', '#ffcf8a', .95)}</defs><circle cx="70" cy="140" r="90" fill="url(#${u}sg)"/><circle cx="70" cy="146" r="22" fill="#ffc07a"/><circle cx="70" cy="146" r="17" fill="#ffd89a"/>`
      + cloud(260, 40, .9, 90, '#ffe6ea', '#e8b8c8') + cloud(160, 70, .6, 80, '#ffe6ea', '#e8b8c8');
    if (sky === 'dusk') out += `<defs>${RG(u + 'sg', '#ff8a5a', .9)}</defs><circle cx="330" cy="146" r="100" fill="url(#${u}sg)"/><circle cx="330" cy="150" r="24" fill="#ff7a4a"/><circle cx="330" cy="150" r="18" fill="#ffa86a"/>`
      + cloud(90, 50, .8, 90, '#ffb8a8', '#a86a9a') + cloud(230, 30, .6, 100, '#ffb8a8', '#a86a9a');
    if (sky === 'day' || sky === 'dawn') out += `<g class="lv-birds">${[[0, 0, 1], [14, 6, .8], [26, -2, .9]].map(([x, y, s]) => `<path d="M${x} ${y + 60}q${4 * s}-${4 * s} ${8 * s} 0q${4 * s}-${4 * s} ${8 * s} 0" stroke="#33333d" stroke-width="1.3" fill="none" opacity=".55"/>`).join('')}</g>`;
    return out;
  }
  /* bomen: schaduw onder, stam met tak, bladerkruin in drie tinten (achter donker, licht van rechtsboven) */
  const pine = (x, y, s = 1, c = '#2f7a4a') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="2" cy="5" rx="12" ry="2.5" fill="#000" opacity=".12"/><rect x="-2" y="-2" width="4" height="8" fill="#6a4a2a"/>
    <path d="M0-40 9-24H4L13-10H6L16 4H-16L-6-10H-13L-4-24H-9Z" fill="${c}"/><path d="M0-40 9-24H4L13-10H6L16 4H0Z" fill="#000" opacity=".14"/><path d="M0-40-4-28M-3-22-9-12M-5-6-12 2" stroke="#fff" stroke-width="1.2" opacity=".18" stroke-linecap="round"/></g>`;
  const tree = (x, y, s = 1, c = ['#2f8a4a', '#4fae62', '#7acc7c']) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="3" cy="1" rx="18" ry="3.5" fill="#000" opacity=".13"/>
    <path d="M-3 1C-2-10-3-20 0-28M0-18C4-22 8-24 10-28" stroke="#7a4a26" stroke-width="5.5" stroke-linecap="round" fill="none"/><path d="M1 0C1-10 0-18 2-26" stroke="#a8703e" stroke-width="1.6" stroke-linecap="round" fill="none"/>
    <circle cx="-10" cy="-32" r="12" fill="${c[0]}"/><circle cx="11" cy="-32" r="12" fill="${c[0]}"/><circle cx="0" cy="-42" r="16" fill="${c[1]}"/><circle cx="-11" cy="-34" r="10" fill="${c[1]}"/><circle cx="12" cy="-35" r="10" fill="${c[1]}"/>
    <circle cx="4" cy="-48" r="8" fill="${c[2]}" opacity=".85"/><circle cx="14" cy="-38" r="5" fill="${c[2]}" opacity=".7"/><circle cx="-6" cy="-46" r="4" fill="${c[2]}" opacity=".6"/>
    <path d="M-14-26C-6-22 6-22 16-27" stroke="${c[0]}" stroke-width="3" fill="none" opacity=".6"/></g>`;
  const flower = (x, y, c) => `<g><path d="M${x} ${y}v-5" stroke="#3a8a4a" stroke-width="1"/><circle cx="${x}" cy="${y - 6}" r="2" fill="${c}"/><circle cx="${x}" cy="${y - 6}" r=".8" fill="#ffd23f"/></g>`;
  /* grond met kleurverloop, licht spel, paadje van steentjes naar je huis */
  function ground(u, top) {
    const fl = [[30, 214, '#fff'], [58, 228, '#f0789f'], [96, 222, '#ffd23f'], [262, 226, '#fff'], [312, 212, '#f0789f'], [340, 232, '#ffd23f'], [384, 220, '#9a6ad8'], [10, 236, '#ffd23f']];
    return `<path d="M0 ${top}C80 ${top - 6} 160 ${top + 4} 240 ${top - 2}S360 ${top - 4} 400 ${top}V240H0Z" fill="url(#${u}gr)"/>
      <path d="M0 ${top + 2}C80 ${top - 4} 160 ${top + 6} 240 ${top}S360 ${top - 2} 400 ${top + 2}" stroke="#fff" stroke-width="1.5" opacity=".25" fill="none"/>
      <ellipse cx="60" cy="226" rx="70" ry="10" fill="#000" opacity=".04"/><ellipse cx="340" cy="232" rx="80" ry="10" fill="#000" opacity=".05"/>
      <path d="M198 196C188 212 176 226 168 240H238C232 226 222 212 214 196Z" fill="#e2c898"/><path d="M198 196C188 212 176 226 168 240H178C186 226 196 212 202 196Z" fill="#000" opacity=".06"/>
      ${[[204, 202, 3], [194, 214, 4], [214, 216, 3.5], [186, 228, 5], [204, 230, 4.5], [224, 232, 4]].map(([a, b, r]) => `<ellipse cx="${a}" cy="${b}" rx="${r}" ry="${r * .55}" fill="#cbb084"/><ellipse cx="${a - .6}" cy="${b - .6}" rx="${r * .6}" ry="${r * .3}" fill="#f2e2c0" opacity=".7"/>`).join('')}
      ${fl.map(([a, b, c]) => flower(a, b, c)).join('')}`;
  }
  const tufts = () => [16, 48, 140, 252, 290, 380, 330, 112, 72].map((x, k) => tuft(x, 200 + (k % 3) * 14)).join('');
  function land(u, biome) {
    const defs = `<defs>${G(u + 'far', '#9fb8d8', '#c8d8ea', true)}${G(u + 'mid', '#7fae8a', '#a8cf96', true)}${G(u + 'nr', '#6fb46a', '#8fcc7a', true)}</defs>`;
    if (biome === 'bosque') return defs
      + `<path d="M0 150 40 118 70 132 110 96 150 128 190 84 236 130 280 100 320 126 360 92 400 120V170H0Z" fill="url(#${u}far)"/>`
      + `<path d="M110 96 122 108 114 106 108 112 100 104Z M190 84 204 100 196 97 188 104 180 98 176 100Z M360 92 372 104 364 102 356 108 350 102Z" fill="#fff" opacity=".9"/>`
      + `<path d="M190 84 236 130H200L196 97Z M110 96 150 128H124L114 106Z M360 92 400 120V130L364 102Z" fill="#000" opacity=".06"/>`
      + `<path d="M0 162C40 140 90 146 130 156S220 140 270 152 360 138 400 150V180H0Z" fill="url(#${u}mid)"/>`
      + [4, 24, 44, 290, 312, 334, 356, 378, 398].map((x, k) => pine(x, 172 + (k % 2) * 3, .7 + (k % 3) * .12, k % 2 ? '#2f7a4a' : '#3a8a54')).join('')
      + [60, 270].map(x => pine(x, 166, .55, '#4a8a64')).join('')
      + ground(u, 176) + tufts();
    if (biome === 'pueblo') {
      const hs = [[6, '#f2b6c4'], [30, '#ffe08a'], [54, '#9ad0f0'], [298, '#c9a8f0'], [322, '#ffb08a'], [346, '#b8e0a8'], [370, '#f2b6c4']];
      return defs + `<path d="M0 140 60 112 120 134 200 104 280 130 340 108 400 128V170H0Z" fill="url(#${u}far)" opacity=".8"/>`
        + `<path d="M0 166C60 148 120 156 200 150S340 142 400 156V180H0Z" fill="url(#${u}mid)"/>`
        + hs.map(([x, c], k) => { const y = 150 + (k % 2) * 3; return `<rect x="${x}" y="${y}" width="20" height="17" fill="${c}"/><rect x="${x + 14}" y="${y}" width="6" height="17" fill="#000" opacity=".1"/><path d="M${x - 2} ${y + 1} ${x + 10} ${y - 8} ${x + 22} ${y + 1}Z" fill="#d8704a"/><path d="M${x + 10} ${y - 8} ${x + 22} ${y + 1}H${x + 16}Z" fill="#000" opacity=".12"/><rect x="${x + 3}" y="${y + 4}" width="4" height="4" fill="#fff" opacity=".8"/><rect x="${x + 9}" y="${y + 9}" width="4" height="8" fill="#7a5a3a" opacity=".7"/>`; }).join('')
        + `<rect x="82" y="134" width="20" height="34" fill="#fff4e0"/><rect x="96" y="134" width="6" height="34" fill="#000" opacity=".08"/><path d="M80 136a12 12 0 0 1 24 0Z" fill="#e8b84a"/><path d="M92 118v8M88.5 121h7" stroke="#7a5a3a" stroke-width="1.6"/><path d="M88 168v-10a4 4 0 0 1 8 0v10Z" fill="#8a5a30"/><circle cx="92" cy="146" r="3" fill="#7a5a3a"/>`
        + tree(118, 172, .6) + tree(280, 172, .62, ['#2f7a4a', '#46a058', '#6cbe70'])
        + ground(u, 176) + tufts();
    }
    if (biome === 'campo') return `<defs>${G(u + 'far', '#d8b8a0', '#ecd6c0', true)}${G(u + 'mid', '#c8b070', '#dccb8a', true)}</defs>`
      + `<path d="M0 150 30 120H70L90 134 130 132 150 100H210L236 140 280 128 320 104H372L400 130V176H0Z" fill="url(#${u}far)"/>`
      + `<path d="M150 100H210L236 140H200L190 104Z M320 104H372L400 130V140L364 106Z M30 120H70L90 134H70L62 122Z" fill="#000" opacity=".08"/><path d="M150 106H210M30 126H72M320 110H374" stroke="#fff" stroke-width="1" opacity=".3"/>`
      + `<path d="M0 172C80 156 160 166 240 158S360 154 400 162V186H0Z" fill="url(#${u}mid)"/>`
      + [18, 46, 302, 334, 366, 394].map((x, k) => `<g transform="translate(${x} ${172 + (k % 2) * 4}) scale(${.8 + (k % 3) * .15})"><path d="M0 0C-2-14-1-24 0-30C2-24 2-14 1 0Z" fill="#4a9a6a"/><path d="M-1-12C-6-12-7-18-6-22M1-16C6-16 7-22 6-26" stroke="#4a9a6a" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M0-30V0" stroke="#2f7a4a" stroke-width=".8"/><circle cx="0" cy="-31" r="1.6" fill="#f0789f"/></g>`).join('')
      + ground(u, 180) + tufts();
    if (biome === 'mar') return `<defs>${G(u + 'sea', '#7fd4f0', '#1f8ac0', true)}</defs><rect y="146" width="400" height="44" fill="url(#${u}sea)"/>`
      + `<path d="M0 146H400" stroke="#fff" stroke-width="1.2" opacity=".7"/><path d="M290 150H372M300 156H360M310 162H350" stroke="#fff" stroke-width="1.5" opacity=".35"/>`
      + `<g class="lv-wave">${[20, 110, 230, 320].map(x => `<path d="M${x} 162c8-3 16 3 24 0s16-3 24 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>`).join('')}</g>`
      + `<path d="M0 182C100 174 300 176 400 182V240H0Z" fill="url(#${u}gr)"/><path d="M0 182C100 174 300 176 400 182V188C300 182 100 180 0 188Z" fill="#000" opacity=".06"/>`
      + `<path d="M0 182C100 174 300 176 400 182" stroke="#fff" stroke-width="3.5" opacity=".85" fill="none"/><path d="M0 186C100 178 300 180 400 186" stroke="#bfeaf8" stroke-width="2" opacity=".6" fill="none"/>`
      + `<path d="M0 205C80 198 160 206 250 200M120 226C200 220 300 228 390 222" stroke="#d8bc80" stroke-width="2" fill="none" opacity=".5"/>`
      + [[40, 214], [300, 210], [360, 230]].map(([a, b]) => `<path d="M${a} ${b}l3-4 3 4-3 1Z" fill="#f0a08a"/>`).join('') + `<circle cx="250" cy="228" r="3" fill="#fff4e0"/><path d="M247 228h6" stroke="#e8c8a0" stroke-width=".8"/>`;
    // isla: zee rondom, eiland in het midden
    return `<defs>${G(u + 'sea', '#7fd4f0', '#1478b0', true)}${RG(u + 'lag', '#a8f0ec', .9)}</defs><rect y="140" width="400" height="100" fill="url(#${u}sea)"/><path d="M0 140H400" stroke="#fff" stroke-width="1.2" opacity=".7"/>`
      + `<g class="lv-wave">${[10, 120, 300, 350].map((x, k) => `<path d="M${x} ${156 + (k % 2) * 64}c8-3 16 3 24 0s16-3 24 0" stroke="#fff" stroke-width="1.6" fill="none" opacity=".8"/>`).join('')}</g>`
      + `<ellipse cx="210" cy="208" rx="210" ry="48" fill="url(#${u}lag)"/><ellipse cx="210" cy="208" rx="190" ry="36" fill="#f6e2b4"/><path d="M24 214C80 236 340 236 396 214" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>`
      + `<ellipse cx="210" cy="201" rx="164" ry="24" fill="url(#${u}gr)"/><ellipse cx="210" cy="196" rx="150" ry="14" fill="#fff" opacity=".08"/>`
      + [[70, 204], [350, 204], [260, 214]].map(([a, b]) => flower(a, b, '#f0789f')).join('');
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
  const dog = (x, y, cls = '', flip) => `<g transform="translate(${x} ${y})${flip ? ' scale(-1 1)' : ''}"><ellipse cx="0" cy="0" rx="15" ry="2.4" fill="#000" opacity=".15"/><g class="${cls}">
    <g class="lv-wag" style="transform-origin:${11}px ${-14}px"><path d="M11-14C18-18 20-24 18-28" stroke="#b87a3e" stroke-width="4.4" stroke-linecap="round" fill="none"/><path d="M18-26 18-29" stroke="#fff4e2" stroke-width="3.6" stroke-linecap="round"/></g>
    <path d="M5-6V0M9-6V0" stroke="#b87a3e" stroke-width="3.6" stroke-linecap="round"/>
    <ellipse cx="0" cy="-12" rx="13.5" ry="8" fill="#e0a868"/><path d="M-12-14C-6-20 6-21 12-16" stroke="#f0c48a" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="-2" cy="-8.5" rx="8.5" ry="4.5" fill="#fff4e2"/><ellipse cx="6" cy="-15" rx="4" ry="3" fill="#a86a32" opacity=".7"/>
    <path d="M-8-6V0M-3-6V0" stroke="#d09858" stroke-width="3.6" stroke-linecap="round"/><path d="M-9.5 0h3M-4.5 0h3M3.5 0h3M7.5 0h3" stroke="#fff4e2" stroke-width="2" stroke-linecap="round"/>
    <path d="M-12-14C-10-17-8-18-6-17" stroke="#e8344e" stroke-width="2.6" stroke-linecap="round" fill="none"/><circle cx="-8" cy="-14" r="1.6" fill="#ffd23f"/>
    <circle cx="-13" cy="-21" r="8.4" fill="#e0a868"/><ellipse cx="-19.5" cy="-18" rx="5.4" ry="3.8" fill="#fff4e2"/><ellipse cx="-24" cy="-19.6" rx="2" ry="1.6" fill="#2a1a12"/><circle cx="-24.5" cy="-20.2" r=".6" fill="#fff"/>
    <path d="M-15-28C-12-31-6-30-6-26C-6-22-7-17-9-15C-11-18-12-22-15-28Z" fill="#a86a32"/><path d="M-13-27C-10-28-8-26-8.5-22" stroke="#c88a4a" stroke-width="1" fill="none"/>
    <circle cx="-15.5" cy="-23" r="1.7" fill="#2a1a12"/><circle cx="-16" cy="-23.6" r=".6" fill="#fff"/><path d="M-19-28q2-1.5 4 0" stroke="#a86a32" stroke-width="1" fill="none"/><path d="M-21-15.5q2 2 4 0" stroke="#7a3a2a" stroke-width="1.2" fill="none"/><ellipse cx="-19" cy="-14" rx="1.6" ry="2" fill="#f0789f"/>
    </g></g>`;
  const grill = (x, y, smoke) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="1" rx="16" ry="2.4" fill="#000" opacity=".15"/><path d="M-11 0-4-14M11 0 4-14M0 0V-14" stroke="#33333d" stroke-width="2.2" stroke-linecap="round"/><circle cx="-11" cy="0" r="2" fill="#33333d"/><circle cx="11" cy="0" r="2" fill="#33333d"/>
    <path d="M-17-16H17C17-6 9-1 0-1S-17-6-17-16Z" fill="#2a2a32"/><path d="M-14-14C-12-7-6-4 0-4" stroke="#6a6e76" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-17-16H17" stroke="#c8ccd4" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="0" cy="-17" rx="15" ry="2" fill="#ff7a3a" opacity=".5"/><ellipse cx="-7" cy="-19.5" rx="5.4" ry="2.4" fill="#a8502a"/><path d="M-10-20h6" stroke="#5a2a14" stroke-width=".8"/><ellipse cx="6" cy="-19.5" rx="5.4" ry="2.4" fill="#c86a3a"/><path d="M3-20h6" stroke="#5a2a14" stroke-width=".8"/>
    <circle cx="-1" cy="-19" r="2" fill="#e8344e"/><circle cx="12" cy="-18" r="1.6" fill="#3a9d5d"/>${smoke ? puffs(0, -22) : ''}</g>`;
  const puffs = (x, y) => [0, 1, 2].map(k => `<circle class="lv-smoke" style="animation-delay:${k * 1.1}s" cx="${x}" cy="${y}" r="5" fill="#e8e4e0"/>`).join('');
  const surfboard = (x, y, r = -8) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0-58C8-46 9-10 6 0H-6C-9-10-8-46 0-58Z" fill="#ffd23f"/><path d="M0-58C8-46 9-10 6 0H2C4-10 4-46 0-58Z" fill="#e8a81e"/><path d="M-3-50C-5-40-5-20-4-8" stroke="#fff" stroke-width="1.6" opacity=".6" fill="none" stroke-linecap="round"/>
    <path d="M-1-56V-2" stroke="#e8344e" stroke-width="2.6"/><path d="M-4-40C0-36 4-36 6-40M-5-30C0-26 4-26 6-30" stroke="#2fa79a" stroke-width="2" fill="none"/><path d="M-2-6l-4 7M2-6l4 7" stroke="#2fa79a" stroke-width="2"/></g>`;
  const boat = (x, y, s = 1, crew = '') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="8" rx="32" ry="3" fill="#0a4a7a" opacity=".2"/><g class="lv-rock"><path d="M0-4V-58" stroke="#7a4a22" stroke-width="2.6"/><path d="M0-12H24" stroke="#7a4a22" stroke-width="2"/>
    <path d="M2-55C21-41 25-23 23-13H2Z" fill="#fff"/><path d="M2-55C12-44 15-30 14-13H2Z" fill="#000" opacity=".05"/><path d="M4-44H16M4-32H21M4-22H22" stroke="#d6e2ea" stroke-width="1"/>
    <path d="M-2-49C-14-37-16-23-15-13H-2Z" fill="#ffe2e8"/><path d="M-4-36H-14M-4-24H-15" stroke="#f0b8c8" stroke-width="1"/><path d="M0-58l11 3.5-11 3.5Z" fill="#e8344e"/>
    ${crew}<path d="M-29-9H31L23 6H-21Z" fill="#2f6fb5"/><path d="M-27-4H29L23 6H-21Z" fill="#1f4f9e"/><path d="M-29-9H31" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M-24-3H26" stroke="#ffd23f" stroke-width="1.6"/>
    <circle cx="-14" cy="-1" r="1.6" fill="#bfe8ff"/><circle cx="-6" cy="-1" r="1.6" fill="#bfe8ff"/></g></g>`;
  const horse = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="2" cy="0" rx="32" ry="3.4" fill="#000" opacity=".15"/>
    <g class="lv-swish" style="transform-origin:28px -50px"><path d="M28-50C42-46 44-30 39-16C35-24 33-36 28-44Z" fill="#4a2a12"/><path d="M31-46C38-42 39-32 37-24" stroke="#7a4a26" stroke-width="1.2" fill="none"/></g>
    <path d="M-12-6V-36M22-6V-36" stroke="#9a5a2e" stroke-width="6" stroke-linecap="round"/><path d="M-12-1h0M22-1h0" stroke="#2a1a10" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="2" cy="-44" rx="30" ry="15" fill="#c27a42"/><path d="M-26-36C-10-28 16-28 30-38" stroke="#a8683a" stroke-width="4" fill="none" opacity=".6"/><ellipse cx="6" cy="-50" rx="16" ry="5" fill="#dc9a5e" opacity=".7"/>
    <path d="M-20-6V-36M14-6V-36" stroke="#b8703a" stroke-width="6" stroke-linecap="round"/><path d="M-20-1h0M14-1h0" stroke="#3a2416" stroke-width="7" stroke-linecap="round"/><path d="M-21-30V-10M13-30V-10" stroke="#d8945a" stroke-width="1.4" opacity=".7"/>
    <path d="M-20-50C-26-62-30-74-32-82L-18-86C-14-74-10-62-6-54Z" fill="#c27a42"/><path d="M-22-56C-26-66-28-74-29-80" stroke="#dc9a5e" stroke-width="2" fill="none" opacity=".8"/>
    <path d="M-32-82C-42-82-49-76-47-70C-45-65-39-65-32-70L-20-74Z" fill="#c27a42"/><path d="M-47-70C-45-65-39-65-36-68" fill="#e8b88a"/><ellipse cx="-45" cy="-71.5" rx="1.4" ry="1" fill="#2a1a12"/>
    <ellipse cx="-30" cy="-78" rx="2.2" ry="2.4" fill="#2a1a12"/><circle cx="-30.6" cy="-78.8" r=".8" fill="#fff"/><path d="M-33-81q3-2 5 0" stroke="#7a4a26" stroke-width="1" fill="none"/>
    <path d="M-25-88l-3-9 8 6Z" fill="#a8683a"/><path d="M-25-90l-1.5-4 3.5 3Z" fill="#e8b88a"/><path d="M-22-89C-14-80-10-68-4-56" stroke="#4a2a12" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M-26-86l4 4" stroke="#4a2a12" stroke-width="4" stroke-linecap="round"/>
    <path d="M-36-76C-30-72-24-72-18-76M-32-70-22-62" stroke="#e8344e" stroke-width="1.6" fill="none"/><circle cx="-23" cy="-74" r="1.4" fill="#ffd23f"/>
    <path d="M-8-58H14C16-50 14-44 10-42H-6C-10-46-10-52-8-58Z" fill="#2fa79a"/><path d="M-6-56H12M-6-50H12" stroke="#ffd23f" stroke-width="1.2"/><path d="M-4-60C0-64 6-64 8-60" fill="#7a4a22"/></g>`;
  const fountain = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="26" ry="5" fill="#000" opacity=".12"/><path d="M-22-2V-13H22V-2C22 2 12 4 0 4S-22 2-22-2Z" fill="#d8c6a8"/><path d="M8-13H22V-2C22 1 17 3 10 3.6Z" fill="#000" opacity=".1"/><path d="M-22-8H22" stroke="#bfa98a" stroke-width="1"/>
    <ellipse cx="0" cy="-13" rx="22" ry="6" fill="#e8dcc6"/><ellipse cx="0" cy="-13" rx="19" ry="4.6" fill="#5ec4ea"/><path d="M-12-13c3-1.5 6 1.5 9 0M2-12c3-1.5 6 1.5 9 0" stroke="#fff" stroke-width="1" fill="none" opacity=".8"/>
    <path d="M-2.5-13V-33H2.5V-13Z" fill="#d8c6a8"/><path d="M0.5-13V-33H2.5V-13Z" fill="#000" opacity=".1"/><ellipse cx="0" cy="-34" rx="9" ry="2.8" fill="#e8dcc6"/><ellipse cx="0" cy="-34.4" rx="7" ry="1.8" fill="#5ec4ea"/>
    <g class="lv-spray"><path d="M0-36C-8-40-12-30-14-16M0-36C8-40 12-30 14-16M0-36V-46" stroke="#a8e4f8" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-14" cy="-17" r="1.4" fill="#a8e4f8"/><circle cx="14" cy="-17" r="1.4" fill="#a8e4f8"/></g></g>`;
  const lighthouse = (x, y, night) => `<g transform="translate(${x} ${y})">${night ? `<g class="lv-beam" style="transform-origin:0px -80px"><path d="M0-80 90-100V-60Z" fill="#fff6c8" opacity=".35"/></g>` : ''}
    <path d="M-16 2C-16-4 16-4 16 2Z" fill="#8a8e96"/><path d="M-12 0-8-70H8L12 0Z" fill="#fff"/><path d="M2 0 3-70H8L12 0Z" fill="#000" opacity=".1"/><path d="M-11-14H11L10-26H-10ZM-9-42H9L8-54H-8Z" fill="#e8344e"/>
    <path d="M-2 0V-9A2 2 0 0 1 2-9V0Z" fill="#33333d"/><rect x="-1.6" y="-38" width="3.2" height="4" rx="1" fill="#33404a"/>
    <path d="M-13-70H13" stroke="#33333d" stroke-width="2.4"/><path d="M-12-70V-73H12V-70M-8-73V-70M-4-73V-70M0-73V-70M4-73V-70M8-73V-70" stroke="#33333d" stroke-width="1" fill="none"/>
    <rect x="-9" y="-81" width="18" height="10" fill="${night ? '#ffe27a' : '#bfe8ff'}"/><path d="M-3-81V-71M3-81V-71" stroke="#33333d" stroke-width="1"/><path d="M-11-81H11L0-93Z" fill="#33333d"/><circle cx="0" cy="-94" r="1.8" fill="#33333d"/></g>`;
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
    if (night) home = home.replace(/#8fd4ff|#bfe8ff|#9ad8ff/g, '#ffd76a');
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
  <defs>${G(u + 'sky', SKY[sky][0], SKY[sky][1], true)}${G(u + 'gr', w.biome === 'mar' ? '#f2dcaa' : '#9ed882', w.biome === 'mar' ? '#e8cc90' : '#5fb35e', true)}</defs>
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
