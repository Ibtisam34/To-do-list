import './styles/style.css';

import updateTaskStatus from './modules/task.js';
import editTask from './modules/edit.js';
import {
  displayTask, addTask, deleteTask, lists,
} from './modules/all.js';

const form = document.getElementById('add-to-list');
const btnClear = document.querySelector('.btn-clear');

lists.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteTask(task, e.target);
  }

  if (e.target.classList.contains('edit')) {
    console.log(task);
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