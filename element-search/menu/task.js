const menuCollection = document.querySelectorAll('.menu__item');

const menuLinks = document.querySelectorAll('.menu__item a');
console.log(menuLinks);
const menuLinksArr = Array.from(menuLinks);
console.log(menuLinksArr);
const menuLinksArrSub = menuLinksArr.filter(item => item.nextElementSibling);
console.log(menuLinksArrSub);
menuLinksArrSub.forEach(item => item.href ='#');


function subActive() {
  let nextElement = this.lastElementChild;
  let classesList = nextElement.classList;
  if ( nextElement == 'ul.menu.menu_sub' ) {
    console.log('zaebis');
  }
  if (classesList.contains('menu_active')) {
    classesList.remove('menu_active');
  } else {
    classesList.add('menu_active');
  }

}

// menuCollection[1].addEventListener('click', subActive);
menuCollection.forEach( item => item.addEventListener('click', subActive));
//console.log(menuCollection[1].nextElementSibling.querySelectorAll('.menu_sub'));
console.log(menuCollection);
