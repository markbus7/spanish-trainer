/* Eigen tekening per unit (48×48), in dezelfde vlakke stijl als js/icons.js.
   S.Icons.unit(u, klasse) geeft een <span class="ic …"> met de tekening van die unit; zonder tekening blijft de emoji staan.
   Sleutel = unit-id, zodat units met dezelfde emoji (💭, 📨, 🌴, ⚖️) toch elk een eigen plaatje krijgen. */
(function (S) {
  'use strict';
  const C = { o: '#e2603a', o2: '#f08a5d', t: '#1b998b', t2: '#7fd3c7', g: '#f2b134', g2: '#f9d27a', p: '#f0789f', p2: '#f9b9cf', b: '#3b82d6', b2: '#9cc4f2', cream: '#fff8ee', ink: '#3a2c25', brown: '#8a5a3c', brown2: '#b98256', green: '#3a9d5d', green2: '#8fcf7e', grey: '#cfc3b8', red: '#d94848' };
  const txt = (x, y, s, size, fill, w) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-weight="${w || 800}" font-size="${size}" fill="${fill}">${s}</text>`;
  const shine = (cx, cy, rx, ry, rot) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rot || -30} ${cx} ${cy})" fill="#fff" opacity=".3"/>`;
  const spark = (x, y, r, fill) => `<path d="M${x} ${y - r}Q${x + r * .22} ${y - r * .22} ${x + r} ${y}Q${x + r * .22} ${y + r * .22} ${x} ${y + r}Q${x - r * .22} ${y + r * .22} ${x - r} ${y}Q${x - r * .22} ${y - r * .22} ${x} ${y - r}z" fill="${fill}"/>`;
  const person = (x, y, s, body, skin) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-9 22v-6a9 9 0 0 1 18 0v6z" fill="${body}"/><circle cy="0" r="7" fill="${skin || '#e9b48a'}"/><path d="M-7 -1.5a7 7 0 0 1 14 0c-2-2.6-4.2-3.6-7-3.6S-5 -4.1-7 -1.5z" fill="${C.ink}"/></g>`;
  const envelope = (x, y, w, hgt, fill, flap) => `<rect x="${x}" y="${y}" width="${w}" height="${hgt}" rx="3.5" fill="${fill}"/><path d="M${x + 1.5} ${y + 2}l${w / 2 - 1.5} ${hgt * .52}l${w / 2 - 1.5} ${-hgt * .52}" fill="none" stroke="${flap}" stroke-width="2.4" stroke-linejoin="round"/>`;

  const ART = {
    /* ── A1 ── */
    'a1-01': `<path d="M5 9a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H17l-7 6v-6a5 5 0 0 1-5-5z" fill="${C.o}"/>${txt(20, 19.5, '¡Hola!', 9.5, '#fff')}
      <path d="M17 26a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-1v5l-6-5h-9a5 5 0 0 1-5-5z" fill="${C.t}"/><circle cx="24.5" cy="31" r="2" fill="#fff"/><circle cx="30.5" cy="31" r="2" fill="#fff"/><circle cx="36.5" cy="31" r="2" fill="#fff"/>`,
    'a1-02': `<rect x="11" y="3" width="8" height="9" rx="2" fill="${C.grey}"/><rect x="5" y="9" width="38" height="32" rx="5" fill="${C.cream}"/><rect x="5" y="9" width="38" height="32" rx="5" fill="none" stroke="${C.b}" stroke-width="2.2"/>
      <rect x="5" y="9" width="38" height="8" rx="4" fill="${C.b}"/><rect x="5" y="13" width="38" height="4" fill="${C.b}"/><rect x="17" y="6" width="14" height="5" rx="2.5" fill="${C.ink}" opacity=".55"/>
      <rect x="10" y="21" width="12" height="14" rx="2.5" fill="${C.b2}"/>${person(16, 26.5, .52, C.o)}
      <rect x="25" y="23" width="13" height="2.8" rx="1.4" fill="${C.ink}" opacity=".7"/><rect x="25" y="28.5" width="10" height="2.4" rx="1.2" fill="${C.ink}" opacity=".35"/><rect x="25" y="33" width="12" height="2.4" rx="1.2" fill="${C.ink}" opacity=".35"/>`,
    'a1-03': `<path d="M24 44c-10-6.5-18-13-18-21a9 9 0 0 1 18-3 9 9 0 0 1 18 3c0 8-8 14.5-18 21z" fill="${C.p2}" opacity=".55"/>
      ${person(14, 18, .95, C.t)}${person(34, 18, .95, C.o)}${person(24, 28, .66, C.g, '#f0c49c')}`,
    'a1-04': `<rect x="4" y="18" width="11" height="24" rx="1.5" fill="${C.b}"/><rect x="15" y="10" width="11" height="32" rx="1.5" fill="${C.o}"/><rect x="26" y="22" width="9" height="20" rx="1.5" fill="${C.t}"/>
      <path d="M35 42V27a6.5 6.5 0 0 1 13 0v15z" fill="${C.g}"/><path d="M41.5 14v6.5M39 17h5" stroke="${C.g}" stroke-width="2" stroke-linecap="round"/><circle cx="41.5" cy="27" r="2.5" fill="${C.cream}"/>
      ${[[6.5, 22], [10.5, 22], [6.5, 28], [10.5, 28], [6.5, 34], [10.5, 34]].map(([x, y]) => `<rect x="${x}" y="${y}" width="2.6" height="3.4" rx=".6" fill="${C.b2}"/>`).join('')}
      ${[[17.5, 14], [22, 14], [17.5, 20], [22, 20], [17.5, 26], [22, 26], [17.5, 32], [22, 32]].map(([x, y]) => `<rect x="${x}" y="${y}" width="2.8" height="3.6" rx=".6" fill="${C.g2}"/>`).join('')}
      ${[[28.5, 26], [28.5, 32]].map(([x, y]) => `<rect x="${x}" y="${y}" width="4" height="3.4" rx=".6" fill="${C.t2}"/>`).join('')}
      <path d="M2 42h44" stroke="${C.green}" stroke-width="3" stroke-linecap="round"/>`,
    'a1-05': `<path d="M8 13.5a6 6 0 0 1 9-5M40 13.5a6 6 0 0 0-9-5" stroke="${C.o}" stroke-width="4.2" stroke-linecap="round" fill="none"/>
      <path d="M13 41l-3 4M35 41l3 4" stroke="${C.ink}" stroke-width="3" stroke-linecap="round" opacity=".65"/>
      <circle cx="24" cy="27" r="16" fill="${C.o}"/><circle cx="24" cy="27" r="12.5" fill="${C.cream}"/>
      ${[0, 1, 2, 3].map(i => { const a = i * Math.PI / 2; return `<circle cx="${(24 + 10 * Math.sin(a)).toFixed(1)}" cy="${(27 - 10 * Math.cos(a)).toFixed(1)}" r="1.3" fill="${C.ink}" opacity=".5"/>`; }).join('')}
      <path d="M24 27v-7.5M24 27l5 3" stroke="${C.ink}" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="27" r="2" fill="${C.o}"/>${shine(16, 17, 4, 2)}`,
    'a1-06': `<path d="M20 42c-9-5.6-15-11-15-17.5a7.6 7.6 0 0 1 15-2.6 7.6 7.6 0 0 1 15 2.6c0 6.5-6 11.9-15 17.5z" fill="${C.p}"/>${shine(12, 21, 3.6, 2)}
      <path d="M33 25V8l11-2.5v15" fill="none" stroke="${C.t}" stroke-width="2.8" stroke-linejoin="round"/><ellipse cx="30.5" cy="25.5" rx="4.2" ry="3.3" fill="${C.t}"/><ellipse cx="41.5" cy="21" rx="4.2" ry="3.3" fill="${C.t}"/>`,
    'a1-07': `<path d="M4 36a20 20 0 0 1 40 0z" fill="${C.g}"/>
      <path d="M8 33c1-4 3-5 5-3.5 1.5-4.5 4.5-5 6.5-2.5 2-4 5.5-4 7.5-.5 2.5-3 5.5-2.5 6.5 1 2-1.5 4-.5 4.6 2.5" fill="none" stroke="${C.green}" stroke-width="4.6" stroke-linecap="round"/>
      <circle cx="15" cy="27.5" r="2.6" fill="${C.red}"/><circle cx="27" cy="25.5" r="2.6" fill="${C.red}"/><circle cx="21" cy="29" r="2" fill="#fff"/><circle cx="33" cy="28.5" r="2" fill="#fff"/>
      <path d="M4 36a20 20 0 0 1 40 0" fill="none" stroke="#d99a1e" stroke-width="2"/><path d="M4 36h40" stroke="#d99a1e" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M38 12a5 5 0 1 1-4 8" fill="${C.green2}"/><path d="M36.5 11.5c1.6-2 3.4-2.4 5-1.6" stroke="${C.green}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`,
    'a1-08': `<g transform="rotate(12 27 22)"><rect x="23.5" y="12" width="6" height="28" rx="3" fill="${C.p}"/><rect x="22.5" y="1.5" width="8" height="16" rx="3.5" fill="${C.p}"/>
      <rect x="30" y="2.5" width="7.5" height="13" rx="1.6" fill="#fff"/>${[0, 1, 2, 3].map(i => `<path d="M30.5 ${5 + i * 3}h6.5" stroke="${C.b2}" stroke-width="1.2"/>`).join('')}<path d="M37.5 3c2.4-.6 4.2.4 4.6 2.4-1.6 1.4-3.2 1.2-4.6.2" fill="${C.t2}"/></g>
      <path d="M11 22h24l-2.4 19a3 3 0 0 1-3 2.6H16.4a3 3 0 0 1-3-2.6z" fill="${C.t}"/><path d="M11 22h24l-.5 4H11.5z" fill="#fff" opacity=".25"/>${shine(16, 30, 1.6, 4, 0)}
      <circle cx="9" cy="10" r="3.4" fill="${C.b2}" opacity=".75"/><circle cx="14.5" cy="5" r="2.2" fill="${C.b2}" opacity=".75"/><circle cx="6" cy="17" r="1.8" fill="${C.b2}" opacity=".75"/>`,
    'a1-09': `<path d="M17 16v-3a7 7 0 0 1 14 0v3" fill="none" stroke="${C.ink}" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>
      <path d="M9 16h30l3 26H6z" fill="${C.p}"/><path d="M9 16h30l.8 7H8.2z" fill="#fff" opacity=".18"/>
      <path d="M24 26.5c-3.6-2.5-6-4.6-6-7a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 2.4-2.4 4.5-6 7z" fill="#fff" opacity=".9" transform="translate(0 5)"/>
      <circle cx="17" cy="20" r="1.6" fill="${C.ink}" opacity=".45"/><circle cx="31" cy="20" r="1.6" fill="${C.ink}" opacity=".45"/>`,
    'a1-10': `<circle cx="18" cy="16" r="9" fill="${C.g}"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return `<path d="M${(18 + 11.5 * Math.cos(a)).toFixed(1)} ${(16 + 11.5 * Math.sin(a)).toFixed(1)}L${(18 + 14.5 * Math.cos(a)).toFixed(1)} ${(16 + 14.5 * Math.sin(a)).toFixed(1)}" stroke="${C.g}" stroke-width="2.4" stroke-linecap="round"/>`; }).join('')}
      <path d="M14 35a7 7 0 0 1 2-13.6 9.5 9.5 0 0 1 18-1.6A7.4 7.4 0 0 1 36 35z" fill="${C.cream}"/><path d="M14 35a7 7 0 0 1 2-13.6 9.5 9.5 0 0 1 18-1.6A7.4 7.4 0 0 1 36 35z" fill="none" stroke="${C.b2}" stroke-width="2"/>
      <path d="M19 39l-2 5M26 39l-2 5M33 39l-2 5" stroke="${C.b}" stroke-width="2.8" stroke-linecap="round"/>`,
    /* ── A2 ── */
    'a2-01': `<rect x="7" y="8" width="34" height="34" rx="5" fill="${C.cream}"/><rect x="7" y="8" width="34" height="34" rx="5" fill="none" stroke="${C.t}" stroke-width="2.2"/><path d="M7 13a5 5 0 0 1 5-5h24a5 5 0 0 1 5 5v5H7z" fill="${C.t}"/>
      <rect x="14" y="4" width="3.4" height="8" rx="1.7" fill="${C.ink}" opacity=".6"/><rect x="30.6" y="4" width="3.4" height="8" rx="1.7" fill="${C.ink}" opacity=".6"/>
      ${txt(24, 36, 'ayer', 10, C.o)}<path d="M33 24.5a8 8 0 0 0-15 0" fill="none" stroke="${C.o}" stroke-width="2.2" stroke-linecap="round"/><path d="M15.5 21.5l2.5 3.5 3.3-2.6" fill="none" stroke="${C.o}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    'a2-02': `<path d="M4 40c6-3 10-1.5 15-4" stroke="${C.b2}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="2.5 3.5" fill="none"/>
      <g transform="rotate(-32 26 22)"><path d="M10 22c0-2.2 2-3.2 5-3.2h22c4 0 8 1.4 8 3.2s-4 3.2-8 3.2H15c-3 0-5-1-5-3.2z" fill="${C.cream}"/><path d="M10 22c0-2.2 2-3.2 5-3.2h22c4 0 8 1.4 8 3.2s-4 3.2-8 3.2H15c-3 0-5-1-5-3.2z" fill="none" stroke="${C.b}" stroke-width="1.8"/>
      <path d="M22 19l7-12h4l-3 12zM22 25l7 12h4l-3-12z" fill="${C.b}"/><path d="M11 20l-2-7h3l4 6z" fill="${C.o}"/>
      ${[0, 1, 2, 3].map(i => `<circle cx="${32 + i * 2.6}" cy="21.4" r=".9" fill="${C.b}"/>`).join('')}</g>`,
    'a2-03': `<circle cx="14" cy="12" r="5.5" fill="${C.brown2}"/><circle cx="34" cy="12" r="5.5" fill="${C.brown2}"/><circle cx="14" cy="12" r="2.8" fill="${C.p2}"/><circle cx="34" cy="12" r="2.8" fill="${C.p2}"/>
      <ellipse cx="24" cy="36" rx="12" ry="10" fill="${C.brown2}"/><ellipse cx="24" cy="37.5" rx="7" ry="6" fill="${C.g2}"/><circle cx="11.5" cy="31" r="4.2" fill="${C.brown2}"/><circle cx="36.5" cy="31" r="4.2" fill="${C.brown2}"/>
      <circle cx="24" cy="19" r="11" fill="${C.brown2}"/><ellipse cx="24" cy="23" rx="5.2" ry="4" fill="${C.g2}"/><ellipse cx="24" cy="21.4" rx="2" ry="1.4" fill="${C.ink}"/>
      <circle cx="19.5" cy="17" r="1.6" fill="${C.ink}"/><circle cx="28.5" cy="17" r="1.6" fill="${C.ink}"/><path d="M20 28l4 2.2 4-2.2-4 4.6z" fill="${C.p}"/>`,
    'a2-04': `<path d="M24 12c-5-3.5-12-4-19-3v29c7-1 14-.5 19 3z" fill="${C.cream}"/><path d="M24 12c5-3.5 12-4 19-3v29c-7-1-14-.5-19 3z" fill="#f6ead8"/>
      <path d="M24 12c-5-3.5-12-4-19-3v29c7-1 14-.5 19 3 5-3.5 12-4 19-3V9c-7-1-14-.5-19 3zM24 12v29" fill="none" stroke="${C.o}" stroke-width="2.2" stroke-linejoin="round"/>
      ${[16, 21, 26, 31].map(y => `<path d="M9 ${y}q6-1 11 1.2" stroke="${C.ink}" stroke-width="1.6" opacity=".35" fill="none" stroke-linecap="round"/>`).join('')}
      <path d="M33 4v15l3-2.4 3 2.4V4z" fill="${C.p}"/><path d="M28 23.5c3.5-3 7.5-3 11 0M28 28.5c3.5-3 7.5-3 11 0" stroke="${C.ink}" stroke-width="1.6" opacity=".35" fill="none" stroke-linecap="round"/>`,
    'a2-05': `<path d="M24 5l5.3 11.6 12.7 1.4-9.4 8.6 2.6 12.5L24 32.8l-11.2 6.3 2.6-12.5L6 18l12.7-1.4z" fill="${C.g}"/><path d="M24 5l5.3 11.6 12.7 1.4-9.4 8.6 2.6 12.5L24 32.8z" fill="#fff" opacity=".18"/>
      <circle cx="20" cy="22" r="1.7" fill="${C.ink}"/><circle cx="28" cy="22" r="1.7" fill="${C.ink}"/><path d="M21 26.5q3 2.6 6 0" stroke="${C.ink}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      ${spark(41, 6, 4, C.o)}${spark(7, 40, 3.4, C.t)}${spark(42, 40, 2.6, C.p)}`,
    'a2-06': `<path d="M17 13v-3a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" fill="none" stroke="${C.ink}" stroke-width="2.6" opacity=".7"/>
      <rect x="5" y="13" width="38" height="28" rx="6" fill="${C.cream}"/><rect x="5" y="13" width="38" height="28" rx="6" fill="none" stroke="${C.red}" stroke-width="2.2"/>
      <path d="M20 20h8v5h5v8h-5v5h-8v-5h-5v-8h5z" fill="${C.red}" transform="translate(0 -1)"/>`,
    'a2-07': `<rect x="6" y="20" width="36" height="22" rx="3" fill="${C.t}"/><rect x="4" y="14" width="40" height="9" rx="3" fill="${C.t2}"/>
      <rect x="21" y="14" width="6" height="28" fill="${C.p}"/><path d="M24 14c-4-7-12-8-11-2.5.6 3 6 3 11 2.5zM24 14c4-7 12-8 11-2.5-.6 3-6 3-11 2.5z" fill="${C.p}"/><path d="M24 14c-4-7-12-8-11-2.5" fill="none" stroke="#d6577d" stroke-width="1.4"/>
      ${spark(41, 7, 3.2, C.g)}${spark(7, 8, 2.4, C.g)}`,
    'a2-08': `<path d="M24 8v32M15 42h18" stroke="${C.brown}" stroke-width="3" stroke-linecap="round"/><path d="M8 13h32" stroke="${C.brown}" stroke-width="2.6" stroke-linecap="round"/><circle cx="24" cy="8" r="2.6" fill="${C.g}"/>
      <path d="M8 13 3 25M8 13l5 12M40 13l-5 12M40 13l5 12" stroke="${C.ink}" stroke-width="1.2" opacity=".45"/>
      <path d="M2 25h12a6 4 0 0 1-12 0zM34 25h12a6 4 0 0 1-12 0z" fill="${C.g}"/>
      <path d="M4 25v-4h3v-3l2-2 2 2v7z" fill="${C.o}"/><path d="M36 25v-6l2.5-2 2.5 2v6zM41 25v-3.5h3.5V25z" fill="${C.t}"/>`,
    'a2-09': `<path d="M18 14v-3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" fill="none" stroke="${C.brown}" stroke-width="2.8"/>
      <rect x="5" y="14" width="38" height="27" rx="5" fill="${C.brown2}"/><path d="M5 19a5 5 0 0 1 5-5h28a5 5 0 0 1 5 5v6c-6 3-31 3-38 0z" fill="${C.brown}"/>
      <rect x="20.5" y="24" width="7" height="6" rx="1.6" fill="${C.g}"/>${spark(40, 8, 3.6, C.g)}`,
    'a2-10': `<g transform="rotate(-18 24 25)"><path d="M24 4c7 0 10 8 12 16 2.6 10-4 22-12 22S9.4 30 12 20c2-8 5-16 12-16z" fill="#3f7a2e"/>
      <path d="M24 7c5.4 0 8 6.6 9.6 13.6 2 8.8-3 18.4-9.6 18.4s-11.6-9.6-9.6-18.4C16 13.6 18.6 7 24 7z" fill="#c6e17f"/><path d="M24 7c5.4 0 8 6.6 9.6 13.6 2 8.8-3 18.4-9.6 18.4" fill="#e3f0a6" opacity=".6"/>
      <circle cx="24" cy="27" r="7.4" fill="${C.brown}"/>${shine(21.5, 24.5, 2.2, 1.3)}</g>`,
    'a2-11': `<path d="M12 14a10 10 0 0 1 20 0" fill="none" stroke="${C.b}" stroke-width="3"/><rect x="7" y="13" width="30" height="30" rx="8" fill="${C.b}"/>
      <rect x="12" y="27" width="20" height="11" rx="3" fill="#2e69b5"/><path d="M12 31h20" stroke="${C.b2}" stroke-width="1.6"/><rect x="18" y="18" width="8" height="3" rx="1.5" fill="${C.b2}"/>
      <circle cx="34" cy="31" r="7.5" fill="${C.cream}" fill-opacity=".55" stroke="${C.o}" stroke-width="3.2"/><path d="M39.5 36.5 45 42" stroke="${C.o}" stroke-width="4.4" stroke-linecap="round"/>`,
    'a2-12': `<circle cx="37" cy="11" r="6" fill="${C.g}"/><path d="M3 42c7-4 14-4 21 0s14 4 21 0v4H3z" fill="${C.b2}"/><path d="M2 38c8 0 14 1.5 22 1.5S38 38 46 38v4H2z" fill="#f2dcae"/>
      <path d="M20 38c1-9 .5-17-2-24" stroke="${C.brown}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
      <path d="M18 14c-4-4-10-3.5-13 0 4-1 7 0 9 2M18 14c-1-5 2-9 7-10-2 2-3 5-3 8M18 14c5-3 11-1 13 3-4-1.5-7-1-9 0M18 14c-5 0-9 4-9 9 2-3 5-5 8-5.5" fill="${C.green}" stroke="${C.green}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="19.5" cy="16" r="1.8" fill="${C.brown}"/><circle cx="16.8" cy="16.6" r="1.6" fill="${C.brown}"/>`,
    /* ── B1 ── */
    'b1-01': `<path d="M6 34l24-20" stroke="${C.g2}" stroke-width="5" stroke-linecap="round" opacity=".55"/><path d="M10 39 30 22" stroke="${C.o2}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
      <path d="M34 6l3.3 7.2 7.9.9-5.9 5.4 1.6 7.8-6.9-3.9-6.9 3.9 1.6-7.8-5.9-5.4 7.9-.9z" fill="${C.g}"/>${shine(31, 12, 2, 1.2)}${spark(14, 12, 3, C.p)}${spark(39, 37, 2.6, C.t)}${spark(21, 43, 2, C.g)}`,
    'b1-02': `<path d="M8 22a11 10 0 0 1 11-10 9 9 0 0 1 16 1.5A9 8.5 0 0 1 41 29a8 7 0 0 1-12 5H17A9.5 8.5 0 0 1 8 22z" fill="${C.cream}"/><path d="M8 22a11 10 0 0 1 11-10 9 9 0 0 1 16 1.5A9 8.5 0 0 1 41 29a8 7 0 0 1-12 5H17A9.5 8.5 0 0 1 8 22z" fill="none" stroke="${C.b}" stroke-width="2.2"/>
      <circle cx="13" cy="39" r="3" fill="${C.b2}"/><circle cx="7" cy="44" r="2" fill="${C.b2}"/>
      ${txt(24.5, 30, '?', 17, C.o, 900)}<path d="M33 17l4 4M37 17l-4 4" stroke="${C.red}" stroke-width="2.2" stroke-linecap="round"/>`,
    'b1-03': `<rect x="17" y="5" width="14" height="9" rx="3" fill="none" stroke="${C.ink}" stroke-width="2.6" opacity=".65"/>
      <rect x="7" y="12" width="34" height="28" rx="5" fill="${C.o}"/><path d="M15 12v28M33 12v28" stroke="#c44f2c" stroke-width="2.4"/>
      <circle cx="13" cy="42.5" r="2.4" fill="${C.ink}" opacity=".7"/><circle cx="35" cy="42.5" r="2.4" fill="${C.ink}" opacity=".7"/>
      <circle cx="24" cy="21" r="4" fill="${C.t2}"/><rect x="19" y="29" width="10" height="5" rx="1.5" fill="${C.g2}" transform="rotate(-8 24 31)"/>${shine(11, 17, 2.4, 1.4)}`,
    'b1-04': `<path d="M4 12a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-9l-6 5v-5H9a5 5 0 0 1-5-5z" fill="${C.t}"/>${txt(17, 19.5, 'yo', 8.5, '#fff')}
      <circle cx="33" cy="27" r="9.5" fill="${C.g}"/><path d="M29 35h8v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" fill="${C.grey}"/><path d="M29 38h8" stroke="${C.ink}" stroke-width="1.2" opacity=".4"/>
      <path d="M30.5 30.5c.8-2 1.2-3.4 2.5-3.4s1.7 1.4 2.5 3.4" fill="none" stroke="#c98a10" stroke-width="1.6" stroke-linecap="round"/>${shine(30, 22.5, 2.6, 1.6)}
      <path d="M33 13v-3M43 21l2.6-1.5M42 31.5l2.6 1.3M23 21l-2.6-1.4" stroke="${C.g}" stroke-width="2.2" stroke-linecap="round"/>`,
    'b1-05': `<rect x="10" y="7" width="28" height="34" fill="#f6e2bd"/><path d="M10 7h28M10 41h28" stroke="${C.brown2}" stroke-width="1"/>
      <rect x="6" y="3" width="36" height="7" rx="3.5" fill="${C.brown2}"/><rect x="6" y="38" width="36" height="7" rx="3.5" fill="${C.brown2}"/><circle cx="6.5" cy="6.5" r="2.4" fill="${C.brown}"/><circle cx="41.5" cy="6.5" r="2.4" fill="${C.brown}"/><circle cx="6.5" cy="41.5" r="2.4" fill="${C.brown}"/><circle cx="41.5" cy="41.5" r="2.4" fill="${C.brown}"/>
      ${[15, 20, 25, 30].map((y, i) => `<path d="M14 ${y}h${i === 3 ? 12 : 20}" stroke="${C.ink}" stroke-width="1.6" opacity=".4" stroke-linecap="round"/>`).join('')}
      <circle cx="33" cy="31" r="4.4" fill="${C.red}"/><circle cx="33" cy="31" r="2.4" fill="none" stroke="#fff" stroke-width="1" opacity=".7"/>`,
    'b1-06': `<circle cx="15" cy="14" r="7.5" fill="${C.green}"/><circle cx="33" cy="14" r="7.5" fill="${C.green}"/><path d="M4 28c0-10 9-14 20-14s20 4 20 14-9 15-20 15S4 38 4 28z" fill="${C.green}"/>
      <circle cx="15" cy="14" r="4.6" fill="#fff"/><circle cx="33" cy="14" r="4.6" fill="#fff"/><circle cx="15.6" cy="14.6" r="2.4" fill="${C.ink}"/><circle cx="33.6" cy="14.6" r="2.4" fill="${C.ink}"/>
      <path d="M13 28q11 9 22 0" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/><ellipse cx="10" cy="29" rx="3.2" ry="2" fill="${C.p}" opacity=".7"/><ellipse cx="38" cy="29" rx="3.2" ry="2" fill="${C.p}" opacity=".7"/>
      <path d="M10 37c4 3 24 3 28 0" stroke="${C.green2}" stroke-width="2" fill="none" opacity=".7" stroke-linecap="round"/>`,
    'b1-07': `${envelope(4, 18, 30, 22, C.cream, C.o)}<rect x="4" y="18" width="30" height="22" rx="3.5" fill="none" stroke="${C.o}" stroke-width="2"/>
      <path d="M24 6a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-3v5l-5-5h-4a5 5 0 0 1-5-5z" fill="${C.t}"/>${txt(35, 13.5, '«…»', 8, '#fff')}`,
    'b1-08': `<ellipse cx="24" cy="29" rx="16" ry="11" fill="${C.green}"/><path d="M10 26c2-7 8-9.5 14-9.5s12 2.5 14 9.5c-4 3.5-24 3.5-28 0z" fill="#2f7f4b"/>
      <path d="M17 19l3 7M31 19l-3 7M24 17v9M14 24h20" stroke="${C.green2}" stroke-width="1.6" opacity=".8" stroke-linecap="round"/>
      <ellipse cx="42" cy="26" rx="5.5" ry="4.5" fill="${C.green2}"/><circle cx="44" cy="25" r="1.3" fill="${C.ink}"/>
      <path d="M12 36l-6 5M36 36l5 5M13 22l-6-4M35 21l4-5" stroke="${C.green2}" stroke-width="4" stroke-linecap="round"/>
      <path d="M8 6c5 0 8 3 8 8-5 0-8-3-8-8z" fill="${C.green2}"/><path d="M8 6l8 8" stroke="${C.green}" stroke-width="1.2"/>`,
    'b1-09': `<circle cx="24" cy="24" r="19" fill="${C.g}"/>${shine(16, 14, 5, 2.6)}
      <ellipse cx="13.5" cy="28" rx="5.5" ry="3.6" fill="${C.red}" opacity=".55"/><ellipse cx="34.5" cy="28" rx="5.5" ry="3.6" fill="${C.red}" opacity=".55"/>
      <path d="M14 21q3-3 6 0M28 21q3-3 6 0" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M20 32q4 3 8 0" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M38 9c1.5 2 1.5 3.6 0 5.2-1.5-1.6-1.5-3.2 0-5.2z" fill="${C.b2}"/>`,
    'b1-10': `<path d="M6 9a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H24l-8 6v-6h-5a5 5 0 0 1-5-5z" fill="${C.o}"/>
      <path d="M13 13h22M13 19h14" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".9"/>
      <rect x="31" y="27" width="9" height="13" rx="4.5" fill="${C.ink}" opacity=".8"/><path d="M28 35a7.5 7.5 0 0 0 15 0M35.5 42.5V46M31 46h9" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".8"/><circle cx="34" cy="31" r="1.2" fill="#fff" opacity=".6"/>`,
    /* ── B2 ── */
    'b2-01': `<path d="M6 25a9 8.5 0 0 1 9-8.5 11 11 0 0 1 20-2A8 8 0 0 1 42 25a7.5 7 0 0 1-7 9H13a7.5 7 0 0 1-7-9z" fill="${C.b2}"/>
      <path d="M27 14a8 8 0 1 0 6.5 12.5A6.4 6.4 0 1 1 27 14z" fill="${C.g}"/><circle cx="13" cy="40" r="3" fill="${C.b2}" opacity=".8"/><circle cx="7" cy="45" r="2" fill="${C.b2}" opacity=".6"/>
      ${spark(16, 24, 3, '#fff')}${spark(40, 9, 2.8, C.g)}`,
    'b2-02': `${envelope(5, 12, 38, 28, C.cream, C.p)}<rect x="5" y="12" width="38" height="28" rx="3.5" fill="none" stroke="${C.p}" stroke-width="2"/>
      <circle cx="24" cy="27" r="6.5" fill="${C.red}"/><path d="M24 30.4c-2.4-1.6-4-3-4-4.6a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 1.6-1.6 3-4 4.6z" fill="#fff" opacity=".9"/>
      ${spark(42, 7, 3, C.g)}`,
    'b2-03': `<path d="M30 2l-6 22" stroke="${C.grey}" stroke-width="3" stroke-linecap="round"/><path d="M30 2l-6 22" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".6"/>
      <path d="M13 19c0-1.6 2-2.6 11-2.6s11 1 11 2.6c3 3 5 7.5 5 12 0 7-7 12-16 12S8 38 8 31c0-4.5 2-9 5-12z" fill="${C.brown2}"/>
      <ellipse cx="24" cy="19" rx="11" ry="3" fill="#4f7d2a"/><path d="M13.5 22c-1 3-1.5 6 0 9" stroke="#fff" stroke-width="2" opacity=".3" stroke-linecap="round" fill="none"/>
      <path d="M8.5 30c5 2.4 25 2.4 31 0" stroke="${C.brown}" stroke-width="2.6" fill="none"/>${[14, 19, 24, 29, 34].map(x => `<circle cx="${x}" cy="31.7" r=".9" fill="${C.g2}"/>`).join('')}`,
    'b2-04': `<rect x="9" y="4" width="30" height="5" rx="2.5" fill="${C.brown}"/><rect x="9" y="39" width="30" height="5" rx="2.5" fill="${C.brown}"/>
      <path d="M12 9h24c0 8-8 11-8 15s8 7 8 15H12c0-8 8-11 8-15s-8-7-8-15z" fill="${C.cream}" opacity=".9"/><path d="M12 9h24c0 8-8 11-8 15s8 7 8 15H12c0-8 8-11 8-15s-8-7-8-15z" fill="none" stroke="${C.b2}" stroke-width="2"/>
      <path d="M16 15h16c-1.5 3.5-6 5-8 7.6-2-2.6-6.5-4.1-8-7.6z" fill="${C.g}"/><path d="M24 24v8" stroke="${C.g}" stroke-width="1.4" stroke-dasharray="1.4 1.6"/><path d="M15.5 38c1-4 5-6 8.5-6s7.5 2 8.5 6z" fill="${C.g}"/>`,
    'b2-05': `<path d="M2 40c4 2.6 7 2.6 11 0s7-2.6 11 0 7 2.6 11 0 7-2.6 11 0v6H2z" fill="${C.b}"/>
      <path d="M6 30h36l-5 9H11z" fill="${C.o}"/><path d="M6 30h36l-1 2H7z" fill="#fff" opacity=".35"/>
      <rect x="12" y="21" width="22" height="9" rx="1.5" fill="${C.cream}"/>${[15, 20, 25, 30].map(x => `<circle cx="${x + 1}" cy="25.5" r="1.4" fill="${C.b}"/>`).join('')}
      <rect x="19" y="12" width="7" height="9" rx="1" fill="${C.t}"/><rect x="19" y="12" width="7" height="2.6" fill="${C.ink}" opacity=".55"/>
      <circle cx="28" cy="8" r="2.6" fill="${C.grey}" opacity=".8"/><circle cx="32" cy="5" r="2" fill="${C.grey}" opacity=".6"/>`,
    'b2-06': `<g transform="rotate(-24 15 22)"><rect x="13" y="24" width="4.4" height="20" rx="2.2" fill="${C.brown}"/><ellipse cx="15.2" cy="17" rx="9" ry="10.5" fill="${C.o}"/>
      <path d="M6.5 15h17.4M6.4 19.6h17.6" stroke="${C.g}" stroke-width="2.2"/>${shine(11.5, 12, 2.4, 1.4)}</g>
      <g transform="rotate(22 33 22)"><rect x="30.8" y="24" width="4.4" height="20" rx="2.2" fill="${C.brown}"/><ellipse cx="33" cy="17" rx="9" ry="10.5" fill="${C.t}"/>
      <path d="M24.2 15h17.6M24.2 19.6h17.6" stroke="${C.p2}" stroke-width="2.2"/>${shine(29.5, 12, 2.4, 1.4)}</g>
      <path d="M22 4l2 3 2-3" stroke="${C.g}" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'b2-07': `<rect x="9" y="5" width="30" height="24" rx="2" fill="#fff"/><rect x="9" y="5" width="30" height="24" rx="2" fill="none" stroke="${C.b2}" stroke-width="1.4"/>
      ${txt(24, 13, 'Estimada', 6.4, C.b, 700)}<path d="M14 17h20M14 21h16" stroke="${C.ink}" stroke-width="1.4" opacity=".35" stroke-linecap="round"/>
      <path d="M5 22l19 13 19-13v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" fill="${C.b}"/><path d="M5 43l15-11M43 43 28 32" stroke="#2e69b5" stroke-width="1.8"/>
      <circle cx="24" cy="34" r="5" fill="${C.g}"/><path d="M24 31v6M21 34h6" stroke="#c98a10" stroke-width="1.4" opacity=".8"/>`,
    'b2-08': `<path d="M2 42 17 16l8 12 6-8 15 22z" fill="#6f8fa8"/><path d="M17 16l5.5 8.5-3-1.5-2.5 2.6-2.4-2.4-3 1.2z" fill="#fff"/><path d="M31 20l4.6 6.6-2.6-1-2 2-1.6-1.6z" fill="#fff"/>
      <path d="M2 42 17 16l8 12-4 14z" fill="#fff" opacity=".1"/>
      <path d="M24 12a6 5.5 0 0 1 6-5.5 7.5 7.5 0 0 1 13 1.5A5 5 0 0 1 42 17H27a4.5 4.5 0 0 1-3-5z" fill="${C.cream}"/><path d="M24 12a6 5.5 0 0 1 6-5.5 7.5 7.5 0 0 1 13 1.5A5 5 0 0 1 42 17H27a4.5 4.5 0 0 1-3-5z" fill="none" stroke="${C.b2}" stroke-width="1.6"/>
      <path d="M30 20l-1 3M36 20l-1 3" stroke="${C.b}" stroke-width="2" stroke-linecap="round"/>
      <path d="M8 42l3-4 2.4 2.4L17 34l4 8z" fill="${C.green}"/><path d="M2 42h44" stroke="${C.green}" stroke-width="3" stroke-linecap="round"/>`
  };

  function svg(id) { const b = ART[id]; return b ? `<svg class="ic-art" viewBox="0 0 48 48" aria-hidden="true">${b}</svg>` : ''; }
  /* <span> met de tekening van de unit; zonder tekening de emoji (tekst), zoals voorheen. */
  function unit(u, cls) {
    const s = document.createElement('span'); s.className = 'ic u-art ' + (cls || '');
    const a = u && svg(u.id); if (a) { s.innerHTML = a; s.setAttribute('role', 'img'); s.setAttribute('aria-label', u.title || ''); } else s.textContent = (u && u.icon) || '';
    return s;
  }
  if (!S.Icons) S.Icons = {};
  S.Icons.unit = unit;
  S.Icons.unitSvg = svg;
  S.Icons.UNIT_ART = ART;
})(window.SPT);
