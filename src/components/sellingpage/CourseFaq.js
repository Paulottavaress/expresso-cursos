import React from 'react';
import Faq from 'react-faq-component';

const CourseFaq = ({faqData}) => {
  return (
    <div
      id='courseFaq'
      className='bg-primary'
    >
      <div className='container py-5 d-flex flex-column'>
        <p className='h1 font-weight-bold text-center mb-custom'>PERGUNTAS FREQUENTES</p>
        <Faq
          data={faqData}
          styles={faqData.styles}
        />
      </div>
    </div>
  )
}

export default CourseFaq;