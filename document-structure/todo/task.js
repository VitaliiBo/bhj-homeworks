if (localStorage.getItem('tasks') != null){
  let taskList = document.querySelector('#tasks__list');
  taskList.innerHTML = localStorage.getItem('tasks');
    taskList.querySelectorAll('.task__remove').forEach(item => item.addEventListener('click', clickRemove ));
}
const inputArea = document.querySelector('#task__input');
const inputForm = document.querySelector('div form');
const taskList = document.querySelector('#tasks__list');
function clickRemove(e) {
  e.preventDefault();
  this.parentNode.remove();
  saveList();
}
function saveList() {
  let cloneTasks = taskList.cloneNode(true);
  localStorage.setItem('tasks', cloneTasks.innerHTML);
}
function addListeners() {
  taskList.querySelectorAll('.task__remove').forEach(item => item.removeEventListener('click', clickRemove ));
  taskList.querySelectorAll('.task__remove').forEach(item => item.addEventListener('click', clickRemove ));
}
function formSubmit(e) {
  e.preventDefault();
  if (inputArea.value.trim() != '') {
    let div = `<div class="task">
    <div class="task__title">
    ${inputArea.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
    taskList.insertAdjacentHTML('beforeEnd', div);
    inputArea.value = '';
    addListeners();
    saveList();
  }
}
inputForm.addEventListener('submit', formSubmit);
