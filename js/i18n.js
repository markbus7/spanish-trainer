/* Vertaling van de schermteksten voor cursussen met uitleg in het Spaans (en-es, nl-es).
   De app is in het Nederlands geschreven. Bij een Spaanstalige cursus vertaalt deze laag elke tekst op het scherm
   met een woordenlijst (js/i18n-es.js): hele teksten, en teksten met ingevulde waarden via patronen ({0}, {1}).
   Lesstof (elementen met een lang-attribuut) wordt nooit vertaald. Voor de Nederlandse cursus doet dit niets. */
(function (S) {
  'use strict';
  const course = S.course || { ui: 'nl', target: 'es', name: { es: 'español' } };
  const on = course.ui === 'es';
  /* Nederlandse schermteksten bij een andere doeltaal dan Spaans (bijv. Engels): «Spaans» wordt de doeltaal. */
  const N = course.name && course.name.nl;
  const SUBS = !on && course.ui === 'nl' && course.target !== 'es' && N ? [
    [/Latijns-Amerikaans(?:e)? Spaans/g, N], [/Spaans \(Mexico\)/g, N + ' (' + (course.where || 'VS') + ')'], [/\bSpaanse\b/g, N + 'e'], [/\bSpaans\b/g, N], [/🇪🇸/g, course.flag]
  ] : null;
  const sub = s => { let r = s; for (const [re, v] of SUBS) r = r.replace(re, v); return r; };

  /* Namen met een Spaanse «smaak»: de tabbladen (Hoy, Ruta…), de woordspellen (Sopa de letras…) en uitroepen.
     In de Spaanse cursus zijn ze Spaans, in elke andere cursus komen ze in de doeltaal (Engels leren = Engelse namen).
     Een nieuwe doeltaal krijgt hier een eigen lijst; zonder lijst valt een cursus met Nederlandse uitleg terug op Nederlands. */
  const FLAVORS = {
    en: {
      'Hoy': 'Today', 'Ruta': 'Path', 'Práctica': 'Practice', 'Docente': 'Teacher', 'Perfil': 'Profile',
      'Tu ruta': 'Your path', 'Juegos de palabras': 'Word games',
      'Sopa de letras': 'Word search', 'Crucigrama': 'Crossword', 'Revoltijo': 'Word scramble', 'El volcán': 'The volcano', 'Parejas': 'Pairs',
      '¡Perfecto!': 'Perfect!', '¡Muy bien!': 'Very good!', '¡Sigue así!': 'Keep it up!', '¡Excelente!': 'Excellent!', '¡Buen trabajo!': 'Good job!'
    },
    nl: {
      'Hoy': 'Vandaag', 'Ruta': 'Route', 'Práctica': 'Oefenen', 'Docente': 'Docent', 'Perfil': 'Profiel',
      'Tu ruta': 'Jouw route', 'Juegos de palabras': 'Woordspellen',
      'Sopa de letras': 'Woordzoeker', 'Crucigrama': 'Kruiswoord', 'Revoltijo': 'Letterhusselaar', 'El volcán': 'De vulkaan', 'Parejas': 'Memory',
      '¡Perfecto!': 'Perfect!', '¡Muy bien!': 'Heel goed!', '¡Sigue así!': 'Ga zo door!', '¡Excelente!': 'Uitstekend!', '¡Buen trabajo!': 'Goed gedaan!'
    },
    fr: {
      'Hoy': 'Aujourd’hui', 'Ruta': 'Parcours', 'Práctica': 'Pratique', 'Docente': 'Prof', 'Perfil': 'Profil',
      'Tu ruta': 'Ton parcours', 'Juegos de palabras': 'Jeux de mots',
      'Sopa de letras': 'Mots mêlés', 'Crucigrama': 'Mots croisés', 'Revoltijo': 'Anagramme', 'El volcán': 'Le volcan', 'Parejas': 'Paires',
      '¡Perfecto!': 'Parfait !', '¡Muy bien!': 'Très bien !', '¡Sigue así!': 'Continue comme ça !', '¡Excelente!': 'Excellent !', '¡Buen trabajo!': 'Bon travail !'
    },
    de: {
      'Hoy': 'Heute', 'Ruta': 'Weg', 'Práctica': 'Üben', 'Docente': 'Lehrerin', 'Perfil': 'Profil',
      'Tu ruta': 'Dein Weg', 'Juegos de palabras': 'Wortspiele',
      'Sopa de letras': 'Wortsuche', 'Crucigrama': 'Kreuzworträtsel', 'Revoltijo': 'Buchstabensalat', 'El volcán': 'Der Vulkan', 'Parejas': 'Paare',
      '¡Perfecto!': 'Perfekt!', '¡Muy bien!': 'Sehr gut!', '¡Sigue así!': 'Weiter so!', '¡Excelente!': 'Ausgezeichnet!', '¡Buen trabajo!': 'Gute Arbeit!'
    },
    tr: {
      'Hoy': 'Bugün', 'Ruta': 'Yol', 'Práctica': 'Alıştırma', 'Docente': 'Öğretmen', 'Perfil': 'Profil',
      'Tu ruta': 'Senin yolun', 'Juegos de palabras': 'Kelime oyunları',
      'Sopa de letras': 'Kelime avı', 'Crucigrama': 'Bulmaca', 'Revoltijo': 'Karışık harfler', 'El volcán': 'Yanardağ', 'Parejas': 'Eşleştirme',
      '¡Perfecto!': 'Mükemmel!', '¡Muy bien!': 'Çok güzel!', '¡Sigue así!': 'Böyle devam!', '¡Excelente!': 'Harika!', '¡Buen trabajo!': 'Aferin!'
    }
  };
  const FLAV = course.target === 'es' ? null : FLAVORS[course.target] || (course.ui === 'nl' ? FLAVORS.nl : null);
  const TABS = ['Hoy', 'Ruta', 'Práctica', 'Docente', 'Perfil'];
  /* Eén naam in de doeltaal: S.tl('Práctica') = 'Practice' in de Engelse cursus, 'Práctica' in de Spaanse. */
  // Alleen via S.tl (niet op het scherm vervangen, want in een cursus met Spaanse uitleg is «Gramática» gewoon het woord).
  const TL_ONLY = { en: { 'Gramática': 'Grammar' }, nl: { 'Gramática': 'Grammatica' }, de: { 'Gramática': 'Grammatik' }, fr: { 'Gramática': 'Grammaire' }, tr: { 'Gramática': 'Dil bilgisi' } }[course.target] || (FLAV ? { 'Gramática': 'Grammatica' } : {});
  const tl = s => (FLAV && s != null && (FLAV[s] || TL_ONLY[s])) || s;
  // Hele tekst = één naam, eventueel met een pijltje of emoji ervoor («← Práctica», «🔎 Sopa de letras»).
  function flavWhole(core) {
    if (!FLAV) return null;
    if (FLAV[core]) return FLAV[core];
    const m = /^([^A-Za-zÀ-ÿ¡¿]+)(.+)$/.exec(core);
    return m && FLAV[m[2]] ? m[1] + FLAV[m[2]] : null;
  }
  // Tabnamen midden in een zin. Nederlandse uitleg: elke tabnaam als heel woord («op Hoy», «(Perfil)»).
  // Spaanse uitleg: alleen waar duidelijk het tabblad bedoeld is («en Hoy», «A Hoy», «(Perfil)»), want «Hoy» is daar ook gewoon «vandaag».
  const TAB_RE = FLAV && (course.ui === 'nl' ? new RegExp('(^|[^A-Za-zÀ-ÿ])(' + TABS.join('|') + ')(?![A-Za-zÀ-ÿ])', 'g')
    : new RegExp('((?:^|\\s)(?:en|En|a|A) |\\(|← )(' + TABS.join('|') + ')(?![A-Za-zÀ-ÿ])', 'g'));
  const flavTabs = s => (TAB_RE ? s.replace(TAB_RE, (x, pre, w) => pre + FLAV[w]) : s);
  const LANG = course.name.es;
  const dict = Object.create(null), pats = [];
  const fill = v => String(v).replace(/\{L\}/g, LANG);
  const esc = s => s.replace(/[.*+?^$()|[\]\\]/g, '\\$&');

  function add(map) {
    for (const k in map) {
      const v = map[k]; if (v == null || v === '') continue;
      if (/\{\d\}/.test(k)) {
        const src = esc(k.trim()).replace(/\\?\{(\d)\\?\}/g, '(.+?)').replace(/\s+/g, '\\s+');
        pats.push({ re: new RegExp('^' + src + '$'), v, order: [...k.matchAll(/\{(\d)\}/g)].map(m => +m[1]), lit: k.replace(/\{\d\}/g, '').length });
      } else dict[k.trim().replace(/\s+/g, ' ')] = fill(v);
    }
    // het meest specifieke patroon eerst («Eerste {0} van {1}» vóór «{0} van {1}»)
    pats.sort((a, b) => b.lit - a.lit);
  }
  /* Eén tekst vertalen; spaties aan begin en eind blijven staan. Onbekend = ongewijzigd.
     Daarna wordt «Lupe» de naam van de docent van deze cursus (js/docenten.js), bijv. «Rapport van Bärbel». */
  function t(text) { const r = t0(text); return S.Docent && typeof r === 'string' ? S.docentNaam(r) : r; }
  function t0(text) {
    if (text == null) return text;
    const s = String(text), m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s), core = m[2];
    const fw = core && flavWhole(core);
    if (fw) return m[1] + fw + m[3];
    if (SUBS) return flavTabs(/Spaans|🇪🇸/.test(s) ? sub(s) : s);
    if (!on) return text;
    if (!core || !/[a-zA-Zë]/.test(core)) return s;
    let r = dict[core.replace(/\s+/g, ' ')];
    if (r == null) {
      for (const p of pats) {
        const mm = p.re.exec(core);
        if (!mm) continue;
        const vals = {}; p.order.forEach((n, i) => { vals[n] = mm[i + 1]; });
        r = fill(p.v).replace(/\{(\d)\}/g, (_, n) => t(vals[n] != null ? vals[n] : ''));
        break;
      }
    }
    return r == null ? s : flavTabs(m[1] + r + m[3]);
  }

  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE']);
  const ATTRS = ['placeholder', 'title', 'aria-label'];
  // Lesstof staat in elementen met een lang-attribuut (lang="es" = doeltaal); die laten we met rust.
  const isContent = el => {
    if (!el || !el.closest) return false;
    if (el.closest('.prose, .gtable')) return true; // uitleg en tabellen uit de lesstof zijn al in het Spaans
    const c = el.closest('[lang]'); return !!(c && c !== document.documentElement);
  };
  // Wat we zelf al vertaald hebben, niet nog eens vertalen: in de cursus Nederlands wordt «Hoy» → «Vandaag», en «Vandaag» is ook een Nederlandse schermtekst (→ «Hoy»).
  const mine = new WeakMap();
  function doText(n) {
    const p = n.parentElement; if (!p || SKIP.has(p.tagName) || isContent(p) || p.closest('[data-notr]')) return;
    const v = n.nodeValue; if (mine.get(n) === v) return;
    const r = t(v); if (r !== v) { n.nodeValue = r; mine.set(n, r); }
  }
  function doEl(el) {
    if (course.target !== 'es' && el.getAttribute('lang') === 'es') el.setAttribute('lang', course.target);
    if (el.closest('[data-notr]')) return;
    for (const a of ATTRS) {
      const v = el.getAttribute(a); if (!v) continue;
      const m = mine.get(el); if (m && m[a] === v) continue;
      const r = t(v); if (r !== v) { el.setAttribute(a, r); mine.set(el, Object.assign(m || {}, { [a]: r })); }
    }
  }
  function walk(root) {
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1) return;
    doEl(root);
    root.querySelectorAll('*').forEach(doEl);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) doText(n);
  }
  function start() {
    if (!(on || SUBS || FLAV || S.Docent) || typeof MutationObserver !== 'function') return;
    document.documentElement.lang = on ? 'es' : 'nl';
    walk(document.body);
    new MutationObserver(list => {
      for (const m of list) {
        if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'attributes') doEl(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS.concat(['lang']) });
  }

  S.i18n = { on, sub: !!SUBS, add, t, start, dict, pats, LOC: on ? 'es-PA' : 'nl-NL' };
  S.t = t;
  S.tl = tl;
  S.i18n.flavor = FLAV;
  // meervouden die de code zelf samenstelt (U.plural) gaan ook door de vertaling
  if (on && S.U) { const plural = S.U.plural; S.U.plural = (n, one, many) => plural(n, t(one), t(many)); }
})(window.SPT);
