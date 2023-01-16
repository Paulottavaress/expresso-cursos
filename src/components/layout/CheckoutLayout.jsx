import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Alert from '../common/Alert';
import AlertContext from '../../context/alert/alertContext';
import SocialMediaTab from './SocialMediaTab';
import NotAllowedDialog from '../../components/dialogs/NotAllowedDialog';

const CheckoutLayout = () => {
  const alertContext = useContext(AlertContext);
  const { 
    alerts,
    notAllowedDialog 
  } = alertContext;

  useEffect(() => window.history.replaceState({}, document.title, '/checkout/matricula'), []);

  return (
    <div id='checkout-layout'>
      <Navbar backgroundColor={'bg-secondary'} />
      <SocialMediaTab />
      <Outlet />
      <Footer />
      {(alerts && alerts.length > 0) && (
      <Alert
        key={alert.id}
        type={alert.type}
        text={alert.text}
      />
      )}
      {(notAllowedDialog) && (
      <NotAllowedDialog dialog={notAllowedDialog}/>
      )}
    </div>
  );
};

export default CheckoutLayout;