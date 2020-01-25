const signedInfo = localStorage.getItem('signedInInfo');
const form = document.querySelector('#signin__form');
const signInForm = document.querySelector('#signin');
const welcomeMessage = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const signOut = document.querySelector('#signout__btn');
signInForm.classList.toggle('signin_active');

function signToggle() {
  signInForm.classList.toggle('signin_active');
  welcomeMessage.classList.toggle('welcome_active');
}
function clearInputs() {
  Array.from(form.querySelectorAll('input'))
    .forEach(item => item.value = '');
}

if ( signedInfo === 'true' ) {
  userId.innerHTML = localStorage.getItem('signedUserId');
  signToggle();
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let request = new XMLHttpRequest();
  formData = new FormData(form);
  let url = 'https://netology-slow-rest.herokuapp.com/auth.php';
  request.open('POST', url );
  request.responseType = 'json';
  request.send(formData);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status == 200) {
      let response = request.response;
      if (response.success === true) {
        localStorage.setItem('signedInInfo', response.success);
        localStorage.setItem('signedUserId', response.user_id);
        userId.innerHTML = localStorage.getItem('signedUserId');
        signToggle();
        clearInputs();
      } else {
        localStorage.setItem('signedInInfo', response.success);
        clearInputs();
        alert('Неверный Логин/Пароль')
      }
    }
  }
})
signOut.addEventListener('click', () => {
  localStorage.removeItem('signedInInfo');
  localStorage.removeItem('signedUserId');
  signToggle();
})
