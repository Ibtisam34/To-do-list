const updateTaskStatus = require('./task.js');

test('should update completed status', () => {
  expect(() => {
    updateTaskStatus('<input type="checkbox" name="checkbox" class="checkbox" id="Read bookssss">', {
      index: 1,
      description: 'Read book',
      completed: true,
    });
  }).toHaveLength(0);
});