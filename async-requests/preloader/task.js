function getExchangeRates() {
  let xhr = new XMLHttpRequest();
  let url = 'https://netology-slow-rest.herokuapp.com/'
  xhr.open('GET', url );
  xhr.responseType = 'json';
  xhr.send();
  xhr.onreadystatechange = function () {
    if( xhr.readyState === 4 ){
      let valutes = xhr.response.response.Valute;
      for (var key in valutes) {
        
      }
      console.log( xhr.response.response.Valute );
    }
  }
}

getExchangeRates();
