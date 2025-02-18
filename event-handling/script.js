const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllTasksBtn = document.getElementById("clearAllBtn");
const searchInput = document.getElementById("searchInput");

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText });
    taskInput.value = "";
    displayTasks();
  }
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    }>
    <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim().toLowerCase();

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchValue)
  );
  if (filteredTasks.length === 0) {
    taskList.innerHTML = "<li>No tasks found</li>";
    return;
  }
  taskList.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" ${
      task.completed ? "checked" : ""
    }>
    <label for="task-${index}">${task.text}</label>`;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(index)
    );
    taskList.appendChild(li);
  });
});

function clearCompletedTasks() {
  tasks = tasks.filter((task) => !task.completed);
  displayTasks();
}

function clearAllTasks() {
  tasks = [];
  displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksBtn.addEventListener("click", clearAllTasks);

displayTasks();
