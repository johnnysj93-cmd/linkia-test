const data = window.LINKIA_QUIZ_DATA;
const extraQuestions = window.LINKIA_EXTRA_QUESTIONS || {};
const flashcardsData = window.LINKIA_FLASHCARDS || {};
const historyKey = "linkiaQuizAttempts";

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

data.subjects.forEach((subject) => {
  const extras = extraQuestions[subject.id] || [];
  if (!extras.length) return;
  subject.units.push({
    id: "extras",
    title: "Preguntas extra",
    extra: true,
    questions: extras.map((item, index) => makeExtraQuestion(subject.id, item, index)),
  });
});

const app = document.querySelector("#app");
const pageTitle = document.querySelector("#pageTitle");
const eyebrow = document.querySelector("#eyebrow");
const backButton = document.querySelector("#backButton");
const scorePill = document.querySelector("#scorePill");

const state = {
  route: "home",
  subject: null,
  quiz: null,
  questionIndex: 0,
  score: 0,
  answered: false,
  selectedOptionId: null,
  resultSaved: false,
  flashcardUnit: null,
  flashcardIndex: 0,
  flashcardRevealed: false,
};

function makeExtraQuestion(subjectId, item, index) {
  const labels = ["a", "b", "c", "d"];
  const correctIndex = index % labels.length;
  const answers = [...item.wrong];
  answers.splice(correctIndex, 0, item.correct);
  return {
    id: `${subjectId}-extras-${index + 1}`,
    question: item.question,
    options: answers.map((text, answerIndex) => ({
      id: labels[answerIndex],
      text,
      explanation:
        answerIndex === correctIndex
          ? item.explanation
          : `Incorrecto. ${item.explanation}`,
    })),
    correctOptionId: labels[correctIndex],
    source: "Preguntas extra · nivel 1º ASIR",
  };
}

function loadAttempts() {
  try {
    return JSON.parse(localStorage.getItem(historyKey) || "[]");
  } catch {
    return [];
  }
}

function saveAttempts(attempts) {
  localStorage.setItem(historyKey, JSON.stringify(attempts.slice(-300)));
}

function subjectAttempts(subjectId) {
  return loadAttempts().filter((attempt) => attempt.subjectId === subjectId);
}

function questionKey(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function saveCurrentAttempt() {
  if (state.resultSaved) return;
  state.resultSaved = true;
  const attempts = loadAttempts();
  attempts.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: new Date().toISOString(),
    subjectId: state.subject.id,
    subjectName: state.subject.name,
    quizTitle: state.quiz.title,
    quizLabel: state.quiz.label,
    final: state.quiz.final,
    failedReview: Boolean(state.quiz.failedReview),
    score: state.score,
    total: state.quiz.questions.length,
    answers: state.quiz.answers,
    wrong: state.quiz.answers.filter((answer) => !answer.correct),
  });
  saveAttempts(attempts);
}

function setHeader(title, label, showBack = false) {
  pageTitle.textContent = title;
  eyebrow.textContent = label;
  backButton.classList.toggle("hidden", !showBack);
}

function setScore(text = "") {
  scorePill.textContent = text;
  scorePill.classList.toggle("hidden", !text);
}

function allQuestions(subject, includeExtras = true) {
  return subject.units.filter((unit) => includeExtras || !unit.extra).flatMap((unit) =>
    unit.questions.map((question) => ({ ...question, unitId: unit.id, unitTitle: unit.title })),
  );
}

