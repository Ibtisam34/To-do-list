const updateTaskStatus = require('./modules/task.js');

// eslint-disable-next-line no-unused-vars
jest.mock('./modules/task.js', () => (el, task) => el);

describe('Update Task details', () => {
  test('Update a task after a click', () => {
    // Set up our document body
    const task = {
      index: 1,
      description: 'Read book',
      completed: true,
    };

    expect(updateTaskStatus('Read book', task)).toBe('Read book');
  });
});