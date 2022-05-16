import React, { useReducer } from 'react';
import CartContext from './cartContext';
import { cartReducer } from './cartReducer';
import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../types';

const CartState = props => {
  const initialState = {
    courses: [],
    subtotal: 0
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const setCart = courses => {
    let subtotal = 0;

    courses.forEach(course => {
      subtotal = subtotal + course.value;
    })

    dispatch({
      type: SET_CART,
      payload: {
        courses,
        subtotal
      }
    })
  }

  const addToCart = courseId => {
    let course;

    switch(courseId) {
      case '1':
        course = {
          id: '1',
          name: 'MOPP',
          type: 'Formação',
          value: 350,
          image: 'assets/images/backgrounds/mopp.jpeg',
          position: state.courses.length + 1
        };
        break;
      case '2':
        course = {
          id: '2',
          name: 'MOPP',
          type: 'Atualização',
          value: 300,
          image: 'assets/images/backgrounds/mopp.jpeg',
          position: state.courses.length + 1
        };
        break;
      default:
        course = null;
    }

    if (course) {
      dispatch({
        type: ADD_TO_CART,
        payload: course
      })
    }
  }

  const removeFromCart = coursePosition => {
    const courses = state.courses.filter(course => course.position.toString() !== coursePosition);
    const removedCourse = state.courses.filter(course => course.position.toString() === coursePosition);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        courses,
        removedCourse
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        courses: state.courses,
        subtotal: state.subtotal,
        setCart,
        addToCart,
        removeFromCart
      }}
    >
      { props.children }
    </CartContext.Provider>
  )
}

export default CartState;