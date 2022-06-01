import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import { alertReducer } from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = {
    alerts: [],
    lastAlertId: 0
  }

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = alert => {
    const id = state.lastAlertId + 1
    alert.id = id;

    dispatch({
      type: SET_ALERT,
      payload: alert
    })

    setTimeout(() => {
      removeAlert(id);
    }, 10000);
  }

  const removeAlert = alertId => {
    dispatch({
      type: REMOVE_ALERT,
      payload: alertId
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        lastAlertId: state.lastAlertId,
        setAlert,
        removeAlert
      }}
    >
      { props.children }
    </AlertContext.Provider>
  )
}

export default AlertState;