// ===== RESPONSIVE MONITOR =====
const viewportWidthEl = document.getElementById("viewportWidth");
const viewportTipEl = document.getElementById("viewportTip");

const describeViewport = (width) => {
  if (width < 600) return "Mobile breakpoint engaged. Keep layouts single-column.";
  if (width < 1024) return "Tablet territory—flex grids shine here.";
  return "Desktop canvas unlocked. Let the whitespace breathe.";
};

const updateViewportInfo = () => {
  const width = window.innerWidth;
  viewportWidthEl.textContent = `${width}px`;
  viewportTipEl.textContent = describeViewport(width);
};

updateViewportInfo();
window.addEventListener("resize", updateViewportInfo);

// ===== QUIZ FUNCTIONALITY =====
const quizData = [
  {
    question: "Which CSS feature allows styles to respond to device capabilities?",
    options: ["Flexbox", "Media Queries", "Pseudo-classes", "Keyframes"],
    answer: "Media Queries",
    explanation: "Media queries let you adapt to screen size, orientation, and even user preferences."
  },
  {
    question: "What does the 'defer' attribute do on a script tag?",
    options: [
      "It blocks HTML parsing",
      "It loads the script asynchronously and runs after parsing",
      "It inlines the script",
      "It disables the script"
    ],
    answer: "It loads the script asynchronously and runs after parsing",
    explanation: "With defer, the script downloads in parallel but executes after the DOM is ready."
  },
  {
    question: "Which API lets you store key-value pairs in the browser that persist across sessions?",
    options: ["Session Storage", "Local Storage", "IndexedDB", "Cache API"],
    answer: "Local Storage",
    explanation: "Local storage retains data with no expiration date until it's explicitly cleared."
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const quizFeedback = document.getElementById("quizFeedback");
const quizStep = document.getElementById("quizStep");
const progressBar = document.getElementById("progressBar");

const setProgress = () => {
  const step = currentQuestion + 1;
  quizStep.textContent = `Question ${step} of ${quizData.length}`;
  const width = (step / quizData.length) * 100;
  progressBar.style.width = `${width}%`;
};

const resetState = () => {
  quizFeedback.textContent = "";
  quizFeedback.className = "";
  nextBtn.style.display = "none";
};

const loadQuestion = () => {
  resetState();
  setProgress();

  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(btn, option));
    answersEl.appendChild(btn);
  });
};

const checkAnswer = (button, selected) => {
  const correctAnswer = quizData[currentQuestion].answer;
  const buttons = answersEl.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
    if (btn === button && selected !== correctAnswer) {
      btn.classList.add("incorrect");
    }
  });

  if (selected === correctAnswer) {
    score++;
    quizFeedback.textContent = "Correct! " + quizData[currentQuestion].explanation;
    quizFeedback.classList.add("success");
  } else {
    quizFeedback.textContent = "Not quite. " + quizData[currentQuestion].explanation;
    quizFeedback.classList.add("danger");
  }

  nextBtn.style.display = "inline-flex";
};

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML = "";
    quizFeedback.className = "success";
    quizFeedback.textContent = score === quizData.length
      ? "Flawless victory! You aced every question."
      : "Great effort! Review the notes and try again.";
    scoreEl.textContent = `Final Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
    progressBar.style.width = "100%";
    quizStep.textContent = "Quiz summary";
  }
});

loadQuestion();

// ===== FETCH DATA FROM API =====
const quoteContent = document.getElementById("joke");
const quoteAuthor = document.getElementById("quoteAuthor");
const fetchButton = document.getElementById("fetchJoke");
const quoteCard = document.querySelector(".quote-card");

const fetchQuote = async () => {
  quoteCard.classList.add("loading");
  quoteCard.classList.remove("failed");
  quoteContent.textContent = "Fetching a spark...";
  quoteAuthor.textContent = "";

  try {
    const response = await fetch("https://api.quotable.io/random?maxLength=120");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    quoteContent.textContent = `“${data.content}”`;
    quoteAuthor.textContent = data.author ? `— ${data.author}` : "— Unknown";
  } catch (error) {
    quoteCard.classList.add("failed");
    quoteContent.textContent = "Could not load a quote. Check your connection and try again.";
  } finally {
    quoteCard.classList.remove("loading");
  }
};

fetchButton.addEventListener("click", fetchQuote);
