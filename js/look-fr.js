/* Franse sfeer: bleu-blanc-rouge met lavendel, Lupe in marinière met baret, en de daken van Parijs op de startpagina. */
(function (S) {
  'use strict';
  if (!S.Look) return;
  const NAVY = '#1f3a78', RED = '#d23b48', RED2 = '#a82a38', CREAM = '#fdfaf3';
  /* gebogen strepen van de marinière, tussen y0 en y1 */
  const stripes = (x0, x1, y0, y1, step, sag, w) => { let s = ''; for (let y = y0; y <= y1; y += step) s += `<path d="M${x0} ${y}Q${(x0 + x1) / 2} ${y + sag} ${x1} ${y}"/>`; return `<g fill="none" stroke="${NAVY}" stroke-width="${w}">${s}</g>`; };
  const scarf = (y, k) => `<g transform="translate(60 ${y}) scale(${k})"><path d="M-12-3Q0 4 12-3L9.5 3Q0 8-9.5 3Z" fill="${RED}"/><path d="M0 4.5l-5 8.5 5-2.4 4 3.2z" fill="${RED}"/><path d="M-2.4 3.4h4.8l-.8 3.4h-3.2z" fill="${RED2}"/></g>`;
  const sleeve = (x, flip, id) => `<g transform="translate(${x} 100) scale(${flip} 1)"><clipPath id="${id}m${flip > 0 ? 'r' : 'l'}"><path d="M-6.5 3.5C-8 -2-4.5-6 .5-6S8-2 6.5 3.5C3.5 6-3.5 6-6.5 3.5Z"/></clipPath>
    <path d="M-6.5 3.5C-8 -2-4.5-6 .5-6S8-2 6.5 3.5C3.5 6-3.5 6-6.5 3.5Z" fill="${CREAM}"/><g clip-path="url(#${id}m${flip > 0 ? 'r' : 'l'})">${stripes(-9, 9, -3.5, 4, 3.6, 1.2, 1.7)}</g></g>`;

  const lupe = {
    /* rode baret, schuin op het hoofd */
    hat: () => `<g class="lupe-flower" transform="translate(70 39) rotate(11)">
      <path d="M-31 3C-34 -13 -15 -22 3 -21C22 -20 35 -10 32 3C20 8.5 -19 8.5 -31 3Z" fill="${RED}"/>
      <path d="M-31 3C-19 8.5 20 8.5 32 3" fill="none" stroke="${RED2}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M2 -21q.6 -4.6 3.6 -6" fill="none" stroke="${RED2}" stroke-width="2.4" stroke-linecap="round"/>
      <ellipse cx="-11" cy="-10" rx="10" ry="3.6" transform="rotate(-14 -11 -10)" fill="#fff" opacity=".28"/></g>`,
    /* marinière-jurkje met rood sjaaltje */
    dress: id => `<g class="lupe-dress"><clipPath id="${id}c"><path d="M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z"/></clipPath>
      <path d="M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z" fill="${CREAM}"/>
      <g clip-path="url(#${id}c)">${stripes(26, 94, 104, 140, 6.4, 8, 3)}<path d="M41 93C36 106 33 120 31 135Q36 137 40 138C40 124 42 108 46 94Z" fill="#fff" opacity=".35"/></g>
      <path d="M29 141Q60 151 91 141" fill="none" stroke="${NAVY}" stroke-width="2.2" stroke-linecap="round"/>
      ${scarf(97, 1)}</g>${sleeve(35.5, -1, id)}${sleeve(84.5, 1, id)}`,
    /* borststuk voor de kleine Lupe (zonder lijf) */
    bust: id => `<clipPath id="${id}c"><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z"/></clipPath><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z" fill="${CREAM}"/>
      <g clip-path="url(#${id}c)">${stripes(14, 106, 100, 122, 6.5, 9, 3.4)}</g>${scarf(101, 1.25)}`
  };

  /* De daken van Parijs: zinken mansardedaken, schoorstenen, de Eiffeltoren, een café met luifel en lavendel. Kleuren via tokens. */
  function decor() {
    const W = 720, H = 92, G = H - 6;
    let x = -6, i = 0, back = '', front = '';
    const hs = [38, 46, 34, 50, 42, 36, 48, 40, 44, 35, 47, 39], ws = [46, 58, 40, 52, 64, 44, 56, 48, 60, 42, 54, 50];
    while (x < W) {
      const w = ws[i % ws.length], hgt = hs[(i * 5 + 2) % hs.length], top = G - hgt, roof = 11;
      if (x > 468 && x < 560) { x += 4; i++; if (x < 560) { x = 560; } continue; } // ruimte voor de Eiffeltoren
      // gevel
      back += `<rect x="${x}" y="${top}" width="${w - 2}" height="${hgt}" fill="var(--dk-wall)"/>`;
      // mansardedak met dakkapellen
      back += `<path d="M${x - 1} ${top}l4 ${-roof}h${w - 8}l4 ${roof}z" fill="var(--dk-roof)"/>`;
      const n = Math.max(2, Math.round(w / 15));
      for (let k = 0; k < n; k++) {
        const wx = x + 5 + k * ((w - 12) / n);
        back += `<rect x="${wx}" y="${top - 7.5}" width="4.6" height="6" rx="2.3" fill="var(--dk-win)"/>`;
        for (let r = 0; r * 12 + 9 < hgt - 4; r++) back += `<rect x="${wx}" y="${top + 5 + r * 12}" width="4.6" height="7.5" rx=".8" fill="var(--dk-win)"/>`;
        if (hgt > 40) back += `<path d="M${wx - 1.4} ${top + 13}h7.4" stroke="var(--dk-roof)" stroke-width="1.2"/>`;
      }
      // schoorstenen met de rode potjes
      const cx = x + (i % 2 ? w * .68 : w * .22);
      back += `<rect x="${cx}" y="${top - roof - 6}" width="9" height="7" fill="var(--dk-wall)"/>` + [0, 3.4, 6.8].map(d => `<rect x="${cx + .4 + d}" y="${top - roof - 9.5}" width="1.9" height="4" rx=".6" fill="var(--dk-pot)"/>`).join('');
      x += w; i++;
    }
    // Eiffeltoren
    const ex = 514, eb = G, et = 10;
    const eiffel = `<g fill="none" stroke="var(--dk-tower)" stroke-linecap="round" stroke-linejoin="round">
      <path d="M${ex - 24} ${eb}C${ex - 12} ${eb - 26} ${ex - 4} ${eb - 52} ${ex - 1.4} ${et + 8}M${ex + 24} ${eb}C${ex + 12} ${eb - 26} ${ex + 4} ${eb - 52} ${ex + 1.4} ${et + 8}" stroke-width="4"/>
      <path d="M${ex - 15.5} ${eb - 20}h31M${ex - 8} ${eb - 42}h16" stroke-width="3.4"/>
      <path d="M${ex - 14} ${eb}Q${ex} ${eb - 26} ${ex + 14} ${eb}" stroke-width="2.2"/>
      <path d="M${ex - 19} ${eb - 10}l9.5-10M${ex + 19} ${eb - 10}l-9.5-10M${ex - 11} ${eb - 30}l6-12M${ex + 11} ${eb - 30}l-6-12" stroke-width="1.3"/>
      <path d="M${ex} ${et + 8}V${et}" stroke-width="2"/></g>`;
    // café met rood-wit gestreepte luifel, tafeltje en lavendel/platanen vooraan
    const awn = (ax, aw) => `<path d="M${ax} ${G - 19}h${aw}l3 8h${-aw - 6}z" fill="${RED}"/>` + Array.from({ length: Math.floor(aw / 8) }, (_, k) => `<path d="M${ax + 4 + k * 8} ${G - 19}h4l.6 8h-4.6z" fill="#fff"/>`).join('') + `<rect x="${ax + 2}" y="${G - 11}" width="${aw - 4}" height="11" fill="var(--dk-shop)"/><rect x="${ax + 6}" y="${G - 9}" width="${aw / 2 - 8}" height="9" fill="var(--dk-win)"/><rect x="${ax + aw / 2 + 2}" y="${G - 9}" width="${aw / 2 - 8}" height="7" fill="var(--dk-win)"/>`;
    const table = tx => `<g stroke="var(--dk-ink)" stroke-width="1.3" stroke-linecap="round" fill="none"><path d="M${tx - 4} ${G - 6}h8M${tx} ${G - 6}V${G}M${tx - 9} ${G}v-5h3M${tx + 9} ${G}v-5h-3"/></g>`;
    const tree = (tx, r) => `<path d="M${tx} ${G}v${-r * 1.5}" stroke="var(--dk-ink)" stroke-width="2"/><circle cx="${tx}" cy="${G - r * 2}" r="${r}" fill="var(--dk-tree)"/><circle cx="${tx - r * .6}" cy="${G - r * 1.6}" r="${r * .7}" fill="var(--dk-tree)"/><circle cx="${tx + r * .65}" cy="${G - r * 1.7}" r="${r * .66}" fill="var(--dk-tree)"/>`;
    const lav = lx => [-5, -2.5, 0, 2.5, 5].map((d, k) => `<path d="M${lx + d} ${G}q${d * .3} -6 ${d * .5} ${-9 - (k % 2) * 2}" stroke="var(--dk-lav)" stroke-width="2.2" stroke-linecap="round" fill="none"/>`).join('');
    const lamp = lx => `<path d="M${lx} ${G}V${G - 20}" stroke="var(--dk-ink)" stroke-width="1.5"/><path d="M${lx - 2.6} ${G - 20}h5.2l-1 -5h-3.2z" fill="var(--gold)"/><path d="M${lx - 3.2} ${G - 25}h6.4" stroke="var(--dk-ink)" stroke-width="1.4" stroke-linecap="round"/>`;
    front = awn(96, 56) + table(166) + awn(604, 48) + table(590) + tree(28, 9) + tree(232, 10) + tree(330, 8) + tree(446, 9) + tree(684, 9)
      + lamp(70) + lamp(292) + lamp(574) + [186, 204, 262, 356, 372, 400, 418, 480, 548].map(lav).join('');
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <circle cx="642" cy="20" r="11" fill="var(--gold)" opacity=".55"/>
      <g fill="var(--dk-cloud)"><ellipse cx="120" cy="16" rx="26" ry="6"/><ellipse cx="140" cy="12" rx="16" ry="6"/><ellipse cx="380" cy="20" rx="30" ry="6"/><ellipse cx="362" cy="15" rx="15" ry="5.5"/></g>
      ${eiffel}${back}${front}<rect x="0" y="${G}" width="${W}" height="${H - G}" fill="var(--dk-ground)"/></svg>`;
  }

  S.Look.add('fr', {
    vars: {
      light: { '--bg': '#f9f7f2', '--bg2': '#efece4', '--line': '#e3dfd4', '--accent': '#2f55b5', '--accent-soft': '#e3eafb', '--teal': '#7a5fc0', '--teal-soft': '#ece6f8',
        '--cty': '#c9d6f2', '--cty-seen': '#8fa8e0', '--cty-stamp': '#2f55b5',
        '--dk-wall': '#ece4d4', '--dk-roof': '#7f8fa9', '--dk-win': '#c9d3e6', '--dk-pot': '#cf6a4c', '--dk-tower': '#9aa6bd', '--dk-shop': '#2f4a86', '--dk-ink': '#56607a', '--dk-tree': '#9cc48a', '--dk-lav': '#9a7fd6', '--dk-cloud': '#ffffff', '--dk-ground': '#d9d3c6', '--dk-sky': 'linear-gradient(#e4eefb, #f9f7f2)' },
      dark: { '--bg': '#12141a', '--bg2': '#1a1d26', '--card': '#1e222c', '--line': '#2e3340', '--accent': '#86a2f2', '--accent-ink': '#0f1730', '--accent-soft': '#1f2a48', '--teal': '#ab9bea', '--teal-soft': '#2a2440',
        '--cty': '#2c3a5e', '--cty-seen': '#3f5796', '--cty-stamp': '#86a2f2',
        '--dk-wall': '#3a3d48', '--dk-roof': '#252a3a', '--dk-win': '#e8c66a', '--dk-pot': '#9a4a38', '--dk-tower': '#566080', '--dk-shop': '#1f2c50', '--dk-ink': '#0c0e14', '--dk-tree': '#2f4a3a', '--dk-lav': '#7a62b8', '--dk-cloud': '#262b3a', '--dk-ground': '#22252e', '--dk-sky': 'linear-gradient(#1a2038, #12141a)' }
    },
    lupe, decor
  });
})(window.SPT);
