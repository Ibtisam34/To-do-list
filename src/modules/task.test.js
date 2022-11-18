/**
 * @jest-environment jsdom
 */
const updateTaskStatus = require('./task.js');

describe('Should if the status is toggling: ', () => {
  test('should update completed status', () => {
    expect(() => {
      updateTaskStatus('<input type="checkbox" name="checkbox" class="checkbox" id="Read bookssss">', {
        index: 1,
        description: 'Read book',
        completed: true,
      });
      expect(task).toHaveLength(1);
  });
  });
})

