function buildFailedQuestions(subject) {
  const attempts = subjectAttempts(subject.id);
  const questionsByKey = new Map(allQuestions(subject).map((question) => [questionKey(question.question), question]));
  const failedByKey = new Map();

  attempts.forEach((attempt) => {
    if (Array.isArray(attempt.answers)) {
      attempt.answers.forEach((answer) => {
        const key = answer.questionKey || questionKey(answer.question);
        if (answer.correct) {
          failedByKey.delete(key);
          return;
        }
        failedByKey.set(key, answer);
      });
      return;
    }

    (attempt.wrong || []).forEach((answer) => {
      const key = answer.questionKey || questionKey(answer.question);
      failedByKey.set(key, answer);
    });
  });

  return [...failedByKey.entries()]
    .map(([key, answer]) => {
      const question = questionsByKey.get(key);
      if (!question) return null;
      return {
        ...question,
        unitTitle: answer.unitTitle || question.unitTitle,
        unitId: answer.unitId || question.unitId,
      };
    })
    .filter(Boolean);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function randomizeQuestion(question) {
  const labels = ["a", "b", "c", "d"];
  const shuffledOptions = shuffle(question.options).map((option, index) => ({
    ...option,
    id: labels[index],
    originalId: option.originalId || option.id,
  }));
  const correctOriginalId =
    question.options.find((option) => option.id === question.correctOptionId)?.originalId ||
    question.correctOptionId;
  const correctOption = shuffledOptions.find((option) => option.originalId === correctOriginalId);

  return {
    ...question,
    options: shuffledOptions,
    correctOptionId: correctOption ? correctOption.id : question.correctOptionId,
  };
}

function prepareQuestionsForPlay(questions, shuffleQuestions = true) {
  const pool = shuffleQuestions ? shuffle(questions) : [...questions];
  return pool.map((question) => randomizeQuestion(question));
}

function buildFinalExam(subject) {
  const buckets = subject.units
    .filter((unit) => !unit.extra)
    .map((unit) => ({
      unit,
      questions: shuffle(unit.questions).map((question) => ({
        ...question,
        unitId: unit.id,
        unitTitle: unit.title,
      })),
    }))
    .filter((bucket) => bucket.questions.length);

  const selected = [];
  let cursor = 0;
  while (selected.length < subject.finalExamSize && buckets.some((bucket) => bucket.questions.length)) {
    const bucket = buckets[cursor % buckets.length];
    const question = bucket.questions.shift();
    if (question) {
      selected.push(question);
    }
    cursor += 1;
  }
  return selected;
}

function renderHome() {
  state.route = "home";
  state.subject = null;
  state.quiz = null;
  setHeader("Linkia Tests", "Autoevaluaciones");
  setScore();

  app.innerHTML = `
    <section class="grid">
      ${data.subjects
        .map((subject) => {
          const questionCount = allQuestions(subject).length;
          const examQuestionCount = allQuestions(subject, false).length;
          return `
            <article class="card">
              <div>
                <h2>${subject.name}</h2>
                <p>${subject.units.length} unidades disponibles para practicar.</p>
                <div class="meta-row">
                  <span class="tag">${questionCount} preguntas</span>
                  <span class="tag">Examen final: ${Math.min(subject.finalExamSize, examQuestionCount)}</span>
                </div>
              </div>
              <div class="actions">
                <button class="primary" type="button" data-subject="${subject.id}">Entrar</button>
              </div>
            </article>
          `;
        })
        .join("")}
    </section>
  `;

  app.querySelectorAll("[data-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      const subject = data.subjects.find((item) => item.id === button.dataset.subject);
      renderSubject(subject);
    });
  });
}

