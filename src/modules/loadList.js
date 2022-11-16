import { displayTask, lists } from './all.js';

const loadList = () => {
  displayTask().then((newList) => {
    console.log('new list added');
    return newList;
  });
  const listItem = displayTask(taskObj);
  lists.insertAdjacentHTML('beforeend', listItem);
};

module.exports = loadList;