import {
  SET_ALERT,
  REMOVE_ALERT,
  SWITCH_NOT_ALLOWED_DIALOG
} from '../types';

export const alertReducer = (state, action) => {
  switch(action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [
          ...state.alerts,
          action.payload
        ],
        lastAlertId:  action.payload.id
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(alert => action.payload !== alert.id)
      };
    case SWITCH_NOT_ALLOWED_DIALOG:
      return {
        ...state,
        notAllowedDialog: action.payload
      };
    default:
      return state;
  }
}