import React, { useContext } from 'react';
import Navbar from './Navbar';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout'; 
import HomePage from '../../pages/HomePage';
import MoppSellingPage from '../../pages/MoppSellingPage';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';

const MainLayout = ({ route }) => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

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
    case 'mopp':
      return (
        <div className='checkout-container'>
          <Navbar backgroundColor='' />
          <MoppSellingPage />
        </div>
      )
    default:
      return (
        <div className='bg-primary'>
          <Navbar />
          <HomePage />
          {(alerts && alerts.length > 0) && (
          <Alert
            key={alert.id}
            type={alert.type}
            text={alert.text}
          />
          )}
        </div>
      )
  }
}

export default MainLayout;