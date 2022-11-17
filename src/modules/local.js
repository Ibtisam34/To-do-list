const taskArr = JSON.parse(localStorage.getItem('tasks')) || [];

const setItem = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const getItem = () => {
  taskArr.push(JSON.parse(localStorage.getItem('tasks')));
  return taskArr;
};

module.exports = { setItem, getItem, taskArr };