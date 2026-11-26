/* 🗺️ Regiowoorden: waar zeg je dit? (Mark, 2026-11-26)
   Mark kreeg bij «de zus» het antwoord «la ñaña» (Ecuador) terwijl hij «la hermana» kent, zonder dat er
   een land bij stond. Daarom: elk woord dat maar in een paar landen gebruikt wordt, krijgt overal
   (woordkaart, vraag, feedback, woordenschat, woordenboek) vlaggetjes + de landnaam, en het label
   «Regiowoord» met het standaardwoord erbij. Bij een typvraag is het standaardwoord ook goed.

   Werkt voor elke cursus/taal: de landen komen uit het derde veld van een woord (de notitie), bijv.
   ['la ñaña', 'de zus', 'EC (informeel) · ñaño = broer'] of ['mate', 'maat', 'UK · AU (informal)'].
   Begint de notitie met landcodes (of een regio zoals «Andes»), dan is het woord zelf regionaal.
   Staat er meteen een dubbele punt na («ES: la patata», «MX ook: güero»), dan gaat de notitie over
   een ander woord en blijft dit woord gewoon standaard; de vlaggetjes komen dan wel in de notitie.
   Standaardwoorden: S.regioStd (content/regiowoorden.js), per doeltaal: { 'la ñaña': 'la hermana' }. */
