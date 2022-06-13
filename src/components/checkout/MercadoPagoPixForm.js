import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/cart/cartContext';
import CheckoutContext from '../../context/checkout/checkoutContext';
import { parseType } from '../../utils/ParseType';
import AlertContext from '../../context/alert/alertContext';
import FormatPhone from '../../utils/FormatPhone';

const MercadoPagoPixForm = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const cartContext = useContext(CartContext);
  const {
    courses,
    subtotal,
    removeFromCart
  } = cartContext;

  const checkoutContext = useContext(CheckoutContext);
  const { 
    registrationInfo,
    currentPage,
    changePage
  } = checkoutContext;

  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [description, setDescription] = useState('');
  const [qrCodeBase64, setQrCodeBase64] = useState(null);
  const [qrCode, setQrCode] = useState(null);

  let isLoading = false;

  useEffect(() => {
    if (isError) {
      setAlert({
        type: 'danger',
        text: errorMsg,
        time: 10000
      });
    }
  }, [isError]);

  useEffect(() => {
    let description = '';

    courses.forEach((course, i) => {
      description += `${course.name} - ${parseType(course.type)}`;
      if (i !== (courses.length - 1)) description += ' / ';
    });

    setDescription(description);
  }, [courses]);

  const generateQrCode = () => {
    setError(false);
    isLoading = true;
    const splittedName = registrationInfo.fullName.split(' ');

    const paymentData = {
      ...registrationInfo,
      subtotal,
      description,
      splittedName
    };

    fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_MERCADO_PAGO_PIX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    }).then(response => {
      isLoading = false;
      return response.json();
    }).then(result => {
      setError(false);

      console.log('result', result);

      setQrCodeBase64(result.transaction_data.qr_code_base64);
      setQrCode(result.transaction_data.qr_code);

      courses.forEach((course) => {
        removeFromCart(course.id);
      });
      isLoading = false;
    }).catch(error => {
      console.log('error', error);
      isLoading = false;
      setErrorMsg(`Ocorreu um erro ao tentar realizar o pagamento. Por favor, confira seus dados e tente novamente. Se o erro persistir, entre em contato conosco pelo número ${FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}`)
      setError(true);
    });
  }

  return (
    <div
      id='mercado-pago-pix-form'
    >
      <div className='bg-secondary p-3 my-3 rounded-3'>
        <button type='button' onClick={() => generateQrCode()}>Gerar QR Code</button>
        { (qrCodeBase64) && (
          <div>
            <div className='img-container' style={{  width: '500px', height: '500px' }}>
              <img
                alt='QR code gerado para pagamento via PIX'
                src={`data:image/jpeg;base64,${qrCodeBase64}`}
                className='w-100 h-auto'
              />
            </div>
            <label for="copiar">Copiar Hash:</label>
            <input type="text" id="copiar"  value={qrCode}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default MercadoPagoPixForm;