const tasks = [];

const setItem = (task) => {
  tasks.push(task);
  return tasks;
};

const getItem = () => tasks;

export { setItem, getItem };