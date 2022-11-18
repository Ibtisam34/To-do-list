import deleteTask from './remove.js';

const { loadList } = require('./TaskCRUD.js');
const { taskArr } = require('./local.js');

// const taskArr = JSON.parse(localStorage.getItem('tasks')) || [];
const lists = document.getElementById('to-do-list');

// display task
const displayTask = (task) => {
  const listItem = `
  <li>
    <div class="check">
      <input type="checkbox" name="checkbox" class="checkbox" id="${task.description}">
      <input type="text" class="task-description" name="${task.description}" class="task-name" id="task-name" value="${task.description}">
    </div>
    <div class="actions">
      <i class="fa-solid fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash-can del"></i>
    </div>
  </li>`;
  return listItem;
};

window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // displaying tasks on window loading
  tasks.forEach((task) => {
    const listItem = displayTask(task);
    lists.insertAdjacentHTML('beforeend', listItem);
  });

  const completedTasksIndex = tasks.filter((task) => task.completed === true);
  for (let i = 0; i < completedTasksIndex.length; i += 1) {
    for (let j = 0; j < (lists.children).length; j += 1) {
      if (j === (completedTasksIndex[i].index - 1)) {
        lists.children[j].children[0].children[0].checked = true;
      }
    }
  }
});

export {
  lists, taskArr, displayTask, loadList, deleteTask,
};
