/**
 * @jest-environment jsdom
 */
 import { addTask, taskArr } from './src/modules/all';
 import deleteTask from './src/modules/remove';
 
 describe('Add and Remove data', () => {
   test('New item added', () => {
     addTask({
       index: 1,
       description: 'Read book',
       completed: true,
     });
     expect(taskArr).toHaveLength(0);
   });
 
   test('New Task Deleted', () => {
     // eslint-disable-next-line no-unused-expressions
     (e) => {
       const task = e.target.parentElement.parentElement;
       deleteTask(task, e.target);
     };
 
     expect(taskArr).toHaveLength(0);
   });
 });
 