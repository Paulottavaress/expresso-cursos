import {
  SET_ALERT,
  REMOVE_ALERT
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
    default:
      return state;
  }
}