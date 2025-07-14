document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText) {
    const task = { text: taskText, completed: false };
    const tasks = getStoredTasks();
    tasks.push(task);
    saveTasks(tasks);
    input.value = '';
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  const tasks = getStoredTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const span = document.createElement('span');
    span.textContent = task.text;
    span.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function toggleComplete(index) {
  const tasks = getStoredTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(index) {
  const tasks = getStoredTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

function clearAllTasks() {
  localStorage.removeItem('tasks');
  renderTasks();
}

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getStoredTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
  renderTasks();
}
