import React from 'react';
import PropTypes from 'prop-types';

const BuyBtnArea = ({ switchWppModal }) => {
  const scrollToPayment = () => {
    window.scrollTo(0, document.getElementById('selling-page-layout').scrollHeight);
  };

  return (
    <div
      id='buy-btn-area'
      className='bg-mark fixed-bottom'
    >
      <div className='container d-flex justify-content-center align-items-center py-3'>
        <div className='row gx-1 w-100'>
          <div className='d-flex justify-content-center col-6'>
            <button
              type='button'
              className='btn btn-block btn-success text-light font-weight-bold'
              onClick={() => scrollToPayment()}
            >
              Compre agora!
            </button>
          </div>
          <div className='d-flex justify-content-center  col-6'>
            <button
              type='button'
              className='d-flex align-items-center justify-content-center btn btn-block btn-remove text-light font-weight-bold'
              onClick={() => switchWppModal()}
            >
              <img
                src='/assets/images/common/wpp-transparent.png'
                alt='ícone do whatsapp'
                className='mr'
                style={{ maxWidth: '30px' }}
              />
                Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

BuyBtnArea.propTypes = {
  switchWppModal: PropTypes.func.isRequired
};

export default BuyBtnArea;