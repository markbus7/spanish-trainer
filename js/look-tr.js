/* Turkse sfeer: turkoois en İznik-rood, Lupe in een kaftan met tulpen en een nazar-kraal, en de Bosporus met moskee,
   Galatatoren, veerboot en meeuwen op de startpagina. Zie js/look.js voor de opzet. */
(function (S) {
  'use strict';
  if (!S.Look) return;
  const TQ = '#18a3b5', TQ2 = '#0d7686', RED = '#d8432f', RED2 = '#a82f20', GOLD = '#f2b134', CREAM = '#fdf8ec', LEAF = '#4fae6a';
  /* tulp (lale), het symbool van İstanbul: x,y = onderkant van de bloem, k = schaal */
  const tulip = (x, y, k, col, dark) => `<g transform="translate(${x} ${y}) scale(${k})"><path d="M-4.2 0C-5.2-5-3.6-9.5-2.4-11C-1.6-8.6-.8-7.4 0-11.8C.8-7.4 1.6-8.6 2.4-11C3.6-9.5 5.2-5 4.2 0C2.6 2.2-2.6 2.2-4.2 0Z" fill="${col}"/><path d="M0-11.8C-1.6-7-1.6-2.6 0 1.4C1.6-2.6 1.6-7 0-11.8Z" fill="${dark}" opacity=".55"/></g>`;
  /* nazar boncuğu: het blauwe oog tegen het boze oog */
  const nazar = (x, y, r) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#1c4fb8"/><circle r="${(r * .68).toFixed(2)}" fill="#fff"/><circle r="${(r * .44).toFixed(2)}" fill="#59b8ea"/><circle r="${(r * .2).toFixed(2)}" fill="#10203a"/></g>`;
  const sleeve = (x, flip) => `<g transform="translate(${x} 100) scale(${flip} 1)"><path d="M-6.5 3.5C-8 -2-4.5-6 .5-6S8-2 6.5 3.5C3.5 6-3.5 6-6.5 3.5Z" fill="${TQ}"/><path d="M-6.3 3.4C-3.3 5.8 3.3 5.8 6.3 3.4" fill="none" stroke="${GOLD}" stroke-width="1.7" stroke-linecap="round"/></g>`;

  const lupe = {
    /* rode tulp met twee blaadjes, schuin op het hoofd */
    hat: () => `<g class="lupe-flower" transform="translate(86 40) rotate(22)">
      <path d="M0 1C-7 2-11-1-12.5-5C-7-6-3-4 0 1Z" fill="${LEAF}"/><path d="M0 1C7 2 11-1 12.5-5C7-6 3-4 0 1Z" fill="${LEAF}"/>
      ${tulip(0, 0, 1.55, RED, RED2)}</g>`,
    /* turkooizen kaftan met gouden bies, tulpenrand en een nazar-kraal */
    dress: id => `<g class="lupe-dress"><clipPath id="${id}c"><path d="M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z"/></clipPath>
      <path d="M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z" fill="${TQ}"/>
      <g clip-path="url(#${id}c)">
        <path d="M53 93C52 110 51 128 50 150H70C69 128 68 110 67 93Z" fill="${TQ2}"/>
        <path d="M53 93C52 110 51 128 50 150M67 93C68 110 69 128 70 150" fill="none" stroke="${GOLD}" stroke-width="1.5"/>
        <g fill="${GOLD}"><circle cx="60" cy="110" r="1.5"/><circle cx="60" cy="118" r="1.5"/><circle cx="60" cy="126" r="1.5"/></g>
        <path d="M26 131Q60 142 94 131V150H26Z" fill="${CREAM}"/>
        <path d="M27 131.4Q60 142.4 93 131.4" fill="none" stroke="${GOLD}" stroke-width="1.6"/>
        ${[[35, 143.4], [44.5, 146], [75.5, 146], [85, 143.4]].map(([x, y], i) => `<path d="M${x} ${y + 1.6}q${i < 2 ? -2.4 : 2.4} -1.4 ${i < 2 ? -3 : 3} -3.6" fill="none" stroke="${LEAF}" stroke-width="1.3" stroke-linecap="round"/>` + tulip(x, y, .48, RED, RED2)).join('')}
        ${tulip(60, 147.4, .52, '#2f5fc4', '#1c3f8f')}
        <path d="M41 93C36 106 33 120 31 135Q36 137 40 138C40 124 42 108 46 94Z" fill="#fff" opacity=".14"/>
      </g>
      <path d="M29 141Q60 151 91 141" fill="none" stroke="${GOLD}" stroke-width="2" stroke-linecap="round"/>
      <path d="M47 94Q60 104 73 94" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round"/>
      ${nazar(60, 100.4, 3.3)}</g>${sleeve(35.5, -1)}${sleeve(84.5, 1)}`,
    /* borststuk voor de kleine Lupe (zonder lijf) */
    bust: id => `<clipPath id="${id}c"><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z"/></clipPath><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z" fill="${TQ}"/>
      <g clip-path="url(#${id}c)"><path d="M50 90C49 102 48 112 47 124H73C72 112 71 102 70 90Z" fill="${TQ2}"/>
      <path d="M50 90C49 102 48 112 47 124M70 90C71 102 72 112 73 124" fill="none" stroke="${GOLD}" stroke-width="1.8"/>
      ${tulip(32, 117, .62, RED, RED2)}${tulip(88, 117, .62, RED, RED2)}</g>
      <path d="M40 96Q60 109 80 96" fill="none" stroke="${GOLD}" stroke-width="2" stroke-linecap="round"/>${nazar(60, 104.5, 4.4)}`
  };

  /* De Bosporus bij İstanbul: heuvels met huisjes, een moskee met koepels en minaretten, de Galatatoren, de Kız Kulesi,
     een veerboot (vapur), meeuwen en tulpen vooraan. Kleuren via tokens. */
  function decor() {
    const W = 720, H = 92, G = 64;
    const minaret = (x, top) => `<rect x="${x - 1.7}" y="${top + 7}" width="3.4" height="${G - top - 7}" fill="var(--dk-stone)"/><path d="M${x - 2.1} ${top + 7.5}L${x} ${top}L${x + 2.1} ${top + 7.5}Z" fill="var(--dk-dome)"/>
      <rect x="${x - 3}" y="${top + 15}" width="6" height="1.8" rx=".6" fill="var(--dk-dome)"/><rect x="${x - 2.8}" y="${top + 27}" width="5.6" height="1.6" rx=".6" fill="var(--dk-dome)"/>`;
    const dome = (cx, y, r) => `<path d="M${cx - r} ${y}A${r} ${r * .92} 0 0 1 ${cx + r} ${y}Z" fill="var(--dk-dome)"/>`;
    const mosque = (cx, k) => `<g transform="translate(${cx} ${G}) scale(${k}) translate(${-cx} ${-G})">
      ${minaret(cx - 62, 10)}${minaret(cx + 62, 10)}${minaret(cx - 46, 20)}${minaret(cx + 46, 20)}
      <rect x="${cx - 40}" y="${G - 16}" width="80" height="16" fill="var(--dk-stone)"/>
      <rect x="${cx - 26}" y="${G - 27}" width="52" height="12" fill="var(--dk-stone)"/>
      ${dome(cx - 31, G - 16, 9)}${dome(cx + 31, G - 16, 9)}${dome(cx - 15, G - 26, 8)}${dome(cx + 15, G - 26, 8)}${dome(cx, G - 27, 19)}
      <path d="M${cx} ${G - 45}v-6" stroke="var(--dk-dome)" stroke-width="1.4" stroke-linecap="round"/><path d="M${cx + 1.6} ${G - 54.4}a2.3 2.3 0 1 1 -1.4 -4.1a1.8 1.8 0 1 0 1.4 4.1z" fill="var(--gold)"/>
      ${[-33, -24, -15, 15, 24, 33].map(d => `<rect x="${cx + d - 1.6}" y="${G - 11}" width="3.2" height="6" rx="1.6" fill="var(--dk-win)"/>`).join('')}
      <path d="M${cx - 4} ${G}v-7a4 4 0 0 1 8 0v7z" fill="var(--dk-win)"/></g>`;
    // heuvels met huisjes (rode daken)
    const hill = `<path d="M0 ${G}V50Q50 38 110 47T230 42T360 49T470 38T590 47T720 40V${G}Z" fill="var(--dk-hill)"/>`;
    let houses = '';
    const hs = [[8, 49, 13, 9], [24, 46, 11, 11], [38, 48, 14, 9], [92, 48, 12, 9], [107, 50, 13, 8], [345, 51, 12, 8], [360, 53, 14, 7], [410, 46, 12, 10], [425, 43, 11, 12], [498, 44, 12, 11], [513, 47, 14, 9], [612, 49, 12, 9], [628, 46, 13, 11], [662, 45, 12, 11], [678, 43, 13, 13], [696, 45, 14, 11]];
    for (const [x, y, w, hgt] of hs) houses += `<rect x="${x}" y="${y}" width="${w}" height="${G - y}" fill="var(--dk-house)"/><path d="M${x - 1} ${y}l${w / 2 + 1} ${-hgt * .45}l${w / 2 + 1} ${hgt * .45}z" fill="var(--dk-roof)"/><rect x="${x + 2.4}" y="${y + 2.6}" width="2.4" height="3" fill="var(--dk-win)"/><rect x="${x + w - 5}" y="${y + 2.6}" width="2.4" height="3" fill="var(--dk-win)"/>`;
    // Galatatoren
    const gx = 462;
    const galata = `<rect x="${gx - 7}" y="30" width="14" height="${G - 30}" fill="var(--dk-stone)"/><rect x="${gx - 8.6}" y="28.6" width="17.2" height="3" rx="1" fill="var(--dk-dome)"/><path d="M${gx - 8} 28.8L${gx} 11L${gx + 8} 28.8Z" fill="var(--dk-dome)"/>
      <path d="M${gx} 11v-4" stroke="var(--dk-dome)" stroke-width="1.2" stroke-linecap="round"/>${[36, 44, 52].map(y => `<rect x="${gx - 1.4}" y="${y}" width="2.8" height="4.4" rx="1.4" fill="var(--dk-win)"/>`).join('')}`;
    // cipressen
    const cyp = (x, hgt) => `<path d="M${x} ${G}C${x - 3.4} ${G - hgt * .4} ${x - 2} ${G - hgt * .85} ${x} ${G - hgt}C${x + 2} ${G - hgt * .85} ${x + 3.4} ${G - hgt * .4} ${x} ${G}Z" fill="var(--dk-tree)"/>`;
    // zee met golfjes
    const sea = `<rect x="0" y="${G}" width="${W}" height="${H - G}" fill="var(--dk-sea)"/>` + [[30, 71], [118, 80], [200, 73], [262, 84], [330, 71], [452, 82], [520, 73], [640, 82], [690, 72], [70, 87], [560, 88]].map(([x, y]) => `<path d="M${x} ${y}q4 -2.4 8 0t8 0" fill="none" stroke="var(--dk-wave)" stroke-width="1.2" stroke-linecap="round"/>`).join('');
    // Kız Kulesi op haar eilandje
    const kx = 574;
    const kiz = `<ellipse cx="${kx + 5}" cy="76" rx="19" ry="2.8" fill="var(--dk-stone)"/><rect x="${kx - 4}" y="58" width="8" height="17" fill="var(--dk-house)"/><path d="M${kx - 5.4} 58L${kx} 48L${kx + 5.4} 58Z" fill="var(--dk-roof)"/>
      <rect x="${kx + 4}" y="67" width="15" height="8" fill="var(--dk-house)"/><path d="M${kx + 3} 67h17l-2 -3h-13z" fill="var(--dk-roof)"/><path d="M${kx} 48v-5" stroke="var(--dk-ink)" stroke-width="1"/><path d="M${kx} 43h5v3h-5z" fill="${RED}"/>
      <rect x="${kx - 1.2}" y="62" width="2.4" height="3.4" rx="1.2" fill="var(--dk-win)"/>`;
    // veerboot (vapur) met rook
    const fx = 150, fy = 80;
    const ferry = `<g><circle cx="${fx + 31}" cy="${fy - 27}" r="3.2" fill="var(--dk-cloud)"/><circle cx="${fx + 36}" cy="${fy - 31}" r="4.2" fill="var(--dk-cloud)"/><circle cx="${fx + 43}" cy="${fy - 34}" r="5" fill="var(--dk-cloud)"/>
      <rect x="${fx + 25}" y="${fy - 24}" width="6" height="9" fill="var(--dk-ferry2)"/><rect x="${fx + 25}" y="${fy - 22}" width="6" height="2.4" fill="${RED}"/>
      <rect x="${fx + 12}" y="${fy - 16}" width="34" height="6" rx="1" fill="var(--dk-ferry)"/><rect x="${fx + 5}" y="${fy - 10.5}" width="50" height="6" rx="1" fill="var(--dk-ferry)"/>
      ${[16, 22, 28, 34, 40].map(d => `<rect x="${fx + d}" y="${fy - 14.4}" width="3" height="2.8" fill="var(--dk-win)"/>`).join('')}${[9, 15, 21, 27, 33, 39, 45].map(d => `<rect x="${fx + d}" y="${fy - 9}" width="3" height="2.8" fill="var(--dk-win)"/>`).join('')}
      <path d="M${fx - 2} ${fy - 5}h64l-7 8h-50z" fill="var(--dk-ferry)"/><path d="M${fx - 1} ${fy - 2.6}h61.8" stroke="${RED}" stroke-width="1.5"/>
      <path d="M${fx + 55} ${fy - 16}v-7" stroke="var(--dk-ink)" stroke-width="1"/><path d="M${fx + 55} ${fy - 23}h-6v4h6z" fill="${RED}"/></g>`;
    // vissersbootje
    const boat = (x, y) => `<path d="M${x} ${y}h18l-3 4.4h-12z" fill="var(--dk-roof)"/><path d="M${x + 8} ${y}v-11l8 9z" fill="var(--dk-ferry)"/>`;
    const gull = (x, y, k) => `<path d="M${x} ${y}q${3 * k} ${-3.4 * k} ${6 * k} 0q${3 * k} ${-3.4 * k} ${6 * k} 0" fill="none" stroke="var(--dk-ink)" stroke-width="1.3" stroke-linecap="round"/>`;
    // tulpen vooraan
    const tul = (x, hgt, col, dark) => `<path d="M${x} ${H + 1}V${H - hgt}" stroke="var(--dk-leaf)" stroke-width="1.6"/><path d="M${x} ${H - 1}c-5 -2 -6 -7 -5 -10c3 2 5 5 5 10z" fill="var(--dk-leaf)"/>` + tulip(x, H - hgt + 1, .62, col, dark);
    const tulips = [[14, 15, RED, RED2], [25, 11, GOLD, '#c98a17'], [36, 16, RED, RED2], [47, 12, RED, RED2], [300, 12, RED, RED2], [311, 16, GOLD, '#c98a17'], [322, 11, RED, RED2], [672, 12, GOLD, '#c98a17'], [684, 16, RED, RED2], [696, 11, RED, RED2], [708, 15, RED, RED2]].map(t => tul(...t)).join('');
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <circle cx="560" cy="19" r="11" fill="var(--gold)" opacity=".6"/>
      <g fill="var(--dk-cloud)"><ellipse cx="96" cy="15" rx="26" ry="6"/><ellipse cx="116" cy="11" rx="15" ry="5.6"/><ellipse cx="356" cy="19" rx="28" ry="5.6"/><ellipse cx="338" cy="14.5" rx="14" ry="5"/><ellipse cx="652" cy="13" rx="20" ry="5"/></g>
      ${gull(398, 26, 1)}${gull(420, 34, .7)}${gull(60, 30, .8)}${gull(612, 30, .75)}
      ${hill}${houses}${cyp(62, 20)}${cyp(70, 14)}${cyp(388, 17)}${cyp(540, 19)}${cyp(548, 13)}${cyp(650, 16)}
      ${mosque(250, .96)}${galata}${sea}${kiz}${ferry}${boat(486, 78)}${boat(406, 72)}${tulips}</svg>`;
  }

  S.Look.add('tr', {
    vars: {
      light: { '--bg': '#f8f5ee', '--bg2': '#efeadd', '--line': '#e2dccb', '--accent': '#0b7f90', '--accent-soft': '#d9f0f3', '--teal': '#2f5fc4', '--teal-soft': '#e2eafb',
        '--cty': '#bfe3e8', '--cty-seen': '#7cc5cf', '--cty-stamp': '#0b7f90',
        '--dk-hill': '#cfe0c4', '--dk-house': '#f6efe0', '--dk-roof': '#cf6247', '--dk-stone': '#e3dccb', '--dk-dome': '#7f97b3', '--dk-win': '#b9c9dc', '--dk-tree': '#5f9a72', '--dk-sea': '#8fd0dc', '--dk-wave': '#ffffff',
        '--dk-ferry': '#ffffff', '--dk-ferry2': '#f2b134', '--dk-ink': '#51606e', '--dk-leaf': '#4fae6a', '--dk-cloud': '#ffffff', '--dk-sky': 'linear-gradient(#dff1f6, #fbf3e2)' },
      dark: { '--bg': '#10171a', '--bg2': '#172125', '--card': '#1b272c', '--line': '#2b3a40', '--accent': '#4cc3d2', '--accent-ink': '#06262b', '--accent-soft': '#143338', '--teal': '#8aa9f0', '--teal-soft': '#1e2a48',
        '--cty': '#1f4a52', '--cty-seen': '#2f7f8c', '--cty-stamp': '#4cc3d2',
        '--dk-hill': '#1f2f2c', '--dk-house': '#3a3f45', '--dk-roof': '#7c3a2c', '--dk-stone': '#343b44', '--dk-dome': '#222a38', '--dk-win': '#e8c66a', '--dk-tree': '#1a3a2c', '--dk-sea': '#143a48', '--dk-wave': '#2f6c7c',
        '--dk-ferry': '#c9d2d8', '--dk-ferry2': '#b9861e', '--dk-ink': '#0b0f12', '--dk-leaf': '#2f7a48', '--dk-cloud': '#243038', '--dk-sky': 'linear-gradient(#161f38, #10171a)' }
    },
    lupe, decor
  });
})(window.SPT);
