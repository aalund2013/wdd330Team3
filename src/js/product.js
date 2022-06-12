let products = [];
let cart = [];
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartData() {
  cart = getLocalStorage("so-cart") || [];
}
// get tents data
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  cart.push(product);
  setLocalStorage("so-cart", cart);
}

getProductsData();
getCartData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
