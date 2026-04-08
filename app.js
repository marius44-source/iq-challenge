(function () {
  "use strict";

  const CATEGORIES = Object.keys(CATEGORY_INFO);
  const HISTORY_KEY = "iq_test_question_history";

  // Test configuration per age group
  const AGE_GROUP_CONFIG = {
    "5-7":   { pool: "QUESTIONS_AGE_5_7",  perCat: 3, time: 10 * 60, badge: "age.badge57" },
    "8-11":  { pool: "QUESTIONS_AGE_8_11", perCat: 4, time: 15 * 60, badge: "age.badge811" },
    "12-15": { pool: "QUESTIONS_AGE_12_15", perCat: 4, time: 18 * 60, badge: "age.badge1215" },
    "adult": { pool: "QUESTIONS",           perCat: 5, time: 20 * 60, badge: "age.adultBadge" }
  };

  // Normalization norms per sub-age-group
  const AGE_NORMS = {
    "5":     { meanRatio: 0.28, sd: 0.12, label: "5" },
    "6":     { meanRatio: 0.32, sd: 0.12, label: "6" },
    "7":     { meanRatio: 0.36, sd: 0.13, label: "7" },
    "8-9":   { meanRatio: 0.38, sd: 0.13, label: "8–9" },
    "10-11": { meanRatio: 0.44, sd: 0.14, label: "10–11" },
    "12-13": { meanRatio: 0.46, sd: 0.14, label: "12–13" },
    "14-15": { meanRatio: 0.50, sd: 0.15, label: "14–15" },
    "16-19": { meanRatio: 0.48, sd: 0.15, label: "16–19" },
    "20-24": { meanRatio: 0.50, sd: 0.15, label: "20–24" },
    "25-34": { meanRatio: 0.48, sd: 0.14, label: "25–34" },
    "35-44": { meanRatio: 0.45, sd: 0.14, label: "35–44" },
    "45-54": { meanRatio: 0.42, sd: 0.13, label: "45–54" },
    "55-64": { meanRatio: 0.38, sd: 0.13, label: "55–64" },
    "65+":   { meanRatio: 0.35, sd: 0.12, label: "65+" }
  };

  function getAgeGroupKey(age) {
    if (age <= 7) return "5-7";
    if (age <= 11) return "8-11";
    if (age <= 15) return "12-15";
    return "adult";
  }

  function getAgeNorm(age) {
    if (age <= 5) return AGE_NORMS["5"];
    if (age <= 6) return AGE_NORMS["6"];
    if (age <= 7) return AGE_NORMS["7"];
    if (age <= 9) return AGE_NORMS["8-9"];
    if (age <= 11) return AGE_NORMS["10-11"];
    if (age <= 13) return AGE_NORMS["12-13"];
    if (age <= 15) return AGE_NORMS["14-15"];
    if (age <= 19) return AGE_NORMS["16-19"];
    if (age <= 24) return AGE_NORMS["20-24"];
    if (age <= 34) return AGE_NORMS["25-34"];
    if (age <= 44) return AGE_NORMS["35-44"];
    if (age <= 54) return AGE_NORMS["45-54"];
    if (age <= 64) return AGE_NORMS["55-64"];
    return AGE_NORMS["65+"];
  }

  function getGroupConfig() {
    return AGE_GROUP_CONFIG[getAgeGroupKey(state.age)];
  }

  function getQuestionsPerCategory() {
    return getGroupConfig().perCat;
  }

  function getTotalQuestions() {
    return getQuestionsPerCategory() * CATEGORIES.length;
  }

  function getTotalTime() {
    return getGroupConfig().time;
  }

  function getQuestionPool() {
    const key = getAgeGroupKey(state.age);
    if (key === "5-7") return QUESTIONS_AGE_5_7;
    if (key === "8-11") return QUESTIONS_AGE_8_11;
    if (key === "12-15") return QUESTIONS_AGE_12_15;
    return QUESTIONS;
  }

  function getTrainingData() {
    return getTrainingDataForAge(state.age || 99);
  }

  let state = {
    currentIndex: 0,
    answers: [],
    timeRemaining: 20 * 60,
    timerInterval: null,
    startTime: null,
    endTime: null,
    shuffledQuestions: [],
    optionMaps: [],
    selectedCountry: "",
    age: 0
  };

  // DOM elements
  const $ = (sel) => document.querySelector(sel);
  const screens = {
    landing: $("#landing"),
    test: $("#test"),
    results: $("#results"),
    review: $("#review"),
    "training-hub": $("#training-hub"),
    "training-levels": $("#training-levels"),
    "training-exercise": $("#training-exercise"),
    "training-complete": $("#training-complete")
  };

  let trainingState = {
    currentCategory: null,
    currentLevel: null,
    currentIndex: 0,
    exercises: [],
    answered: [],
    hintShown: false,
    tipsOpen: false
  };

  // ===== INITIALIZATION =====
  function init() {
    $("#start-btn").addEventListener("click", startTest);
    $("#test-home-btn").addEventListener("click", goHomeFromTest);
    $("#prev-btn").addEventListener("click", prevQuestion);
    $("#next-btn").addEventListener("click", nextQuestion);
    $("#skip-btn").addEventListener("click", skipQuestion);
    $("#finish-btn").addEventListener("click", finishTest);
    $("#retake-btn").addEventListener("click", retakeTest);
    $("#review-btn").addEventListener("click", showReview);
    $("#back-results-btn").addEventListener("click", () => showScreen("results"));

    $("#train-btn").addEventListener("click", () => { if (requireAge()) openTrainingHub(); });
    $("#train-from-results-btn").addEventListener("click", () => openTrainingHub());
    $("#train-back-home").addEventListener("click", () => showScreen("landing"));
    $("#train-back-hub").addEventListener("click", () => {
      if (trainingState.currentCategory) openLevelSelection(trainingState.currentCategory);
      else openTrainingHub();
    });
    $("#levels-back-hub").addEventListener("click", () => openTrainingHub());
    $("#training-tips-toggle").addEventListener("click", toggleTips);
    $("#training-hint-btn").addEventListener("click", showTrainingHint);
    $("#training-next-btn").addEventListener("click", nextTrainingExercise);
    $("#training-finish-btn").addEventListener("click", finishTraining);
    $("#train-to-test-btn").addEventListener("click", startTest);

    setupAgeInput();
    addScoreGradient();
    populateCountryDropdown();

    I18N.onChange(() => {
      I18N.apply();
      if (state.age >= 5) {
        const badge = $("#age-badge");
        if (badge && badge.classList.contains("visible")) {
          const svg = badge.querySelector("svg");
          const svgHtml = svg ? svg.outerHTML + " " : "";
          badge.innerHTML = svgHtml + I18N.t(getGroupConfig().badge);
        }
      }
      const activeScreen = Object.entries(screens).find(([, s]) => s.classList.contains("active"));
      if (activeScreen) {
        const name = activeScreen[0];
        if (name === "test" && state.shuffledQuestions.length > 0) renderQuestion();
        else if (name === "results" && state.iqScore !== undefined) {
          $("#score-label").textContent = getIQLabel(state.iqScore);
          if (state.lastResults) {
            const ageNote = document.querySelector(".age-group-note");
            if (ageNote) {
              ageNote.innerHTML = buildAgeNoteHtml(state.age, state.lastResults);
            }
          }
        }
        else if (name === "review" && state.shuffledQuestions.length > 0) showReview();
        else if (name === "training-hub") renderTrainingHub();
        else if (name === "training-levels" && trainingState.currentCategory) openLevelSelection(trainingState.currentCategory);
        else if (name === "training-exercise") { renderTrainingTips(getTrainingData()[trainingState.currentCategory].tips); renderTrainingExercise(); }
      }
    });
    I18N.init();
  }

  function addScoreGradient() {
    const svg = $(".score-svg");
    if (!svg) return;
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    grad.setAttribute("id", "score-gradient");
    grad.setAttribute("x1", "0%");
    grad.setAttribute("y1", "0%");
    grad.setAttribute("x2", "100%");
    grad.setAttribute("y2", "100%");

    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("style", "stop-color:#6C63FF");

    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("style", "stop-color:#FF6584");

    grad.appendChild(stop1);
    grad.appendChild(stop2);
    defs.appendChild(grad);
    svg.insertBefore(defs, svg.firstChild);
  }

  function populateCountryDropdown() {
    const select = $("#country-select");
    if (!select) return;
    const countries = Object.keys(COUNTRY_IQ_DATA).sort();
    countries.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      select.appendChild(opt);
    });
    select.addEventListener("change", (e) => {
      state.selectedCountry = e.target.value;
    });
  }

  // ===== AGE INPUT =====
  function setupAgeInput() {
    const input = $("#age-input");
    const badge = $("#age-badge");
    if (!input || !badge) return;

    const childSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M5 20c0-4 3.5-7 7-7s7 3 7 7"/></svg> ';
    const adultSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> ';

    input.addEventListener("input", () => {
      const val = parseInt(input.value, 10);
      if (isNaN(val) || val < 5 || val > 120) {
        badge.className = "age-badge";
        badge.innerHTML = "";
        state.age = 0;
        return;
      }
      state.age = val;
      const cfg = getGroupConfig();
      const isChild = val < 16;
      badge.className = "age-badge " + (isChild ? "child" : "adult") + " visible";
      badge.innerHTML = (isChild ? childSvg : adultSvg) + I18N.t(cfg.badge);
    });
  }

  // ===== SCREEN MANAGEMENT + BROWSER HISTORY =====
  const screenHistory = ["landing"];
  let _skipPush = false;

  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[name].classList.add("active");
    window.scrollTo(0, 0);

    if (!_skipPush) {
      screenHistory.push(name);
      history.pushState({ screen: name, idx: screenHistory.length - 1 }, "");
    }
  }

  function navigateBack() {
    const current = screenHistory[screenHistory.length - 1] || "landing";

    if (current === "test") {
      clearInterval(state.timerInterval);
    }

    if (screenHistory.length > 1) {
      screenHistory.pop();
    }
    const target = screenHistory[screenHistory.length - 1] || "landing";

    // Guard: don't go back TO test/exercise if no data
    const safeName = (target === "test" && state.shuffledQuestions.length === 0) ? "landing"
      : (target === "training-exercise" && trainingState.exercises.length === 0) ? "training-hub"
      : target;

    Object.values(screens).forEach((s) => s.classList.remove("active"));
    screens[safeName].classList.add("active");
    window.scrollTo(0, 0);
  }

  history.replaceState({ screen: "landing", idx: 0 }, "");
  window.addEventListener("popstate", function () {
    _skipPush = true;
    navigateBack();
    _skipPush = false;
  });

  // ===== QUESTION HISTORY (avoid repeats across retakes) =====
  function getQuestionHistory() {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  function saveQuestionHistory(usedIds) {
    try {
      let history = getQuestionHistory();
      history.push({ ids: usedIds, ts: Date.now() });
      const MAX_SESSIONS = 10;
      if (history.length > MAX_SESSIONS) {
        history = history.slice(history.length - MAX_SESSIONS);
      }
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch { /* localStorage unavailable */ }
  }

  function getRecentlyUsedIds() {
    const history = getQuestionHistory();
    const seen = new Set();
    history.forEach((session) => {
      session.ids.forEach((id) => seen.add(id));
    });
    return seen;
  }

  function shouldResetHistory(recentIds, pool, qPerCat) {
    const questionPool = pool || getQuestionPool();
    const perCat = qPerCat || getQuestionsPerCategory();
    let needsReset = false;
    CATEGORIES.forEach((cat) => {
      const catQuestions = questionPool.filter((q) => q.category === cat);
      const unseenCount = catQuestions.filter((q) => !recentIds.has(q.id)).length;
      if (unseenCount < perCat) {
        needsReset = true;
      }
    });
    return needsReset;
  }

  // ===== SHUFFLE UTILITIES =====
  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function shuffleQuestions() {
    const pool = getQuestionPool();
    const qPerCat = getQuestionsPerCategory();

    let recentIds = getRecentlyUsedIds();
    if (shouldResetHistory(recentIds, pool, qPerCat)) {
      try { localStorage.removeItem(HISTORY_KEY); } catch {}
      recentIds = new Set();
    }

    const byCategory = {};
    pool.forEach((q) => {
      if (!byCategory[q.category]) byCategory[q.category] = [];
      byCategory[q.category].push(q);
    });

    const selected = [];
    const categories = shuffleArray(CATEGORIES);

    categories.forEach((cat) => {
      const allCat = shuffleArray(byCategory[cat] || []);
      const unseen = allCat.filter((q) => !recentIds.has(q.id));
      const seen = allCat.filter((q) => recentIds.has(q.id));

      const prioritized = [...unseen, ...shuffleArray(seen)];

      const byDiff = {};
      prioritized.forEach((q) => {
        if (!byDiff[q.difficulty]) byDiff[q.difficulty] = [];
        byDiff[q.difficulty].push(q);
      });

      const picked = [];
      const diffs = Object.keys(byDiff).map(Number).sort((a, b) => a - b);

      for (const d of diffs) {
        if (picked.length >= qPerCat) break;
        if (byDiff[d].length > 0) {
          picked.push(byDiff[d].shift());
        }
      }

      if (picked.length < qPerCat) {
        const remaining = [];
        diffs.forEach((d) => remaining.push(...byDiff[d]));
        const pickedIds = new Set(picked.map((p) => p.id));
        const extra = remaining.filter((q) => !pickedIds.has(q.id));
        while (picked.length < qPerCat && extra.length > 0) {
          picked.push(extra.shift());
        }
      }

      picked.sort((a, b) => a.difficulty - b.difficulty);
      selected.push(...picked);
    });

    const catQueues = {};
    categories.forEach((cat) => { catQueues[cat] = []; });
    selected.forEach((q) => catQueues[q.category].push(q));

    const result = [];
    const maxLen = Math.max(...Object.values(catQueues).map((a) => a.length));
    for (let i = 0; i < maxLen; i++) {
      for (const cat of categories) {
        if (i < catQueues[cat].length) {
          result.push(catQueues[cat][i]);
        }
      }
    }

    state.shuffledQuestions = result;
    state.optionMaps = result.map((q) => {
      const indices = q.options.map((_, i) => i);
      return shuffleArray(indices);
    });
  }

  // ===== AGE VALIDATION =====
  function requireAge() {
    if (state.age >= 5 && state.age <= 120) return true;
    const ageInput = $("#age-input");
    if (ageInput) {
      ageInput.focus();
      ageInput.style.borderColor = "var(--error)";
      ageInput.style.boxShadow = "0 0 0 3px rgba(255,107,107,0.3)";
      setTimeout(() => {
        ageInput.style.borderColor = "";
        ageInput.style.boxShadow = "";
      }, 2000);
    }
    alert(I18N.t("age.required"));
    return false;
  }

  // ===== TEST START =====
  function startTest() {
    if (!requireAge()) return;

    const totalQ = getTotalQuestions();
    state.currentIndex = 0;
    state.answers = new Array(totalQ).fill(null);
    state.timeRemaining = getTotalTime();
    state.startTime = Date.now();
    state.endTime = null;

    shuffleQuestions();
    showScreen("test");
    startTimer();
    renderQuestion();
  }

  // ===== TIMER =====
  function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        finishTest();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    const display = `${mins}:${secs.toString().padStart(2, "0")}`;
    $("#timer-display").textContent = display;

    const timer = $("#timer");
    timer.classList.remove("warning", "danger");
    if (state.timeRemaining <= 60) timer.classList.add("danger");
    else if (state.timeRemaining <= 300) timer.classList.add("warning");
  }

  // ===== QUESTION RENDERING =====
  function renderQuestion() {
    const q = state.shuffledQuestions[state.currentIndex];
    const idx = state.currentIndex;
    const totalQ = getTotalQuestions();

    // Update header
    $("#question-counter").textContent = `${idx + 1} / ${totalQ}`;
    $("#progress-fill").style.width = `${((idx + 1) / totalQ) * 100}%`;
    const catInfo = CATEGORY_INFO[q.category];
    $("#category-badge").textContent = `${catInfo.icon} ${I18N.tc(q.category)}`;
    $("#category-badge").style.borderColor = catInfo.color;

    // Question text
    $("#question-text").textContent = I18N.tq(q, "question");

    // Visual
    renderVisual(q);

    // Options
    renderOptions(q, idx);

    // Navigation buttons
    $("#prev-btn").disabled = idx === 0;
    if (idx === totalQ - 1) {
      $("#next-btn").style.display = "none";
      $("#skip-btn").style.display = "none";
      $("#finish-btn").style.display = "inline-flex";
    } else {
      $("#next-btn").style.display = "inline-flex";
      $("#skip-btn").style.display = state.answers[idx] === null ? "inline-flex" : "none";
      $("#finish-btn").style.display = "none";
    }
  }

  function renderVisual(q) {
    const container = $("#question-visual");
    container.innerHTML = "";

    switch (q.visual) {
      case "matrix":
        renderMatrix(container, q);
        break;
      case "svg-matrix":
        renderSvgMatrix(container, q);
        break;
      case "sequence":
        renderSequence(container, q.sequence);
        break;
      case "num-sequence":
        renderSequence(container, q.sequence);
        break;
      case "rotation":
        renderRotation(container, q);
        break;
      case "number-grid":
        renderNumberGrid(container, q);
        break;
      case "cube-net":
        renderCubeNet(container, q);
        break;
      case "cube-count":
        renderCubeCount(container, q);
        break;
      case "transform":
        renderTransform(container, q);
        break;
      case "jigsaw":
        renderJigsaw(container, q);
        break;
      case "text":
        break;
    }
  }

  function renderMatrix(container, q) {
    const grid = document.createElement("div");
    grid.className = "matrix-grid";
    q.matrix.grid.forEach((row) => {
      row.forEach((cell) => {
        const el = document.createElement("div");
        el.className = "matrix-cell" + (cell === "?" ? " mystery" : "");
        el.textContent = cell === "?" ? "?" : cell;
        grid.appendChild(el);
      });
    });
    container.appendChild(grid);
  }

  function renderSvgMatrix(container, q) {
    const grid = document.createElement("div");
    grid.className = "svg-matrix-grid";
    q.svgMatrix.cells.forEach((cell) => {
      const el = document.createElement("div");
      if (cell === null) {
        el.className = "svg-matrix-cell mystery";
        el.textContent = "?";
        el.style.fontSize = "1.5rem";
        el.style.color = "var(--primary)";
      } else {
        el.className = "svg-matrix-cell";
        cell.shapes.forEach((shape) => {
          el.appendChild(createShapeSvg(shape.type, shape.fill, 36));
        });
      }
      grid.appendChild(el);
    });
    container.appendChild(grid);
  }

  function createShapeSvg(type, filled, size) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);

    let shape;
    const color = filled ? "#6C63FF" : "none";
    const stroke = "#6C63FF";

    switch (type) {
      case "circle":
        shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        shape.setAttribute("cx", "20");
        shape.setAttribute("cy", "20");
        shape.setAttribute("r", "15");
        break;
      case "square":
        shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        shape.setAttribute("x", "5");
        shape.setAttribute("y", "5");
        shape.setAttribute("width", "30");
        shape.setAttribute("height", "30");
        break;
      case "triangle":
        shape = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        shape.setAttribute("points", "20,3 37,37 3,37");
        break;
    }

    shape.setAttribute("fill", color);
    shape.setAttribute("stroke", stroke);
    shape.setAttribute("stroke-width", "2.5");
    svg.appendChild(shape);
    return svg;
  }

  function renderSequence(container, seq) {
    const wrapper = document.createElement("div");
    wrapper.className = "sequence-display";
    seq.forEach((item, i) => {
      if (i > 0) {
        const arrow = document.createElement("span");
        arrow.className = "seq-arrow";
        arrow.textContent = "→";
        wrapper.appendChild(arrow);
      }
      const el = document.createElement("div");
      el.className = "seq-item" + (item === "?" ? " mystery" : "");
      el.textContent = item === "?" ? "?" : item;
      wrapper.appendChild(el);
    });
    container.appendChild(wrapper);
  }

  function renderRotation(container, q) {
    const wrapper = document.createElement("div");
    wrapper.className = "rotation-display";
    q.rotationSteps.forEach((deg, i) => {
      if (i > 0) {
        const arrow = document.createElement("span");
        arrow.className = "seq-arrow";
        arrow.textContent = "→";
        wrapper.appendChild(arrow);
      }
      const item = document.createElement("div");
      item.className = "rotation-item" + (deg === "?" ? " mystery" : "");

      if (deg === "?") {
        item.innerHTML = '<span style="font-size:1.5rem;color:var(--primary)">?</span>';
      } else {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 50 50");
        svg.setAttribute("width", "50");
        svg.setAttribute("height", "50");
        svg.style.transform = `rotate(${deg}deg)`;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", "25");
        line.setAttribute("y1", "38");
        line.setAttribute("x2", "25");
        line.setAttribute("y2", "8");
        line.setAttribute("stroke", "#6C63FF");
        line.setAttribute("stroke-width", "3");
        line.setAttribute("stroke-linecap", "round");

        const head = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        head.setAttribute("points", "25,5 18,16 32,16");
        head.setAttribute("fill", "#6C63FF");

        svg.appendChild(line);
        svg.appendChild(head);
        item.appendChild(svg);
      }
      wrapper.appendChild(item);
    });
    container.appendChild(wrapper);
  }

  function renderNumberGrid(container, q) {
    const grid = document.createElement("div");
    grid.className = "number-grid";
    q.grid.forEach((row) => {
      row.forEach((cell) => {
        const el = document.createElement("div");
        el.className = "number-cell" + (cell === "?" ? " mystery" : "");
        el.textContent = cell === "?" ? "?" : cell;
        grid.appendChild(el);
      });
    });
    container.appendChild(grid);
  }

  function renderCubeNet(container) {
    const net = document.createElement("div");
    net.className = "cube-net";
    const faces = [
      { pos: "top", label: "B" },
      { pos: "left", label: "C" },
      { pos: "front", label: "A" },
      { pos: "right", label: "E" },
      { pos: "bottom", label: "D" },
      { pos: "back", label: "F" }
    ];
    faces.forEach((f) => {
      const el = document.createElement("div");
      el.className = "cube-face";
      el.setAttribute("data-pos", f.pos);
      el.textContent = f.label;
      net.appendChild(el);
    });
    container.appendChild(net);
  }

  function renderCubeCount(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "cube-3d";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 280 220");
    svg.setAttribute("width", "280");
    svg.setAttribute("height", "220");

    const cubePositions = [
      { x: 40, y: 140 },
      { x: 90, y: 140 },
      { x: 140, y: 140 },
      { x: 190, y: 140 },
      { x: 40, y: 100 },
      { x: 140, y: 100 },
      { x: 140, y: 60 }
    ];

    cubePositions.forEach((pos) => {
      drawIsometricCube(svg, pos.x, pos.y, 45);
    });

    wrapper.appendChild(svg);
    container.appendChild(wrapper);
  }

  function drawIsometricCube(svg, x, y, size) {
    const s = size * 0.5;
    const top = `${x},${y - s} ${x + s},${y - s * 0.5} ${x},${y} ${x - s},${y - s * 0.5}`;
    const left = `${x - s},${y - s * 0.5} ${x},${y} ${x},${y + s * 0.5} ${x - s},${y}`;
    const right = `${x},${y} ${x + s},${y - s * 0.5} ${x + s},${y} ${x},${y + s * 0.5}`;

    [
      { points: left, fill: "#4D4D8A" },
      { points: right, fill: "#3A3A6A" },
      { points: top, fill: "#6C63FF" }
    ].forEach(({ points, fill }) => {
      const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      poly.setAttribute("points", points);
      poly.setAttribute("fill", fill);
      poly.setAttribute("stroke", "#2A2D45");
      poly.setAttribute("stroke-width", "1.5");
      svg.appendChild(poly);
    });
  }

  function renderTransform(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "transform-display";

    // Original L-shape
    const orig = document.createElement("div");
    orig.className = "transform-item";
    const origSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    origSvg.setAttribute("viewBox", "0 0 100 100");
    origSvg.setAttribute("width", "100");
    origSvg.setAttribute("height", "100");
    const origPath = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    origPath.setAttribute("points", "20,20 50,20 50,50 80,50 80,80 20,80");
    origPath.setAttribute("fill", "#6C63FF");
    origPath.setAttribute("stroke", "#8B83FF");
    origPath.setAttribute("stroke-width", "2");
    origSvg.appendChild(origPath);
    const origLabel = document.createElement("div");
    origLabel.className = "transform-label";
    origLabel.textContent = "Figure X (original)";
    orig.appendChild(origSvg);
    orig.appendChild(origLabel);
    wrapper.appendChild(orig);

    const arrow = document.createElement("span");
    arrow.className = "seq-arrow";
    arrow.textContent = "→ 90° CW + Flip H →";
    arrow.style.fontSize = "0.8rem";
    arrow.style.maxWidth = "80px";
    arrow.style.textAlign = "center";
    arrow.style.lineHeight = "1.3";
    wrapper.appendChild(arrow);

    const mystery = document.createElement("div");
    mystery.className = "transform-item";
    const mSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    mSvg.setAttribute("viewBox", "0 0 100 100");
    mSvg.setAttribute("width", "100");
    mSvg.setAttribute("height", "100");
    const mRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    mRect.setAttribute("x", "15");
    mRect.setAttribute("y", "15");
    mRect.setAttribute("width", "70");
    mRect.setAttribute("height", "70");
    mRect.setAttribute("fill", "none");
    mRect.setAttribute("stroke", "#6C63FF");
    mRect.setAttribute("stroke-width", "2");
    mRect.setAttribute("stroke-dasharray", "6 4");
    mRect.setAttribute("rx", "8");
    const mText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    mText.setAttribute("x", "50");
    mText.setAttribute("y", "55");
    mText.setAttribute("text-anchor", "middle");
    mText.setAttribute("fill", "#6C63FF");
    mText.setAttribute("font-size", "24");
    mText.setAttribute("font-weight", "bold");
    mText.textContent = "?";
    mSvg.appendChild(mRect);
    mSvg.appendChild(mText);
    const mLabel = document.createElement("div");
    mLabel.className = "transform-label";
    mLabel.textContent = "Result";
    mystery.appendChild(mSvg);
    mystery.appendChild(mLabel);
    wrapper.appendChild(mystery);

    container.appendChild(wrapper);
  }

  function renderJigsaw(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "jigsaw-display";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "200");

    // Main square with missing corner
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M10,10 L190,10 L190,100 L140,100 L140,140 Q140,190 100,190 L10,190 Z");
    path.setAttribute("fill", "#2A2D55");
    path.setAttribute("stroke", "#6C63FF");
    path.setAttribute("stroke-width", "2");
    svg.appendChild(path);

    // Missing piece outline
    const missing = document.createElementNS("http://www.w3.org/2000/svg", "path");
    missing.setAttribute("d", "M140,100 L190,100 L190,190 L100,190 Q140,190 140,140 Z");
    missing.setAttribute("fill", "none");
    missing.setAttribute("stroke", "#FF6584");
    missing.setAttribute("stroke-width", "2");
    missing.setAttribute("stroke-dasharray", "6 4");
    svg.appendChild(missing);

    wrapper.appendChild(svg);
    container.appendChild(wrapper);
  }

  function createPolygonOptionSvg(points) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("width", "48");
    svg.setAttribute("height", "48");
    svg.style.flexShrink = "0";
    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    poly.setAttribute("points", points);
    poly.setAttribute("fill", "#6C63FF");
    poly.setAttribute("stroke", "#8B83FF");
    poly.setAttribute("stroke-width", "2");
    svg.appendChild(poly);
    return svg;
  }

  function createPathOptionSvg(pathData) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 90 90");
    svg.setAttribute("width", "48");
    svg.setAttribute("height", "48");
    svg.style.flexShrink = "0";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", "#6C63FF");
    path.setAttribute("stroke", "#8B83FF");
    path.setAttribute("stroke-width", "2");
    svg.appendChild(path);
    return svg;
  }

  function renderOptions(q, qIdx) {
    const grid = $("#options-grid");
    grid.innerHTML = "";

    const map = state.optionMaps[qIdx];
    const letters = ["A", "B", "C", "D", "E", "F"];

    map.forEach((origIdx, displayIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (state.answers[qIdx] === origIdx) {
        btn.classList.add("selected");
      }

      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = letters[displayIdx];

      const text = document.createElement("span");
      text.className = "option-text";

      if (q.optionSvgs) {
        const preview = document.createElement("span");
        preview.className = "option-svg-preview";
        q.optionSvgs[origIdx].forEach((shape) => {
          preview.appendChild(createShapeSvg(shape.type, shape.fill, 28));
        });
        text.appendChild(preview);
        const desc = document.createElement("span");
        desc.textContent = " " + (I18N.tq(q, "options"))[origIdx];
        desc.style.fontSize = "0.85rem";
        desc.style.color = "var(--text-muted)";
        text.appendChild(desc);
      } else if (q.optionShapes) {
        const preview = createPolygonOptionSvg(q.optionShapes[origIdx]);
        text.appendChild(preview);
        const desc = document.createElement("span");
        desc.textContent = " " + (I18N.tq(q, "options"))[origIdx];
        desc.style.fontSize = "0.85rem";
        desc.style.color = "var(--text-muted)";
        text.appendChild(desc);
      } else if (q.optionPieces) {
        const preview = createPathOptionSvg(q.optionPieces[origIdx]);
        text.appendChild(preview);
        const desc = document.createElement("span");
        desc.textContent = " " + (I18N.tq(q, "options"))[origIdx];
        desc.style.fontSize = "0.85rem";
        desc.style.color = "var(--text-muted)";
        text.appendChild(desc);
      } else {
        text.textContent = (I18N.tq(q, "options"))[origIdx];
      }

      btn.appendChild(letter);
      btn.appendChild(text);

      btn.addEventListener("click", () => selectOption(qIdx, origIdx));
      grid.appendChild(btn);
    });
  }

  function selectOption(qIdx, origIdx) {
    state.answers[qIdx] = origIdx;
    renderQuestion();
  }

  // ===== NAVIGATION =====
  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderQuestion();
    }
  }

  function nextQuestion() {
    if (state.currentIndex < getTotalQuestions() - 1) {
      state.currentIndex++;
      renderQuestion();
    }
  }

  function skipQuestion() {
    nextQuestion();
  }

  // ===== FINISH TEST =====
  function finishTest() {
    clearInterval(state.timerInterval);
    state.endTime = Date.now();

    const unanswered = state.answers.filter((a) => a === null).length;
    if (unanswered > 0) {
      const proceed = confirm(
        `You have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Are you sure you want to finish?`
      );
      if (!proceed) {
        startTimer();
        return;
      }
    }

    calculateAndShowResults();
  }

  // ===== RESULTS CALCULATION =====
  function calculateAndShowResults() {
    const usedIds = state.shuffledQuestions.map((q) => q.id);
    saveQuestionHistory(usedIds);
    const results = calculateScore();
    state.iqScore = results.iqScore;
    state.lastResults = results;
    showScreen("results");
    animateResults(results);
    trackAnalytics(results);
  }

  function trackAnalytics(results) {
    if (typeof gtag !== "function") return;
    gtag("event", "test_completed", {
      event_category: "IQ Test",
      iq_score: results.iqScore,
      correct_answers: results.correct,
      total_questions: results.total,
      time_used_seconds: results.timeUsed,
      country: state.selectedCountry || "not_selected"
    });
  }

  function calculateScore() {
    const totalQ = getTotalQuestions();
    let correct = 0;
    let categoryScores = {};

    Object.keys(CATEGORY_INFO).forEach((cat) => {
      categoryScores[cat] = { correct: 0, total: 0 };
    });

    state.shuffledQuestions.forEach((q, i) => {
      categoryScores[q.category].total++;
      if (state.answers[i] === q.correct) {
        correct++;
        categoryScores[q.category].correct++;
      }
    });

    const rawScore = correct / totalQ;

    let weightedScore = 0;
    let totalWeight = 0;
    state.shuffledQuestions.forEach((q, i) => {
      const weight = q.difficulty;
      totalWeight += weight;
      if (state.answers[i] === q.correct) {
        weightedScore += weight;
      }
    });
    const weightedRatio = weightedScore / totalWeight;

    // Age-based normalization: compare performance against same age-group norms
    const norm = getAgeNorm(state.age);
    const zScore = (weightedRatio - norm.meanRatio) / norm.sd;
    const iqScore = Math.round(100 + zScore * 15);
    const clampedIQ = Math.max(55, Math.min(160, iqScore));

    const timeUsed = getTotalTime() - state.timeRemaining;

    return {
      iqScore: clampedIQ,
      correct,
      total: totalQ,
      rawScore,
      weightedRatio,
      categoryScores,
      timeUsed,
      ageGroup: norm.label,
      age: state.age
    };
  }

  const IQ_LABEL_KEYS = {
    "Extremely Low": "iq.extremelyLow",
    "Below Average": "iq.belowAverage",
    "Low Average": "iq.lowAverage",
    "Average": "iq.average",
    "Above Average": "iq.aboveAverage",
    "Gifted": "iq.gifted",
    "Genius": "iq.genius"
  };

  function getIQLabel(iq) {
    for (const range of IQ_RANGES) {
      if (iq >= range.min && iq <= range.max) {
        const key = IQ_LABEL_KEYS[range.label];
        return key ? I18N.t(key) : range.label;
      }
    }
    return "Unknown";
  }

  function getPercentile(iq) {
    if (iq >= 145) return "99.9th";
    if (iq >= 130) return "97th";
    if (iq >= 115) return "84th";
    if (iq >= 100) return "50th";
    if (iq >= 85) return "37th";
    if (iq >= 70) return "14th";
    return "2nd";
  }

  function buildAgeNoteHtml(age, results) {
    const groupKey = getAgeGroupKey(age);
    if (groupKey === "adult") {
      return I18N.t("age.groupNote", { group: "<strong>" + results.ageGroup + "</strong>" });
    }
    const cfg = AGE_GROUP_CONFIG[groupKey];
    return I18N.t("age.childNote", { age: age, n: results.total, time: Math.round(cfg.time / 60) });
  }

  function animateResults(results) {
    const { iqScore, correct, total, categoryScores, timeUsed, ageGroup, age } = results;

    // Age group note
    let ageNote = document.querySelector(".age-group-note");
    if (!ageNote) {
      ageNote = document.createElement("div");
      ageNote.className = "age-group-note";
      const resultsHeader = document.querySelector(".results-header");
      if (resultsHeader) resultsHeader.parentNode.insertBefore(ageNote, resultsHeader);
    }
    ageNote.innerHTML = buildAgeNoteHtml(age, results);

    // Score ring
    setTimeout(() => {
      const maxIQ = 160;
      const minIQ = 55;
      const ratio = (iqScore - minIQ) / (maxIQ - minIQ);
      const circumference = 565.48;
      const offset = circumference * (1 - ratio);
      $("#score-ring").style.strokeDashoffset = offset;
    }, 300);

    // Score value counter
    let current = 55;
    const scoreInterval = setInterval(() => {
      current += Math.ceil((iqScore - 55) / 40);
      if (current >= iqScore) {
        current = iqScore;
        clearInterval(scoreInterval);
      }
      $("#score-value").textContent = current;
    }, 50);

    setTimeout(() => {
      $("#score-label").textContent = getIQLabel(iqScore);
    }, 1500);

    // Stats
    $("#stat-correct").textContent = correct;
    $("#stat-total").textContent = total;
    const mins = Math.floor(timeUsed / 60);
    const secs = timeUsed % 60;
    $("#stat-time").textContent = `${mins}:${secs.toString().padStart(2, "0")}`;
    $("#stat-percentile").textContent = getPercentile(iqScore);

    // Category breakdown
    const breakdownGrid = $("#breakdown-grid");
    breakdownGrid.innerHTML = "";
    Object.keys(categoryScores).forEach((cat) => {
      const data = categoryScores[cat];
      if (data.total === 0) return;
      const pct = Math.round((data.correct / data.total) * 100);
      const info = CATEGORY_INFO[cat];

      const card = document.createElement("div");
      card.className = "breakdown-card";
      card.innerHTML = `
        <div class="breakdown-header">
          <span class="breakdown-icon">${info.icon}</span>
          <span class="breakdown-title">${I18N.tc(cat)}</span>
        </div>
        <div class="breakdown-bar">
          <div class="breakdown-bar-fill" style="background: ${info.color}" data-width="${pct}%"></div>
        </div>
        <div class="breakdown-score">${I18N.t("breakdown.correct", {n: data.correct, total: data.total})} (${pct}%)</div>
      `;
      breakdownGrid.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll(".breakdown-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 800);

    // Scale marker
    const scalePosition = ((iqScore - 55) / (160 - 55)) * 100;
    setTimeout(() => {
      $("#scale-marker").style.left = `${Math.max(1, Math.min(99, scalePosition))}%`;
    }, 500);

    // Comparison chart
    renderComparisonChart(iqScore);

    // Training recommendations
    renderTrainingRecommendations(categoryScores);
  }

  function renderComparisonChart(iqScore) {
    const chart = $("#comparison-chart");
    chart.innerHTML = "";

    const rows = [];
    const maxIQ = 160;

    rows.push({
      name: I18N.t("compare.yourScore"),
      sublabel: "",
      value: iqScore,
      barClass: "is-you",
      highlight: true
    });

    if (state.selectedCountry && COUNTRY_IQ_DATA[state.selectedCountry]) {
      const data = COUNTRY_IQ_DATA[state.selectedCountry];
      rows.push({
        name: state.selectedCountry,
        sublabel: I18N.t("compare.countryAvg", {country: ""}),
        value: data.avg,
        barClass: "is-country",
        highlight: false
      });
    }

    rows.push({
      name: I18N.t("compare.europeanAvg"),
      sublabel: "",
      value: REGIONAL_AVERAGES["Europe"],
      barClass: "is-europe",
      highlight: false
    });

    rows.push({
      name: I18N.t("compare.worldAvg"),
      sublabel: "",
      value: REGIONAL_AVERAGES["World"],
      barClass: "is-world",
      highlight: false
    });

    rows.forEach((row, i) => {
      const el = document.createElement("div");
      el.className = "comparison-row" + (row.highlight ? " highlight" : "");

      const diffFromYou = row.highlight ? null : iqScore - row.value;
      let diffHtml = "";
      if (diffFromYou !== null) {
        const cls = diffFromYou > 0 ? "positive" : diffFromYou < 0 ? "negative" : "neutral";
        const sign = diffFromYou > 0 ? "+" : "";
        diffHtml = `<div class="comparison-diff ${cls}">${sign}${diffFromYou}</div>`;
      } else {
        diffHtml = `<div class="comparison-diff neutral">${I18N.t("compare.yourScore")}</div>`;
      }

      const pct = Math.max(5, (row.value / maxIQ) * 100);

      el.innerHTML = `
        <div class="comparison-label">
          <div class="comparison-name">${row.name}</div>
          <div class="comparison-sublabel">${row.sublabel}</div>
        </div>
        <div class="comparison-bar-track">
          <div class="comparison-bar-fill ${row.barClass}" data-width="${pct}%">
            <span class="comparison-bar-value">${row.value}</span>
          </div>
        </div>
        ${diffHtml}
      `;

      chart.appendChild(el);
    });

    setTimeout(() => {
      document.querySelectorAll(".comparison-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 1200);
  }

  // ===== REVIEW =====
  function showReview() {
    showScreen("review");
    const list = $("#review-list");
    list.innerHTML = "";

    state.shuffledQuestions.forEach((q, i) => {
      const userAnswer = state.answers[i];
      const isCorrect = userAnswer === q.correct;
      const isSkipped = userAnswer === null;

      const item = document.createElement("div");
      item.className = `review-item ${isCorrect ? "correct-item" : isSkipped ? "skipped-item" : "incorrect-item"}`;

      let badgeClass, badgeText;
      if (isCorrect) {
        badgeClass = "correct-badge";
        badgeText = I18N.t("review.correct");
      } else if (isSkipped) {
        badgeClass = "skipped-badge";
        badgeText = I18N.t("review.skipped");
      } else {
        badgeClass = "incorrect-badge";
        badgeText = I18N.t("review.incorrect");
      }

      const yourAnswer = isSkipped ? I18N.t("review.skipped") : (I18N.tq(q, "options"))[userAnswer];
      const correctAnswer = (I18N.tq(q, "options"))[q.correct];

      item.innerHTML = `
        <div class="review-q-header">
          <span class="review-q-number">${CATEGORY_INFO[q.category].icon} Q${i + 1} - ${I18N.tc(q.category)}</span>
          <span class="review-q-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="review-q-text">${I18N.tq(q, "question")}</div>
        <div class="review-answer">${I18N.t("review.yourAnswer")} <strong>${yourAnswer}</strong></div>
        ${!isCorrect ? `<div class="review-answer" style="color: var(--success)">${I18N.t("review.correctAnswer")} <strong>${correctAnswer}</strong></div>` : ""}
        <div class="review-explanation">${I18N.tq(q, "explanation")}</div>
      `;

      list.appendChild(item);
    });
  }

  // ===== HOME / RETAKE =====
  function goHomeFromTest() {
    if (!confirm(I18N.t("confirm.leaveTest"))) return;
    clearInterval(state.timerInterval);
    showScreen("landing");
  }

  function retakeTest() {
    showScreen("landing");
  }

  // ===== TRAINING: PROGRESS STORAGE =====
  function trainingProgressKey() {
    return TRAINING_PROGRESS_KEY + "_" + getAgeGroupKey(state.age || 99);
  }

  function getTrainingProgress() {
    try {
      const raw = localStorage.getItem(trainingProgressKey());
      if (!raw) return {};
      return JSON.parse(raw);
    } catch { return {}; }
  }

  function saveTrainingProgress(category, level, correct, total) {
    try {
      const progress = getTrainingProgress();
      if (!progress[category]) progress[category] = {};
      const prev = progress[category][level] || { attempts: 0, bestCorrect: 0, total };
      prev.attempts++;
      if (correct > prev.bestCorrect) prev.bestCorrect = correct;
      prev.total = total;
      progress[category][level] = prev;
      localStorage.setItem(trainingProgressKey(), JSON.stringify(progress));
    } catch {}
  }

  function isLevelUnlocked(category, level) {
    if (level === 1) return true;
    const progress = getTrainingProgress();
    const catProg = progress[category];
    if (!catProg) return false;
    const prevLevel = catProg[level - 1];
    return prevLevel && prevLevel.bestCorrect >= UNLOCK_THRESHOLD;
  }

  function getLevelProgress(category, level) {
    const progress = getTrainingProgress();
    return (progress[category] && progress[category][level]) || null;
  }

  function getCategoryOverallProgress(category) {
    const data = getTrainingData()[category];
    if (!data) return { completed: 0, total: 5 };
    const progress = getTrainingProgress();
    const catProg = progress[category] || {};
    let completed = 0;
    data.levels.forEach((lvl) => {
      const p = catProg[lvl.level];
      if (p && p.bestCorrect >= UNLOCK_THRESHOLD) completed++;
    });
    return { completed, total: data.levels.length };
  }

  // ===== TRAINING: HUB =====
  function openTrainingHub(focusCategory) {
    showScreen("training-hub");
    renderTrainingHub();
    if (focusCategory) {
      setTimeout(() => {
        const cards = document.querySelectorAll(".training-cat-card");
        cards.forEach((c) => {
          if (c.dataset.category === focusCategory) {
            c.scrollIntoView({ behavior: "smooth", block: "center" });
            c.style.boxShadow = "0 0 0 2px var(--primary), 0 8px 32px rgba(108,99,255,0.3)";
            setTimeout(() => { c.style.boxShadow = ""; }, 2000);
          }
        });
      }, 300);
    }
  }

  function renderTrainingHub() {
    const grid = $("#training-category-grid");
    grid.innerHTML = "";

    CATEGORIES.forEach((cat) => {
      const info = CATEGORY_INFO[cat];
      const data = getTrainingData()[cat];
      if (!data) return;
      const overall = getCategoryOverallProgress(cat);
      const pct = Math.round((overall.completed / overall.total) * 100);
      const totalExercises = data.levels.reduce((sum, l) => sum + l.exercises.length, 0);

      const card = document.createElement("div");
      card.className = "training-cat-card";
      card.dataset.category = cat;
      card.style.setProperty("--cat-color", info.color);

      card.innerHTML = `
        <div class="training-cat-icon">${info.icon}</div>
        <h3>${I18N.tc(cat)}</h3>
        <p>${I18N.tTrainingCategoryDescription(cat, info.description)}</p>
        <div class="training-cat-progress">
          <div class="training-cat-progress-bar">
            <div class="training-cat-progress-fill" data-width="${pct}%"></div>
          </div>
          <span class="training-cat-progress-label">
            ${overall.completed > 0 ? `${overall.completed}/${overall.total} ${I18N.t("training.levelsCompleted")}` : `${totalExercises} ${I18N.t("training.exercises")} · 5 ${I18N.t("training.levels")}`}
          </span>
        </div>
        <span class="training-cat-start">${overall.completed > 0 ? I18N.t("training.continueTraining") : I18N.t("training.startTraining")} →</span>
      `;

      card.addEventListener("click", () => openLevelSelection(cat));
      grid.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll(".training-cat-progress-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 200);
  }

  // ===== TRAINING: LEVEL SELECTION =====
  function openLevelSelection(category) {
    trainingState.currentCategory = category;
    const info = CATEGORY_INFO[category];
    const data = getTrainingData()[category];
    if (!data) return;

    $("#training-levels-title").innerHTML = `${info.icon} ${I18N.tc(category)}`;
    showScreen("training-levels");
    renderLevelCards(category, data);
  }

  function renderLevelCards(category, data) {
    const grid = $("#training-levels-grid");
    grid.innerHTML = "";

    const levelIcons = ["1", "2", "3", "4", "5"];

    data.levels.forEach((lvl) => {
      const unlocked = isLevelUnlocked(category, lvl.level);
      const prog = getLevelProgress(category, lvl.level);
      const passed = prog && prog.bestCorrect >= UNLOCK_THRESHOLD;
      const pct = prog ? Math.round((prog.bestCorrect / prog.total) * 100) : 0;

      const card = document.createElement("div");
      card.className = "level-card" + (!unlocked ? " locked" : "") + (passed ? " completed" : "");

      let statusHtml;
      if (!unlocked) {
        statusHtml = `<div class="level-status"><svg class="level-lock-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>`;
      } else if (passed) {
        statusHtml = `<div class="level-status"><svg class="level-check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg></div>`;
      } else {
        statusHtml = `<div class="level-status"><svg class="level-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>`;
      }

      let metaHtml = `<span>${lvl.exercises.length} ${I18N.t("training.exercises")}</span>`;
      if (prog) {
        metaHtml += `<span class="best-score">${I18N.t("training.best")}: ${prog.bestCorrect}/${prog.total} (${pct}%)</span>`;
        metaHtml += `<span>${prog.attempts} ${prog.attempts !== 1 ? I18N.t("training.attempts") : I18N.t("training.attempt")}</span>`;
      }

      card.innerHTML = `
        <div class="level-badge">${levelIcons[lvl.level - 1]}</div>
        <div class="level-info">
          <h3>${I18N.t("training.level")} ${lvl.level} — ${I18N.tlevelName(lvl.name || lvl.title || "")}</h3>
          <p>${I18N.tlevelDesc(lvl.description || "")}</p>
          <div class="level-meta">${metaHtml}</div>
        </div>
        ${statusHtml}
      `;

      if (unlocked) {
        card.addEventListener("click", () => startTrainingLevel(category, lvl.level));
      }

      grid.appendChild(card);
    });
  }

  // ===== TRAINING: EXERCISES =====
  function startTrainingLevel(category, level) {
    const data = getTrainingData()[category];
    if (!data) return;
    const lvl = data.levels.find((l) => l.level === level);
    if (!lvl) return;

    trainingState.currentCategory = category;
    trainingState.currentLevel = level;
    trainingState.currentIndex = 0;
    trainingState.exercises = shuffleArray([...lvl.exercises]);
    trainingState.answered = new Array(lvl.exercises.length).fill(null);
    trainingState.hintShown = false;
    trainingState.tipsOpen = false;

    const info = CATEGORY_INFO[category];
    $("#training-cat-name").textContent = `${info.icon} ${I18N.tc(category)} — ${I18N.t("training.level")} ${level}`;
    $("#training-cat-name").style.color = info.color;

    renderTrainingTips(data.tips);
    $("#training-tips-panel").classList.remove("open");

    showScreen("training-exercise");
    renderTrainingExercise();
  }

  function renderTrainingTips(tips) {
    const container = $("#training-tips-content");
    container.innerHTML = "";
    tips.forEach((tip) => {
      const item = document.createElement("div");
      item.className = "training-tip-item";
      const translated = I18N.ttip(tip); item.innerHTML = `<h4>${translated.title}</h4><p>${translated.content}</p>`;
      container.appendChild(item);
    });
  }

  function toggleTips() {
    const panel = $("#training-tips-panel");
    panel.classList.toggle("open");
    trainingState.tipsOpen = panel.classList.contains("open");
  }

  function renderTrainingExercise() {
    const idx = trainingState.currentIndex;
    const total = trainingState.exercises.length;
    const ex = trainingState.exercises[idx];

    $("#training-ex-counter").textContent = `${idx + 1} / ${total}`;
    $("#training-progress-fill").style.width = `${((idx + 1) / total) * 100}%`;

    const diffContainer = $("#training-ex-difficulty");
    diffContainer.innerHTML = `${I18N.t("training.level")} ${trainingState.currentLevel} `;

    $("#training-ex-question").textContent = I18N.tq(ex, "question");

    const optGrid = $("#training-ex-options");
    optGrid.innerHTML = "";
    const answered = trainingState.answered[idx] !== null;

    const optionOrder = shuffleArray(ex.options.map((_, i) => i));
    const letters = ["A", "B", "C", "D"];

    optionOrder.forEach((origIdx, displayIdx) => {
      const btn = document.createElement("button");
      btn.className = "training-opt-btn";

      if (answered) {
        btn.classList.add("disabled");
        if (origIdx === ex.correct) btn.classList.add("correct");
        else if (origIdx === trainingState.answered[idx]) btn.classList.add("incorrect");
      }

      const letter = document.createElement("span");
      letter.className = "training-opt-letter";
      letter.textContent = letters[displayIdx];

      const text = document.createElement("span");
      text.textContent = (I18N.tq(ex, "options"))[origIdx];

      btn.appendChild(letter);
      btn.appendChild(text);

      if (!answered) {
        btn.addEventListener("click", () => answerTrainingExercise(origIdx));
      }
      optGrid.appendChild(btn);
    });

    const feedback = $("#training-ex-feedback");
    feedback.classList.remove("show");
    feedback.innerHTML = "";

    if (answered) {
      showTrainingFeedback(ex, trainingState.answered[idx]);
    }

    const hintArea = document.querySelector(".training-hint-box");
    if (hintArea) hintArea.remove();

    trainingState.hintShown = false;
    $("#training-hint-btn").style.display = answered ? "none" : "inline-flex";

    if (idx >= total - 1) {
      $("#training-next-btn").style.display = "none";
      $("#training-finish-btn").style.display = answered ? "inline-flex" : "none";
    } else {
      $("#training-next-btn").style.display = answered ? "inline-flex" : "none";
      $("#training-finish-btn").style.display = "none";
    }
  }

  function answerTrainingExercise(chosenIdx) {
    const idx = trainingState.currentIndex;
    trainingState.answered[idx] = chosenIdx;
    renderTrainingExercise();
  }

  function showTrainingFeedback(ex, chosenIdx) {
    const isCorrect = chosenIdx === ex.correct;
    const feedback = $("#training-ex-feedback");

    feedback.innerHTML = `
      <div class="training-feedback-card ${isCorrect ? "is-correct" : "is-incorrect"}">
        <div class="training-feedback-icon">${isCorrect ? "✅" : "❌"}</div>
        <div class="training-feedback-text">${isCorrect ? I18N.t("feedback.correct") : `${I18N.t("feedback.incorrect")} ${(I18N.tq(ex, "options"))[ex.correct]}`}</div>
        <div class="training-feedback-explanation">${I18N.tq(ex, "explanation")}</div>
      </div>
    `;

    setTimeout(() => feedback.classList.add("show"), 50);
  }

  function showTrainingHint() {
    if (trainingState.hintShown) return;
    trainingState.hintShown = true;

    const ex = trainingState.exercises[trainingState.currentIndex];
    const card = $("#training-exercise-card");

    const existing = card.querySelector(".training-hint-box");
    if (existing) return;

    const hint = document.createElement("div");
    hint.className = "training-hint-box";
    hint.innerHTML = `<strong>${I18N.t("hint.label")}</strong> ${I18N.tq(ex, "hint")}`;

    const question = $("#training-ex-question");
    question.insertAdjacentElement("afterend", hint);
  }

  function nextTrainingExercise() {
    if (trainingState.currentIndex < trainingState.exercises.length - 1) {
      trainingState.currentIndex++;
      renderTrainingExercise();
      $("#training-exercise-card").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function finishTraining() {
    const total = trainingState.exercises.length;
    const correct = trainingState.answered.filter((a, i) => a === trainingState.exercises[i].correct).length;
    const attempted = trainingState.answered.filter((a) => a !== null).length;
    const pct = Math.round((correct / total) * 100);
    const passed = correct >= UNLOCK_THRESHOLD;

    saveTrainingProgress(trainingState.currentCategory, trainingState.currentLevel, correct, total);

    showScreen("training-complete");

    const stats = $("#training-complete-stats");
    const colorClass = pct >= 75 ? "good" : pct >= 40 ? "ok" : "poor";

    const nextLevel = trainingState.currentLevel + 1;
    const hasNext = nextLevel <= 5;
    const nextUnlocked = hasNext && passed;

    let unlockMsg = "";
    if (passed && hasNext) {
      unlockMsg = `<div class="tc-unlock-msg" style="color:var(--success);font-weight:700;margin-top:16px;text-align:center">${I18N.t("unlock.next", {n: nextLevel})}</div>`;
    } else if (!passed) {
      unlockMsg = `<div class="tc-unlock-msg" style="color:var(--text-muted);margin-top:16px;text-align:center">${I18N.t("unlock.need", {threshold: UNLOCK_THRESHOLD, total: total})}</div>`;
    } else {
      unlockMsg = `<div class="tc-unlock-msg" style="color:var(--success);font-weight:700;margin-top:16px;text-align:center">${I18N.t("unlock.allDone")}</div>`;
    }

    const existingMsg = document.querySelector(".tc-unlock-msg");
    if (existingMsg) existingMsg.remove();

    stats.innerHTML = `
      <div class="tc-stat">
        <div class="tc-stat-value ${colorClass}">${correct}/${total}</div>
        <div class="tc-stat-label">${I18N.t("stat.correctAnswers")}</div>
      </div>
      <div class="tc-stat">
        <div class="tc-stat-value">${pct}%</div>
        <div class="tc-stat-label">${I18N.t("stat.score")}</div>
      </div>
      <div class="tc-stat">
        <div class="tc-stat-value">${attempted}</div>
        <div class="tc-stat-label">${I18N.t("stat.attempted")}</div>
      </div>
    `;
    stats.insertAdjacentHTML("afterend", unlockMsg);

    const trainAgainBtn = $("#train-again-btn");
    if (nextUnlocked) {
      trainAgainBtn.textContent = I18N.t("training.startLevel", {n: nextLevel});
      trainAgainBtn.onclick = () => startTrainingLevel(trainingState.currentCategory, nextLevel);
    } else {
      trainAgainBtn.textContent = I18N.t("btn.backLevels");
      trainAgainBtn.onclick = () => openLevelSelection(trainingState.currentCategory);
    }
  }

  // ===== TRAINING: RECOMMENDATIONS (Results Page) =====
  function renderTrainingRecommendations(categoryScores) {
    const grid = $("#reco-grid");
    grid.innerHTML = "";

    const sorted = Object.keys(categoryScores)
      .map((cat) => ({
        cat,
        data: categoryScores[cat],
        pct: categoryScores[cat].total > 0
          ? Math.round((categoryScores[cat].correct / categoryScores[cat].total) * 100)
          : 0
      }))
      .sort((a, b) => a.pct - b.pct);

    sorted.forEach((item) => {
      const info = CATEGORY_INFO[item.cat];
      if (!info) return;

      let strengthLabel, strengthClass, barColor;
      if (item.pct >= 80) {
        strengthLabel = I18N.t("reco.strong");
        strengthClass = "strong";
        barColor = "var(--success)";
      } else if (item.pct >= 40) {
        strengthLabel = I18N.t("reco.moderate");
        strengthClass = "moderate";
        barColor = "var(--warning)";
      } else {
        strengthLabel = I18N.t("reco.weak");
        strengthClass = "weak";
        barColor = "var(--error)";
      }

      const card = document.createElement("div");
      card.className = "reco-card";
      card.innerHTML = `
        <div class="reco-card-header">
          <span class="reco-card-icon">${info.icon}</span>
          <div class="reco-card-info">
            <h4>${I18N.tc(item.cat)}</h4>
            <span class="reco-score ${strengthClass}">${item.data.correct}/${item.data.total} · ${strengthLabel}</span>
          </div>
        </div>
        <div class="reco-card-bar">
          <div class="reco-card-bar-fill" style="background: ${barColor}" data-width="${item.pct}%"></div>
        </div>
        <span class="reco-card-action">${item.pct < 80 ? I18N.t("reco.trainSkill") : I18N.t("reco.keepSharp")}</span>
      `;

      card.addEventListener("click", () => {
        openTrainingHub();
        setTimeout(() => openLevelSelection(item.cat), 100);
      });
      grid.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll(".reco-card-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 1800);
  }

  // ===== BOOT =====
  init();
})();
