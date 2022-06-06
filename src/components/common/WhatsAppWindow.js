import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppWindow = ({
  btnText,
  textSize,
  wppMsg,
  phone,
  showWindow,
  switchWindow
}) => {
  return (
    <div
      className='position-fixed'
      style={{
        bottom: 0,
        right: 0,
        cursor: 'pointer' 
      }}
    >
      <div
        className={ showWindow ? 'd-none' : 'img-container p-2'}
        style={{ width: '100px' }}
      >
        <img
          src="/assets/images/common/wpp-transparent.png"
          alt="ícone do whatsapp"
          onClick={() => switchWindow()}
        />
      </div>
      <div
        className={ showWindow ? 'd-flex flex-column justify-content-centr wpp-window bg-light border border-dark p-2' : 'd-none'}
        style={{ width: '250px' }}
      >
        <div className="d-flex align-items-center">
          <p className='text-center m-0 font-weight-bold flex flex-grow-1'>Fale com o Mateus!</p>
          <i
            className='fa fa-window-close text-danger'
            onClick={() => switchWindow()}
          />
        </div>
        <div
          className='img-container p-2'
          style={{ width: '100%' }}
        >
          <img
            className='rounded-circle'
            src="/assets/images/common/mateus-photo.jpeg"
            alt="Foto do vendedor Mateus" 
          />
        </div>
        <a
          href={'https://api.whatsapp.com/send?phone=' + phone + '&text=' + wppMsg}
          target="_blank"
          rel="noreferrer"
          className="contact-btn btn btn-remove d-flex align-items-center m-auto"
        >
          <div
            className='img-container mr-1'
            style={{
              width: '45px',
              marginRight: '0.25rem'
            }}
          >
            <img src="/assets/images/common/wpp-transparent.png" alt="ícone do whatsapp" />
          </div>
          <p className={'m-0 text-light font-weight-bold ' + textSize}>{ btnText }</p>
        </a>
      </div>
    </div>
  )
}

WhatsAppWindow.propTypes = {
  btnText: PropTypes.string,
  textSize: PropTypes.string,
  wppMsg: PropTypes.string.isRequired,
  phone: PropTypes.string,
  showWindow: PropTypes.bool.isRequired,
  switchWindow: PropTypes.func.isRequired
}

WhatsAppWindow.defaultProps = {
  btnText: 'Chamar agora!',
  textSize: 'h6',
  wppMsg: 'Oi! Pode me ajudar?',
  phone: process.env.REACT_APP_CONTACT_NUMBER_MATEUS
}

export default WhatsAppWindow;