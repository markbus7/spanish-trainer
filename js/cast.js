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
  // grote glanzende ogen zoals Lupe: gekleurde iris met pupil, twee lichtjes en een ooglidlijntje.
  // o.ring = gekleurde ring eromheen, o.lid = slaperige oogleden, o.iris2 = andere kleur voor het rechteroog
  function eyes(o = {}) {
    const y = o.y || 64, dx = o.dx || 18, r = o.r || 7.2, ry = +(r * 1.06).toFixed(2), col = o.col || '#2a1a22', iris = o.iris || '#5a2c42';
    const f = v => +v.toFixed(2);
    const one = (x, ir) => `${o.ring ? `<ellipse cx="${x}" cy="${y}" rx="${r + 3.2}" ry="${ry + 3.2}" fill="${o.ring}"/>` : ''}
      <ellipse cx="${x}" cy="${y}" rx="${r}" ry="${ry}" fill="${col}"/>
      <ellipse cx="${x}" cy="${f(y + r * .26)}" rx="${f(r * .76)}" ry="${f(r * .68)}" fill="${ir}" opacity=".9"/>
      <ellipse cx="${x}" cy="${f(y + r * .04)}" rx="${f(r * .47)}" ry="${f(r * .52)}" fill="${col}"/>
      <path d="M${f(x - r * .5)} ${f(y + r * .6)}Q${x} ${f(y + r * .98)} ${f(x + r * .5)} ${f(y + r * .6)}" fill="none" stroke="#fff" stroke-width="${f(r * .15)}" stroke-linecap="round" opacity=".38"/>
      <circle cx="${f(x + r * .36)}" cy="${f(y - r * .4)}" r="${f(r * .37)}" fill="#fff"/>
      <circle cx="${f(x - r * .36)}" cy="${f(y + r * .36)}" r="${f(r * .17)}" fill="#fff" opacity=".9"/>
      <path d="M${f(x - r * 1.04)} ${f(y - r * .3)}Q${x} ${f(y - ry * 1.42)} ${f(x + r * 1.04)} ${f(y - r * .3)}" fill="none" stroke="${col}" stroke-width="1.5" stroke-linecap="round"/>
      ${o.lid ? `<path d="M${x - r - .8} ${y - r * .1}Q${x} ${y - r * .5} ${x + r + .8} ${y - r * .1}A${r + .8} ${ry + .8} 0 0 0 ${x - r - .8} ${y - r * .1}Z" fill="${o.lid}"/><path d="M${x - r - .6} ${y - r * .1}Q${x} ${y - r * .5} ${x + r + .6} ${y - r * .1}" fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round"/>` : ''}
      ${o.lash ? lashes(x, y, r, ry, col) : ''}`;
    return `<g class="c-eyes">${one(60 - dx, iris)}${one(60 + dx, o.iris2 || iris)}</g>`;
  }
  // blosjes: zacht uitlopend, met twee lichte streepjes
  const blush = (y = 76, dx = 29.5, col = '#f0789f', op = .5) => [60 - dx, 60 + dx].map(x => `<ellipse cx="${x}" cy="${y}" rx="7.4" ry="4.6" fill="${col}" opacity="${+(op * .45).toFixed(2)}"/><ellipse cx="${x}" cy="${y}" rx="5.2" ry="3" fill="${col}" opacity="${+(op * .8).toFixed(2)}"/><path d="M${x - 2.6} ${y + 1.2}l1.6-2.6M${x + .6} ${y + 1.2}l1.6-2.6" stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".45"/>`).join('');
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
      kind: 'bird', id: 'juliana', name: 'Juliana', animal: 'tucán', nl: 'toekan', city: 'Medellín', cc: 'CO', age: 24, female: true,
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
      kind: 'bird', id: 'rosa', name: 'Rosa', animal: 'gallito de las rocas', nl: 'rotshaan (nationale vogel van Peru)', city: 'Lima', cc: 'PE', age: 34, female: true,
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
  <!--w--><g stroke="#f2b134" stroke-width="1.4" opacity=".7"><path d="M22 106Q60 118 98 106M20 113Q60 125 100 113"/></g>
  <g fill="#fff4e6" opacity=".75">${Array.from({ length: 9 }, (_, i) => `<circle cx="${26 + i * 8.5}" cy="${109 + Math.sin(i / 8 * Math.PI) * 6}" r=".9"/>`).join('')}</g>
  <path d="M36 92L60 118L84 92" fill="#c9733a" opacity=".7"/>
  <g stroke="#6e2a1c" stroke-width="1" stroke-linecap="round">${Array.from({ length: 7 }, (_, i) => `<path d="M${43 + i * 5.7} ${98 + Math.abs(3 - i) * -1.4 + 4} v4"/>`).join('')}</g><!--/w-->
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
      kind: 'bird', id: 'elena', name: 'Señora Elena', animal: 'cóndor', nl: 'condor', city: 'Quito', cc: 'EC', age: 62, female: true,
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

  /* ---------- bijrollen: zelfde stijl, opgebouwd uit vaste onderdelen ----------
     beast(o): zoogdier/reptiel; bird(o): vogel; frog(o): kikker. o.fur = [licht, midden, donker], o.wear = kleding, o.hat/o.acc = accessoires. */
  const HEAD = 'M60 30C88 30 102 47 102 67C102 88 85 100 60 100C35 100 18 88 18 67C18 47 32 30 60 30Z';
  const EARS = {
    round: (f, i) => `<circle cx="29" cy="36" r="11" fill="${f}"/><circle cx="91" cy="36" r="11" fill="${f}"/><circle cx="29.5" cy="37" r="6" fill="${i}"/><circle cx="90.5" cy="37" r="6" fill="${i}"/>`,
    big: (f, i) => `<path d="M27 46C24 30 25 16 30 8C38 14 46 24 52 34Z" fill="${f}"/><path d="M93 46C96 30 95 16 90 8C82 14 74 24 68 34Z" fill="${f}"/><path d="M30 42C28 31 29 21 32 15C37 20 42 27 46 34Z" fill="${i}"/><path d="M90 42C92 31 91 21 88 15C83 20 78 27 74 34Z" fill="${i}"/>`,
    point: (f, i) => `<path d="M27 50C22 36 22 22 29 14C38 17 47 26 51 34Z" fill="${f}"/><path d="M93 50C98 36 98 22 91 14C82 17 73 26 69 34Z" fill="${f}"/><path d="M30 44C27 34 27 25 31 20C37 23 42 28 45 34Z" fill="${i}"/><path d="M90 44C93 34 93 25 89 20C83 23 78 28 75 34Z" fill="${i}"/>`,
    huge: (f, i) => `<path d="M30 52C14 44 4 28 4 12C20 14 38 26 48 38Z" fill="${f}"/><path d="M90 52C106 44 116 28 116 12C100 14 82 26 72 38Z" fill="${f}"/><path d="M30 46C19 40 12 29 11 19C23 22 35 30 42 38Z" fill="${i}"/><path d="M90 46C101 40 108 29 109 19C97 22 85 30 78 38Z" fill="${i}"/>`,
    long: (f, i) => `<ellipse cx="42" cy="22" rx="8" ry="22" transform="rotate(-12 42 22)" fill="${f}"/><ellipse cx="78" cy="22" rx="8" ry="22" transform="rotate(12 78 22)" fill="${f}"/><ellipse cx="42" cy="22" rx="4" ry="16" transform="rotate(-12 42 22)" fill="${i}"/><ellipse cx="78" cy="22" rx="4" ry="16" transform="rotate(12 78 22)" fill="${i}"/>`,
    side: (f, i) => `<path d="M33 62C18 62 6 54 4 44C14 42 28 46 38 54Z" fill="${f}"/><path d="M87 62C102 62 114 54 116 44C106 42 92 46 82 54Z" fill="${f}"/><path d="M30 57C20 56 12 51 10 46C18 46 27 49 33 54Z" fill="${i}"/><path d="M90 57C100 56 108 51 110 46C102 46 93 49 87 54Z" fill="${i}"/>`,
    disc: (f, i) => `<circle cx="26" cy="34" r="16" fill="${f}"/><circle cx="94" cy="34" r="16" fill="${f}"/><circle cx="27" cy="35" r="10.5" fill="${i}"/><circle cx="93" cy="35" r="10.5" fill="${i}"/>`,
    tiny: (f, i) => `<circle cx="32" cy="40" r="6" fill="${f}"/><circle cx="88" cy="40" r="6" fill="${f}"/><circle cx="32" cy="41" r="3" fill="${i}"/><circle cx="88" cy="41" r="3" fill="${i}"/>`,
    none: () => ''
  };
  const NOSE = {
    bear: (c, y) => `<path d="M${54} ${y}Q60 ${y - 2.5} 66 ${y}Q65.5 ${y + 5} 60 ${y + 6}Q54.5 ${y + 5} 54 ${y}Z" fill="${c}"/><ellipse cx="57.8" cy="${y + .4}" rx="1.8" ry=".9" fill="#fff" opacity=".45"/><path d="M60 ${y + 6}V${y + 8.5}" stroke="${c}" stroke-width="1.3" stroke-linecap="round" opacity=".7"/>`,
    cat: (c, y) => `<path d="M55.5 ${y}Q60 ${y - 1.5} 64.5 ${y}Q63 ${y + 4} 60 ${y + 4.5}Q57 ${y + 4} 55.5 ${y}Z" fill="${c}"/><path d="M60 ${y + 4.5}V${y + 6.5}" stroke="#8a4a3a" stroke-width="1.2" stroke-linecap="round"/>`,
    dots: (c, y) => `<ellipse cx="56" cy="${y + 2}" rx="1.5" ry="1" fill="${c}"/><ellipse cx="64" cy="${y + 2}" rx="1.5" ry="1" fill="${c}"/>`,
    rabbit: (c, y) => `<path d="M57 ${y}Q60 ${y - 1} 63 ${y}L60 ${y + 3}Z" fill="${c}"/><path d="M60 ${y + 3}V${y + 5.5}" stroke="#8a4a3a" stroke-width="1.2" stroke-linecap="round"/>`
  };
  // kleding: a/b = kleurverloop, stijl
  const WEAR = {
    tee: w => `<path d="M42 93Q60 106 78 93" fill="none" stroke="${w.trim || '#fff4e6'}" stroke-width="3" stroke-linecap="round"/>`,
    shirt: w => `<path d="M46 93L60 107L74 93Z" fill="${w.inner || '#fff'}"/><path d="M44 93L52 106 60 99Z" fill="${w.trim || '#fff'}"/><path d="M76 93L68 106 60 99Z" fill="${w.trim || '#fff'}"/><g fill="${w.btn || '#fff'}" opacity=".9"><circle cx="60" cy="110" r="1.4"/><circle cx="60" cy="117" r="1.4"/></g>`,
    blazer: w => `<path d="M46 93L60 121L74 93Z" fill="${w.inner || '#fff'}"/><path d="M44 93L54 112 60 121 48 121Z" fill="${w.trim}"/><path d="M76 93L66 112 60 121 72 121Z" fill="${w.trim}"/>${w.pin ? `<circle cx="72" cy="104" r="2.2" fill="${w.pin}"/>` : ''}`,
    coat: () => `<path d="M46 93L60 121L74 93Z" fill="#8fd0e8"/><path d="M44 93L54 112 60 121 46 121Z" fill="#fff"/><path d="M76 93L66 112 60 121 74 121Z" fill="#fff"/><path d="M48 96C44 110 50 118 60 118" fill="none" stroke="#3a3a46" stroke-width="2.2" stroke-linecap="round"/><path d="M72 96C76 106 74 112 70 114" fill="none" stroke="#3a3a46" stroke-width="2.2" stroke-linecap="round"/><circle cx="70" cy="115.5" r="3" fill="#b9c2cc" stroke="#3a3a46" stroke-width="1.4"/><rect x="77" y="104" width="10" height="7" rx="1.5" fill="#e6f2fb" stroke="#9bb" stroke-width=".6"/><path d="M80 105.5V109.5M78 107.5H82" stroke="#e8344e" stroke-width="1.4"/>`,
    waiter: () => `<path d="M44 93L60 121L76 93Z" fill="#fff"/><path d="M44 93L56 121H32Z" fill="#2a2a33"/><path d="M76 93L64 121H88Z" fill="#2a2a33"/><path d="M52 98L60 101 68 98 68 106 60 103 52 106Z" fill="#c9283b"/><circle cx="60" cy="102" r="2" fill="#a81f30"/><g fill="#2a2a33"><circle cx="60" cy="111" r="1.2"/><circle cx="60" cy="117" r="1.2"/></g>`,
    stripes: w => `<g fill="none" stroke="${w.trim}" stroke-width="2.6" opacity=".9"><path d="M22 106Q60 120 98 106"/><path d="M19 114Q60 128 101 114"/></g><path d="M42 93Q60 104 78 93" fill="none" stroke="${w.trim2 || '#fff4e6'}" stroke-width="3" stroke-linecap="round"/>`,
    poncho: w => `<path d="M17 121C19 103 34 94 46 93L60 108 74 93C86 94 101 103 103 121Z" fill="${w.a}"/><g fill="none" stroke-width="2.4"><path d="M24 108Q60 122 96 108" stroke="${w.trim}"/><path d="M21 115Q60 129 99 115" stroke="${w.trim2}"/></g><g fill="${w.trim2}">${[30, 44, 76, 90].map(x => `<path d="M${x} 104l2.4 2.4-2.4 2.4-2.4-2.4Z"/>`).join('')}</g>`,
    flowers: w => `<path d="M42 93Q60 106 78 93" fill="none" stroke="#fff4e6" stroke-width="3" stroke-linecap="round"/>${flower(30, 108, w.f1 || '#fff', 1.8)}${flower(46, 113, w.f2 || '#ffd23f', 1.8)}${flower(74, 113, w.f1 || '#fff', 1.8)}${flower(90, 108, w.f2 || '#ffd23f', 1.8)}`,
    vest: w => `<path d="M42 93Q60 106 78 93" fill="none" stroke="#fff4e6" stroke-width="3" stroke-linecap="round"/><path d="M30 99L44 95 50 121H28Z" fill="${w.trim}"/><path d="M90 99L76 95 70 121H92Z" fill="${w.trim}"/><g fill="#f2b134"><circle cx="38" cy="106" r="1.4"/><circle cx="82" cy="106" r="1.4"/></g>`
  };
  const HAT = {
    chullo: (a, b) => `<path d="M26 50C24 26 42 14 60 14C78 14 96 26 94 50C84 42 72 39 60 39C48 39 36 42 26 50Z" fill="${a}"/><path d="M26 50L22 74 31 72 32 46Z" fill="${a}"/><path d="M94 50L98 74 89 72 88 46Z" fill="${a}"/><path d="M22 74V82M98 74V82" stroke="${b}" stroke-width="1.6"/><circle cx="22" cy="84" r="2.6" fill="${b}"/><circle cx="98" cy="84" r="2.6" fill="${b}"/>
      <path d="M30 40Q60 28 90 40" fill="none" stroke="${b}" stroke-width="3"/><path d="M33 34l4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4 4 4" fill="none" stroke="#fff" stroke-width="1.4" transform="translate(-1 -6)"/><circle cx="60" cy="12" r="5" fill="${b}"/>`,
    safari: () => `<path d="M14 46Q60 32 106 46Q100 52 60 46Q20 52 14 46Z" fill="#a8844e"/><path d="M30 44C30 24 44 16 60 16S90 24 90 44Q60 38 30 44Z" fill="#c9a66b"/><path d="M30 40Q60 34 90 40V44Q60 38 30 44Z" fill="#6e5230"/>`,
    sun: () => `<path d="M16 42Q60 28 104 42Q98 50 60 44Q22 50 16 42Z" fill="#f2e2b0"/><path d="M32 40C32 22 46 16 60 16S88 22 88 40Q60 34 32 40Z" fill="#fff1c9"/><path d="M32 37Q60 31 88 37V41Q60 35 32 41Z" fill="#e8344e"/>`,
    cap: c => `<path d="M30 42C30 24 44 18 60 18S90 24 90 42Q60 36 30 42Z" fill="${c}"/><path d="M28 42Q60 34 92 42Q90 50 60 46Q30 50 28 42Z" fill="${c}" opacity=".85"/><path d="M40 42Q60 38 80 42" fill="none" stroke="#fff" stroke-width="1" opacity=".5"/><circle cx="60" cy="18" r="2.2" fill="${c}"/><path d="M50 30h20" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>`,
    sombrero: () => `<ellipse cx="60" cy="38" rx="50" ry="9" fill="#d9b25a"/><path d="M38 38C38 20 48 12 60 12S82 20 82 38Z" fill="#e8c56e"/><path d="M38 33Q60 28 82 33V38H38Z" fill="#c9283b"/><path d="M12 38Q60 50 108 38" fill="none" stroke="#b08a3a" stroke-width="1.4"/>`,
    fruits: () => `<ellipse cx="60" cy="30" rx="26" ry="6" fill="#d9a441"/><path d="M34 30Q60 44 86 30L82 34Q60 46 38 34Z" fill="#b8832a"/><circle cx="48" cy="24" r="7" fill="#f7941d"/><circle cx="62" cy="21" r="7.5" fill="#e8344e"/><circle cx="74" cy="25" r="6.5" fill="#ffd23f"/><path d="M38 26C42 16 54 14 56 22" fill="#3a9d5d"/><path d="M80 22C84 14 94 16 90 26" fill="#3a9d5d"/><circle cx="55" cy="28" r="5" fill="#8a3a8e"/>`,
    bun: c => `<circle cx="60" cy="24" r="9" fill="${c}"/>`
  };
  const ACC = {
    glasses: (c = '#3b2a20') => `<g fill="none" stroke="${c}" stroke-width="2"><circle cx="42" cy="64" r="11"/><circle cx="78" cy="64" r="11"/><path d="M53 63Q60 60 67 63"/></g>`,
    mustache: (c = '#3a2414') => `<path d="M60 83C54 79 44 80 40 86C46 85 52 87 60 85C68 87 74 85 80 86C76 80 66 79 60 83Z" fill="${c}"/>`,
    earrings: (c = '#f2b134') => `<circle cx="20" cy="74" r="2.6" fill="${c}"/><circle cx="100" cy="74" r="2.6" fill="${c}"/><circle cx="20" cy="79" r="3.2" fill="none" stroke="${c}" stroke-width="1.4"/><circle cx="100" cy="79" r="3.2" fill="none" stroke="${c}" stroke-width="1.4"/>`,
    camera: () => `<path d="M40 98L60 112 80 98" fill="none" stroke="#2a2a33" stroke-width="1.6"/><rect x="50" y="108" width="20" height="13" rx="3" fill="#2a2a33"/><circle cx="60" cy="114.5" r="4.4" fill="#5ec2e8" stroke="#888" stroke-width="1.2"/><rect x="64" y="109.5" width="4" height="2" rx=".8" fill="#e8344e"/>`,
    mic: () => `<path d="M88 121V106" stroke="#2a2a33" stroke-width="3" stroke-linecap="round"/><rect x="83" y="96" width="10" height="13" rx="5" fill="#444"/><path d="M84.5 100h7M84.5 103h7" stroke="#888" stroke-width=".8"/>`,
    badge: (c = '#fff') => `<rect x="70" y="104" width="13" height="9" rx="1.6" fill="${c}" stroke="#999" stroke-width=".6"/><path d="M72.5 107h8M72.5 110h5" stroke="#999" stroke-width=".9"/>`,
    phone: () => `<rect x="80" y="100" width="10" height="17" rx="2.2" fill="#2a2a33"/><rect x="81.5" y="102" width="7" height="12" rx="1" fill="#5ec2e8"/>`,
    whisk: (c = '#7a5a40') => whisk(83, c),
    bow: (c = '#e8344e') => `<path d="M66 30L76 24 76 36Z M66 30L56 24 56 36Z" fill="${c}"/><circle cx="66" cy="30" r="2.4" fill="${c}"/>`
  };
  function beast(o) {
    const [a, b, c] = o.fur;
    const w = o.wear || { kind: 'tee', a: '#5aa0d8', b: '#3f7fb8' };
    return {
      defs: fur(a, b, c) + lin('o', w.a, w.b),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/><!--w-->${(WEAR[w.kind] || WEAR.tee)(w)}<!--/w-->${o.under || ''}
  ${(EARS[o.ears || 'round'])(u('f'), o.earIn || '#e9b7c4')}${o.back || ''}
  <path d="${o.head || HEAD}" fill="${u('f')}"/>
  ${shine(42, 41)}
  ${o.marks || ''}
  ${o.muzzle ? `<ellipse cx="60" cy="${o.my || 84}" rx="${o.mrx || 15}" ry="${o.mry || 11.5}" fill="${o.muzzle}"/>` : ''}
  ${o.cheeks ? `<ellipse cx="52.5" cy="84" rx="9.5" ry="7.4" fill="${o.cheeks}"/><ellipse cx="67.5" cy="84" rx="9.5" ry="7.4" fill="${o.cheeks}"/>` : ''}
  ${o.hat ? o.hat : ''}
  ${eyes(Object.assign({ dx: 18, y: 64, r: 7, col: '#24160f', iris: '#5c3a26' }, o.eyes || {}))}
  ${o.front || ''}
  ${blush(o.by || 78, o.bdx || 30, '#f0789f', .45)}
  ${(NOSE[o.nose || 'bear'])(o.noseCol || '#2a1a12', o.ny || 75)}
  ${mouth(o.mouthY || 85, { w: o.mw || 6, line: o.line || '#6e4b2e' })}
  ${o.top || ''}`.replace(/URL_F/g, u('f'))
    };
  }
  function bird(o) {
    const [a, b, c] = o.fur, w = o.wear || { kind: 'tee', a: '#5aa0d8', b: '#3f7fb8' }, k = o.beak || '#ffd23f', k2 = o.beak2 || '#e8a21a';
    const beak = o.hook
      ? { closed: `<path d="M50 72Q60 64 70 72Q72 82 64 90Q62 84 56 82Q50 79 50 72Z" fill="${k}"/><path d="M53 82Q60 80 64 84Q62 88 58 88Q54 86 53 82Z" fill="${k2}"/><ellipse cx="56" cy="71" rx="2" ry="1" fill="#fff" opacity=".6"/>`, open: `<path d="M50 70Q60 62 70 70Q72 79 65 85Q62 80 56 79Q50 76 50 70Z" fill="${k}"/><path d="M53 84Q60 82 64 86Q62 92 58 92Q54 89 53 84Z" fill="${k2}"/><path d="M54 80Q60 79 64 84Q60 84 54 83Z" fill="#7a2e3c"/>` }
      : o.long
      ? { closed: `<path d="M53.5 72Q60 68.5 66.5 72L61.6 103Q60 105 58.4 103Z" fill="${k}" stroke="${k2}" stroke-width=".9" stroke-linejoin="round"/><path d="M60 74V101" stroke="${k2}" stroke-width="1" stroke-linecap="round" opacity=".8"/><path d="M56.5 73.5L58.6 92" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".45"/>`, open: `<path d="M53.5 71Q60 67.5 66.5 71L64 99Q62.6 101 61.4 99L58 78Z" fill="${k}" stroke="${k2}" stroke-width=".9" stroke-linejoin="round"/><path d="M54 76L60 80 57.4 104Q56 106 55 104Z" fill="${k}" stroke="${k2}" stroke-width=".9" stroke-linejoin="round"/><path d="M57 79L60 81 59 92Z" fill="#7a2e3c"/>` }
      : { closed: `<path d="M53 74Q60 71 67 74L60 84Z" fill="${k}"/><path d="M56 79.5H64" stroke="${k2}" stroke-width="1" stroke-linecap="round"/>`, open: `<path d="M53 73Q60 70 67 73L60 79Z" fill="${k}"/><path d="M55 80.5H65L60 87Z" fill="${k2}"/><path d="M56.5 79.2H63.5L60 82Z" fill="#7a2e3c"/>` };
    return {
      kind: 'bird',
      defs: fur(a, b, c) + lin('o', w.a, w.b),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/><!--w-->${(WEAR[w.kind] || WEAR.tee)(w)}<!--/w-->
  ${o.back || ''}
  <path d="${HEAD}" fill="${u('f')}"/>
  ${shine(42, 41)}
  ${o.marks || ''}${o.hat || ''}
  ${eyes(Object.assign({ dx: 18, y: 63, r: 7.2, col: '#1a1018', iris: '#40243a' }, o.eyes || {}))}
  ${blush(78, 30, '#f0789f', .4)}
  <g class="m-closed">${beak.closed}</g><g class="m-open">${beak.open}</g>
  ${o.front || ''}`.replace(/URL_F/g, u('f'))
    };
  }
  function frog(o) {
    const [a, b, c] = o.fur, w = o.wear;
    return {
      kind: 'frog',
      defs: fur(a, b, c) + lin('o', w.a, w.b),
      draw: u => `
  <path d="${SH}" fill="${u('o')}"/><!--w-->${(WEAR[w.kind] || WEAR.tee)(w)}<!--/w-->
  <circle cx="40" cy="46" r="16" fill="${u('f')}"/><circle cx="80" cy="46" r="16" fill="${u('f')}"/>
  <path d="M60 44C88 44 104 56 104 73C104 91 86 101 60 101C34 101 16 91 16 73C16 56 32 44 60 44Z" fill="${u('f')}"/>
  ${shine(36, 36, 7, 3.4, -30)}${o.marks || ''}
  <path d="M30 80C40 96 80 96 90 80C86 94 74 100 60 100C46 100 34 94 30 80Z" fill="${o.belly || '#fff3c4'}" opacity=".9"/>
  ${o.hat || ''}
  ${eyes({ dx: 20, y: 46, r: 9.4, col: '#1a0e08', iris: o.iris || '#a0522d', lash: !!o.lash, ring: o.ring })}
  ${blush(77, 32, '#ff6a8a', .5)}
  <g fill="${c}"><ellipse cx="56" cy="67" rx="1.3" ry=".9"/><ellipse cx="64" cy="67" rx="1.3" ry=".9"/></g>
  <g class="m-closed" fill="none" stroke="${o.line || '#5a3a1a'}" stroke-linecap="round"><path d="M40 77Q60 90 80 77" stroke-width="2.4"/></g>
  <g class="m-open"><path d="M41 76.5Q60 81 79 76.5Q75 93 60 93Q45 93 41 76.5Z" fill="#7a2e3c"/><path d="M48 88Q60 81 72 88Q67 93 60 93Q53 93 48 88Z" fill="#f37fa6"/></g>
  ${o.front || ''}`
    };
  }
  const extra = (meta, art) => Object.assign({ extra: true }, meta, art);
  const SPOTS = (col, pts) => `<g fill="${col}" opacity=".75">${pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r || 1.6}"/>`).join('')}</g>`;
  CAST.push(
    extra({ id: 'andres', name: 'Andrés', animal: 'zorro andino', nl: 'Andesvos', city: 'Lima', cc: 'PE', age: 29, female: false, trait: 'Ingenieur en vriend van Lucía. Rustig, precies en altijd netjes in het overhemd.', color: '#c9733a' },
      beast({ fur: ['#f2c49a', '#d98e55', '#a8602e'], ears: 'point', earIn: '#5a3a28', muzzle: '#fbeedd', mrx: 16, mry: 13, wear: { kind: 'shirt', a: '#8fb8e8', b: '#5f8fc8', trim: '#dfeaf8', inner: '#c9283b' }, marks: '<path d="M33 52Q42 48 48 52M87 52Q78 48 72 52" fill="none" stroke="#7a4a28" stroke-width="2" stroke-linecap="round"/>' })),
    extra({ id: 'valentina-ar', name: 'Valentina', animal: 'vizcacha', nl: 'viscacha', city: 'Buenos Aires (woont in Lima)', cc: 'AR', age: 31, female: true, trait: 'Argentijnse journaliste. Stelt vragen alsof het een interview is, en lacht om je antwoorden.', color: '#75aadb' },
      beast({ fur: ['#e6e2dc', '#bdb6ac', '#8f877c'], ears: 'long', earIn: '#d9b6b8', muzzle: '#fbf8f2', mrx: 15, mry: 12, wear: { kind: 'stripes', a: '#75aadb', b: '#4f86bd', trim: '#fff', trim2: '#f2b134' }, marks: '<path d="M60 31C56 44 56 56 60 70C64 56 64 44 60 31Z" fill="#fff" opacity=".7"/><path d="M28 82Q38 79 45 82M92 82Q82 79 75 82" stroke="#3a3530" stroke-width="2.4" stroke-linecap="round" fill="none"/>', nose: 'rabbit', noseCol: '#3a3530', front: ACC.earrings() + ACC.whisk('#5a534a') })),
    extra({ id: 'camila', name: 'Camila', animal: 'chinchilla', nl: 'chinchilla', city: 'Santiago de Chile', cc: 'CL', age: 33, female: true, trait: 'Werkt bij een bank en leeft op de minuut. Toch altijd tijd voor once met vrienden.', color: '#6a7a9a' },
      beast({ fur: ['#eef0f4', '#c4c8d2', '#9298a8'], ears: 'disc', earIn: '#f2c2cc', muzzle: '#fbfbfd', mrx: 15, mry: 12, wear: { kind: 'blazer', a: '#3a4a6a', b: '#26324a', trim: '#4a5c80', inner: '#fff', pin: '#f2b134' }, nose: 'rabbit', noseCol: '#d9768f', front: ACC.whisk('#7a7f8c') })),
    extra({ id: 'senora-cartagena', name: 'Señora', animal: 'iguana', nl: 'leguaan', city: 'Cartagena', cc: 'CO', age: 60, female: true, trait: 'Fruitverkoopster in de oude stad, met een schaal fruit op haar hoofd. Wijst je graag de weg.', color: '#3a9d5d' },
      beast({ fur: ['#c7ec9a', '#7cc46a', '#3f8f48'], ears: 'none', wear: { kind: 'flowers', a: '#ffd23f', b: '#f2a81d', f1: '#c9283b', f2: '#1f4f9e' },
        back: '<g fill="#3f8f48">' + [36, 46, 56, 66, 76].map((x, i) => `<path d="M${x} ${34 - (i === 2 ? 4 : 0)}l4 -10 4 10Z"/>`).join('') + '</g>',
        marks: SPOTS('#4f9f50', [[30, 60, 2.2], [90, 60, 2.2], [36, 52, 1.6], [84, 52, 1.6], [26, 72, 1.6], [94, 72, 1.6]]) + '<path d="M50 96Q60 112 70 96" fill="#9fd67a"/>', nose: 'dots', noseCol: '#2f6f38', hat: HAT.fruits(), front: ACC.earrings('#e8344e'), line: '#2f6f38', eyes: { lash: true, iris: '#7a6a1a' } })),
    extra({ id: 'ana', name: 'Ana', animal: 'teporingo', nl: 'vulkaankonijn', city: 'Ciudad de México', cc: 'MX', age: 24, female: true, trait: 'Vriendin uit Mexico-Stad. Bestelt altijd «con todo» en eet de pittigste salsa zonder te knipperen.', color: '#a0704a' },
      beast({ fur: ['#d9b896', '#a87f58', '#7a5534'], ears: 'tiny', earIn: '#e9b7c4', muzzle: '#f2e2cc', mrx: 14, mry: 11, nose: 'rabbit', noseCol: '#d9768f', wear: { kind: 'tee', a: '#f0789f', b: '#d14f8a' }, front: ACC.whisk('#6a4a30') + flower(84, 40, '#ffd23f', 2.6, '#e2452f'), eyes: { lash: true } })),
    extra({ id: 'mesero', name: 'Mesero', animal: 'chihuahua', nl: 'chihuahua', city: 'Ciudad de México', cc: 'MX', age: 45, female: false, trait: 'Ober in de taquería. Snel, vriendelijk en eerlijk over hoe pittig de groene salsa is.', color: '#2a2a33' },
      beast({ fur: ['#f6dcb4', '#e2b47a', '#c08848'], ears: 'huge', earIn: '#f2b6b8', muzzle: '#fbeedc', mrx: 13, mry: 10.5, wear: { kind: 'waiter', a: '#fff', b: '#ececec' }, eyes: { r: 8 }, line: '#6e4b2e' })),
    extra({ id: 'vendedora', name: 'Vendedora', animal: 'tití cabeciblanco', nl: 'pinchéaapje', city: 'Bogotá', cc: 'CO', age: 27, female: true, trait: 'Verkoopster in een kledingwinkel. Zegt «sumercé» en vindt alles je «divino» staan.', color: '#8a3a8e' },
      beast({ fur: ['#c99a6a', '#9a6a3e', '#6a4424'], ears: 'tiny', earIn: '#3a2a20', wear: { kind: 'blazer', a: '#8a3a8e', b: '#6a2a70', trim: '#a24ea8', inner: '#fff' },
        marks: '<path d="M36 50C46 46 74 46 84 50C92 64 86 92 60 96C34 92 28 64 36 50Z" fill="#3a2a22"/>',
        top: '<path d="M30 48C24 36 22 28 26 18C30 26 34 28 36 26C34 16 36 8 42 2C44 12 48 16 52 16C52 8 56 2 60 -2C64 2 68 8 68 16C72 16 76 12 78 2C84 8 86 16 84 26C86 28 90 26 94 18C98 28 96 36 90 48C82 38 72 34 60 34C48 34 38 38 30 48Z" fill="#fdfbf6" stroke="#cfc6b8" stroke-width="1.2" stroke-linejoin="round"/>', nose: 'dots', noseCol: '#151010', front: ACC.badge(), eyes: { lash: true, iris: '#7a4a1a' }, line: '#c9a08a' })),
    extra({ id: 'andrea', name: 'Andrea', animal: 'mapache', nl: 'wasbeer', city: 'San José', cc: 'CR', age: 26, female: true, trait: 'Tica die elk weekend een vulkaan of strand opzoekt. Alles is «tuanis» en «pura vida».', color: '#2fa79a' },
      beast({ fur: ['#c9c6c2', '#9a958e', '#6e6a64'], ears: 'point', earIn: '#3a3632', muzzle: '#f6f4f0', mrx: 15, mry: 12, wear: { kind: 'tee', a: '#2fa79a', b: '#1d7a70' },
        marks: '<path d="M24 62C30 54 50 54 60 62C70 54 90 54 96 62C92 72 76 74 66 68L60 66 54 68C44 74 28 72 24 62Z" fill="#2e2a26"/><path d="M38 50Q60 44 82 50" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7" fill="none"/>', eyes: { iris: '#7a5a3a', lash: true }, front: hib(86, 40, .8, '#ff7ab0') })),
    extra({ id: 'carlos', name: 'Carlos', animal: 'jaguar', nl: 'jaguar', city: 'Antigua', cc: 'GT', age: 38, female: false, trait: 'Groeide op op een koffiefinca bij Antigua. Vertelt graag over vroeger, toen ze nog op straat voetbalden.', color: '#d9a020' },
      beast({ fur: ['#ffe2a0', '#f2b94a', '#cf8a22'], ears: 'round', earIn: '#3a2a1a', cheeks: '#fff8ec', nose: 'cat', noseCol: '#c9576a', wear: { kind: 'poncho', a: '#c9283b', b: '#a01f30', trim: '#1f4f9e', trim2: '#ffd23f' },
        marks: '<g fill="none" stroke="#4a2e14" stroke-width="2" opacity=".8"><circle cx="34" cy="48" r="3.4"/><circle cx="86" cy="48" r="3.4"/><circle cx="26" cy="64" r="3"/><circle cx="94" cy="64" r="3"/><circle cx="46" cy="38" r="2.8"/><circle cx="74" cy="38" r="2.8"/></g>' + SPOTS('#4a2e14', [[60, 40], [53, 45, 1.3], [67, 45, 1.3], [24, 76, 1.3], [96, 76, 1.3]]), front: ACC.whisk('#7a5a30') })),
    extra({ id: 'doctora', name: 'Doctora', animal: 'búho', nl: 'uil', city: 'Guadalajara', cc: 'MX', age: 50, female: true, trait: 'Huisarts. Luistert geduldig, stelt precies de goede vragen en schrijft altijd veel water drinken voor.', color: '#5ec2e8' },
      bird({ fur: ['#e8d2b4', '#b98f62', '#8a6440'], hook: true, beak: '#f2c75a', beak2: '#c99a2a', wear: { kind: 'coat', a: '#ffffff', b: '#e6eef2' },
        back: '<path d="M26 44L22 22 40 34Z" fill="#8a6440"/><path d="M94 44L98 22 80 34Z" fill="#8a6440"/>',
        marks: '<circle cx="42" cy="63" r="14" fill="#f6ead8"/><circle cx="78" cy="63" r="14" fill="#f6ead8"/>' + SPOTS('#8a6440', [[50, 90, 1.3], [60, 93, 1.3], [70, 90, 1.3]]), eyes: { ring: '#f2b134', iris: '#5a3a1a' }, front: ACC.glasses('#5a6a7a') })),
    extra({ id: 'entrevistadora', name: 'Entrevistadora', animal: 'venado cola blanca', nl: 'witstaarthert', city: 'Ciudad de México', cc: 'MX', age: 42, female: true, trait: 'HR-manager. Vriendelijk maar zakelijk, gebruikt altijd «usted».', color: '#3a4a6a' },
      beast({ fur: ['#e8c098', '#c48c5a', '#94603a'], ears: 'side', earIn: '#f2d0c0', muzzle: '#fbf2e8', mrx: 13, mry: 13, my: 86, wear: { kind: 'blazer', a: '#2a3a5a', b: '#1a2640', trim: '#3a4e74', inner: '#f2e8f8', pin: '#e8344e' }, eyes: { lash: true, r: 7.4 }, front: ACC.earrings('#e6e6ee'), top: HAT.bun('#94603a') })),
    extra({ id: 'yarisel', name: 'Yarisel', animal: 'rana dorada', nl: 'Panamese gouden kikker', city: 'Ciudad de Panamá', cc: 'PA', age: 30, female: true, trait: 'Werkt bij de balie voor verloren voorwerpen. Vindt alles terug, als je het goed beschrijft.', color: '#f2b134' },
      frog({ fur: ['#ffe680', '#ffc93a', '#d99a10'], iris: '#3a2a10', lash: true, belly: '#fff6c8', wear: { kind: 'shirt', a: '#1f4f9e', b: '#173a78', trim: '#3a6ac0' }, marks: SPOTS('#2a1e10', [[34, 70, 2.6], [86, 70, 2.4], [60, 58, 2.2], [46, 62, 1.6], [74, 62, 1.6]]), front: ACC.badge('#fff8e0') })),
    extra({ id: 'yokasta', name: 'Yokasta', animal: 'manatí', nl: 'zeekoe', city: 'Santo Domingo', cc: 'DO', age: 35, female: true, trait: 'Dominicaanse die je de Zona Colonial laat zien. Hartelijk, praat met iedereen op straat.', color: '#1f4f9e' },
      beast({ fur: ['#c9d2dc', '#97a4b4', '#6a7888'], ears: 'none', muzzle: '#b8c2ce', mrx: 20, mry: 13, my: 82, nose: 'dots', noseCol: '#4a5868', wear: { kind: 'flowers', a: '#e8344e', b: '#b8233a', f1: '#fff', f2: '#ffd23f' }, eyes: { lash: true, r: 6.4, dx: 19 }, mouthY: 88, front: ACC.whisk('#6a7888') + ACC.earrings() + hib(84, 40, 1, '#f7941d') })),
    extra({ id: 'paola', name: 'Paola', animal: 'ardilla', nl: 'eekhoorn', city: 'Ciudad de México', cc: 'MX', age: 30, female: true, trait: 'Vrolijk en hartelijk. Viert oud en nieuw met haar hele familie, met twaalf druiven en veel wensen.', color: '#e2452f' },
      beast({ fur: ['#f6b884', '#e2793e', '#b8521e'], ears: 'point', earIn: '#f6c0a0', muzzle: '#fff1e2', mrx: 14, mry: 11.5, nose: 'cat', noseCol: '#8a3a2a', wear: { kind: 'tee', a: '#c9283b', b: '#a01f30', trim: '#ffd23f' }, eyes: { lash: true },
        back: '<path d="M88 120C112 110 118 80 104 64C100 80 96 96 86 104Z" fill="#c9622a"/>', front: ACC.earrings() + ACC.bow('#ffd23f') })),
    extra({ id: 'tio-beto', name: 'Tío Beto', animal: 'tejón (coatí)', nl: 'neusbeer', city: 'Ciudad de México', cc: 'MX', age: 58, female: false, trait: 'De oom met de grote snor. Telt hardop af, roept «¡aguas!» en vertelt elk jaar dezelfde grap.', color: '#8a5a2c' },
      beast({ fur: ['#c9a27a', '#9a7048', '#6a4a2c'], ears: 'tiny', earIn: '#3a2a1a', muzzle: '#f2e2cc', mrx: 11, mry: 14, my: 85, wear: { kind: 'shirt', a: '#f2f2f2', b: '#d8d8d8', trim: '#fff', inner: '#e8344e', btn: '#999' },
        marks: '<path d="M30 58C36 52 46 54 50 60M90 58C84 52 74 54 70 60" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".7"/>', front: ACC.mustache('#4a3020'), mouthY: 89, line: '#4a3020', top: HAT.sombrero() })),
    extra({ id: 'lupita', name: 'Lupita', animal: 'guacamaya', nl: 'ara (papegaai)', city: 'Oaxaca', cc: 'MX', age: 28, female: true, trait: 'Oaxaqueña die van roddels houdt. Wil altijd het hele verhaal weten, met alle details.', color: '#e8344e' },
      bird({ fur: ['#ff8a7a', '#e8344e', '#b51d3a'], hook: true, beak: '#f6efe0', beak2: '#2a2a33', wear: { kind: 'flowers', a: '#1f1f2a', b: '#101018', f1: '#e8344e', f2: '#ffd23f' },
        marks: '<path d="M30 56C34 50 50 50 52 60C50 70 34 72 30 64Z" fill="#fff"/><path d="M90 56C86 50 70 50 68 60C70 70 86 72 90 64Z" fill="#fff"/><path d="M34 60h6M33 64h7M86 60h-6M87 64h-7" stroke="#e8344e" stroke-width=".8"/>', front: ACC.earrings() + flower(32, 38, '#ffd23f', 3, '#f7941d') + flower(42, 33, '#5ec2e8', 2.4) })),
    extra({ id: 'mauricio', name: 'Guía Mauricio', animal: 'rana de ojos rojos', nl: 'roodoogmakikikker', city: 'Monteverde', cc: 'CR', age: 40, female: false, trait: 'Natuurgids in het nevelwoud. Ziet elk diertje in de bomen en fluistert zodat je ze niet wegjaagt.', color: '#3a9d5d' },
      frog({ fur: ['#b8f08a', '#5cc44a', '#2f8a32'], iris: '#e8344e', ring: '#ff4a3a', belly: '#e8f8c8', wear: { kind: 'vest', a: '#6e8a4a', b: '#4e6a34', trim: '#a8844e' }, hat: '<g transform="translate(0 -14)">' + HAT.safari() + '</g>' })),
    extra({ id: 'turista', name: 'Turista', animal: 'oveja', nl: 'schaap', city: 'op vakantie', cc: 'CR', age: 45, female: false, trait: 'Toerist met een grote zonnehoed en een camera. Stelt dezelfde vragen als jij.', color: '#f2b134' },
      beast({ fur: ['#4a4450', '#2e2a34', '#1c1a22'], ears: 'side', earIn: '#5a5262', muzzle: '#3e3846', wear: { kind: 'flowers', a: '#5ec2e8', b: '#2f9ccf', f1: '#ffd23f', f2: '#fff' }, noseCol: '#151018',
        marks: '<g fill="#fbf8f2">' + [[30, 50], [38, 40], [50, 35], [62, 34], [74, 36], [84, 42], [90, 52], [26, 62], [94, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9"/>`).join('') + '</g>', hat: '<g transform="translate(0 -6)">' + HAT.sun() + '</g>', front: ACC.camera(), eyes: { col: '#120e14' }, line: '#e8c8d0' })),
    extra({ id: 'ana-lucia', name: 'Ana Lucía', animal: 'quetzal', nl: 'quetzal', city: 'Ciudad de Guatemala', cc: 'GT', age: 32, female: true, trait: 'Collega op kantoor die alles als eerste weet. Begint elk verhaal met «dizque…».', color: '#1f9e6a' },
      bird({ fur: ['#7ef0b0', '#22b876', '#0e7a4e'], beak: '#ffd23f', beak2: '#d9a010', wear: { kind: 'blazer', a: '#c9283b', b: '#a01f30', trim: '#e8344e', inner: '#fff' },
        back: '<path d="M44 34C46 18 56 10 60 6C64 10 74 18 76 34Z" fill="#0e7a4e"/>', marks: '<path d="M26 86C36 98 84 98 94 86C88 98 74 102 60 102C46 102 32 98 26 86Z" fill="#e8344e"/>', eyes: { lash: true }, front: ACC.phone() })),
    extra({ id: 'daniela', name: 'Daniela', animal: 'lobo marino', nl: 'zeeleeuw', city: 'Galápagos', cc: 'EC', age: 27, female: true, trait: 'Vrijwilligster op de Galápagos. Ruimt stranden op en weet alles van schildpadden.', color: '#3a7a8a' },
      beast({ fur: ['#c9b8a4', '#9c8670', '#6e5a48'], ears: 'none', muzzle: '#d9cab8', mrx: 17, mry: 12, my: 82, nose: 'bear', noseCol: '#2a1e16', ny: 74, wear: { kind: 'tee', a: '#3a9d5d', b: '#2a7a44', trim: '#ffd23f' }, eyes: { r: 8, dx: 18 }, front: ACC.whisk('#5a4a3a') + ACC.badge(), hat: HAT.cap('#3a7a8a') })),
    extra({ id: 'fer', name: 'Fer', animal: 'tlacuache', nl: 'opossum', city: 'Guadalajara', cc: 'MX', age: 26, female: false, trait: 'Tapatío, grappig en nieuwsgierig. Wil alles weten over je date en roept «¡no manches!».', color: '#7b68d8' },
      beast({ fur: ['#f6f2ee', '#d8d0c8', '#aaa096'], ears: 'round', earIn: '#2e2a30', muzzle: '#fbf8f4', mrx: 13, mry: 13, nose: 'cat', noseCol: '#e87a98', wear: { kind: 'shirt', a: '#2a2a33', b: '#18181f', trim: '#3a3a46', inner: '#ffd23f' },
        marks: '<path d="M30 58C34 52 46 52 50 60C48 68 36 70 30 64Z" fill="#4a4450" opacity=".35"/><path d="M90 58C86 52 74 52 70 60C72 68 84 70 90 64Z" fill="#4a4450" opacity=".35"/>', front: ACC.whisk('#9a9088') })),
    extra({ id: 'moderadora', name: 'Moderadora', animal: 'puma', nl: 'poema', city: 'Cusco', cc: 'PE', age: 44, female: true, trait: 'Leidt het debat. Geeft iedereen netjes het woord en vat helder samen.', color: '#c98a3a' },
      beast({ fur: ['#f2d2a4', '#d4a46a', '#a87840'], ears: 'round', earIn: '#5a3a20', cheeks: '#fbf2e4', nose: 'cat', noseCol: '#c97a6a', wear: { kind: 'blazer', a: '#3a2a5a', b: '#26183e', trim: '#4e3a74', inner: '#f2b134' }, eyes: { lash: true, iris: '#8a6a2a' }, front: ACC.mic() + ACC.whisk('#8a6440') })),
    extra({ id: 'quispe', name: 'Prof. Quispe', animal: 'vicuña', nl: 'vicuña', city: 'Cusco', cc: 'PE', age: 61, female: false, trait: 'Professor die opkomt voor de Quechua-cultuur. Spreekt rustig en kiest zijn woorden zorgvuldig.', color: '#c9283b' },
      beast({ fur: ['#f2c48a', '#d99a52', '#a8702e'], ears: 'point', earIn: '#f6d6b0', muzzle: '#fff6ea', mrx: 14, mry: 12, wear: { kind: 'poncho', a: '#c9283b', b: '#a01f30', trim: '#2fa79a', trim2: '#ffd23f' }, hat: HAT.chullo('#e8344e', '#ffd23f'), front: ACC.glasses('#5a4a3a'), nose: 'rabbit', noseCol: '#5a3a2a' })),
    extra({ id: 'huaman', name: 'Sr. Huamán', animal: 'taruca', nl: 'Andeshert', city: 'Cusco', cc: 'PE', age: 55, female: false, trait: 'Heeft een winkeltje in Cusco. Blij met toeristen, maar maakt zich zorgen over de drukte.', color: '#6a4a2c' },
      beast({ fur: ['#d6c2a6', '#ac926e', '#7e6646'], ears: 'side', earIn: '#ecdccc', muzzle: '#f6eee2', mrx: 13, mry: 13, my: 86, wear: { kind: 'vest', a: '#f2f2f2', b: '#dcdcdc', trim: '#6a4a2c' }, hat: '<g transform="translate(0 2)"><ellipse cx="60" cy="36" rx="34" ry="6" fill="#3a2a1a"/><path d="M40 36C40 20 50 16 60 16S80 20 80 36Z" fill="#4a3826"/><path d="M40 31H80V35H40Z" fill="#c9283b"/></g>', front: ACC.mustache('#4a3a2a'), mouthY: 89 })),
    extra({ id: 'valentina-co', name: 'Valentina', animal: 'nutria', nl: 'otter', city: 'Bogotá', cc: 'CO', age: 29, female: true, trait: 'Droomt hardop: als ze de loterij won, kocht ze een koffiefinca in de Eje Cafetero.', color: '#8a5a3c' },
      beast({ fur: ['#c49a74', '#94683e', '#6a4424'], ears: 'tiny', earIn: '#4a2e18', muzzle: '#f2e2cc', mrx: 17, mry: 12, my: 83, wear: { kind: 'tee', a: '#ffd23f', b: '#f2a81d', trim: '#1f4f9e' }, eyes: { lash: true }, front: ACC.whisk('#5a3a20') + ACC.earrings() })),
    extra({ id: 'diego-pe', name: 'Diego', animal: 'pingüino de Humboldt', nl: 'humboldtpinguïn', city: 'Lima', cc: 'PE', age: 31, female: false, trait: 'Limeño die getuige is op de bruiloft van zijn broer, en daar behoorlijk zenuwachtig over is.', color: '#2a2a33' },
      bird({ fur: ['#5a5a66', '#33333d', '#1e1e26'], beak: '#3a3a44', beak2: '#e8a0a8', wear: { kind: 'blazer', a: '#2a2a33', b: '#18181f', trim: '#3a3a46', inner: '#fff', pin: '#fff' },
        marks: '<path d="M30 52C40 40 80 40 90 52C96 70 86 94 60 96C34 94 24 70 30 52Z" fill="#fbf8f2"/><path d="M28 52C36 38 52 34 60 34C68 34 84 38 92 52" fill="none" stroke="#fbf8f2" stroke-width="3"/>', eyes: { col: '#1a1018' }, front: '<path d="M52 100L60 104 68 100 68 108 60 104 52 108Z" fill="#2a2a33"/>' })),
    extra({ id: 'wara', name: 'Wara', animal: 'flamenco andino', nl: 'Andesflamingo', city: 'Uyuni', cc: 'BO', age: 30, female: true, trait: 'Aymara-gids op de zoutvlakte. Doet de tocht al acht jaar en raakt nog elke zonsopgang ontroerd.', color: '#f0789f' },
      bird({ fur: ['#ffd0dc', '#f78fb0', '#d95a86'], hook: true, beak: '#fbe3d2', beak2: '#2a2a33', wear: { kind: 'poncho', a: '#7b3fa0', b: '#5a2a7a', trim: '#ffd23f', trim2: '#2fa79a' },
        marks: '<path d="M30 58C34 52 48 52 51 60C49 68 35 70 30 64Z" fill="#fff" opacity=".55"/><path d="M90 58C86 52 72 52 69 60C71 68 85 70 90 64Z" fill="#fff" opacity=".55"/>', hat: HAT.chullo('#2fa79a', '#ffd23f'), eyes: { lash: true, iris: '#c9762a' } })),
    extra({ id: 'arami', name: 'Arami', animal: 'aguará guazú', nl: 'manenwolf', city: 'Asunción', cc: 'PY', age: 26, female: true, trait: 'Paraguayaanse die van Spaans naar Guaraní springt in één zin. Heeft altijd een koude tereré klaarstaan.', color: '#d9642a' },
      beast({ fur: ['#f9b078', '#e0712f', '#b04c18'], ears: 'big', earIn: '#fff1e0', muzzle: '#4a2f24', mrx: 13, mry: 11.5, noseCol: '#160e0a', line: '#f2c8a8', wear: { kind: 'stripes', a: '#d52b1e', b: '#a81f16', trim: '#fff', trim2: '#0038a8' },
        marks: '<path d="M38 96C46 104 74 104 82 96C76 102 68 104 60 104C52 104 44 102 38 96Z" fill="#fff6ea"/><path d="M52 30C56 20 64 20 68 30C64 27 56 27 52 30Z" fill="#3a2218"/>', eyes: { lash: true, iris: '#8a5a1e' }, front: ACC.earrings() + flower(88, 40, '#fff', 2.6, '#ffd23f') })),
    extra({ id: 'genesis', name: 'Génesis', animal: 'turpial', nl: 'troepiaal', city: 'Caracas', cc: 'VE', age: 34, female: true, trait: 'Radiomaakster in Caracas die elk nieuwtje als eerste hoort. Zegt er altijd bij of het al bevestigd is.', color: '#f59a1b' },
      bird({ fur: ['#ffd27a', '#f59a1b', '#c96f0a'], beak: '#c8ccd4', beak2: '#7a808c', wear: { kind: 'blazer', a: '#1f4f9e', b: '#173a78', trim: '#ffd23f', inner: '#fff' },
        marks: '<path d="M26 60C27 36 44 24 60 24C76 24 93 36 94 60C88 50 76 46 60 46C44 46 32 50 26 60Z" fill="#1e1e26"/><ellipse cx="42" cy="64" rx="10" ry="9" fill="#3b82d6" opacity=".6"/><ellipse cx="78" cy="64" rx="10" ry="9" fill="#3b82d6" opacity=".6"/><path d="M24 92C30 86 38 88 40 96C34 100 26 98 24 92Z M96 92C90 86 82 88 80 96C86 100 94 98 96 92Z" fill="#fff" opacity=".85"/>',
        eyes: { lash: true, iris: '#e8a010' }, front: ACC.mic() + ACC.earrings('#ffd23f') }))
  );

  /* ---------- «Op reis»: een eigen personage voor elk land dat er nog geen had (content/landen-praten.js) ---------- */
  const brow0 = (col, y = 50) => `<path d="M38 ${y + .5}Q44 ${y - 2.5} 50 ${y}M82 ${y + .5}Q76 ${y - 2.5} 70 ${y}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;
  const tuft = (col) => `<path d="M29 14l-3-9 7 6ZM91 14l3-9-7 6Z" fill="${col}"/>`;
  CAST.push(
    extra({ id: 'marisol', name: 'Marisol', animal: 'torogoz', nl: 'torogoz (motmot)', city: 'San Salvador', cc: 'SV', age: 27, female: true, trait: 'Verkoopt de lekkerste pupusas van de wijk. Noemt iedereen «vos» en geeft er altijd curtido bij.', color: '#1fa7a0' },
      bird({ fur: ['#9aeedd', '#35b8a6', '#1b7f78'], beak: '#3a3a44', beak2: '#1e1e26', wear: { kind: 'flowers', a: '#1f4f9e', b: '#173a78', f1: '#fff', f2: '#ffd23f' },
        marks: '<path d="M28 54C32 34 46 26 60 26C74 26 88 34 92 54C82 44 72 41 60 41C48 41 38 44 28 54Z" fill="#2f7fd6"/><path d="M25 63C31 60 47 60 53 63C47 67 31 67 25 63ZM95 63C89 60 73 60 67 63C73 67 89 67 95 63Z" fill="#1e1e26" opacity=".85"/><path d="M40 92C48 100 72 100 80 92C74 99 66 101 60 101C54 101 46 99 40 92Z" fill="#e88a3a"/>',
        eyes: { lash: true, iris: '#b03a2a' }, front: ACC.earrings('#ffd23f') })),
    extra({ id: 'josue', name: 'Josué', animal: 'colibrí esmeralda', nl: 'Hondurese smaragdkolibrie', city: 'Tegucigalpa', cc: 'HN', age: 23, female: false, trait: 'Student en gids in zijn vrije tijd. Praat snel, lacht veel en weet waar de beste baleadas zijn.', color: '#2fa77a' },
      bird({ fur: ['#b6f2c4', '#3fc07e', '#1f8a58'], long: true, beak: '#3a3a44', beak2: '#1e1e26', wear: { kind: 'tee', a: '#00bce4', b: '#0090b8', trim: '#fff' },
        marks: '<path d="M40 90C48 98 72 98 80 90C76 100 68 102 60 102C52 102 44 100 40 90Z" fill="#3aa0e8"/><path d="M30 50C36 34 48 28 60 28C72 28 84 34 90 50C80 42 70 40 60 40C50 40 40 42 30 50Z" fill="#2a9a66" opacity=".7"/>', eyes: { iris: '#3a2a1a' }, hat: HAT.cap('#0090b8') })),
    extra({ id: 'xiomara', name: 'Xiomara', animal: 'mono congo', nl: 'brulaap', city: 'Granada', cc: 'NI', age: 35, female: true, trait: 'Heeft een pulpería bij het meer. Kent de hele buurt en hoort alles als eerste.', color: '#7a4a2a' },
      beast({ fur: ['#8a6248', '#5c3c28', '#3a2418'], ears: 'round', earIn: '#c99a80', muzzle: '#e8c8a8', mrx: 16, mry: 13, my: 82, noseCol: '#2a1810', line: '#3a2014',
        marks: '<path d="M33 60C33 46 45 42 60 42C75 42 87 46 87 60C87 72 78 76 60 76C42 76 33 72 33 60Z" fill="#e8c8a8"/>' + brow0('#3a2418'), eyes: { lash: true, iris: '#6a3a1a' },
        wear: { kind: 'stripes', a: '#3a78d6', b: '#1f4f9e', trim: '#fff', trim2: '#ffd23f' }, front: ACC.earrings() + flower(88, 38, '#fff', 2.6, '#ffd23f') })),
    extra({ id: 'yunior', name: 'Yunior', animal: 'tocororo', nl: 'Cubaanse trogon', city: 'La Habana', cc: 'CU', age: 30, female: false, trait: 'Rijdt in een almendrón uit 1956 door Havana. Kent bij elk gebouw een verhaal en bij elk verhaal een grap.', color: '#d8343f' },
      bird({ fur: ['#ffffff', '#eef0f4', '#c8ccd6'], beak: '#e8a23a', beak2: '#b8741a', wear: { kind: 'shirt', a: '#fbfbfd', b: '#dfe2ea', trim: '#fff', inner: '#fbfbfd', btn: '#8a8f9c' },
        marks: '<path d="M26 58C27 36 44 24 60 24C76 24 93 36 94 58C86 48 74 44 60 44C46 44 34 48 26 58Z" fill="#2f5fc8"/><path d="M36 92C46 102 74 102 84 92C78 100 68 103 60 103C52 103 42 100 36 92Z" fill="#d8343f"/>', eyes: { iris: '#b02a2a' }, hat: HAT.sun() })),
    extra({ id: 'carmen', name: 'Carmen', animal: 'lince ibérico', nl: 'Iberische lynx', city: 'Madrid', cc: 'ES', age: 32, female: true, trait: 'Madrileense die elke avond «de cañas» gaat. Zegt «vale» na elke zin en praat met vosotros.', color: '#c98a3a' },
      beast({ fur: ['#f6dcae', '#dba968', '#a8763a'], ears: 'point', earIn: '#fff4e0', back: tuft('#2a1a12'), cheeks: '#fffaf0', nose: 'cat', noseCol: '#c9576a',
        marks: SPOTS('#5a3a1a', [[36, 46, 2], [84, 46, 2], [46, 38, 1.8], [74, 38, 1.8], [60, 36, 1.8], [27, 62, 1.6], [93, 62, 1.6]]) + '<path d="M22 84C16 88 14 96 18 102C24 98 28 92 28 86ZM98 84C104 88 106 96 102 102C96 98 92 92 92 86Z" fill="#fffaf0"/><path d="M19 90l5 2M17 96l6 0M101 90l-5 2M103 96l-6 0" stroke="#2a1a12" stroke-width="1.3" stroke-linecap="round"/>',
        eyes: { lash: true, iris: '#9a8a1e' }, wear: { kind: 'blazer', a: '#c9283b', b: '#a01f30', trim: '#e0485a', inner: '#fff', pin: '#ffd23f' }, front: ACC.whisk('#7a5a30') + ACC.earrings() })),
    extra({ id: 'santiago-gq', name: 'Santiago', animal: 'loro gris', nl: 'grijze roodstaartpapegaai', city: 'Malabo', cc: 'GQ', age: 45, female: false, trait: 'Leraar op het eiland Bioko. Spreekt Spaans, Fang en Pichi door elkaar en legt alles rustig uit.', color: '#8a909d' },
      bird({ fur: ['#eceef2', '#b4b9c4', '#7f8592'], hook: true, beak: '#3a3a44', beak2: '#1e1e26', wear: { kind: 'shirt', a: '#3a9d5d', b: '#2a7a44', trim: '#5cc47a', inner: '#fff', btn: '#fff' },
        marks: '<path d="M30 58C34 50 50 50 52 62C50 72 34 74 30 66Z" fill="#fff"/><path d="M90 58C86 50 70 50 68 62C70 72 86 74 90 66Z" fill="#fff"/><g fill="none" stroke="#7f8592" stroke-width="1.1" opacity=".6"><path d="M40 36q4-3 8 0M56 32q4-3 8 0M72 36q4-3 8 0M48 42q4-3 8 0M64 42q4-3 8 0"/></g>',
        eyes: { iris: '#e8d87a' }, front: ACC.glasses('#4a3a2a') })),
    extra({ id: 'brenda', name: 'Brenda', animal: 'correcaminos', nl: 'renkoekoek (roadrunner)', city: 'Los Ángeles', cc: 'US', age: 26, female: true, trait: 'Geboren in East L.A., ouders uit Jalisco. Wisselt midden in een zin van Spaans naar Engels en terug.', color: '#b8743a' },
      bird({ fur: ['#f2e2c4', '#c9a878', '#8f7048'], beak: '#5a4a3a', beak2: '#2e241a', wear: { kind: 'tee', a: '#9a6ad8', b: '#7046b0', trim: '#ffd23f' },
        back: '<path d="M44 34C40 20 46 10 52 4C54 12 56 18 58 14C60 8 64 6 68 4C68 14 72 20 76 34Z" fill="#4a3a2a"/>',
        marks: '<g stroke="#5a4630" stroke-width="1.6" stroke-linecap="round" opacity=".7"><path d="M38 40l2 6M48 36l1 7M60 35v7M72 36l-1 7M82 40l-2 6"/></g><path d="M86 60C92 58 98 60 100 64C96 66 90 66 86 64Z" fill="#e8743a"/><path d="M34 60C28 58 22 60 20 64C24 66 30 66 34 64Z" fill="#3a8ad8"/>',
        eyes: { lash: true, iris: '#c98a1e' }, front: ACC.phone() + ACC.earrings('#ffd23f') }))
  );

  /* ---------- jouw eigen personage (kies je in Perfil; staat rechts bij jouw zinnen in de dialogen) ---------- */
  const me = (meta, art) => Object.assign({ player: true, age: null, cc: 'NL', city: 'jij' }, meta, art);
  const PLAYERS = [
    me({ tail: 'fox', id: 'p-zorro', name: 'Vos', animal: 'zorro', nl: 'vos', color: '#e8590f', trait: 'Slim en nieuwsgierig.' },
      beast({ fur: ['#ffc48a', '#f28430', '#c95a14'], ears: 'point', earIn: '#3a2416', cheeks: '#fff6ec', nose: 'bear', noseCol: '#2a1a12', wear: { kind: 'tee', a: '#f28c1b', b: '#d96a0a', trim: '#fff4e6' }, front: ACC.whisk('#8a5a30') })),
    me({ tail: 'cat', id: 'p-gato', name: 'Kat', animal: 'gato', nl: 'kat', color: '#6a7a9a', trait: 'Rustig en een tikje eigenwijs.' },
      beast({ fur: ['#d8dce4', '#a8aebc', '#7a8090'], ears: 'point', earIn: '#f2b6c4', cheeks: '#f6f6f8', nose: 'cat', noseCol: '#e87a98', wear: { kind: 'stripes', a: '#2f6fb5', b: '#1f4f8e', trim: '#f28c1b', trim2: '#fff' },
        marks: '<g fill="none" stroke="#6a7080" stroke-width="2.4" stroke-linecap="round" opacity=".8"><path d="M60 33V43M53 34.5 54.5 42.5M67 34.5 65.5 42.5M24 62h7M96 62h-7M25 68h6M95 68h-6"/></g>', front: ACC.whisk('#6a7080') })),
    me({ id: 'p-perro', name: 'Hond', animal: 'perro', nl: 'hond', color: '#d9a020', trait: 'Trouw, vrolijk en altijd in voor een wandeling.' },
      beast({ fur: ['#ffe2a8', '#f2bc5a', '#cf8e2a'], ears: 'none', muzzle: '#fff4dc', mrx: 15, mry: 12, wear: { kind: 'shirt', a: '#3a9d5d', b: '#2a7a44', trim: '#5cc47a' },
        back: '<path d="M26 40C14 44 10 64 16 78C22 84 30 80 32 70C34 58 34 48 30 40Z" fill="#b8741e"/><path d="M94 40C106 44 110 64 104 78C98 84 90 80 88 70C86 58 86 48 90 40Z" fill="#b8741e"/>' })),
    me({ id: 'p-conejo', name: 'Konijn', animal: 'conejo', nl: 'konijn', color: '#f0789f', trait: 'Snel en enthousiast.' },
      beast({ fur: ['#ffffff', '#f2eeee', '#d8cfd2'], ears: 'long', earIn: '#f6b6c8', muzzle: '#fff', mrx: 13, mry: 10, nose: 'rabbit', noseCol: '#e87a98', wear: { kind: 'flowers', a: '#c28be8', b: '#9a5ec8', f1: '#fff', f2: '#ffd23f' }, eyes: { lash: true }, front: ACC.whisk('#b8a8ae') })),
    me({ id: 'p-panda', name: 'Panda', animal: 'panda', nl: 'panda', color: '#2a2a33', trait: 'Relaxed en altijd trek.' },
      beast({ fur: ['#ffffff', '#f2f0ee', '#d6d2cc'], ears: 'round', earIn: '#2a2a33', muzzle: '#fff', mrx: 14, mry: 10, wear: { kind: 'tee', a: '#3a9d5d', b: '#2a7a44', trim: '#ffd23f' },
        back: '<circle cx="29" cy="36" r="12" fill="#2a2a33"/><circle cx="91" cy="36" r="12" fill="#2a2a33"/>', marks: '<ellipse cx="41" cy="65" rx="11" ry="13" transform="rotate(25 41 65)" fill="#2a2a33"/><ellipse cx="79" cy="65" rx="11" ry="13" transform="rotate(-25 79 65)" fill="#2a2a33"/>', eyes: { col: '#120e14', iris: '#4a3a4a' } })),
    me({ look: { hat: 'cap' }, id: 'p-tortuga', name: 'Schildpad', animal: 'tortuga', nl: 'schildpad', color: '#3a9d5d', trait: 'Langzaam maar zeker: elke dag een beetje.' },
      beast({ fur: ['#c8eca8', '#86c66a', '#4e9440'], ears: 'none', wear: { kind: 'tee', a: '#8a5a2c', b: '#6a4220', trim: '#ffd23f' }, under: '<g fill="none" stroke="#c9a46a" stroke-width="1.6"><path d="M30 104l10 6 10-6 10 6 10-6 10 6 10-6"/></g>', marks: SPOTS('#5e9a4a', [[36, 44, 2.4], [84, 44, 2.4], [60, 38, 2], [26, 70, 1.8], [94, 70, 1.8]]), nose: 'dots', noseCol: '#3a6a2a', line: '#3a6a2a' })),
    me({ id: 'p-loro', name: 'Papegaai', animal: 'loro', nl: 'papegaai', color: '#3fb88a', trait: 'Herhaalt alles hardop, perfect om te oefenen.' },
      bird({ fur: ['#a8f0a0', '#4cc45a', '#2a8a3a'], hook: true, beak: '#fff2c8', beak2: '#3a3a44', wear: { kind: 'tee', a: '#f28c1b', b: '#d96a0a', trim: '#fff4e6' },
        back: '<path d="M50 34C48 22 54 14 60 10C60 18 64 24 68 32Z" fill="#ffd23f"/>', marks: '<path d="M40 34C46 30 74 30 80 34C74 40 46 40 40 34Z" fill="#ffd23f" opacity=".85"/>' })),
    me({ tail: 'axo', id: 'p-ajolote', name: 'Axolotl', animal: 'ajolote azul', nl: 'blauwe axolotl', color: '#5ec2e8', trait: 'Een vriendje van Lupe, maar dan blauw.' },
      ({
        defs: fur('#e2f4fc', '#a8dcf2', '#6ab8de') + lin('o', '#f28c1b', '#d96a0a') + `<linearGradient id="ID-g" x1="0" y1="0" x2="0" y2="-33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2a8ac0"/><stop offset="1" stop-color="#7ed0f0"/></linearGradient>`,
        draw: u => CAST.find(c => c.id === 'abuela-lupe').draw(u).replace(/<g transform="translate\(36 40\)">.*?<\/g><\/g>|<g fill="none" stroke="#b08a3a"[^]*?<\/g>|<circle cx="(42|78)" cy="66" r="10" fill="#fff" opacity=".12"\/>|<g class="c-eyes">[^]*?<\/g>\s*<path d="M33 68.5[^"]*"[^>]*\/>/g, '') .replace('<g class="m-closed"', eyes({ dx: 18, y: 64, r: 7.4 }) + '<g class="m-closed"')
      }))
  ];

  /* ---------- meer keuze: dieren die passen bij de landen van de cursussen ----------
     group = bij welke taal/streek het dier hoort (Perfil toont de groep van je cursus bovenaan). */
  const mir = d => d + `<g transform="translate(120 0) scale(-1 1)">${d}</g>`; // spiegelen: links tekenen, rechts erbij
  const flop = (col, ink) => mir(`<path d="M26 40C14 44 10 64 16 78C22 84 30 80 32 70C34 58 34 48 30 40Z" fill="${col}" stroke="${ink}" stroke-width="1.3" stroke-linejoin="round"/><path d="M19 56C17 64 18 72 21 77" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".18"/>`);
  const brow = (col, y = 52) => `<path d="M34 ${y + .5}Q41 ${y - 3} 48 ${y}M86 ${y + .5}Q79 ${y - 3} 72 ${y}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;
  const spikes = (() => {
    const ring = (R1, R2, n) => Array.from({ length: n + 1 }, (_, i) => { const a = (166 + i * (208 / n)) * Math.PI / 180, R = i % 2 ? R1 : R2; return `${(60 + R * Math.cos(a)).toFixed(1)} ${(66 + R * Math.sin(a) * .98).toFixed(1)}`; }).join('L');
    return `<path d="M${ring(55, 45, 26)}Z" fill="#6e4a30" stroke="#3e2818" stroke-width="1.2" stroke-linejoin="round"/><path d="M${ring(47, 40, 22)}Z" fill="#8f6642"/><path d="M${ring(40, 35, 18)}Z" fill="#b08a5e"/>`;
  })();
  const fluff = (pts, extra = '') => `<g fill="URL_F">${pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g>` + extra;
  const curls = pts => `<g fill="none" stroke="#000" stroke-width="1" stroke-linecap="round" opacity=".13">${pts.map(([x, y]) => `<path d="M${x - 4} ${y}a4.5 4.5 0 0 1 8-2"/>`).join('')}</g>`;
  const rosette = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#4a2e14" stroke-width="2" opacity=".8"/><circle cx="${x}" cy="${y}" r="${(r * .3).toFixed(1)}" fill="#a8641c" opacity=".7"/>`;
  PLAYERS.push(
    // Latijns-Amerika
    me({ group: 'latam', look: { hat: 'chullo' }, id: 'p-llama', name: 'Lama', animal: 'llama', nl: 'lama', color: '#e84a7f', trait: 'Nieuwsgierig en trots, uit de Andes.' },
      beast({ fur: ['#fffaf0', '#f4e4cc', '#d8bf9a'], ears: 'big', earIn: '#e8c4a8', muzzle: '#fff8ee', mrx: 15, mry: 12.5, nose: 'rabbit', noseCol: '#5a3a2a', line: '#8a4a3a', eyes: { lash: true, iris: '#6a3a22' },
        wear: { kind: 'poncho', a: '#e84a7f', b: '#b8306a', trim: '#2fa79a', trim2: '#ffd23f' },
        marks: fluff([[42, 38, 10], [54, 31, 11], [67, 31, 11], [79, 38, 10], [60, 41, 11]]) + curls([[47, 31], [60, 26], [73, 31], [60, 40]]) })),
    me({ group: 'latam', id: 'p-capibara', name: 'Capibara', animal: 'capibara', nl: 'capibara', color: '#5aa0d8', trait: 'De rust zelve. Met een capibara erbij is alles tranquilo.' },
      beast({ fur: ['#d8b48a', '#ae8660', '#80603e'], ears: 'none', back: '<g fill="URL_F"><circle cx="31" cy="35" r="8"/><circle cx="89" cy="35" r="8"/></g><circle cx="31.5" cy="36" r="4" fill="#5c4028"/><circle cx="88.5" cy="36" r="4" fill="#5c4028"/>',
        head: 'M60 29C82 29 95 36 97 52C100 70 99 84 94 91C87 100 74 101 60 101C46 101 33 100 26 91C21 84 20 70 23 52C25 36 38 29 60 29Z',
        muzzle: '#c29c74', mrx: 21, mry: 15, my: 83, nose: 'dots', noseCol: '#3a2414', ny: 74, mouthY: 88, mw: 5, line: '#3a2414', eyes: { y: 56, dx: 21, r: 6.2 }, by: 70, bdx: 33,
        marks: '<path d="M49 71Q60 66 71 71Q72 77 60 78Q48 77 49 71Z" fill="#6a4a30"/><ellipse cx="60" cy="70.6" rx="7" ry="1.6" fill="#fff" opacity=".16"/>', noseCol2: 1, front: ACC.whisk('#5a4028'),
        wear: { kind: 'tee', a: '#7ec0ee', b: '#4f95cf', trim: '#fff' } })),
    me({ group: 'latam', tail: 'ringed', id: 'p-jaguar', name: 'Jaguar', animal: 'jaguar', nl: 'jaguar', color: '#d9a020', trait: 'Sterk en stil. De koning van de jungle.' },
      beast({ fur: ['#ffe6a8', '#f4be52', '#cf8c24'], ears: 'round', earIn: '#3a2a1a', cheeks: '#fff8ec', nose: 'cat', noseCol: '#c9576a', wear: { kind: 'tee', a: '#2fa79a', b: '#1d7a70', trim: '#ffd23f' },
        marks: rosette(34, 48, 3.6) + rosette(86, 48, 3.6) + rosette(26, 64, 3) + rosette(94, 64, 3) + rosette(47, 38, 3) + rosette(73, 38, 3) + SPOTS('#4a2e14', [[60, 40], [53, 45, 1.3], [67, 45, 1.3], [24, 76, 1.3], [96, 76, 1.3], [38, 58, 1.2], [82, 58, 1.2]]), front: ACC.whisk('#7a5a30') })),
    // Duitsland, Oostenrijk, Zwitserland
    me({ group: 'de', look: { hat: 'tirol' }, id: 'p-teckel', name: 'Teckel', animal: 'perro salchicha', nl: 'teckel', color: '#3f6b3a', trait: 'Klein, eigenwijs en dapper: een echte Dackel.' },
      beast({ fur: ['#e6a878', '#bd7040', '#8c4a24'], ears: 'none', back: flop('#7a3c1c', '#3e1e0e'), muzzle: '#f4d2ac', mrx: 13.5, mry: 13, my: 85, mouthY: 87, ny: 76, noseCol: '#22140e',
        marks: '<ellipse cx="42" cy="52" rx="4" ry="2.6" fill="#f4d2ac"/><ellipse cx="78" cy="52" rx="4" ry="2.6" fill="#f4d2ac"/>', wear: { kind: 'shirt', a: '#f6f1e6', b: '#ddd4c2', trim: '#fff', inner: '#3f6b3a', btn: '#8a7a5a' } })),
    me({ group: 'de', id: 'p-egel', name: 'Egel', animal: 'erizo', nl: 'egel', color: '#8f6642', trait: 'Een beetje stekelig van buiten, heel zacht van binnen.' },
      beast({ fur: ['#fdeed2', '#efd4a6', '#c9a470'], ears: 'tiny', earIn: '#e8a8a0', under: spikes, muzzle: '#fff8ea', mrx: 12.5, mry: 11, noseCol: '#2a1a12',
        marks: '<path d="M24 56C26 38 44 30 60 30C76 30 94 38 96 56C90 46 82 43 76 46C72 40 66 38 60 42C54 38 48 40 44 46C38 43 30 46 24 56Z" fill="#8f6642"/><path d="M36 40l3-5 2 6M50 35l3-5 2 6M65 35l3-5 2 6M79 40l3-5 2 6" fill="none" stroke="#5a3a22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>',
        wear: { kind: 'tee', a: '#c9283b', b: '#a01f30', trim: '#fff4e6' } })),
    me({ group: 'de', id: 'p-beer', name: 'Beer', animal: 'oso pardo', nl: 'bruine beer', color: '#7a5030', trait: 'Groot, goedmoedig en dol op honing. Het wapendier van Berlijn.' },
      beast({ fur: ['#b88860', '#86583a', '#5a3824'], ears: 'round', earIn: '#d9a882', muzzle: '#ecd0a8', mrx: 16, mry: 12.5, noseCol: '#22140e', marks: brow('#5a3824'), wear: { kind: 'stripes', a: '#2a2a33', b: '#18181f', trim: '#c9283b', trim2: '#ffd23f' } })),
    me({ group: 'de', id: 'p-marmot', name: 'Marmot', animal: 'marmota', nl: 'marmot', color: '#a88a68', trait: 'Fluit vrolijk over de alpenweide en houdt van een lang dutje.' },
      beast({ fur: ['#e0c8a6', '#b0906a', '#7e6446'], ears: 'tiny', earIn: '#5a4430', cheeks: '#f6e8d2', nose: 'rabbit', noseCol: '#3a2a20', ny: 76, mouthY: 84, mw: 5,
        marks: '<path d="M30 46C38 32 82 32 90 46C80 40 70 38 60 38C50 38 40 40 30 46Z" fill="#6a5038" opacity=".55"/>', front: ACC.whisk('#6a5038'),
        top: '<g class="m-closed"><path d="M56.6 87.6h6.8v4.2q0 1.4-1.4 1.4h-4q-1.4 0-1.4-1.4Z" fill="#fff" stroke="#b8a890" stroke-width=".7"/><path d="M60 87.6v5.4" stroke="#b8a890" stroke-width=".7"/></g>',
        wear: { kind: 'vest', a: '#f6f1e6', b: '#ddd4c2', trim: '#3f6b3a' } })),
    me({ group: 'de', look: { neck: 'barrel' }, id: 'p-bernard', name: 'Sint-bernard', animal: 'san bernardo', nl: 'sint-bernard', color: '#a85a2a', trait: 'Reddingshond uit de Alpen: groot, zacht en altijd bij je in de buurt.' },
      beast({ fur: ['#ffffff', '#f6f1ea', '#d8cec2'], ears: 'none', back: flop('#8a4a22', '#4a2410'), muzzle: '#ffffff', mrx: 17, mry: 13.5, my: 85, mouthY: 87, ny: 75, noseCol: '#1e1410',
        marks: mir('<path d="M21 62C19 46 30 33 50 31C56 36 56 48 53 60C51 72 44 80 34 81C27 80 22 72 21 62Z" fill="#a85a2a"/><path d="M33 46C38 42 46 42 50 46" fill="none" stroke="#7a3c18" stroke-width="1.4" stroke-linecap="round" opacity=".5"/>'),
        wear: { kind: 'tee', a: '#c9283b', b: '#a01f30', trim: '#fff' } })),
    me({ group: 'de', id: 'p-steenbok', name: 'Steenbok', animal: 'íbice', nl: 'steenbok', color: '#80603a', trait: 'Klimt overal tegenop: geen berg is te steil.' },
      beast({ fur: ['#e0c09a', '#b48e60', '#84623c'], ears: 'side', earIn: '#f0d8c0', muzzle: '#f6e8d4', mrx: 13, mry: 13, my: 86, mouthY: 88, ny: 77, noseCol: '#2a1a12',
        under: '<path d="M52 96Q60 116 68 96Z" fill="#84623c" stroke="#4a3420" stroke-width="1.1" stroke-linejoin="round"/>',
        back: mir('<path d="M46 36C44 22 36 8 18 2C16 4 16 6 18 8C28 14 32 26 34 40Z" fill="#9a8a74" stroke="#4a4034" stroke-width="1.3" stroke-linejoin="round"/><path d="M24 7l-2.5 4M30 12l-3.5 3.5M35 19l-4 2.6M38.5 27l-4.6 1.8" stroke="#4a4034" stroke-width="1.2" stroke-linecap="round" opacity=".7"/>'),
        marks: '<path d="M60 31C56 42 56 52 58 62H62C64 52 64 42 60 31Z" fill="#84623c" opacity=".4"/>', wear: { kind: 'tee', a: '#c9283b', b: '#a01f30', trim: '#fff' } })),
    // Frankrijk
    me({ group: 'fr', look: { neck: 'scarf' }, id: 'p-haan', name: 'Haan', animal: 'gallo', nl: 'haan', color: '#1f4f9e', trait: 'Vroeg op en trots: cocorico! Het symbool van Frankrijk.' },
      bird({ fur: ['#fffaf0', '#f8e6c6', '#e0bc8c'], beak: '#ffc93a', beak2: '#d9940e', wear: { kind: 'tee', a: '#3a78d6', b: '#1f4f9e', trim: '#fff' },
        back: '<g fill="#e02c3c" stroke="#8e1420" stroke-width="1.2"><circle cx="46" cy="27" r="8.5"/><circle cx="74" cy="27" r="8.5"/><circle cx="60" cy="20" r="11"/></g><ellipse cx="56" cy="15" rx="4" ry="2.2" fill="#fff" opacity=".3" transform="rotate(-20 56 15)"/>',
        front: '<g fill="#e02c3c" stroke="#8e1420" stroke-width="1"><path d="M55.5 84C51 86 50 93 54 96C58 95 59 89 58 85Z"/><path d="M64.5 84C69 86 70 93 66 96C62 95 61 89 62 85Z"/></g>', eyes: { iris: '#b8621a' } })),
    me({ group: 'fr', id: 'p-bulldog', name: 'Franse bulldog', animal: 'bulldog francés', nl: 'Franse bulldog', color: '#5a4a52', trait: 'Klein, stoer en een beetje koppig. Snurkt tijdens de les.' },
      beast({ fur: ['#efe2cf', '#d2bea2', '#a48e74'], ears: 'big', earIn: '#f2b6b8', muzzle: '#4a3c3c', mrx: 19, mry: 12.5, my: 84, mouthY: 87, ny: 74, noseCol: '#151010', line: '#e8c8c0',
        marks: '<path d="M60 31C57 42 57 56 59 68H61C63 56 63 42 60 31Z" fill="#fff" opacity=".75"/><path d="M53 66Q60 62 67 66" fill="none" stroke="#8a765e" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>',
        wear: { kind: 'stripes', a: '#fbfbfd', b: '#dfe2ea', trim: '#26375e', trim2: '#26375e' } })),
    me({ group: 'fr', look: { hat: 'bow' }, id: 'p-poedel', name: 'Poedel', animal: 'caniche', nl: 'poedel', color: '#f0789f', trait: 'Chic gekapt en slimmer dan je denkt.' },
      beast({ fur: ['#ffffff', '#f8eef2', '#e0cfd8'], ears: 'none', muzzle: '#ffffff', mrx: 13, mry: 12, noseCol: '#2a1a22', eyes: { lash: true },
        back: fluff([[20, 60, 11], [17, 74, 10], [24, 85, 9], [100, 60, 11], [103, 74, 10], [96, 85, 9]]) + curls([[19, 60], [18, 74], [101, 60], [102, 74]]),
        marks: fluff([[44, 33, 10], [60, 24, 13], [76, 33, 10], [52, 38, 9], [68, 38, 9]]) + curls([[48, 29], [60, 19], [72, 29], [60, 34]]),
        wear: { kind: 'tee', a: '#f0789f', b: '#d14f8a', trim: '#fff' } })),
    // Turkije
    me({ group: 'tr', tail: 'cat', id: 'p-vankat', name: 'Van-kat', animal: 'gato Van', nl: 'Van-kat', color: '#c9743a', trait: 'Witte kat uit Van met één blauw en één goudkleurig oog. Houdt zelfs van zwemmen.' },
      beast({ fur: ['#ffffff', '#f6f3ee', '#dad3c8'], ears: 'point', earIn: '#f6b6c4', cheeks: '#ffffff', nose: 'cat', noseCol: '#e87a98', eyes: { iris: '#3a9be0', iris2: '#e0a020', r: 7.6 },
        back: mir('<path d="M27 50C22 36 22 22 29 14C38 17 47 26 51 34Z" fill="#c9743a"/><path d="M30 44C27 34 27 25 31 20C37 23 42 28 45 34Z" fill="#f6b6c4"/>'),
        marks: mir('<path d="M27 50C28 40 36 33 50 31C52 36 50 42 44 46C38 49 32 51 27 50Z" fill="#c9743a"/>'), front: ACC.whisk('#a89e90'),
        wear: { kind: 'tee', a: '#e02c3c', b: '#b01c2a', trim: '#fff' } })),
    me({ group: 'tr', look: { neck: 'nazar' }, id: 'p-kangal', name: 'Kangal', animal: 'kangal', nl: 'kangal', color: '#b08c5a', trait: 'Trouwe herdershond uit Anatolië. Groot, kalm en waakzaam.' },
      beast({ fur: ['#f6e2c0', '#dcbe90', '#b49060'], ears: 'none', back: flop('#3e3230', '#1a1414'), muzzle: '#40332f', mrx: 16, mry: 13, my: 84, mouthY: 87, ny: 75, noseCol: '#120c0c', line: '#e8c8b8',
        marks: brow('#b49060', 51), wear: { kind: 'vest', a: '#f6f1e6', b: '#ddd4c2', trim: '#1d8a9a' } })),
    // Engelstalige landen
    me({ group: 'en', id: 'p-arend', name: 'Zeearend', animal: 'águila calva', nl: 'zeearend', color: '#26375e', trait: 'Scherpe blik, groot hart. Het nationale dier van de VS.' },
      bird({ fur: ['#ffffff', '#f4f1ec', '#d4cdc2'], hook: true, beak: '#ffc93a', beak2: '#d9940e', wear: { kind: 'tee', a: '#3a4a7a', b: '#26375e', trim: '#c9283b' },
        back: '<g fill="URL_F"><path d="M44 36L40 16 52 30Z"/><path d="M53 33L56 10 64 30Z"/><path d="M66 32L76 14 76 34Z"/></g>', marks: brow('#8a7c68', 53), eyes: { iris: '#e0a020' } })),
    me({ group: 'en', tail: 'ringed', id: 'p-wasbeer', name: 'Wasbeer', animal: 'mapache', nl: 'wasbeer', color: '#6e6a64', trait: 'Slim boefje met een maskertje. Wast alles netjes voor het eten.' },
      beast({ fur: ['#d2cfca', '#a09a92', '#726d66'], ears: 'point', earIn: '#3a3632', muzzle: '#f8f6f2', mrx: 15, mry: 12, noseCol: '#1e1a18',
        marks: '<path d="M24 62C30 54 50 54 60 62C70 54 90 54 96 62C92 72 76 74 66 68L60 66 54 68C44 74 28 72 24 62Z" fill="#2e2a26"/><path d="M38 50Q60 44 82 50" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7" fill="none"/>', eyes: { iris: '#7a5a3a' }, front: ACC.whisk('#5a544c'),
        wear: { kind: 'shirt', a: '#c9283b', b: '#a01f30', trim: '#e8344e', inner: '#fff' } })),
    me({ group: 'en', id: 'p-roodborst', name: 'Roodborstje', animal: 'petirrojo', nl: 'roodborstje', color: '#f2793a', trait: 'Klein, rond en nieuwsgierig. De lievelingsvogel van de Britten.' },
      bird({ fur: ['#d6b890', '#a47e58', '#74563a'], beak: '#4a3a30', beak2: '#2a1e18', wear: { kind: 'tee', a: '#3a9d5d', b: '#2a7a44', trim: '#fff4e6' },
        marks: '<path d="M27 62C29 48 44 43 60 48C76 43 91 48 93 62C96 80 84 98 60 99.5C36 98 24 80 27 62Z" fill="#f58a44"/><path d="M36 86C44 95 76 95 84 86C78 97 70 99.5 60 99.5C50 99.5 42 97 36 86Z" fill="#fff3e0" opacity=".8"/>' })),
    me({ group: 'en', look: { hat: 'crown' }, id: 'p-corgi', name: 'Corgi', animal: 'corgi', nl: 'corgi', color: '#f09a44', trait: 'Korte pootjes, grote oren en een koninklijke glimlach.' },
      beast({ fur: ['#ffcf94', '#f2a04c', '#cc742c'], ears: 'big', earIn: '#f8d2bc', muzzle: '#ffffff', mrx: 16, mry: 13, noseCol: '#1e1410',
        marks: '<path d="M60 30.5C54 40 53 54 55 68H65C67 54 66 40 60 30.5Z" fill="#fff"/>', wear: { kind: 'tee', a: '#9a6ad8', b: '#7046b0', trim: '#ffd23f' } })),
    // Nederland
    me({ group: 'nl', look: { shoes: 'klompen' }, id: 'p-koe', name: 'Koe', animal: 'vaca', nl: 'koe', color: '#3a78d6', trait: 'Zwartbont en kalm. Staat het liefst in de wei, met uitzicht op een molen.' },
      beast({ fur: ['#ffffff', '#f6f3ef', '#d8d2ca'], ears: 'side', earIn: '#f6b8c4', muzzle: '#f8c2cc', mrx: 19, mry: 12.5, my: 85, mouthY: 87, nose: 'dots', noseCol: '#b8627a', ny: 78, line: '#a84a66',
        back: mir('<path d="M40 35C34 32 28 24 29 14C36 16 43 23 47 31Z" fill="#f4e8cc" stroke="#9a8a68" stroke-width="1.2" stroke-linejoin="round"/>'),
        marks: '<path d="M22 60C20 46 30 34 48 31C56 36 58 48 54 60C50 70 42 76 32 76C26 74 23 68 22 60Z" fill="#2e2a30"/><path d="M78 31.5C88 34 96 42 99 54C94 56 86 54 82 48C78 42 76 36 78 31.5Z" fill="#2e2a30"/><path d="M52 31C56 26 64 26 68 31C64 34 56 34 52 31Z" fill="URL_F"/>',
        wear: { kind: 'tee', a: '#f28c1b', b: '#d96a0a', trim: '#fff' } })),
    me({ group: 'nl', id: 'p-zeehond', name: 'Zeehond', animal: 'foca', nl: 'zeehond', color: '#7e8c9a', trait: 'Ligt graag op een zandbank in de Waddenzee te zonnen.' },
      beast({ fur: ['#e6ecf2', '#b4c0cc', '#8290a0'], ears: 'none', muzzle: '#f2f5f8', mrx: 18, mry: 12.5, my: 83, ny: 74, noseCol: '#2a2e36', eyes: { r: 8.2, dx: 18.5, col: '#16141c', iris: '#3e3a52' },
        marks: SPOTS('#6a7888', [[40, 40, 2.2], [52, 36, 1.5], [72, 38, 2], [84, 44, 1.5], [28, 56, 1.6], [92, 58, 1.8], [62, 44, 1.3]]) + brow('#6a7888', 50), front: ACC.whisk('#5a6672'),
        wear: { kind: 'stripes', a: '#fbfbfd', b: '#dfe2ea', trim: '#3a78d6', trim2: '#3a78d6' } })),
    me({ group: 'nl', id: 'p-ooievaar', name: 'Ooievaar', animal: 'cigüeña', nl: 'ooievaar', color: '#e8472e', trait: 'Bouwt elk jaar hetzelfde nest en brengt geluk.' },
      bird({ fur: ['#ffffff', '#f6f4f0', '#d6d0c8'], long: true, beak: '#f0552e', beak2: '#b8361a', wear: { kind: 'tee', a: '#3a3a46', b: '#22222b', trim: '#fff' },
        back: '<g fill="URL_F"><path d="M50 34L46 18 58 30Z"/><path d="M60 31L64 12 70 32Z"/></g>', eyes: { r: 6.6, iris: '#6a3a2a' } }))
  );
  const GROUPS = [['', 'Klassiekers', null], ['latam', '🌎 Latijns-Amerika', 'es'], ['de', '🇩🇪 Duitsland, Oostenrijk en Zwitserland', 'de'], ['fr', '🇫🇷 Frankrijk', 'fr'], ['tr', '🇹🇷 Turkije', 'tr'], ['en', '🇬🇧 🇺🇸 Engelstalige landen', 'en'], ['nl', '🇳🇱 Nederland', 'nl']];

  /* Vaste stem per personage (edge-tts, gebruikt door tools/tts-texts.js voor de dialoogopnames): stem, toonhoogte, tempo. */
  const V = (v, pitch = 0, rate = 0) => ({ v: v + 'Neural', pitch, rate });
  const VOICE = {
    mateo: V('es-CO-Gonzalo'), sofia: V('es-MX-Dalia', 6), diego: V('es-MX-Jorge'), juliana: V('es-CO-Salome', 2, 4), lucia: V('es-PE-Camila', 4),
    rosa: V('es-PE-Camila', -8, 6), catalina: V('es-CL-Catalina'), facundo: V('es-UY-Mateo', -2, -6), yaritza: V('es-PA-Margarita', 0, -8),
    coralis: V('es-PR-Karina', 6, 4), 'abuela-lupe': V('es-MX-Dalia', -14, -10), elena: V('es-EC-Andrea', -6, -4), daniel: V('es-US-Alonso', 6),
    andres: V('es-PE-Alex'), 'valentina-ar': V('es-AR-Elena'), camila: V('es-CL-Catalina', 8), 'senora-cartagena': V('es-CO-Salome', -10, -6),
    ana: V('es-MX-Dalia', 10), mesero: V('es-MX-Jorge', -4), vendedora: V('es-CO-Salome', 4), andrea: V('es-CR-Maria'), carlos: V('es-GT-Andres'),
    doctora: V('es-MX-Dalia', -6, -4), entrevistadora: V('es-MX-Dalia', -4), yarisel: V('es-PA-Margarita'), yokasta: V('es-DO-Ramona'),
    paola: V('es-MX-Dalia'), 'tio-beto': V('es-MX-Jorge', -10, -6), lupita: V('es-MX-Dalia', 8, 6), mauricio: V('es-CR-Juan', 0, -4),
    turista: V('es-US-Alonso', -4, -4), 'ana-lucia': V('es-GT-Marta'), daniela: V('es-EC-Andrea'), fer: V('es-MX-Jorge', 6, 4),
    moderadora: V('es-PE-Camila', -4), quispe: V('es-PE-Alex', -8, -6), huaman: V('es-BO-Marcelo'), 'valentina-co': V('es-CO-Salome'), 'diego-pe': V('es-PE-Alex'), wara: V('es-BO-Sofia'), arami: V('es-PY-Tania'), genesis: V('es-VE-Paola', 4),
    marisol: V('es-SV-Lorena'), josue: V('es-HN-Carlos', 4, 4), xiomara: V('es-NI-Yolanda', -4), yunior: V('es-CU-Manuel'), carmen: V('es-ES-Elvira'), 'santiago-gq': V('es-GQ-Javier', -4, -4), brenda: V('es-US-Paloma', 4)
  };
  CAST.forEach(c => { c.voice = VOICE[c.id] || null; });
  const BY = Object.fromEntries([...CAST, ...PLAYERS].map(c => [c.id, c]));

  /* Welk personage hoort bij welke dialoogspreker. Sleutel: naam, of naam@landcode als dezelfde naam in een ander land iemand anders is. */
  const SPEAKERS = {
    'Mateo': 'mateo', 'Sofía': 'sofia', 'Diego': 'diego', 'Diego@PE': 'diego-pe', 'Juliana': 'juliana', 'Lucía': 'lucia', 'Rosa': 'rosa',
    'Catalina': 'catalina', 'Facundo': 'facundo', 'Yaritza': 'yaritza', 'Coralis': 'coralis', 'Abuela Lupe': 'abuela-lupe',
    'Señora Elena': 'elena', 'Daniel': 'daniel',
    'Andrés': 'andres', 'Valentina': 'valentina-co', 'Valentina@PE': 'valentina-ar', 'Camila': 'camila', 'Señora': 'senora-cartagena', 'Ana': 'ana',
    'Mesero': 'mesero', 'Vendedora': 'vendedora', 'Andrea': 'andrea', 'Carlos': 'carlos', 'Doctora': 'doctora', 'Entrevistadora': 'entrevistadora',
    'Yarisel': 'yarisel', 'Yokasta': 'yokasta', 'Paola': 'paola', 'Tío Beto': 'tio-beto', 'Lupita': 'lupita', 'Guía Mauricio': 'mauricio',
    'Turista': 'turista', 'Ana Lucía': 'ana-lucia', 'Daniela': 'daniela', 'Fer': 'fer', 'Moderadora': 'moderadora', 'Prof. Quispe': 'quispe', 'Sr. Huamán': 'huaman', 'Wara': 'wara', 'Arami': 'arami', 'Génesis': 'genesis',
    'Valentina@AR': 'valentina-ar', 'Marisol': 'marisol', 'Josué': 'josue', 'Xiomara': 'xiomara', 'Yunior': 'yunior', 'Carmen': 'carmen', 'Santiago': 'santiago-gq', 'Brenda': 'brenda'
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

  /* ---------- jouw personage aanpassen: hoedje, bril, iets om je hals, shirtkleur ---------- */
  const LOOKS = {
    hat: [['', 'Geen'], ['cap', 'Pet'], ['sun', 'Zonnehoed'], ['beret', 'Baret'], ['chullo', 'Muts'], ['sombrero', 'Sombrero'], ['party', 'Feesthoedje'], ['flower', 'Bloem'], ['bow', 'Strik'],
      ['tirol', 'Tiroler hoedje'], ['boater', 'Strohoed'], ['fez', 'Fez'], ['bowler', 'Bolhoed'], ['cowboy', 'Cowboyhoed'], ['crown', 'Kroontje'], ['beanie', 'Oranje muts']],
    glasses: [['', 'Geen'], ['round', 'Brilletje'], ['sun', 'Zonnebril'], ['star', 'Sterrenbril'], ['heart', 'Hartjesbril'], ['monocle', 'Monocle']],
    neck: [['', 'Niets'], ['scarf', 'Sjaal'], ['bowtie', 'Vlinderdas'], ['beads', 'Ketting'], ['tie', 'Stropdas'], ['bandana', 'Bandana'], ['bell', 'Koebel'], ['barrel', 'Vaatje'], ['nazar', 'Nazar-kraal']],
    build: [['slim', 'Slank'], ['', 'Normaal'], ['stout', 'Stevig']],
    shirt: [['', 'Standaard'], ['orange', '#f28c1b', '#d96a0a'], ['red', '#e8344e', '#b51d3a'], ['pink', '#f0789f', '#d14f8a'], ['purple', '#9a6ad8', '#7046b0'],
      ['blue', '#3a78d6', '#1f4f9e'], ['teal', '#2fa79a', '#1d7a70'], ['green', '#3a9d5d', '#2a7a44'], ['yellow', '#ffd23f', '#f2a81d'], ['black', '#3a3a46', '#22222b'], ['white', '#fbfbfd', '#dfe2ea']],
    print: [['', 'Standaard'], ['stripes', 'Bretonse streep'], ['check', 'Ruitje'], ['braces', 'Bretels'], ['tulips', 'Tulpen'], ['stars', 'Sterren'], ['kilim', 'Kelim'], ['hearts', 'Hartjes']],
    shoes: [['', 'Standaard'], ['sneakers', 'Sneakers'], ['boots', 'Laarzen'], ['klompen', 'Klompen']]
  };
  const shirtOf = k => LOOKS.shirt.find(x => x[0] === k && k);
  const star = (x, y, r, col, op = 1) => `<path d="M${x} ${y - r}L${(x + r * .29).toFixed(1)} ${(y - r * .31).toFixed(1)}L${x + r} ${(y - r * .27).toFixed(1)}L${(x + r * .46).toFixed(1)} ${(y + r * .23).toFixed(1)}L${(x + r * .65).toFixed(1)} ${y + r}L${x} ${(y + r * .54).toFixed(1)}L${(x - r * .65).toFixed(1)} ${y + r}L${(x - r * .46).toFixed(1)} ${(y + r * .23).toFixed(1)}L${x - r} ${(y - r * .27).toFixed(1)}L${(x - r * .29).toFixed(1)} ${(y - r * .31).toFixed(1)}Z" fill="${col}" opacity="${op}"/>`;
  const heart = (x, y, r, col, op = 1) => `<path d="M${x} ${y + r}C${x - r * 1.5} ${y - r * .1} ${x - r * .7} ${y - r * 1.2} ${x} ${y - r * .35}C${x + r * .7} ${y - r * 1.2} ${x + r * 1.5} ${y - r * .1} ${x} ${y + r}Z" fill="${col}" opacity="${op}"/>`;
  /* Opdruk op het shirt: wordt in de vorm van het shirt geknipt (ook in het hele lijf), loopt daarom door tot y=160. */
  const SPOTS_AT = [[30, 104], [48, 110], [72, 110], [90, 104], [38, 122], [60, 124], [82, 122], [30, 138], [50, 140], [70, 140], [90, 138]];
  const PRINTS = {
    stripes: (ink) => `<g fill="none" stroke="${ink}" stroke-width="3">${Array.from({ length: 9 }, (_, i) => `<path d="M10 ${98 + i * 7.4}Q60 ${109 + i * 7.4} 110 ${98 + i * 7.4}"/>`).join('')}</g>`,
    check: (ink) => `<g stroke="${ink}" opacity=".5"><g stroke-width="4.6">${[26, 37.4, 48.8, 60.2, 71.6, 83, 94.4].map(x => `<path d="M${x} 90V162"/>`).join('')}</g><g stroke-width="4.6" fill="none">${Array.from({ length: 6 }, (_, i) => `<path d="M10 ${99 + i * 11.4}Q60 ${107 + i * 11.4} 110 ${99 + i * 11.4}"/>`).join('')}</g></g>`,
    braces: () => `<g fill="none" stroke="#5a3a1c" stroke-width="7"><path d="M43 92C41 110 42 130 44 152M77 92C79 110 78 130 76 152"/></g><g fill="none" stroke="#8a5c2c" stroke-width="4.4"><path d="M43 92C41 110 42 130 44 152M77 92C79 110 78 130 76 152"/></g><rect x="40" y="110" width="40" height="10" rx="3" fill="#8a5c2c" stroke="#5a3a1c" stroke-width="1.3"/><g transform="translate(60 115)">${[0, 60, 120, 180, 240, 300].map(d => `<ellipse cx="0" cy="-2.6" rx="1.3" ry="2.4" transform="rotate(${d})" fill="#fff"/>`).join('')}<circle r="1.4" fill="#f2c14e"/></g><g fill="#f2c14e"><circle cx="43.6" cy="143" r="1.6"/><circle cx="76.4" cy="143" r="1.6"/></g>`,
    tulips: () => SPOTS_AT.map(([x, y], i) => { const c = ['#e8344e', '#ffd23f', '#f0789f', '#fff'][i % 4]; return `<path d="M${x} ${y + 1}v6.5M${x} ${y + 5.5}q-3.4 -.6 -3.6 -3.2" fill="none" stroke="#2a8a48" stroke-width="1.3" stroke-linecap="round"/><path d="M${x - 3} ${y - 3.4}Q${x - 1.6} ${y - 1.6} ${x} ${y - 4.4}Q${x + 1.6} ${y - 1.6} ${x + 3} ${y - 3.4}Q${x + 3.6} ${y + 2} ${x} ${y + 2.2}Q${x - 3.6} ${y + 2} ${x - 3} ${y - 3.4}Z" fill="${c}"/>`; }).join(''),
    stars: (ink) => SPOTS_AT.map(([x, y], i) => star(x, y, i % 2 ? 3 : 4.2, ink, .95)).join(''),
    hearts: (ink) => SPOTS_AT.map(([x, y], i) => heart(x, y - 1, i % 2 ? 2.6 : 3.4, ink, .95)).join(''),
    kilim: () => [104, 134].map(y => `<path d="M8 ${y - 5}Q60 ${y + 5} 112 ${y - 5}V${y + 6}Q60 ${y + 16} 8 ${y + 6}Z" fill="#b01c2a"/><g fill="none" stroke-linejoin="round"><path d="M${Array.from({ length: 14 }, (_, i) => `${12 + i * 7.4} ${(y + (i % 2 ? 9 : 1) + 5 * Math.sin((12 + i * 7.4 - 8) / 104 * Math.PI)).toFixed(1)}`).join('L')}" stroke="#f6e7c4" stroke-width="1.8"/><path d="M8 ${y - 5}Q60 ${y + 5} 112 ${y - 5}M8 ${y + 6}Q60 ${y + 16} 112 ${y + 6}" stroke="#1d8a9a" stroke-width="2.2"/></g><g fill="#f2b134">${[34, 60, 86].map(x => { const yy = y + 5.2 + 5 * Math.sin((x - 8) / 104 * Math.PI) - 1; return `<path d="M${x} ${(yy - 2.6).toFixed(1)}l2.6 2.6-2.6 2.6-2.6-2.6Z"/>`; }).join('')}</g>`).join('')
  };
  function lookParts(look, c) {
    look = Object.assign({}, c.look || {}, look || {});
    const sh = shirtOf(look.shirt), col = sh ? sh[1] : c.color || '#e2603a', col2 = sh ? sh[2] : '#ffd23f';
    const acc = ['red', 'pink', 'orange'].includes(look.shirt) ? '#ffd23f' : '#e8344e'; // sjaal en strikje: altijd goed zichtbaar op het shirt
    const light = ['white', 'yellow'].includes(look.shirt); // opdruk: donkerblauw op een licht shirt, anders wit
    const HATS = {
      cap: () => HAT.cap(col), sun: () => `<g transform="translate(0 -6)">${HAT.sun()}</g>`, sombrero: () => `<g transform="translate(0 -4)">${HAT.sombrero()}</g>`,
      beret: () => `<path d="M26 40C30 22 90 22 94 40C84 34 36 34 26 40Z" fill="#26375e"/><path d="M25 41C38 32 82 32 95 41C94 45 90 46 86 44C74 39 46 39 34 44C30 46 26 45 25 41Z" fill="#1d2a4a"/><circle cx="60" cy="24" r="2.6" fill="#26375e"/><path d="M36 33Q48 27 62 27" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".18"/>`,
      chullo: () => HAT.chullo(col, col2),
      party: () => `<path d="M44 36L60 2 76 36Z" fill="${col}"/><path d="M48 28L72 28M52 19H68" stroke="#fff" stroke-width="2.4" opacity=".8"/><circle cx="60" cy="3" r="4.2" fill="${col2}"/><path d="M42 36Q60 42 78 36" fill="none" stroke="${col2}" stroke-width="3" stroke-linecap="round"/>`,
      flower: () => hib(84, 38, 1.1, col === '#f28c1b' ? '#e8344e' : col),
      bow: () => `<g transform="translate(16 2) scale(1.4)">${ACC.bow(col)}</g>`,
      tirol: () => `<path d="M17 45Q60 30 103 45Q97 52.5 60 46.5Q23 52.5 17 45Z" fill="#2f5230" stroke="#1c3220" stroke-width="1.1" stroke-linejoin="round"/><path d="M31 43C29 26 40 13 54 14Q60 18 66 14C80 13 91 26 89 43Q60 36 31 43Z" fill="#40703e" stroke="#1c3220" stroke-width="1.1" stroke-linejoin="round"/><path d="M31 38.4Q60 31.4 89 38.4L89 43Q60 36 31 43Z" fill="#e8e0cc"/><path d="M31 40.6Q60 33.6 89 40.6" fill="none" stroke="#c9283b" stroke-width="1.4"/><path d="M40 22Q50 16 58 18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".2"/>
        <path d="M82 39C84 26 90 14 100 7C101 18 97 30 88 40Z" fill="#fbf6ea" stroke="#9a8f78" stroke-width="1"/><path d="M84 38C88 28 93 18 99 9" fill="none" stroke="#9a8f78" stroke-width="1"/><circle cx="83.5" cy="39.5" r="2.6" fill="#f2c14e" stroke="#9a7418" stroke-width=".8"/>`,
      boater: () => `<path d="M14 43Q60 30 106 43Q100 51 60 45.5Q20 51 14 43Z" fill="#ecd48c" stroke="#9a7c2c" stroke-width="1.1" stroke-linejoin="round"/><path d="M36 41.5L37 22Q60 15 83 22L84 41.5Q60 35 36 41.5Z" fill="#f8e6ac" stroke="#9a7c2c" stroke-width="1.1" stroke-linejoin="round"/><ellipse cx="60" cy="21" rx="23" ry="4.6" fill="#fdf0c4" stroke="#9a7c2c" stroke-width="1"/><path d="M36.4 33Q60 26.6 83.6 33L84 41.5Q60 35 36 41.5Z" fill="#26375e"/><path d="M36.3 36.6Q60 30.2 83.7 36.6" fill="none" stroke="#e02c3c" stroke-width="1.8"/><g stroke="#c9a84a" stroke-width=".8" opacity=".6"><path d="M22 44.5l5-3M34 47l4-4M82 44l4 3M94 42l4 2.6"/></g>`,
      fez: () => `<path d="M41 39L45.5 13Q60 9 74.5 13L79 39Q60 33 41 39Z" fill="#cf2436" stroke="#7e1220" stroke-width="1.1" stroke-linejoin="round"/><ellipse cx="60" cy="12.4" rx="14.6" ry="3.4" fill="#e4495a" stroke="#7e1220" stroke-width="1"/><path d="M47 17L44.5 34" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".2"/><path d="M60 12.4Q76 13 81 24V33" fill="none" stroke="#1e1e28" stroke-width="1.7" stroke-linecap="round"/><path d="M79 32.5h4l1.6 10.5h-7.2Z" fill="#1e1e28"/><path d="M79.6 36v6M81 36v6.6M82.4 36v6" stroke="#5a5a6a" stroke-width=".6"/><circle cx="60" cy="12.4" r="1.6" fill="#1e1e28"/>`,
      bowler: () => `<path d="M20 43Q60 30 100 43Q98 51 60 45.5Q22 51 20 43Z" fill="#22222b" stroke="#0e0e14" stroke-width="1.1" stroke-linejoin="round"/><path d="M32 42C29 20 44 11 60 11S91 20 88 42Q60 35 32 42Z" fill="#30303c" stroke="#0e0e14" stroke-width="1.1" stroke-linejoin="round"/><path d="M32 36.6Q60 29.6 88 36.6L88 42Q60 35 32 42Z" fill="#55556a"/><path d="M39 26C42 18 50 15 58 15" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".22"/>`,
      cowboy: () => `<path d="M5 37C10 49 34 49 60 45C86 49 110 49 115 37C108 31 98 35 88 40.5Q60 34 32 40.5C22 35 12 31 5 37Z" fill="#a06c36" stroke="#5a3a1a" stroke-width="1.1" stroke-linejoin="round"/><path d="M35 41C32 24 40 12 51 14Q60 21 69 14C80 12 88 24 85 41Q60 34.5 35 41Z" fill="#b98548" stroke="#5a3a1a" stroke-width="1.1" stroke-linejoin="round"/><path d="M34.6 35.8Q60 29.4 85.4 35.8L85 41Q60 34.5 35 41Z" fill="#5a3a1a"/>${star(60, 34.4, 3.4, '#f2c14e')}<path d="M41 24Q46 17 52 17" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".22"/>`,
      crown: () => `<path d="M38 39L35 15 48 26 60 9 72 26 85 15 82 39Q60 33 38 39Z" fill="#f6bd3a" stroke="#a87410" stroke-width="1.2" stroke-linejoin="round"/><path d="M37.4 33Q60 27 82.6 33L82 39Q60 33 38 39Z" fill="#e09a1a"/><circle cx="60" cy="9" r="2.8" fill="#e8344e" stroke="#a87410" stroke-width=".8"/><circle cx="35" cy="15" r="2.2" fill="#3a9be0" stroke="#a87410" stroke-width=".8"/><circle cx="85" cy="15" r="2.2" fill="#3a9be0" stroke="#a87410" stroke-width=".8"/><circle cx="60" cy="33" r="2.4" fill="#e8344e"/><circle cx="46" cy="34.6" r="1.7" fill="#2fa79a"/><circle cx="74" cy="34.6" r="1.7" fill="#2fa79a"/><path d="M43 26l5 5M55 18l3 8" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".4"/>`,
      beanie: () => `<circle cx="60" cy="10" r="7.6" fill="#fff" stroke="#b8b0a8" stroke-width="1"/><path d="M56 7q2-3 5-2M55 12q1 2 4 2" fill="none" stroke="#b8b0a8" stroke-width=".9" stroke-linecap="round"/><path d="M28 44C26 24 42 13 60 13S94 24 92 44Q60 34 28 44Z" fill="#f58a1e" stroke="#a84e08" stroke-width="1.1" stroke-linejoin="round"/><g stroke="#a84e08" stroke-width="1" opacity=".35"><path d="M44 17L40 36M54 14L52 34M66 14L68 34M76 17L80 36"/></g><path d="M25.6 47Q60 35 94.4 47L93.4 38Q60 26 26.6 38Z" fill="#fff" stroke="#b8b0a8" stroke-width="1" stroke-linejoin="round"/><g stroke="#b8b0a8" stroke-width="1" opacity=".7"><path d="M36 35.4v8.6M46 32.6v8.6M56 31.2v8.6M66 31.4v8.6M76 33v8.6M86 36v8.6"/></g>`
    };
    const GL = {
      round: () => ACC.glasses('#3b2a20') + `<path d="M35 58l4-3M71 58l4-3" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>`,
      sun: () => `<g><rect x="29" y="55" width="26" height="18" rx="8" fill="#1e1e28"/><rect x="65" y="55" width="26" height="18" rx="8" fill="#1e1e28"/><path d="M55 61Q60 58 65 61M29 60 22 58M91 60 98 58" stroke="#1e1e28" stroke-width="2.4" fill="none"/><path d="M33 59l7 0M69 59l7 0" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".55"/></g>`,
      star: () => { const st = (x, y) => `<path d="M${x} ${y - 13}L${x + 3.8} ${y - 4}L${x + 13} ${y - 3.5}L${x + 6} ${y + 3}L${x + 8.5} ${y + 12}L${x} ${y + 7}L${x - 8.5} ${y + 12}L${x - 6} ${y + 3}L${x - 13} ${y - 3.5}L${x - 3.8} ${y - 4}Z" fill="${col}" fill-opacity=".35" stroke="${col}" stroke-width="2.4" stroke-linejoin="round"/>`; return st(42, 64) + st(78, 64) + `<path d="M53 62Q60 59 67 62" stroke="${col}" stroke-width="2.2" fill="none"/>`; },
      heart: () => { const ht = x => `<path d="M${x} 76C${x - 17} 66 ${x - 12} 50 ${x} 58C${x + 12} 50 ${x + 17} 66 ${x} 76Z" fill="#e8344e" fill-opacity=".3" stroke="#e8344e" stroke-width="2.4" stroke-linejoin="round"/><path d="M${x - 6.5} 59.5q-2.4 1.6-2.4 4.6" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".7"/>`; return ht(42) + ht(78) + `<path d="M53 61Q60 58 67 61" stroke="#e8344e" stroke-width="2.2" fill="none"/>`; },
      monocle: () => `<circle cx="78" cy="64" r="11.6" fill="#fff" fill-opacity=".14" stroke="#c9982a" stroke-width="2.2"/><path d="M71 57.5q2.6-2.8 6-3" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/><path d="M88.6 69C96 76 98 88 94 100" fill="none" stroke="#c9982a" stroke-width="1.1" stroke-dasharray="2 1.4"/>`
    };
    const NECK = {
      scarf: () => `<path d="M34 96Q60 110 86 96L88 104Q60 118 32 104Z" fill="${acc}" stroke="${mix(acc, INK, .45)}" stroke-width="1" stroke-linejoin="round"/><path d="M72 106L80 124H68Z" fill="${acc}" stroke="${mix(acc, INK, .45)}" stroke-width="1" stroke-linejoin="round"/><path d="M38 101Q60 112 82 101" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity=".7" fill="none"/>`,
      bowtie: () => `<path d="M60 101L48 95V107ZM60 101L72 95V107Z" fill="${acc}" stroke="${mix(acc, INK, .45)}" stroke-width="1" stroke-linejoin="round"/><circle cx="60" cy="101" r="2.6" fill="${acc}" stroke="${mix(acc, INK, .45)}"/>`,
      beads: () => `<g fill="#f2b134" stroke="#a87410" stroke-width=".6">${Array.from({ length: 11 }, (_, i) => `<circle cx="${40 + i * 4}" cy="${98 + Math.sin(i / 10 * Math.PI) * 7}" r="2.1"/>`).join('')}</g><circle cx="60" cy="107" r="3" fill="#e8344e" stroke="#8e1420" stroke-width=".6"/>`,
      tie: () => `<path d="M55.6 98H64.4L62.6 103.4 66.4 117 60 123.4 53.6 117 57.4 103.4Z" fill="${acc}" stroke="${mix(acc, INK, .45)}" stroke-width="1" stroke-linejoin="round"/><path d="M57.4 103.4H62.6" stroke="${mix(acc, INK, .45)}" stroke-width="1"/><path d="M56 110l8 4M55 114.6l7 3.6" stroke="#fff" stroke-width="1.4" opacity=".55"/>`,
      bandana: () => `<path d="M35 95.4Q60 108 85 95.4L60 122Z" fill="${acc}" stroke="${mix(acc, INK, .45)}" stroke-width="1" stroke-linejoin="round"/><g fill="#fff" opacity=".85"><circle cx="50" cy="104.6" r="1.2"/><circle cx="60" cy="106.6" r="1.2"/><circle cx="70" cy="104.6" r="1.2"/><circle cx="55" cy="111" r="1.2"/><circle cx="65" cy="111" r="1.2"/><circle cx="60" cy="116" r="1.2"/></g>`,
      bell: () => `<path d="M37 96.4Q60 109 83 96.4" fill="none" stroke="#6a3a18" stroke-width="5" stroke-linecap="round"/><path d="M37 96.4Q60 109 83 96.4" fill="none" stroke="#a8642c" stroke-width="2.6" stroke-linecap="round"/><path d="M53 105.6H67L70.6 119.4Q60 122.6 49.4 119.4Z" fill="#f6bd3a" stroke="#a87410" stroke-width="1.1" stroke-linejoin="round"/><rect x="56" y="103" width="8" height="3.6" rx="1.4" fill="#a8642c" stroke="#6a3a18" stroke-width=".8"/><circle cx="60" cy="121.6" r="2.2" fill="#a87410"/><path d="M55.4 108.6L53.4 117" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>`,
      barrel: () => `<path d="M37 96.4Q60 109 83 96.4" fill="none" stroke="#6a3a18" stroke-width="4.4" stroke-linecap="round"/><rect x="48" y="104" width="24" height="15" rx="6.4" fill="#b8763a" stroke="#6a3a18" stroke-width="1.1"/><path d="M54 104.4V118.6M66 104.4V118.6" stroke="#e6e2da" stroke-width="2.2"/><path d="M52 108Q60 106.4 68 108" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".4"/><circle cx="60" cy="111.6" r="1.6" fill="#6a3a18"/>`,
      nazar: () => `<path d="M38 96Q60 108 82 96" fill="none" stroke="#3a3a46" stroke-width="1.5" stroke-linecap="round"/><circle cx="60" cy="108.6" r="7" fill="#1f4fbf" stroke="#12307a" stroke-width="1"/><circle cx="60" cy="108.6" r="4.6" fill="#fff"/><circle cx="60" cy="108.6" r="3" fill="#6ac4f0"/><circle cx="60" cy="108.6" r="1.5" fill="#16161e"/><path d="M55.4 105.4q1.6-2 4-2.4" fill="none" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity=".7"/>`
    };
    return {
      shirt: sh, neck: look.neck && NECK[look.neck] ? NECK[look.neck]() : '',
      print: look.print && PRINTS[look.print] ? PRINTS[look.print](light ? '#26375e' : '#ffffff') : '',
      hat: look.hat && HATS[look.hat] ? HATS[look.hat]() : '', glasses: look.glasses && GL[look.glasses] ? GL[look.glasses]() : ''
    };
  }

  /* ---------- het hele lijf (grote plekken: toneel in de dialoog, Perfil) ----------
     Onder de buste: romp in de kleding, armpjes, broek of rokje, schoentjes en soms een staart. */
  const TAILS = {
    cat: `<path d="M86 150C104 150 112 136 108 118C106 112 100 114 101 120C103 132 98 142 84 144Z" fill="URL_F"/>`,
    fox: `<path d="M84 150C108 152 118 132 110 112C104 104 96 112 98 122C100 134 94 142 82 144Z" fill="URL_F"/><path d="M110 112C104 104 96 112 98 122C101 118 106 114 110 112Z" fill="#fff8ee"/>`,
    axo: `<path d="M84 146C100 148 112 140 116 128C118 140 112 154 98 158C90 160 84 156 82 152Z" fill="URL_F"/>`,
    ringed: `<path d="M86 150C106 150 116 132 110 112C107 106 101 110 102 116C105 130 98 142 84 144Z" fill="URL_F"/><g stroke="#3a2a1a" stroke-width="3" opacity=".55"><path d="M101 141 106 145M106 131 112 132M106 121 111 119"/></g>`
  };
  const TAIL_OF = { sofia: 'cat', carlos: 'ringed', moderadora: 'cat', 'tio-beto': 'ringed', 'abuela-lupe': 'axo', andres: 'fox', fer: 'cat', andrea: 'ringed', paola: 'fox', diego: 'fox' };
  /* Postuur: elk een eigen silhouet (schouders, taille, buik), eigen armen en benen. Het shirt van het borstbeeld wordt
     in dat silhouet geknipt, dus de print loopt door maar de vorm verschilt echt. */
  const BUILD = {
    slim: { sil: 'M40 93C33 95 30 100 29 108C29 120 35 130 36 140L35 152H85L84 140C85 130 91 120 91 108C90 100 87 95 80 93Z',
      arm: [33, 26, 133, 9, 5], leg: [49, 71, 4.3], belt: 'M35 146H85L86 156H34Z' },
    '': { sil: 'M38 93C27 95 21 102 20 112C20 128 26 140 28 152H92C94 140 100 128 100 112C99 102 93 95 82 93Z',
      arm: [26, 16, 136, 12, 6.2], leg: [46, 74, 6], belt: 'M28 146H92L93 156H27Z' },
    stout: { sil: 'M38 93C27 95 21 102 19 112C11 122 11 144 26 154H94C109 144 109 122 101 112C99 102 93 95 82 93Z',
      arm: [26, 9, 138, 14, 7], leg: [45, 75, 8], belt: 'M25 148H95L94 158H26Z',
      belly: '<path d="M22 138Q60 160 98 138" fill="none" stroke="#000" stroke-width="3" opacity=".08"/><ellipse cx="52" cy="124" rx="16" ry="8" fill="#fff" opacity=".07"/>' }
  };
  const buildOf = (c, look) => BUILD[(c.player && look && look.build) || ''] || BUILD[''];
  // kleuren mengen (voor omlijning en schaduw: een donkere tint van de vacht of de kleding)
  function mix(a, b, t) {
    if (!/^#[0-9a-f]{6}$/i.test(a || '')) return b;
    const px = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)), A = px(a), B = px(b);
    return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join('');
  }
  const INK = '#221620';
  /* Schoenen (alleen bij het hele lijf). x = midden van het been, i = 0 links, 1 rechts. */
  const SHOES = {
    '': (x, i, col) => { const a = x - (i ? 7 : 11), b = x + (i ? 11 : 7), ink = mix(col, INK, .5); return `<path d="M${a} 171Q${a} 164.5 ${x} 164.5Q${b} 164.5 ${b} 171.5Q${x} 176 ${a} 171Z" fill="${col}" stroke="${ink}" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M${a + .6} 171.6Q${x} 176 ${b - .6} 171.9" fill="none" stroke="${mix(col, '#f6ead8', .75)}" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M${x - 3} 167.2h6M${x - 2.4} 169.4h4.8" stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".6"/><ellipse cx="${x + (i ? 5 : -5)}" cy="167.4" rx="2.6" ry="1.3" fill="#fff" opacity=".22"/>`; },
    klompen: (x, i) => { const sd = i ? 1 : -1, t = x + sd * 13; return `<path d="M${x - sd * 7} 171.5C${x - sd * 8} 163 ${x + sd * 2} 162 ${x + sd * 7} 165.5C${x + sd * 10} 167 ${t} 165 ${t + sd * 1.5} 162.5C${t + sd * 2.5} 168 ${t - sd * 2} 175 ${x + sd * 2} 175.5C${x - sd * 4} 176 ${x - sd * 7} 174.5 ${x - sd * 7} 171.5Z" fill="#f6cf52" stroke="#a87a18" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M${x - sd * 5} 166.5Q${x} 163.5 ${x + sd * 5} 166.5" fill="none" stroke="#a87a18" stroke-width="1" stroke-linecap="round"/><circle cx="${x + sd * 6.5}" cy="169.6" r="1.7" fill="#e8344e"/><path d="M${x + sd * 6.5} 171.2v2.2" stroke="#3a9d5d" stroke-width="1" stroke-linecap="round"/><path d="M${x - sd * 5} 172.6Q${x + sd * 2} 174.4 ${x + sd * 9} 172" fill="none" stroke="#fff" stroke-width=".9" opacity=".5" stroke-linecap="round"/>`; },
    sneakers: (x, i, col, acc) => { const a = x - (i ? 7 : 11), b = x + (i ? 11 : 7), sd = i ? 1 : -1; return `<path d="M${a} 170.5Q${a} 163.5 ${x} 163.5Q${b} 164 ${b} 171Q${x} 174.5 ${a} 170.5Z" fill="#fbfbfd" stroke="#8d8d9c" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M${a + .3} 171.2Q${x} 176.6 ${b - .3} 171.6" fill="none" stroke="${acc}" stroke-width="2.4" stroke-linecap="round"/><path d="M${x - sd * 1} 164.6L${x + sd * 5} 170.6" stroke="${acc}" stroke-width="2" stroke-linecap="round"/>
      <path d="M${x - sd * 5.5} 166.4l3.4 1.2M${x - sd * 6} 168.6l3.4 1" stroke="#8d8d9c" stroke-width=".9" stroke-linecap="round"/>`; },
    boots: (x, i) => { const a = x - (i ? 7.5 : 11), b = x + (i ? 11 : 7.5); return `<path d="M${x - 7.6} 154.5H${x + 7.6}V166Q${b} 166 ${b} 171.5Q${x} 176 ${a} 171.4Q${a} 166 ${x - 7.6} 165.5Z" fill="#9a5c2e" stroke="#5a3214" stroke-width="1.1" stroke-linejoin="round"/>
      <path d="M${x - 7.6} 157.6H${x + 7.6}" stroke="#f2c14e" stroke-width="1.6"/><path d="M${a + .6} 172Q${x} 176.4 ${b - .6} 172.2" fill="none" stroke="#5a3214" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M${x - 3} 161.5l3 2.6 3-2.6" fill="none" stroke="#f6dfae" stroke-width=".9" stroke-linecap="round" opacity=".8"/><ellipse cx="${x + (i ? 5 : -5)}" cy="168" rx="2.6" ry="1.3" fill="#fff" opacity=".2"/>`; }
  };
  function fullBody(c, u, look, cloth, ink) {
    const bird = c.kind === 'bird', fem = !!c.female && !c.player;
    const B = buildOf(c, look);
    const pants = c.pants || (c.player ? '#3a4a6a' : fem ? null : '#4a3e36');
    const shoe = c.shoe || '#4a2e22';
    const cInk = mix(cloth, INK, .5), pInk = pants ? mix(pants, INK, .55) : ink;
    const tail = TAILS[c.tail || TAIL_OF[c.id]];
    const lk = Object.assign({}, c.look, look), shoeKind = c.player && SHOES[lk.shoes] ? lk.shoes : '';
    const [lx, rx, hw] = B.leg;
    const legs = [lx, rx].map((x, i) => `<path d="M${x - hw} 146V170Q${x} 174 ${x + hw} 170V146Z" fill="${pants || u('f')}" stroke="${pInk}" stroke-width="1.1" stroke-linejoin="round"/>
      ${pants ? `<path d="M${x - hw + 1.6} 150V168" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".12"/><path d="M${x - hw + .6} 165.6Q${x} 168 ${x + hw - .6} 165.6" fill="none" stroke="${pInk}" stroke-width="1" opacity=".7"/>` : ''}
      ${SHOES[shoeKind](x, i, shoe, cloth)}`).join('');
    const torso = `<path d="${B.sil}" fill="${cloth}" stroke="${cInk}" stroke-width="2.2" stroke-linejoin="round"/>`
      + (fem ? `<path d="M26 134Q60 142 94 134L104 160Q60 170 16 160Z" fill="${cloth}" stroke="${cInk}" stroke-width="1.1" stroke-linejoin="round"/><path d="M17 158Q60 168 103 158" fill="none" stroke="#fff" stroke-width="2" opacity=".55"/><path d="M38 141 34 162M60 143V166M82 141 86 162" stroke="${cInk}" stroke-width="1" opacity=".3"/><path d="M27 135Q60 143 93 135" fill="none" stroke="${cInk}" stroke-width="1.2" opacity=".45"/>`
        : `<path d="${B.belt}" fill="${pants}" stroke="${pInk}" stroke-width="1.1" stroke-linejoin="round"/><rect x="56" y="${B.belt === BUILD.stout.belt ? 148.6 : 146.6}" width="8" height="5" rx="1.4" fill="#f2c14e" stroke="${pInk}" stroke-width=".8"/><path d="M60 ${B.belt === BUILD.stout.belt ? 154 : 152}v4" stroke="${pInk}" stroke-width="1" opacity=".6"/>`);
    const [ax, hx0, hy, aw, hr] = B.arm;
    const arm = side => {
      const sx = side < 0 ? ax : 120 - ax, hx = side < 0 ? hx0 : 120 - hx0;
      const d = `M${sx} 103Q${hx + (sx - hx) * .15} 114 ${hx} ${hy}`;
      const hand = bird ? `<path d="M${hx - hr} ${hy - 4}Q${hx} ${hy + 16} ${hx + hr} ${hy - 4}Z" fill="${u('f')}" stroke="${ink}" stroke-width="1.1" stroke-linejoin="round"/><path d="M${hx} ${hy + 1}V${hy + 8}M${hx - hr * .45} ${hy}V${hy + 5}M${hx + hr * .45} ${hy}V${hy + 5}" stroke="${ink}" stroke-width=".9" stroke-linecap="round" opacity=".45"/>`
        : `<circle cx="${hx}" cy="${+(hy + 6.5).toFixed(1)}" r="${hr}" fill="${u('f')}" stroke="${ink}" stroke-width="1.1"/><ellipse cx="${hx - side * hr * .3}" cy="${hy + 5.5}" rx="${+(hr * .42).toFixed(2)}" ry="${+(hr * .3).toFixed(2)}" fill="#fff" opacity=".3"/><path d="M${hx - 2.6} ${hy + 10}q1.3 1.6 2.6 0q1.3 1.6 2.6 0" fill="none" stroke="${ink}" stroke-width=".9" opacity=".55" stroke-linecap="round"/>`;
      const sleeve = `<path d="${d}" fill="none" stroke="${cInk}" stroke-width="${aw + 2.2}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${cloth}" stroke-width="${aw}" stroke-linecap="round"/><path d="${d}" fill="none" stroke="#fff" stroke-width="${+(aw * .35).toFixed(2)}" stroke-linecap="round" opacity=".13" transform="translate(${-1.2} -.6)"/>`;
      const ex = hx + (sx - hx) * .05, cw = aw / 2 + .4;
      const cuff = `<path d="M${+(ex - cw).toFixed(2)} ${hy - .6}Q${+ex.toFixed(2)} ${hy + 2.2} ${+(ex + cw).toFixed(2)} ${hy - .6}" fill="none" stroke="${mix(cloth, '#ffffff', .3)}" stroke-width="2.2" stroke-linecap="round"/>`;
      return `<g class="c-arm ${side < 0 ? 'c-arm-l' : 'c-arm-r'}"${side > 0 ? ` style="transform-origin:${sx}px 103px"` : ''}>${hand}${sleeve}${cuff}</g>`;
    };
    return { sil: B.sil, back: `<ellipse cx="60" cy="175" rx="36" ry="4.6" fill="#000" opacity=".13"/>` + (tail ? `<g transform="translate(5 8)">${tail.replace(/<path d="([^"]+)" fill="URL_F"\/>/, `<path d="$1" fill="URL_F" stroke="${ink}" stroke-width="1.2" stroke-linejoin="round"/>`).replace(/URL_F/g, u('f'))}</g>` : '') + legs + torso, mid: B.belly || '', front: arm(-1) + arm(1) };
  }

  /* Afwerking van een borstbeeld: één doorlopende omlijning om alle vachtvormen samen (hoofd, oren, kuif), zachte schaduw
     onderaan en rechts op de vacht, en omlijning en kinschaduw op de kleding. Zo krijgt elk personage meer definitie. */
  function polish(art, n, ink, cInk) {
    const shapes = [];
    const one = new RegExp(`<(path|circle|ellipse)\\b([^>]*?) fill="url\\(#${n}-f\\)"([^>]*?)/>`, 'g');
    const grp = new RegExp(`<g fill="url\\(#${n}-f\\)">((?:(?!<g\\b)[^])*?)</g>`, 'g');
    let first = -1;
    const note = at => { if (first < 0 || at < first) first = at; };
    art.replace(grp, (m, inner, at) => { note(at); shapes.push(inner); return m; });
    art.replace(one, (m, tag, a, b, at) => { if (/stroke=/.test(a + b)) return m; note(at); shapes.push(`<${tag}${a}${b}/>`); return m; });
    let out = art;
    if (first >= 0) out = art.slice(0, first) + `<g fill="none" stroke="${ink}" stroke-width="2.7" stroke-linejoin="round" stroke-linecap="round">${shapes.join('')}</g>` + art.slice(first);
    out = out.replace(one, (m, tag, a, b) => /stroke=/.test(a + b) ? m : m + `<${tag}${a} fill="url(#${n}-sh)"${b}/>`);
    const sh = `<path d="${SH}" fill="url(#${n}-o)"/>`;
    return out.replace(sh, `<path d="${SH}" fill="url(#${n}-o)" /><path d="M17 121C19 101 36 92 60 92S101 101 103 121" fill="none" stroke="${cInk}" stroke-width="2.4" stroke-linecap="round"/><path d="M19 119C21 104 34 96 46 94" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".16"/><path d="M29 98C40 92 80 92 91 98C84 109 36 109 29 98Z" fill="${cInk}" opacity=".3"/>`);
  }

  const CUT = 93; // boven de hals: daaronder neemt het silhouet van het postuur het over
  function svg(id, size = 64, opt = {}) {
    const c = BY[id]; if (!c) return '';
    const n = 'cs' + (++uid), u = k => `url(#${n}-${k})`;
    const full = !!opt.full;
    const L = c.player ? lookParts(opt.look, c) : null;
    // gekozen shirtkleur: een eigen kleurverloop 'o' vóór dat van het personage (het eerste met een id telt)
    // kleur van de kleding onderaan het kleurverloop: daarin lopen romp en mouwen naadloos door
    const m = c.defs.match(/id="ID-o"[^]*?stop-color="([^"]+)"[^]*?stop-color="([^"]+)"/);
    const fm = c.defs.match(/id="ID-f"[^]*?stop-color="[^"]+"[^]*?stop-color="[^"]+"[^]*?stop-color="([^"]+)"/);
    const cloth = L && L.shirt ? L.shirt[2] : m ? m[2] : '#888';
    const ink = mix(fm ? fm[1] : '#6a5a50', INK, .5), cInk = mix(cloth, INK, .5);
    const defs = (L && L.shirt ? lin('o', L.shirt[1], L.shirt[2]) : '') + c.defs
      + `<radialGradient id="ID-sh" gradientUnits="userSpaceOnUse" cx="50" cy="46" r="64"><stop offset=".56" stop-color="${ink}" stop-opacity="0"/><stop offset="1" stop-color="${ink}" stop-opacity=".4"/></radialGradient>`
      + `<clipPath id="ID-sc"><path d="${SH}"/>${opt.full ? '<rect x="-10" y="119" width="140" height="70"/>' : ''}</clipPath>`; // opdruk: in het borstbeeld alleen binnen de schouders
    const body = full ? fullBody(c, u, opt.look, cloth, ink) : null;
    const h = full ? 182 : 120, w = Math.round(size * 120 / h);
    let top = c.draw(u);
    if (L && L.print) top = top.replace(/<!--w-->[^]*?<!--\/w-->/, '').replace(`<path d="${SH}" fill="${u('o')}"/>`, x => x + `<g clip-path="${u('sc')}">${L.print}</g>`);
    top = polish(top, n, ink, cInk) + (L ? L.neck + L.hat + L.glasses : '');
    let art = top;
    if (full) {
      // het borstbeeld twee keer: het hoofd (alles boven de hals plus de onderkant van het hoofd) en het shirt, geknipt in het silhouet van het postuur
      art = `<clipPath id="${n}-hi"><rect x="-20" y="-20" width="160" height="${CUT + 20}"/><ellipse cx="60" cy="80" rx="42" ry="23"/></clipPath><clipPath id="${n}-lo"><path d="${body.sil}"/></clipPath>`
        + body.back + `<g clip-path="url(#${n}-lo)">${top}</g>` + body.mid + `<g clip-path="url(#${n}-hi)">${top}</g>` + body.front;
    }
    return `<svg class="cast-svg${full ? ' cast-full' : ''}" viewBox="0 0 120 ${h}" width="${full ? w : size}" height="${size}" role="img" aria-label="${c.player ? 'Jij' : c.name}, ${(S.course && S.course.target !== 'es' && S.course.ui === 'nl' ? c.nl : null) || c.animal}" xmlns="http://www.w3.org/2000/svg">
  <defs>${defs.replace(/ID-/g, n + '-')}</defs>${art.replace(/URL_SH/g, u('sh'))}
</svg>`;
  }
  function avatar(id, size = 64, cls = '', opt) {
    const el = document.createElement('div');
    el.className = 'cast cast-' + id + (cls ? ' ' + cls : '') + (opt && opt.full ? ' full' : '');
    el.innerHTML = svg(id, size, opt);
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

  S.Cast = { list: CAST, players: PLAYERS, GROUPS, LOOKS, get: id => BY[id], SPEAKERS, forSpeaker, svg, avatar, country, onTalk };
})(window.SPT = window.SPT || {});
