// script.js — behavior for the 60-day French tracker
// No build step, no dependencies. Open index.html directly or serve via GitHub Pages.

const STORAGE_KEYS = {
  currentDay: "fft_currentDay",
  completedDays: "fft_completedDays",
  checklistPrefix: "fft_checklist_",
  notesPrefix: "fft_notes_"
};

let frenchVoice = null;

/* ---------- Text-to-speech ---------- */

function loadFrenchVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  frenchVoice =
    voices.find(v => v.lang === "fr-FR") ||
    voices.find(v => v.lang && v.lang.startsWith("fr")) ||
    null;
}

if (window.speechSynthesis) {
  loadFrenchVoice();
  window.speechSynthesis.onvoiceschanged = loadFrenchVoice;
}

function speak(text) {
  if (!window.speechSynthesis) {
    alert("La synthèse vocale n'est pas disponible dans ce navigateur.");
    return;
  }
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/\([^)]*\)/g, "").split("/")[0].trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "fr-FR";
  if (frenchVoice) utterance.voice = frenchVoice;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

/* ---------- State ---------- */

function getCurrentDay() {
  return parseInt(localStorage.getItem(STORAGE_KEYS.currentDay) || "1", 10);
}

function setCurrentDay(day) {
  const clamped = Math.min(60, Math.max(1, day));
  localStorage.setItem(STORAGE_KEYS.currentDay, String(clamped));
  return clamped;
}

function getCompletedDays() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.completedDays) || "[]"));
  } catch (e) {
    return new Set();
  }
}

function saveCompletedDays(set) {
  localStorage.setItem(STORAGE_KEYS.completedDays, JSON.stringify(Array.from(set)));
}

function getChecklistState(day) {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.checklistPrefix + day) || "[]");
  } catch (e) {
    return [];
  }
}

function setChecklistState(day, arr) {
  localStorage.setItem(STORAGE_KEYS.checklistPrefix + day, JSON.stringify(arr));
}

function getNotes(day) {
  return localStorage.getItem(STORAGE_KEYS.notesPrefix + day) || "";
}

function setNotes(day, text) {
  localStorage.setItem(STORAGE_KEYS.notesPrefix + day, text);
}

function getBlockForDay(day) {
  return BLOCKS.find(b => day >= b.range[0] && day <= b.range[1]) || BLOCKS[BLOCKS.length - 1];
}

function computeStreak() {
  const completed = getCompletedDays();
  const today = getCurrentDay();
  let streak = 0;
  let d = today - 1;
  while (d >= 1 && completed.has(d)) {
    streak++;
    d--;
  }
  return streak;
}

/* ---------- Helpers ---------- */

// Look up a VOCAB entry by its French headword (exact match against the fr
// column across all categories). Returns [fr, en] or null if not found.
function findVocabEntry(frTerm) {
  for (const words of Object.values(VOCAB)) {
    const hit = words.find(([fr]) => fr === frTerm);
    if (hit) return hit;
  }
  return null;
}

function updateChecklistProgress(day) {
  const state = getChecklistState(day);
  const total = SESSION_TEMPLATE.length;
  const done = state.filter(Boolean).length;
  const el = document.getElementById("checklist-progress");
  el.textContent = `${done}/${total}`;
  el.classList.toggle("complete", done === total);
}

/* ---------- Rendering: Today ---------- */

