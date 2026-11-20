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

  /* ---------- tekeningen ----------
     Stijl (Mark, nov 2026): minder cartoon, meer definitie. Texturen (pleister, korrel, gras), licht van rechtsboven,
     bladeren en gras opgebouwd uit veel kleine vormen, lagen landschap met nevel. Alles is vast (zaadgetallen), dus elke keer hetzelfde beeld.
     Huizen staan in hun eigen maat (grond op y=128, midden rond x=106) en worden in de wereld 1,3× vergroot. */
  let uid = 0, U = 'lf0';
  const R = n => Math.round(n * 10) / 10;
  const G = (id, a, b, v) => `<linearGradient id="${id}" x1="0" y1="0" x2="${v ? 0 : 1}" y2="${v ? 1 : 0}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
  const LG = (id, stops, x2 = 0, y2 = 1) => `<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</linearGradient>`;
  const RG = (id, stops, cx = .5, cy = .5, r = .5) => `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops.map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`).join('')}</radialGradient>`;
  function rng(seed) { let s = seed >>> 0 || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  const darker = (hex, f) => { const n = parseInt(hex.slice(1), 16), c = s => Math.max(0, Math.min(255, Math.round(((n >> s) & 255) * f))); return '#' + [16, 8, 0].map(s => c(s).toString(16).padStart(2, '0')).join(''); };

  /* bladerkruin uit veel kleine bladclusters; pal = [schaduw, donker, midden, licht] */
  function foliage(r, cx, cy, rx, ry, pal, n = 70, size = 1) {
    let out = '';
    for (let k = 0; k < n; k++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()), x = cx + Math.cos(a) * rx * d, y = cy + Math.sin(a) * ry * d;
      const light = (x - cx) / rx * .5 - (y - cy) / ry * .6 + (r() - .5) * .5;
      const c = light > .45 ? pal[3] : light > .1 ? pal[2] : light > -.3 ? pal[1] : pal[0];
      const s = (2.2 + r() * 2.6) * size;
      out += `<ellipse cx="${R(x)}" cy="${R(y)}" rx="${R(s)}" ry="${R(s * .8)}" transform="rotate(${Math.round(r() * 180)} ${R(x)} ${R(y)})" fill="${c}"/>`;
    }
    return out;
  }
  const LEAF = ['#1f4a2a', '#2e6a36', '#4a8a44', '#7aae5a'];
  /* loofboom met stam, takken en bladerdak */
  function tree(x, y, s = 1, pal = LEAF, seed) {
    const r = rng(seed || Math.round(x * 13 + y * 7));
    return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="6" cy="1" rx="26" ry="4" fill="#1a2a10" opacity=".28"/>
      <path d="M-3 0C-2-10-4-22-1-34L1-34C3-24 2-12 4 0Z" fill="#4a3424"/><path d="M1-2C2-12 1-22 2-32" stroke="#6e5238" stroke-width="1" fill="none"/><path d="M-2-8c1 1 1 3 0 4M2-16c-1 1-1 3 0 4" stroke="#2e2014" stroke-width=".6" fill="none"/>
      <path d="M-1-20C-8-26-12-30-14-36M1-24C8-30 12-34 16-38" stroke="#4a3424" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="0" cy="-46" rx="24" ry="19" fill="${pal[0]}"/>${foliage(r, 0, -46, 24, 19, pal, 110)}</g>`;
  }
  /* den: lagen naalden, donker aan de schaduwkant */
  function pine(x, y, s = 1, c = '#2a5a3a', seed) {
    const r = rng(seed || Math.round(x * 31 + y)), lt = darker(c, 1.35), dk = darker(c, .7);
    let tiers = '';
    for (let k = 0; k < 5; k++) {
      const ty = -6 - k * 8, w = 15 - k * 2.6, h = 13;
      let left = `M0 ${ty - h}`, right = '';
      for (let j = 1; j <= 4; j++) { const yy = ty - h + h * j / 4, xx = w * j / 4; left += `L${R(-xx - r() * 1.5)} ${R(yy)}L${R(-xx * .8)} ${R(yy - 1.5)}`; }
      left += `L0 ${ty}Z`;
      for (let j = 1; j <= 4; j++) { const yy = ty - h + h * j / 4, xx = w * j / 4; right += `L${R(xx + r() * 1.5)} ${R(yy)}L${R(xx * .8)} ${R(yy - 1.5)}`; }
      tiers += `<path d="${left}" fill="${dk}"/><path d="M0 ${ty - h}${right}L0 ${ty}Z" fill="${c}"/><path d="M1 ${ty - h + 3}L${R(w * .5)} ${ty - 3}" stroke="${lt}" stroke-width=".9" opacity=".7"/>`;
    }
    return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="4" cy="1" rx="13" ry="2.6" fill="#1a2a10" opacity=".25"/><rect x="-1.6" y="-8" width="3.2" height="9" fill="#4a3424"/>${tiers}</g>`;
  }
  /* palm: geringde stam, veren bladeren met losse blaadjes */
  function palm(x, y, s = 1) {
    let trunk = '', fr = '';
    for (let k = 0; k < 13; k++) { const t = k / 13, px = 8 * t * t - 1 * t, py = -62 * t; trunk += `<path d="M${R(px - 3.2 + t)} ${R(py)}q${R(3.2 - t)} 2.4 ${R(6.4 - t * 2)} 0" stroke="#5a3e26" stroke-width="1" fill="none"/>`; }
    const fronds = [[-160, 34, 1], [-130, 38, 1], [-100, 30, 0], [-70, 36, 0], [-40, 38, 0], [-15, 32, 0], [-195, 30, 1], [20, 28, 0]];
    fronds.forEach(([ang, len, back]) => {
      const a = ang / 57.3, ex = Math.cos(a) * len, ey = Math.sin(a) * len * .7 + len * .45, cx = Math.cos(a) * len * .5, cy = Math.sin(a) * len * .5 - 4;
      const col = back ? '#2a5a2a' : '#3e7a34', lt = back ? '#3e7a34' : '#6aa04a';
      let lf = '';
      for (let j = 2; j < 12; j++) {
        const t = j / 12, px = 2 * (1 - t) * t * cx + t * t * ex, py = 2 * (1 - t) * t * cy + t * t * ey, dx = 2 * (1 - t) * cx + 2 * t * (ex - cx), dy = 2 * (1 - t) * cy + 2 * t * (ey - cy), l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l, ll = 9 * (1 - t * .6);
        lf += `<path d="M${R(px)} ${R(py)}l${R(nx * ll + dx / l * 3)} ${R(ny * ll + dy / l * 3 + 2)}M${R(px)} ${R(py)}l${R(-nx * ll + dx / l * 3)} ${R(-ny * ll + dy / l * 3 + 2)}" stroke="${j % 2 ? col : lt}" stroke-width="1.6" stroke-linecap="round"/>`;
      }
      fr += `<g>${lf}<path d="M0 0Q${R(cx)} ${R(cy)} ${R(ex)} ${R(ey)}" stroke="#5a7a2a" stroke-width="1.2" fill="none"/></g>`;
    });
    return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="10" cy="1" rx="22" ry="3" fill="#1a2a10" opacity=".22"/>
      <path d="M-3.4 0C-3-20 0-44 5.6-62H10.4C5-44 3-20 3.4 0Z" fill="#8a6a48"/><path d="M1 0C1.4-20 4-44 8.6-62H10.4C5-44 3-20 3.4 0Z" fill="#5a4230" opacity=".7"/>${trunk}
      <g transform="translate(8 -62)">${fr}<circle cx="-2" cy="2" r="2.6" fill="#5a3a1c"/><circle cx="2.4" cy="3" r="2.6" fill="#4a2e16"/><circle cx="0" cy="5" r="2.4" fill="#6a4422"/></g></g>`;
  }
  const bush = (x, y, pal = LEAF) => `<g><ellipse cx="${x + 9}" cy="${y + 1}" rx="14" ry="2.4" fill="#1a2a10" opacity=".25"/><ellipse cx="${x + 9}" cy="${y - 5}" rx="13" ry="8" fill="${pal[0]}"/>${foliage(rng(x * 3 + y), x + 9, y - 5, 13, 7, pal, 48)}${[0, 1, 2, 3].map(k => `<circle cx="${x + 2 + k * 5}" cy="${y - 7 + (k % 2) * 4}" r="1.2" fill="${k % 2 ? '#f4d040' : '#e85a8a'}"/>`).join('')}</g>`;
  /* gras: veel sprietjes, groter naar voren; skip(x, y) laat plekken vrij (paadje) */
  function grass(r, x0, x1, y0, y1, n, pal, skip) {
    let out = '';
    for (let k = 0; k < n; k++) {
      const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0); if (skip && skip(x, y)) continue;
      const f = (y - y0) / (y1 - y0 + 1), h = 1.5 + f * 4 + r() * 1.5, l = (r() - .5) * 3;
      out += `<path d="M${R(x)} ${R(y)}q${R(l * .3)} ${R(-h * .6)} ${R(l)} ${R(-h)}" stroke="${pal[k % pal.length]}" stroke-width="${R(.5 + f * .7)}" fill="none" stroke-linecap="round"/>`;
    }
    return out;
  }
  const tuft = (x, y) => grass(rng(x * 7 + y), x - 3, x + 3, y - 1, y, 7, ['#3e6a28', '#5a8a36', '#7aaa4a']);
  const flowers = (r, n, x0, x1, y0, y1, skip) => { let o = ''; for (let k = 0; k < n; k++) { const x = x0 + r() * (x1 - x0), y = y0 + r() * (y1 - y0); if (skip && skip(x, y)) continue; o += `<circle cx="${R(x)}" cy="${R(y)}" r="${R(.6 + r() * .9)}" fill="${['#fff', '#f4d040', '#e85a8a', '#b07ad8'][k % 4]}"/>`; } return o; };

  /* ---------- lucht ---------- */
  const SKY = {
    dawn: [['#5a7ac0'], ['#d8a8b0'], ['#ffd8a8']], day: [['#3d86c6'], ['#8cc0e6'], ['#e8eef0']],
    dusk: [['#2e2a68'], ['#a85a78'], ['#ffa070']], night: [['#060c24'], ['#121e46'], ['#26365e']]
  };
  /* stapelwolk: veel bolletjes, onderkant in schaduw */
  function cumulus(seed, cx, cy, w, h, pal) {
    const r = rng(seed); let base = '', mid = '', top = '';
    const n = Math.max(6, Math.round(w / 7));
    for (let k = 0; k < n; k++) {
      const t = k / (n - 1), x = cx - w / 2 + t * w + (r() - .5) * 4, bump = Math.sin(t * Math.PI), rr = h * (.28 + bump * .42) * (.8 + r() * .4), y = cy - rr * .5 - bump * h * .2;
      base += `<circle cx="${R(x)}" cy="${R(y + rr * .2)}" r="${R(rr)}" fill="${pal[0]}"/>`; mid += `<circle cx="${R(x - rr * .08)}" cy="${R(y - rr * .08)}" r="${R(rr * .88)}" fill="${pal[1]}"/>`;
      top += `<circle cx="${R(x - rr * .25)}" cy="${R(y - rr * .3)}" r="${R(rr * .55)}" fill="${pal[2]}"/>`;
      if (r() > .4) top += `<circle cx="${R(x + rr * .3)}" cy="${R(y - rr * .55)}" r="${R(rr * .35)}" fill="${pal[2]}"/>`;
    }
    return `<g filter="url(#${U}soft)"><defs><clipPath id="${U}c${seed}"><rect x="${cx - w}" y="${cy - h * 3}" width="${w * 2}" height="${h * 3 + h * .12}"/></clipPath></defs><g clip-path="url(#${U}c${seed})">${base}${mid}${top}</g><ellipse cx="${cx}" cy="${R(cy + h * .1)}" rx="${R(w * .55)}" ry="${R(h * .08)}" fill="${pal[0]}" opacity=".6"/></g>`;
  }
  const CLOUD = { day: ['#b4c4d8', '#e2eaf2', '#fff'], dawn: ['#c890a0', '#f4c8c8', '#fff0e4'], dusk: ['#6a4a7a', '#c87a8a', '#ffb898'] };
  const cloud = (seed, x, y, w, h, d, sky) => `<g class="lv-cloud" style="animation-duration:${d}s">${cumulus(seed, x, y, w, h, CLOUD[sky])}</g>`;
  function skyLayer(u, sky) {
    let out = `<rect width="400" height="240" fill="url(#${u}sky)"/>`;
    if (sky === 'night') {
      out += `<circle cx="326" cy="46" r="44" fill="url(#${u}glow)"/><circle cx="326" cy="46" r="13" fill="#f4eed8"/><circle cx="322" cy="42" r="2.8" fill="#d8d0b4"/><circle cx="330" cy="50" r="2" fill="#d8d0b4"/><circle cx="331" cy="40" r="1.4" fill="#d8d0b4"/><circle cx="319" cy="50" r="1.2" fill="#d8d0b4"/><path d="M314 50a13 13 0 0 0 24 0a14 14 0 0 1-24 0Z" fill="#000" opacity=".08"/>`;
      const r = rng(5);
      for (let k = 0; k < 90; k++) { const x = r() * 400, y = r() * 140, big = r() > .9; out += `<circle${k % 4 ? '' : ` class="lv-star" style="animation-delay:${(k % 7) * .4}s"`} cx="${R(x)}" cy="${R(y)}" r="${big ? 1.1 : R(.3 + r() * .4)}" fill="${r() > .8 ? '#ffe8c0' : '#fff'}" opacity="${R(.5 + r() * .5)}"/>`; }
      out += `<path d="M0 60C80 40 160 50 240 30S360 10 400 20" stroke="#8aa0d0" stroke-width="18" opacity=".05" fill="none"/>`;
      return out;
    }
    if (sky === 'day') out += `<circle cx="332" cy="40" r="72" fill="url(#${u}glow)"/><circle cx="332" cy="40" r="9" fill="#fffdf2"/>`
      + cloud(3, 70, 44, 90, 22, 70, 'day') + cloud(5, 230, 30, 64, 16, 90, 'day') + `<g opacity=".75">${cloud(11, 150, 82, 50, 9, 80, 'day')}</g>`;
    if (sky === 'dawn') out += `<circle cx="70" cy="146" r="110" fill="url(#${u}glow)"/><circle cx="70" cy="146" r="13" fill="#fff4d8"/>`
      + cloud(7, 260, 44, 80, 16, 90, 'dawn') + cloud(13, 150, 74, 50, 10, 80, 'dawn');
    if (sky === 'dusk') out += `<circle cx="330" cy="150" r="120" fill="url(#${u}glow)"/><circle cx="330" cy="152" r="15" fill="#ffd8a0"/>`
      + cloud(17, 90, 54, 90, 18, 90, 'dusk') + cloud(19, 240, 34, 64, 12, 100, 'dusk');
    if (sky === 'day' || sky === 'dawn') out += `<g class="lv-birds">${[[0, 0, 1], [14, 6, .8], [26, -2, .9]].map(([x, y, s]) => `<path d="M${x} ${y + 60}q${R(3 * s)} ${R(-2.6 * s)} ${R(6 * s)} -.4q${R(3 * s)} ${R(-1.4 * s)} ${R(6 * s)} 1.4" stroke="#2a2a32" stroke-width=".9" fill="none" opacity=".6"/>`).join('')}</g>`;
    return out;
  }

  /* ---------- landschap ---------- */
  /* bergkam met ruis */
  function ridge(r, y0, amp, step, rough, x0 = -10, x1 = 410) {
    let d = `M${x0} 240V${y0}`;
    for (let x = x0; x <= x1; x += step) { const y = y0 + Math.sin(x / (40 + amp)) * amp * .6 + Math.sin(x / 17 + amp) * amp * .25 + (r() - .5) * rough; d += `L${R(x)} ${R(y)}`; }
    return d + `V240Z`;
  }
  /* bomenrij in de verte */
  const treeLine = (seed, y, c1, c2, h0 = 4, h1 = 6) => { const r = rng(seed); let o = ''; for (let x = -4; x < 404; x += 3 + r() * 3) { const h = h0 + r() * h1; o += `<ellipse cx="${R(x)}" cy="${R(y - h / 2)}" rx="${R(2.5 + r() * 2)}" ry="${R(h / 2 + 1)}" fill="${r() > .5 ? c1 : c2}"/>`; } return o; };
  const pineLine = (seed, y, c1, c2) => { const r = rng(seed); let o = ''; for (let x = -4; x < 404; x += 2.5 + r() * 2.5) { const h = 6 + r() * 7, w = h * .32; o += `<path d="M${R(x)} ${R(y - h)}L${R(x + w)} ${R(y)}H${R(x - w)}Z" fill="${r() > .5 ? c1 : c2}"/>`; } return o; };
  /* grond: kleurverloop, grastextuur, sprietjes, steentjespad naar het huis */
  const onPath = (x, y) => y > 194 && Math.abs(x - 205) < 10 + (y - 196) * .9;
  function ground(u, top, pal, opt = {}) {
    const skip = (x, y) => onPath(x, y) || (y < 200 && x > 140 && x < 300);
    let s = `<path d="M0 ${top}C80 ${top - 6} 160 ${top + 4} 240 ${top - 2}S360 ${top - 4} 400 ${top}V240H0Z" fill="url(#${u}gr)"/><rect y="${top - 6}" width="400" height="${246 - top}" filter="url(#${u}grassT)"/>`;
    s += `<path d="M196 196C186 212 172 228 164 240H240C234 228 222 212 214 196Z" fill="url(#${u}path)"/><path d="M196 196C186 212 172 228 164 240H170C180 226 192 212 199 196Z" fill="#000" opacity=".08"/>`;
    const rp = rng(31); for (let k = 0; k < 26; k++) { const t = rp(), y = 198 + t * 42, half = 9 + t * 29, x = 205 + (rp() - .5) * half * 1.7, w = 2 + t * 5; s += `<ellipse cx="${R(x)}" cy="${R(y)}" rx="${R(w)}" ry="${R(w * .5)}" fill="#7a6648"/><ellipse cx="${R(x - .4)}" cy="${R(y - .5)}" rx="${R(w * .85)}" ry="${R(w * .38)}" fill="${rp() > .5 ? '#d8c8a8' : '#c4b08c'}"/>`; }
    if (opt.grass !== false) { const r = rng(55); s += grass(r, 0, 400, top + 2, 242, opt.n || 1300, pal, skip) + flowers(r, 36, 0, 400, top + 12, 238, skip); }
    return s;
  }
  const GRASS = ['#4a7a30', '#5a8a36', '#7aaa4a', '#8aba5a', '#3e6a28'];
  function land(u, biome) {
    if (biome === 'bosque') return `<path id="${u}mt" d="${ridge(rng(1), 114, 36, 4, 9)}" fill="url(#${u}m1)"/>`
      + `<path d="${ridge(rng(1), 114, 36, 4, 9)}" fill="url(#${u}rock)" opacity=".5"/>`
      + `<rect y="104" width="400" height="60" fill="url(#${u}haze)"/>`
      + `<path d="${ridge(rng(2), 148, 12, 3, 4)}" fill="url(#${u}m2)"/>${pineLine(22, 154, '#2e5a3e', '#3a6a48')}`
      + `<path d="${ridge(rng(4), 164, 5, 6, 2)}" fill="url(#${u}m3)"/>${pineLine(23, 170, '#244a30', '#2e5a3a')}`
      + [6, 28, 300, 324, 350, 376, 398].map((x, k) => pine(x, 178 + (k % 2) * 3, .78 + (k % 3) * .12, k % 2 ? '#2a5a3a' : '#33664a')).join('')
      + ground(u, 176, GRASS);
    if (biome === 'pueblo') {
      const vill = [[14, '#e8d8c0'], [36, '#f0e2c8'], [58, '#e0c8b0'], [300, '#ecdcc4'], [322, '#e4ccb4'], [346, '#f2e6d0'], [372, '#e0d0b8']];
      return `<path d="${ridge(rng(1), 122, 24, 4, 7)}" fill="url(#${u}m1)"/><rect y="110" width="400" height="50" fill="url(#${u}haze)"/>`
        + `<path d="${ridge(rng(2), 146, 10, 3, 4)}" fill="url(#${u}m2)"/>${treeLine(21, 156, '#3e6a3a', '#4e7a44')}`
        + vill.map(([x, c], k) => { const y = 148 + (k % 2) * 3, w = 16 + (k % 3) * 3; return `<rect x="${x}" y="${y}" width="${w}" height="12" fill="${c}"/><rect x="${x + w - 5}" y="${y}" width="5" height="12" fill="#000" opacity=".12"/><path d="M${x - 1.5} ${y + .5}L${x + w / 2} ${y - 6}L${x + w + 1.5} ${y + .5}Z" fill="#b0583a"/><path d="M${x + w / 2} ${y - 6}L${x + w + 1.5} ${y + .5}H${x + w * .7}Z" fill="#000" opacity=".15"/>${[0, 1].map(i => `<rect x="${R(x + 3 + i * (w - 9))}" y="${y + 3}" width="3" height="4" fill="url(#${u}glass)"/>`).join('')}`; }).join('')
        + `<g><rect x="84" y="128" width="16" height="32" fill="#f2e8d6"/><rect x="95" y="128" width="5" height="32" fill="#000" opacity=".1"/><path d="M82 129h20l-10-9Z" fill="#a85a3a"/><path d="M89 135a3 3 0 0 1 6 0v5h-6Z" fill="#3a3028"/><circle cx="92" cy="137" r="1.6" fill="#c8a040"/><path d="M92 112v8M89.5 115h5" stroke="#5a4a3a" stroke-width="1"/><rect x="88" y="150" width="8" height="10" fill="#5a3a24"/></g>`
        + `<path d="${ridge(rng(4), 162, 4, 6, 2)}" fill="url(#${u}m3)"/>`
        + tree(118, 174, .55, LEAF, 61) + tree(286, 174, .6, LEAF, 62) + ground(u, 172, GRASS);
    }
    if (biome === 'campo') {
      const mesa = (x, w, h, y, c = '#c89070') => { const r = rng(x + 99); let top = `M${x} ${y}L${x + 6} ${y - h * .55}L${x + 10} ${y - h * .9}`; for (let k = 1; k < 8; k++) top += `L${R(x + 10 + (w - 20) * k / 8)} ${R(y - h + (r() - .3) * 2.4)}`; top += `L${x + w - 10} ${y - h * .92}L${x + w - 5} ${y - h * .5}L${x + w} ${y}Z`;
        return `<path d="${top}" fill="${c}"/><path d="${top}" fill="url(#${u}rock)" opacity=".9" transform="translate(${x + w} 0) scale(-1 1) translate(${-x} 0)"/>${[.25, .45, .62, .8].map((t, k) => `<path d="M${R(x + 9 * (1 - t) + 2)} ${R(y - h * (1 - t) + 2)}H${R(x + w - 9 * (1 - t) - 2)}" stroke="${k % 2 ? '#e8b898' : '#a86a50'}" stroke-width="${k % 2 ? .8 : 1.2}" opacity=".7"/>`).join('')}<path d="M${x + 8} ${y - h * .9}L${x + w - 9} ${y - h * .9}" stroke="#f4d0b0" stroke-width=".8" opacity=".8"/><path d="M${x - 6} ${y}Q${x + 3} ${y - h * .3} ${x + 8} ${y - h * .3}L${x + 12} ${y}ZM${x + w + 6} ${y}Q${x + w - 3} ${y - h * .3} ${x + w - 8} ${y - h * .3}L${x + w - 12} ${y}Z" fill="${darker(c, .85)}"/>`; };
      const agave = (x, y, s) => { let o = ''; for (let k = 0; k < 9; k++) { const a = (-160 + k * 17.5) / 57.3, l = 10 + (k % 3) * 3; o += `<path d="M0 0Q${R(Math.cos(a) * l * .3)} ${R(Math.sin(a) * l * .7)} ${R(Math.cos(a) * l)} ${R(Math.sin(a) * l)}L${R(Math.cos(a) * l * .2 + 1.2)} 0Z" fill="${k % 2 ? '#4a8a6a' : '#6aa080'}"/>`; } return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="2" cy="1" rx="12" ry="2" fill="#3a2a10" opacity=".25"/>${o}</g>`; };
      const saguaro = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="4" cy="1" rx="10" ry="2" fill="#3a2a10" opacity=".25"/><path d="M-3 0V-34a3 3 0 0 1 6 0V0Z" fill="#4a8a5a"/><path d="M1 0V-34a3 3 0 0 0-1-2" stroke="#2e6a42" stroke-width="2" fill="none"/><path d="M-3-14H-8a2.6 2.6 0 0 1-2.6-2.6V-24a2.6 2.6 0 0 1 5.2 0v5H-3ZM3-20H7a2.6 2.6 0 0 0 2.6-2.6V-28a2.6 2.6 0 0 0-5.2 0v4H3Z" fill="#4a8a5a"/>${[-2, 0, 2].map(d => `<path d="M${d} -2V-33" stroke="#2e6a42" stroke-width=".5"/>`).join('')}</g>`;
      return `<path d="${ridge(rng(1), 128, 14, 5, 4)}" fill="#c8a8a0" opacity=".7"/><rect y="110" width="400" height="50" fill="url(#${u}haze)"/>`
        + `<g opacity=".75">${mesa(40, 80, 30, 150, '#d0a890')}${mesa(250, 70, 24, 150, '#d0a890')}</g><rect y="120" width="400" height="40" fill="url(#${u}haze)" opacity=".6"/>` + mesa(-20, 84, 40, 158) + mesa(300, 120, 34, 158)
        + `<path d="${ridge(rng(2), 160, 5, 5, 2)}" fill="#c8b07a"/>` + treeLine(24, 166, '#7a8a4a', '#8a9a5a', 2, 4)
        + `<path d="M0 174C80 168 160 176 240 170S360 168 400 172V240H0Z" fill="url(#${u}gr)"/>`
        + saguaro(18, 182, 1) + saguaro(372, 180, 1.1) + agave(52, 186, 1) + agave(336, 188, .9) + agave(398, 196, 1.1)
        + ground(u, 176, ['#7a8a3a', '#9aa04a', '#b0a858', '#6a7a30', '#c0b070'], { n: 900 });
    }
    if (biome === 'mar') {
      const r = rng(41); let glint = ''; for (let k = 0; k < 40; k++) { const x = 250 + r() * 140, y = 148 + r() * 34; glint += `<path d="M${R(x)} ${R(y)}h${R(2 + r() * 5)}" stroke="#fff" stroke-width=".8" opacity="${R(.3 + r() * .5)}"/>`; }
      return `<path d="M0 146H400V150H0Z" fill="#c8dce8" opacity=".6"/><path d="${ridge(rng(3), 140, 3, 8, 2, -10, 130)}" fill="#8aa0b0" opacity=".5" transform="translate(0 6) scale(1 .96)"/>`
        + `<rect y="146" width="400" height="44" fill="url(#${u}sea)"/><rect y="146" width="400" height="44" fill="url(#${u}glint)" opacity=".7"/>${glint}`
        + `<g class="lv-wave">${[20, 110, 230, 320].map((x, k) => `<path d="M${x} ${162 + (k % 2) * 8}c8-2 16 2 24 0s16-2 24 0" stroke="#fff" stroke-width="1" fill="none" opacity=".7"/>`).join('')}</g>`
        + `<path d="M0 180C100 172 300 174 400 180V190H0Z" fill="#c8b890"/><path d="M0 182C100 174 300 176 400 182V240H0Z" fill="url(#${u}gr)"/><rect y="176" width="400" height="64" filter="url(#${u}sand)"/>`
        + `<path d="M0 182C100 174 300 176 400 182" stroke="#fff" stroke-width="2.6" opacity=".85" fill="none"/><path d="M0 185C100 177 300 179 400 185" stroke="#9acad8" stroke-width="2" opacity=".5" fill="none"/>`
        + `<path d="M196 196C186 212 172 228 164 240H240C234 228 222 212 214 196Z" fill="#000" opacity=".04"/>`
        + [[40, 214], [300, 210], [360, 230], [120, 232]].map(([a, b], k) => k % 2 ? `<path d="M${a} ${b}l2.6-3.4 2.6 3.4-2.6 .8Z" fill="#e8b0a0"/><path d="M${a + 2.6} ${b - 3.4}v4" stroke="#c88a7a" stroke-width=".4"/>` : `<ellipse cx="${a}" cy="${b}" rx="2.6" ry="1.6" fill="#f4ecdc"/><path d="M${a - 2} ${b}h4" stroke="#c8b8a0" stroke-width=".4"/>`).join('')
        + grass(rng(9), 0, 400, 186, 240, 60, ['#a8a060', '#8a9050'], onPath);
    }
    // isla: zee rondom, lagune, eiland in het midden
    return `<rect y="140" width="400" height="100" fill="url(#${u}sea)"/><rect y="140" width="400" height="60" fill="url(#${u}glint)" opacity=".6"/><path d="M0 140H400V143H0Z" fill="#c8dce8" opacity=".6"/>`
      + `<g class="lv-wave">${[10, 120, 300, 350].map((x, k) => `<path d="M${x} ${156 + (k % 2) * 66}c8-2 16 2 24 0s16-2 24 0" stroke="#fff" stroke-width="1" fill="none" opacity=".7"/>`).join('')}</g>`
      + `<ellipse cx="210" cy="208" rx="212" ry="48" fill="url(#${u}lag)"/><ellipse cx="210" cy="208" rx="190" ry="36" fill="#e8d6a8"/><rect y="170" width="400" height="76" filter="url(#${u}sand)" clip-path="url(#${u}isl)"/>`
      + `<defs><clipPath id="${u}isl"><ellipse cx="210" cy="208" rx="190" ry="36"/></clipPath></defs><path d="M24 214C80 236 340 236 396 214" stroke="#fff" stroke-width="2.4" fill="none" opacity=".8"/>`
      + `<ellipse cx="210" cy="201" rx="164" ry="24" fill="url(#${u}gr)"/><ellipse cx="210" cy="201" rx="164" ry="24" filter="url(#${u}grassT)" opacity=".6"/>`
      + grass(rng(57), 60, 360, 184, 222, 700, GRASS, (x, y) => ((x - 210) / 160) ** 2 + ((y - 201) / 22) ** 2 > 1 || onPath(x, y) || (y < 200 && x > 130 && x < 310))
      + flowers(rng(58), 20, 70, 350, 196, 220, (x, y) => ((x - 210) / 160) ** 2 + ((y - 201) / 22) ** 2 > 1);
  }
  /* kleuren per landschap: verre bergen, heuvels, grond */
  const LAND = {
    bosque: { m1: ['#6a7e9a', '#9aaec4'], m2: ['#4e6e5a', '#6a8a6a'], m3: ['#3e6a3a', '#5a8a44'], gr: ['#86ac56', '#6a9842', '#4a7a2e'] },
    pueblo: { m1: ['#7890b0', '#a8bcd0'], m2: ['#6e8a7a', '#93a88e'], m3: ['#5a7a48', '#7a9a5a'], gr: ['#8ab05a', '#6e9a44', '#4e7a30'] },
    campo: { m1: ['#b8a0a0', '#d8c0b0'], m2: ['#c8b07a', '#d8c08a'], m3: ['#a8a060', '#b8b070'], gr: ['#c8b878', '#b0a060', '#98884a'] },
    mar: { m1: ['#8aa0b0', '#b0c4d0'], m2: ['#8aa0b0', '#b0c4d0'], m3: ['#8aa0b0', '#b0c4d0'], gr: ['#ead8b0', '#e0c898', '#d4b882'] },
    isla: { m1: ['#8aa0b0', '#b0c4d0'], m2: ['#8aa0b0', '#b0c4d0'], m3: ['#8aa0b0', '#b0c4d0'], gr: ['#8ab05a', '#6e9a44', '#4e7a30'] }
  };
  /* alle gedeelde verlopen en filters van één tekening */
  function defs(u, biome, sky) {
    const L = LAND[biome], night = sky === 'night', S3 = SKY[sky].map(c => c[0]);
    const glow = { day: '#fff2c0', dawn: '#ffc890', dusk: '#ff9a6a', night: '#c8d4ff' }[sky];
    return `<defs>${LG(u + 'sky', [[0, S3[0]], [.55, S3[1]], [1, S3[2]]])}${RG(u + 'glow', [[0, glow, .95], [.2, glow, .6], [1, glow, 0]])}
      ${LG(u + 'haze', [[0, S3[2], 0], [1, S3[2], .65]])}<linearGradient id="${u}m1" gradientUnits="userSpaceOnUse" x1="0" y1="${biome === 'bosque' ? 74 : 100}" x2="0" y2="170">${(biome === 'bosque' ? [[0, '#f6f8fc'], [.24, '#e2e8f0'], [.3, L.m1[0]], [1, L.m1[1]]] : [[0, L.m1[0]], [1, L.m1[1]]]).map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>${LG(u + 'm2', [[0, L.m2[0]], [1, L.m2[1]]])}${LG(u + 'm3', [[0, L.m3[0]], [1, L.m3[1]]])}
      ${LG(u + 'rock', [[0, '#000', .25], [.4, '#000', 0]], 1, 0)}${LG(u + 'gr', [[0, L.gr[0]], [.4, L.gr[1]], [1, L.gr[2]]])}${LG(u + 'path', [[0, '#cbb894'], [1, '#a8936c']])}
      ${LG(u + 'sea', [[0, '#5a9ec0'], [.4, '#2a7aaa'], [1, '#1a5a8a']])}${RG(u + 'glint', [[0, '#fff', .55], [1, '#fff', 0]], .8, .1, .5)}${RG(u + 'lag', [[.7, '#7ad8d0', .9], [1, '#7ad8d0', 0]])}
      ${LG(u + 'glass', night ? [[0, '#fff2b0'], [.5, '#ffd270'], [1, '#e8a040']] : [[0, '#b8d4e4'], [.5, '#5e7e94'], [1, '#2e4454']], 1, 1)}
      ${LG(u + 'eave', [[0, '#2a1408', .45], [1, '#2a1408', 0]])}${RG(u + 'vig', [[.6, '#000', 0], [1, '#1a1008', .3]], .5, .45, .75)}
      <filter id="${u}soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation=".35"/></filter>
      <filter id="${u}stucco" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="3" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.0" result="a"/><feComposite in="SourceGraphic" in2="a" operator="in" result="t"/><feBlend in="SourceGraphic" in2="t" mode="multiply"/></filter>
      <filter id="${u}cloth" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="5" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -.7 .5" result="a"/><feComposite in="SourceGraphic" in2="a" operator="in" result="t"/><feBlend in="SourceGraphic" in2="t" mode="multiply"/></filter>
      <filter id="${u}wood" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".04 .9" numOctaves="2" seed="6" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.1" result="a"/><feComposite in="SourceGraphic" in2="a" operator="in" result="t"/><feBlend in="SourceGraphic" in2="t" mode="multiply"/></filter>
      <filter id="${u}grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="9"/><feColorMatrix type="matrix" values="0 0 0 0 .3  0 0 0 0 .25  0 0 0 0 .2  0 0 0 .14 0"/></filter>
      <filter id="${u}grassT" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".08 .5" numOctaves="3" seed="4"/><feColorMatrix type="matrix" values="0 0 0 0 .1  0 0 0 0 .2  0 0 0 0 .05  0 0 0 .5 -.1"/></filter>
      <filter id="${u}sand" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="12"/><feColorMatrix type="matrix" values="0 0 0 0 .45  0 0 0 0 .35  0 0 0 0 .2  0 0 0 .35 -.05"/></filter></defs>`;
  }

  /* ---------- onderkomens ---------- */
  const tex = k => `filter="url(#${U}${k})"`;
  /* raam met diepe dagkant, kozijn, roeden, weerspiegeling, vensterbank; o.shut = luikkleur, o.arch = boog, o.box = bloembak */
  function win(x, y, w, h, o = {}) {
    const fr = o.frame || '#f4ece0', arch = o.arch;
    const shape = (a, b, c, d) => arch ? `M${a} ${b + d}V${b + c / 2}A${c / 2} ${c / 2} 0 0 1 ${a + c} ${b + c / 2}V${b + d}Z` : `M${a} ${b}h${c}v${d}h${-c}Z`;
    let s = '';
    if (o.shut) { const sw = R(w * .48); s += `<rect x="${R(x - 2.5 - sw)}" y="${y - 2.5}" width="${sw}" height="${h + 5}" fill="${o.shut}"/><rect x="${x + w + 2.5}" y="${y - 2.5}" width="${sw}" height="${h + 5}" fill="${o.shut}"/>`; for (let k = 0; k < Math.floor(h / 2.2); k++) s += `<path d="M${R(x - 2 - sw)} ${R(y - 1 + k * 2.2)}h${R(sw - 1)}M${x + w + 3} ${R(y - 1 + k * 2.2)}h${R(sw - 1)}" stroke="#000" stroke-width=".45" opacity=".3"/>`; s += `<rect x="${R(x - 2.5 - sw)}" y="${y - 2.5}" width="${sw}" height="${h + 5}" fill="none" stroke="#000" stroke-width=".4" opacity=".3"/><rect x="${x + w + 2.5}" y="${y - 2.5}" width="${sw}" height="${h + 5}" fill="none" stroke="#000" stroke-width=".4" opacity=".3"/>`; }
    s += `<path d="${shape(x - 2.5, y - 2.5, w + 5, h + 5)}" fill="${fr}"/><path d="${shape(x - 2.5, y - 2.5, w + 5, h + 5)}" fill="none" stroke="#000" stroke-width=".4" opacity=".25"/>`;
    s += `<path d="${shape(x, y, w, h)}" fill="#3a3028"/><path d="${shape(x + 1.2, y + 1.2, w - 2.4, h - 2.4)}" fill="url(#${U}glass)"/>`;
    s += `<path d="M${x + 1.2} ${y + h * .2}L${x + w * .7} ${y + 1.2}H${x + w - 1.2}V${y + h * .1}L${x + 1.2} ${y + h * .8}Z" fill="#fff" opacity=".16"/>`;
    if (o.cross !== false) s += `<path d="M${x + w / 2} ${y + (arch ? 0 : 0)}v${h}M${x} ${R(y + h * .45)}h${w}" stroke="${fr}" stroke-width="1.1"/>`;
    s += `<path d="M${x} ${y + (arch ? w / 2 : 0)}h${w}" stroke="#000" stroke-width="1.6" opacity=".22"/>`;
    s += `<path d="M${x - 4} ${y + h + 2.5}h${w + 8}l-1.2 2.4h${-w - 5.6}Z" fill="${o.sill || '#e0d4c2'}"/><path d="M${x - 2.8} ${y + h + 4.9}h${w + 5.6}" stroke="#5a4a38" stroke-width=".6" opacity=".5"/>`;
    if (o.box) { s += `<path d="M${x - 1} ${y + h + 4.9}h${w + 2}l-1 4h${-w}Z" fill="#8a4a2a"/>`; const r = rng(Math.round(x * 3 + y)); s += foliage(r, x + w / 2, y + h + 4, w / 2 + 1, 2.4, ['#2a5a26', '#3e7a36', '#5a9a44', '#7aba5a'], 22, .6); for (let k = 0; k < 5; k++) s += `<circle cx="${R(x + r() * w)}" cy="${R(y + h + 2 + r() * 3)}" r="1" fill="${o.box[k % o.box.length]}"/>`; }
    return `<g>${s}</g>`;
  }
  function door(x, y, w, h, c, o = {}) {
    const shape = (a, b, cw, ch) => o.arch ? `M${a} ${b + ch}V${b + cw / 2}A${cw / 2} ${cw / 2} 0 0 1 ${a + cw} ${b + cw / 2}V${b + ch}Z` : `M${a} ${b + ch}V${b}H${a + cw}V${b + ch}Z`;
    let p = ''; const n = Math.max(4, Math.round(w / 3));
    for (let k = 1; k < n; k++) p += `<path d="M${R(x + k * w / n)} ${y + (o.arch ? 2 : 1)}V${y + h}" stroke="#000" stroke-width=".5" opacity=".3"/>`;
    return `<g><path d="${shape(x - 2.6, y - 2.6, w + 5.2, h + 2.6)}" fill="${o.frame || '#e8dcc8'}"/><path d="${shape(x - 2.6, y - 2.6, w + 5.2, h + 2.6)}" fill="none" stroke="#000" stroke-width=".4" opacity=".25"/>
      <path d="${shape(x, y, w, h)}" fill="${c}" ${tex('wood')}/>${p}<path d="M${x} ${y + h * .45}h${w}M${x} ${y + h * .78}h${w}" stroke="#000" stroke-width=".7" opacity=".25"/>
      <path d="${shape(x, y, w, h)}" fill="url(#${U}eave)" opacity=".8"/><circle cx="${R(x + w * .82)}" cy="${R(y + h * .58)}" r="1" fill="#d8b860"/><circle cx="${R(x + w * .82)}" cy="${R(y + h * .58)}" r=".4" fill="#fff8d0"/>
      <path d="M${x - 4} ${y + h}h${w + 8}l-1.4 2.4h${-w - 5.2}Z" fill="#b8a890"/><path d="M${x - 3} ${y + h + 2.4}h${w + 6}" stroke="#5a4a38" stroke-width=".5" opacity=".5"/></g>`;
  }
  /* holle pannen in rijen, in lokale coördinaten van het dakvlak */
  function tilesRows(w, h, cols, rows, c) {
    let o = ''; const tw = w / cols, th = h / rows;
    for (let j = 0; j < rows; j++) for (let i = 0; i <= cols; i++) {
      const x = i * tw + (j % 2 ? -tw / 2 : 0), y = j * th; if (x > w - 1 || x < -tw * .6) continue;
      o += `<path d="M${R(x)} ${R(y + th)}C${R(x)} ${R(y + th * .2)} ${R(x + tw)} ${R(y + th * .2)} ${R(x + tw)} ${R(y + th)}Z" fill="${c[(i * 7 + j * 3) % 3]}"/><path d="M${R(x + tw * .25)} ${R(y + th * .5)}C${R(x + tw * .35)} ${R(y + th * .3)} ${R(x + tw * .55)} ${R(y + th * .3)} ${R(x + tw * .6)} ${R(y + th * .45)}" stroke="#fff" stroke-width=".5" fill="none" opacity=".35"/><path d="M${R(x)} ${R(y + th)}H${R(x + tw)}" stroke="#000" stroke-width=".6" opacity=".35"/>`;
    }
    return o;
  }
  const thatchRows = (w, h, r) => { let o = ''; for (let k = 0; k < w * h / 9; k++) { const x = r() * w, y = r() * h; o += `<path d="M${R(x)} ${R(y)}l${R((r() - .5) * 1.5)} ${R(3 + r() * 3)}" stroke="${['#8a6a2a', '#b8924a', '#d8b46a', '#a07a36'][k % 4]}" stroke-width=".7"/>`; } for (let y = 6; y < h; y += 6) o += `<path d="M0 ${y}H${w}" stroke="#6a4a1a" stroke-width=".8" opacity=".5"/>`; return o; };
  const sheetRows = (w, h, c) => { let o = ''; for (let x = 0; x < w; x += 3) o += `<path d="M${R(x)} 0V${h}" stroke="${darker(c, .75)}" stroke-width="1"/><path d="M${R(x + 1.2)} 0V${h}" stroke="${darker(c, 1.25)}" stroke-width=".5" opacity=".8"/>`; return o; };
  /* het huis: voorgevel met puntgevel, zijgevel en dakvlak in perspectief, gootschaduw, sokkel
     o = { x, w, h, d, dy, roofH, eave, wall:[voor, zij], roof:[licht, donker, …], kind:'tile'|'thatch'|'sheet', wallTex:'stucco'|'wood', base, front, side, chimney } */
  function house(o) {
    o = Object.assign({ base: 128, d: 34, dy: 10, eave: 6, roofH: 30, kind: 'tile', wallTex: 'stucco' }, o);
    const { x, w, h, d, dy, base, eave, roofH } = o, top = base - h, mid = x + w / 2;
    const P0 = [x - eave, top + 3], P1 = [mid, top - roofH], P2 = [x + w + eave, top + 3];
    const L = Math.hypot(P2[0] - P1[0], P2[1] - P1[1]), ax = (P2[0] - P1[0]) / L, ay = (P2[1] - P1[1]) / L, sk = R(-dy / d * 1000) / 1000;
    const roofM = `matrix(${R(ax * 1000) / 1000} ${R(ay * 1000) / 1000} 1 ${sk} ${P1[0]} ${P1[1]})`;
    const r = rng(x * 17 + w);
    const cover = o.kind === 'thatch' ? thatchRows(R(L), d, r) : o.kind === 'sheet' ? sheetRows(R(L), d, o.roof[0]) : tilesRows(R(L), d, Math.round(L / 5.5), Math.round(d / 5), o.roof);
    let s = `<ellipse cx="${x + w / 2 + d / 2}" cy="${base + 1.5}" rx="${w / 2 + d / 2 + 14}" ry="6" fill="#1a2a10" opacity=".3"/>${o.behind || ''}`;
    s += `<path d="M${x + w} ${base}L${x + w + d} ${base - dy}V${top - dy}L${x + w} ${top}Z" fill="${o.wall[1]}" ${tex(o.wallTex)}/>`;
    s += `<g transform="matrix(1 ${sk} 0 1 ${x + w} ${top})">${o.side || ''}<path d="M0 0H${d}V7H0Z" fill="url(#${U}eave)"/></g>`;
    if (o.chimney) s += `<g><rect x="${o.chimney}" y="${top - roofH * .7}" width="9" height="${R(roofH * .55)}" fill="#b0603e" ${tex('stucco')}/><rect x="${o.chimney + 6}" y="${top - roofH * .7}" width="3" height="${R(roofH * .55)}" fill="#000" opacity=".18"/><rect x="${o.chimney - 1}" y="${top - roofH * .7 - 2.6}" width="11" height="3" fill="#7a3a24"/></g>`;
    s += `<g transform="${roofM}"><rect width="${R(L)}" height="${d}" fill="${o.roof[1]}"/>${cover}<rect width="${R(L)}" height="${d}" fill="url(#${U}eave)" opacity=".35"/></g>`;
    s += `<path d="M${P1[0]} ${P1[1]}L${P1[0] + d} ${P1[1] - dy}" stroke="${darker(o.roof[1], .7)}" stroke-width="3.4" stroke-linecap="round"/><path d="M${P1[0]} ${P1[1] - 1.1}L${P1[0] + d} ${P1[1] - dy - 1.1}" stroke="${o.roof[0]}" stroke-width=".9"/>`;
    s += `<path d="M${x} ${base}V${top}L${mid} ${top - roofH + 3}L${x + w} ${top}V${base}Z" fill="${o.wall[0]}" ${tex(o.wallTex)}/>${o.texture || ''}`;
    s += `<path d="M${x} ${top}L${mid} ${top - roofH + 3}L${x + w} ${top}V${top + 7}L${mid} ${top - roofH + 10}L${x} ${top + 7}Z" fill="url(#${U}eave)"/>`;
    s += `<rect x="${x}" y="${base - 5}" width="${w}" height="5" fill="${o.found || '#a8907a'}" ${tex('stucco')}/><path d="M${x + w} ${base - 5}L${x + w + d} ${base - 5 - dy}V${base - dy}L${x + w} ${base}Z" fill="${darker(o.found || '#a8907a', .78)}"/><path d="M${x} ${base - 5}h${w}" stroke="#000" stroke-width=".5" opacity=".3"/>`;
    s += `<path d="M${x} ${base}V${top}M${x + w} ${base}V${top}" stroke="#000" stroke-width=".5" opacity=".2"/>`;
    s += (o.front || '') + (o.gableDeco || '');
    // dakrand
    if (o.kind === 'thatch') { s += `<path d="M${P0[0]} ${P0[1]}L${P1[0]} ${P1[1]}L${P2[0]} ${P2[1]}" fill="none" stroke="${o.roof[1]}" stroke-width="5" stroke-linejoin="round"/>`; for (let k = 0; k <= 28; k++) { const t = k / 28, side = t < .5, tt = side ? t * 2 : (t - .5) * 2, ex = side ? P0[0] + (P1[0] - P0[0]) * tt : P1[0] + (P2[0] - P1[0]) * tt, ey = side ? P0[1] + (P1[1] - P0[1]) * tt : P1[1] + (P2[1] - P1[1]) * tt; s += `<path d="M${R(ex)} ${R(ey)}l${R((r() - .5) * 1.4)} ${R(3 + r() * 2.4)}" stroke="${['#8a6a2a', '#c8a050', '#a07a36'][k % 3]}" stroke-width="1"/>`; } }
    else if (o.kind === 'sheet') s += `<path d="M${P0[0]} ${P0[1]}L${P1[0]} ${P1[1]}L${P2[0]} ${P2[1]}" fill="none" stroke="#f4f0e8" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><path d="M${P0[0]} ${P0[1] + 1.4}L${P1[0]} ${P1[1] + 1.4}L${P2[0]} ${P2[1] + 1.4}" fill="none" stroke="#000" stroke-width=".6" opacity=".25"/>`;
    else { s += `<path d="M${P0[0]} ${P0[1]}L${P1[0]} ${P1[1]}L${P2[0]} ${P2[1]}" fill="none" stroke="${darker(o.roof[1], .75)}" stroke-width="4.4" stroke-linejoin="round" stroke-linecap="round"/>`; const n = Math.round(L / 4.4); for (let k = 0; k <= n; k++) { const t = k / n; [P0, P2].forEach(([ex, ey]) => { s += `<circle cx="${R(ex + (P1[0] - ex) * t)}" cy="${R(ey + (P1[1] - ey) * t + 1)}" r="1.9" fill="${o.roof[k % 3]}" stroke="#4a1a0a" stroke-width=".45"/>`; }); } }
    return s + (o.after || '');
  }
  const pot = (x, y, c) => `<path d="M${x - 4} ${y - 7}h8l-1.4 7h-5.2Z" fill="#b8643a"/><path d="M${x - 1} ${y - 7}h5l-1.4 7h-2.4Z" fill="#000" opacity=".15"/><path d="M${x - 4.4} ${y - 7}h8.8v1.6h-8.8Z" fill="#9a5030"/>${foliage(rng(x * 5 + y), x, y - 11, 6, 4, ['#2e5a2a', '#3e7a36', '#5a9a44', '#7aba5a'], 26)}${[0, 1, 2].map(k => `<circle cx="${x - 3 + k * 3}" cy="${y - 12 + (k % 2) * 2}" r="1.3" fill="${c}"/>`).join('')}`;
  const lamp = (x, y) => `<path d="M${x} ${y}v-3" stroke="#2a2a2a" stroke-width=".8"/><path d="M${x - 2.6} ${y}h5.2l-.9 4.4h-3.4Z" fill="#2a2a2a"/><rect x="${x - 1.7}" y="${y + .8}" width="3.4" height="3" fill="url(#${U}glass)"/>`;
  const TILES = ['#b4502c', '#a8462a', '#c05c34'];

  const HOMES = {
    mochila: () => `<ellipse cx="118" cy="130" rx="62" ry="5" fill="#1a2a10" opacity=".25"/>
      <path d="M128 128C126 110 140 100 154 102C170 104 178 116 176 128Z" fill="#8e8478" ${tex('stucco')}/><path d="M154 102C170 104 178 116 176 128H160C162 116 160 108 154 102Z" fill="#000" opacity=".18"/><path d="M134 116C140 106 152 104 160 108" stroke="#d8d0c4" stroke-width="1.6" opacity=".6" fill="none" stroke-linecap="round"/><path d="M146 110l3 7 4 2M162 114l-2 6" stroke="#4a4038" stroke-width=".6" opacity=".7" fill="none"/>${grass(rng(3), 126, 178, 124, 129, 30, ['#4a7a30', '#6a9a3a'])}
      <path d="M58 129C58 120 62 115 68 115H100C106 115 109 120 109 129Z" fill="#7a5434" ${tex('wood')}/><ellipse cx="60" cy="122" rx="4.4" ry="6.6" fill="#b48452"/>${[1, 2, 3].map(k => `<ellipse cx="60" cy="122" rx="${k * 1.2}" ry="${k * 1.8}" fill="none" stroke="#7a5434" stroke-width=".4"/>`).join('')}<path d="M68 119H104M70 124H106" stroke="#3a2414" stroke-width=".5" opacity=".6"/>
      <g transform="rotate(-6 100 100)"><rect x="80" y="70" width="42" height="56" rx="10" fill="#c8682a" ${tex('cloth')}/><path d="M110 70h2a10 10 0 0 1 10 10v36a10 10 0 0 1-10 10h-2Z" fill="#000" opacity=".2"/>
        <path d="M80 86C80 70 122 70 122 86V93H80Z" fill="#9a4a1c" ${tex('cloth')}/><path d="M81 93h40" stroke="#5a2a0a" stroke-width=".8" stroke-dasharray="1.6 1.2"/><path d="M82 78C88 73 114 73 120 78" stroke="#5a2a0a" stroke-width=".6" stroke-dasharray="1.6 1.2" fill="none"/>
        <rect x="88" y="99" width="26" height="21" rx="4" fill="#b45a24" ${tex('cloth')}/><rect x="88" y="99" width="26" height="6" rx="3" fill="#8a3e14"/><path d="M89 105h24" stroke="#5a2a0a" stroke-width=".5" stroke-dasharray="1.4 1"/><rect x="99" y="103" width="4" height="5" rx="1" fill="#c8a040"/>
        <path d="M95 88V96M107 88V96" stroke="#3a2a1a" stroke-width="2.4"/><rect x="93.4" y="94" width="3.2" height="3.6" rx=".6" fill="#c8a040"/><rect x="105.4" y="94" width="3.2" height="3.6" rx=".6" fill="#c8a040"/>
        <rect x="74" y="60" width="54" height="11" rx="5.5" fill="#2e6e64" ${tex('cloth')}/><path d="M75 62.5h52" stroke="#6aa89a" stroke-width="1.2" opacity=".7"/><ellipse cx="128" cy="65.5" rx="2.6" ry="5.5" fill="#1e5048"/><path d="M128 61a2 4 0 0 1 0 9" stroke="#6aa89a" stroke-width=".5" fill="none"/><path d="M85 59v13M117 59v13" stroke="#3a2a1a" stroke-width="2"/>
        <path d="M80 94C76 102 76 112 80 120M122 94C126 102 126 112 122 120" stroke="#6a3010" stroke-width="2.6" fill="none"/></g>
      <g transform="translate(150 126)"><path d="M-6 0V-16" stroke="#6a6a72" stroke-width="1.2"/><path d="M-11-26h10M-10-16h8" stroke="#2a2a30" stroke-width="1.6"/><rect x="-10" y="-26" width="8" height="10" rx="1.6" fill="url(#${U}glass)" opacity=".9"/><path d="M-6-26v10" stroke="#2a2a30" stroke-width=".6"/></g>`,

    tienda: () => `${G(U + 'tt', '#4a9a8a', '#2a6a5e')}${G(U + 'ts', '#2a6a5e', '#1a4a42')}
      <ellipse cx="116" cy="130" rx="74" ry="6" fill="#1a2a10" opacity=".3"/>
      <path d="M104 52 166 46 186 124 150 128Z" fill="url(#${U}ts)" ${tex('cloth')}/><path d="M118 54 160 118M136 52 174 116M152 50 182 112" stroke="#000" stroke-width=".7" opacity=".18"/><path d="M106 54 166 48" stroke="#8acaba" stroke-width=".7" opacity=".5"/>
      <path d="M58 128 104 52 150 128Z" fill="url(#${U}tt)" ${tex('cloth')}/><path d="M104 52 58 128" stroke="#a8e0d0" stroke-width="1.2" opacity=".5"/><path d="M80 110Q104 104 128 110M70 120Q104 114 138 120" stroke="#000" stroke-width=".6" opacity=".15" fill="none"/>
      <path d="M86 128 104 80 122 128Z" fill="#0e2e2a"/><path d="M104 80 122 128H116C112 112 108 96 104 86Z" fill="#c8a040" opacity=".55"/><path d="M90 128C94 116 98 106 104 96L98 128Z" fill="#3a8a7a"/><path d="M104 80 90 128" stroke="#1a4a42" stroke-width=".8"/>
      <path d="M94 128C96 121 104 119 113 121L115 128Z" fill="#8a2a34"/><path d="M98 124h12" stroke="#c8606a" stroke-width=".8"/><path d="M104 120c2 2 2 5 0 8" stroke="#5a1a20" stroke-width=".5" fill="none"/>
      <path d="M104 52V36" stroke="#5a4a3a" stroke-width="1.8"/><path d="M104 36l14 4.4L104 45Z" fill="#b4303e"/><path d="M104 36l14 4.4L104 41Z" fill="#fff" opacity=".2"/>
      <path d="M104 52 166 46" stroke="#1a4a42" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M58 128 34 134M150 128 158 135M186 124 206 130M166 46 202 127M104 52 70 126" stroke="#d8ccb8" stroke-width=".7"/>${[[34, 134], [158, 135], [206, 130], [202, 127]].map(([a, b]) => `<path d="M${a} ${b}l1.6 3.4" stroke="#6a5a48" stroke-width="1.6"/>`).join('')}
      <g transform="translate(126 94)"><path d="M0 0V8" stroke="#3a3a40" stroke-width=".8"/><rect x="-3.6" y="8" width="7.2" height="9" rx="1.4" fill="url(#${U}glass)"/><path d="M-4.6 8h9.2M-4.6 17h9.2" stroke="#2a2a30" stroke-width="1.4"/></g>`,

    cabana: () => `${palm(196, 130, .95)}
      ${house({ x: 62, w: 76, h: 34, d: 34, dy: 10, roofH: 34, eave: 12, wall: ['#a87444', '#7a5030'], roof: ['#c8a050', '#8a6a2a'], kind: 'thatch', wallTex: 'wood', found: '#5a3a22',
        texture: `${[0, 1, 2, 3, 4, 5].map(k => `<path d="M62 ${100 + k * 5}H138" stroke="#3a2210" stroke-width=".8" opacity=".55"/>`).join('')}<path d="M64 128V94M136 128V94" stroke="#5a3a22" stroke-width="3"/>`,
        side: `${[1, 2, 3, 4, 5, 6].map(k => `<path d="M0 ${k * 5}H34" stroke="#2a1608" stroke-width=".8" opacity=".55"/>`).join('')}${win(11, 9, 12, 11, { frame: '#5a3a22' })}`,
        front: `${door(92, 106, 16, 22, '#4a2e16', { frame: '#5a3a22' })}${win(70, 103, 12, 11, { frame: '#5a3a22' })}${win(118, 103, 12, 11, { frame: '#5a3a22' })}`,
        gableDeco: `<path d="M74 92L100 70L126 92" fill="none" stroke="#5a3a22" stroke-width="2"/><circle cx="100" cy="84" r="4.4" fill="#5a3a22"/><circle cx="100" cy="84" r="3" fill="url(#${U}glass)"/>` })}
      <path d="M56 128h88v3H56Z" fill="#5a3a22"/><path d="M56 128h88" stroke="#000" stroke-width=".5" opacity=".3"/>`,

    casita: () => `${palm(28, 128, .72)}
      ${house({ x: 58, w: 84, h: 44, d: 36, dy: 11, roofH: 28, eave: 8, wall: ['#ecb8aa', '#c08c7c'], roof: TILES, found: '#a87a66',
        side: `${win(11, 11, 12, 15)}`,
        texture: `<path d="M64 106c3-2 9-1 11 2s-2 6-6 6-7-5-5-8Z" fill="#b08070" opacity=".5"/>${[0, 1, 2].map(k => `<rect x="${66 + (k % 2) * 4}" y="${107 + k * 3}" width="5" height="2.2" fill="#9a5a44" opacity=".75"/>`).join('')}`,
        front: `${win(66, 94, 13, 16, { shut: '#3e6e8a' })}${win(121, 94, 13, 16, { shut: '#3e6e8a' })}${door(91, 98, 18, 30, '#2c5a7a', { arch: true })}${lamp(100, 89)}
          ${pot(84, 128, '#d8344e')}${pot(118, 128, '#e85a8a')}`,
        after: `<path d="M144 128C143 114 147 98 145 90" stroke="#4a3424" stroke-width="1.2" fill="none"/>${foliage(rng(77), 146, 96, 6, 9, ['#2e5a26', '#4a7a36', '#c0307a', '#ec5aa4'], 56)}${foliage(rng(78), 138, 90, 8, 3.6, ['#2e5a26', '#4a7a36', '#c0307a', '#ec5aa4'], 30)}` })}`,

    jardin: () => `${house({ x: 54, w: 92, h: 62, d: 40, dy: 12, roofH: 32, eave: 8, wall: ['#f0d898', '#c8a868'], roof: TILES, chimney: 150, found: '#9a8a72',
        texture: `<path d="M54 97H146" stroke="#b89850" stroke-width="1.6"/><path d="M54 98.5H146" stroke="#fff" stroke-width=".5" opacity=".5"/>`,
        side: `${win(12, 10, 13, 15)}${win(12, 40, 13, 14)}`,
        front: `${win(66, 74, 14, 16, { shut: '#3a6a46' })}${win(120, 74, 14, 16, { shut: '#3a6a46' })}${win(66, 104, 14, 14, { shut: '#3a6a46', box: ['#d8344e', '#fff'] })}${win(120, 104, 14, 14, { shut: '#3a6a46', box: ['#f4d040', '#d8344e'] })}
          ${door(92, 102, 16, 26, '#6a4024')}<path d="M85 99 100 90 115 99Z" fill="#a8462a"/><path d="M85 99 100 90 115 99" stroke="#5a1a0a" stroke-width=".6" fill="none"/><path d="M87 99V128M113 99V128" stroke="#f4ece0" stroke-width="1.8"/><path d="M87.8 99V128M113.8 99V128" stroke="#000" stroke-width=".4" opacity=".3"/>`,
        gableDeco: `<circle cx="100" cy="52" r="4.6" fill="#f4ece0"/><circle cx="100" cy="52" r="3.4" fill="url(#${U}glass)"/>` })}
      <g>${[12, 19, 26, 33, 40, 168, 175, 182, 189, 196, 203].map(x => `<path d="M${x} 133V117L${x + 2.6} 113.6 ${x + 5.2} 117V133Z" fill="#f4f0e8"/><path d="M${x + 3.6} 133V116.4L${x + 5.2} 117V133Z" fill="#000" opacity=".12"/>`).join('')}<path d="M10 120H46M10 128H46M166 120H210M166 128H210" stroke="#e4ded2" stroke-width="1.6"/></g>
      ${bush(24, 134)}${tree(222, 132, .9, ['#1f4a2a', '#2e6a36', '#4a8a44', '#7aae5a'], 88)}${[[-8, -46], [6, -38], [3, -54], [-13, -36], [12, -48], [-4, -40]].map(([a, b]) => `<circle cx="${222 + a * .9}" cy="${132 + b * .9}" r="1.9" fill="#e8841e"/><circle cx="${222 + a * .9 + .5}" cy="${132 + b * .9 - .5}" r=".6" fill="#ffd090"/>`).join('')}`,

    playa: () => `${palm(18, 134, .85)}
      ${house({ x: 60, w: 84, h: 48, d: 36, dy: 10, roofH: 26, eave: 9, wall: ['#f4f2ee', '#c8ccd0'], roof: ['#3a6a9a', '#2a5078'], kind: 'sheet', wallTex: 'wood', found: '#8a7058',
        texture: `${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => `<path d="M60 ${84 + k * 5}H144" stroke="#9aa4ac" stroke-width=".7"/><path d="M60 ${85 + k * 5}H144" stroke="#fff" stroke-width=".5"/>`).join('')}`,
        side: `${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(k => `<path d="M0 ${k * 5}H36" stroke="#8a949c" stroke-width=".7"/>`).join('')}${win(12, 12, 12, 14, { cross: false })}`,
        front: `${door(93, 100, 16, 28, '#2a7a72')}${[77, 127].map(cx => `<circle cx="${cx}" cy="100" r="8" fill="#f4ece0"/><circle cx="${cx}" cy="100" r="8" fill="none" stroke="#000" stroke-width=".4" opacity=".3"/><circle cx="${cx}" cy="100" r="6.2" fill="url(#${U}glass)"/><path d="M${cx - 6} ${100}h12M${cx} ${94}v12" stroke="#f4ece0" stroke-width=".9"/><path d="M${cx - 4} ${103} ${cx + 2} ${95}" stroke="#fff" stroke-width="1.2" opacity=".3"/>`).join('')}${lamp(116, 94)}`,
        after: `<path d="M50 128H170L176 126H56Z" fill="#a8845a" ${tex('wood')}/><path d="M50 128H170V131H50Z" fill="#7a5a3a"/>${[54, 66, 78, 126, 138, 150, 162].map(x => `<path d="M${x} 116V128" stroke="#f4f2ee" stroke-width="1.4"/>`).join('')}<path d="M50 116H90M120 116H166" stroke="#f4f2ee" stroke-width="1.6"/><path d="M50 117H90M120 117H166" stroke="#000" stroke-width=".4" opacity=".25"/>
          <g transform="translate(156 128)"><path d="M0 0V-24" stroke="#5a4a3a" stroke-width="1.2"/><path d="M-16-20C-12-31 12-31 16-20Z" fill="#e8c040"/>${[-12, -4, 4, 12].map((x, k) => `<path d="M0-28L${x - 4} -20H${x + 4}Z" fill="${k % 2 ? '#c8304a' : '#e8c040'}"/>`).join('')}<path d="M-16-20C-12-31 12-31 16-20" fill="none" stroke="#000" stroke-width=".4" opacity=".3"/></g>` })}`,

    hacienda: () => house({ x: 18, w: 150, h: 48, d: 30, dy: 9, roofH: 16, eave: 8, wall: ['#f0e2c8', '#c8b090'], roof: TILES, found: '#a88a68',
      behind: `<g><rect x="134" y="34" width="28" height="48" fill="#f0e2c8" ${tex('stucco')}/><path d="M162 34l8-3V78l-8 3Z" fill="#c8b090"/><path d="M130 36 148 18 166 36Z" fill="#c05c34"/><path d="M148 18 170 32 166 36Z" fill="#8a3a1c"/><path d="M141 62V48A7 7 0 0 1 155 48V62Z" fill="#3a2a1a"/><path d="M144 50a4 4 0 0 1 8 0v4h-8Z" fill="#b89040"/><circle cx="148" cy="56" r="1" fill="#6a5020"/><path d="M148 18V9M144.6 12h6.8" stroke="#4a3a2a" stroke-width="1.2"/><path d="M134 40h28" stroke="#000" stroke-width=".5" opacity=".2"/></g>`,
      side: `${win(9, 12, 11, 14, { arch: true })}`,
      front: `${[24, 54, 84, 114, 144].map(x => `<path d="M${x - 1.5} 128V103.5A11.5 11.5 0 0 1 ${x + 21.5} 103.5V128Z" fill="#e2d0b0"/><path d="M${x} 128V104A10 10 0 0 1 ${x + 20} 104V128Z" fill="#4a3424"/><path d="M${x} 128V104A10 10 0 0 1 ${x + 20} 104V112Q${x + 10} 106 ${x} 112Z" fill="#000" opacity=".35"/><path d="M${x + 4} 128V116h12v12" fill="#6a4426" ${tex('wood')}/>`).join('')}
        ${[30, 60, 90, 120, 150].map(x => win(x, 86, 8, 8, { cross: false })).join('')}<path d="M18 98H168" stroke="#c8b090" stroke-width="1.6"/>
        <path d="M20 84C30 76 38 84 46 76C54 84 64 78 70 84" stroke="#3a5a2a" stroke-width="1.2" fill="none"/>${foliage(rng(91), 44, 80, 26, 3.4, ['#2e5a26', '#4a7a36', '#c0307a', '#ec5aa4'], 60, .8)}` }),

    isla: () => { const glassBig = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#2a3038"/><rect x="${x + 1.2}" y="${y + 1.2}" width="${w - 2.4}" height="${h - 2.4}" fill="url(#${U}glass)"/>${[1, 2].map(k => `<path d="M${R(x + k * w / 3)} ${y}v${h}" stroke="#2a3038" stroke-width="1.2"/>`).join('')}<path d="M${x + 2} ${y + h - 2}L${x + w * .3} ${y + 2}M${x + w * .4} ${y + h - 2}L${x + w * .65} ${y + 2}" stroke="#fff" stroke-width="2" opacity=".18"/>`;
      return `${palm(26, 130, .78)}${palm(198, 132, .9)}
      <ellipse cx="114" cy="131" rx="90" ry="6" fill="#1a2a10" opacity=".3"/>
      <path d="M150 128L178 120V86L150 92Z" fill="#c8ccd0" ${tex('stucco')}/><rect x="40" y="92" width="110" height="36" fill="#f4f4f2" ${tex('stucco')}/>
      <path d="M140 92L162 86V58L140 62Z" fill="#c8ccd0" ${tex('stucco')}/><rect x="72" y="62" width="68" height="30" fill="#f4f4f2" ${tex('stucco')}/>
      <path d="M34 92H152L182 84H64Z" fill="#e8eaec"/><path d="M34 92H152V96H34Z" fill="#5a4a3a"/><path d="M152 92 182 84V88L152 96Z" fill="#3a2e24"/><path d="M40 96H150V101H40Z" fill="url(#${U}eave)"/>
      <path d="M66 62H142L166 56H90Z" fill="#e8eaec"/><path d="M66 62H142V65H66Z" fill="#5a4a3a"/><path d="M142 62 166 56V59L142 65Z" fill="#3a2e24"/><path d="M72 65H140V70H72Z" fill="url(#${U}eave)"/>
      <rect x="120" y="66" width="16" height="26" fill="#a8784a" ${tex('wood')}/><rect x="44" y="96" width="22" height="32" fill="#a8784a" ${tex('wood')}/>${[48, 52, 56, 60, 124, 128, 132].map(x => `<path d="M${x} ${x > 100 ? 66 : 96}v${x > 100 ? 26 : 32}" stroke="#4a3018" stroke-width=".5" opacity=".6"/>`).join('')}
      ${glassBig(78, 67, 38, 22)}${glassBig(72, 99, 50, 26)}${door(127, 100, 15, 28, '#4a3424', { frame: '#2a3038' })}
      <path d="M68 58V54H142V58" fill="none" stroke="#9aa4ac" stroke-width="1"/>${[72, 84, 96, 108, 120, 132].map(x => `<path d="M${x} 54v4" stroke="#9aa4ac" stroke-width=".8"/>`).join('')}<path d="M68 54H142" stroke="#c8e0ec" stroke-width="2" opacity=".5"/>
      <rect x="14" y="124" width="42" height="9" rx="1" fill="#e8eaec"/><rect x="16" y="125.4" width="38" height="6.2" fill="#3ab0d0"/><path d="M18 128c4-1.4 8 1.4 12 0s8-1.4 12 0 6 1.4 10 0" stroke="#fff" stroke-width=".7" fill="none" opacity=".7"/>`; }
  };

  /* wiel met band, velg, glans en naaf */
  const wheel = (cx, cy, r, rim = '#d8dce2') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#2a2a32"/><circle cx="${cx}" cy="${cy}" r="${R(r * .55)}" fill="${rim}"/><circle cx="${cx}" cy="${cy}" r="${R(r * .55)}" fill="none" stroke="#9aa0a8" stroke-width=".8"/><circle cx="${cx}" cy="${cy}" r="${R(r * .2)}" fill="#6a6e76"/><path d="M${R(cx - r * .7)} ${R(cy - r * .4)}a${r * .8} ${r * .8} 0 0 1 ${R(r * .5)} ${R(-r * .5)}" stroke="#fff" stroke-width="1" fill="none" opacity=".35"/>`;
  const spoked = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2a2a32" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r - 2}" fill="none" stroke="#b8bcc4" stroke-width=".8"/>${[0, 30, 60, 90, 120, 150].map(a => `<path d="M${R(cx + Math.cos(a / 57.3) * (r - 2))} ${R(cy + Math.sin(a / 57.3) * (r - 2))}L${R(cx - Math.cos(a / 57.3) * (r - 2))} ${R(cy - Math.sin(a / 57.3) * (r - 2))}" stroke="#c8ccd4" stroke-width=".5"/>`).join('')}<circle cx="${cx}" cy="${cy}" r="1.6" fill="#6a6e76"/>`;
  const RIDES = {
    step: () => `<g transform="translate(196 128)"><ellipse cx="1" cy="1" rx="22" ry="2.4" fill="#000" opacity=".15"/>${wheel(-14, -4, 4.5, '#c43a46')}${wheel(16, -4, 4.5, '#c43a46')}
      <path d="M-16-8H12C15-8 17-9 18-11" stroke="#c42a40" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M-16-9H12" stroke="#ff6a7e" stroke-width="1.4" stroke-linecap="round"/><path d="M-14-6H8" stroke="#33333d" stroke-width="1.2" opacity=".6"/>
      <path d="M14-9 8-40" stroke="#9a9aa6" stroke-width="3.2" stroke-linecap="round"/><path d="M13.5-10 7.8-38" stroke="#e8eaee" stroke-width="1" stroke-linecap="round"/><path d="M0-40H16" stroke="#33333d" stroke-width="3.6" stroke-linecap="round"/><circle cx="0" cy="-40" r="2.2" fill="#c43a46"/><circle cx="16" cy="-40" r="2.2" fill="#c43a46"/></g>`,
    bike: () => `<g transform="translate(222 128)" fill="none" stroke-linecap="round"><ellipse cx="-10" cy="0" rx="26" ry="2.6" fill="#000" stroke="none" opacity=".14"/>${spoked(-26, -11, 10)}${spoked(6, -11, 10)}
      <path d="M-26-11-14-30H2L6-11M-14-30-8-11H6M-8-11-10-30" stroke="#1f8a7e" stroke-width="3.2" stroke-linejoin="round"/><path d="M-25-12-14-29H1M-13-29-8-12" stroke="#5fd4c4" stroke-width="1" opacity=".8"/>
      <circle cx="-8" cy="-11" r="3.4" stroke="#33333d" stroke-width="1.6"/><path d="M-8-11-5-7" stroke="#33333d" stroke-width="1.6"/>
      <path d="M-17-34H-9" stroke="#33333d" stroke-width="3.4"/><path d="M2-30 0-38H6" stroke="#33333d" stroke-width="2.6"/><path d="M4-34H15V-27H6" stroke="#a8703e" stroke-width="2.4"/><path d="M5-31H14" stroke="#c48a4e" stroke-width="1.2"/><circle cx="8" cy="-24" r="1.6" fill="#e0b440" stroke="none"/></g>`,
    moto: () => `<g transform="translate(212 128)"><ellipse cx="-1" cy="1" rx="28" ry="2.6" fill="#000" opacity=".15"/>${wheel(-18, -7, 7)}${wheel(16, -7, 7)}
      <path d="M-26-12C-27-24-16-29-5-27L-1-12Z" fill="#6ab8de"/><path d="M-24-15C-24-23-16-26-8-25" stroke="#a8c8dc" stroke-width="1.6" fill="none" opacity=".8"/>
      <path d="M-6-12H20C24-12 25-19 19-22L10-24L8-42" fill="#7ab0cc"/><path d="M-6-12H20C23-12 24-15 23-17H-4Z" fill="#000" opacity=".1"/><path d="M10-24 8-42" stroke="#4a8aaa" stroke-width="2.4"/>
      <path d="M-24-12C-22-8-14-8-12-12M10-12C12-8 20-8 22-12" stroke="#4a8aaa" stroke-width="2" fill="none"/>
      <path d="M6-42H17" stroke="#33333d" stroke-width="3.2" stroke-linecap="round"/><path d="M-15-28H1" stroke="#6a3e1c" stroke-width="5.5" stroke-linecap="round"/><path d="M-14-29.5H0" stroke="#a8703e" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="13" cy="-34" r="3" fill="#fff6c8"/><circle cx="13" cy="-34" r="1.6" fill="#e0b440"/><rect x="-28" y="-20" width="4" height="3" rx="1" fill="#c43a46"/></g>`,
    car: () => `<g transform="translate(210 128)"><ellipse cx="0" cy="0" rx="34" ry="3" fill="#000" opacity=".16"/>
      <path d="M-31-9C-32-17-28-20-22-21L-16-33C-13-37-8-38 0-38C10-38 15-36 18-32L24-22C30-21 32-17 31-9V-5H-31Z" fill="#3a8a56"/><path d="M-31-12H31V-6C31-5 30-4 28-4H-28C-30-4-31-5-31-6Z" fill="#2a7a46"/>
      <path d="M-14-22-10-32C-8-34-5-35 -1-35V-22Z M2-35C8-35 12-34 14-32L19-22H2Z" fill="#a8c8dc"/><path d="M-10-24-6-32M6-24 10-32" stroke="#fff" stroke-width="1.6" opacity=".6"/>
      <path d="M-28-18H28" stroke="#5fc07e" stroke-width="1.2"/><path d="M-1-20V-10" stroke="#2a7a46" stroke-width="1"/><rect x="-6" y="-17" width="4" height="1.4" rx=".7" fill="#e8eaee"/><rect x="8" y="-17" width="4" height="1.4" rx=".7" fill="#e8eaee"/>
      ${wheel(-18, -5, 7)}${wheel(17, -5, 7)}<path d="M-26-7C-25-14-11-14-10-7M9-7C10-14 24-14 25-7" fill="none" stroke="#2a7a46" stroke-width="2"/>
      <circle cx="29" cy="-15" r="2.4" fill="#fff6c8"/><rect x="-32" y="-16" width="3" height="4" rx="1" fill="#c43a46"/><rect x="25" y="-8" width="8" height="3" rx="1.4" fill="#c8ccd4"/><rect x="-33" y="-8" width="8" height="3" rx="1.4" fill="#c8ccd4"/></g>`,
    van: () => `<g transform="translate(206 128)"><ellipse cx="0" cy="0" rx="34" ry="3" fill="#000" opacity=".16"/>
      <rect x="-31" y="-41" width="60" height="36" rx="10" fill="#e07a2a"/><path d="M-31-24H29V-13C29-8 26-5 21-5H-25C-29-5-31-8-31-12Z" fill="#fff4e6"/><path d="M-31-24H29" stroke="#e8701a" stroke-width="1.4"/><path d="M-31-10H29V-12C29-8 26-5 21-5H-25C-29-5-31-8-31-10Z" fill="#000" opacity=".08"/>
      <path d="M-8-17C-8-21-2-21 0-17C2-21 8-21 8-17C8-13 0-10 0-10C0-10-8-13-8-17Z" fill="#e07a2a" opacity=".85" transform="translate(0 2) scale(.8)"/>
      <rect x="-25" y="-36" width="12" height="9" rx="2" fill="#a8c8dc"/><rect x="-9" y="-36" width="12" height="9" rx="2" fill="#a8c8dc"/><path d="M7-36H20C23-36 24-34 24-31V-27H7Z" fill="#a8c8dc"/><path d="M-22-29l4-5M-6-29l4-5M10-29l5-6" stroke="#fff" stroke-width="1.4" opacity=".6"/>
      <path d="M4-38V-24" stroke="#e8701a" stroke-width="1.6"/><circle cx="26" cy="-17" r="2.6" fill="#fff6c8"/><rect x="-32" y="-14" width="3" height="5" rx="1" fill="#c43a46"/>
      ${wheel(-16, -5, 6.5)}${wheel(16, -5, 6.5)}<path d="M-27-46H23" stroke="#7a4a22" stroke-width="2.4" stroke-linecap="round"/><path d="M-22-46V-41M18-46V-41" stroke="#7a4a22" stroke-width="1.6"/><rect x="-24" y="-53" width="38" height="6" rx="3" fill="#2e8a80"/><path d="M-22-50H12" stroke="#5fd4c4" stroke-width="1.2"/></g>`,
    plane: () => `<g transform="translate(205 34) rotate(-8)"><path d="M-6-2-14-22H-6L6-2Z" fill="#e2e6ea"/>
      <path d="M-26 0C-26-6-16-9 0-9C16-9 26-5 29 0C26 5 16 7 0 7C-16 7-26 5-26 0Z" fill="#c43a46"/><path d="M-24 2C-10 5 14 5 28 1C26 5 16 7 0 7C-16 7-26 5-24 2Z" fill="#000" opacity=".15"/><path d="M-20-4C-6-7 10-7 22-4" stroke="#fff" stroke-width="1.4" opacity=".5" fill="none"/>
      <path d="M-26-2-32-14H-25L-18-2Z" fill="#fff"/><path d="M-6 2-14 21H-6L6 2Z" fill="#fff"/><path d="M-12 16H-5" stroke="#c43a46" stroke-width="2"/>
      <circle cx="16" cy="-2" r="3.2" fill="#a8c8dc"/><circle cx="8" cy="-2" r="2.2" fill="#a8c8dc"/><circle cx="0" cy="-2" r="2.2" fill="#a8c8dc"/>
      <g><path d="M29-8V8" stroke="#33333d" stroke-width="2.2" stroke-linecap="round"/></g><circle cx="29" cy="0" r="2" fill="#e0b440"/></g>`
  };

  /* ---------- spullen ---------- */
  /* kampvuur: stenen kring, gekruiste blokken met nerf, vlammen in lagen, gloed op de grond */
  const fire = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="1" rx="34" ry="9" fill="url(#${U}glow)" opacity=".6"/><ellipse cx="0" cy="2" rx="22" ry="5" fill="#2a1a10" opacity=".45"/>
    ${[[-19, 1], [-13, 4.5], [-4, 6], [6, 6], [14, 4.4], [19, 1], [12, -2], [-12, -2]].map(([a, b], k) => `<ellipse cx="${a}" cy="${b}" rx="4.2" ry="2.8" fill="${k % 2 ? '#8a8478' : '#a09888'}" ${tex('stucco')}/><path d="M${a - 2.4} ${b - 1.4}q2.4-1.4 4.6 0" stroke="#d8d0c4" stroke-width=".6" fill="none" opacity=".7"/>`).join('')}
    <path d="M-15 1 14-6" stroke="#5a3a20" stroke-width="5" stroke-linecap="round"/><path d="M-15 0 14-7" stroke="#8a6040" stroke-width="1.2" stroke-linecap="round" opacity=".7"/><path d="M-14-6 15 1" stroke="#4a2e18" stroke-width="5" stroke-linecap="round"/><ellipse cx="15" cy="1" rx="1.6" ry="2.5" fill="#b48452"/><path d="M-6-3 6-4" stroke="#ff7a2a" stroke-width="2" opacity=".8"/>
    <g class="lv-flame"><path d="M0-34C9-24 14-14 10-4C8 0 4 1 0 1S-8 0-10-4C-13-12-8-20-4-24C-4-18-2-14 0-14C-2-20-2-28 0-34Z" fill="#e8501a"/><path d="M1-26C7-18 9-10 6-3C4 0 2 1 0 1S-5 0-6-3C-8-9-4-14-2-17C-2-12 0-10 1-10C0-15 0-21 1-26Z" fill="#ff9a2a"/><path d="M0-15C4-10 5-5 3-1H-3C-5-5-3-10 0-15Z" fill="#ffd870"/><path d="M0-8C2-5 2-3 1-1H-1C-2-3-1-5 0-8Z" fill="#fff4c8"/></g>
    <circle class="lv-spark" cx="-4" cy="-30" r="1" fill="#ffb03f"/><circle class="lv-spark" style="animation-delay:.7s" cx="5" cy="-32" r=".8" fill="#ffd870"/><circle class="lv-spark" style="animation-delay:1.3s" cx="0" cy="-28" r=".8" fill="#e07a2a"/></g>`;
  const hammockTrees = biome => biome === 'mar' || biome === 'isla' ? palm(14, 196, .9) + palm(112, 194, .85) : tree(16, 196, .95, LEAF, 71) + tree(110, 194, .9, LEAF, 72);
  /* hangmat: geweven doek met strepen en franjes */
  const hammockCloth = `<path d="M24 160 34 176M104 158 94 176M24 160 37 177M104 158 91 177" stroke="#c8b08a" stroke-width=".8"/><path d="M34 176Q64 200 94 176Q64 190 34 176Z" fill="#b8323e" ${tex('cloth')}/><path d="M36 178Q64 197 92 178" stroke="#e0b440" stroke-width="1.6" fill="none"/><path d="M39 181Q64 196.5 89 181" stroke="#2e7a8a" stroke-width="1.6" fill="none"/><path d="M42 184Q64 196 86 184" stroke="#f0e6d0" stroke-width="1" fill="none"/>
    <path d="M34 176Q64 200 94 176" stroke="#7a1a22" stroke-width=".7" fill="none"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(k => { const t = (k + .5) / 9, xx = 34 + 60 * t, yy = 176 + 24 * 2 * t * (1 - t) * 1.02; return `<path d="M${R(xx)} ${R(yy)}v3" stroke="#e8dcc0" stroke-width=".6"/>`; }).join('')}`;
  /* moestuin: houten bak met nerf, donkere aarde, planten uit bladclusters */
  const garden = () => `<g transform="translate(12 204)"><ellipse cx="44" cy="23" rx="48" ry="3" fill="#1a2a10" opacity=".3"/><rect x="0" y="0" width="86" height="22" rx="1.5" fill="#7a5434" ${tex('wood')}/><path d="M0 7.5H86M0 15H86" stroke="#3a2414" stroke-width=".7" opacity=".7"/><rect x="0" y="0" width="86" height="3" fill="#a87a50"/><rect x="3" y="0" width="80" height="3" fill="#3a2414"/><rect x="3" y=".4" width="80" height="2" fill="#4a3020" ${tex('stucco')}/>
    ${[10, 30, 50, 70].map((x, k) => `<g class="lv-sway" style="animation-delay:${k * .3}s"><path d="M${x} 1V-12" stroke="#3a6a2a" stroke-width="1.4"/>${foliage(rng(x + 400), x, -6, 6, 5, ['#2a5a26', '#3e7a36', '#5a9a44', '#7aba5a'], 26, .7)}${k % 2 ? `${[0, 60, 120, 180, 240, 300].map(a => `<ellipse cx="${R(x + Math.cos(a / 57.3) * 3.4)}" cy="${R(-14 + Math.sin(a / 57.3) * 3.4)}" rx="2.4" ry="1.2" transform="rotate(${a} ${R(x + Math.cos(a / 57.3) * 3.4)} ${R(-14 + Math.sin(a / 57.3) * 3.4)})" fill="#e8b830"/>`).join('')}<circle cx="${x}" cy="-14" r="2.4" fill="#5a3a1a"/>` : `<circle cx="${x - 3}" cy="-5" r="2.4" fill="#c42a2a"/><circle cx="${x + 3}" cy="-8" r="2.4" fill="#d4382a"/><circle cx="${x - 3.6}" cy="-5.6" r=".7" fill="#fff" opacity=".5"/><circle cx="${x + 2.4}" cy="-8.6" r=".7" fill="#fff" opacity=".5"/>`}</g>`).join('')}
    ${[20, 40, 60, 78].map(x => foliage(rng(x + 500), x, 13, 5, 2.6, ['#2a5a26', '#3e7a36', '#6aaa4a', '#8aca5a'], 14, .7)).join('')}</g>`;
  const dog = (x, y, cls = '', flip) => `<g transform="translate(${x} ${y})${flip ? ' scale(-1 1)' : ''}"><ellipse cx="0" cy="0" rx="15" ry="2.4" fill="#000" opacity=".15"/><g class="${cls}">
    <g class="lv-wag" style="transform-origin:${11}px ${-14}px"><path d="M11-14C18-18 20-24 18-28" stroke="#b87a3e" stroke-width="4.4" stroke-linecap="round" fill="none"/><path d="M18-26 18-29" stroke="#fff4e2" stroke-width="3.6" stroke-linecap="round"/></g>
    <path d="M5-6V0M9-6V0" stroke="#b87a3e" stroke-width="3.6" stroke-linecap="round"/>
    <ellipse cx="0" cy="-12" rx="13.5" ry="8" fill="#e0a868"/><path d="M-12-14C-6-20 6-21 12-16" stroke="#f0c48a" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="-2" cy="-8.5" rx="8.5" ry="4.5" fill="#fff4e2"/><ellipse cx="6" cy="-15" rx="4" ry="3" fill="#a86a32" opacity=".7"/>
    <path d="M-8-6V0M-3-6V0" stroke="#d09858" stroke-width="3.6" stroke-linecap="round"/><path d="M-9.5 0h3M-4.5 0h3M3.5 0h3M7.5 0h3" stroke="#fff4e2" stroke-width="2" stroke-linecap="round"/>
    <path d="M-12-14C-10-17-8-18-6-17" stroke="#c43a46" stroke-width="2.6" stroke-linecap="round" fill="none"/><circle cx="-8" cy="-14" r="1.6" fill="#e0b440"/>
    <circle cx="-13" cy="-21" r="8.4" fill="#e0a868"/><ellipse cx="-19.5" cy="-18" rx="5.4" ry="3.8" fill="#fff4e2"/><ellipse cx="-24" cy="-19.6" rx="2" ry="1.6" fill="#2a1a12"/><circle cx="-24.5" cy="-20.2" r=".6" fill="#fff"/>
    <path d="M-15-28C-12-31-6-30-6-26C-6-22-7-17-9-15C-11-18-12-22-15-28Z" fill="#a86a32"/><path d="M-13-27C-10-28-8-26-8.5-22" stroke="#c88a4a" stroke-width="1" fill="none"/>
    <circle cx="-15.5" cy="-23" r="1.7" fill="#2a1a12"/><circle cx="-16" cy="-23.6" r=".6" fill="#fff"/><path d="M-19-28q2-1.5 4 0" stroke="#a86a32" stroke-width="1" fill="none"/><path d="M-21-15.5q2 2 4 0" stroke="#7a3a2a" stroke-width="1.2" fill="none"/><ellipse cx="-19" cy="-14" rx="1.6" ry="2" fill="#f0789f"/>
    </g></g>`;
  const grill = (x, y, smoke) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="1" rx="16" ry="2.4" fill="#000" opacity=".15"/><path d="M-11 0-4-14M11 0 4-14M0 0V-14" stroke="#33333d" stroke-width="2.2" stroke-linecap="round"/><circle cx="-11" cy="0" r="2" fill="#33333d"/><circle cx="11" cy="0" r="2" fill="#33333d"/>
    <path d="M-17-16H17C17-6 9-1 0-1S-17-6-17-16Z" fill="#2a2a32"/><path d="M-14-14C-12-7-6-4 0-4" stroke="#6a6e76" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M-17-16H17" stroke="#c8ccd4" stroke-width="2.4" stroke-linecap="round"/>
    <ellipse cx="0" cy="-17" rx="15" ry="2" fill="#ff7a3a" opacity=".5"/><ellipse cx="-7" cy="-19.5" rx="5.4" ry="2.4" fill="#a8502a"/><path d="M-10-20h6" stroke="#5a2a14" stroke-width=".8"/><ellipse cx="6" cy="-19.5" rx="5.4" ry="2.4" fill="#c86a3a"/><path d="M3-20h6" stroke="#5a2a14" stroke-width=".8"/>
    <circle cx="-1" cy="-19" r="2" fill="#c43a46"/><circle cx="12" cy="-18" r="1.6" fill="#3a8a56"/>${smoke ? puffs(0, -22) : ''}</g>`;
  const puffs = (x, y) => [0, 1, 2].map(k => `<circle class="lv-smoke" style="animation-delay:${k * 1.1}s" cx="${x}" cy="${y}" r="5" fill="#e8e4e0"/>`).join('');
  const surfboard = (x, y, r = -8) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0-58C8-46 9-10 6 0H-6C-9-10-8-46 0-58Z" fill="#e0b440"/><path d="M0-58C8-46 9-10 6 0H2C4-10 4-46 0-58Z" fill="#e8a81e"/><path d="M-3-50C-5-40-5-20-4-8" stroke="#fff" stroke-width="1.6" opacity=".6" fill="none" stroke-linecap="round"/>
    <path d="M-1-56V-2" stroke="#c43a46" stroke-width="2.6"/><path d="M-4-40C0-36 4-36 6-40M-5-30C0-26 4-26 6-30" stroke="#2e8a80" stroke-width="2" fill="none"/><path d="M-2-6l-4 7M2-6l4 7" stroke="#2e8a80" stroke-width="2"/></g>`;
  const boat = (x, y, s = 1, crew = '') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="8" rx="32" ry="3" fill="#0a4a7a" opacity=".2"/><g class="lv-rock"><path d="M0-4V-58" stroke="#7a4a22" stroke-width="2.6"/><path d="M0-12H24" stroke="#7a4a22" stroke-width="2"/>
    <path d="M2-55C21-41 25-23 23-13H2Z" fill="#fff"/><path d="M2-55C12-44 15-30 14-13H2Z" fill="#000" opacity=".05"/><path d="M4-44H16M4-32H21M4-22H22" stroke="#d6e2ea" stroke-width="1"/>
    <path d="M-2-49C-14-37-16-23-15-13H-2Z" fill="#ffe2e8"/><path d="M-4-36H-14M-4-24H-15" stroke="#f0b8c8" stroke-width="1"/><path d="M0-58l11 3.5-11 3.5Z" fill="#c43a46"/>
    ${crew}<path d="M-29-9H31L23 6H-21Z" fill="#2e5a8a"/><path d="M-27-4H29L23 6H-21Z" fill="#1e406e"/><path d="M-29-9H31" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><path d="M-24-3H26" stroke="#e0b440" stroke-width="1.6"/>
    <circle cx="-14" cy="-1" r="1.6" fill="#a8c8dc"/><circle cx="-6" cy="-1" r="1.6" fill="#a8c8dc"/></g></g>`;
  const horse = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="2" cy="0" rx="32" ry="3.4" fill="#000" opacity=".15"/>
    <g class="lv-swish" style="transform-origin:28px -50px"><path d="M28-50C42-46 44-30 39-16C35-24 33-36 28-44Z" fill="#4a2a12"/><path d="M31-46C38-42 39-32 37-24" stroke="#7a4a26" stroke-width="1.2" fill="none"/></g>
    <path d="M-12-6V-36M22-6V-36" stroke="#9a5a2e" stroke-width="6" stroke-linecap="round"/><path d="M-12-1h0M22-1h0" stroke="#2a1a10" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="2" cy="-44" rx="30" ry="15" fill="#c27a42"/><path d="M-26-36C-10-28 16-28 30-38" stroke="#a8683a" stroke-width="4" fill="none" opacity=".6"/><ellipse cx="6" cy="-50" rx="16" ry="5" fill="#dc9a5e" opacity=".7"/>
    <path d="M-20-6V-36M14-6V-36" stroke="#b8703a" stroke-width="6" stroke-linecap="round"/><path d="M-20-1h0M14-1h0" stroke="#3a2416" stroke-width="7" stroke-linecap="round"/><path d="M-21-30V-10M13-30V-10" stroke="#d8945a" stroke-width="1.4" opacity=".7"/>
    <path d="M-20-50C-26-62-30-74-32-82L-18-86C-14-74-10-62-6-54Z" fill="#c27a42"/><path d="M-22-56C-26-66-28-74-29-80" stroke="#dc9a5e" stroke-width="2" fill="none" opacity=".8"/>
    <path d="M-32-82C-42-82-49-76-47-70C-45-65-39-65-32-70L-20-74Z" fill="#c27a42"/><path d="M-47-70C-45-65-39-65-36-68" fill="#e8b88a"/><ellipse cx="-45" cy="-71.5" rx="1.4" ry="1" fill="#2a1a12"/>
    <ellipse cx="-30" cy="-78" rx="2.2" ry="2.4" fill="#2a1a12"/><circle cx="-30.6" cy="-78.8" r=".8" fill="#fff"/><path d="M-33-81q3-2 5 0" stroke="#7a4a26" stroke-width="1" fill="none"/>
    <path d="M-25-88l-3-9 8 6Z" fill="#a8683a"/><path d="M-25-90l-1.5-4 3.5 3Z" fill="#e8b88a"/><path d="M-22-89C-14-80-10-68-4-56" stroke="#4a2a12" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M-26-86l4 4" stroke="#4a2a12" stroke-width="4" stroke-linecap="round"/>
    <path d="M-36-76C-30-72-24-72-18-76M-32-70-22-62" stroke="#c43a46" stroke-width="1.6" fill="none"/><circle cx="-23" cy="-74" r="1.4" fill="#e0b440"/>
    <path d="M-8-58H14C16-50 14-44 10-42H-6C-10-46-10-52-8-58Z" fill="#2e8a80"/><path d="M-6-56H12M-6-50H12" stroke="#e0b440" stroke-width="1.2"/><path d="M-4-60C0-64 6-64 8-60" fill="#7a4a22"/></g>`;
  const fountain = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="26" ry="5" fill="#000" opacity=".12"/><path d="M-22-2V-13H22V-2C22 2 12 4 0 4S-22 2-22-2Z" fill="#d8c6a8"/><path d="M8-13H22V-2C22 1 17 3 10 3.6Z" fill="#000" opacity=".1"/><path d="M-22-8H22" stroke="#bfa98a" stroke-width="1"/>
    <ellipse cx="0" cy="-13" rx="22" ry="6" fill="#e8dcc6"/><ellipse cx="0" cy="-13" rx="19" ry="4.6" fill="#5ec4ea"/><path d="M-12-13c3-1.5 6 1.5 9 0M2-12c3-1.5 6 1.5 9 0" stroke="#fff" stroke-width="1" fill="none" opacity=".8"/>
    <path d="M-2.5-13V-33H2.5V-13Z" fill="#d8c6a8"/><path d="M0.5-13V-33H2.5V-13Z" fill="#000" opacity=".1"/><ellipse cx="0" cy="-34" rx="9" ry="2.8" fill="#e8dcc6"/><ellipse cx="0" cy="-34.4" rx="7" ry="1.8" fill="#5ec4ea"/>
    <g class="lv-spray"><path d="M0-36C-8-40-12-30-14-16M0-36C8-40 12-30 14-16M0-36V-46" stroke="#a8e4f8" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-14" cy="-17" r="1.4" fill="#a8e4f8"/><circle cx="14" cy="-17" r="1.4" fill="#a8e4f8"/></g></g>`;
  const lighthouse = (x, y, night) => `<g transform="translate(${x} ${y})">${night ? `<g class="lv-beam" style="transform-origin:0px -80px"><path d="M0-80 90-100V-60Z" fill="#fff6c8" opacity=".35"/></g>` : ''}
    <path d="M-16 2C-16-4 16-4 16 2Z" fill="#8a8e96"/><path d="M-12 0-8-70H8L12 0Z" fill="#fff"/><path d="M2 0 3-70H8L12 0Z" fill="#000" opacity=".1"/><path d="M-11-14H11L10-26H-10ZM-9-42H9L8-54H-8Z" fill="#c43a46"/>
    <path d="M-2 0V-9A2 2 0 0 1 2-9V0Z" fill="#33333d"/><rect x="-1.6" y="-38" width="3.2" height="4" rx="1" fill="#33404a"/>
    <path d="M-13-70H13" stroke="#33333d" stroke-width="2.4"/><path d="M-12-70V-73H12V-70M-8-73V-70M-4-73V-70M0-73V-70M4-73V-70M8-73V-70" stroke="#33333d" stroke-width="1" fill="none"/>
    <rect x="-9" y="-81" width="18" height="10" fill="${night ? '#ffe27a' : '#a8c8dc'}"/><path d="M-3-81V-71M3-81V-71" stroke="#33333d" stroke-width="1"/><path d="M-11-81H11L0-93Z" fill="#33333d"/><circle cx="0" cy="-94" r="1.8" fill="#33333d"/></g>`;
  const bunting = () => `<path d="M130 112Q210 128 290 112" stroke="#7a5a3a" stroke-width="1" fill="none"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(k => { const x = 140 + k * 20, y = 116 + Math.sin((k + .5) / 8 * Math.PI) * 7; return `<path d="M${x - 6} ${y}h12l-6 10Z" fill="${['#c43a46', '#e0b440', '#2e8a80', '#f0789f', '#3a78d6', '#e07a2a', '#9a6ad8', '#3a8a56'][k]}"/>`; }).join('')}`;
  const fireworks = () => [[80, 50, '#e0b440'], [300, 40, '#f0789f'], [190, 30, '#7fd6f0']].map(([x, y, c], k) => `<g class="lv-burst" style="animation-delay:${k * .9}s;transform-origin:${x}px ${y}px">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<path d="M${x} ${y}l${(Math.cos(a / 57.3) * 18).toFixed(1)} ${(Math.sin(a / 57.3) * 18).toFixed(1)}" stroke="${c}" stroke-width="2.4" stroke-linecap="round"/>`).join('')}</g>`).join('');
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
    const w = world(i), u = U = 'lf' + (++uid);
    const act = ACTS.find(a => a.id === opt.act && a.ok(w)) || ACTS.find(a => a.id === pick(w, new Date().getHours()));
    const sky = act.sky, night = sky === 'night', hide = new Set(act.hide || []);
    const home = HOMES[w.home]();
    const it = k => w.items.has(k) && !hide.has(k);
    const back = (it('hammock') ? hammockTrees(w.biome) + hammockCloth : '')
      + (it('boat') ? boat(84, w.biome === 'isla' ? 176 : 170, .9) : '')
      + (it('horse') ? horse(318, 214) : '') + (w.items.has('lighthouse') ? lighthouse(372, 176, night) : '');
    const smoke = w.home === 'jardin' && sky !== 'day' ? puffs(255, 66) : '';
    const front = (it('garden') ? garden() : '') + (it('fountain') ? fountain(120, 214) : '') + (it('fire') ? fire(126, 214) : '')
      + (it('grill') ? grill(290, 224, false) : '') + (it('surf') ? surfboard(352, 196) : '') + (act.hideRide ? '' : ride(w.ride))
      + (it('dog') ? (sky === 'night' ? dog(162, 234, 'lv-idle') : dog(162, 234, 'lv-jump') + `<circle class="lv-ball" cx="140" cy="200" r="4.5" fill="#e8344e"/>`) : '');
    const shade = night ? `<rect width="400" height="240" fill="#0a1238" opacity=".42"/>` : sky === 'dusk' ? `<rect width="400" height="240" fill="#c8506a" opacity=".14"/>` : sky === 'dawn' ? `<rect width="400" height="240" fill="#ffb080" opacity=".08"/>` : '';
    const finish = `<rect width="400" height="240" fill="url(#${u}vig)"/><rect width="400" height="240" filter="url(#${u}grain)"/>`;
    return `<svg class="life-svg" viewBox="0 0 400 240" ${opt.w ? `width="${opt.w}" height="${Math.round(opt.w * .6)}"` : ''} role="img" aria-label="${STEPS[i].name}: ${act.label.replace(/^\S+\s/, '')}" xmlns="http://www.w3.org/2000/svg">
  ${defs(u, w.biome, sky)}
  ${skyLayer(u, sky)}${w.plane && !night ? flyingPlane() : ''}${land(u, w.biome)}${back}<g transform="translate(82 26) scale(1.3)">${home}</g>${smoke}${w.items.has('fireworks') ? bunting() : ''}${front}${shade}${night && w.items.has('lighthouse') ? lighthouse(372, 176, true) : ''}${act.draw(w)}${finish}</svg>`;
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
