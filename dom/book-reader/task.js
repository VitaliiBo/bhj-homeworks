const fontSizeButtons = document.querySelectorAll('.font-size');
const fontColorButtons = document.querySelectorAll('div.book__control_color a');
const bgColorButtons = document.querySelectorAll('div.book__control_background a');
const book = document.querySelector('.book');
function fontClick(e) {
  let activeSize = document.querySelector('.font-size_active');
  e.preventDefault();
  activeSize.classList.remove('font-size_active');
  this.classList.add('font-size_active');
  if (this.dataset.fontSize === '') {
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
  } else {
    book.classList.remove('book_fs-big');
    book.classList.remove('book_fs-small');
    book.classList.add(this.dataset.fontSize);
  }
}
function fontColorClick(e) {
  e.preventDefault();
  let activeFontColor = document.querySelector('div.book__control_color a.color_active');
  activeFontColor.classList.remove('color_active');
  this.classList.add('color_active');
  if (this.dataset.fontColor === '') {
    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
  } else {
    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
    book.classList.add(this.dataset.fontColor);
  }
}
function bgColorClick(e) {
  e.preventDefault();
  let activeFontColor = document.querySelector('div.book__control_background a.color_active');
  activeFontColor.classList.remove('color_active');
  this.classList.add('color_active');
  if (this.dataset.bgColor === '') {
    book.classList.remove('book_bg-gray');
    book.classList.remove('book_bg-black');
  } else {
    book.classList.remove('book_bg-gray');
    book.classList.remove('book_bg-black');
    book.classList.add(this.dataset.bgColor);
  }
}
fontSizeButtons.forEach(item => item.addEventListener('click', fontClick));
fontColorButtons.forEach(item => item.addEventListener('click', fontColorClick));
bgColorButtons.forEach(item => item.addEventListener('click', bgColorClick));
