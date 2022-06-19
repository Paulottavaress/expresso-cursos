import React from 'react';

const CourseCertification = () => {

  return (
    <div className='bg-secondary'>
      <div className='container py-5'>
        <p className='h1 text-center font-weight-bold mb-custom'>CERTIFICADO DE CONCLUSÃO DO CURSO</p>
        <div
          className='d-flex justify-content-center mx-auto'
          style={{ maxWidth: '600px' }}
        >
          <img
            src='/assets/images/certifications/inove-certification-1.png'
            alt='Imagem do certificado de conclusão do curso'
          />
        </div>
      </div>
    </div>
  )
};

export default CourseCertification;