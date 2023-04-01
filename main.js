// Products Data
const products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'Description of product 1',
        price: 10.0
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'Description of product 2',
        price: 20.0
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'Description of product 3',
        price: 30.0
    }
];

// DOM Elements
const itemList = document.querySelector('ul');
const cartList = document.querySelector('#cart ul');
const checkoutButton = document.querySelector('#checkout');

// Cart Data
let cart = [];

// Display the products
function displayProducts() {
    products.forEach(product => {
        const item = `
            <li>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>$${product.price.toFixed(2)}</span>
                <button data-id="${product.id}">Add to cart</button>
            </li>
        `;
        itemList.insertAdjacentHTML('beforeend', item);
    });
}

// Add product to the cart
function addToCart(id) {
    const item = cart.find(item => item.id === id);
    if (!item) {
        cart.push({ id, quantity: 1 });
    } else {
        item.quantity++;
    }
    updateCart();
}

// Remove product from the cart
function removeFromCart(id) {
    const item = cart.find(item => item.id === id);
    if (item.quantity === 1) {
        cart = cart.filter(item => item.i