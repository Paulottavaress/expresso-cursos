import React from 'react';
import HomePage from '../../pages/HomePage';
import Cart from '../../pages/Cart';
import Navbar from './Navbar';

const MainLayout = ({ route }) => {
  switch (route) {
    case 'cart':
      return (
        <div>
          <Navbar />
          <Cart />
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