function renderSubject(subject) {
  state.route = "subject";
  state.subject = subject;
  state.quiz = null;
  setHeader(subject.name, "Asignatura", true);
  setScore();

  const examQuestionCount = allQuestions(subject, false).length;
  const regularUnitCount = subject.units.filter((unit) => !unit.extra).length;
  const attempts = subjectAttempts(subject.id);
  const lastAttempt = attempts[attempts.length - 1];
  const failedQuestions = buildFailedQuestions(subject);
  app.innerHTML = `
    <section class="grid">
      <article class="card card-tracking">
        <div>
          <h2>Seguimiento</h2>
          <p>${
            attempts.length
              ? `Último intento: ${lastAttempt.score}/${lastAttempt.total} aciertos.`
              : "Todavía no hay intentos guardados en esta asignatura."
          }</p>
          <div class="meta-row">
            <span class="tag">${attempts.length} intentos</span>
            <span class="tag">${bestAttemptText(attempts)}</span>
          </div>
        </div>
        <div class="actions">
          <button class="secondary" type="button" data-tracking>Ver gráfica</button>
        </div>
      </article>
      <article class="card card-errors">
        <div>
          <h2>Preguntas falladas</h2>
          <p>Repasa juntas las preguntas que has fallado en tests y exámenes.</p>
          <div class="meta-row">
            <span class="tag tag-error">${failedQuestions.length} pendientes</span>
          </div>
        </div>
        <div class="actions">
          <button class="secondary" type="button" data-failed-review ${failedQuestions.length ? "" : "disabled"}>
            Practicar fallos
          </button>
        </div>
      </article>
      <article class="card card-final">
        <div>
          <h2>Examen final</h2>
          <p>30 preguntas mezcladas, alternando unidades para repasar toda la asignatura.</p>
          <div class="meta-row">
            <span class="tag">${Math.min(subject.finalExamSize, examQuestionCount)} preguntas</span>
            <span class="tag">${regularUnitCount} unidades</span>
          </div>
        </div>
        <div class="actions">
          <button class="primary" type="button" data-final-exam>Empezar examen</button>
        </div>
      </article>
      ${flashcardsData[subject.id] ? `
        <article class="card card-qa">
          <div>
            <h2>Preguntas y Respuestas</h2>
            <p>Lee la pregunta, piensa la respuesta y compruébala. Ideal para repasar conceptos clave.</p>
            <div class="meta-row">
              <span class="tag">${flashcardsData[subject.id].reduce((sum, u) => sum + u.cards.length, 0)} tarjetas</span>
              <span class="tag">${flashcardsData[subject.id].length} unidades</span>
            </div>
          </div>
          <div class="actions">
            <button class="secondary" type="button" data-qa>Repasar</button>
          </div>
        </article>
      ` : ""}
      ${subject.units
        .map(
          (unit) => `
            <article class="card ${unit.extra ? "card-extra" : ""}">
              <div>
                <h3>${unit.title}</h3>
                <p>${
                  unit.extra
                    ? "Preguntas fuera de temario para reforzar base técnica de 1º ASIR."
                    : "Test de la unidad con corrección y explicación inmediata."
                }</p>
                <div class="meta-row">
                  <span class="tag">${unit.questions.length} preguntas</span>
                  ${unit.extra ? "<span class=\"tag tag-extra\">Extra</span>" : ""}
                </div>
              </div>
              <div class="actions">
                <button class="secondary" type="button" data-unit="${unit.id}">Practicar</button>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>
  `;

  app.querySelector("[data-final-exam]").addEventListener("click", () => {
    startQuiz(subject, {
      title: `Examen final · ${subject.name}`,
      label: "Examen final",
      questions: prepareQuestionsForPlay(buildFinalExam(subject), false),
      final: true,
    });
  });

  app.querySelector("[data-tracking]").addEventListener("click", () => {
    renderTracking(subject);
  });

  app.querySelector("[data-failed-review]").addEventListener("click", () => {
    const questions = buildFailedQuestions(subject);
    if (!questions.length) return;
    startQuiz(subject, {
      title: `${subject.name} · Preguntas falladas`,
      label: "Repaso de errores",
      questions: prepareQuestionsForPlay(questions),
      final: false,
      failedReview: true,
    });
  });

  const qaButton = app.querySelector("[data-qa]");
  if (qaButton) {
    qaButton.addEventListener("click", () => renderFlashcardList(subject));
  }

  app.querySelectorAll("[data-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const unit = subject.units.find((item) => item.id === button.dataset.unit);
      startQuiz(subject, {
        title: `${subject.name} · ${unit.title}`,
        label: "Test de unidad",
        questions: prepareQuestionsForPlay(unit.questions).map((question) => ({
          ...question,
          unitId: unit.id,
          unitTitle: unit.title,
        })),
        final: false,
      });
    });
  });
}

function bestAttemptText(attempts) {
  if (!attempts.length) return "Sin nota máxima";
  const best = Math.max(...attempts.map((attempt) => Math.round((attempt.score / attempt.total) * 100)));
  return `Máximo: ${best}%`;
}

function startQuiz(subject, quiz) {
  state.route = "quiz";
  state.subject = subject;
  state.quiz = {
    ...quiz,
    questions: quiz.questions.map((question) => ({
      ...question,
      options: question.options.map((option) => ({ ...option })),
    })),
  };
  state.questionIndex = 0;
  state.score = 0;
  state.answered = false;
  state.selectedOptionId = null;
  state.resultSaved = false;
  state.quiz.answers = [];
  renderQuestion();
}

function currentQuestion() {
  return state.quiz.questions[state.questionIndex];
}

function renderQuestion() {
  const question = currentQuestion();
  const total = state.quiz.questions.length;
  const number = state.questionIndex + 1;
  const percent = (number - 1) / total * 100;

  setHeader(state.quiz.title, state.quiz.label, true);
  setScore(`${state.score}/${total}`);

  app.innerHTML = `
    <section class="quiz-panel">
      <div class="progress"><span style="width: ${percent}%"></span></div>
      <p class="muted">Pregunta ${number} de ${total}${state.quiz.final || state.quiz.failedReview ? ` · ${question.unitTitle}` : ""}</p>
      <h2 class="question-title">${escapeHtml(question.question)}</h2>
      <div class="options">
        ${question.options
          .map(
            (option) => `
              <button class="option" type="button" data-option="${option.id}">
                <span class="letter">${option.id}</span>
                <span>${escapeHtml(option.text)}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <div id="feedbackSlot"></div>
      <p class="source">Fuente: ${escapeHtml(question.source)}</p>
    </section>
  `;

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.option));
  });
}

