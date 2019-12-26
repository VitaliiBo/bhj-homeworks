const menuCollection = document.querySelectorAll('.menu__item');



function subActive() {
  let nextElement = this.lastElementChild;
  let classesList = nextElement.classList;
  classesList.add('menu_active');

}

menuCollection[1].addEventListener('click', subActive);
console.log(menuCollection);
