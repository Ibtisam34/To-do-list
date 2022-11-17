import { taskArr } from './local.js';

const deleteTask = (task, element) => {
  console.log(task);
  console.log('Element', element);
  const taskName = task.children[0].children[1].value;
  // const tasks = JSON.parse(localStorage.getItem('tasks'));
  const tasks = taskArr;
  const taskIndex = tasks.findIndex((x) => x.description === taskName);
  tasks.splice(taskIndex, 1);
  tasks.forEach((item, ind) => {
    item.index = ind + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  element.parentElement.parentElement.remove();
  return true;
};

export default deleteTask;