function answerQuestion(optionId) {
  if (state.answered) return;

  const question = currentQuestion();
  const selected = question.options.find((option) => option.id === optionId);
  const correct = question.options.find((option) => option.id === question.correctOptionId);
  const isCorrect = optionId === question.correctOptionId;

  state.answered = true;
  state.selectedOptionId = optionId;
  if (isCorrect) state.score += 1;
  state.quiz.answers.push({
    question: question.question,
    questionId: question.id,
    questionKey: questionKey(question.question),
    unitId: question.unitId,
    unitTitle: question.unitTitle,
    selected: `${selected.id.toUpperCase()}. ${selected.text}`,
    correctAnswer: `${correct.id.toUpperCase()}. ${correct.text}`,
    correct: isCorrect,
  });
  setScore(`${state.score}/${state.quiz.questions.length}`);

  app.querySelectorAll("[data-option]").forEach((button) => {
    button.disabled = true;
    const id = button.dataset.option;
    if (id === question.correctOptionId) button.classList.add("correct");
    if (id === optionId && !isCorrect) button.classList.add("wrong");
  });

  const feedback = escapeHtml(selected.explanation || "No hay una explicación específica para esta opción.");
  const correctFeedback = escapeHtml(correct.explanation || "Esta es la opción marcada como correcta en el material.");
  document.querySelector("#feedbackSlot").innerHTML = `
    <div class="feedback ${isCorrect ? "correct" : "wrong"}">
      <h3>${isCorrect ? "Correcto" : "Incorrecto"}</h3>
      <p>${feedback}</p>
      ${
        isCorrect
          ? ""
          : `<p><strong>Respuesta correcta:</strong> ${correct.id.toUpperCase()}. ${escapeHtml(correct.text)}</p><p>${correctFeedback}</p>`
      }
      <div class="actions">
        <button class="primary" type="button" data-next>
          ${state.questionIndex + 1 === state.quiz.questions.length ? "Ver resultado" : "Siguiente"}
        </button>
      </div>
    </div>
  `;

  document.querySelector("[data-next]").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  if (state.questionIndex + 1 >= state.quiz.questions.length) {
    renderResult();
    return;
  }
  state.questionIndex += 1;
  state.answered = false;
  state.selectedOptionId = null;
  renderQuestion();
}

function renderResult() {
  const total = state.quiz.questions.length;
  const percent = Math.round((state.score / total) * 100);
  saveCurrentAttempt();
  setHeader("Resultado", state.quiz.title, true);
  setScore(`${state.score}/${total}`);

  app.innerHTML = `
    <section class="result-panel">
      <p class="muted">${
        state.quiz.final
          ? "Examen final completado"
          : state.quiz.failedReview
            ? "Repaso de errores completado"
            : "Test completado"
      }</p>
      <div class="result-number">${percent}%</div>
      <h2>${state.score} aciertos de ${total}</h2>
      <p>${resultMessage(percent)}</p>
      <div class="actions">
        <button class="primary" type="button" data-repeat>Repetir</button>
        <button class="secondary" type="button" data-subject-view>Volver a ${state.subject.name}</button>
        <button class="secondary" type="button" data-home>Asignaturas</button>
      </div>
    </section>
  `;

  app.querySelector("[data-repeat]").addEventListener("click", () => {
    let quiz;
    if (state.quiz.final) {
      quiz = { ...state.quiz, questions: prepareQuestionsForPlay(buildFinalExam(state.subject), false) };
    } else if (state.quiz.failedReview) {
      const questions = buildFailedQuestions(state.subject);
      if (!questions.length) {
        renderSubject(state.subject);
        return;
      }
      quiz = { ...state.quiz, questions: prepareQuestionsForPlay(questions) };
    } else {
      quiz = { ...state.quiz, questions: prepareQuestionsForPlay(state.quiz.questions) };
    }
    startQuiz(state.subject, quiz);
  });
  app.querySelector("[data-subject-view]").addEventListener("click", () => renderSubject(state.subject));
  app.querySelector("[data-home]").addEventListener("click", renderHome);
}

