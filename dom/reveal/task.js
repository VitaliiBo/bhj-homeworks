const promo = document.querySelectorAll('.reveal');
function promoReveal() {
  promo.forEach(promo => {
    let promoTop = promo.getBoundingClientRect().top;
    let promoBottom = promo.getBoundingClientRect().bottom;
    let viewportHeight = window.innerHeight;
    if (promoTop < viewportHeight && promoBottom > 0) {
      promo.classList.add('reveal_active');
    }
    if (promoTop > viewportHeight && promo.classList.contains('reveal_active')) {
      promo.classList.remove('reveal_active');
    }
    if (promoTop < viewportHeight && promoBottom < 0 && promo.classList.contains('reveal_active')) {
      promo.classList.remove('reveal_active');
    }
  })
}
window.addEventListener('scroll' , promoReveal);
