/* Synchronisatie van de voortgang tussen apparaten via een geheime GitHub Gist.
   Het token staat alleen in deze browser (eigen opslagsleutel), nooit in de voortgang, back-ups of de gist zelf. */
(function (S) {
  'use strict';
  const { Store } = S;
  const CFG_KEY = 'spt.sync';
  const FILE = 'espanol-latino-voortgang.json';
  const DESC = 'Español Latino – voortgang (automatisch gesynchroniseerd, niet bewerken)';
  const API = 'https://api.github.com';

  let cfg = readCfg();
  let busy = null, pushTimer = null, dirty = false, lastPull = 0;
  const listeners = new Set();

  function readCfg() {
    try { return Object.assign({ token: '', gistId: '', login: '', last: 0, error: '' }, JSON.parse(localStorage.getItem(CFG_KEY) || '{}')); }
    catch (e) { return { token: '', gistId: '', login: '', last: 0, error: '' }; }
  }
  function writeCfg() { try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch (e) { /* opslag vol of geblokkeerd */ } }
  function emit() { listeners.forEach(fn => { try { fn(Sync.status()); } catch (e) { /* negeer */ } }); }

  async function gh(path, opts = {}) {
    const res = await fetch(path.startsWith('http') ? path : API + path, Object.assign({}, opts, {
      headers: Object.assign({ Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + cfg.token, 'X-GitHub-Api-Version': '2022-11-28' },
        opts.body ? { 'Content-Type': 'application/json' } : {})
    }));
    if (res.status === 401) throw new Error('Token ongeldig of verlopen');
    if (res.status === 403 || res.status === 404) {
      const body = await res.json().catch(() => ({}));
      if (/rate limit/i.test(body.message || '')) throw new Error('GitHub-limiet bereikt, probeer het later opnieuw');
      throw new Error(res.status === 404 ? 'Gist niet gevonden of token mist het recht «Gists»' : 'Geen toegang: geef het token het recht «Gists: read and write»');
    }
    if (!res.ok) throw new Error('GitHub-fout ' + res.status);
    return res.status === 204 ? null : res.json();
  }

  // Voortgang zonder geheimen, zoals hij in de gist komt
  function payload(state) {
    const data = JSON.parse(JSON.stringify(state));
    data.settings.aiKey = '';
    return JSON.stringify(data);
  }

  async function findGist() {
    for (let page = 1; page <= 5; page++) {
      const list = await gh('/gists?per_page=100&page=' + page);
      const hit = list.find(g => g.files && g.files[FILE]);
      if (hit) return hit.id;
      if (list.length < 100) break;
    }
    return '';
  }
  async function readRemote() {
    const g = await gh('/gists/' + cfg.gistId);
    const f = g.files && g.files[FILE];
    if (!f) return null;
    let text = f.content;
    if (f.truncated && f.raw_url) { const r = await fetch(f.raw_url); if (!r.ok) throw new Error('Kon voortgang niet downloaden'); text = await r.text(); }
    try { return JSON.parse(text); } catch (e) { return null; }
  }
  async function writeRemote(text) {
    if (cfg.gistId) await gh('/gists/' + cfg.gistId, { method: 'PATCH', body: JSON.stringify({ files: { [FILE]: { content: text } } }) });
    else {
      const g = await gh('/gists', { method: 'POST', body: JSON.stringify({ description: DESC, public: false, files: { [FILE]: { content: text } } }) });
      cfg.gistId = g.id; writeCfg();
    }
  }

  const lessonOpen = () => { const el = document.getElementById('lesson'); return !!(el && !el.hidden); };

  // vergelijkbare vorm, zodat we alleen uploaden als er echt iets veranderd is
  const normal = st => payload(Store.mergeStates(st, st));

  // Ophalen, samenvoegen en terugschrijven
  async function run() {
    if (!cfg.token) return;
    if (lessonOpen()) { Sync.changed(); return { deferred: true }; } // niet midden in een les de voortgang vervangen
    if (!cfg.gistId) cfg.gistId = await findGist();
    const remote = cfg.gistId ? await readRemote() : null;
    if (lessonOpen()) { Sync.changed(); return { deferred: true }; }
    const before = normal(Store.state);
    const merged = remote ? Store.mergeStates(Store.state, remote) : Store.state;
    const text = normal(merged);
    const changedLocal = text !== before;
    if (changedLocal) { Store.state = merged; Store.save({ quiet: true }); }
    if (!remote || text !== normal(remote)) await writeRemote(text);
    dirty = false;
    cfg.last = Date.now(); cfg.error = ''; writeCfg(); lastPull = Date.now();
    if (changedLocal && S.render) S.render();
    return { changedLocal };
  }
  function syncNow() {
    if (!cfg.token) return Promise.resolve(null);
    if (busy) return busy;
    clearTimeout(pushTimer); pushTimer = null;
    emit();
    busy = run().catch(e => { cfg.error = e.message; writeCfg(); throw e; })
      .finally(() => { busy = null; emit(); });
    emit();
    return busy;
  }
  const quiet = () => syncNow().catch(() => {});

  const Sync = {
    FILE,
    enabled: () => !!cfg.token,
    status: () => ({ enabled: !!cfg.token, login: cfg.login, gistId: cfg.gistId, last: cfg.last, error: cfg.error, busy: !!busy, pending: !!pushTimer }),
    onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    async connect(token) {
      token = String(token || '').trim();
      if (!token) throw new Error('Vul eerst een token in');
      const prev = cfg;
      cfg = { token, gistId: '', login: '', last: 0, error: '' };
      try {
        const me = await gh('/user');
        cfg.login = me.login || '';
        writeCfg();
        await syncNow();
      } catch (e) { cfg = prev; writeCfg(); emit(); throw e; }
      return Sync.status();
    },
    disconnect() { clearTimeout(pushTimer); pushTimer = null; cfg = { token: '', gistId: '', login: '', last: 0, error: '' }; try { localStorage.removeItem(CFG_KEY); } catch (e) { /* negeer */ } emit(); },
    syncNow,
    // aangeroepen door Store.save(): even wachten en dan in één keer uploaden
    changed() {
      if (!cfg.token) return;
      dirty = true;
      clearTimeout(pushTimer);
      pushTimer = setTimeout(() => { pushTimer = null; quiet(); }, 8000);
      emit();
    },
    init() {
      if (!cfg.token) return;
      quiet();
      document.addEventListener('visibilitychange', () => {
        if (!cfg.token) return;
        if (document.visibilityState === 'hidden') { if (pushTimer || dirty) quiet(); }
        else if (Date.now() - lastPull > 30000) quiet();
      });
      window.addEventListener('online', quiet);
    }
  };
  S.Sync = Sync;
})(window.SPT);