function renderTracking(subject) {
  state.route = "tracking";
  state.subject = subject;
  state.quiz = null;
  const attempts = subjectAttempts(subject.id);
  setHeader(subject.name, "Seguimiento", true);
  setScore();

  if (!attempts.length) {
    app.innerHTML = `
      <section class="result-panel">
        <h2>Aún no hay intentos</h2>
        <p>Completa cualquier test de unidad, preguntas extra o examen final para empezar a ver tu evolución.</p>
        <div class="actions">
          <button class="primary" type="button" data-subject-view>Volver a ${subject.name}</button>
        </div>
      </section>
    `;
    app.querySelector("[data-subject-view]").addEventListener("click", () => renderSubject(subject));
    return;
  }

  const average = Math.round(
    attempts.reduce((sum, attempt) => sum + attempt.score / attempt.total, 0) / attempts.length * 100,
  );
  const totalWrong = attempts.reduce((sum, attempt) => sum + attempt.wrong.length, 0);
  const recent = attempts.slice(-12);

  app.innerHTML = `
    <section class="tracking-layout">
      <div class="stats-row">
        <article class="mini-stat">
          <span>Intentos</span>
          <strong>${attempts.length}</strong>
        </article>
        <article class="mini-stat">
          <span>Media</span>
          <strong>${average}%</strong>
        </article>
        <article class="mini-stat">
          <span>Fallos acumulados</span>
          <strong>${totalWrong}</strong>
        </article>
      </div>

      <section class="chart-panel">
        <div class="chart-head">
          <h2>Evolución</h2>
          <p class="muted">Últimos ${recent.length} intentos</p>
        </div>
        <canvas id="progressChart" width="900" height="320" aria-label="Gráfica de evolución de aciertos"></canvas>
      </section>

      <section class="attempt-list">
        ${attempts
          .slice()
          .reverse()
          .map((attempt) => attemptCard(attempt))
          .join("")}
      </section>

      <div class="actions">
        <button class="secondary" type="button" data-clear-history>Vaciar seguimiento de ${subject.name}</button>
      </div>
    </section>
  `;

  drawChart(document.querySelector("#progressChart"), recent);
  app.querySelector("[data-clear-history]").addEventListener("click", () => clearSubjectHistory(subject));
}

function attemptCard(attempt) {
  const percent = Math.round((attempt.score / attempt.total) * 100);
  const date = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(attempt.date));
  const wrong = attempt.wrong.slice(0, 4);
  return `
    <article class="attempt-card">
      <div class="attempt-head">
        <div>
          <h3>${attempt.quizTitle}</h3>
          <p class="muted">${date}</p>
        </div>
        <strong>${attempt.score}/${attempt.total} · ${percent}%</strong>
      </div>
      ${
        attempt.wrong.length
          ? `
            <details>
              <summary>${attempt.wrong.length} fallos</summary>
              ${wrong
                .map(
                  (item) => `
                    <div class="wrong-item">
                      <p><strong>${escapeHtml(item.unitTitle || "Test")}</strong> · ${escapeHtml(item.question)}</p>
                      <p class="muted">Elegida: ${escapeHtml(item.selected)}</p>
                      <p class="muted">Correcta: ${escapeHtml(item.correctAnswer)}</p>
                    </div>
                  `,
                )
                .join("")}
              ${attempt.wrong.length > wrong.length ? `<p class="muted">Y ${attempt.wrong.length - wrong.length} más.</p>` : ""}
            </details>
          `
          : "<p class=\"muted\">Sin fallos en este intento.</p>"
      }
    </article>
  `;
}

function drawChart(canvas, attempts) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 42;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#dde3ee";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#667085";
  ctx.font = "14px sans-serif";
  [0, 25, 50, 75, 100].forEach((value) => {
    const y = height - padding - (value / 100) * (height - padding * 2);
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
    ctx.fillText(`${value}%`, 8, y + 5);
  });

  if (attempts.length === 1) {
    attempts = [attempts[0], attempts[0]];
  }

  const points = attempts.map((attempt, index) => {
    const percent = attempt.score / attempt.total * 100;
    return {
      x: padding + (index / Math.max(attempts.length - 1, 1)) * (width - padding * 2),
      y: height - padding - (percent / 100) * (height - padding * 2),
      percent,
    };
  });

  ctx.strokeStyle = "#2454d6";
  ctx.lineWidth = 4;
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  points.forEach((point) => {
    ctx.fillStyle = "#0f9f7a";
    ctx.beginPath();
    ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#192033";
    ctx.fillText(`${Math.round(point.percent)}%`, point.x - 14, point.y - 12);
  });
}

