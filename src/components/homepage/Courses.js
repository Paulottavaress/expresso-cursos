import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onBuyBtnClick = (e) => {
    addToCart(e.currentTarget.value);
    navigate('/cart');
  }

  return (
    <div
      className="courses-area bg-primary"
    >
      <div className='container py-5 '>
        <div className='text-center mb-5'>
          <h1 className='font-weight-bold'>CONHEÇA NOSSOS CURSOS</h1>
          <h3>Todos os cursos são 100% online e credenciados</h3>
        </div>
        <div className="grid row">
          <div className="col-md bg-secondary courses-card">
            <h1 className='text-primary font-weight-bold text-center m-0'>MOPP FORMAÇÃO</h1>
            <div className='img-container my-3'>
              <div>
                <Link
                  to='/mopp'
                >
                  <img
                    src="/assets/images/backgrounds/mopp.jpeg"
                    alt="mopp" 
                  />
                </Link>
              </div>
            </div>
            <Link
              to='/mopp'
              className="btn btn-block btn-remove"
            >
              <h3 className='font-weight-bold m-0 text-light'>SAIBA MAIS</h3>
            </Link>
            <button
              type='button'
              value='1'
              className="btn btn-block btn-success mt-3 font-weight-bold m-0 text-light"
              onClick={onBuyBtnClick}
            >
              <h3 className='font-weight-bold m-0 text-light'>COMPRAR</h3>
            </button>
          </div>
          <div className="col-md bg-secondary courses-card">
            <h1 className='text-primary font-weight-bold text-center m-0'>MOPP ATUALIZAÇÃO</h1>
            <div className='img-container my-3'>
              <div>
                <Link
                  to='/mopp'
                >
                  <img
                    src="/assets/images/backgrounds/mopp.jpeg"
                    alt="mopp" 
                  />
                </Link>
              </div>
            </div>
            <Link
              to='/mopp'
              className="btn btn-block btn-remove"
            >
              <h3 className='font-weight-bold m-0 text-light'>SAIBA MAIS</h3>
            </Link>
            <button
              type='button'
              value='2'
              className="btn btn-block btn-success mt-3 font-weight-bold m-0 text-light"
              onClick={onBuyBtnClick}
            >
              <h3 className='font-weight-bold m-0 text-light'>COMPRAR</h3>
            </button>
          </div>
          <div className="col-md bg-secondary courses-card">
            <h3 className='font-weight-bold m-0 text-light'> Muito em breve um novo curso...</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;