import React, { useContext } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import CartContext from '../../context/cart/cartContext';

const MercadoPagoCreditCardForm = (returnPage) => {
  const cartContext = useContext(CartContext);
  const { subtotal } = cartContext;

  const mercadopago = useMercadopago.v2(
    process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY,
    { locale: 'pt-BR'}
  );

  const onSubmit = e => {
    e.preventDefault();

      const cardForm = mercadopago.cardForm({
        amount: subtotal.toString(),
        autoMount: true,
        form: {
          id: "form-checkout",
          cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
          },
          cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
          },
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
          },
          expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "Data de vencimento (MM/YYYY)",
          },
          securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
          },
          installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
          },
          identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
          },
          identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
          },
          issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
          },
        },
        callbacks: {
          onFormMounted: error => {
            if (error) return console.warn("Form Mounted handling error: ", error);
          },
          onSubmit: event => {
            event.preventDefault();

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_MERCADO_PAGO_PAYMENT_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: Number(amount),
                installments: Number(installments),
                description: "Descrição do produto",
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            });
          },
          onFetching: (resource) => {
            console.log("Fetching resource: ", resource);
          }
        },
      });
  }

  return (
    <form
      id="form-checkout"
      onSubmit={onSubmit}
    >
      <div className='form-group'>
        <div className='form-field'>
          <label
            htmlFor="form-checkout__identificationNumber"
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
            htmlFor="form-checkout__identificationNumber"
            className='font-weight-bold'
          >
            Data de expiração
            <span className='text-danger'> *</span>
          </label>
          <input
            type="text"
            name="expirationDate"
            id="form-checkout__expirationDate" 
          />
        </div>
      </div>
      <div className='form-group'>
        <div className='form-field'>
          <label
            htmlFor="form-checkout__identificationNumber"
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
          htmlFor="form-checkout__identificationNumber"
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
            htmlFor="form-checkout__identificationNumber"
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
            htmlFor="form-checkout__identificationNumber"
            className='font-weight-bold'
          >
            Banco emissor
            <span className='text-danger'> *</span>
          </label>
          <select
            name="issuer"
            id="form-checkout__issuer">
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
            htmlFor="form-checkout__identificationNumber"
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
    </form>
  )
}

export default MercadoPagoCreditCardForm;