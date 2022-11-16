/**
 * @jest-environment jsdom
 */
import { addTask, taskArr, deleteTask } from './src/modules/all.js';

describe('Add and Remove data', () => {
  test('New item added', () => {
    addTask({
      index: 1,
      description: 'Read book',
      completed: false,
    });
    expect(taskArr).toHaveLength(1);
  });

  test('New Task Deleted', () => {
    // eslint-disable-next-line no-unused-expressions
    (e) => {
      const task = e.target.parentElement.parentElement;
      deleteTask(task, e.target);
    };

    expect(taskArr).toHaveLength(1);
  });
});
