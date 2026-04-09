const Game = {

  state: {
    visited:   new Set(),   // location IDs with story content, successfully visited
    checked:   new Set(),   // blank location IDs visited
    informants: new Set(),  // informant indices consulted
    flags:     new Set(),   // state flags set by visiting locations
    phase:     'playing'    // 'playing' | 'done'
  },

  // ── Startup ──────────────────────────────────────────────────────────────

  init(caseId) {
    this._caseId   = String(caseId);
    this._directory = Object.assign({}, window.DIRECTORY ?? {}, STORY.directory ?? {});
    document.getElementById('case-title').textContent = STORY.meta.title;
    this.renderPins();
    this.setContent(`<h2>Case File</h2><p>${this.fmt(STORY.intro)}</p>`);
    this.updateScore();
  },

  // ── Map & pins ───────────────────────────────────────────────────────────

  renderPins() {
    const layer = document.getElementById('pins-layer');
    layer.innerHTML = '';
    for (const [id, loc] of Object.entries(LOCATIONS)) {
      const pin = document.createElement('div');
      pin.className = 'pin';
      pin.id = `pin-${id}`;
      pin.style.left = loc.x + '%';
      pin.style.top  = loc.y + '%';
      pin.innerHTML  =
        `<span class="pin-num">${id}</span>` +
        `<span class="pin-tip">${loc.name}</span>`;
      pin.addEventListener('click', () => this.visitLocation(id));
      layer.appendChild(pin);
    }
  },

  visitLocation(areaId) {
    if (this.state.phase === 'done') return;
    const area = LOCATIONS[areaId];
    if (!area) return;

    const items = area.addresses.map((addr, i) => {
      const key = `${areaId}:${addr}`;
      let marker = '&nbsp;', cls = '';
      if (this.state.visited.has(key))      { marker = '&#10003;'; cls = 'addr-visited'; }
      else if (this.state.checked.has(key)) { marker = '&ndash;';  cls = 'addr-checked'; }
      return `<div class="address-item ${cls}" onclick="Game.visitAddress('${areaId}', ${i})">` +
        `<span class="addr-marker">${marker}</span><span>${addr}</span></div>`;
    }).join('');

    this.setContent(`<h3>${area.name}</h3><div class="address-list">${items}</div>`);
  },

  visitAddress(areaId, addrIndex) {
    if (this.state.phase === 'done') return;
    const area  = LOCATIONS[areaId];
    const addr  = area?.addresses[addrIndex];
    if (!addr) return;

    const key   = `${areaId}:${addr}`;
    const entry = STORY.locations[key];
    const back  = `<p class="back-link" onclick="Game.visitLocation('${areaId}')">&#8592; ${area.name}</p>`;

    // Check lock
    if (entry?.requires_state) {
      const required = [].concat(entry.requires_state);
      if (required.some(f => !this.state.flags.has(f))) {
        this.setContent(
          back +
          `<h3>${addr}</h3>` +
          `<p class="locked">${entry.locked_text ?? 'You have no particular reason to be here yet.'}</p>`
        );
        return;
      }
    }

    if (entry?.text) {
      [].concat(entry.sets_state ?? []).forEach(f => this.state.flags.add(f));
      if (!this.state.visited.has(key)) {
        this.state.visited.add(key);
        this.updateScore();
      }
      this.markPin(areaId);
      this.setContent(back + `<h3>${addr}</h3><p>${this.fmt(entry.text)}</p>`);
    } else {
      if (!this.state.checked.has(key)) {
        this.state.checked.add(key);
        this.updateScore();
      }
      this.markPin(areaId);
      this.setContent(
        back +
        `<h3>${addr}</h3>` +
        `<p class="muted">There is nothing here relevant to your investigation.</p>`
      );
    }
  },

  markPin(areaId) {
    const pin  = document.getElementById(`pin-${areaId}`);
    const area = LOCATIONS[areaId];
    if (!pin || !area) return;
    const anyVisited = area.addresses.some(addr => {
      const key = `${areaId}:${addr}`;
      return this.state.visited.has(key) || this.state.checked.has(key);
    });
    if (anyVisited) pin.classList.add('explored');
    else pin.classList.remove('explored');
  },

  // ── Case File (intro) ────────────────────────────────────────────────────

  showIntro() {
    this.setContent(`<h2>Case File</h2><p>${this.fmt(STORY.intro)}</p>`);
  },

  // ── Newspapers ───────────────────────────────────────────────────────────

  showNewspapers() {
    if (this.state.phase === 'done') return;
    const list = STORY.newspapers
      .map((n, i) => `<div class="list-item" onclick="Game.readNewspaper(${i})">${n.name}</div>`)
      .join('');
    this.setContent(`<h2>Newspapers</h2>${list || '<p class="muted">No papers available.</p>'}`);
  },

  readNewspaper(i) {
    const n = STORY.newspapers[i];

    const articles = n.articles.map(a => {
      const body = a.text.split(/\n\n+/)
        .map(p => `<p>${p.trim().replace(/\n/g, ' ')}</p>`)
        .join('');
      return `
        <div class="np-article">
          <div class="np-headline">${a.headline}</div>
          <div class="np-body">${body}</div>
        </div>`;
    }).join('');

    document.getElementById('newspaper-content').innerHTML = `
      <div class="np-masthead">
        <div class="np-name">${n.name}</div>
      </div>
      <div class="np-meta">
        <span>${n.date ?? ''}</span>
        <span class="np-meta-center">${n.edition ?? ''}</span>
        <span>${n.price ?? ''}</span>
      </div>
      <div class="np-articles">${articles}</div>
    `;

    document.getElementById('newspaper-content').scrollTop = 0;
    document.getElementById('newspaper-overlay').classList.add('open');
  },

  closeNewspaper() {
    document.getElementById('newspaper-overlay').classList.remove('open');
  },

  // ── Directory ────────────────────────────────────────────────────────────

  showDirectory() {
    if (this.state.phase === 'done') return;
    this.setContent(`
      <h2>Street Directory</h2>
      <p class="muted" style="margin-bottom:12px">Enter a name or establishment exactly as known.</p>
      <div class="search-row">
        <input id="dir-input" type="text" placeholder="e.g. Smith, John"
          onkeydown="if(event.key==='Enter') Game.lookupDirectory()">
        <button onclick="Game.lookupDirectory()">Look Up</button>
      </div>
      <div id="dir-result"></div>
    `);
    document.getElementById('dir-input').focus();
  },

  lookupDirectory() {
    const input  = document.getElementById('dir-input');
    const result = document.getElementById('dir-result');
    if (!input || !result) return;

    const raw = input.value.trim();
    if (!raw) return;

    const queryTokens = this.normalise(raw).split(' ').filter(Boolean);
    const matches = [];

    for (const [name, entry] of Object.entries(this._directory)) {
      const entryTokens = this.normalise(name).split(' ').filter(Boolean);
      let fuzzy = false;
      let allMatched = true;

      for (const qt of queryTokens) {
        // Allow 1 edit per 4 characters; short words must match exactly
        const threshold = Math.floor(qt.length / 4);
        const bestDist  = Math.min(...entryTokens.map(et => this.levenshtein(qt, et)));
        if (bestDist > threshold) { allMatched = false; break; }
        if (bestDist > 0) fuzzy = true;
      }

      if (allMatched) matches.push({ name, entry, fuzzy });
    }

    // Exact (non-fuzzy) matches first
    matches.sort((a, b) => a.fuzzy - b.fuzzy);

    if (matches.length === 0) {
      result.innerHTML =
        `<div class="dir-result muted">No listing found for &#8220;${raw}&#8221;.</div>`;
    } else {
      result.innerHTML = matches.map(({ name, entry, fuzzy }) => {
        const areaName = LOCATIONS[entry.area]?.name ?? 'Unknown';
        return `<div class="dir-result">` +
          `<strong>${name}</strong> — ${entry.address}, ${areaName}.` +
          (fuzzy ? ` <span class="muted">(closest match)</span>` : '') +
          `<br><span class="dir-goto" onclick="Game.visitLocation('${entry.area}')">Go to area &#8594;</span>` +
          `</div>`;
      }).join('');
    }
  },

  // ── Informants ───────────────────────────────────────────────────────────

  showInformants() {
    if (this.state.phase === 'done') return;
    const list = STORY.informants
      .map((inf, i) => `<div class="list-item" onclick="Game.consultInformant(${i})">${inf.name}</div>`)
      .join('');
    this.setContent(`<h2>Informants</h2>${list || '<p class="muted">No informants available.</p>'}`);
  },

  consultInformant(i) {
    const inf = STORY.informants[i];
    if (!this.state.informants.has(i)) {
      this.state.informants.add(i);
      this.updateScore();
    }
    this.setContent(`<h2>${inf.name}</h2><p>${this.fmt(inf.text)}</p>`);
  },

  // ── Solve ─────────────────────────────────────────────────────────────────

  startSolve() {
    if (this.state.phase === 'done') return;
    const questions = STORY.questions.map((q, i) => `
      <div class="q-block">
        <label for="q-${i}">${i + 1}. ${q.text}</label>
        <input id="q-${i}" type="text" placeholder="Your answer...">
      </div>
    `).join('');

    const total = this.state.visited.size + this.state.checked.size + this.state.informants.size;
    this.setContent(`
      <h2>Present Your Solution</h2>
      <p class="muted" style="margin-bottom:14px">
        You have visited ${total} location(s). Present your conclusions when ready.
      </p>
      ${questions}
      <button class="big-btn" onclick="Game.submitSolution()">Submit Solution</button>
    `);
  },

  submitSolution() {
    this.state.phase = 'done';
    let correct = 0;

    const results = STORY.questions.map((q, i) => {
      const raw     = document.getElementById(`q-${i}`)?.value ?? '';
      const given   = raw.trim();
      const answers = [].concat(q.answer).map(a => a.toLowerCase());
      const ok      = answers.includes(given.toLowerCase());
      if (ok) correct++;
      return `
        <div class="result-block">
          <strong>${q.text}</strong><br>
          Your answer: <span class="${ok ? 'ok' : 'wrong'}">${given || '(blank)'}</span>
          ${ok ? ' — Correct.' : ' — Incorrect.'}
        </div>`;
    }).join('');

    this.setContent(`
      <h2>Solution</h2>
      ${results}
      <div class="outro">${this.fmt(STORY.outro)}</div>
      <p class="final-score">
        ${correct} of ${STORY.questions.length} question${STORY.questions.length !== 1 ? 's' : ''} answered correctly.<br>
        You visited ${this.state.visited.size + this.state.checked.size + this.state.informants.size} location${(this.state.visited.size + this.state.checked.size + this.state.informants.size) !== 1 ? 's' : ''} before solving the case.
      </p>
    `);
  },

  // ── Save / Load ───────────────────────────────────────────────────────────

  showSave() {
    const code = btoa(JSON.stringify({
      c: this._caseId,
      v: [...this.state.visited],
      k: [...this.state.checked],
      i: [...this.state.informants],
      f: [...this.state.flags],
      p: this.state.phase
    }));
    this.setContent(`
      <h2>Save Game</h2>
      <p class="muted" style="margin-bottom:10px">Copy this code and keep it somewhere safe. Paste it into Load Game to restore your progress.</p>
      <textarea id="save-code" readonly onclick="this.select()">${code}</textarea>
      <button class="big-btn" id="copy-btn" onclick="Game.copySave()">Copy to Clipboard</button>
    `);
  },

  copySave() {
    const ta  = document.getElementById('save-code');
    const btn = document.getElementById('copy-btn');
    if (!ta || !btn) return;
    ta.select();
    navigator.clipboard.writeText(ta.value)
      .catch(() => document.execCommand('copy'));
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 1800);
  },

  showLoad() {
    this.setContent(`
      <h2>Load Game</h2>
      <p class="muted" style="margin-bottom:10px">Paste your save code below to restore your progress.</p>
      <textarea id="load-code" placeholder="Paste save code here..."></textarea>
      <button class="big-btn" onclick="Game.load()">Load Game</button>
    `);
    document.getElementById('load-code').focus();
  },

  load() {
    const raw = document.getElementById('load-code')?.value.trim();
    if (!raw) return;
    try {
      const data = JSON.parse(atob(raw));
      if (!Array.isArray(data.v) || !Array.isArray(data.f)) throw new Error();
      if (data.c && data.c !== this._caseId) {
        this.setContent(
          `<h2>Load Failed</h2>` +
          `<p class="locked">That save is for a different case. Please open the correct case and load it there.</p>`
        );
        return;
      }

      this.state.visited   = new Set(data.v);
      this.state.checked   = new Set(data.k ?? []);
      this.state.informants = new Set(data.i ?? []);
      this.state.flags     = new Set(data.f);
      this.state.phase     = data.p === 'done' ? 'done' : 'playing';

      // Restore area pin states
      const exploredAreas = new Set([
        ...[...this.state.visited].map(k => k.split(':')[0]),
        ...[...this.state.checked].map(k => k.split(':')[0])
      ]);
      for (const areaId of exploredAreas) this.markPin(areaId);

      const total = this.state.visited.size + this.state.checked.size + this.state.informants.size;
      this.updateScore();
      this.setContent(
        `<h2>Game Loaded</h2>` +
        `<p>Progress restored. You have visited ${total} location(s).</p>` +
        (this.state.phase === 'done'
          ? `<p class="muted" style="margin-top:8px">This save is from a completed case.</p>`
          : '')
      );
    } catch {
      this.setContent(
        `<h2>Load Failed</h2>` +
        `<p class="locked">That code could not be read. Please check it and try again.</p>`
      );
    }
  },

  // ── Helpers ───────────────────────────────────────────────────────────────

  setContent(html) {
    document.getElementById('text-content').innerHTML = html;
    document.getElementById('text-panel').scrollTop = 0;
  },

  updateScore() {
    const n = this.state.visited.size + this.state.checked.size + this.state.informants.size;
    document.getElementById('score-display').textContent =
      `${n} location${n !== 1 ? 's' : ''} visited`;
  },

  fmt(text) {
    return (text ?? '').replace(/\n/g, '<br>');
  },

  // Strip punctuation, lowercase, collapse whitespace
  normalise(str) {
    return (str ?? '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
  },

  // Levenshtein edit distance between two strings
  levenshtein(a, b) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const row = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const temp = row[j];
        row[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, row[j], row[j - 1]);
        prev = temp;
      }
    }
    return row[b.length];
  }
};

// Game.init(caseId) is called by game.html after the story script loads dynamically.
