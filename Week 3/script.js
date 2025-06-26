// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = [];

// Add new task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    const task = {
      id: Date.now(),
      text: text,
      completed: false
    };
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
});

// Toggle task completed
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

// Delete task
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Filter button click
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    renderTasks();
  });
});

// Render tasks on UI
function renderTasks() {
  const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  if (activeFilter === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (activeFilter === "pending") {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleTask(${task.id})">${task.text}</span>
      <button onclick="deleteTask(${task.id})">✖</button>
    `;

    taskList.appendChild(li);
  });
}

// Show current date in footer
document.getElementById("date").textContent = new Date().toDateString();
