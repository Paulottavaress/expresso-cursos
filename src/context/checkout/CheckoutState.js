import React, { useReducer } from 'react';
import CheckoutContext from './checkoutContext';
import { checkoutReducer } from './checkoutReducer';
import {
  CHANGE_PAGE,
  SET_REGISTRATION_INFO,
  SET_PAYMENT_INFO,
  SET_PAYMENT_METHOD
} from '../types';

const CheckoutState = props => {
  const initialState = {
    currentPage: 2,
    registrationInfo: {
      "address": "",
      "addressComplement": "",
      "addressNumber": "",
      "birthDate": "",
      "city": "",
      "country": "Brasil",
      "driversLicenseCategory": "Categoria A",
      "driversLicenseExpiryDate": "",
      "driversLicenseNumber": "",
      "email": "",
      "fullName": "",
      "identificationNumber": "",
      "identificationType": "PF",
      "neighbourhood": "",
      "phoneNumber": "",
      "state": "Acre",
      "zipCode": ""
    },
    paymentInfo: null,
    paymentMethod: null
  }

  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const changePage = page => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page
    })
  };

  const setRegistrationInfo = e => {
    dispatch({
      type: SET_REGISTRATION_INFO,
      payload: e
    })
  };

  const setPaymentInfo = paymentInfo => {
    dispatch({
      type: SET_PAYMENT_INFO,
      payload: paymentInfo
    })
  };

  const setPaymentMethod = paymentMethod => {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: paymentMethod
    })
  };

  return (
    <CheckoutContext.Provider
      value={{
        currentPage: state.currentPage,
        registrationInfo: state.registrationInfo,
        paymentInfo: state.paymentInfo,
        paymentMethod: state.paymentMethod,
        changePage,
        setRegistrationInfo,
        setPaymentInfo,
        setPaymentMethod
      }}
    >
      { props.children }
    </CheckoutContext.Provider>
  )
}

export default CheckoutState;