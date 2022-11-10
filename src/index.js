import toDos from './modules/items.js';
import './styles/style.css';

const toDosDiv = document.getElementById('todo-list');
const toDosLists = (myToDos) => <div class = "toDo-list">
  <ul>
   <input type="checkbox"></input>
    <span>${myToDos.description}</span>
  </ul>
</div>;
toDosDiv.innerHTML = `
${toDos.map(toDosLists).join('')}`;