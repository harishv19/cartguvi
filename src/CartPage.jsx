// src/CartPage.jsx
import React from 'react';
import { useCart } from './CartContext';
import './CartPage.css';

const CartPage = () => {
  const { state, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {state.items.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.thumbnail} alt={item.title} />
          <div className="cart-details">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
          <div className="cart-quantity">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
          <div className="cart-price">${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}
      <div className="cart-summary">
        <div>SUBTOTAL: ${totalAmount.toFixed(2)}</div>
        <div>SHIPPING: FREE</div>
        <div>TOTAL: ${totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartPage;
