import React from 'react';
import FormatPhone from '../../utils/FormatPhone';

const MercadoPagoSuccessfulPurchase = () => {
  return (
    <div
      id='mercado-pago-successful-purchase'
      className='bg-primary'
    >
      <div className='bg-secondary d-flex justify-content-center align-items-center p-3'>
        <div className='d-flex flex-column text-light'>  
          <h4 className='mb-4'>Sua compra foi confirmada. Entraremos em contato dentro das próximas horas para disponibilizar suas credencias de acesso ao curso. Sinta-se à vontade para entrar em contato conosco a qualquer momento pelo número: <span className='text-primary'>{FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}</span></h4>
          <h4>Horário de funcionamento:</h4>
          <h4>De segunda a sexta: <span className='text-primary'>das 08:00 às 20:00</span></h4>
          <h4>Aos sábados: <span className='text-primary'>das 08:00 às 12:00</span></h4>
        </div>
      </div>
    </div>
  )
};

export default MercadoPagoSuccessfulPurchase;