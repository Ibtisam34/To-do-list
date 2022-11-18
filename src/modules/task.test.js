/**
 * @jest-environment jsdom
 */
const { updateStatus } = require('./task.js');

describe('Should if the status is toggling: ', () => {
  test('should update completed status', () => {
    const task = updateStatus({
      index: 1,
      description: 'Read book',
      completed: true,
    });
    expect(task.completed).toBe(true);
  });
});