// src/App.jsx
import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import ProductList from './ProductList';
import './App.css';

const App = () => (
  <CartProvider>
    <ProductList />
    <CartPage />
  </CartProvider>
);

export default App;
