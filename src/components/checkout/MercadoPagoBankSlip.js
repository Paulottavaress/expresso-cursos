import React, { useState, useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';
import FormatPhone from '../../utils/FormatPhone';

const MercadoPagoBankSlip = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { 
    registrationInfo,
    changePage
  } = checkoutContext;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id='mercado-pago-bank-slip'>
      <div className='d-flex flex-column align-items-center justify-content-center bg-secondary p-3 my-3 rounded-3'>
        <p className='h4 mb-0 text-light mb-5'>Caso precise pagar por boleto bancário, favor nos enviar os dados que você acaba de preencher no formulário anterior para o número ou e-mail disponibilizados abaixo. Emitiremos o boleto para pagamento imediatamente.</p>
        <h4 className='text-primary'>Número: {FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}</h4>
          <h4 className='text-primary mb-5'>E-mail: {FormatPhone(process.env.REACT_APP_EMAIL_ADDRESS)}</h4>
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
            onClick={() => changePage(1)}
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
            onClick={() => changePage(4)}
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