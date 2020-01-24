const div = document.querySelector('#items');
const loader = document.querySelector('#loader');
if (localStorage.getItem('valutes') != null) {
  div.innerHTML = localStorage.getItem('valutes');
  loader.classList.remove('loader_active');
}
function getExchangeRates() {
  let xhr = new XMLHttpRequest();
  let url = 'https://netology-slow-rest.herokuapp.com/'
  xhr.open('GET', url );
  xhr.responseType = 'json';
  xhr.send();
  xhr.onreadystatechange = function () {
    if( xhr.readyState === 4 ){
      div.innerHTML = '';
      let valutes = xhr.response.response.Valute;
      let divTemp;
      for ( key in valutes) {
        divTemp =
        `<div class="item">
          <div class="item__code">
              ${valutes[key].CharCode}
          </div>
          <div class="item__value">
              ${valutes[key].Value}
          </div>
          <div class="item__currency">
              руб.
          </div>
        </div>`;
        div.insertAdjacentHTML('beforeEnd', divTemp);
      }
      loader.classList.remove('loader_active');
      localStorage.setItem('valutes' , div.innerHTML);
    }
  }
}
getExchangeRates();
