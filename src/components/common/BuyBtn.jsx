import React, { useContext } from 'react';
import CartContext from '../../context/cart/cartContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BuyBtn = ({
  courseId,
  text,
  textColor,
  btnColor,
  margin
}) => {
  const navigate = useNavigate();

  const cartContext = useContext(CartContext);
  const { 
    addToCart,
    removeFromCart,
    courses
  } = cartContext;

  const onBuyBtnClick = async (e) => {
    const duplicateCourses = courses.filter(course => (course.id.slice(0, 8) === e.currentTarget.value.slice(0, 8)));
    const isDuplicate = (duplicateCourses.length > 0);

    if (isDuplicate) removeFromCart(duplicateCourses[0].id);
    addToCart(e.currentTarget.value);
    navigate('/carrinho');
  };

  return (
    <button
      className={'btn btn-block ' + textColor + ' ' + btnColor + ' ' + margin}
      type='button'
      value={courseId}
      onClick={onBuyBtnClick}
    >
      <h3 className='font-weight-bold mb-0'>{ text }</h3>
    </button>
  )
}

BuyBtn.propTypes = {
  courseId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

BuyBtn.defaultProps = {
  textColor: 'text-light',
  btnColor: 'btn-success',
  margin: 'mb-0 mx-auto'
}

export default BuyBtn;