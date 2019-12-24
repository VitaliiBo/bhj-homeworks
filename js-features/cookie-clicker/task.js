const cookie = document.getElementById('cookie')
const counter = document.getElementById('clicker__counter');
const clicker = document.getElementById('clicker__speed');
let summ = parseInt(counter.textContent , 10 );
let clickerSpeed = 0;
let start = null;
const click = () => {
  counter.innerHTML = summ + 1;
  console.log(counter.textContent);
  summ += 1;
  let cookieWidth = 0 ;
  let randomNumber = Math.floor(Math.random() * 10);
  if ( randomNumber > 4) {
    cookie.width = cookie.width + Math.random() * 10;
    cookie.height = cookie.height - Math.random() * 10;
  }
  if (randomNumber < 4) {
    cookie.width = cookie.width - Math.random() * 10;
    cookie.height = cookie.height + Math.random() * 10;
  }
  if (start === null) {
    start = Date.now();
  }
  clickerSpeed = summ / (( Date.now() - start ) / 1000);
  if (clickerSpeed === Infinity ) {
    clickerSpeed = 0;
  }
  clicker.innerHTML = clickerSpeed.toFixed(2);
}
cookie.onclick = click;
