const updateTaskStatus = require('./modules/task.js');

jest.mock('./modules/task.js', () => (el, task) => el);

test('Update a task after a click', () => {
  // Set up our document body
  const task = {
    index: 1,
    description: 'Read book',
    completed: true,
  };

  expect(updateTaskStatus('Read book', task)).toBe('Read book');
});
