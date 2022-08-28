import {
  SET_AVAILABLE_COURSES,
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../types';

export const cartReducer = (state, action) => {
  switch(action.type) {
    case SET_AVAILABLE_COURSES:
      return {
        ...state,
        availableCourses: action.payload
      };
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
      const course = state.availableCourses.filter(course => course.id === action.payload);

      localStorage.setItem(
        'expresso-cursos-cart',
        JSON.stringify([
          ...state.courses, 
          course[0]
        ])
      );

      return {
        ...state,
        courses: [
          ...state.courses,
          course[0]
        ],
        subtotal: state.subtotal + course[0].value
      };
    default:
      return state;
  }
}