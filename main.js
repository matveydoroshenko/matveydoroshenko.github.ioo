// Products Data
const products = [
    {
        id: 1,
        name: 'Sony Playstation 4',
        description: 'Description of product 1',
        image: 'product1.png',
        price: 10.0
    },
    {
        id: 2,
        name: 'Sony Playstation 5',
        description: 'Description of product 2',
        image: 'product2.png',
        price: 20.0
    },
    {
        id: 3,
        name: 'Dualsense',
        description: 'Description of product 3',
        image: 'product3.png',
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
                <img src="${product.image}" alt="${product.name}">
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
        cart = cart.filter(item => item.id);
