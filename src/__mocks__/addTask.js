import { setItem } from './localStorage.js';

const addTask = (task) => {
  setItem(task);
};
module.exports = addTask;