const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  { id: 3, name: 'Product 3', price: 20.99 }
];

const productsContainer = document.querySelector('#products');

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

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    // add product to cart logic here
  });
});
