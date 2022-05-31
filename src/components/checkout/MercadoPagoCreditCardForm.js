import React, { useContext } from 'react';
import CheckoutContext from '../../context/checkout/checkoutContext';

const MercadoPagoCreditCardForm = () => {
  const checkoutContext = useContext(CheckoutContext);
  const { changePage } = checkoutContext;

  const nextPage = (() => {
    changePage(3);
  });

  return (
    <form id="form-checkout">
      <div className='form-checkout-group bg-secondary p-3 my-3'>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__cardNumber"
              className='font-weight-bold'
            >
              Número do cartão de crédito
              <span className='text-danger'> *</span>
            <input
              type="text"
              name="cardNumber"
              id="form-checkout__cardNumber"
            />
            </label>
          </div>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__expirationDate"
              className='font-weight-bold'
            >
              Data de expiração
              <span className='text-danger'> *</span>
            </label>
            <input
              type="text"
              name="expirationDate"
              id="form-checkout__expirationDate"
              placeholder='MM/YYYY'
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__cardholderName"
              className='font-weight-bold'
            >
              Nome no cartão
              <span className='text-danger'> *</span>
            </label>
            <input
              type="text"
              name="cardholderName"
              id="form-checkout__cardholderName"
            />
          </div>
          <div className='form-field'>
          <label
            htmlFor="form-checkout__cardholderEmail"
            className='font-weight-bold'
          >
            Email do comprador
            <span className='text-danger'> *</span>
          </label>
          <input
            type="email"
            name="cardholderEmail"
            id="form-checkout__cardholderEmail"
          />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__securityCode"
              className='font-weight-bold'
            >
              Código de segurança
              <span className='text-danger'> *</span>
            </label>
            <input
              type="text"
              name="securityCode"
              id="form-checkout__securityCode" 
            />
          </div>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__issuer"
              className='font-weight-bold'
            >
              Banco emissor
            </label>
            <select
              name="issuer"
              id="form-checkout__issuer"
            >
            </select>
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__identificationType"
              className='font-weight-bold'
            >
              Tipo de documento
              <span className='text-danger'> *</span>
            </label>
            <select
              name="identificationType"
              id="form-checkout__identificationType">
            </select>
          </div>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__identificationNumber"
              className='font-weight-bold'
            >
              Número do documento de identificação
              <span className='text-danger'> *</span>
            </label>
            <input
              type="text"
              name="identificationNumber"
              id="form-checkout__identificationNumber"
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='form-field'>
            <label
              htmlFor="form-checkout__installments"
              className='font-weight-bold'
            >
              Parcelas
              <span className='text-danger'> *</span>
            </label>
            <select
              name="installments"
              id="form-checkout__installments">
            </select>
          </div>
          <div className='form-field'>
          </div>
        </div>
      </div>
      <div className='btn-area d-flex align-items-center bg-secondary my-3 p-3'>
        <div className='btn-group d-flex'>
          <button
            className="form-previous-page contact-btn btn btn-remove d-flex align-items-center"
            type="button"
            onClick={() => changePage(1)}
          >
            Voltar
          </button>
          <button
            id="form-checkout__submit"
            className="btn btn-success text-white"
            type="submit"
            onClick={nextPage}
          >
            Revisar compra
          </button>
        </div>
      </div>
    </form>
  )
}

export default MercadoPagoCreditCardForm;