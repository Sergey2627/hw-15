function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
  const tasks = getTasks();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = tasks.map(task => `<li>${task} <button onclick="deleteTask('${task}')">Видалити</button></li>`).join('');
}

function addNewTask() {
  const newTask = document.getElementById('newTaskInput').value.trim();
  if (newTask) {
    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    displayTasks();
    document.getElementById('newTaskInput').value = '';
  } else {
    alert('Введіть текст для нової таски!');
  }
}

function deleteTask(task) {
  const tasks = getTasks().filter(item => item !== task);
  saveTasks(tasks);
  displayTasks();
}

document.addEventListener('DOMContentLoaded', function() {
  displayTasks();

  document.getElementById('addTaskBtn').addEventListener('click', addNewTask);
});
