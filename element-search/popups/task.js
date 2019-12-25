const modalWindows = document.getElementsByClassName('modal');
const modalArr = Array.from(modalWindows);
setTimeout(() => modalArr[0].className += ' modal_active', 1000);
const closeBtns = document.getElementsByClassName('modal__close');
const closeArr = Array.from(closeBtns);
const close0 = () => modalArr[0].className = 'modal';
const close2 = () => modalArr[1].className = 'modal';
closeArr[0].onclick = close0;
closeArr[2].onclick = close2;
const buttons = document.getElementsByClassName('btn');
const buttonsArr = Array.from(buttons);
let modal_0_classes = modalArr[0].classList;
let modal_1_classes = modalArr[1].classList;
const succes = () => {
  if (modal_0_classes.contains('modal_active')) {
    modal_1_classes.add('modal_active');
    modal_0_classes.remove('modal_active');
    return ;
  }
  if (modal_1_classes.contains('modal_active')) {
    modal_0_classes.add('modal_active');
    modal_1_classes.remove('modal_active');
  }
}
buttonsArr[0].onclick = succes;
buttonsArr[1].onclick = succes;
