import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';
import BuyBtn from '../common/BuyBtn';

const Review = () => {
  const cartContext = useContext(CartContext);
  const {
    courses,
    subtotal
  } = cartContext;

  return (
    <div
      id="review-purchase"
      className="courses-group d-flex flex-column bg-secondary p-3"
    >
      {(courses && courses.length > 0) && courses.map(course => (
        <div
          className='course d-flex'
          key={course.position}
        >
          <div className='content-container'>
            <h3 className='text-light'>{course.name} - curso de {course.type.toLowerCase()}</h3>
            <h4 className='text-success'>{course.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
          </div>
        </div>
      ))}
      <div className='content-container'>
        <h3 className='m-0'>Total a ser pago</h3>
        <h4 className='text-success'>{subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
        </h4>
        <h3 className='m-0'>Método de pagamento</h3>
        <h3 className='m-0'>Parcelas</h3>
        <h3 className='m-0'>Número da CNH</h3>
        <h3 className='m-0'>Categoria da CNH</h3>
        <h3 className='m-0'>Data de vencimento da CNH</h3>
        <h3 className='m-0'>Telefone para contato</h3>
        <div>
          <input
            id="contact-wpp"
            type="checkbox" 
          />
          <label htmlFor="contact-wpp">Não me incomodo de ser chamado pelo WhatsApp em caso de necessidade</label>
        </div>
        <div>
          <input
            id="revision-complete"
            type="checkbox" 
          />
          <label htmlFor="revision-complete">Confirmo ter revisado a minha compra</label>
        </div>
      </div>
    </div>
  )
}

export default Review;