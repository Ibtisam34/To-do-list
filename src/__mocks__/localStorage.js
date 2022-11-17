let tasks = {};

const setItem = (task) => {
  tasks = task;
};

const getItem = () => tasks;

export { setItem, getItem };