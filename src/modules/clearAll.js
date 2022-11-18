const clearAll = (tasks) => {
  const filterTasks = tasks.filter((task) => task.completed === false);
  filterTasks.forEach((item, ind) => {
    item.index = ind + 1;
  });

  return filterTasks;
};

export default clearAll;