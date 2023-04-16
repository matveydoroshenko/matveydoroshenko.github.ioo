const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  { id: 3, name: 'Product 3', price: 20.99 }
];

const productsContainer = document.querySelector('#products');

// loop through products and append to the products container
products.forEach(product => {
  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button class="add-to-cart" data-product-id="${product.id}">Add to cart</button>
  `;
  productsContainer.appendChild(productElement);
});

// add event listener for add to cart button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    console.log(`Product ${productId} added to cart`);
    // add product to cart logic here
  });
});

const cart = [];

function addToCart(product) {
  const existingProduct = cart.find(p => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartTotal();
}

function updateCartTotal() {
  const cartTotal = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
  const cartTotalElement = document.querySelector('#cart-total');
  cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// add event listener for add to cart button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));
    addToCart(product);
  });
});
