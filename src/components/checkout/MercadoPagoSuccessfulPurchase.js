import React, { useContext, useEffect, useState } from 'react';
import FormatPhone from '../../utils/FormatPhone';
import CheckoutContext from '../../context/checkout/checkoutContext';

const MercadoPagoSuccessfulPurchase = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { paymentMethod } = checkoutContext;

  const [msg, setMsg] = useState('');

  useEffect(() => {
    switch(paymentMethod) {
      case 'Credit Card':
        setMsg('Sua compra foi confirmada. Entraremos em contato dentro das próximas horas para disponibilizar suas credencias de acesso ao(s) curso(s). Sinta-se à vontade para entrar em contato conosco a qualquer momento através ou e-mail disponibilizados abaixo.');
        break;
      case 'Bank Slip':
      case 'PIX':
        setMsg('Não se esqueça de nos enviar o comprovante de pagamento através do número ou e-mail disponibilizados abaixo. Assim que seu pagamento for confirmado vamos disponibilizar suas credencias de acesso ao(s) curso(s).');
        break;
      default:
        setMsg('');
    }
  }, [paymentMethod]);

  return (
    <div
      id='mercado-pago-successful-purchase'
      className='bg-primary'
    >
      <div className='bg-secondary d-flex justify-content-center align-items-center p-5'>
        <div className='d-flex flex-column text-light w-100'>
          <h4>{msg}</h4>
          <h4 className='text-primary'>Número: {FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}</h4>
          <h4 className='text-primary mb-5'>E-mail: {process.env.REACT_APP_EMAIL_ADDRESS}</h4>
          <h4>Horário de funcionamento:</h4>
          <h4>De segunda a sexta: <span className='text-primary'>das 08:00 às 20:00</span></h4>
          <h4>Aos sábados: <span className='text-primary'>das 08:00 às 12:00</span></h4>
        </div>
      </div>
    </div>
  )
};

export default MercadoPagoSuccessfulPurchase;