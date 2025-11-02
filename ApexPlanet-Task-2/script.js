// Enhanced form validation with inline feedback
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const formFields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message")
};

const setFormStatus = (type, message) => {
  formStatus.dataset.state = type;
  formStatus.textContent = message;
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  Object.values(formFields).forEach((field) => field.classList.remove("input-error"));

  const name = formFields.name.value.trim();
  const email = formFields.email.value.trim();
  const message = formFields.message.value.trim();

  let hasError = false;

  if (!name || !email || !message) {
    setFormStatus("error", "All fields are required before we can connect.");
    Object.values(formFields).forEach((field) => {
      if (!field.value.trim()) field.classList.add("input-error");
    });
    hasError = true;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!hasError && !emailPattern.test(email)) {
    setFormStatus("warning", "That email looks off—double-check the address.");
    formFields.email.classList.add("input-error");
    hasError = true;
  }

  if (hasError) return;

  setFormStatus("success", "Message sent! I'll get back to you soon.");
  contactForm.reset();
});

// Dynamic to-do list with completion states and inline notifications
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const todoStatus = document.getElementById("todoStatus");

const updateTodoStatus = (type, message) => {
  todoStatus.dataset.state = type;
  todoStatus.textContent = message;
};

const addTask = () => {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    taskInput.classList.add("input-error");
    updateTodoStatus("error", "Add a short description so the task is actionable.");
    return;
  }

  taskInput.classList.remove("input-error");

  const li = document.createElement("li");

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "task-content";

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  const metaSpan = document.createElement("span");
  metaSpan.className = "task-meta";
  const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  metaSpan.textContent = `Added at ${timestamp}`;

  contentWrapper.appendChild(textSpan);
  contentWrapper.appendChild(metaSpan);

  const actionWrapper = document.createElement("div");
  actionWrapper.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.type = "button";
  completeBtn.textContent = "Mark Complete";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove";
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";

  completeBtn.addEventListener("click", () => {
    const isCompleted = li.classList.toggle("completed");
    completeBtn.textContent = isCompleted ? "Undo" : "Mark Complete";
    updateTodoStatus("success", isCompleted ? "Task complete—nice work!" : "Back on the list. Keep going!");
  });

  removeBtn.addEventListener("click", () => {
    li.remove();
    if (!taskList.children.length) {
      updateTodoStatus("warning", "No tasks left. Queue up the next priority.");
    } else {
      updateTodoStatus("success", "Task cleared. Momentum unlocked!");
    }
  });

  actionWrapper.appendChild(completeBtn);
  actionWrapper.appendChild(removeBtn);

  li.appendChild(contentWrapper);
  li.appendChild(actionWrapper);
  taskList.appendChild(li);

  taskInput.value = "";
  updateTodoStatus("success", "Task added—aim for a streak!");
};

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
