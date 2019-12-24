const modalWindows = document.getElementsByClassName('modal');
const modalArr = Array.from(modalWindows);
setTimeout(() => modalArr[0].className += ' modal_active', 1000);

const closeBtns = document.getElementsByClassName('modal__close');
const closeArr = Array.from(closeBtns);

const close0 = () => modalArr[0].className = 'modal';
const close1 = () => modalArr[1].className = 'modal';
closeArr[0].onclick = close0;
closeArr[1].onclick = close1;

const buttons = document.getElementsByClassName('btn');
const buttonsArr = Array.from(buttons);

const succes = () => 
buttonsArr[0].onclick =