function renderToday() {
  const day = getCurrentDay();
  const block = getBlockForDay(day);
  const detail = DAY_DETAILS[day] || { grammar: block.grammar, vocab: block.vocabFocus, vocabWords: [], tables: [], prompt: block.prompts[0] };
  const prompt = detail.prompt;

  document.getElementById("day-stamp").textContent = `Jour ${day}`;
  document.getElementById("block-title").textContent = `${block.title} (jours ${block.range[0]}–${block.range[1]})`;
  document.getElementById("block-grammar").textContent = detail.grammar;
  document.getElementById("today-prompt").textContent = prompt;
  document.getElementById("streak-number").textContent = computeStreak();
  document.getElementById("jump-input").value = day;
  document.getElementById("today-main").style.setProperty("--block-color", block.color || "#2c5f8a");

  // Example sentences for today's vocab — one per word, using only grammar
  // taught up to this day, each with its own TTS button.
  const examplesEl = document.getElementById("today-vocab-examples");
  examplesEl.innerHTML = "";
  (detail.vocabExamples || []).forEach(([fr, en]) => {
    const row = document.createElement("div");
    row.className = "example-sentence";
    const left = document.createElement("div");
    left.className = "example-sentence-text";
    left.innerHTML = `<span class="ex-fr">${fr}</span><span class="ex-en">${en}</span>`;
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.textContent = "🔊";
    btn.setAttribute("aria-label", `Écouter : ${fr}`);
    btn.onclick = () => speak(fr);
    row.appendChild(left);
    row.appendChild(btn);
    examplesEl.appendChild(row);
  });

  // Conjugation tables — collapsible <details>, closed by default on heavy
  // review days so the page doesn't open as a wall of grids.
  const isReviewDay = REVIEW_DAYS.includes(day);
  const tablesEl = document.getElementById("conjugation-tables");
  tablesEl.innerHTML = "";
  (detail.tables || []).forEach(table => {
    const details = document.createElement("details");
    details.className = "conj-table";
    if (!isReviewDay) details.setAttribute("open", "");

    const summary = document.createElement("summary");
    summary.textContent = table.title;
    details.appendChild(summary);

    const body = document.createElement("div");
    body.className = "conj-table-body";

    const tableEl = document.createElement("table");
    table.rows.forEach(([pronoun, form]) => {
      const tr = document.createElement("tr");
      const tdP = document.createElement("td");
      tdP.className = "conj-pronoun";
      tdP.textContent = pronoun;
      const tdF = document.createElement("td");
      tdF.className = "conj-form";
      tdF.textContent = form;
      const tdBtn = document.createElement("td");
      const btn = document.createElement("button");
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", `Écouter ${pronoun} ${form}`);
      btn.onclick = () => {
        const cleanPronoun = pronoun.split("/")[0].replace(/[()→]/g, "").trim();
        let phrase;
        if (!cleanPronoun) phrase = form;
        else if (cleanPronoun.endsWith("'")) phrase = cleanPronoun + form;
        else phrase = `${cleanPronoun} ${form}`;
        speak(phrase);
      };
      tdBtn.appendChild(btn);
      tr.appendChild(tdP);
      tr.appendChild(tdF);
      tr.appendChild(tdBtn);
      tableEl.appendChild(tr);
    });
    body.appendChild(tableEl);

    if (table.note) {
      const note = document.createElement("p");
      note.className = "conj-note";
      note.textContent = table.note;
      body.appendChild(note);
    }

    details.appendChild(body);
    tablesEl.appendChild(details);
  });

  const notesEl = document.getElementById("day-notes");
  notesEl.value = getNotes(day);
  notesEl.oninput = () => setNotes(day, notesEl.value);

  const checklistEl = document.getElementById("session-checklist");
  const savedState = getChecklistState(day);
  checklistEl.innerHTML = "";
  SESSION_TEMPLATE.forEach((step, i) => {
    const li = document.createElement("li");
    if (savedState[i]) li.classList.add("step-done");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!savedState[i];
    checkbox.addEventListener("change", () => {
      const state = getChecklistState(day);
      state[i] = checkbox.checked;
      setChecklistState(day, state);
      li.classList.toggle("step-done", checkbox.checked);
      updateChecklistProgress(day);
    });
    const span = document.createElement("span");
    span.textContent = step;
    li.appendChild(checkbox);
    li.appendChild(span);
    checklistEl.appendChild(li);
  });
  updateChecklistProgress(day);

  document.getElementById("speak-prompt").onclick = () => speak(prompt);
}

/* ---------- Rendering: Vocabulary ---------- */

