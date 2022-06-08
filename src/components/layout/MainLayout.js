import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout'; 
import HomePage from '../../pages/HomePage';
import MoppSellingPage from '../../pages/MoppSellingPage';
import TransporteColetivoSellingPage from '../../pages/TransporteColetivoSellingPage';
import TransporteEscolarSellingPage from '../../pages/TransporteEscolarSellingPage';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';
import WhatsAppWindow from '../common/WhatsAppWindow';

const MainLayout = ({ route }) => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  const [showWindow, setShowWindow] = useState(false);
  const [wppMessage, setWppMessage] = useState('');

  const switchWindow = () => setShowWindow((prevShowWindow) => (!prevShowWindow));

  useEffect(() => {
    switch(route) {
      case 'homepage':
        setWppMessage('Oi! Gostaria de tirar uma dúvida. Pode me ajudar?');
        break;
      case 'cart':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao pagamento. Pode me ajudar?');
        break;
      case 'mopp-formacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso do Mopp formação. Pode me ajudar?');
        break;
      case 'mopp-atualizacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso do Mopp atualização. Pode me ajudar?');
        break;
      case 'transporte-coletivo-formacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso de Transporte de Coletivo de Passageiros formação. Pode me ajudar?');
        break;
      case 'transporte-coletivo-atualizacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso de Transporte de Coletivo de Passageiros atualização. Pode me ajudar?');
        break;
      case 'transporte-escolar-formacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso de Transporte Escolar formação. Pode me ajudar?');
        break;
      case 'transporte-escolar-atualizacao':
        setWppMessage('Oi! Gostaria de tirar uma dúvida referente ao curso de Transporte Escolar atualização. Pode me ajudar?');
        break;
      default:
        setWppMessage('');
    }
  }, [route]);

  return (
    <div className={(route === 'cart') ? 'cart-container' : 'checkout-container'}>
      <Navbar backgroundColor={(route === 'cart' || route === 'checkout') ? 'bg-secondary' : ''} />
      {(route === 'homepage') && (
      <HomePage />
      )} {(route === 'cart') && (
      <Cart />
      )} {(route === 'checkout') && (
      <Checkout />
      )} {(route === 'mopp-formacao') && (
      <MoppSellingPage type='formacao' />
      )} {(route === 'mopp-atualizacao') && (
      <MoppSellingPage type='atualizacao' />
      )} {(route === 'transporte-coletivo-formacao') && (
      <TransporteColetivoSellingPage type='formacao' />
      )} {(route === 'transporte-coletivo-atualizacao') && (
      <TransporteColetivoSellingPage type='atualizacao' />
      )} {(route === 'transporte-escolar-formacao') && (
      <TransporteEscolarSellingPage type='formacao' />
      )} {(route === 'transporte-escolar-atualizacao') && (
      <TransporteEscolarSellingPage type='atualizacao' />
      )}
      {(route !== 'checkout' && (
      <WhatsAppWindow
        wppMsg={wppMessage}
        showWindow={showWindow}
        switchWindow={switchWindow}
      />
      ))}
      {(alerts && alerts.length > 0) && (
      <Alert
        key={alert.id}
        type={alert.type}
        text={alert.text}
      />
      )}
    </div>
  );
}

export default MainLayout;