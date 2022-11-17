// import { addTask } from './all.js';
import { getItem, setItem } from '../__mocks__/localStorage.js';
import editTask from './edit.js';

jest.mock('../__mocks__/addTask.js');
jest.mock('../__mocks__/localStorage.js');

const addTask = require('../__mocks__/addTask.js');

/**
 * @jest-environment jsdom
 */

describe('Should check if a task value is modified', () => {
  test('should modify  task description', () => {
    const newTask = addTask({
      index: 1,
      description: 'Read book',
      completed: false,
    });
    setItem(newTask);
    const updatedTask = editTask({
      index: 1,
      description: 'Attend Meeting',
      completed: true,
    });
    setItem(updatedTask);

    expect(updatedTask).toBe(getItem());
  });
});

module.exports = editTask;