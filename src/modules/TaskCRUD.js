import { setItem, taskArr } from './local.js';
import { lists, displayTask } from './all.js';

// adding taks
const addTask = (task) => {
  const taskObj = {};
  taskObj.index = taskArr.length + 1;
  taskObj.description = task;
  taskObj.completed = false;
  if (taskObj !== null) { taskArr.push(taskObj); }
  // localStorage.setItem('tasks', JSON.stringify(taskArr));
  // setItem(taskArr);
  return taskArr;
};

const loadList = (value) => {
  const updatedList = addTask(value);
  setItem(updatedList);
  if (updatedList) {
    lists.innerHTML = '';
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => {
      const listItem = displayTask(task);
      lists.insertAdjacentHTML('beforeend', listItem);
    });
  }
//  lists.innerHTML = updatedList;
};

export {
  addTask, loadList,
};
