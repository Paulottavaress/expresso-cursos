import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import { upperCaseParseType } from '../../utils/ParseType';
import BuyBtn from '../common/BuyBtn';

const Courses = () => {
  const cartContext = useContext(CartContext);
  const { availableCourses } = cartContext;

  return (
    <div className='courses-area bg-primary'>
      <div className='container py-5'>
        <div className='text-center mb-5'>
          <h1 className='font-weight-bold'>NOSSOS CURSOS</h1>
          <h3>Todos os cursos são 100% online e credenciados</h3>
        </div>
        <div className='grid row g-2'>
        {availableCourses && availableCourses.map((course) => (
          <div
            className='d-flex col-md-4'
            key={course.id}
          > 
            <div className='bg-secondary courses-card'>
              <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1'>
                <h3 className='text-primary font-weight-bold text-center m-0'>{course.name.toUpperCase()}</h3>
                <h3 className='text-primary font-weight-bold text-center m-0'>{upperCaseParseType(course.type)}</h3>
              </div>
              <div className='img-container my-3'>
                <Link to={course.sellingPage}>
                  <img
                    src={course.image}
                    alt={`${course.sellingPage} ${course.type}`} 
                  />
                </Link>
              </div>
              <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                <Link
                  to={course.sellingPage}
                  className='btn btn-block btn-remove'
                >
                  <h3 className='font-weight-bold m-0 text-light'>SAIBA MAIS</h3>
                </Link>
                <BuyBtn
                  courseId={course.id}
                  text='COMPRAR'
                  margin='mt-3'
                />
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Courses;