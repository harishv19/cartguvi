// src/ProductList.jsx
import React from 'react';
import { useCart } from './CartContext';
import products from './products.json';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.products.map(product => (
        <div className="product-item" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
          <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
