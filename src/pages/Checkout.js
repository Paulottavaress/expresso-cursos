import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import CheckoutContext from '../context/checkout/checkoutContext';
import Registration from '../components/checkout/Registration';
import MercadoPagoCreditCardForm from '../components/checkout/MercadoPagoCreditCardForm';
import Review from '../components/checkout/Review';

const Checkout = () => {
  const checkoutContext = useContext(CheckoutContext);
  const {
    currentPage,
    changePage
  } = checkoutContext;

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('');

  const onChange = e => {
    setPaymentMethod(e.target.value)
  };

  const nextPage = (() => {
    changePage(currentPage + 1);
  });

  const previousPage = (() => {
    (currentPage === 1) 
      ? navigate('/cart')
      : changePage(currentPage - 1);
  });

  return (
    <div 
      id="checkout" 
      className='container'
    >
      <h1 className='text-center font-weight-bold text-secondary py-3'>
        { currentPage === 1 && 'Dados para a matrícula' }
        { currentPage === 2 && 'Dados para pagamento' }
        { currentPage === 3 && 'Revise a sua compra' }
      </h1>
      { (currentPage === 1 ) &&
        <Registration />
      }
      { (currentPage === 2) && (
      <div className='form-payment-info bg-secondary p-3'>
        <div
          className="payment-method"
          onChange={onChange}
        >
          <div className="form-radio">
            <input
              type="radio"
              value="PIX"
              name="paymentMethod"
              required
            />
            <label htmlFor="pix">PIX</label>
          </div>
          <div className="form-radio">              
            <input
              type="radio"
              value="Bank slip"
              name="paymentMethod"
              required
            />
            <label htmlFor="bank-slip">Boleto bancário</label>
          </div>
          <div className="form-radio">
            <input
              type="radio"
              value="Credit card"
              name="paymentMethod"
              required
            />
            <label htmlFor="credit-card">Cartão de crédito</label>
          </div>
        </div>
        { (paymentMethod === 'Credit card') && (
        <div className="credit-card-method">
          <MercadoPagoCreditCardForm />
        </div>
        )}
      </div>
      )}
      { (currentPage === 3 ) &&
        <Review />
      }
      <div className='btn-area d-flex align-items-center bg-secondary my-3 p-3'>
        <div className='btn-group d-flex'>
          <button
            id="form-previous-page"
            type="button"
            className="contact-btn btn btn-remove d-flex align-items-center"
            onClick={previousPage}
          >
            Voltar
          </button>
          <button
            id="form-next-page"
            type="button"
            className="btn btn-success text-white"
            onClick={nextPage}
          >
            { currentPage === 1 && 'Ir para o pagamento' }
            { currentPage === 2 && 'Revisar compra' }
            { currentPage === 3 && 'Finalizar compra' }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout;