const STORAGE_KEY = "vstep-b2-speaking-completed-v2";
const ACTIVE_EXERCISE_KEY = "vstep-b2-speaking-active-v2";
const PAGE_SIZE = 12;

const PART_CONFIG = {
  1: {
    duration: 180,
    subtitle: "Social Interaction · Trả lời ngắn gọn, tự nhiên và có ví dụ cá nhân.",
    mission: "Trả lời lần lượt từng câu; mỗi câu nên có ý chính, lý do và một chi tiết cụ thể.",
    frameworkTitle: "Trả lời theo 3 bước",
    steps: [
      ["Trả lời trực tiếp", "Nêu câu trả lời hoặc quan điểm ngay từ câu đầu."],
      ["Giải thích lý do", "Dùng because, since hoặc the main reason is that…"],
      ["Thêm ví dụ", "Kể một chi tiết thật rồi chốt lại cảm nhận của bạn."]
    ],
    frame: "Well, I’d say … mainly because … For example, … So overall, …",
    starters: ["Well, to be honest, …", "The main reason is that …", "A good example would be …", "That’s why I really enjoy/prefer …"]
  },
  2: {
    duration: 180,
    subtitle: "Solution Discussion · So sánh các lựa chọn và bảo vệ phương án tốt nhất.",
    mission: "Nêu tình huống, cân nhắc cả ba phương án, chọn một phương án và giải thích vì sao hai phương án còn lại kém phù hợp hơn.",
    frameworkTitle: "Chọn phương án theo 4 bước",
    steps: [
      ["Mở tình huống", "Nhắc ngắn gọn vấn đề và các lựa chọn được đưa ra."],
      ["So sánh", "Nêu lợi ích hoặc hạn chế nổi bật của từng phương án."],
      ["Đưa lựa chọn", "Chọn phương án tốt nhất với hai lý do rõ ràng."],
      ["Loại và kết", "Giải thích vì sao không chọn phương án còn lại rồi kết luận."]
    ],
    frame: "Given these options, I would choose … The main advantages are … As for …, it may not be suitable because …",
    starters: ["There are three possible options here …", "From my point of view, the best choice is …", "Another advantage is that …", "I wouldn’t choose … because …"]
  },
  3: {
    duration: 240,
    subtitle: "Topic Development · Phát triển chủ đề, lập luận và xử lý câu hỏi mở rộng.",
    mission: "Mở bài bằng quan điểm rõ ràng, phát triển các ý gợi ý bằng lý do/ví dụ, sau đó trả lời câu hỏi follow-up.",
    frameworkTitle: "Phát triển chủ đề theo 4 bước",
    steps: [
      ["Nêu quan điểm", "Giới thiệu chủ đề và lập trường chính trong 1–2 câu."],
      ["Phát triển ý", "Mỗi ý gợi ý cần có giải thích hoặc quan hệ nguyên nhân–kết quả."],
      ["Minh họa", "Thêm ví dụ thực tế, trải nghiệm hoặc so sánh phù hợp."],
      ["Mở rộng và kết", "Trả lời câu hỏi phụ trực tiếp rồi khẳng định lại ý chính."]
    ],
    frame: "In my opinion, … There are several reasons for this. First, … For instance, … To sum up, …",
    starters: ["I strongly believe that …", "The first point I’d like to make is …", "This can be clearly seen when …", "Looking at the bigger picture, …"]
  }
};

const elements = {
  statTotal: document.querySelector("#stat-total"),
  partFilters: document.querySelector("#part-filters"),
  search: document.querySelector("#exercise-search"),
  librarySummary: document.querySelector("#library-summary"),
  exerciseGrid: document.querySelector("#exercise-grid"),
  emptyState: document.querySelector("#empty-state"),
  pagination: document.querySelector("#library-pagination"),
  randomButton: document.querySelector("#random-button"),
  practiceRandomButton: document.querySelector("#practice-random-button"),
  nextButton: document.querySelector("#next-button"),
  partBadge: document.querySelector("#part-badge"),
  timeBadge: document.querySelector("#time-badge"),
  sourcePageBadge: document.querySelector("#source-page-badge"),
  exerciseTitle: document.querySelector("#exercise-title"),
  exerciseSubtitle: document.querySelector("#exercise-subtitle"),
  sourceLink: document.querySelector("#source-link"),
  taskLabel: document.querySelector("#task-label"),
  missionText: document.querySelector("#mission-text"),
  exerciseContent: document.querySelector("#exercise-content"),
  frameworkTitle: document.querySelector("#framework-title"),
  frameworkSteps: document.querySelector("#framework-steps"),
  sentenceFrame: document.querySelector("#sentence-frame"),
  starterCount: document.querySelector("#starter-count"),
  starterList: document.querySelector("#starter-list"),
  overallProgress: document.querySelector("#overall-progress"),
  progressPercent: document.querySelector("#progress-percent"),
  progressBar: document.querySelector("#progress-bar"),
  partProgress: document.querySelector("#part-progress"),
  timerDisplay: document.querySelector("#timer-display"),
  timerButton: document.querySelector("#timer-button"),
  timerResetButton: document.querySelector("#timer-reset-button"),
  copyButton: document.querySelector("#copy-button"),
  completeButton: document.querySelector("#complete-button"),
  toast: document.querySelector("#toast")
};

