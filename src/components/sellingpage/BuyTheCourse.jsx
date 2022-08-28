import React from 'react';
import PropTypes from 'prop-types';
import BuyBtn from '../common/BuyBtn';

const BuyTheCourse = ({ courseInfo }) => {
  return (
    <div
      id='buy-the-course'
      className='bg-primary'
    >
      <div
        className='container pt-5'
        style={{ paddingBottom: '100px'}}
      >
        <div className="d-flex">
          <div className='img-container d-flex justify-content-center align-items-center'>
            <img src="/assets/images/certifications/7-days-warranty-protection.png" alt="selo de garantia de 100% de satisfação" />
          </div>
          <div className='d-flex flex-column content-container white-background-mark justify-content-around'>
            <div className='mb-5'>
              <p className='h1 font-weight-bold text-center m-0 text-danger'>Não perca mais tempo!</p>
              <p className='h3 text-center m-0 text-success'>Complete seu curso em apenas <span className='font-weight-bold'><u>{courseInfo.type === 'formacao' ? 5 : 3} DIAS!</u></span></p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mb-5'>
              <p className="h1 text-success font-weight-bold text-center m-0">{courseInfo.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
              <p className='h6 text-success text-center mb-0'>É apenas {(courseInfo.value / 365).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} por dia durante um ano</p>
              <BuyBtn
                courseId={courseInfo.id}
                text='Comprar agora!'
                margin='my-1'
              />
              <p className='h6 text-success text-center mb-0'>5x sem juros no cartão de crédito ou {(courseInfo.value * 0.95).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} à vista no PIX ou boleto bancário</p>
            </div>
            <div className='img-container w-100'>
              <img src="https://imgmp.mlstatic.com/org-img/MLB/MP/BANNERS/tipo2_575X40.jpg?v=1" alt="Mercado Pago - Meios de pagamento" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BuyTheCourse.propTypes = {
  courseInfo: PropTypes.object.isRequired
}

export default BuyTheCourse;