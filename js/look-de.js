/* Duitse sfeer: barnsteen en dennengroen, Lupe in dirndl met een Tiroler hoedje, en een vakwerkstadje met de Alpen,
   dennen en de Brandenburger Tor op de startpagina. Opzet: zie js/look.js en js/look-fr.js. */
(function (S) {
  'use strict';
  if (!S.Look) return;
  const GREEN = '#2f6f57', GREEN2 = '#1f5240', RED = '#b8392f', RED2 = '#8f2a22', CREAM = '#fdf9ef', GOLD = '#e8b23a', APRON = '#f6e7c4';
  const BODY = 'M41 93C35 108 31 124 29 141Q60 151 91 141C89 124 85 108 79 93Z';
  /* pofmouwtje van de witte blouse */
  const sleeve = (x, flip) => `<g transform="translate(${x} 100) scale(${flip} 1)"><path d="M-6.5 3.5C-8 -2-4.5-6 .5-6S8-2 6.5 3.5C3.5 6-3.5 6-6.5 3.5Z" fill="${CREAM}"/>
    <path d="M-6.3 3.4C-3.3 5.8 3.3 5.8 6.3 3.4" fill="none" stroke="${RED}" stroke-width="1.5" stroke-linecap="round"/></g>`;
  /* rijgkoordje van het lijfje: kruisjes tussen y0 en y1 */
  const lacing = (y0, y1, w) => { let s = ''; for (let y = y0; y < y1; y += 4.4) s += `M${60 - w} ${y}L${60 + w} ${y + 4.4}M${60 + w} ${y}L${60 - w} ${y + 4.4}`; return `<path d="${s}" fill="none" stroke="${GOLD}" stroke-width="1.1" stroke-linecap="round"/>`; };
  const edelweiss = (x, y, r) => `<g transform="translate(${x} ${y})">${[0, 60, 120, 180, 240, 300].map(d => `<ellipse cx="0" cy="${-r}" rx="${r * .42}" ry="${r}" transform="rotate(${d})" fill="#fff"/>`).join('')}<circle r="${r * .5}" fill="${GOLD}"/></g>`;

  const lupe = {
    /* groen Tiroler hoedje met koord en veer, schuin op het hoofd */
    hat: () => `<g class="lupe-flower" transform="translate(72 37) rotate(12)">
      <path d="M-30 6C-18 11 20 11 31 6C33 3.5 30 1.5 26 1.5H-25C-29 1.5 -32 3.5 -30 6Z" fill="${GREEN2}"/>
      <path d="M-19 2C-19 -12 -11 -21 1 -21C13 -21 19 -12 19 2Z" fill="${GREEN}"/>
      <path d="M-19 -2.2C-8 1.2 9 1.2 19 -2.2V2H-19Z" fill="${RED}"/>
      <path d="M-19 -2.2C-8 1.2 9 1.2 19 -2.2" fill="none" stroke="${GOLD}" stroke-width="1.2"/>
      <path d="M12 -2C13 -14 19 -24 27 -27C25 -17 20 -8 15.5 -1.5Z" fill="#fff"/><path d="M13 -2.5C16 -12 20 -20 26 -26" fill="none" stroke="#d9d2c2" stroke-width=".9" stroke-linecap="round"/>
      <ellipse cx="-7" cy="-12" rx="6.5" ry="3" transform="rotate(-24 -7 -12)" fill="#fff" opacity=".22"/></g>`,
    /* dirndl: groen rokje, lichte schort, rood lijfje met rijgkoord, witte blouse */
    dress: id => `<g class="lupe-dress"><clipPath id="${id}c"><path d="${BODY}"/></clipPath>
      <path d="${BODY}" fill="${GREEN}"/>
      <g clip-path="url(#${id}c)">
        <path d="M24 108H96V90H24Z" fill="${RED}"/>
        <path d="M48 90Q60 100 72 90V96Q60 104 48 96Z" fill="${CREAM}"/>
        <path d="M45 110Q60 106 75 110L80 150H40Z" fill="${APRON}"/>
        <path d="M49 120V146M56 119V148M64 119V148M71 120V146" stroke="#e6d3a6" stroke-width="1" fill="none"/>
        <path d="M24 108Q60 114 96 108" fill="none" stroke="${GOLD}" stroke-width="2.2"/>
        <path d="M41 93C36 106 33 120 31 135Q36 137 40 138C40 124 42 108 46 94Z" fill="#fff" opacity=".16"/>
        ${lacing(97.5, 107, 4.2)}
      </g>
      <path d="M70 110.5q5 2.5 3.5 8.5M70 110.5q7.5 -.5 9.5 5" fill="none" stroke="${RED}" stroke-width="2" stroke-linecap="round"/><circle cx="70" cy="110.5" r="2" fill="${RED2}"/>
      <path d="M29 141Q60 151 91 141" fill="none" stroke="${GREEN2}" stroke-width="2.2" stroke-linecap="round"/>
      ${edelweiss(60, 94.5, 2.6)}</g>${sleeve(35.5, -1)}${sleeve(84.5, 1)}`,
    /* borststuk voor de kleine Lupe (zonder lijf) */
    bust: id => `<clipPath id="${id}c"><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z"/></clipPath><path d="M20 121C22 101 36 91 60 91S98 101 100 121Z" fill="${CREAM}"/>
      <g clip-path="url(#${id}c)"><path d="M30 122C34 104 44 99 50 96Q60 108 70 96C76 99 86 104 90 122Z" fill="${RED}"/>
        <path d="M50 96Q60 108 70 96" fill="none" stroke="${GOLD}" stroke-width="1.6"/>${lacing(106, 122, 5)}</g>${edelweiss(60, 100.5, 3.1)}`
  };

  /* Vakwerkstadje: Alpen op de achtergrond, vakwerkhuizen met rode daken, kerktoren, de Brandenburger Tor, dennen en bloembakken. */
  function decor() {
    const W = 720, H = 92, G = H - 6;
    const alps = `<path d="M0 ${G}V58L40 40 74 56 118 26 150 50 184 38 236 62 290 34 330 54 372 44 420 64H0Z" fill="var(--dk-alp)"/>
      <path d="M118 26l-11 13 7 -2 5 5 6 -5 8 3zM290 34l-10 12 6 -2 5 4 5 -5 7 3zM40 40l-8 9 5 -1.5 4 3.5 4 -4 5 2z" fill="var(--dk-snow)"/>
      <path d="M420 ${G}V60L470 48 520 60 566 42 610 58 656 36 700 54 720 50V${G}Z" fill="var(--dk-alp)" opacity=".7"/><path d="M656 36l-9 10 5.5 -1.5 4.5 4 5 -4.5 6 2.5z" fill="var(--dk-snow)"/>`;
    /* vakwerkhuis: gevel met balken, puntdak, raampjes met bloembak */
    const house = (x, w, hgt, i) => {
      const top = G - hgt, roof = 15 + (i % 3) * 3, mid = x + w / 2;
      let s = `<rect x="${x}" y="${top}" width="${w}" height="${hgt}" fill="var(--dk-wall)"/><path d="M${x - 2.5} ${top + .5}L${mid} ${top - roof}L${x + w + 2.5} ${top + .5}Z" fill="var(--dk-roof)"/>`;
      s += `<path d="M${x + 3.5} ${top + .5}L${mid} ${top - roof + 6}L${x + w - 3.5} ${top + .5}Z" fill="var(--dk-wall)"/>`;
      // balken
      let b = `M${x} ${top}h${w}M${x} ${top + hgt / 2}h${w}M${x + .8} ${top}v${hgt}M${x + w - .8} ${top}v${hgt}M${mid} ${top - roof + 7}V${top + hgt / 2}`;
      b += i % 2 ? `M${x + 1} ${top + hgt / 2}L${x + w * .28} ${top + 1}M${x + w - 1} ${top + hgt / 2}L${x + w * .72} ${top + 1}` : `M${x + 1} ${top + 1}l${w * .26} ${hgt / 2 - 1}M${x + w - 1} ${top + 1}l${-w * .26} ${hgt / 2 - 1}`;
      b += `M${mid - w * .2} ${top - 1}L${mid} ${top - roof + 8}L${mid + w * .2} ${top - 1}`;
      s += `<path d="${b}" fill="none" stroke="var(--dk-beam)" stroke-width="1.5"/>`;
      // ramen en bloembakken
      const wn = (wx, wy) => `<rect x="${wx}" y="${wy}" width="6" height="7.5" fill="var(--dk-win)"/><path d="M${wx + 3} ${wy}v7.5" stroke="var(--dk-beam)" stroke-width=".7"/><rect x="${wx - .8}" y="${wy + 7.5}" width="7.6" height="1.8" fill="var(--dk-flower)"/>`;
      s += wn(x + w * .22 - 3, top + 5) + wn(x + w * .78 - 3, top + 5) + wn(x + w * .22 - 3, top + hgt / 2 + 5);
      s += `<path d="M${x + w * .78 - 4} ${G}v-11q4 -3.4 8 0v11z" fill="var(--dk-door)"/>`;
      return s;
    };
    const tree = (tx, k) => `<g transform="translate(${tx} ${G}) scale(${k})"><rect x="-1.2" y="-5" width="2.4" height="5" fill="var(--dk-beam)"/><path d="M0 -30L8 -17H4.5L10 -8H-10L-4.5 -17H-8Z" fill="var(--dk-tree)"/><path d="M0 -30L8 -17H4.5L10 -8H0Z" fill="#000" opacity=".1"/></g>`;
    /* kerk met spitse toren en klokje */
    const church = cx => `<rect x="${cx - 8}" y="${G - 48}" width="16" height="48" fill="var(--dk-wall)"/><path d="M${cx - 9.5} ${G - 48}L${cx} ${G - 78}L${cx + 9.5} ${G - 48}Z" fill="var(--dk-spire)"/>
      <path d="M${cx} ${G - 78}v-6M${cx - 2.5} ${G - 81.5}h5" stroke="var(--dk-beam)" stroke-width="1.2"/><circle cx="${cx}" cy="${G - 38}" r="4" fill="var(--dk-snow)" stroke="var(--dk-beam)" stroke-width="1"/><path d="M${cx} ${G - 38}v-2.6M${cx} ${G - 38}h2" stroke="var(--dk-beam)" stroke-width=".8"/>
      <rect x="${cx - 2.2}" y="${G - 28}" width="4.4" height="9" rx="2.2" fill="var(--dk-win)"/><rect x="${cx + 8}" y="${G - 30}" width="30" height="30" fill="var(--dk-wall)"/><path d="M${cx + 6} ${G - 30}l17 -12 17 12z" fill="var(--dk-roof)"/>
      ${[14, 23, 32].map(d => `<rect x="${cx + d - 1.8}" y="${G - 22}" width="3.6" height="10" rx="1.8" fill="var(--dk-win)"/>`).join('')}`;
    /* Brandenburger Tor: zes zuilen, attiek en de quadriga als silhouet */
    const tor = tx => {
      let s = `<rect x="${tx - 40}" y="${G - 40}" width="80" height="7" fill="var(--dk-stone)"/><rect x="${tx - 34}" y="${G - 48}" width="68" height="8" fill="var(--dk-stone)"/><rect x="${tx - 42}" y="${G - 34}" width="84" height="2.4" fill="var(--dk-stone2)"/>`;
      for (let k = 0; k < 6; k++) s += `<rect x="${tx - 38 + k * 14.4}" y="${G - 32}" width="4.6" height="32" fill="var(--dk-stone)"/>`;
      s += `<g fill="var(--dk-stone2)"><rect x="${tx - 9}" y="${G - 52}" width="18" height="4"/><path d="M${tx - 7} ${G - 52}q1 -5 4 -5.5l1.5 2 1.5 -4 2 3.5q3 .5 5 4z"/><path d="M${tx + 1} ${G - 59}v-6" stroke="var(--dk-stone2)" stroke-width="1.1"/><circle cx="${tx + 1}" cy="${G - 66}" r="1.5"/></g>`;
      return s;
    };
    const lamp = lx => `<path d="M${lx} ${G}V${G - 19}" stroke="var(--dk-beam)" stroke-width="1.4"/><rect x="${lx - 2.2}" y="${G - 24}" width="4.4" height="5" fill="var(--gold)"/><path d="M${lx - 3} ${G - 24}l3 -2.4 3 2.4z" fill="var(--dk-beam)"/>`;
    const hs = [[6, 40, 34], [48, 36, 42], [86, 44, 36], [132, 38, 44], [266, 42, 38], [310, 36, 44], [348, 40, 34], [504, 40, 40], [546, 36, 34], [628, 42, 42], [672, 40, 36]];
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <circle cx="604" cy="17" r="10" fill="var(--gold)" opacity=".6"/>
      <g fill="var(--dk-cloud)"><ellipse cx="216" cy="15" rx="26" ry="6"/><ellipse cx="236" cy="11" rx="15" ry="5.5"/><ellipse cx="474" cy="22" rx="28" ry="6"/><ellipse cx="456" cy="17" rx="14" ry="5"/></g>
      ${alps}${church(196)}${tor(440)}${hs.map((a, i) => house(a[0], a[1], a[2], i)).join('')}
      ${tree(250, 1)}${tree(392, .85)}${tree(492, 1.05)}${tree(596, .9)}${tree(612, 1.15)}${tree(714, .9)}${lamp(124)}${lamp(304)}${lamp(588)}
      <rect x="0" y="${G}" width="${W}" height="${H - G}" fill="var(--dk-ground)"/></svg>`;
  }

  S.Look.add('de', {
    vars: {
      light: { '--bg': '#faf7ef', '--bg2': '#f1ecdf', '--line': '#e4dccb', '--accent': '#a8650a', '--accent-soft': '#f8ead0', '--teal': '#2f6f57', '--teal-soft': '#dfeee6',
        '--cty': '#ecd6a4', '--cty-seen': '#dcb060', '--cty-stamp': '#a8650a',
        '--dk-wall': '#fbf3df', '--dk-beam': '#5a4030', '--dk-roof': '#b5503c', '--dk-spire': '#55756a', '--dk-win': '#bcd3de', '--dk-flower': '#d8493f', '--dk-door': '#7a5536', '--dk-tree': '#3d7a5c',
        '--dk-alp': '#c9d6dc', '--dk-snow': '#ffffff', '--dk-stone': '#dccfae', '--dk-stone2': '#b9a77c', '--dk-cloud': '#ffffff', '--dk-ground': '#cfc6ae', '--dk-sky': 'linear-gradient(#dcebf3, #faf7ef)' },
      dark: { '--bg': '#14130f', '--bg2': '#1d1b16', '--card': '#222019', '--line': '#353126', '--accent': '#f0b44a', '--accent-ink': '#231703', '--accent-soft': '#3a2c12', '--teal': '#6fc0a0', '--teal-soft': '#18302a',
        '--cty': '#54421f', '--cty-seen': '#8a6a24', '--cty-stamp': '#f0b44a',
        '--dk-wall': '#4a4438', '--dk-beam': '#17130f', '--dk-roof': '#5e2c24', '--dk-spire': '#263a36', '--dk-win': '#e8c66a', '--dk-flower': '#a23a33', '--dk-door': '#2a2018', '--dk-tree': '#1f4435',
        '--dk-alp': '#2a323a', '--dk-snow': '#aab4bc', '--dk-stone': '#5a5340', '--dk-stone2': '#3c372a', '--dk-cloud': '#272a30', '--dk-ground': '#24221b', '--dk-sky': 'linear-gradient(#18222e, #14130f)' }
    },
    lupe, decor
  });
})(window.SPT);
