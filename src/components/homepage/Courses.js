import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const cartContext = useContext(CartContext);
  const { 
    addToCart,
    removeFromCart,
    courses,
    availableCourses
  } = cartContext;

  const onBuyBtnClick = async (e) => {
    const duplicateCourses = courses.filter(course => (course.id.slice(0, 8) === e.currentTarget.value.slice(0, 8)));
    const isDuplicate = (duplicateCourses.length > 0);

    if (isDuplicate) removeFromCart(duplicateCourses[0].id);
    addToCart(e.currentTarget.value);
    navigate('/cart');
  }

  return (
    <div
      className="courses-area bg-primary"
    >
      <div className='container py-5 '>
        <div className='text-center mb-5'>
          <h1 className='font-weight-bold'>NOSSOS CURSOS</h1>
          <h3>Todos os cursos são 100% online e credenciados</h3>
        </div>
        <div className="grid row">
          {availableCourses && availableCourses.map((course) => (
          <div
            className="col-md bg-secondary courses-card"
            key={course.id}
          >
          <h1 className='text-primary font-weight-bold text-center m-0'>{course.name}</h1>
          <h1 className='text-primary font-weight-bold text-center m-0'>{course.type.toUpperCase()}</h1>
          <div className='img-container my-3'>
            <div>
              <Link
                to='/mopp'
              >
                <img
                  src={course.image}
                  alt="mopp" 
                />
              </Link>
            </div>
            </div>
            <Link
              to={course.sellingPage}
              className="btn btn-block btn-remove"
            >
              <h3 className='font-weight-bold m-0 text-light'>SAIBA MAIS</h3>
            </Link>
            <button
              type='button'
              value={course.id}
              className="btn btn-block btn-success mt-3 font-weight-bold m-0 text-light"
              onClick={onBuyBtnClick}
            >
              <h3 className='font-weight-bold m-0 text-light'>COMPRAR</h3>
            </button>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses;