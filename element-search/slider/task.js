const images = document.querySelectorAll('.slider__item');
const imagesArr = Array.from(images);
let index = imagesArr.findIndex(item => item.classList.contains('slider__item_active'));
let imageIndex = index;
const dots = document.querySelectorAll('.slider__dot');
dots[imageIndex].classList.add('slider__dot_active');
const dotsArr = Array.from(dots);

function slideImage() {
  let activeImage = document.querySelector('.slider__item_active');
  let activeDot = document.querySelector('.slider__dot_active');
  activeDot.classList.remove('slider__dot_active');
  activeImage.classList.remove('slider__item_active');
  if (this === document.querySelector('.slider__arrow_next')) {
    imageIndex += 1;
    if (images[imageIndex] === undefined) {
      imageIndex = 0;
    }
    images[imageIndex].classList.add('slider__item_active');
    dots[imageIndex].classList.add('slider__dot_active');
  } else {
    imageIndex -= 1;
    if (images[imageIndex] === undefined) {
      imageIndex = images.length - 1;
    }
    images[imageIndex].classList.add('slider__item_active');
    dots[imageIndex].classList.add('slider__dot_active');
  }
}
function dotCheck() {
  let activeImage = document.querySelector('.slider__item_active');
  let activeDot = document.querySelector('.slider__dot_active');
  activeDot.classList.remove('slider__dot_active');
  activeImage.classList.remove('slider__item_active');
  imageIndex = dotsArr.findIndex(item => item === this);
  images[imageIndex].classList.add('slider__item_active');
  dots[imageIndex].classList.add('slider__dot_active');
}
const arrows = document.querySelectorAll('.slider__arrow');
arrows.forEach(item => item.addEventListener('click' , slideImage));
dots.forEach(item => item.addEventListener('click' , dotCheck));