const state = {
  exercises: [],
  activeExerciseId: loadString(ACTIVE_EXERCISE_KEY),
  activePart: "all",
  query: "",
  page: 1,
  completed: loadCompleted(),
  timerSeconds: PART_CONFIG[1].duration,
  timerRunning: false,
  timerId: null,
  toastId: null
};

function loadString(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch {
    return "";
  }
}

function loadCompleted() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(Array.isArray(saved) ? saved.filter((value) => typeof value === "string") : []);
  } catch {
    return new Set();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completed]));
    localStorage.setItem(ACTIVE_EXERCISE_KEY, state.activeExerciseId);
  } catch {
    // The site remains usable if browser storage is disabled.
  }
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function cleanLine(value) {
  return String(value || "").replace(/^\s*\d+\s*[.)-]\s*/, "").trim();
}

function getActiveExercise() {
  return state.exercises.find((exercise) => exercise.id === state.activeExerciseId) || state.exercises[0] || null;
}

function searchableText(exercise) {
  return [exercise.title, exercise.prompt, ...(exercise.questions || []), ...(exercise.points || []), ...(exercise.followUps || [])].join(" ");
}

function getFilteredExercises() {
  const query = normalizeText(state.query.trim());
  return state.exercises.filter((exercise) => {
    const partMatches = state.activePart === "all" || String(exercise.part) === state.activePart;
    const queryMatches = !query || normalizeText(searchableText(exercise)).includes(query);
    return partMatches && queryMatches;
  });
}

function getPreview(exercise) {
  return cleanLine(exercise.prompt || exercise.questions?.[0] || exercise.points?.[0] || "Mở bài để xem nội dung luyện tập.");
}

function renderLibrary() {
  const filtered = getFilteredExercises();
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  state.page = Math.min(state.page, pageCount);
  const start = (state.page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  elements.exerciseGrid.replaceChildren();
  elements.emptyState.hidden = filtered.length !== 0;
  elements.exerciseGrid.hidden = filtered.length === 0;
  elements.librarySummary.textContent = filtered.length
    ? `Hiển thị ${start + 1}–${Math.min(start + PAGE_SIZE, filtered.length)} trong ${filtered.length} bài`
    : "0 bài phù hợp";

  visible.forEach((exercise) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `exercise-card part-${exercise.part}${exercise.id === state.activeExerciseId ? " selected" : ""}${state.completed.has(exercise.id) ? " completed" : ""}`;
    card.setAttribute("aria-label", `Mở ${exercise.title}, Part ${exercise.part}`);
    card.addEventListener("click", () => selectExercise(exercise.id, true));

    const meta = document.createElement("div");
    meta.className = "exercise-meta";
    const part = document.createElement("span");
    part.className = "mini-part";
    part.textContent = `Part ${exercise.part}`;
    const number = document.createElement("span");
    number.className = "source-number";
    number.textContent = `#${String(exercise.catalogIndex).padStart(3, "0")}`;
    meta.append(part, number);

    const title = document.createElement("h3");
    title.textContent = exercise.title;
    const preview = document.createElement("p");
    preview.className = "exercise-preview";
    preview.textContent = getPreview(exercise);
    const footer = document.createElement("span");
    footer.className = "exercise-card-footer";
    footer.textContent = state.completed.has(exercise.id) ? "Đã luyện" : "Mở bài luyện →";
    card.append(meta, title, preview, footer);
    elements.exerciseGrid.append(card);
  });

  renderPagination(pageCount);
}

function getPageItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
  const items = new Set([1, total, current - 1, current, current + 1]);
  const pages = [...items].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);
  const result = [];
  pages.forEach((page, index) => {
    if (index > 0 && page - pages[index - 1] > 1) result.push("…");
    result.push(page);
  });
  return result;
}

