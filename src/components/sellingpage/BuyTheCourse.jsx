import React from 'react';
import PropTypes from 'prop-types';
import BuyBtn from '../common/BuyBtn';
import { CurrentPromo } from '../../utils/Promotions';
import { ISOtoBRDate } from '../../utils/FormatDate';

const BuyTheCourse = ({ courseInfo }) => {
  const currentPromo = CurrentPromo();

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
              <p className='h3 text-center m-0 text-success'>Complete seu curso em apenas <span className='font-weight-bold'><u>{courseInfo[1].type === 'formacao' ? 5 : 3} DIAS!</u></span></p>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mb-5'>
              <p className='h1 font-weight-bold mb-0'>{currentPromo.title.toUpperCase()}</p>
              <p className='h4'>EXPRESSO CURSOS</p>
              <div className='d-flex align-items-center gap-3 mb-5'>
                <p className='h1 text-danger font-weight-bold text-center m-0 strike-through'>R$ 400,00</p>
                <i className='fa-solid fa-arrow-right'></i>
                <div className='position-relative'>
                  <p className='h1 text-success font-weight-bold text-center m-0'>{(courseInfo[1].value * process.env.REACT_APP_PIX_DISCOUNT).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                  <p className='m-0 position-absolute end-0'>à vista</p>
                </div>
              </div>
              <p className='h6 text-danger text-center mb-0'>Promoção válida para os primeiros <span className='font-weight-bold'>{ISOtoBRDate(currentPromo.amount)}</span> compradores até às <span className='font-weight-bold'>23:59</span> de <span className='font-weight-bold'>{ISOtoBRDate(currentPromo.endDt)}</span></p>
              <BuyBtn
                courseId={courseInfo[0]}
                text='Comprar agora!'
                margin='my-1'
              />
              <p className='h6 text-success text-center mb-0'>{courseInfo[1].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} de 5x sem juros no cartão de crédito ou {(courseInfo[1].value * process.env.REACT_APP_PIX_DISCOUNT).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} à vista no PIX ou boleto bancário</p>
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
  courseInfo: PropTypes.array.isRequired
}

export default BuyTheCourse;