function renderVocab() {
  const container = document.getElementById("vocab-list");
  container.innerHTML = "";
  Object.entries(VOCAB).forEach(([category, words]) => {
    const block = document.createElement("div");
    block.className = "category-block";
    const h3 = document.createElement("h3");
    h3.textContent = category;
    block.appendChild(h3);

    words.forEach(([fr, en]) => {
      const row = document.createElement("div");
      row.className = "word-row";
      const left = document.createElement("div");
      left.className = "word-left";
      left.innerHTML = `<span class="word-fr">${fr}</span><span class="word-en">${en}</span>`;
      const btn = document.createElement("button");
      btn.className = "speak-btn";
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", `Écouter ${fr}`);
      btn.onclick = () => speak(fr);
      row.appendChild(left);
      row.appendChild(btn);
      block.appendChild(row);
    });
    container.appendChild(block);
  });
}

/* ---------- Rendering: Phrases ---------- */

function renderPhrases() {
  const container = document.getElementById("phrases-list");
  container.innerHTML = "";
  CHUNKS.forEach(([fr, en]) => {
    const row = document.createElement("div");
    row.className = "word-row";
    const left = document.createElement("div");
    left.className = "word-left";
    left.innerHTML = `<span class="word-fr">${fr}</span><span class="word-en">${en}</span>`;
    const btn = document.createElement("button");
    btn.className = "speak-btn";
    btn.textContent = "🔊";
    btn.setAttribute("aria-label", `Écouter ${fr}`);
    btn.onclick = () => speak(fr);
    row.appendChild(left);
    row.appendChild(btn);
    container.appendChild(row);
  });
}

/* ---------- Rendering: Pronunciation ---------- */

function renderPronunciation() {
  const container = document.getElementById("pronunciation-list");
  container.innerHTML = "";
  PRONUNCIATION_PATTERNS.forEach(pattern => {
    const card = document.createElement("div");
    card.className = "pattern-card";
    const h4 = document.createElement("h4");
    h4.textContent = pattern.name;
    const p = document.createElement("p");
    p.textContent = pattern.hint;
    const examplesWrap = document.createElement("div");
    examplesWrap.className = "pattern-examples";
    pattern.examples.forEach(([fr, hint]) => {
      const chip = document.createElement("div");
      chip.className = "example-chip";
      const span = document.createElement("span");
      span.textContent = `${fr} — ${hint}`;
      const btn = document.createElement("button");
      btn.textContent = "🔊";
      btn.setAttribute("aria-label", `Écouter ${fr}`);
      btn.onclick = () => speak(fr);
      chip.appendChild(span);
      chip.appendChild(btn);
      examplesWrap.appendChild(chip);
    });
    card.appendChild(h4);
    card.appendChild(p);
    card.appendChild(examplesWrap);
    container.appendChild(card);
  });
}

/* ---------- Rendering: Progress ---------- */

function renderProgress() {
  const grid = document.getElementById("grid-60");
  grid.innerHTML = "";
  const completed = getCompletedDays();
  const current = getCurrentDay();

  for (let d = 1; d <= 60; d++) {
    const cell = document.createElement("div");
    cell.className = "day-cell";
    if (completed.has(d)) cell.classList.add("done");
    if (d === current) cell.classList.add("current");
    cell.textContent = d;
    cell.title = getBlockForDay(d).title;
    cell.onclick = () => {
      const set = getCompletedDays();
      if (set.has(d)) set.delete(d); else set.add(d);
      saveCompletedDays(set);
      renderProgress();
      renderToday();
    };
    grid.appendChild(cell);
  }
}

/* ---------- Controls ---------- */

document.getElementById("complete-day-btn").addEventListener("click", () => {
  const day = getCurrentDay();
  const set = getCompletedDays();
  set.add(day);
  saveCompletedDays(set);
  setCurrentDay(day + 1);
  renderToday();
  renderProgress();
});

document.getElementById("jump-btn").addEventListener("click", () => {
  const val = parseInt(document.getElementById("jump-input").value, 10) || 1;
  setCurrentDay(val);
  renderToday();
  renderProgress();
});

document.getElementById("reset-btn").addEventListener("click", () => {
  if (!confirm("Réinitialiser toute la progression ? Cette action est irréversible.")) return;
  Object.keys(localStorage)
    .filter(k => k.startsWith("fft_"))
    .forEach(k => localStorage.removeItem(k));
  renderToday();
  renderProgress();
});

/* ---------- Tabs ---------- */

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* ---------- Init ---------- */

renderToday();
renderVocab();
renderPhrases();
renderPronunciation();
renderProgress();
