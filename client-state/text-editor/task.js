const textField = document.querySelector('#editor');
textField.placeholder = 'Ваш текст здесь...';
const clearButton = document.querySelector('#clear');
if (localStorage.getItem('textField') != null) {
  textField.value = localStorage.getItem('textField');
}
clearButton.onclick = () => {
  textField.value = '';
  handleInput();
}
function handleInput() {
  localStorage.setItem('textField', textField.value);
}

textField.addEventListener('input', handleInput);
