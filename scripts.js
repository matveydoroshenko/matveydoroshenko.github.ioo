import React, { useState } from "react";
import ReactDOM from "react-dom";

// Initial product data
const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: "https://via.placeholder.com/150",
  },
];

// App component
const App = () => {

  // Create state variables
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    // Check if item already exists in cart
    const foundItem = cartItems.find(item => item.id === product.id);
    if (foundItem) {
      // Increase quantity of existing item
      const updatedCart = cartItems.map(item => item.id === foundItem.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCartItems(updatedCart);
    } else {
      // Add new item to cart
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  // Update cart item function
  const updateCartItem = (id, quantity) => {
    const updatedCart = cartItems.map(item => item.id === id ? { ...item, quantity: quantity } : item);
    setCartItems(updatedCart);
  };

  // Remove cart item function
  const removeCartItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate total price of items in cart
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <input type="number" min="1" value={item.quantity} onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))} />
            <button onClick={() => removeCartItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <h2>Total: ${total}</h2>
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));
