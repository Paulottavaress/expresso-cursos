import React, { useState, useContext, useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import CartContext from '../context/cart/cartContext';
import CheckoutContext from '../context/checkout/checkoutContext';
import AlertContext from '../context/alert/alertContext';
import Registration from '../components/checkout/Registration';
import MercadoPagoCreditCardForm from '../components/checkout/MercadoPagoCreditCardForm';
import { useNavigate } from 'react-router-dom';
// import Review from '../components/checkout/Review';

const Checkout = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const cartContext = useContext(CartContext);
  const { subtotal } = cartContext;

  const checkoutContext = useContext(CheckoutContext);
  const {
    currentPage,
    changePage
  } = checkoutContext;

  const navigate = useNavigate();

  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isCardInstatiated, setCardInstance] = useState(false);

  useEffect(() => {
    if (isError) {
      setAlert({
        type: 'danger',
        text: errorMsg,
        url: `https://api.whatsapp.com/send?phone=${process.env.REACT_APP_CONTACT_NUMBER_MATEUS}&text=Oi! Estou com problemas para realizar o pagamento da compra de um curso. Pode me ajudar?`
      });
    }
  }, [isError]);

  const onChange = e => {
    setPaymentMethod(e.target.value)
  };

  const nextPage = (() => {
    if (!isCardInstatiated) {
      loadCard();
      setCardInstance(true);
    }

    changePage(2);
  });

  const mercadopago = useMercadopago.v2(
    process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY,
    { locale: 'pt-BR'}
  );

  const loadCard = (() => {
    setError(false);

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
            paymentMethodId,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();
          
          // validate fields

          fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_MERCADO_PAGO_PAYMENT_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              paymentMethodId,
              transactionAmount: Number(amount),
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
          }).then(response => {
            console.log('response', response);
            return response.json();
          }).then(result => {
            console.log('result', result);
            if(!result.hasOwnProperty('error_message')) {
              setError(false);
              setAlert({
                type: 'success',
                text: `Obrigado por comprar com a gente! Sua compra foi confirmada. Entraremos em contato dentro das próximas horas para disponibilizar suas credencias de acesso ao curso. Sinta-se à vontade para entrar em contato conosco a qualquer momento pelo número ${process.env.REACT_APP_CONTACT_NUMBER_MATEUS}`
              });
              // Remove items that were bought from the cart
              navigate('/cart');
            } else {
              setErrorMsg('Ocorreu um erro ao tentar realizar o pagamento. Por favor, confira seus dados e tente novamente. Se o erro persistir, clique aqui para entrar em contato conosco pelo Whatsapp')
              setError(true);
            };
        }).catch(error => {
            alert("Unexpected error\n"+JSON.stringify(error));
        });
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource);
        }
      },
    });
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
        <Registration nextPage={nextPage} />
      }
      <div className={(currentPage === 2) ? 'd-block form-payment-info' : 'd-none'}>
        <div
          className="payment-method bg-secondary p-3 my-3"
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
        <div className={(paymentMethod === 'Credit card') ? 'credit-card-method' : 'd-none'}>
          <MercadoPagoCreditCardForm />
        </div>
        {paymentMethod === '' && (
        <div className='btn-area d-flex align-items-center bg-secondary my-3 p-3'>
          <div className='btn-group d-flex'>
            <button
              className="form-previous-page contact-btn btn btn-remove d-flex align-items-center"
              type="button"
              onClick={() => changePage(1)}
            >
              Voltar
            </button>
          </div>
        </div>
        )}
      </div>
      {/* { (currentPage === 3 ) &&
        <Review />
      } */}
    </div>
  )
}

export default Checkout;