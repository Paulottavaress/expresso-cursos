import { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';
import PropTypes from 'prop-types';

const WhatsAppModal = ({
  switchWppModal,
  btnText,
  textSize,
  wppMsg,
  phone,
}) => {
  const cartContext = useContext(CartContext);
  const { availableCourses } = cartContext;

  const contact = () => {
    const isPixelLive = document.querySelector('#g-ads-pixel');

    if (!isPixelLive) {
      const script = document.createElement('script');
      document.createElement('script');
      script.setAttribute('id', 'g-ads-pixel');
      script.type = 'text/javascript';
      script.text = "gtag('event', 'conversion', {'send_to': 'AW-355317261/cDn2CKTL3dADEI3stqkB','value': 350.0,'currency': 'BRL','transaction_id': ''});";
      document.head.appendChild(script);
    };

    window.open('https://api.whatsapp.com/send?phone=' + phone + '&text=' + wppMsg, '_blank');
  };

  return (
    <div
      id='wpp-modal'
      className='d-flex justify-content-center align-items-center position-fixed w-100 h-100'
      style={{
        zIndex: 1,
        left: 0,
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}
    >
      <div
        id='wpp-modal-overlay'
        className='w-100 h-100 position-fixed'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
        onClick={() => switchWppModal()}
      />
      <div
        id='wpp-modal-content'
        className='d-flex flex-column bg-light rounded-3 w-75 p-3'
        style={{
          zIndex: 1,
          maxWidth: '400px'
        }}
      >
        <div className='d-flex align-items-center'>
          <p className='text-center m-0 font-weight-bold flex flex-grow-1 h2'>Fale com o Mateus!</p>
          <i
            className='fa fa-window-close text-danger cursor-pointer align-self-start'
            onClick={() => switchWppModal()}
          />
        </div>
        <div className='flex-grow-1 d-flex align-items-center justify-content-center img-container p-2'>
          <img
            className='rounded-circle'
            src='/assets/images/common/mateus-photo.jpeg'
            alt='Foto do vendedor Mateus' 
          />
        </div>
        <div
          className='contact-btn btn btn-block btn-remove d-flex justify-content-center align-items-center m-auto'
          onClick={() => contact()}
        >
          <div
            className='img-container'
            style={{ maxWidth: '50px' }}
          >
            <img
              src='/assets/images/common/wpp-transparent.png'
              alt='ícone do whatsapp' 
            />
          </div>
          <p className={'m-0 text-light font-weight-bold flex-grow-1 ' + textSize}>{ btnText }</p>
        </div>
      </div>
    </div>
  );
}

WhatsAppModal.propTypes = {
  btnText: PropTypes.string,
  textSize: PropTypes.string,
  wppMsg: PropTypes.string.isRequired,
  phone: PropTypes.string,
  switchWppModal: PropTypes.func.isRequired
}

WhatsAppModal.defaultProps = {
  btnText: 'Chamar agora!',
  textSize: 'h4',
  wppMsg: 'Tenho uma dúvida. Pode me ajudar?',
  phone: process.env.REACT_APP_CONTACT_NUMBER_MATEUS
}

export default WhatsAppModal;