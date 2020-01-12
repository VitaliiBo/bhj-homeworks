const rotator = document.querySelector('.rotator');
const rotatorCases = document.querySelectorAll('.rotator__case');
rotatorCases.forEach(item => item.style.color = item.dataset.color);
function changeCase() {
  let activeCase = document.querySelector('.rotator__case_active');
  if (activeCase.parentElement === rotator && activeCase.nextElementSibling != null) {
    activeCase.classList.toggle('rotator__case_active');
    activeCase.nextElementSibling.classList.toggle('rotator__case_active');
    changeCaseTime(activeCase.nextElementSibling);
  } else {
    activeCase.classList.toggle('rotator__case_active');
    rotator.firstElementChild.classList.toggle('rotator__case_active');
    changeCaseTime(rotator.firstElementChild);
  }
}
function changeCaseTime(speed) {
  setTimeout(changeCase , speed.dataset.speed);
}
changeCaseTime(rotator.firstElementChild);