function renderPagination(pageCount) {
  elements.pagination.replaceChildren();
  if (pageCount <= 1) return;

  elements.pagination.append(createPageButton("←", state.page - 1, state.page === 1, "Trang trước"));
  getPageItems(state.page, pageCount).forEach((item) => {
    if (item === "…") {
      const ellipsis = document.createElement("span");
      ellipsis.className = "page-ellipsis";
      ellipsis.textContent = item;
      elements.pagination.append(ellipsis);
    } else {
      elements.pagination.append(createPageButton(String(item), item, false, `Trang ${item}`, item === state.page));
    }
  });
  elements.pagination.append(createPageButton("→", state.page + 1, state.page === pageCount, "Trang sau"));
}

function createPageButton(label, page, disabled, ariaLabel, current = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `page-button${current ? " current" : ""}`;
  button.textContent = label;
  button.disabled = disabled;
  button.setAttribute("aria-label", ariaLabel);
  if (current) button.setAttribute("aria-current", "page");
  button.addEventListener("click", () => {
    state.page = page;
    renderLibrary();
    document.querySelector("#library")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  return button;
}

function addContentGroup(titleText, items, className = "") {
  const cleaned = items.map(cleanLine).filter(Boolean);
  if (!cleaned.length) return;
  const group = document.createElement("section");
  group.className = `content-group ${className}`.trim();
  const title = document.createElement("h3");
  title.textContent = titleText;
  const list = document.createElement("ol");
  list.className = "content-list";
  cleaned.forEach((item, index) => {
    const row = document.createElement("li");
    row.className = "content-item";
    const number = document.createElement("span");
    number.className = "content-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const text = document.createElement("p");
    text.textContent = item;
    row.append(number, text);
    list.append(row);
  });
  group.append(title, list);
  elements.exerciseContent.append(group);
}

function splitPartThree(exercise) {
  const points = [...(exercise.points || [])].map(cleanLine).filter(Boolean);
  const followUps = [...(exercise.followUps || [])].map(cleanLine).filter(Boolean);
  if (followUps.length) return { points, followUps };

  const markerIndex = points.findIndex((point) => /follow.?up|additional questions?|questions?:/i.test(point));
  if (markerIndex >= 0) {
    return {
      points: points.slice(0, markerIndex),
      followUps: points.slice(markerIndex + 1)
    };
  }

  const questionIndex = points.findIndex((point, index) => index >= 2 && point.includes("?"));
  return questionIndex >= 0
    ? { points: points.slice(0, questionIndex), followUps: points.slice(questionIndex) }
    : { points, followUps: [] };
}

function renderExerciseContent(exercise) {
  elements.exerciseContent.replaceChildren();
  if (exercise.part === 1) {
    addContentGroup("Câu hỏi", exercise.questions || []);
    return;
  }

  if (exercise.prompt) {
    const promptGroup = document.createElement("section");
    promptGroup.className = "content-group";
    const heading = document.createElement("h3");
    heading.textContent = exercise.part === 2 ? "Tình huống" : "Chủ đề";
    const prompt = document.createElement("div");
    prompt.className = "prompt-box";
    prompt.textContent = cleanLine(exercise.prompt);
    promptGroup.append(heading, prompt);
    elements.exerciseContent.append(promptGroup);
  }

  if (exercise.part === 2) {
    addContentGroup("Các phương án / gợi ý", exercise.points || []);
    return;
  }

  const { points, followUps } = splitPartThree(exercise);
  addContentGroup("Ý phát triển", points);
  addContentGroup("Câu hỏi mở rộng", followUps, "follow-up");
}

function renderCoach(part) {
  const config = PART_CONFIG[part];
  elements.frameworkTitle.textContent = config.frameworkTitle;
  elements.frameworkSteps.replaceChildren();
  config.steps.forEach(([titleText, description], index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = titleText;
    const detail = document.createElement("p");
    detail.textContent = description;
    copy.append(title, detail);
    item.append(number, copy);
    elements.frameworkSteps.append(item);
  });
  elements.sentenceFrame.textContent = `“${config.frame}”`;
  elements.starterCount.textContent = `${config.starters.length} câu`;
  elements.starterList.replaceChildren();
  config.starters.forEach((starter) => {
    const item = document.createElement("div");
    item.className = "starter-item";
    item.textContent = starter;
    elements.starterList.append(item);
  });
}

function renderPractice() {
  const exercise = getActiveExercise();
  if (!exercise) return;
  const config = PART_CONFIG[exercise.part];
  const isCompleted = state.completed.has(exercise.id);

  elements.partBadge.textContent = `SPEAKING · PART ${exercise.part}`;
  elements.partBadge.className = `part-badge${exercise.part === 2 ? " part-two" : exercise.part === 3 ? " part-three" : ""}`;
  elements.timeBadge.textContent = `${config.duration / 60} phút`;
  elements.sourcePageBadge.textContent = `Trang ${exercise.sourcePage}/16 · #${exercise.catalogIndex}`;
  elements.exerciseTitle.textContent = exercise.title;
  elements.exerciseSubtitle.textContent = config.subtitle;
  elements.sourceLink.href = exercise.url;
  elements.missionText.textContent = config.mission;
  elements.completeButton.setAttribute("aria-pressed", String(isCompleted));
  elements.completeButton.textContent = isCompleted ? "✓ Đã luyện xong" : "✓ Đánh dấu đã luyện";
  document.title = `${exercise.title} | VSTEP B2 Speaking`;

  renderExerciseContent(exercise);
  renderCoach(exercise.part);
  renderProgress();
}

function renderProgress() {
  const validIds = new Set(state.exercises.map((exercise) => exercise.id));
  const completedCount = [...state.completed].filter((id) => validIds.has(id)).length;
  const total = state.exercises.length || 192;
  const percentage = total ? Math.round((completedCount / total) * 100) : 0;
  elements.overallProgress.textContent = `Đã luyện ${completedCount}/${total} bài`;
  elements.progressPercent.textContent = `${percentage}%`;
  elements.progressBar.style.width = `${percentage}%`;
  elements.partProgress.replaceChildren();
  [1, 2, 3].forEach((part) => {
    const exercises = state.exercises.filter((exercise) => exercise.part === part);
    const completed = exercises.filter((exercise) => state.completed.has(exercise.id)).length;
    const row = document.createElement("div");
    row.className = "part-progress-row";
    const label = document.createElement("span");
    label.textContent = `Part ${part}`;
    const value = document.createElement("strong");
    value.textContent = `${completed}/${exercises.length}`;
    row.append(label, value);
    elements.partProgress.append(row);
  });
}

function selectExercise(id, shouldScroll = false) {
  const exercise = state.exercises.find((item) => item.id === id);
  if (!exercise) return;
  state.activeExerciseId = id;
  saveState();
  resetTimer(false);
  renderPractice();
  renderLibrary();
  if (shouldScroll) document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setPartFilter(part) {
  state.activePart = part;
  state.page = 1;
  elements.partFilters.querySelectorAll("[data-part]").forEach((button) => {
    const active = button.dataset.part === part;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderLibrary();
}

function chooseRandomExercise() {
  const pool = getFilteredExercises().length ? getFilteredExercises() : state.exercises;
  if (!pool.length) return;
  let exercise = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1 && exercise.id === state.activeExerciseId) {
    exercise = pool[(pool.indexOf(exercise) + 1) % pool.length];
  }
  selectExercise(exercise.id, true);
}

function chooseNextExercise() {
  const pool = getFilteredExercises().length ? getFilteredExercises() : state.exercises;
  if (!pool.length) return;
  const currentIndex = pool.findIndex((exercise) => exercise.id === state.activeExerciseId);
  selectExercise(pool[(currentIndex + 1 + pool.length) % pool.length].id, true);
}

function toggleComplete() {
  const exercise = getActiveExercise();
  if (!exercise) return;
  if (state.completed.has(exercise.id)) {
    state.completed.delete(exercise.id);
    showToast("Đã bỏ đánh dấu bài luyện.");
  } else {
    state.completed.add(exercise.id);
    showToast("Tốt lắm! Đã lưu bài này vào tiến độ.");
  }
  saveState();
  renderPractice();
  renderLibrary();
}

function getTimerDuration() {
  const exercise = getActiveExercise();
  return PART_CONFIG[exercise?.part || 1].duration;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remaining).padStart(2, "0")}`;
}

function renderTimer() {
  const duration = getTimerDuration();
  elements.timerDisplay.textContent = formatTime(state.timerSeconds);
  if (state.timerRunning) elements.timerButton.textContent = "Tạm dừng";
  else if (state.timerSeconds === 0) elements.timerButton.textContent = "Luyện lại";
  else if (state.timerSeconds < duration) elements.timerButton.textContent = "Tiếp tục";
  else elements.timerButton.textContent = `Bắt đầu ${duration / 60} phút`;
}

function pauseTimer() {
  state.timerRunning = false;
  if (state.timerId !== null) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  renderTimer();
}

function toggleTimer() {
  if (state.timerRunning) {
    pauseTimer();
    return;
  }
  if (state.timerSeconds === 0) state.timerSeconds = getTimerDuration();
  state.timerRunning = true;
  renderTimer();
  state.timerId = window.setInterval(() => {
    state.timerSeconds = Math.max(0, state.timerSeconds - 1);
    renderTimer();
    if (state.timerSeconds === 0) {
      pauseTimer();
      showToast("Hết giờ — bạn đã hoàn thành một lượt luyện!");
    }
  }, 1000);
}

function resetTimer(announce = true) {
  pauseTimer();
  state.timerSeconds = getTimerDuration();
  renderTimer();
  if (announce) showToast(`Đã đặt lại đồng hồ về ${state.timerSeconds / 60} phút.`);
}

function formatForCopy(exercise) {
  const lines = [`VSTEP B2 SPEAKING — PART ${exercise.part}`, exercise.title, ""];
  if (exercise.prompt) lines.push(cleanLine(exercise.prompt), "");
  if (exercise.questions?.length) {
    lines.push("QUESTIONS", ...exercise.questions.map((question, index) => `${index + 1}. ${cleanLine(question)}`), "");
  }
  if (exercise.points?.length) {
    lines.push(exercise.part === 2 ? "OPTIONS / IDEAS" : "DEVELOPMENT IDEAS", ...exercise.points.map((point) => `- ${cleanLine(point)}`), "");
  }
  if (exercise.followUps?.length) {
    lines.push("FOLLOW-UP QUESTIONS", ...exercise.followUps.map((question, index) => `${index + 1}. ${cleanLine(question)}`), "");
  }
  lines.push(`Nguồn: ${exercise.url}`);
  return lines.join("\n");
}

async function copyCurrentExercise() {
  const exercise = getActiveExercise();
  if (!exercise) return;
  const text = formatForCopy(exercise);
  try {
    await navigator.clipboard.writeText(text);
    showToast("Đã sao chép toàn bộ nội dung bài luyện.");
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();
    showToast(copied ? "Đã sao chép toàn bộ nội dung bài luyện." : "Không thể sao chép tự động.");
  }
}

function showToast(message) {
  if (state.toastId !== null) window.clearTimeout(state.toastId);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  state.toastId = window.setTimeout(() => elements.toast.classList.remove("show"), 2400);
}

function renderFilterCounts() {
  const counts = { all: state.exercises.length, 1: 0, 2: 0, 3: 0 };
  state.exercises.forEach((exercise) => { counts[exercise.part] += 1; });
  elements.partFilters.querySelectorAll("[data-part]").forEach((button) => {
    const count = button.querySelector("span");
    if (count) count.textContent = counts[button.dataset.part];
  });
  elements.statTotal.textContent = state.exercises.length;
}

function showLoadError(error) {
  elements.exerciseGrid.hidden = false;
  elements.exerciseGrid.replaceChildren();
  const message = document.createElement("div");
  message.className = "loading-card";
  message.textContent = "Không thể tải kho bài tập. Hãy tải lại trang hoặc kiểm tra tệp speaking-data.json.";
  elements.exerciseGrid.append(message);
  elements.librarySummary.textContent = "Lỗi tải dữ liệu";
  console.error("Failed to load speaking exercises:", error);
}

async function init() {
  try {
    const response = await fetch("speaking-data.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data) || !data.length) throw new Error("Exercise data is empty");
    state.exercises = data.filter((exercise) => exercise && exercise.id && PART_CONFIG[exercise.part]);
    const validIds = new Set(state.exercises.map((exercise) => exercise.id));
    state.completed = new Set([...state.completed].filter((id) => validIds.has(id)));
    if (!validIds.has(state.activeExerciseId)) state.activeExerciseId = state.exercises[0].id;
    renderFilterCounts();
    renderLibrary();
    renderPractice();
    resetTimer(false);
    saveState();
  } catch (error) {
    showLoadError(error);
  }
}

elements.partFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-part]");
  if (button) setPartFilter(button.dataset.part);
});
elements.search.addEventListener("input", () => {
  state.query = elements.search.value;
  state.page = 1;
  renderLibrary();
});
elements.randomButton.addEventListener("click", chooseRandomExercise);
elements.practiceRandomButton.addEventListener("click", chooseRandomExercise);
elements.nextButton.addEventListener("click", chooseNextExercise);
elements.completeButton.addEventListener("click", toggleComplete);
elements.timerButton.addEventListener("click", toggleTimer);
elements.timerResetButton.addEventListener("click", () => resetTimer(true));
elements.copyButton.addEventListener("click", copyCurrentExercise);

init();