(function (S) {
  'use strict';
  const h = S.U && S.U.h;

  /* Landen: code → afbeelding in icons/vlaggen (emoji-vlaggen ziet niet elk apparaat, bijv. Windows) + naam. */
  const LAND = {
    MX: ['mx', 'Mexico', 'México'], GT: ['gt', 'Guatemala', 'Guatemala'], HN: ['hn', 'Honduras', 'Honduras'], SV: ['sv', 'El Salvador', 'El Salvador'],
    NI: ['ni', 'Nicaragua', 'Nicaragua'], CR: ['cr', 'Costa Rica', 'Costa Rica'], PA: ['pa', 'Panama', 'Panamá'], CU: ['cu', 'Cuba', 'Cuba'],
    RD: ['do', 'Dominicaanse Republiek', 'República Dominicana'], DO: ['do', 'Dominicaanse Republiek', 'República Dominicana'], PR: ['pr', 'Puerto Rico', 'Puerto Rico'],
    CO: ['co', 'Colombia', 'Colombia'], VE: ['ve', 'Venezuela', 'Venezuela'], EC: ['ec', 'Ecuador', 'Ecuador'], PE: ['pe', 'Peru', 'Perú'],
    BO: ['bo', 'Bolivia', 'Bolivia'], CL: ['cl', 'Chili', 'Chile'], AR: ['ar', 'Argentinië', 'Argentina'], UY: ['uy', 'Uruguay', 'Uruguay'],
    PY: ['py', 'Paraguay', 'Paraguay'], ES: ['es', 'Spanje', 'España'], GQ: ['gq', 'Equatoriaal-Guinea', 'Guinea Ecuatorial'],
    US: ['us', 'de VS', 'EE. UU.'], UK: ['gb', 'Verenigd Koninkrijk', 'Reino Unido'], GB: ['gb', 'Verenigd Koninkrijk', 'Reino Unido'],
    IE: ['ie', 'Ierland', 'Irlanda'], AU: ['au', 'Australië', 'Australia'], NZ: ['nz', 'Nieuw-Zeeland', 'Nueva Zelanda'], CA: ['ca', 'Canada', 'Canadá'],
    ZA: ['za', 'Zuid-Afrika', 'Sudáfrica'], IN: ['in', 'India', 'India'], JM: ['jm', 'Jamaica', 'Jamaica'], NG: ['ng', 'Nigeria', 'Nigeria'],
    KE: ['ke', 'Kenia', 'Kenia'], SG: ['sg', 'Singapore', 'Singapur'], PH: ['ph', 'Filipijnen', 'Filipinas'],
    NL: ['nl', 'Nederland', 'Países Bajos'], BE: ['be', 'België', 'Bélgica'], SR: ['sr', 'Suriname', 'Surinam'], CW: ['cw', 'Curaçao', 'Curazao']
  };
  /* Regio's en voluit geschreven landen in notities. */
  const NAMES = {
    'mexico': 'MX', 'méxico': 'MX', 'colombia': 'CO', 'cuba': 'CU', 'puerto rico': 'PR', 'venezuela': 'VE', 'ecuador': 'EC', 'peru': 'PE', 'perú': 'PE',
    'chili': 'CL', 'chile': 'CL', 'argentinië': 'AR', 'argentina': 'AR', 'bolivia': 'BO', 'paraguay': 'PY', 'uruguay': 'UY', 'panama': 'PA', 'costa rica': 'CR',
    'spanje': 'ES', 'españa': 'ES', 'vlaanderen': 'BE', 'belgië': 'BE', 'suriname': 'SR'
  };
  const GROUPS = {
    'andes': { nl: 'de Andes', es: 'los Andes', codes: ['BO', 'PE', 'EC'] },
    'caribisch gebied': { nl: 'het Caribisch gebied', es: 'el Caribe', codes: ['CU', 'RD', 'PR'] },
    'caribe': { nl: 'het Caribisch gebied', es: 'el Caribe', codes: ['CU', 'RD', 'PR'] },
    'midden-amerika': { nl: 'Midden-Amerika', es: 'Centroamérica', codes: ['GT', 'HN', 'SV', 'NI', 'CR'] }
  };
  const ui = () => (S.course && S.course.ui) || 'nl';
  const TX = {
    nl: { head: 'Regiowoord', where: 'Zo zeggen ze het in', informal: 'informeel', std: 'Standaard (overal begrepen)', why: 'Waarom apart?',
      whyTxt: 'Dit woord gebruiken ze vooral in {p}; elders kennen ze het vaak niet. Leer daarom ook het standaardwoord.', whyNo: 'Een typisch woord uit {p}; daarbuiten kennen ze het vaak niet.', ok: 'Ook goed: het standaardwoord', hereStd: 'Overal begrijpen ze' },
    es: { head: 'Palabra regional', where: 'Así se dice en', informal: 'informal', std: 'Estándar (se entiende en todas partes)', why: '¿Por qué aparte?',
      whyTxt: 'Esta palabra se usa sobre todo en {p}; en otros lugares muchas veces no se conoce. Aprende también la palabra estándar.', whyNo: 'Una palabra típica de {p}; fuera de allí muchas veces no se conoce.', ok: 'También vale la palabra estándar', hereStd: 'En todas partes se entiende' }
  };
  const t = k => (TX[ui()] || TX.nl)[k];
  const name = c => { const l = LAND[c]; return l ? (ui() === 'es' ? l[2] : l[1]) : c; };

  /* Lees de landen aan het begin van een notitie. → { codes, groups, informal, extra } of null (geen regiowoord). */
  const cache = new Map();
  function parse(note) {
    if (!note || typeof note !== 'string') return null;
    if (cache.has(note)) return cache.get(note);
    let s = note.trim(), informal = false;
    const pre = s.match(/^(informeel|informal)\s*,\s*(o\.a\.\s*)?/i);
    if (pre) { informal = true; s = s.slice(pre[0].length); }
    const codes = [], groups = [];
    let first = true;
    for (;;) {
      if (!first) {
        const sep = s.match(/^\s*(?:·|\/|,|\ben\b|\by\b)\s*/);
        if (!sep) break;
        const after = s.slice(sep[0].length);
        if (!token(after)) break;
        s = after;
      }
      const tk = token(s);
      if (!tk) break;
      if (tk.code) { if (!codes.includes(tk.code) && !(tk.code === 'DO' && codes.includes('RD'))) codes.push(tk.code); }
      else if (tk.group && !groups.includes(tk.group)) groups.push(tk.group);
      s = s.slice(tk.len);
      first = false;
    }
    let res = null;
    // «ES: la patata», «MX ook: güero», «ES vaker: añadir» → de notitie gaat over een ander woord
    if ((codes.length || groups.length) && !/^[^·;(),]*:/.test(s)) {
      if (/\b(informeel|informal)\b/i.test(s)) informal = true;
      let extra = s.replace(/\(\s*(informeel|informal)\s*\)/i, '').replace(/^\s*[·,;]?\s*(informeel|informal)\b\s*,?/i, '')
        .replace(/\(\s*(informeel|informal)\s*,\s*/i, '(').replace(/^[\s·,;]+/, '').trim();
      if (/^\(\s*\)$/.test(extra)) extra = '';
      res = { codes, groups, informal, extra };
    }
    cache.set(note, res);
    return res;
  }
  function token(s) {
    const m = s.match(/^([A-Z]{2})(?![A-Za-zÀ-ÿ])/);
    if (m && LAND[m[1]]) return { code: m[1], len: 2 };
    const low = s.toLowerCase();
    for (const g of Object.keys(GROUPS)) if (low.startsWith(g) && !/[a-zà-ÿ]/i.test(low.charAt(g.length) || '')) return { group: g, len: g.length };
    for (const n of Object.keys(NAMES)) if (low.startsWith(n) && !/[a-zà-ÿ]/i.test(low.charAt(n.length) || '')) return { code: NAMES[n], len: n.length };
    return null;
  }

  /* Regio-informatie van een woord { es, nl, note } → { codes, places, informal, extra, std } of null. */
  function info(w) {
    if (!w || !w.note) return null;
    const p = parse(w.note);
    if (!p) return null;
    const std = stdOf(w.es);
    return { ...p, std, names: places(p) };
  }
  function stdOf(es) {
    const map = S.regioStd && S.regioStd[(S.course && S.course.target) || 'es'];
    return (map && map[es]) || '';
  }
  /* Namen voor in een zin: «Ecuador», «Mexico en Colombia», «de Andes en Venezuela». */
  function places(p) {
    const list = p.groups.map(g => GROUPS[g][ui()] || GROUPS[g].nl).concat(p.codes.map(name));
    if (list.length <= 1) return list.join('');
    const and = ui() === 'es' ? ' y ' : ' en ';
    return list.slice(0, -1).join(', ') + and + list[list.length - 1];
  }

  /* ---------- weergave ---------- */
  function flag(code, cls) {
    const l = LAND[code]; if (!l || !h) return null;
    return h('img', { class: 'rg-flag' + (cls ? ' ' + cls : ''), src: 'icons/vlaggen/' + l[0] + '.png', alt: '', title: name(code), width: 20, height: 15, loading: 'lazy', decoding: 'async' });
  }
  function flags(p) {
    const cs = p.codes.length ? p.codes : [];
    const g = p.groups.length ? h('span', { class: 'rg-globe', 'aria-hidden': 'true' }, '🌎') : null;
    return h('span', { class: 'rg-flags' }, g, cs.map(c => flag(c)));
  }
  /** Klein label bij een vraag of woord: [vlag] Ecuador · informeel. */
  function chip(w, opt = {}) {
    const r = info(w); if (!r || !h) return null;
    return h('span', { class: 'rg-chip' + (opt.big ? ' big' : ''), title: t('head') + ': ' + r.names },
      flags(r), h('span', { class: 'rg-where' }, (opt.lead ? t('where') + ' ' : '') + r.names + (r.informal ? ' · ' + t('informal') : '')));
  }
  /** Blok «🗺️ Regiowoord» met waar, het standaardwoord en waarom (zoals een uitzondering: altijd met de reden). */
  function box(w) {
    const r = info(w); if (!r || !h) return null;
    const lang = (S.course && S.course.target) || 'es';
    return h('div', { class: 'regio', role: 'note' },
      h('div', { class: 'rg-head' }, '🗺️ ' + t('head')),
      h('div', { class: 'rg-line' }, flags(r), ' ', h('b', { lang }, w.es), (ui() === 'es' ? ' se dice sobre todo en ' : ' zeg je vooral in '), h('b', null, r.names), r.informal ? ' (' + t('informal') + ')' : '', '.'),
      r.extra ? h('div', { class: 'rg-extra small' }, r.extra) : null,
      r.std ? h('div', { class: 'rg-std' }, t('std') + ': ', h('b', { lang }, r.std)) : null,
      h('div', { class: 'rg-why small' }, h('b', null, t('why') + ' '), t(r.std ? 'whyTxt' : 'whyNo').replace('{p}', r.names)));
  }
  /** Notitie met vlaggetjes in plaats van landcodes: «AR/PE/UY: el mozo · ES: el camarero». */
  function noteEl(note, cls) {
    if (!note || !h) return null;
    const out = [], re = /\b([A-Z]{2})\b/g;
    let last = 0, m;
    while ((m = re.exec(note))) {
      if (!LAND[m[1]]) continue;
      if (m.index > last) out.push(note.slice(last, m.index));
      out.push(h('span', { class: 'rg-code', title: name(m[1]) }, flag(m[1]), m[1]));
      last = m.index + m[0].length;
    }
    out.push(note.slice(last));
    return h('span', { class: 'rg-note' + (cls ? ' ' + cls : '') }, out);
  }
  /** Woorden die standaard ook goed zijn bij een typvraag naar een regiowoord. */
  const accept = w => { const r = info(w); return r && r.std ? r.std : ''; };

  /** Regiowoord bij een los woord uit een zin (tikvertaling): «ñaña» → het woord uit de lesstof, of null. */
  let IDX = null;
  const bare = x => String(x || '').toLowerCase().normalize('NFC').replace(/[¡!¿?.,;:«»"()]/g, '').replace(/\s+/g, ' ').trim();
  function lookup(text) {
    if (!S.C || !S.C.all) return null;
    if (!IDX) {
      IDX = new Map();
      S.C.all().forEach(u => (u.vocab || []).forEach(v => {
        if (!v[2] || !parse(v[2])) return;
        const w = { es: v[0], nl: v[1], note: v[2] };
        const fs = S.Gen && S.Gen.forms ? S.Gen.forms(v[0]) : String(v[0]).split(/\s*\/\s*/);
        fs.forEach(f => { const k = bare(f); if (k && !IDX.has(k)) IDX.set(k, w); const n = k.replace(/^(el|la|los|las|un|una) /, ''); if (n && !IDX.has(n)) IDX.set(n, w); });
      }));
    }
    return IDX.get(bare(text)) || null;
  }

  S.Regio = { parse, info, chip, box, noteEl, flag, accept, places, lookup, LAND, _cache: cache, _reset: () => { IDX = null; cache.clear(); } };
})(window.SPT);
