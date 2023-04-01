const productList = document.getElementById('productList');
const cartList = document.getElementById('cartList');
const checkoutBtn = document.getElementById('checkoutBtn');

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
]

const cart = [];

function addProductToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
        document.getElementById(productQuantity-${product.id}).textContent = existingProduct.quantity;
    } else {
        const newCartItem = { ...product, quantity: 1 };
        cart.push(newCartItem);

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML =
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p id="productQuantity-${product.id}">Quantity: 1</p>
        ;
        cartList.appendChild(cartItem);
    }
}

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product';
    productItem.innerHTML =
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button onclick="addProductToCart(${JSON.stringify(product).split('"').join(""")})">Add to Cart</button>
    ;
    productList.appendChild(productItem);
});

checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    window.location.reload();
});
