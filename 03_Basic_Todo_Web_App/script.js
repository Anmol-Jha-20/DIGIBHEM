document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    created: new Date().toLocaleString(),
    completedAt: null,
  };

  let tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  input.value = "";
  renderTasks();
}

function toggleTaskCompletion(taskId) {
  let tasks = getTasks();
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    task.completed = !task.completed;
    task.completedAt = task.completed ? new Date().toLocaleString() : null;
    saveTasks(tasks);
    renderTasks();
  }
}

function deleteTask(taskId) {
  let tasks = getTasks();
  tasks = tasks.filter((t) => t.id !== taskId);
  saveTasks(tasks);
  renderTasks();
}

function editTask(taskId) {
  let tasks = getTasks();
  const task = tasks.find((t) => t.id === taskId);

  if (task) {
    const newText = prompt("Edit task:", task.text);
    if (newText !== null) {
      task.text = newText;
      saveTasks(tasks);
      renderTasks();
    }
  }
}

function renderTasks() {
  const pendingTasksList = document.getElementById("pendingTasksList");
  const completedTasksList = document.getElementById("completedTasksList");

  pendingTasksList.innerHTML = "";
  completedTasksList.innerHTML = "";

  const tasks = getTasks();
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="task-content">
                ${task.text} <span>${task.created}${
      task.completed ? " (Completed: " + task.completedAt + ")" : ""
    }</span>
            </div>
            <div class="task-actions">
                <button class="complete" onclick="toggleTaskCompletion(${
                  task.id
                })">${task.completed ? "Undo" : "Complete"}</button>
                <button class="edit" onclick="editTask(${
                  task.id
                })">Edit</button>
                <button class="delete" onclick="deleteTask(${
                  task.id
                })">Delete</button>
            </div>
        `;
    li.className = task.completed ? "complete" : "";
    if (task.completed) {
      completedTasksList.appendChild(li);
    } else {
      pendingTasksList.appendChild(li);
    }
  });
}

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  renderTasks();
}
