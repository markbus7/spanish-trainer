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
    [/Latijns-Amerikaans(?:e)? Spaans/g, N], [/Spaans \(Mexico\)/g, N + ' (VS)'], [/\bSpaanse\b/g, N + 'e'], [/\bSpaans\b/g, N], [/🇪🇸/g, course.flag]
  ] : null;
  const sub = s => { let r = s; for (const [re, v] of SUBS) r = r.replace(re, v); return r; };
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
  /* Eén tekst vertalen; spaties aan begin en eind blijven staan. Onbekend = ongewijzigd. */
  function t(text) {
    if (SUBS && text != null) return /Spaans|🇪🇸/.test(text) ? sub(String(text)) : text;
    if (!on || text == null) return text;
    const s = String(text), m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s), core = m[2];
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
    return r == null ? s : m[1] + r + m[3];
  }

  const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'CODE']);
  const ATTRS = ['placeholder', 'title', 'aria-label'];
  // Lesstof staat in elementen met een lang-attribuut (lang="es" = doeltaal); die laten we met rust.
  const isContent = el => {
    if (!el || !el.closest) return false;
    if (el.closest('.prose, .gtable')) return true; // uitleg en tabellen uit de lesstof zijn al in het Spaans
    const c = el.closest('[lang]'); return !!(c && c !== document.documentElement);
  };
  function doText(n) {
    const p = n.parentElement; if (!p || SKIP.has(p.tagName) || isContent(p) || p.closest('[data-notr]')) return;
    const v = n.nodeValue, r = t(v); if (r !== v) n.nodeValue = r;
  }
  function doEl(el) {
    if (course.target !== 'es' && el.getAttribute('lang') === 'es') el.setAttribute('lang', course.target);
    if (el.closest('[data-notr]')) return;
    for (const a of ATTRS) { const v = el.getAttribute(a); if (v) { const r = t(v); if (r !== v) el.setAttribute(a, r); } }
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
    if (!(on || SUBS) || typeof MutationObserver !== 'function') return;
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
  // meervouden die de code zelf samenstelt (U.plural) gaan ook door de vertaling
  if (on && S.U) { const plural = S.U.plural; S.U.plural = (n, one, many) => plural(n, t(one), t(many)); }
})(window.SPT);
