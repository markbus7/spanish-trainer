/* Sfeer per doeltaal: kleuren, Lupes kleding en een sfeerstrook op de startpagina.
   Elke taal zet zijn eigen rij in js/look-<taal>.js met S.Look.add('<taal>', def). Zonder rij blijft de app Mexicaans (Spaans).
   def = {
     vars:  { light: { '--accent': '#…', … }, dark: { … } }   kleurtokens uit css/app.css die deze taal anders wil
     css:   extra CSS (alles begint met :root[data-doel="<taal>"])
     lupe:  { hat(id), dress(id), bust(id) }  SVG-stukken die Lupes bloem, jurkje en borststuk vervangen (js/tutor.js);
            id = uniek voorvoegsel voor eigen clipPaths/gradients. Coördinaten als in de bestaande tekening (hoofd rond 60,66).
     decor: () => SVG-string voor de strook bovenaan de startpagina
   } */
(function (S) {
  'use strict';
  const LOOKS = {};
  const target = () => (S.course && S.course.target) || 'es';
  const block = o => Object.entries(o || {}).map(([k, v]) => k + ':' + v).join(';');
  function apply() {
    if (typeof document === 'undefined') return; // tools/tts-texts.js laadt de scripts zonder pagina
    const t = target(), L = LOOKS[t], root = document.documentElement;
    root.setAttribute('data-doel', t);
    let el = document.getElementById('look-css');
    if (!L) { if (el) el.remove(); return; }
    if (!el) { el = document.createElement('style'); el.id = 'look-css'; document.head.appendChild(el); }
    const sel = `:root[data-doel="${t}"]`, v = L.vars || {};
    el.textContent = `${sel}{${block(v.light)}}
@media (prefers-color-scheme: dark){${sel}:not([data-theme="light"]){${block(v.dark)}}}
${sel}[data-theme="dark"]{${block(v.dark)}}
${L.css || ''}`;
  }
  S.Look = {
    add(t, def) { LOOKS[t] = def; if (t === target()) apply(); },
    get() { return LOOKS[target()] || null; },
    has: t => !!LOOKS[t],
    /* de sfeerstrook als element, of null */
    decor() {
      const L = LOOKS[target()];
      if (!L || !L.decor || typeof document === 'undefined') return null;
      const el = document.createElement('div');
      el.className = 'doel-decor'; el.setAttribute('aria-hidden', 'true'); el.innerHTML = L.decor();
      return el;
    }
  };
  apply();
})(window.SPT);
