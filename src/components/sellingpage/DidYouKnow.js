import React from 'react';

const DidYouKnow = ({courseName}) => {
  return (
    <div
      id='courseFaq'
      className='bg-secondary'
    >
      <div className='container py-5 d-flex flex-column'>
        <p className='h1 font-weight-bold text-center'>Você sabia?</p>
        <p className='h4 font-weight-bold text-center mb-0'>Sem o curso {courseName} em dia você pode ser autuado com multas que chegam a R$2.000,00?</p>
      </div>
    </div>
  )
};

export default DidYouKnow;