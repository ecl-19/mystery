const Game = {

  state: {
    visited:   new Set(),   // location IDs with story content, successfully visited
    checked:   new Set(),   // blank location IDs visited
    informants: new Set(),  // informant indices consulted
    flags:     new Set(),   // state flags set by visiting locations
    phase:     'playing'    // 'playing' | 'done'
  },

  // ── Startup ──────────────────────────────────────────────────────────────

  init() {
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

  visitLocation(id) {
    if (this.state.phase === 'done') return;

    const loc   = LOCATIONS[id];
    const entry = STORY.locations[id];

    if (!loc) return;

    // Check lock
    if (entry?.requires_state) {
      const required = [].concat(entry.requires_state);
      if (required.some(f => !this.state.flags.has(f))) {
        this.setContent(
          `<h3>${loc.name}</h3>` +
          `<p class="locked">${entry.locked_text ?? 'You have no particular reason to be here yet.'}</p>`
        );
        return;
      }
    }

    if (entry?.text) {
      // Apply any state flags this location sets
      [].concat(entry.sets_state ?? []).forEach(f => this.state.flags.add(f));

      // Count unique useful visits
      if (!this.state.visited.has(id)) {
        this.state.visited.add(id);
        this.updateScore();
      }

      this.markPin(id, 'visited');
      this.setContent(`<h3>${loc.name}</h3><p>${this.fmt(entry.text)}</p>`);
    } else {
      // Blank location
      if (!this.state.checked.has(id)) {
        this.state.checked.add(id);
        this.updateScore();
      }
      this.markPin(id, 'checked');
      this.setContent(
        `<h3>${loc.name}</h3>` +
        `<p class="muted">There is nothing here relevant to your investigation.</p>`
      );
    }
  },

  markPin(id, cls) {
    const pin = document.getElementById(`pin-${id}`);
    if (pin) {
      pin.classList.remove('visited', 'checked');
      pin.classList.add(cls);
    }
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
    this.setContent(`<h2>${n.name}</h2><p>${this.fmt(n.text)}</p>`);
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

    const query = input.value.trim();
    const match = Object.entries(STORY.directory)
      .find(([name]) => name.toLowerCase() === query.toLowerCase());

    if (match) {
      const [name, locId] = match;
      const locName = LOCATIONS[locId]?.name ?? 'Unknown';
      result.innerHTML =
        `<div class="dir-result"><strong>${name}</strong> — ` +
        `Location <strong>${locId}</strong>, ${locName}.</div>`;
    } else {
      result.innerHTML =
        `<div class="dir-result muted">No listing found for &#8220;${query}&#8221;.</div>`;
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

      this.state.visited   = new Set(data.v);
      this.state.checked   = new Set(data.k ?? []);
      this.state.informants = new Set(data.i ?? []);
      this.state.flags     = new Set(data.f);
      this.state.phase     = data.p === 'done' ? 'done' : 'playing';

      // Restore pin colours
      for (const id of this.state.visited) this.markPin(id, 'visited');
      for (const id of this.state.checked) this.markPin(id, 'checked');

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
  }
};

window.addEventListener('load', () => Game.init());
