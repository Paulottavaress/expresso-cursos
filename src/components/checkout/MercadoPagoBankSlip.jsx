import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutContext from '../../context/checkout/checkoutContext';
import FormatPhone from '../../utils/FormatPhone';

const MercadoPagoBankSlip = () => {
  const navigate = useNavigate();

  const checkoutContext = useContext(CheckoutContext);
  const { registrationInfo } = checkoutContext;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id='mercado-pago-bank-slip'>
      <div className='d-flex flex-column align-items-center justify-content-center bg-secondary p-3 my-3 rounded-3'>
        <p className='h4 mb-0 text-light mb-5'>Caso precise pagar por boleto bancário, favor entrar em contato pelo número ou e-mail disponibilizados abaixo. Já registramos os seus dados preenchidos no formulário e emitiremos o boleto para pagamento imediatamente.</p>
        <h4>Número: <span className='text-primary'>{FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}</span></h4>
        <h4 className='mb-5'>E-mail: <span className='text-primary'>{process.env.REACT_APP_EMAIL_ADDRESS}</span></h4>
        <h4>Horário de funcionamento:</h4>
        <h4>De segunda a sexta: <span className='text-primary'>das 08:00 às 20:00</span></h4>
        <h4>Aos sábados: <span className='text-primary'>das 08:00 às 12:00</span></h4>
      </div>
      <div className='btn-area d-flex align-items-center bg-secondary my-3 p-3'>
        <div className='btn-group d-flex'>
          <button
            className='form-previous-page contact-btn btn btn-remove d-flex align-items-center'
            type='button'
            disabled={isLoading}
            onClick={() => navigate('/checkout/matricula')}
          >
            {isLoading ? (
            <span
              className='spinner-border text-light'
              role='status' 
            />
            ) : (
            'Voltar'
            )}
          </button>
          {/* <button
            id='pix-finish-payment'
            className='btn btn-success text-white'
            type='button'
            disabled={isLoading}
            onClick={() => navigate('/checkout/confirmacao-de-compra');}
          >
            {isLoading ? (
            <span
              className='spinner-border text-light'
              role='status'
            />
            ) : (
              'Finalizar compra'
            )}
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default MercadoPagoBankSlip;