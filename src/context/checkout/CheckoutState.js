import React, { useReducer } from 'react';
import CheckoutContext from './checkoutContext';
import { checkoutReducer } from './checkoutReducer';
import {
  CHANGE_PAGE,
  SET_REGISTRATION_INFO
} from '../types';

const CheckoutState = props => {
  const initialState = {
    currentPage: 1,
    registrationInfo: {
      "address": "",
      "addressComplement": "",
      "addressNumber": "",
      "birthDate": "",
      "city": "",
      "country": "",
      "driversLicenseCategory": "",
      "driversLicenseExpiryDate": "",
      "driversLicenseNumber": "",
      "email": "",
      "fullName": "",
      "identificationNumber": "",
      "identificationType": "",
      "neighbourhood": "",
      "password": "",
      "paymentMethod": "",
      "phoneNumber": "",
      "state": "",
      "zipCode": ""
    }
  }

  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const changePage = page => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page
    })
  }

  const setRegistrationInfo = e => {
    dispatch({
      type: SET_REGISTRATION_INFO,
      payload: e
    })
  }

  return (
    <CheckoutContext.Provider
      value={{
        currentPage: state.currentPage,
        registrationInfo: state.registrationInfo,
        changePage,
        setRegistrationInfo
      }}
    >
      { props.children }
    </CheckoutContext.Provider>
  )
}

export default CheckoutState;