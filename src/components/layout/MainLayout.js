import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import HomePage from '../../pages/HomePage';
import ManagementHome from '../../pages/management/ManagementHome';
import Footer from './Footer';
import Cart from '../../pages/Cart';
import Checkout from '../../pages/Checkout'; 
import MoppSellingPage from '../../pages/MoppSellingPage';
import TransporteColetivoSellingPage from '../../pages/TransporteColetivoSellingPage';
import TransporteEscolarSellingPage from '../../pages/TransporteEscolarSellingPage';
import TransporteCargaIndivisivelSellingPage from '../../pages/TransporteCargaIndivisivelSellingPage';
import VeiculosDeEmergenciaSellingPage from '../../pages/VeiculosDeEmergenciaSellingPage';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';
import WhatsAppWindow from '../common/WhatsAppWindow';
import WhatsAppModal from '../common/WhatsAppModal';
import BuyBtnArea from '../sellingpage/BuyBtnArea';
import SocialMediaTab from './SocialMediaTab';
import NotAllowedDialog from '../dialogs/NotAllowedDialog';

const MainLayout = ({ route }) => {
  const alertContext = useContext(AlertContext);
  const { 
    alerts,
    notAllowedDialog 
  } = alertContext;

  const [showWindow, setShowWindow] = useState(false);
  const [wppModal, setShowWppModal] = useState(false);
  const [wppMessage, setWppMessage] = useState('');

  const switchWindow = () => {
    if (window.innerWidth >= 768) {
      setShowWindow((prevShowWindow) => (!prevShowWindow));
    } else {
      switchWppModal();
    }
  };

  const switchWppModal = () => setShowWppModal((prevShowWppModal) => (!prevShowWppModal));

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
    <div
      id='main-layout'
      className={(route === 'cart') ? 'cart-container' : 'checkout-container'}
    >
      {(!route.startsWith('management')) && (
        <Navbar backgroundColor={(route === 'cart' || route === 'checkout') ? 'bg-secondary' : ''} />
      )}
      {(route === 'homepage') && (
      <HomePage />
      )} {(route.startsWith('management')) && (
      <ManagementHome route={route} />
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
      )} {(route === 'transporte-carga-indivisivel-formacao') && (
      <TransporteCargaIndivisivelSellingPage type='formacao' />
      )} {(route === 'transporte-carga-indivisivel-atualizacao') && (
      <TransporteCargaIndivisivelSellingPage type='atualizacao' />
      )} {(route === 'veiculos-emergencia-formacao') && (
      <VeiculosDeEmergenciaSellingPage type='formacao' />
      )} {(route === 'veiculos-emergencia-atualizacao') && (
      <VeiculosDeEmergenciaSellingPage type='atualizacao' />
      )}
      {(!route.startsWith('management')) && (
        <SocialMediaTab />
      )}
      {((route === 'homepage' || route === 'cart') && (
      <WhatsAppWindow
        wppMsg={wppMessage}
        showWindow={showWindow}
        switchWindow={switchWindow}
      />
      ))}
      {(wppModal) && (<WhatsAppModal
        wppMsg={wppMessage}
        showWindow={showWindow}
        switchWppModal={switchWppModal} 
      />)}
      {((route !== 'homepage' && route !== 'cart' && route !== 'checkout' && !route.startsWith('management') && !wppModal) && (
        <BuyBtnArea switchWppModal={switchWppModal} />
      ))}
      {(alerts && alerts.length > 0) && (
        <Alert
          key={alert.id}
          type={alert.type}
          text={alert.text}
        />
        )}
      {(route === 'homepage' || route === 'cart' || route === 'checkout') && (
        <Footer route={route} />
      )}
    </div>
  );
}

MainLayout.propTypes = {
  route: PropTypes.string.isRequired
}

export default MainLayout;