function getCart() {
  var cart = window.sessionStorage.getItem("cart");
  cart = JSON.parse(cart);
  return cart ? cart : [];
}

function saveCart(cart) {
  window.sessionStorage.setItem("cart", JSON.stringify(cart));
}

function addCarToCart(car) {
  var cart = getCart();
  cart = cart.filter(e => e["model"] != car["model"]);
  cart.push(car);
  console.log(cart);
  saveCart(cart);
}

function removeCarFromCart(carName) {
  var cart = getCart();
  cart = cart.filter(car => car["model"] != carName);
  console.log(carName, cart);
  saveCart(cart);
  return cart;
}