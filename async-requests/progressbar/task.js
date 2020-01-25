const form = document.querySelector('#form');
const file = form.file;
const progress = document.querySelector('#progress');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  let url = 'https://netology-slow-rest.herokuapp.com/upload.php';
  request.open('POST' , url );
  request.upload.onprogress = (e) => {
    progress.value = (e.loaded / e.total ).toFixed(1);
  };
  request.upload.onload = () => form.insertAdjacentHTML('afterEnd', '<span><b>Загрузка завершена</b></span>');
  request.send(formData);
})
