// eslint-disable-next-line import/extensions, import/no-unresolved
import './src/styles/style.css';

import updateTaskStatus from './modules/task.js';
import editTask from '../src/modules/edit.js';
import {
  displayTask, addTask, deleteTask, lists,
} from './modules/all.js';

const form = document.getElementById('add-to-list');
const btnClear = document.querySelector('.btn-clear');

const editTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskItem = task.children[0].children[1].name;
  const taskIndex = tasks.findIndex((x) => x.description === taskItem);
  const taskName = task.querySelector('#task-name').value;
  tasks[taskIndex].description = taskName;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

lists.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteTask(task, e.target);
  }

  if (e.target.classList.contains('edit')) {
    editTask(task);
  }
  if (e.target.classList.contains('checkbox')) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    updateTaskStatus(e.target, tasks);
  }
});

btnClear.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filterTasks = tasks.filter((task) => task.completed === false);
  filterTasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  let updatedList = '';
  filterTasks.forEach((task) => {
    updatedList += displayTask(task);
  });
  lists.innerHTML = updatedList;
  localStorage.setItem('tasks', JSON.stringify(filterTasks));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = document.getElementById('task');
  addTask(task.value);
  task.value = '';
});