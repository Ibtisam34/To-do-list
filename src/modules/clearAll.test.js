/**
 * @jest-environment jsdom
 */
// import { addTask } from './all.js';
import clearAll from './clearAll.js';

describe('Should clear the tasks which are marked compelete ', () => {
  test('filter tasks which are complete', () => {
    const tasks = [{
      index: 1,
      description: 'Read book',
      completed: false,
    }, {
      index: 2,
      description: 'Read book',
      completed: true,
    }, {
      index: 3,
      description: 'Read book',
      completed: false,
    }];

    const updatedTask = clearAll(tasks);

    expect(updatedTask.length).toBe(2);
  });
});

module.exports = clearAll;