function clearSubjectHistory(subject) {
  const remaining = loadAttempts().filter((attempt) => attempt.subjectId !== subject.id);
  saveAttempts(remaining);
  renderTracking(subject);
}

function resultMessage(percent) {
  if (percent >= 85) return "Muy buen resultado. Puedes pasar a repaso rápido o probar el examen final.";
  if (percent >= 60) return "Vas bien. Repite las preguntas falladas mentalmente antes de cambiar de unidad.";
  return "Conviene repasar la unidad y repetir el test con calma.";
}

function renderFlashcardList(subject) {
  state.route = "flashcard-list";
  state.subject = subject;
  state.quiz = null;
  const units = flashcardsData[subject.id];
  setHeader(subject.name, "Preguntas y Respuestas", true);
  setScore();

  app.innerHTML = `
    <section class="grid">
      ${units.map((unit) => `
        <article class="card">
          <div>
            <h3>${unit.title}</h3>
            <p>Repasa las preguntas clave de esta unidad.</p>
            <div class="meta-row">
              <span class="tag">${unit.cards.length} tarjetas</span>
            </div>
          </div>
          <div class="actions">
            <button class="secondary" type="button" data-qa-unit="${unit.id}">Repasar</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;

  app.querySelectorAll("[data-qa-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      const unit = units.find((u) => u.id === button.dataset.qaUnit);
      state.flashcardUnit = unit;
      state.flashcardIndex = 0;
      state.flashcardRevealed = false;
      renderFlashcard(subject, unit);
    });
  });
}

function renderFlashcard(subject, unit) {
  state.route = "flashcard";
  const index = state.flashcardIndex;
  const total = unit.cards.length;
  const card = unit.cards[index];
  const percent = (index / total) * 100;

  setHeader(`${subject.name} · ${unit.title}`, "Preguntas y Respuestas", true);
  setScore(`${index + 1}/${total}`);

  app.innerHTML = `
    <section class="quiz-panel">
      <div class="progress"><span style="width: ${percent}%"></span></div>
      <p class="muted">Tarjeta ${index + 1} de ${total}</p>
      <div class="flashcard-card">
        <h2 class="question-title">${escapeHtml(card.q)}</h2>
        ${state.flashcardRevealed
          ? `<div class="flashcard-answer"><p>${escapeHtml(card.a)}</p></div>`
          : `<div class="actions"><button class="secondary" type="button" data-reveal>Mostrar respuesta</button></div>`
        }
      </div>
      ${state.flashcardRevealed ? `
        <div class="flashcard-nav">
          <button class="secondary" type="button" data-prev ${index === 0 ? "disabled" : ""}>← Anterior</button>
          <button class="primary" type="button" data-next>${index + 1 === total ? "Finalizar" : "Siguiente →"}</button>
        </div>
      ` : ""}
    </section>
  `;

  if (!state.flashcardRevealed) {
    app.querySelector("[data-reveal]").addEventListener("click", () => {
      state.flashcardRevealed = true;
      renderFlashcard(subject, unit);
    });
  } else {
    app.querySelector("[data-prev]").addEventListener("click", () => {
      if (state.flashcardIndex > 0) {
        state.flashcardIndex -= 1;
        state.flashcardRevealed = false;
        renderFlashcard(subject, unit);
      }
    });
    app.querySelector("[data-next]").addEventListener("click", () => {
      if (state.flashcardIndex + 1 >= total) {
        renderFlashcardList(subject);
      } else {
        state.flashcardIndex += 1;
        state.flashcardRevealed = false;
        renderFlashcard(subject, unit);
      }
    });
  }
}

backButton.addEventListener("click", () => {
  if (state.route === "home") return;
  if (state.route === "subject") { renderHome(); return; }
  if (state.route === "tracking") { renderSubject(state.subject); return; }
  if (state.route === "flashcard-list") { renderSubject(state.subject); return; }
  if (state.route === "flashcard") { renderFlashcardList(state.subject); return; }
  renderSubject(state.subject);
});

renderHome();
