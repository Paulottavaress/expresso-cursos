import {
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../types';

export const cartReducer = (state, action) => {
  switch(action.type) {
    case SET_CART:
      return {
        ...state,
        courses: action.payload.courses,
        subtotal: action.payload.subtotal
      };
    case REMOVE_FROM_CART:
      localStorage.setItem('expresso-cursos-cart', JSON.stringify(action.payload.courses));

      return {
        ...state,
        courses: action.payload.courses,
        subtotal: state.subtotal - action.payload.removedCourse[0].value
      };
    case ADD_TO_CART:
      localStorage.setItem('expresso-cursos-cart', JSON.stringify([...state.courses, action.payload]));

      return {
        ...state,
        courses: [...state.courses, action.payload],
        subtotal: state.subtotal + action.payload.value
      };
    default:
      return state;
  }
}