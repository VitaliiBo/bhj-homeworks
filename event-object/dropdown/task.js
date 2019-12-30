const dropDown = document.querySelector('.dropdown__value');
const dropdownList = document.querySelectorAll('.dropdown__item');
function dropClick() {
  let menuClassList = this.nextElementSibling.classList;
  if (menuClassList.contains('dropdown__list_active')) {
    menuClassList.remove('dropdown__list_active');
  } else {
    menuClassList.add('dropdown__list_active');
  }
}
function choiceClick(e) {
  e.preventDefault();
  dropDown.innerText = e.target.innerText;
  e.target.closest('ul').classList.remove('dropdown__list_active');
}

dropDown.addEventListener('click', dropClick);
dropdownList.forEach( item => item.addEventListener('click', choiceClick));
