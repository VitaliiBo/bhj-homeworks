const increases = document.querySelectorAll('.product__quantity-control_inc');
const decreases = document.querySelectorAll('.product__quantity-control_dec');
const addProduct = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
const body = document.querySelector('body');
const emptyCart = document.querySelector('.cart');

function increase() {
  this.previousElementSibling.innerHTML = parseInt(this.previousElementSibling.innerHTML) + 1;
}
function decrease() {
  if (parseInt(this.nextElementSibling.innerHTML) > 1) {
    this.nextElementSibling.innerHTML = parseInt(this.nextElementSibling.innerHTML) - 1;
  }
}
function isCartEmpty() {
  if(emptyCart.querySelectorAll('.cart__product').length > 0){
    emptyCart.style.display = 'block';
  } else {
    emptyCart.style.display = 'none';
  }
}
function addToCart() {
  let product = this.closest('.product');
  let productId = product.dataset.id;
  let image_src = product.querySelector('.product__image').src;
  let productQuantity = product.querySelector('.product__quantity-value').innerHTML;
  let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
  let alreadyInCart = cartProduct.find(item => item.dataset.id === productId);
  let div = `<div class="cart__product" data-id="${productId}">
      <img class="cart__product-image" src="${image_src}" style="object-fit: contain">
      <div class="cart__product-count">${productQuantity}</div>
      <a href="#" class="product_remove">&times;</a>
  </div>`;
  if ( alreadyInCart != undefined ){
    alreadyInCart.querySelector('.cart__product-count').innerHTML = parseInt(alreadyInCart.querySelector('.cart__product-count').innerHTML) + parseInt(productQuantity);
    animotion(this);
  } else {
    cart.insertAdjacentHTML('afterBegin', div);
    }
  handleRemoveListeners();
  isCartEmpty();
}
function handleRemoveListeners() {
  let removeButtons = document.querySelectorAll('.product_remove');
  if (removeButtons.length > 0) {
    removeButtons.forEach(item => item.removeEventListener('click', removeFromCart));
    removeButtons.forEach(item => item.addEventListener('click', removeFromCart));
  }
}
function removeFromCart() {
  this.parentNode.remove();
  isCartEmpty();
}
function animotion(button) {
  let product = button.closest('.product');
  let productId = product.dataset.id;
  let cartProduct = Array.from(cart.querySelectorAll('.cart__product'));
  let alreadyInCart = cartProduct.find(item => item.dataset.id === productId);
  let imageInCart = alreadyInCart.querySelector('img');
  let imageClone = product.querySelector('img');
  let imageXY = {
    top: imageClone.getBoundingClientRect().top,
    left: imageClone.getBoundingClientRect().left
  }
  temp = product.querySelector('img');
  imageClone = product.querySelector('img').cloneNode(true);
  imageClone.classList.add('animotion_start');
  imageClone.style.top = `${imageXY.top}px`;
  imageClone.style.left = `${imageXY.left}px`;
  body.appendChild(imageClone);
  setTimeout(function () {
    imageClone.style.top = `${imageInCart.getBoundingClientRect().top}px`;
    imageClone.style.left = `${imageInCart.getBoundingClientRect().left}px`;
    imageClone.style.opacity = '0';
    setTimeout(function () {
      imageClone.remove();
    }, 1000);
  }, 10);
}

increases.forEach(item => { item.addEventListener('click', increase) });
decreases.forEach(item => { item.addEventListener('click', decrease) });
addProduct.forEach(item => { item.addEventListener('click', addToCart) });
isCartEmpty();
