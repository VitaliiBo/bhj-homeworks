const timer = document.getElementById('timer');
function countdown() {
  timer.innerHTML = timer.textContent - 1;
  const timeout = setTimeout( countdown, 1000 );
  if (timer.innerHTML == 0 ) {
    setTimeout(() => {clearTimeout(timeout);
    alert('Вы победили в конкурсе!')} , 10);
  }
}
setTimeout( countdown, 1000);
