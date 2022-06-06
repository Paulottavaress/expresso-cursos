import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout'; 
import HomePage from '../../pages/HomePage';
import MoppSellingPage from '../../pages/MoppSellingPage';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';
import WhatsAppWindow from '../common/WhatsAppWindow';

const MainLayout = ({ route }) => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  const [showWindow, setShowWindow] = useState(false);

  const switchWindow = () => setShowWindow((prevShowWindow) => (!prevShowWindow));

  switch (route) {
    case 'cart':
      return (
        <div className='cart-container'>
          <Navbar backgroundColor='bg-secondary' />
          <Cart />
          <WhatsAppWindow
            wppMsg='Oi! Gostaria de tirar uma dúvida referente ao pagamento. Pode me ajudar?'
            showWindow={showWindow}
            switchWindow={switchWindow}
          />
          {(alerts && alerts.length > 0) && (
            <Alert
              key={alert.id}
              type={alert.type}
              text={alert.text}
            />
          )}
        </div>
      )
    case 'checkout':
      return (
        <div className='checkout-container'>
          <Navbar backgroundColor='bg-secondary' />
          <Checkout />
          {(alerts && alerts.length > 0) && (
            <Alert
              key={alert.id}
              type={alert.type}
              text={alert.text}
            />
          )}
        </div>
      )
    case 'mopp-formacao':
      return (
        <div className='checkout-container'>
          <Navbar backgroundColor='' />
          <MoppSellingPage type='formacao' />
          <WhatsAppWindow
            wppMsg='Oi! Gostaria de tirar uma dúvida referente ao curso do Mopp. Pode me ajudar?'
            showWindow={showWindow}
            switchWindow={switchWindow}
          />
          {(alerts && alerts.length > 0) && (
            <Alert
              key={alert.id}
              type={alert.type}
              text={alert.text}
            />
          )}
        </div>
      )
    case 'mopp-atualizacao':
      return (
        <div className='checkout-container'>
          <Navbar backgroundColor='' />
          <MoppSellingPage type='atualizacao' />
          <WhatsAppWindow
            wppMsg='Oi! Gostaria de tirar uma dúvida referente ao curso do Mopp. Pode me ajudar?'
            showWindow={showWindow}
            switchWindow={switchWindow}
          />
          {(alerts && alerts.length > 0) && (
            <Alert
              key={alert.id}
              type={alert.type}
              text={alert.text}
            />
          )}
        </div>
      )
    default:
      return (
        <div className='bg-primary'>
          <Navbar />
          <HomePage />
          <WhatsAppWindow
            wppMsg='Oi! Gostaria de tirar uma dúvida. Pode me ajudar?'
            showWindow={showWindow}
            switchWindow={switchWindow}
          />
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