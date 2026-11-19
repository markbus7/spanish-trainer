/* De vaste cast: Latijns-Amerikaanse dieren die in de dialogen praten, in dezelfde tekenstijl als Profe Lupe.
   Elk personage komt uit een eigen land/stad, heeft een eigen karakter en (later) een eigen vaste stem.
   S.Cast.forSpeaker(naam, plaats) zoekt bij een dialoogspreker het personage; S.Cast.avatar(id, maat) tekent het.
   Mond: .m-closed en .m-open (zoals Lupe); .cast.talking laat de mond bewegen. */
(function (S) {
  'use strict';
  let uid = 0;

  /* ---------- gedeelde onderdelen ---------- */
  // twee wimpertjes aan de buitenkant van het oog
  function lashes(x, y, r, ry, col) {
    const sd = x < 60 ? -1 : 1, f = v => +v.toFixed(2);
    const a = [x + sd * r * .62, y - ry * .78], b = [x + sd * r * .95, y - ry * .3];
    return `<path d="M${f(a[0])} ${f(a[1])}l${f(sd * 2.4)} -2.6M${f(b[0])} ${f(b[1])}l${f(sd * 3)} -1.4" stroke="${col}" stroke-width="1.6" stroke-linecap="round" fill="none"/>`;
  }
  // grote glanzende ogen zoals Lupe; o.ring = gekleurde ring eromheen, o.lid = slaperige oogleden
  function eyes(o = {}) {
    const y = o.y || 64, dx = o.dx || 18, r = o.r || 7.2, ry = +(r * 1.06).toFixed(2), col = o.col || '#2a1a22', iris = o.iris || '#5a2c42';
    const one = x => `${o.ring ? `<ellipse cx="${x}" cy="${y}" rx="${r + 3.2}" ry="${ry + 3.2}" fill="${o.ring}"/>` : ''}
      <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${ry}" fill="${col}"/>
      <ellipse cx="${x}" cy="${+(y + r * .43).toFixed(2)}" rx="${+(r * .62).toFixed(2)}" ry="${+(r * .4).toFixed(2)}" fill="${iris}" opacity=".7"/>
      <circle cx="${+(x + r * .35).toFixed(2)}" cy="${+(y - r * .4).toFixed(2)}" r="${+(r * .38).toFixed(2)}" fill="#fff"/>
      <circle cx="${+(x - r * .32).toFixed(2)}" cy="${+(y + r * .4).toFixed(2)}" r="${+(r * .16).toFixed(2)}" fill="#fff" opacity=".8"/>
      ${o.lid ? `<path d="M${x - r - .8} ${y - r * .1}Q${x} ${y - r * .5} ${x + r + .8} ${y - r * .1}A${r + .8} ${ry + .8} 0 0 0 ${x - r - .8} ${y - r * .1}Z" fill="${o.lid}"/><path d="M${x - r - .6} ${y - r * .1}Q${x} ${y - r * .5} ${x + r + .6} ${y - r * .1}" fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round"/>` : ''}
      ${o.lash ? lashes(x, y, r, ry, col) : ''}`;
    return `<g class="c-eyes">${one(60 - dx)}${one(60 + dx)}</g>`;
  }
  const blush = (y = 76, dx = 29.5, col = '#f0789f', op = .5) => `<ellipse cx="${60 - dx}" cy="${y}" rx="6.6" ry="4" fill="${col}" opacity="${op}"/><ellipse cx="${60 + dx}" cy="${y}" rx="6.6" ry="4" fill="${col}" opacity="${op}"/>`;
  // mondje: dicht = glimlach, open = rond mondje met tongetje
  function mouth(y = 81, o = {}) {
    const w = o.w || 7, line = o.line || '#7a3b2e', inside = o.inside || '#7a2e3c', tongue = o.tongue || '#f37fa6';
    return `<g class="m-closed" fill="none" stroke="${line}" stroke-linecap="round"><path d="M${60 - w} ${y}Q60 ${y + w * .85} ${60 + w} ${y}" stroke-width="2.2"/></g>
      <g class="m-open"><path d="M${60 - w} ${y - .4}Q60 ${y + 1} ${60 + w} ${y - .4}Q${60 + w * .9} ${y + w * 1.35} 60 ${y + w * 1.35}Q${60 - w * .9} ${y + w * 1.35} ${60 - w} ${y - .4}Z" fill="${inside}"/><path d="M${60 - w * .58} ${y + w * 1.08}Q60 ${y + w * .6} ${60 + w * .58} ${y + w * 1.08}Q${60 + w * .3} ${y + w * 1.33} 60 ${y + w * 1.33}Q${60 - w * .3} ${y + w * 1.33} ${60 - w * .58} ${y + w * 1.08}Z" fill="${tongue}"/></g>`;
  }
  const shine = (x = 43, y = 42, rx = 10, ry = 4.5, a = -22) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${a} ${x} ${y})" fill="#fff" opacity=".35"/>`;
  // bloemetje (zoals op Lupes jurk)
  const flower = (x, y, col, r = 1.6, mid = '#ffe08a') => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(d => `<circle cx="${(r * 1.15 * Math.cos((d - 90) * Math.PI / 180)).toFixed(2)}" cy="${(r * 1.15 * Math.sin((d - 90) * Math.PI / 180)).toFixed(2)}" r="${r}" fill="${col}"/>`).join('')}<circle r="${(r * .75).toFixed(2)}" fill="${mid}"/></g>`;
  const SH = 'M17 121C19 101 36 92 60 92S101 101 103 121Z'; // schouders
  const whisk = (y, col = '#7a5a40') => `<g stroke="${col}" stroke-width="1" stroke-linecap="round" opacity=".55" fill="none"><path d="M40 ${y}l-13-2.5M40 ${y + 3.5}l-12.5 2.5M80 ${y}l13-2.5M80 ${y + 3.5}l12.5 2.5"/></g>`;
  const hib = (x, y, s = 1, col = '#e8344e', mid = '#ffd25e') => `<g transform="translate(${x} ${y}) scale(${s})">${[0, 72, 144, 216, 288].map(d => `<ellipse cx="0" cy="-5.2" rx="4.2" ry="5.6" transform="rotate(${d})" fill="${col}"/>`).join('')}<circle r="2.4" fill="#b51d3a"/><path d="M0 0l3.5-6" stroke="${mid}" stroke-width="1.1" stroke-linecap="round"/><circle cx="3.6" cy="-6.2" r="1.1" fill="${mid}"/></g>`;

  /* ---------- de personages ----------
     draw(u, id) geeft de tekening; u(k) = url van kleurverloop k. Kleurverlopen: f = vacht, o = kleding (+ extra in defs). */
  const fur = (a, b, c) => `<radialGradient id="ID-f" cx=".38" cy=".3" r=".85"><stop offset="0" stop-color="${a}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${c}"/></radialGradient>`;
  const lin = (k, a, b) => `<linearGradient id="ID-${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;

  const CAST = [
    {
      id: 'mateo', name: 'Mateo', animal: 'oso de anteojos', nl: 'brilbeer', city: 'Bogotá', cc: 'CO', age: 28, female: false,
      trait: 'Warm en behulpzaam. Familieman die altijd plannen maakt en je overal mee naartoe neemt.',
      color: '#8a5a3c',
      defs: fur('#7a5e4c', '#4d382c', '#2e211a') + lin('o', '#8e8a80', '#5f5b53'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M17 121C19 101 36 92 60 92S101 101 103 121" fill="none"/>
  <g stroke-linecap="round" fill="none"><path d="M22 110Q60 124 98 110" stroke="#c9483b" stroke-width="3.2"/><path d="M20 116Q60 130 100 116" stroke="#f2b134" stroke-width="2.2"/><path d="M24 104.5Q60 118 96 104.5" stroke="#1f4f9e" stroke-width="1.6"/></g>
  <path d="M46 93L60 108L74 93Z" fill="#3b2a20"/><path d="M48.5 93L60 105.5 71.5 93" fill="none" stroke="#efe6d6" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="29" cy="36" r="12" fill="${u('f')}"/><circle cx="91" cy="36" r="12" fill="${u('f')}"/><circle cx="29.5" cy="37" r="6.5" fill="#a07a5f"/><circle cx="90.5" cy="37" r="6.5" fill="#a07a5f"/>
  <path d="M60 30C88 30 102 46 102 66C102 88 85 100 60 100C35 100 18 88 18 66C18 46 32 30 60 30Z" fill="${u('f')}"/>
  ${shine(42, 41)}
  <path d="M34 52C40 47 50 49 53 56C55 62 53 72 47 77C40 81 32 77 30 70C28 63 29 56 34 52Z" fill="#f2dcb0"/>
  <path d="M86 52C80 47 70 49 67 56C65 62 67 72 73 77C80 81 88 77 90 70C92 63 91 56 86 52Z" fill="#f2dcb0"/>
  <path d="M55 52C57 46 63 46 65 52" fill="none" stroke="#f2dcb0" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="60" cy="83" rx="17" ry="12.5" fill="#f2dcb0"/><ellipse cx="60" cy="81" rx="12" ry="7" fill="#fff6e4" opacity=".6"/>
  ${eyes({ dx: 18.5, y: 64, r: 6.8, col: '#24160f', iris: '#5c3a26' })}
  ${blush(79, 31, '#e0708e', .45)}
  <path d="M54.5 75.5Q60 73 65.5 75.5Q65 80 60 81Q55 80 54.5 75.5Z" fill="#2b1a12"/><ellipse cx="58.3" cy="75.8" rx="1.8" ry=".9" fill="#fff" opacity=".5"/>
  <path d="M60 81V83.5" stroke="#5a3a28" stroke-width="1.4" stroke-linecap="round"/>
  ${mouth(85, { w: 6, line: '#5a3a28', inside: '#6b2834' })}`
    },
    {
      id: 'sofia', name: 'Sofía', animal: 'ocelote', nl: 'ocelot', city: 'Ciudad de México', cc: 'MX', age: 22, female: true,
      trait: 'Nieuwsgierig en vrolijk. Studeert architectuur en tekent overal gebouwen in haar schetsboek.',
      color: '#e29a3a',
      defs: fur('#ffe6b4', '#f6c06a', '#d98f3a') + lin('o', '#2fa79a', '#1d7a70'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M40 94Q60 110 80 94" fill="none" stroke="#fff4e6" stroke-width="5" stroke-linecap="round"/>
  <path d="M40 94Q60 110 80 94" fill="none" stroke="#f0789f" stroke-width="1.4" stroke-dasharray="1.4 2.2" stroke-linecap="round"/>
  ${flower(33, 108, '#f0789f', 1.9)}${flower(87, 108, '#f7a531', 1.9)}${flower(25, 117, '#fff', 1.6)}${flower(95, 117, '#c28be8', 1.6)}
  <path d="M27 50C22 36 22 22 29 14C38 17 47 26 51 34Z" fill="${u('f')}"/><path d="M93 50C98 36 98 22 91 14C82 17 73 26 69 34Z" fill="${u('f')}"/>
  <path d="M30 44C27 34 27 25 31 20C37 23 42 28 45 34Z" fill="#f7b6c6"/><path d="M90 44C93 34 93 25 89 20C83 23 78 28 75 34Z" fill="#f7b6c6"/>
  <path d="M29 15C38 17 47 26 51 34" fill="none" stroke="#3d2614" stroke-width="2.6" stroke-linecap="round"/><path d="M91 15C82 17 73 26 69 34" fill="none" stroke="#3d2614" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M60 30C88 30 103 47 103 67C103 89 85 100 60 100C35 100 17 89 17 67C17 47 32 30 60 30Z" fill="${u('f')}"/>
  ${shine(42, 41)}
  <g fill="none" stroke="#6b3d1c" stroke-linecap="round" opacity=".8"><path d="M60 33V44M53 34.5 54.5 43.5M67 34.5 65.5 43.5" stroke-width="2.4"/></g>
  <g fill="none" stroke="#6b3d1c" stroke-width="1.8" opacity=".75"><ellipse cx="33" cy="48" rx="3.6" ry="2.6" transform="rotate(-30 33 48)"/><ellipse cx="87" cy="48" rx="3.6" ry="2.6" transform="rotate(30 87 48)"/><ellipse cx="24" cy="62" rx="2.8" ry="3.6"/><ellipse cx="96" cy="62" rx="2.8" ry="3.6"/></g>
  <g fill="#6b3d1c" opacity=".7"><circle cx="42" cy="44" r="1.5"/><circle cx="78" cy="44" r="1.5"/><circle cx="26" cy="74" r="1.4"/><circle cx="94" cy="74" r="1.4"/></g>
  <path d="M30 70Q36 69 40 72M90 70Q84 69 80 72" fill="none" stroke="#6b3d1c" stroke-width="2" stroke-linecap="round" opacity=".7"/>
  <ellipse cx="52.5" cy="84" rx="9.5" ry="7.4" fill="#fff8ec"/><ellipse cx="67.5" cy="84" rx="9.5" ry="7.4" fill="#fff8ec"/><ellipse cx="60" cy="89" rx="8" ry="5" fill="#fff8ec"/>
  ${whisk(83, '#8a6440')}
  ${eyes({ dx: 18, y: 64, r: 7.2, col: '#2a1a12', iris: '#7a4a1a', lash: true })}
  <g fill="none" stroke="#7a3d2a" stroke-width="2"><circle cx="42" cy="64" r="11.5"/><circle cx="78" cy="64" r="11.5"/><path d="M53.5 63Q60 59.5 66.5 63"/></g>
  <circle cx="42" cy="64" r="11.5" fill="#fff" opacity=".08"/><circle cx="78" cy="64" r="11.5" fill="#fff" opacity=".08"/>
  ${blush(78, 30, '#f0789f', .45)}
  <path d="M55.5 77Q60 75.5 64.5 77Q63 81 60 81.5Q57 81 55.5 77Z" fill="#e96b8f"/>
  <path d="M60 81.5V83.5" stroke="#8a4a3a" stroke-width="1.2" stroke-linecap="round"/>
  ${mouth(84.5, { w: 5.5, line: '#8a4a3a' })}`
    },
    {
      id: 'diego', name: 'Diego', animal: 'coyote', nl: 'coyote', city: 'Monterrey', cc: 'MX', age: 30, female: false,
      trait: 'Grappenmaker uit het noorden. Altijd in voor carne asada, voetbal en een plan met zijn neven.',
      color: '#c4473a',
      defs: fur('#f0dcb8', '#d1a874', '#a77746') + lin('o', '#3f6fb5', '#284e86'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <g stroke="#c4473a" stroke-width="2.6" opacity=".8"><path d="M30 99V121M44 94V121M76 94V121M90 99V121"/></g>
  <g stroke="#f2b134" stroke-width="1.1" opacity=".8"><path d="M20 108H100M18 116H102"/></g>
  <path d="M38 92Q60 112 82 92L74 104Q60 116 46 104Z" fill="#c9283b"/>
  <g fill="#fff" opacity=".9"><circle cx="48" cy="101" r="1.1"/><circle cx="55" cy="105" r="1.1"/><circle cx="62" cy="106" r="1.1"/><circle cx="69" cy="104" r="1.1"/><circle cx="74" cy="99" r="1.1"/><circle cx="43" cy="96" r="1"/></g>
  <path d="M56 106L60 116L64 106Z" fill="#a81f30"/>
  <path d="M26 54C22 40 21 22 25 8C36 15 46 28 52 36Z" fill="${u('f')}"/><path d="M94 54C98 40 99 22 95 8C84 15 74 28 68 36Z" fill="${u('f')}"/>
  <path d="M29 47C26 37 26 24 28 15C35 21 41 29 45 35Z" fill="#6e4b2e"/><path d="M91 47C94 37 94 24 92 15C85 21 79 29 75 35Z" fill="#6e4b2e"/>
  <path d="M30 44C28 36 28 26 30 19C34 24 38 30 41 35Z" fill="#f2d7b6"/><path d="M90 44C92 36 92 26 90 19C86 24 82 30 79 35Z" fill="#f2d7b6"/>
  <path d="M60 30C88 30 102 47 102 67C102 88 85 101 60 101C35 101 18 88 18 67C18 47 32 30 60 30Z" fill="${u('f')}"/>
  ${shine(42, 41)}
  <path d="M60 31C55 40 54 50 56 58H64C66 50 65 40 60 31Z" fill="#9a6a3c" opacity=".35"/>
  <path d="M30 60C36 54 44 54 48 58C48 66 42 70 36 70C31 69 28 65 30 60Z" fill="#f6e6cc" opacity=".55"/><path d="M90 60C84 54 76 54 72 58C72 66 78 70 84 70C89 69 92 65 90 60Z" fill="#f6e6cc" opacity=".55"/>
  <path d="M60 68C73 68 82 77 81 86C80 95 71 100 60 100C49 100 40 95 39 86C38 77 47 68 60 68Z" fill="#fbefdc"/>
  ${eyes({ dx: 19, y: 61, r: 6.8, col: '#2a1a12', iris: '#7a4a1a' })}
  <path d="M34 52.5Q41 49 48 52M86 52.5Q79 49 72 52" fill="none" stroke="#6e4b2e" stroke-width="2.2" stroke-linecap="round"/>
  ${blush(78, 30, '#e0708e', .4)}
  <path d="M53 75Q60 71.5 67 75Q66.5 80.5 60 81.5Q53.5 80.5 53 75Z" fill="#2a1a12"/><ellipse cx="57.6" cy="75.2" rx="2" ry="1" fill="#fff" opacity=".45"/>
  <path d="M60 81.5V84" stroke="#6e4b2e" stroke-width="1.3" stroke-linecap="round"/>
  ${mouth(85.5, { w: 7.5, line: '#6e4b2e' })}`
    },
    {
      id: 'juliana', name: 'Juliana', animal: 'tucán', nl: 'toekan', city: 'Medellín', cc: 'CO', age: 24, female: true,
      trait: 'Paisa die honderduit praat. Kijkt elke serie, kent alle reggaeton en gaat elk jaar naar de Feria de las Flores.',
      color: '#f28c1b',
      defs: fur('#5a5a68', '#2f2f3a', '#1b1b24') + lin('o', '#ffd23f', '#f2a81d') + `<linearGradient id="ID-b" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffcf3a"/><stop offset=".6" stop-color="#f7941d"/><stop offset="1" stop-color="#e2452f"/></linearGradient>`,
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M17 121C18 113 20 107 23 102H97C100 107 102 113 103 121Z" fill="#1f4f9e" opacity=".9"/><path d="M19 114H101V121H17Z" fill="#c9283b"/>
  ${flower(28, 105, '#fff', 1.9)}${flower(43, 108, '#f0789f', 1.9)}${flower(60, 109, '#ffd23f', 1.9, '#e2452f')}${flower(77, 108, '#c28be8', 1.9)}${flower(92, 105, '#fff', 1.9)}
  <path d="M60 28C68 22 74 22 78 26C72 27 68 30 66 33Z" fill="#2f2f3a"/><path d="M57 29C52 21 46 20 42 23C48 25 51 29 52 32Z" fill="#2f2f3a"/>
  <path d="M60 30C88 30 102 47 102 67C102 88 85 101 60 101C35 101 18 88 18 67C18 47 32 30 60 30Z" fill="${u('f')}"/>
  ${shine(42, 41, 10, 4.5, -22)}
  <path d="M28 80C30 92 44 100 60 100C76 100 90 92 92 80C84 88 72 90 60 90C48 90 36 88 28 80Z" fill="#fff6dc"/>
  <path d="M30 82C40 92 52 94 60 94C68 94 80 92 90 82C86 92 74 100 60 100C46 100 34 92 30 82Z" fill="#ffe08a" opacity=".85"/>
  ${eyes({ dx: 21, y: 60, r: 6.6, col: '#151018', iris: '#3a2a3e', ring: '#5ec2e8', lash: true })}
  <g class="lupe-flower" transform="translate(84 33)"><ellipse cx="-8" cy="6" rx="5" ry="2.4" transform="rotate(35 -8 6)" fill="#3a9d5d"/>${flower(0, 0, '#e8344e', 3.4, '#ffd25e')}${flower(-11, 1, '#ffd23f', 2.4, '#f28c1b')}</g>
  ${blush(76, 34, '#f0789f', .5)}
  <g class="m-closed"><path d="M47 70C55 64 66 64 76 66C92 69 104 76 109 86C104 87 98 86 92 84C82 81 70 79 58 80C50 80 46 76 47 70Z" fill="${u('b')}"/>
    <path d="M58 80C70 79 84 81 98 86C93 89 84 90 74 89C64 88 56 86 52 82Z" fill="#f28c1b"/><path d="M52 82C56 86 64 88 74 89" fill="none" stroke="#a6421f" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M100 81Q106 83 109 86Q104 87 98 86Z" fill="#1b1b24"/><path d="M58 69Q70 66 84 70" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".5"/></g>
  <g class="m-open"><path d="M47 69C55 63 66 63 76 65C92 68 104 74 109 83C104 84 98 83 92 81C82 78 70 77 58 78C50 78 46 75 47 69Z" fill="${u('b')}"/>
    <path d="M100 79Q106 81 109 83Q104 84 98 83Z" fill="#1b1b24"/>
    <path d="M56 80C66 80 76 83 86 89L92 93C82 96 70 95 62 91C56 88 53 84 56 80Z" fill="#7a2e3c"/><path d="M60 85C66 86 72 88 76 90C70 92 64 91 60 89Z" fill="#f37fa6"/>
    <path d="M56 81C68 82 80 86 92 93C86 96 76 96 66 93C58 90 54 86 56 81Z" fill="#f28c1b" transform="translate(0 2)"/></g>`
    },
    {
      id: 'lucia', name: 'Lucía', animal: 'alpaca', nl: 'alpaca', city: 'Lima', cc: 'PE', age: 26, female: true,
      trait: 'Geeft de leukste feestjes van Lima, maar verliest om de haverklap haar telefoon.',
      color: '#d14f8a',
      defs: fur('#fffaf0', '#f6e8d2', '#dcc4a0') + lin('o', '#e84a7f', '#b8306a'),
      draw: u => {
        const zig = Array.from({ length: 11 }, (_, i) => `${25 + i * 7} ${i % 2 ? 108 : 104}`).join(' L');
        return `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M${zig}" fill="none" stroke="#ffd23f" stroke-width="2" stroke-linejoin="round"/>
  <path d="M18 112H102" stroke="#2fa79a" stroke-width="3"/><path d="M17.5 117H102.5" stroke="#f7941d" stroke-width="2"/>
  <g fill="#fff">${[30, 45, 60, 75, 90].map(x => `<path d="M${x} 97l2.2 2.2-2.2 2.2-2.2-2.2Z"/>`).join('')}</g>
  <path d="M28 56C22 44 20 26 26 14C34 20 40 34 42 48Z" fill="${u('f')}"/><path d="M92 56C98 44 100 26 94 14C86 20 80 34 78 48Z" fill="${u('f')}"/>
  <path d="M30 48C27 38 26 27 28 20C33 26 36 36 37 44Z" fill="#c9a98a" opacity=".6"/><path d="M90 48C93 38 94 27 92 20C87 26 84 36 83 44Z" fill="#c9a98a" opacity=".6"/>
  <g transform="translate(26 13)"><path d="M0 0V8" stroke="#e84a7f" stroke-width="1.6"/><circle cy="10" r="4.2" fill="#e84a7f"/><circle cx="-4" cy="14" r="3" fill="#f7941d"/><circle cx="3" cy="15" r="3" fill="#2fa79a"/></g>
  <g transform="translate(94 13)"><path d="M0 0V8" stroke="#e84a7f" stroke-width="1.6"/><circle cy="10" r="4.2" fill="#e84a7f"/><circle cx="4" cy="14" r="3" fill="#f7941d"/><circle cx="-3" cy="15" r="3" fill="#2fa79a"/></g>
  <path d="M60 34C84 34 98 49 98 68C98 89 82 101 60 101C38 101 22 89 22 68C22 49 36 34 60 34Z" fill="${u('f')}"/>
  <g fill="${u('f')}"><circle cx="40" cy="38" r="10"/><circle cx="52" cy="30" r="11"/><circle cx="66" cy="29" r="11"/><circle cx="79" cy="36" r="10"/><circle cx="60" cy="40" r="11"/><circle cx="32" cy="47" r="7"/><circle cx="88" cy="46" r="7"/></g>
  <g fill="none" stroke="#e3cfae" stroke-width="1.1" opacity=".9"><path d="M45 31a5 5 0 0 1 8-3M58 24a5 5 0 0 1 8 0M71 27a5 5 0 0 1 7 4M36 40a5 5 0 0 1 5-5"/></g>
  ${shine(46, 30, 7, 3.5, -20)}
  <ellipse cx="60" cy="84" rx="16" ry="13" fill="#fff6e8"/><ellipse cx="60" cy="82" rx="11" ry="7" fill="#fff" opacity=".6"/>
  ${eyes({ dx: 19, y: 63, r: 7, col: '#2a1a12', iris: '#6a3a22', lash: true })}
  ${blush(76, 30, '#f0789f', .55)}
  <path d="M55 77.5Q57.5 76 60 79Q62.5 76 65 77.5" fill="none" stroke="#5a3a2a" stroke-width="2" stroke-linecap="round"/>
  <path d="M60 79V82" stroke="#5a3a2a" stroke-width="1.4" stroke-linecap="round"/>
  ${mouth(84, { w: 5.5, line: '#8a4a3a' })}`;
      }
    },
    {
      id: 'rosa', name: 'Rosa', animal: 'gallito de las rocas', nl: 'rotshaan (nationale vogel van Peru)', city: 'Lima', cc: 'PE', age: 34, female: true,
      trait: 'Regelt alles: vluchten, een neef met een auto, een tante met een bordje. Snel, warm en altijd druk.',
      color: '#e8590f',
      defs: fur('#ffb35a', '#ff7f1f', '#e2530c') + lin('o', '#b07ad8', '#7e4fb0') + `<linearGradient id="ID-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff9a3a"/><stop offset="1" stop-color="#f06a10"/></linearGradient>`,
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M42 93Q60 106 78 93" fill="none" stroke="#fff4e6" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 106Q60 120 100 106" fill="none" stroke="#ffd23f" stroke-width="1.8" stroke-dasharray="2.4 2"/>
  ${flower(30, 112, '#ffd23f', 1.7, '#e2452f')}${flower(45, 115, '#fff', 1.7)}${flower(75, 115, '#f0789f', 1.7)}${flower(90, 112, '#ffd23f', 1.7, '#e2452f')}
  <path d="M60 33C88 33 102 49 102 68C102 89 85 100 60 100C35 100 18 89 18 68C18 49 32 33 60 33Z" fill="${u('f')}"/>
  <path d="M36 44C34 22 46 6 60 4C74 6 86 22 84 44C78 38 70 35 60 35C50 35 42 38 36 44Z" fill="${u('c')}"/>
  <path d="M36 44C34 22 46 6 60 4C74 6 86 22 84 44" fill="none" stroke="#c94a08" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="none" stroke="#ffd09a" stroke-width="1.2" stroke-linecap="round" opacity=".7"><path d="M60 10V32M50 14 54 32M70 14 66 32M43 22 49 35M77 22 71 35"/></g>
  ${shine(44, 46)}
  ${eyes({ dx: 18, y: 64, r: 7.2, col: '#1a1018', iris: '#40243a', ring: '#ffd23f', lash: true })}
  ${blush(79, 30, '#e8344e', .4)}
  <g class="m-closed"><path d="M53 74Q60 71 67 74L60 85Z" fill="#ffd23f"/><path d="M53 74Q60 71 67 74" fill="none" stroke="#e8a21a" stroke-width="1"/><path d="M56 79.5 60 79 64 79.5" fill="none" stroke="#c98a10" stroke-width="1" stroke-linecap="round"/><ellipse cx="57.5" cy="74.2" rx="1.6" ry=".8" fill="#fff" opacity=".6"/></g>
  <g class="m-open"><path d="M53 73Q60 70 67 73L60 80Z" fill="#ffd23f"/><path d="M55 80.5H65L60 88Z" fill="#f2b31a"/><path d="M56.5 79.2H63.5L60 82Z" fill="#7a2e3c"/></g>
  ${hib(30, 44, .75, '#e8344e')}`
    },
    {
      id: 'catalina', name: 'Catalina', animal: 'pudú', nl: 'poedoe (minihert)', city: 'Santiago de Chile', cc: 'CL', age: 27, female: true,
      trait: 'Ambitieus en eerlijk. Twijfelt hardop over grote keuzes: blijven of vertrekken, die beurs wel of niet.',
      color: '#b5653b',
      defs: fur('#e2a87a', '#b9784a', '#8a5130') + lin('o', '#e9b44c', '#c98e2a'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <g stroke="#a06a1a" stroke-width="1" opacity=".5"><path d="M40 100V121M80 100V121"/></g>
  <path d="M30 98C42 106 78 106 90 98L92 108C78 116 42 116 28 108Z" fill="#c9283b"/>
  <g fill="#fff">${[34, 46, 58, 70, 82].map(x => `<rect x="${x}" y="104" width="5" height="2.4" rx="1.2"/>`).join('')}</g>
  <path d="M70 108L78 121H66Z" fill="#c9283b"/><path d="M70 110L74 121" stroke="#1f4f9e" stroke-width="2"/>
  <path d="M33 64C18 64 6 56 4 46C14 44 28 48 38 56Z" fill="${u('f')}"/><path d="M87 64C102 64 114 56 116 46C106 44 92 48 82 56Z" fill="${u('f')}"/>
  <path d="M30 59C20 58 12 53 10 48C18 48 27 51 33 56Z" fill="#f2c7b6"/><path d="M90 59C100 58 108 53 110 48C102 48 93 51 87 56Z" fill="#f2c7b6"/>
  <path d="M60 32C86 32 99 48 99 68C99 89 83 101 60 101C37 101 21 89 21 68C21 48 34 32 60 32Z" fill="${u('f')}"/>
  ${shine(43, 42)}
  <path d="M28 46C30 28 46 18 60 18C74 18 90 28 92 46C82 40 70 38 60 38C50 38 38 40 28 46Z" fill="#2f6fb5"/>
  <path d="M28 46C38 40 50 38 60 38C70 38 82 40 92 46L93 51C82 45 70 43 60 43C50 43 38 45 27 51Z" fill="#fff4e6"/>
  <g fill="none" stroke="#fff" stroke-width="1.2" opacity=".55"><path d="M40 30l4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4"/></g>
  <circle cx="60" cy="16" r="6" fill="#c9283b"/><circle cx="58" cy="14" r="2" fill="#fff" opacity=".35"/>
  <path d="M60 70C72 70 79 78 78 86C77 95 69 100 60 100C51 100 43 95 42 86C41 78 48 70 60 70Z" fill="#f5dcc4"/>
  ${eyes({ dx: 18, y: 63, r: 7.6, col: '#21140e', iris: '#5c3220', lash: true })}
  ${blush(77, 29, '#f0789f', .5)}
  <ellipse cx="60" cy="78" rx="6" ry="4.2" fill="#2a1a12"/><ellipse cx="58" cy="76.8" rx="1.8" ry=".9" fill="#fff" opacity=".45"/>
  <path d="M60 82V84" stroke="#7a4a30" stroke-width="1.3" stroke-linecap="round"/>
  ${mouth(85, { w: 5.5, line: '#7a4a30' })}`
    },
    {
      id: 'facundo', name: 'Facundo', animal: 'carpincho', nl: 'capibara', city: 'Montevideo', cc: 'UY', age: 35, female: false,
      trait: 'Tranquilo. Wandelt met zijn mate over de rambla en heeft over alles een rustige mening.',
      color: '#5aa0d8',
      defs: fur('#c9a47c', '#a07a54', '#77573a') + lin('o', '#7ec0ee', '#4f95cf'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <g fill="none" stroke="#fff" stroke-width="1.2" opacity=".45">${[100, 106, 112, 118].map(y => `<path d="M20 ${y}Q60 ${y + 8} 100 ${y}" stroke-dasharray="2.5 2.5"/>`).join('')}</g>
  <path d="M44 93Q60 102 76 93L74 98Q60 107 46 98Z" fill="#fff" opacity=".9"/>
  <g transform="translate(92 101)"><path d="M-10 0C-10-6-6-9 0-9S10-6 10 0C10 11 5 18 0 18S-10 11-10 0Z" fill="#8a5a2c"/><path d="M-10-1H10" stroke="#d9b45a" stroke-width="2.4"/><path d="M-7-6C-4-8 4-8 7-6" fill="#4f8a2c" stroke="#3a6a1f" stroke-width="1"/><path d="M3-7 9-24" stroke="#c8ccd2" stroke-width="2" stroke-linecap="round"/><path d="M3-7 9-24" stroke="#fff" stroke-width=".6" opacity=".7"/><path d="M-6 6Q0 9 6 6" fill="none" stroke="#5a3a1a" stroke-width="1" opacity=".6"/></g>
  <circle cx="30" cy="36" r="7.5" fill="#8a6644"/><circle cx="90" cy="36" r="7.5" fill="#8a6644"/><circle cx="30.5" cy="37" r="3.8" fill="#5c4028"/><circle cx="89.5" cy="37" r="3.8" fill="#5c4028"/>
  <path d="M24 46C24 34 40 28 60 28C80 28 96 34 96 46C98 60 99 76 96 86C92 98 78 101 60 101C42 101 28 98 24 86C21 76 22 60 24 46Z" fill="${u('f')}"/>
  ${shine(42, 39)}
  <path d="M28 36C36 24 84 24 92 36C82 31 70 29 60 29C50 29 38 31 28 36Z" fill="#1d2a4a"/><path d="M27 37C38 30 82 30 93 37C92 41 88 42 84 40C74 36 46 36 36 40C32 42 28 41 27 37Z" fill="#26375e"/><circle cx="60" cy="27" r="2.4" fill="#26375e"/>
  <path d="M40 70C40 64 50 62 60 62C70 62 80 64 80 70C82 84 76 97 60 97C44 97 38 84 40 70Z" fill="#8a6644"/>
  <path d="M44 70C46 66 54 65 60 65C66 65 74 66 76 70C76 76 70 79 60 79C50 79 44 76 44 70Z" fill="#5c4028"/>
  <ellipse cx="53" cy="70.5" rx="2.6" ry="1.6" fill="#2a1a10"/><ellipse cx="67" cy="70.5" rx="2.6" ry="1.6" fill="#2a1a10"/>
  ${eyes({ dx: 20, y: 54, r: 6, col: '#21140e', iris: '#5c3220', lid: '#a07a54' })}
  ${blush(70, 31, '#e0708e', .4)}
  ${mouth(86, { w: 6, line: '#3a2414' })}`
    },
    {
      id: 'yaritza', name: 'Yaritza', animal: 'perezosa', nl: 'luiaard', city: 'Ciudad de Panamá', cc: 'PA', age: 25, female: true,
      trait: 'Gids bij het Panamakanaal. Doet alles op haar gemak, maar weet echt álles van de sluizen.',
      color: '#c9283b',
      defs: fur('#e9dcc4', '#c4b08f', '#97835f') + lin('o', '#ffffff', '#efe7dc'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M26 100Q60 116 94 100" fill="none" stroke="#c9283b" stroke-width="3.2"/><path d="M24 106Q60 122 96 106" fill="none" stroke="#1f4f9e" stroke-width="1.8"/>
  ${[30, 42, 54, 66, 78, 90].map((x, i) => flower(x, 104 + Math.abs(i - 2.5) * -1.6 + 3, i % 2 ? '#1f4f9e' : '#c9283b', 1.5)).join('')}
  <circle cx="46" cy="113" r="3.4" fill="#c9283b"/><circle cx="74" cy="113" r="3.4" fill="#c9283b"/><circle cx="44.8" cy="111.8" r="1" fill="#fff" opacity=".5"/><circle cx="72.8" cy="111.8" r="1" fill="#fff" opacity=".5"/>
  <path d="M60 30C88 30 103 47 103 68C103 89 85 101 60 101C35 101 17 89 17 68C17 47 32 30 60 30Z" fill="${u('f')}"/>
  <g fill="none" stroke="#97835f" stroke-width="1.3" stroke-linecap="round" opacity=".6"><path d="M40 35q2 4 0 8M50 32q2 4 0 8M60 31q2 4 0 8M70 32q2 4 0 8M80 35q2 4 0 8"/></g>
  ${shine(42, 41)}
  <path d="M60 46C80 46 92 56 92 70C92 86 78 96 60 96C42 96 28 86 28 70C28 56 40 46 60 46Z" fill="#f8f0e0"/>
  <path d="M32 62C35 55 47 55 51 61C51 69 46 73 40 73C34 73 30 68 32 62Z" fill="#6a5438"/><path d="M88 62C85 55 73 55 69 61C69 69 74 73 80 73C86 73 90 68 88 62Z" fill="#6a5438"/>
  <path d="M33 68C28 71 24 72 20 72" fill="none" stroke="#6a5438" stroke-width="4" stroke-linecap="round"/><path d="M87 68C92 71 96 72 100 72" fill="none" stroke="#6a5438" stroke-width="4" stroke-linecap="round"/>
  ${eyes({ dx: 18, y: 64, r: 6.2, col: '#1a120a', iris: '#4a3018', lash: true })}
  ${blush(78, 26, '#f0789f', .5)}
  <ellipse cx="60" cy="76" rx="5" ry="3.6" fill="#3a2a1a"/><ellipse cx="58.5" cy="75" rx="1.5" ry=".8" fill="#fff" opacity=".45"/>
  ${mouth(82.5, { w: 6.5, line: '#5a3a2a' })}
  ${hib(84, 36, 1.05, '#e8344e')}${hib(94, 46, .7, '#f7941d')}<ellipse cx="74" cy="38" rx="5" ry="2.2" transform="rotate(-30 74 38)" fill="#3a9d5d"/>`
    },
    {
      id: 'coralis', name: 'Coralis', animal: 'coquí', nl: 'coquí-kikkertje', city: 'San Juan', cc: 'PR', age: 23, female: true,
      trait: 'Klein maar luid, net als het kikkertje coquí. Zingt de hele dag en wacht eeuwig op de guagua.',
      color: '#e8344e',
      defs: fur('#f7c68a', '#e0a058', '#b8763a') + lin('o', '#2fb38a', '#1d8a6a'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <g fill="#9ee6b8" opacity=".85"><path d="M28 104C32 98 40 98 42 104C38 108 32 108 28 104Z"/><path d="M66 112C70 106 78 106 80 112C76 116 70 116 66 112Z"/><path d="M84 100C88 94 96 94 98 100C94 104 88 104 84 100Z"/></g>
  ${hib(50, 106, .55, '#ffd23f')}${hib(92, 114, .5, '#ff7ab0')}${hib(26, 116, .5, '#fff')}
  <circle cx="40" cy="44" r="17" fill="${u('f')}"/><circle cx="80" cy="44" r="17" fill="${u('f')}"/>
  <path d="M60 42C88 42 104 54 104 72C104 91 86 101 60 101C34 101 16 91 16 72C16 54 32 42 60 42Z" fill="${u('f')}"/>
  ${shine(36, 34, 7, 3.4, -30)}${shine(76, 33, 6, 3, -20)}
  <g fill="#9a5a2a" opacity=".45"><circle cx="30" cy="70" r="2"/><circle cx="90" cy="70" r="2"/><circle cx="60" cy="54" r="1.8"/><circle cx="50" cy="58" r="1.3"/><circle cx="70" cy="58" r="1.3"/></g>
  <path d="M26 66Q60 60 94 66" fill="none" stroke="#9a5a2a" stroke-width="1.4" opacity=".3"/>
  ${eyes({ dx: 20, y: 44, r: 9.6, col: '#2a1408', iris: '#a0522d', lash: true })}
  ${blush(76, 32, '#ff6a8a', .55)}
  <g fill="#7a4420"><ellipse cx="56" cy="66" rx="1.3" ry=".9"/><ellipse cx="64" cy="66" rx="1.3" ry=".9"/></g>
  <g class="m-closed" fill="none" stroke="#7a3a1a" stroke-linecap="round"><path d="M38 76Q60 90 82 76" stroke-width="2.4"/><path d="M36.5 74.5Q37.5 77 39.5 77M83.5 74.5Q82.5 77 80.5 77" stroke-width="1.4"/></g>
  <g class="m-open"><path d="M40 75.5Q60 80 80 75.5Q76 93 60 93Q44 93 40 75.5Z" fill="#7a2e3c"/><path d="M48 88Q60 81 72 88Q67 93 60 93Q53 93 48 88Z" fill="#f37fa6"/></g>
  ${hib(84, 34, 1.15, '#e8344e')}`
    },
    {
      id: 'abuela-lupe', name: 'Abuela Lupe', animal: 'ajolote', nl: 'axolotl', city: 'Puebla', cc: 'MX', age: 78, female: true,
      trait: 'De oma van Profe Lupe. Kookt zonder recept, alles «al tanteo», en verwent iedereen met guacamole.',
      color: '#b0507a',
      defs: fur('#fbe3ec', '#f0bcd2', '#d993b3') + lin('o', '#a0442e', '#6e2a1c') + `<linearGradient id="ID-g" x1="0" y1="0" x2="0" y2="-33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b85a82"/><stop offset="1" stop-color="#e6a2c0"/></linearGradient>`,
      draw: u => {
        const fronds = side => { const x = side < 0 ? 25 : 95; return [-38, -78, -118].map((a, i) => `<g transform="translate(${x} 57) rotate(${a * -side}) scale(${i === 1 ? .9 : .82})"><path d="M0 0C-9.5-5-11-23 0-33C11-23 9.5-5 0 0Z" fill="${u('g')}"/><path d="M0-3V-28" stroke="#ffe6ef" stroke-width="1.6" stroke-linecap="round" opacity=".9"/></g>`).join(''); };
        return `
  <path d="${SH}" fill="${u('o')}"/>
  <g stroke="#f2b134" stroke-width="1.4" opacity=".7"><path d="M22 106Q60 118 98 106M20 113Q60 125 100 113"/></g>
  <g fill="#fff4e6" opacity=".75">${Array.from({ length: 9 }, (_, i) => `<circle cx="${26 + i * 8.5}" cy="${109 + Math.sin(i / 8 * Math.PI) * 6}" r=".9"/>`).join('')}</g>
  <path d="M36 92L60 118L84 92" fill="#c9733a" opacity=".7"/>
  <g stroke="#6e2a1c" stroke-width="1" stroke-linecap="round">${Array.from({ length: 7 }, (_, i) => `<path d="M${43 + i * 5.7} ${98 + Math.abs(3 - i) * -1.4 + 4} v4"/>`).join('')}</g>
  <g class="gills-l">${fronds(-1)}</g><g class="gills-r">${fronds(1)}</g>
  <path d="M60 34C88 34 105 47 105 66C105 87 87 99 60 99C33 99 15 87 15 66C15 47 32 34 60 34Z" fill="${u('f')}"/>
  ${shine(43, 45, 11, 5)}
  <g fill="#d68aac" opacity=".5"><circle cx="58" cy="39" r="1.9"/><circle cx="66" cy="41.5" r="1.4"/><circle cx="51" cy="42.5" r="1.3"/><circle cx="31" cy="58" r="1.5"/><circle cx="91" cy="60" r="1.5"/></g>
  <g transform="translate(36 40)"><ellipse cx="7" cy="6" rx="4.6" ry="2.2" transform="rotate(-35 7 6)" fill="#3a9d5d"/>${flower(0, 0, '#ffffff', 3.2, '#f2b134')}</g>
  <g class="c-eyes"><path d="M35 64Q42 57.5 49 64" fill="none" stroke="#2a1a22" stroke-width="3" stroke-linecap="round"/><path d="M71 64Q78 57.5 85 64" fill="none" stroke="#2a1a22" stroke-width="3" stroke-linecap="round"/></g>
  <path d="M33 68.5Q36 70.5 39 69.5M87 68.5Q84 70.5 81 69.5M33 59 30 56.5M87 59 90 56.5" fill="none" stroke="#c0789a" stroke-width="1.2" stroke-linecap="round"/>
  <g fill="none" stroke="#b08a3a" stroke-width="1.8"><circle cx="42" cy="66" r="10"/><circle cx="78" cy="66" r="10"/><path d="M52 65Q60 61.5 68 65"/><path d="M32 64.5 23 60M88 64.5 97 60"/></g>
  <circle cx="42" cy="66" r="10" fill="#fff" opacity=".12"/><circle cx="78" cy="66" r="10" fill="#fff" opacity=".12"/>
  ${blush(78, 30, '#f0789f', .5)}
  ${mouth(82, { w: 7, line: '#a3415f', inside: '#8e3253' })}`;
      }
    },
    {
      id: 'elena', name: 'Señora Elena', animal: 'cóndor', nl: 'condor', city: 'Quito', cc: 'EC', age: 62, female: true,
      trait: 'Gastmoeder in Quito. Zorgzaam en een beetje bezorgd: heb je wel gegeten, heb je een jas bij je?',
      color: '#3f4a5a',
      defs: fur('#8a8794', '#5c5a68', '#3a3946') + lin('o', '#c9283b', '#8e1c2a') + `<radialGradient id="ID-r" cx=".5" cy=".3" r=".7"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e0ea"/></radialGradient>`,
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <g stroke="#ffd23f" stroke-width="1.4" opacity=".75"><path d="M20 112H100"/></g><g stroke="#1f4f9e" stroke-width="2.2" opacity=".85"><path d="M19 117H101"/></g>
  <g fill="#f2b134">${Array.from({ length: 13 }, (_, i) => `<circle cx="${36 + i * 4}" cy="${104 + Math.sin(i / 12 * Math.PI) * 6}" r="2"/>`).join('')}${Array.from({ length: 11 }, (_, i) => `<circle cx="${40 + i * 4}" cy="${99 + Math.sin(i / 10 * Math.PI) * 5}" r="1.6"/>`).join('')}</g>
  <g fill="${u('r')}">${Array.from({ length: 11 }, (_, i) => `<circle cx="${26 + i * 6.8}" cy="${93 + Math.sin(i / 10 * Math.PI) * 4}" r="${i % 2 ? 6.5 : 7.5}"/>`).join('')}</g>
  <path d="M60 30C87 30 101 47 101 66C101 86 84 97 60 97C36 97 19 86 19 66C19 47 33 30 60 30Z" fill="${u('f')}"/>
  ${shine(42, 41)}
  <path d="M42 33C46 26 54 24 60 25C66 24 74 26 78 33C72 31 66 31 60 32C54 31 48 31 42 33Z" fill="#3a3946"/>
  <path d="M60 46C76 46 88 56 88 70C88 84 76 92 60 92C44 92 32 84 32 70C32 56 44 46 60 46Z" fill="#b9a7a6" opacity=".55"/>
  ${eyes({ dx: 18, y: 62, r: 6.8, col: '#21141a', iris: '#6a2a2a', lash: true })}
  ${blush(76, 30, '#f0789f', .45)}
  <g class="m-closed"><path d="M52 70C52 66 56 64 60 64C64 64 68 66 68 70C68 76 64 82 60 86C56 82 52 76 52 70Z" fill="#efe2c4"/><path d="M60 86C58 84 57 82 57 80" fill="none" stroke="#bfa880" stroke-width="1.1"/><ellipse cx="57" cy="68" rx="1.8" ry="1" fill="#fff" opacity=".7"/><ellipse cx="56.5" cy="72" rx="1" ry=".6" fill="#7a6a5a"/><ellipse cx="63.5" cy="72" rx="1" ry=".6" fill="#7a6a5a"/></g>
  <g class="m-open"><path d="M52 69C52 65 56 63 60 63C64 63 68 65 68 69C68 74 64 79 60 82C56 79 52 74 52 69Z" fill="#efe2c4"/><path d="M54.5 79Q60 78 65.5 79Q63 88 60 88Q57 88 54.5 79Z" fill="#7a2e3c"/><path d="M56 82Q60 79 64 82Q62 86 60 86Q58 86 56 82Z" fill="#f37fa6"/><ellipse cx="56.5" cy="71" rx="1" ry=".6" fill="#7a6a5a"/><ellipse cx="63.5" cy="71" rx="1" ry=".6" fill="#7a6a5a"/></g>
  <g fill="#f2b134"><circle cx="20" cy="76" r="2.4"/><circle cx="100" cy="76" r="2.4"/></g><g fill="#fff" opacity=".5"><circle cx="19.4" cy="75.2" r=".8"/><circle cx="99.4" cy="75.2" r=".8"/></g>`
    },
    {
      id: 'daniel', name: 'Daniel', animal: 'xoloitzcuintle', nl: 'Mexicaanse naakthond', city: 'Guadalajara', cc: 'MX', age: 21, female: false,
      trait: 'Student uit Guadalajara, een tikje verlegen. Kan geweldig koken en kent de beste taquerías.',
      color: '#6a5acd',
      defs: fur('#a3a2ae', '#7b7a88', '#595866') + lin('o', '#7b68d8', '#5443a8'),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/>
  <path d="M44 93C44 100 50 104 60 104S76 100 76 93" fill="#5443a8"/><path d="M47 93C48 98 53 101 60 101S72 98 73 93" fill="none" stroke="#9d8cf0" stroke-width="1.2"/>
  <path d="M52 101V113M68 101V113" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><circle cx="52" cy="114" r="1.8" fill="#fff"/><circle cx="68" cy="114" r="1.8" fill="#fff"/>
  <path d="M24 100V121" stroke="#2a2a36" stroke-width="5" stroke-linecap="round" opacity=".55"/><path d="M96 100V121" stroke="#2a2a36" stroke-width="5" stroke-linecap="round" opacity=".55"/>
  <path d="M30 56C18 44 14 24 18 6C32 14 44 28 50 38Z" fill="${u('f')}"/><path d="M90 56C102 44 106 24 102 6C88 14 76 28 70 38Z" fill="${u('f')}"/>
  <path d="M32 48C24 38 21 25 22 14C31 21 39 30 44 38Z" fill="#c7a0a8"/><path d="M88 48C96 38 99 25 98 14C89 21 81 30 76 38Z" fill="#c7a0a8"/>
  <path d="M60 32C86 32 100 48 100 68C100 89 84 101 60 101C36 101 20 89 20 68C20 48 34 32 60 32Z" fill="${u('f')}"/>
  ${shine(42, 43)}
  <path d="M49 35C50 24 55 18 60 25C63 15 70 18 71 35C66 31 63 31 60 32C56 31 53 31 49 35Z" fill="#fbf8f2" stroke="#b9b3a8" stroke-width="1"/><path d="M55 31C55 25 58 22 60 25M65 31C65 25 64 21 62 20" fill="none" stroke="#c9c3b8" stroke-width="1"/>
  <g fill="#c3889a" opacity=".45"><circle cx="34" cy="52" r="3.4"/><circle cx="88" cy="80" r="4"/><circle cx="30" cy="80" r="2.4"/></g>
  <path d="M60 68C72 68 80 76 79 85C78 94 70 100 60 100C50 100 42 94 41 85C40 76 48 68 60 68Z" fill="#8d8c9a"/>
  ${eyes({ dx: 19, y: 62, r: 6.8, col: '#21141e', iris: '#5a3a5a' })}
  <path d="M35 53Q42 51 48 54M85 53Q78 51 72 54" fill="none" stroke="#4a4958" stroke-width="2" stroke-linecap="round"/>
  ${blush(78, 30, '#f0789f', .45)}
  <path d="M53.5 75Q60 71.5 66.5 75Q66 80.5 60 81.5Q54 80.5 53.5 75Z" fill="#1e1d26"/><ellipse cx="58" cy="75.2" rx="2" ry="1" fill="#fff" opacity=".4"/>
  <path d="M60 81.5V84" stroke="#3a3946" stroke-width="1.3" stroke-linecap="round"/>
  ${mouth(85.5, { w: 6.5, line: '#3a3946' })}`
    }
  ];
  const BY = Object.fromEntries(CAST.map(c => [c.id, c]));

  /* Welk personage hoort bij welke dialoogspreker. Sleutel: naam, of naam@landcode als dezelfde naam in een ander land iemand anders is. */
  const SPEAKERS = {
    'Mateo': 'mateo', 'Sofía': 'sofia', 'Diego': 'diego', 'Diego@PE': null, 'Juliana': 'juliana', 'Lucía': 'lucia', 'Rosa': 'rosa',
    'Catalina': 'catalina', 'Facundo': 'facundo', 'Yaritza': 'yaritza', 'Coralis': 'coralis', 'Abuela Lupe': 'abuela-lupe',
    'Señora Elena': 'elena', 'Daniel': 'daniel'
  };
  function country(place) {
    const cps = [...String(place || '')].map(c => c.codePointAt(0)).filter(c => c >= 0x1F1E6 && c <= 0x1F1FF);
    return cps.length >= 2 ? String.fromCharCode(cps[0] - 0x1F1E6 + 65, cps[1] - 0x1F1E6 + 65) : null;
  }
  function forSpeaker(name, place) {
    const cc = country(place), k = cc && (name + '@' + cc) in SPEAKERS ? name + '@' + cc : name;
    const id = SPEAKERS[k];
    return id ? BY[id] : null;
  }

  function svg(id, size = 64) {
    const c = BY[id]; if (!c) return '';
    const n = 'cs' + (++uid), u = k => `url(#${n}-${k})`;
    return `<svg class="cast-svg" viewBox="0 0 120 120" width="${size}" height="${size}" role="img" aria-label="${c.name}, ${c.animal}" xmlns="http://www.w3.org/2000/svg">
  <defs>${c.defs.replace(/ID-/g, n + '-')}</defs>${c.draw(u)}
</svg>`;
  }
  function avatar(id, size = 64, cls = '') {
    const el = document.createElement('div');
    el.className = 'cast cast-' + id + (cls ? ' ' + cls : '');
    el.innerHTML = svg(id, size);
    return el;
  }

  /* Luisteren wanneer er iets wordt voorgelezen (voor de bewegende mond). Geeft een functie terug om te stoppen. */
  const talkers = new Set();
  let hooked = false;
  function onTalk(fn) {
    if (!hooked && S.Speech) {
      hooked = true;
      const prev = S.Speech.onTalk;
      S.Speech.onTalk = (on, text) => { if (prev) prev(on, text); talkers.forEach(f => { try { f(on, text); } catch (e) { /* */ } }); };
    }
    talkers.add(fn);
    return () => { talkers.delete(fn); fn(false, null); };
  }

  S.Cast = { list: CAST, get: id => BY[id], SPEAKERS, forSpeaker, svg, avatar, country, onTalk };
})(window.SPT = window.SPT || {});
