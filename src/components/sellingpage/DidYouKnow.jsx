import React from 'react';
import PropTypes from 'prop-types';

const DidYouKnow = ({courseName}) => {
  return (
    <div
      id='didYouKnow'
      className='bg-secondary'
    >
      <div className='container py-5 d-flex flex-column'>
        <p className='h1 font-weight-bold text-center'>Você sabia?</p>
        <p className='h4 font-weight-bold text-center mb-0'>Sem o curso {courseName} em dia você pode ser autuado com multas que chegam a R$2.000,00?</p>
      </div>
    </div>
  )
};

DidYouKnow.propTypes = {
  courseName: PropTypes.string.isRequired
}

export default DidYouKnow;