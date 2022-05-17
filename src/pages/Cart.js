import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/cartContext';
import BuyBtn from '../components/common/BuyBtn';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const {
    courses,
    subtotal,
    removeFromCart
  } = cartContext;

  const onRemoveBtnClick = (e) => {
    removeFromCart(e.currentTarget.id);
  }

  return (
    <div className='cart container bg-primary'>
      <h1 className='text-center font-weight-bold text-secondary py-3'>Carrinho de compras</h1>
      <div className="courses-group d-flex flex-column bg-secondary p-3">
        {(courses && courses.length > 0) ? courses.map(course => (
          <div
            className='course d-flex'
            key={course.position}
          >
            <div className='img-container'>
              <img src={course.image} alt={course.name} />
            </div>
            <div className='content-container'>
              <h3 className='text-light'>{course.name} - curso de {course.type.toLowerCase()}</h3>
              <h4 className='text-success'>{course.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h4>
              <h6 className='text-light'>Aceitamos PIX ou parcelamos em até 12x sem juros!</h6>
              <span
                id={course.position}
                className='text-primary m-0'
                onClick={onRemoveBtnClick}
              >
                remover
              </span>
            </div>
          </div>
        )) : (
          <div>
            <h4>Seu carrinho está vazio. Adicione algum curso!</h4>
          </div>
        )}
      </div>
      <div className='subtotal-area d-flex align-items-center justify-content-between bg-secondary my-3 p-3'>
        <h4 className='m-0 text-center'>Subtotal: <span className='text-success'>{subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></h4>
        {(window.innerWidth > 768) && (
        <div className='btn-area d-flex'>
        <BuyBtn
          btnText="Entrar em contato"
          textSize="h6"
          wppMsg="Olá! Gostaria de tirar algumas dúvidas antes de fazer minha matrícula!"
          phone="5531991373568"
        />
        <Link
          to='/checkout'
          className="btn btn-success text-white"
        >
          Fazer matrícula
        </Link>
        </div>
        )}
      </div>
      {(window.innerWidth <= 768) && (
      <div className='btn-area bg-secondary my-3 p-3 d-flex justify-content-center align-items-center'>
        <BuyBtn
          btnText="Entrar em contato"
          wppMsg="Oi! Gostaria de tirar algumas dúvidas antes de fazer minha matrícula."
          phone="5531991373568"
        />
        <Link
          to='/checkout'
          className="btn btn-success text-white"
        >
          Fazer matrícula
        </Link>
      </div>
      )}
    </div>
  )
}

export default Cart;