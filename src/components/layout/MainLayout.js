import React from 'react';
import Navbar from './Navbar';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout'; 
import HomePage from '../../pages/HomePage';

const MainLayout = ({ route }) => {
  switch (route) {
    case 'cart':
      return (
        <div className='cart-container'>
          <Navbar backgroundColor='bg-secondary' />
          <Cart />
        </div>
      )
    case 'checkout':
      return (
        <div className='checkout-container'>
          <Navbar backgroundColor='bg-secondary' />
          <Checkout />
        </div>
      )
    default:
      return (
        <div>
          <Navbar />
          <HomePage />
        </div>
      )
  }
}

export default MainLayout;