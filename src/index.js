import './styles/style.css';

import updateTaskStatus from './modules/task.js';
import editTask from './modules/edit.js';
import clearAll from './modules/clearAll.js';
import {
  displayTask, loadList, deleteTask, lists,
} from './modules/all.js';
import { setItem } from './modules/local.js';

const form = document.getElementById('add-to-list');
const btnClear = document.querySelector('.btn-clear');

lists.addEventListener('click', (e) => {
  const task = e.target.parentElement.parentElement;
  if (e.target.classList.contains('del')) {
    deleteTask(task, e.target);
  }

  if (e.target.classList.contains('edit')) {
    const taskItem = task.children[0].children[1].name;
    const taskName = task.querySelector('#task-name').value;
    const res = editTask(taskItem, taskName);
    setItem(res);
  }
  if (e.target.classList.contains('checkbox')) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    updateTaskStatus(e.target, tasks);
  }
});

btnClear.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const filterTasks = clearAll(tasks);
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
  // addTask(task.value);
  loadList(task.value);
  task.value = '';
});