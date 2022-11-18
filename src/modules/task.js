const updateTaskStatus = (el, tasks) => {
  el.addEventListener('change', (e) => {
    const taskIndex = tasks.findIndex((x) => x.description === e.target.id);
    if (e.target.checked) {
      tasks[taskIndex].completed = true;
    } else {
      tasks[taskIndex].completed = false;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  return true;
};

const updateStatus = (task) => {
  // eslint-disable-next-line no-unused-expressions
  task.completed ? task.completed = true : task.completed = false;
  return task;
};

export { updateTaskStatus, updateStatus };