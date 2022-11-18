/**
 * @jest-environment jsdom
 */
// import { addTask } from './all.js';
import { getItem } from '../__mocks__/localStorage.js';
import editTask from './edit.js';

jest.mock('../__mocks__/addTask.js');
const addTask = require('../__mocks__/addTask.js');

describe('Should check if a task value is modified', () => {
  test('should modify  task description', () => {
    addTask({
      index: 1,
      description: 'Read book',
      completed: false,
    });

    const updatedTask = editTask('Read Book', 'Read Books');
    addTask({
      index: updatedTask.index + 1,
      description: updatedTask.description,
      completed: false,
    });

    expect(getItem()).toBeTruthy();
  });
});

module.exports = editTask;