/**
 * @jest-environment jsdom
 */
import { deleteTask } from './src/modules/all.js';
import { addTask } from './src/modules/TaskCRUD.js';
import { taskArr } from './src/modules/local';

describe('Add and Remove data', () => {
  const before = taskArr.length;
  test('New item added', () => {
    addTask({
      index: 1,
      description: 'Read book',
      completed: false,
    });
    expect(taskArr.length).toBeGreaterThan(before);
  });

  test('New Task Deleted', () => {
    const before = taskArr.length;
    let len = 1;
    // eslint-disable-next-line no-unused-expressions
    (e) => {
      const task = e.target.parentElement.parentElement;
      len = deleteTask(task, e.target);
    };

    expect(before - len).toBeLessThan(before);
  });
});
