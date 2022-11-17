jest.mock('task.js');
const $ = require('jquery');
const updateTaskStatus = require('./modules/task');

test('Edit a task after a click', () => {
  // Set up our document body
  document.body.innerHTML = `<li>
   <div class="check">
     <input type="checkbox" name="checkbox" class="checkbox" id="asdasd">
     <input type="text" class="task-description" name="asdasd" id="task-name" value="asdasd">
   </div>
   <div class="actions">
     <i class="fa-solid fa-pen-to-square edit"></i>
     <i class="fa-solid fa-trash-can del"></i>
   </div>
 </li>`;

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  updateTaskStatus.mockImplementation((cb) => {
    cb({});
  });

  // Use jquery to emulate a click on our button
  $('.check').click();

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  expect(updateTaskStatus).toBeCalled();
  expect(updateTaskStatus()).toHaveLength(0);
});