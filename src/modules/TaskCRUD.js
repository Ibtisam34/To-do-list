import { taskArr, lists } from './all.js';

// adding taks
const addTask = (task) => {
  const taskObj = {};
  taskObj.index = taskArr.length + 1;
  taskObj.description = task;
  taskObj.completed = false;
  taskArr.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskArr));
  return taskArr;
};

const loadList = () => {
  addTask().then((newList) => {
    lists.insertAdjacentHTML('beforeend', newList);
    return newList;
  });
};

export {
  addTask, loadList,
};
