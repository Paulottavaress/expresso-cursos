import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';
import WhatsAppModal from '../common/WhatsAppModal';
import WhatsAppWindow from '../common/WhatsAppWindow';
import SocialMediaTab from './SocialMediaTab';
import CartContext from '../../context/cart/cartContext';

const MainLayout = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  const cartContext = useContext(CartContext);

  let { setAvailableCourses } = cartContext;

  const [showWindow, setShowWindow] = useState(false);
  const [wppModal, setShowWppModal] = useState(false);
  const [wppMessage, setWppMessage] = useState('');

  const switchWindow = () => (window.innerWidth >= 768) 
    ? setShowWindow(prevShowWindow => !prevShowWindow)
    : switchWppModal();

  const switchWppModal = () => setShowWppModal(prevShowWppModal => !prevShowWppModal);

  const location = useLocation();

  useEffect(() => {
    setAvailableCourses();
   },[]);

  useEffect(() => {
    if (location) {
      switch(location.pathname) {
        case '/':
          setWppMessage('Gostaria de tirar uma dúvida. Pode me ajudar?');
          break;
        case '/carrinho':
          setWppMessage('Gostaria de tirar uma dúvida referente ao carrinho de compras. Pode me ajudar?');
          break;
        default:
          break;
      }
    }
  }, [location]);

  return (
    <div
      id='main-layout'
      className={(location.pathname === '/carrinho') ? 'cart-container' : ''}
    >
      <Navbar backgroundColor={['/carrinho'].includes(location.pathname) ? 'bg-secondary' : ''} />
      <SocialMediaTab />
      <Outlet />
      {(wppModal) && (
      <WhatsAppModal
        wppMsg={wppMessage}
        showWindow={showWindow}
        switchWppModal={switchWppModal} 
      /> )} 
      <WhatsAppWindow
        wppMsg={wppMessage}
        showWindow={showWindow}
        switchWindow={switchWindow}
      />
      <Footer />
      {(alerts && alerts.length > 0) && (
      <Alert
        key={alert.id}
        type={alert.type}
        text={alert.text}
      />
      )}
    </div>
  );
};

export default MainLayout;