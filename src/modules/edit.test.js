const editTask = require('./edit.js');

test('should edit task', () => {
  expect(() => {
    editTask({
      index: 1,
      description: 'Read book',
      completed: true,
    });
  }).toHaveLength(0);
});

module.exports = editTask;