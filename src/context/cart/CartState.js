import React, { useReducer, useEffect } from 'react';
import CartContext from './cartContext';
import { cartReducer } from './cartReducer';
import {
  SET_AVAILABLE_COURSES,
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../types';

const CartState = props => {
  const initialState = {
    availableCourses: [],
    courses: [],
    subtotal: 0
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    setAvailableCourses();
  }, []);

  const setAvailableCourses = async () => {
    try {
      let res = await fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_AVAILABLE_COURSES_URL, {
        method: "GET",
      });

      res = await res.json();

      dispatch({
        type: SET_AVAILABLE_COURSES,
        payload: res
      })
    } catch (err) {
      console.log('Error while trying to fetch available courses: ', err)
    }
  }

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
    dispatch({
      type: ADD_TO_CART,
      payload: courseId
    })
  }

  const removeFromCart = courseId => {
    const courses = state.courses.filter(course => course.id !== courseId);
    const removedCourse = state.courses.filter(course => course.id === courseId);

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
        availableCourses: state.availableCourses,
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