import React, { useReducer } from 'react';
import CheckoutContext from './checkoutContext';
import { checkoutReducer } from './checkoutReducer';
import {
  SET_REGISTRATION_INFO,
  SET_PAYMENT_INFO,
  SET_PAYMENT_METHOD
} from '../types';

const CheckoutState = props => {
  const initialState = {
    registrationInfo: {
      "address": "",
      "addressComplement": "",
      "addressNumber": "",
      "birthDate": "",
      "city": "",
      "company": "company",
      "country": "Brasil",
      "driversLicenseCategory": "Categoria A",
      "driversLicenseExpiryDate": "",
      "driversLicenseNumber": "",
      "email": "",
      "firstDriversLicenseIssueDate": "",
      "fullName": "",
      "identificationNumber": "",
      "identificationType": "PF",
      "neighbourhood": "",
      "phoneNumber": "",
      "renachCode": "",
      "state": "AC",
      "zipCode": ""
    },
    paymentInfo: null,
    paymentMethod: null
  }

  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const setRegistrationInfo = e => {
    if (e.target.name === 'phoneNumber' || e.target.name === 'identificationNumber') e.target.value = e.target.value.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

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
        registrationInfo: state.registrationInfo,
        paymentInfo: state.paymentInfo,
        paymentMethod: state.paymentMethod,
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