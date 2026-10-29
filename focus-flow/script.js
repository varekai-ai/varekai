const STORAGE_KEY = "focus-flow-state";

const MODE_LABELS = { focus: "Focus", short: "Short Break", long: "Long Break" };

const els = {
  timerDisplay: document.getElementById("timerDisplay"),
  activeTaskLabel: document.getElementById("activeTaskLabel"),
  startPauseBtn: document.getElementById("startPauseBtn"),
  resetBtn: document.getElementById("resetBtn"),
  sessionCount: document.getElementById("sessionCount"),
  modeTabs: document.querySelectorAll(".mode-tab"),
  taskForm: document.getElementById("taskForm"),
  taskInput: document.getElementById("taskInput"),
  taskList: document.getElementById("taskList"),
  focusLength: document.getElementById("focusLength"),
  shortLength: document.getElementById("shortLength"),
  longLength: document.getElementById("longLength"),
};

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const today = new Date().toDateString();
  const defaults = {
    tasks: [],
    selectedTaskId: null,
    settings: { focus: 25, short: 5, long: 15 },
    sessionsToday: 0,
    sessionsDate: today,
  };
  if (!raw) return defaults;
  try {
    const parsed = JSON.parse(raw);
    if (parsed.sessionsDate !== today) {
      parsed.sessionsToday = 0;
      parsed.sessionsDate = today;
    }
    return { ...defaults, ...parsed, settings: { ...defaults.settings, ...parsed.settings } };
  } catch {
    return defaults;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

let mode = "focus";
let secondsLeft = state.settings.focus * 60;
let running = false;
let intervalId = null;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function modeLengthMinutes(m) {
  return state.settings[m];
}

function renderTimer() {
  els.timerDisplay.textContent = formatTime(secondsLeft);
  document.title = `${formatTime(secondsLeft)} · ${MODE_LABELS[mode]} · Focus Flow`;
  els.startPauseBtn.textContent = running ? "Pause" : "Start";
  els.sessionCount.textContent = `${state.sessionsToday} focus session${state.sessionsToday === 1 ? "" : "s"} completed today`;

  const task = state.tasks.find((t) => t.id === state.selectedTaskId);
  els.activeTaskLabel.textContent = task ? `Working on: ${task.name}` : "No task selected";
}

function renderModeTabs() {
  els.modeTabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
}

function renderTasks() {
  els.taskList.innerHTML = "";
  if (state.tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-state";
    empty.textContent = "No tasks yet. Add one to start a focus session.";
    els.taskList.appendChild(empty);
    return;
  }

  state.tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.id === state.selectedTaskId ? " selected" : "") + (task.done ? " done" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      task.done = !task.done;
      saveState();
      renderTasks();
    });

    const name = document.createElement("span");
    name.className = "task-name";
    name.textContent = task.name;

    const sessions = document.createElement("span");
    sessions.className = "task-sessions";
    sessions.textContent = `${task.sessions} 🍅`;

    const del = document.createElement("button");
    del.className = "task-delete";
    del.textContent = "×";
    del.title = "Delete task";
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      state.tasks = state.tasks.filter((t) => t.id !== task.id);
      if (state.selectedTaskId === task.id) state.selectedTaskId = null;
      saveState();
      renderTasks();
      renderTimer();
    });

    li.addEventListener("click", () => {
      state.selectedTaskId = task.id;
      saveState();
      renderTasks();
      renderTimer();
    });

    li.append(checkbox, name, sessions, del);
    els.taskList.appendChild(li);
  });
}

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const now = ctx.currentTime;
    [880, 1108].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.001, now + i * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.2, now + i * 0.18 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.18 + 0.35);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.18);
      osc.stop(now + i * 0.18 + 0.4);
    });
  } catch {
    // audio not available, ignore
  }
}

function switchMode(newMode, { autoStart = false } = {}) {
  mode = newMode;
  secondsLeft = modeLengthMinutes(mode) * 60;
  running = false;
  clearInterval(intervalId);
  renderModeTabs();
  renderTimer();
  if (autoStart) startTimer();
}

function tick() {
  secondsLeft -= 1;
  if (secondsLeft <= 0) {
    clearInterval(intervalId);
    running = false;
    playChime();
    handleSessionComplete();
    return;
  }
  renderTimer();
}

function handleSessionComplete() {
  if (mode === "focus") {
    state.sessionsToday += 1;
    const task = state.tasks.find((t) => t.id === state.selectedTaskId);
    if (task) task.sessions += 1;
    saveState();
    renderTasks();
    const nextMode = state.sessionsToday % 4 === 0 ? "long" : "short";
    switchMode(nextMode);
  } else {
    switchMode("focus");
  }
  renderTimer();
}

function startTimer() {
  if (running) return;
  running = true;
  intervalId = setInterval(tick, 1000);
  renderTimer();
}

function pauseTimer() {
  running = false;
  clearInterval(intervalId);
  renderTimer();
}

function resetTimer() {
  running = false;
  clearInterval(intervalId);
  secondsLeft = modeLengthMinutes(mode) * 60;
  renderTimer();
}

els.startPauseBtn.addEventListener("click", () => {
  if (running) pauseTimer();
  else startTimer();
});

els.resetBtn.addEventListener("click", resetTimer);

els.modeTabs.forEach((btn) => {
  btn.addEventListener("click", () => switchMode(btn.dataset.mode));
});

els.taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = els.taskInput.value.trim();
  if (!name) return;
  const task = { id: crypto.randomUUID(), name, sessions: 0, done: false };
  state.tasks.push(task);
  if (!state.selectedTaskId) state.selectedTaskId = task.id;
  els.taskInput.value = "";
  saveState();
  renderTasks();
  renderTimer();
});

[["focusLength", "focus"], ["shortLength", "short"], ["longLength", "long"]].forEach(([elId, key]) => {
  els[elId].addEventListener("change", () => {
    const val = Math.max(1, parseInt(els[elId].value, 10) || 1);
    state.settings[key] = val;
    els[elId].value = val;
    saveState();
    if (mode === key && !running) {
      secondsLeft = val * 60;
      renderTimer();
    }
  });
});

// init
els.focusLength.value = state.settings.focus;
els.shortLength.value = state.settings.short;
els.longLength.value = state.settings.long;
renderModeTabs();
renderTasks();
renderTimer();
