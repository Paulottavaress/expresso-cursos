import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import { alertReducer } from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT,
  SWITCH_NOT_ALLOWED_DIALOG
} from '../types';

const AlertState = props => {
  const initialState = {
    alerts: [],
    lastAlertId: 0,
    notAllowedDialog: null
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
    }, alert.time);
  }

  const removeAlert = alertId => {
    dispatch({
      type: REMOVE_ALERT,
      payload: alertId
    })
  }

  const switchNotAllowedDialog = alert => {
    dispatch({
      type: SWITCH_NOT_ALLOWED_DIALOG,
      payload: alert
    })
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        lastAlertId: state.lastAlertId,
        notAllowedDialog: state.notAllowedDialog,
        setAlert,
        removeAlert,
        switchNotAllowedDialog
      }}
    >
      { props.children }
    </AlertContext.Provider>
  )
}

export default AlertState;