const UI = {
 displayTodo() {
    const toDos = [
    {
    desc: 'cook breakfast',
    id: '1', 
  },
  {
    desc: 'Attend class',
    id: '2',
  },
  {
    desc: 'Revise books',
    id: '3',
  },
  {
    desc: 'visit granny',
    id: '4',
  },
];

storedTodo.forEach((todo) => UI.addBookTolist(todo));
},

 static addBookTolist(todo){
  const list = document.querySelector(.response)
  list.innerHTML += `<li class="to-do-li">
  <div class='todo-div'>
  <input class="to-do-response" type="checkbox"
  <p class ="todo-p">${todo.desc}
  </p>
  
  </li
  `;
}
}
export default UI;