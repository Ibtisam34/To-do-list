class UI {
  static displayTodo() {
    const storedTodo = [
      {
        desc: 'cook-breakfast.',
        id: '1',
      },

      {
        desc: 'attand-class.',
        id: '2',
      },

      {
        desc: 'revise books.',
        id: '3',
      },
      {
        desc: 'visit granny.',
        id: '3',
      },
    ];
    storedTodo.forEach((todo) => UI.addBookToList(todo));
  }

  static addBookToList(todo) {
    const list = document.querySelector('.js-list');
    list.innerHTML += `
      <li class='todo-li'>
      <div class='todo-div'>
      <input class='to-do-response' type='checkbox'>
      <p class='todo-p-1'>${todo.desc}</p>
      </div>
      <i class="fa-solid fa-trash-can"></i>
      </li>
      `;
  }
}

export default UI;