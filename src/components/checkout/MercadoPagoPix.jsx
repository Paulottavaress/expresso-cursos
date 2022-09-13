import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import CheckoutContext from '../../context/checkout/checkoutContext';
import { parseType } from '../../utils/ParseType';
import AlertContext from '../../context/alert/alertContext';
import FormatPhone from '../../utils/FormatPhone';
import DockedAlert from '../common/DockedAlert';

const MercadoPagoPix = () => {
  const navigate = useNavigate();

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const cartContext = useContext(CartContext);
  const {
    courses,
    subtotal
  } = cartContext;

  const checkoutContext = useContext(CheckoutContext);
  const { registrationInfo } = checkoutContext;

  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [description, setDescription] = useState('');
  const [qrCodeBase64, setQrCodeBase64] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [sellerName, setSellerName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    const splittedName = registrationInfo.fullName.split(' ');

    const paymentData = {
      ...registrationInfo,
      subtotal: subtotal * process.env.REACT_APP_PIX_DISCOUNT,
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
      return response.json();
    }).then(result => {
      setError(false);

      setQrCodeBase64(result.point_of_interaction.transaction_data.qr_code_base64);
      setQrCode(result.point_of_interaction.transaction_data.qr_code);
      setSellerName(result.point_of_interaction.transaction_data.bank_info.collector.account_holder_name);
    }).catch(error => {
      setErrorMsg(`Ocorreu um erro ao tentar realizar o pagamento. Por favor, confira seus dados e tente novamente. Se o erro persistir, entre em contato conosco pelo número ${FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS)}`)
      setError(true);
    }).finally(() => {
      setIsLoading(false);
    });
  }

  const copyHash = () => {
    const copyText = document.getElementById('copy-hash');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    setAlert({
      type: 'success',
      text: 'O hash foi copiado para sua área de transferência!',
      time: 5000
    });
  }

  const copyKey = () => {
    const copyText = document.getElementById('copy-key');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);

    setAlert({
      type: 'success',
      text: 'A chave PIX foi copiada para sua área de transferência!',
      time: 5000
    });
  }

  return (
    <div id='mercado-pago-pix'>
      { (qrCodeBase64) && (
      <div className='bg-secondary p-3 my-3 rounded-3'>
        <div className='seller-info d-flex flex-column w-100'>
          <p className='h3 mb-custom mx-auto text-center'>Dados da conta de recebimento</p>
          <div className='d-flex flex-column align-items-center'>
            <p className='h6'>{sellerName}</p>
            <p className='h6'>{process.env.REACT_APP_CNPJ}</p>
            <p className='h6'>MERCADO PAGO IP LTDA.</p>
            <p className='h3 text-success'>{(subtotal * process.env.REACT_APP_PIX_DISCOUNT).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
        </div>
      </div>
      )}
      <div className='d-flex flex-column align-items-center justify-content-center bg-secondary p-3 my-3 rounded-3'>
        { !qrCodeBase64 ? (
        <button
          type='button'
          className='btn btn-success text-white'
          style={{ display: qrCodeBase64 ? 'none' : 'block' }}
          disabled={isLoading}
          onClick={() => generateQrCode()}
        >
          {isLoading ? (
          <span
            className='spinner-border text-light'
            role='status' 
          />
          ) : (
          'Mostrar chave PIX'
          )}
        </button>
        ) : (
          <div className='d-flex flex-column justify-content-center align-items-center w-100'>
            <DockedAlert
              type='warning'
              text={'Favor enviar comprovante de pagamento para ' + FormatPhone(process.env.REACT_APP_CONTACT_NUMBER_MATEUS) + ' ou para ' + process.env.REACT_APP_EMAIL_ADDRESS + ' para agilizar seu atendimento'}
            />
            <div
              className='img-container w-100 my-3'
              style={{ maxWidth: '300px' }}
            >
              <img
                alt='QR code gerado para pagamento via PIX'
                src={`data:image/jpeg;base64,${qrCodeBase64}`}
                className='w-100 h-auto'
              />
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
              <label
                className='h4 text-center'
                htmlFor='copy-hash'
              >Copiar hash PIX para realizar pagamento:</label>
              <div className='d-flex justify-content-center align-items-center w-100 mb-3'>
                <i
                  className='fas fa-copy fa-2xl pr-1'
                  role='button'
                  onClick={() => copyHash()}
                />
                <input
                  type='text'
                  className='m-0'
                  id='copy-hash'
                  value={qrCode}
                  readOnly 
                />
              </div>
              <label
                className='h4 text-center'
                htmlFor='copy-key'
              >Copiar chave PIX (CNPJ):</label>
              <div className='d-flex justify-content-center align-items-center w-100'>
                <i
                  className='fas fa-copy fa-2xl pr-1'
                  role='button'
                  onClick={() => copyKey()}
                />
                <input
                  type='text'
                  className='m-0'
                  id='copy-key'
                  value={process.env.REACT_APP_CNPJ}
                  readOnly 
                />
              </div>
            </div>
          </div>
        )}
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
          { qrCodeBase64 && (
          <button
            id='pix-finish-payment'
            className='btn btn-success text-white'
            type='button'
            disabled={isLoading}
            onClick={() => navigate('/checkout/confirmacao-de-compra') && navigate('/checkout/confirmacao-de-compra')}
          >
            {isLoading ? (
            <span
              className='spinner-border text-light'
              role='status'
            />
            ) : (
              'Finalizar compra'
            )}
          </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MercadoPagoPix;