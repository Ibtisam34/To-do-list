import { taskArr } from './local.js';

const editTask = (task) => {
  // const tasks = JSON.parse(localStorage.getItem('tasks'));
  // const tasks = getItem();
  const tasks = taskArr;
  if (typeof window !== 'undefined') {
    const taskItem = task.children[0].children[1].name;
    const taskIndex = tasks.findIndex((x) => x.description === taskItem);
    const taskName = task.querySelector('#task-name').value;
    tasks.forEach((task, i) => {
      if (i === parseInt(taskIndex, 10)) {
        tasks[i].index = i + 1;
        tasks[i].description = taskName;
        tasks[i].completed = false;
      }
    });
    return tasks;
  }
  return task;
};

export default editTask;