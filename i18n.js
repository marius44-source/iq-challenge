const I18N = (function () {
  const LANG_KEY = "iq_lang";

  const LANGS = {
    en: { name: "English", dir: "ltr" },
    ro: { name: "Română", dir: "ltr" },
    ru: { name: "Русский", dir: "ltr" },
    fr: { name: "Français", dir: "ltr" },
    de: { name: "Deutsch", dir: "ltr" },
    es: { name: "Español", dir: "ltr" },
    pt: { name: "Português", dir: "ltr" },
    zh: { name: "中文", dir: "ltr" },
    hi: { name: "हिन्दी", dir: "ltr" },
    ar: { name: "العربية", dir: "rtl" }
  };

  const EN = {
    "landing.title": 'IQ <span class="gradient-text">Challenge</span>',
    "landing.subtitle": "Discover your cognitive abilities with our scientifically-inspired intelligence assessment",
    "landing.feat.pr": "Pattern Recognition",
    "landing.feat.pr.desc": "Raven's Progressive Matrices-style visual patterns",
    "landing.feat.nr": "Numerical Reasoning",
    "landing.feat.nr.desc": "Number sequences and mathematical logic",
    "landing.feat.lt": "Logical Thinking",
    "landing.feat.lt.desc": "Deductive reasoning and syllogisms",
    "landing.feat.sa": "Spatial Awareness",
    "landing.feat.sa.desc": "Mental rotation and spatial visualization",
    "landing.feat.mp": "Mathematical Puzzles",
    "landing.feat.mp.desc": "Creative number puzzles and operation logic",
    "landing.feat.time": "Timed Assessment",
    "landing.feat.time.desc": "25 questions in 20 minutes",
    "landing.age.label": "Enter your age",
    "landing.age.hint": "Ages 5–7: visual puzzles · 8–11: mixed · 12–15: advanced · 16+: full adult test",
    "landing.age.placeholder": "Age",
    "age.badge57": "Ages 5–7 · Visual Puzzles",
    "age.badge811": "Ages 8–11 · Mixed Puzzles",
    "age.badge1215": "Ages 12–15 · Advanced",
    "age.adultBadge": "Adult Test (16+)",
    "confirm.leaveTest": "Are you sure you want to leave? Your progress will be lost.",
    "age.required": "Please enter your age first (5–120)",
    "age.groupNote": "Age group: {group} — score normalized within your age group",
    "age.childNote": "Children's test (age {age}) — {n} questions in {time} minutes",
    "age.adultNote": "Adult test (age {age}) — {n} questions in {time} minutes",
    "landing.country.label": "Select your country for score comparison",
    "landing.country.placeholder": "-- Choose your country --",
    "btn.start": "Begin IQ Test",
    "btn.train": "Train Your Brain",
    "landing.disclaimer": "Free assessment based on established psychometric frameworks. Results are for entertainment and self-discovery.",
    "btn.prev": "Previous",
    "btn.skip": "Skip",
    "btn.next": "Next",
    "btn.finish": "Finish Test",
    "results.title": "Your IQ Score",
    "results.calculating": "Calculating...",
    "results.breakdown": "Performance Breakdown",
    "results.scale": "IQ Classification Scale",
    "scale.belowAvg": "Below Avg",
    "scale.lowAvg": "Low Avg",
    "scale.average": "Average",
    "scale.aboveAvg": "Above Avg",
    "scale.gifted": "Gifted",
    "scale.genius": "Genius",
    "results.compare": "How You Compare",
    "stat.correct": "Correct",
    "stat.questions": "Questions",
    "stat.time": "Time Used",
    "stat.percentile": "Percentile",
    "results.recoTitle": "Recommended Training",
    "results.recoSubtitle": "Based on your results, focus on these areas to improve your score",
    "btn.retake": "Retake Test",
    "btn.review": "Review Answers",
    "btn.startTraining": "Start Training",
    "review.title": "Answer Review",
    "btn.backResults": "Back to Results",
    "btn.home": "Home",
    "training.title": 'Brain <span class="gradient-text">Training</span>',
    "training.subtitle": "Sharpen your cognitive skills with targeted exercises and expert strategies",
    "btn.allCategories": "All Categories",
    "training.levels.subtitle": "Complete each level with 60% or higher to unlock the next",
    "training.tips": "Strategies & Tips",
    "btn.hint": "Show Hint",
    "btn.nextExercise": "Next Exercise",
    "btn.finishTraining": "Finish Training",
    "training.complete": "Training Complete!",
    "stat.correctAnswers": "Correct Answers",
    "stat.score": "Score",
    "stat.attempted": "Attempted",
    "btn.backLevels": "Back to Levels",
    "btn.takeTest": "Take the IQ Test",
    "training.startTraining": "Start Training",
    "training.continueTraining": "Continue Training",
    "training.exercises": "exercises",
    "training.levels": "levels",
    "training.levelsCompleted": "levels completed",
    "training.notStarted": "Not started",
    "training.best": "Best",
    "training.attempt": "attempt",
    "training.attempts": "attempts",
    "training.level": "Level",
    "feedback.correct": "Correct!",
    "feedback.incorrect": "Incorrect — the answer is:",
    "hint.label": "Hint:",
    "compare.yourScore": "Your Score",
    "compare.countryAvg": "{country} Average",
    "compare.europeanAvg": "European Average",
    "compare.worldAvg": "World Average",
    "compare.above": "above average",
    "compare.below": "below average",
    "review.correct": "Correct",
    "review.incorrect": "Incorrect",
    "review.skipped": "Skipped",
    "review.yourAnswer": "Your answer:",
    "review.correctAnswer": "Correct answer:",
    "cat.pr": "Pattern Recognition",
    "cat.nr": "Numerical Reasoning",
    "cat.lr": "Logical Reasoning",
    "cat.sr": "Spatial Reasoning",
    "cat.mp": "Mathematical Puzzles",
    "iq.extremelyLow": "Extremely Low",
    "iq.belowAverage": "Below Average",
    "iq.lowAverage": "Low Average",
    "iq.average": "Average",
    "iq.aboveAverage": "Above Average",
    "iq.gifted": "Gifted",
    "iq.genius": "Genius",
    "unlock.next": "Level {n} unlocked!",
    "unlock.need": "Score {threshold}/{total} or higher to unlock the next level",
    "unlock.allDone": "All levels complete for this category!",
    "training.startLevel": "Start Level {n}",
    "reco.strong": "Strong",
    "reco.moderate": "Moderate — room to improve",
    "reco.weak": "Needs practice",
    "reco.trainSkill": "Train this skill →",
    "reco.keepSharp": "Keep it sharp →",
    "breakdown.correct": "{n}/{total} correct",
  };

  const CAT_MAP = {
    "Pattern Recognition": "cat.pr",
    "Numerical Reasoning": "cat.nr",
    "Logical Reasoning": "cat.lr",
    "Spatial Reasoning": "cat.sr",
    "Mathematical Puzzles": "cat.mp"
  };

  let current = "en";
  try { current = localStorage.getItem(LANG_KEY) || "en"; } catch (e) {}
  const loaded = {};
  let _onChangeCallbacks = [];

  function t(key, replacements) {
    let str;
    if (current !== "en" && loaded[current] && loaded[current].ui && loaded[current].ui[key] !== undefined) {
      str = loaded[current].ui[key];
    } else {
      str = EN[key] !== undefined ? EN[key] : key;
    }
    if (replacements) {
      Object.keys(replacements).forEach(k => {
        str = str.replace(new RegExp("\\{" + k + "\\}", "g"), replacements[k]);
      });
    }
    return str;
  }

  function tq(q, field) {
    if (current === "en") return q[field];
    const lang = loaded[current];
    if (!lang || !lang.q || !lang.q[q.id]) return q[field];
    const arr = lang.q[q.id];
    if (!Array.isArray(arr)) return q[field];
    if (arr.length === 3) {
      if (field === "question") return arr[0] || q.question;
      if (field === "options") return arr[1] || q.options;
      if (field === "explanation") return arr[2] || q.explanation;
    } else if (arr.length === 4) {
      if (field === "question") return arr[0] || q.question;
      if (field === "hint") return arr[1] || q.hint;
      if (field === "options") return arr[2] || q.options;
      if (field === "explanation") return arr[3] || q.explanation;
    }
    return q[field];
  }

  function tc(category) {
    const key = CAT_MAP[category];
    return key ? t(key) : category;
  }

  function ttip(tip) {
    if (current === "en") return { title: tip.title, content: tip.content || tip.description };
    const lang = loaded[current];
    if (!lang || !lang.tips) return { title: tip.title, content: tip.content || tip.description };
    const key = tip.title;
    if (lang.tips[key]) return { title: lang.tips[key][0] || tip.title, content: lang.tips[key][1] || tip.content || tip.description };
    return { title: tip.title, content: tip.content || tip.description };
  }

  function apply() {
    var i18nEls = document.querySelectorAll("[data-i18n]");
    i18nEls.forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    const dir = LANGS[current] ? LANGS[current].dir : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = current;
    document.body.classList.toggle("rtl", dir === "rtl");
  }

  async function setLang(code) {
    if (!LANGS[code]) return;
    current = code;
    try { localStorage.setItem(LANG_KEY, code); } catch (e) {}
    if (code !== "en" && !loaded[code]) {
      await loadLang(code);
    }
    apply();
    updateSelector();
    _onChangeCallbacks.forEach(fn => fn());
  }

  function loadLang(code) {
    return new Promise(resolve => {
      if (loaded[code]) { resolve(); return; }
      const s = document.createElement("script");
      s.src = "lang/" + code + ".js";
      s.onload = resolve;
      s.onerror = () => { console.warn("Language file lang/" + code + ".js not found"); resolve(); };
      document.head.appendChild(s);
    });
  }

  function register(code, data) {
    if (!loaded[code]) {
      loaded[code] = data;
      return;
    }
    const existing = loaded[code];
    if (data.ui) Object.assign(existing.ui || (existing.ui = {}), data.ui);
    if (data.categories) Object.assign(existing.categories || (existing.categories = {}), data.categories);
    if (data.tips) Object.assign(existing.tips || (existing.tips = {}), data.tips);
    if (data.q) Object.assign(existing.q || (existing.q = {}), data.q);
    if (data.levelName) Object.assign(existing.levelName || (existing.levelName = {}), data.levelName);
    if (data.levelDesc) Object.assign(existing.levelDesc || (existing.levelDesc = {}), data.levelDesc);
    if (data.hubCat) Object.assign(existing.hubCat || (existing.hubCat = {}), data.hubCat);
  }

  function tlevelName(enName) {
    if (!enName || current === "en") return enName || "";
    const lang = loaded[current];
    const m = lang && lang.levelName;
    return (m && m[enName]) || enName;
  }

  function tlevelDesc(enDesc) {
    if (!enDesc || current === "en") return enDesc || "";
    const lang = loaded[current];
    const m = lang && lang.levelDesc;
    return (m && m[enDesc]) || enDesc;
  }

  function tTrainingCategoryDescription(category, englishFallback) {
    if (current === "en") return englishFallback;
    const lang = loaded[current];
    const m = lang && lang.hubCat;
    return (m && m[category]) || englishFallback;
  }

  function onChange(fn) {
    _onChangeCallbacks.push(fn);
  }

  function renderSelector() {
    const sel = document.createElement("div");
    sel.id = "lang-selector";
    sel.className = "lang-selector";
    const items = Object.entries(LANGS).map(([code, lang]) =>
      '<button class="lang-option' + (code === current ? " active" : "") + '" data-lang="' + code + '">' + lang.name + "</button>"
    ).join("");
    sel.innerHTML =
      '<button id="lang-btn" class="lang-btn">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>' +
        '<span id="lang-current">' + LANGS[current].name + "</span>" +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>' +
      "</button>" +
      '<div id="lang-dropdown" class="lang-dropdown">' + items + "</div>";
    document.body.appendChild(sel);

    document.getElementById("lang-btn").addEventListener("click", function (e) {
      e.stopPropagation();
      document.getElementById("lang-dropdown").classList.toggle("open");
    });
    sel.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.lang);
        document.getElementById("lang-dropdown").classList.remove("open");
      });
    });
    document.addEventListener("click", function () {
      var dd = document.getElementById("lang-dropdown");
      if (dd) dd.classList.remove("open");
    });
  }

  function updateSelector() {
    var btn = document.getElementById("lang-current");
    if (btn) btn.textContent = LANGS[current].name;
    document.querySelectorAll(".lang-option").forEach(function (opt) {
      opt.classList.toggle("active", opt.dataset.lang === current);
    });
  }

  async function init() {
    renderSelector();
    if (current !== "en") {
      if (loaded[current]) {
        apply();
      } else {
        await loadLang(current);
        apply();
      }
    }
  }

  return {
    t: t,
    tq: tq,
    tc: tc,
    ttip: ttip,
    tlevelName: tlevelName,
    tlevelDesc: tlevelDesc,
    tTrainingCategoryDescription: tTrainingCategoryDescription,
    apply: apply,
    setLang: setLang,
    register: register,
    onChange: onChange,
    init: init,
    get lang() { return current; },
    LANGS: LANGS,
    EN: EN,
    CAT_MAP: CAT_MAP,
    _debug: function() { return { current: current, loadedKeys: Object.keys(loaded), hasData: !!loaded[current] }; }
  };
})();
