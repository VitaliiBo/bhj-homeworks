const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split( "; " + name + "=" );
  if ( parts.length === 2 ) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
}
getCookie('promoactive');

const promo = document.querySelector('.modal');
const promoCloseButton = document.querySelector('.modal__close');
promoCloseButton.addEventListener('click' , () => {
  promo.classList.toggle('modal_active');
  document.cookie = 'promoactive=false';
})

if (getCookie('promoactive') === 'true' || getCookie('promoactive') === undefined) {
  setTimeout(function () {
    promo.classList.toggle('modal_active');
    document.cookie = 'promoactive=true';
  }, 1000);
}
