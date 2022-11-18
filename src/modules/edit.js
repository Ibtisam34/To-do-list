import { taskArr } from './local.js';

const editTask = (task, taskName) => {
  const tasks = taskArr;
  const taskItem = task;
  const taskIndex = tasks.findIndex((x) => x.description === taskItem);
  tasks.forEach((task, i) => {
    if (i === parseInt(taskIndex, 10)) {
      tasks[i].index = i + 1;
      tasks[i].description = taskName;
      tasks[i].completed = false;
    }
  });

  if (taskIndex === -1) {
    const task = { index: 0, description: taskName, completed: false };
    tasks.push(task);
  }
  return tasks;
};

export default editTask;