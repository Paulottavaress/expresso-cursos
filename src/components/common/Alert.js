import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { useNavigate } from "react-router-dom";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {
    alerts,
    removeAlert
  } = alertContext;

  let isCloseAlertBtnClicked = false;

  const navigate = useNavigate();

  const closeAlert = (alertId) => {
    console.log('alertId', alertId);
    isCloseAlertBtnClicked = true;
    console.log('isCloseAlertBtnClicked', isCloseAlertBtnClicked);

    removeAlert(alertId);
  }

  const goToUrl = (alertUrl) => {
    console.log('goToUrl');
    if (!isCloseAlertBtnClicked) {
      navigate(alertUrl);
    }
  }

  return (
  <ul
    id="personalized-alert"
    className="container"
  >
    {alerts && alerts.map((alert) => (
    <div
      className={'alert alert-' + alert.type}
      role="alert"
      key={alert.id}
      onClick={alert.url && (() => goToUrl(alert.url))}
    >
      <div className='d-flex align-items-center'>
        <i
          className="fa fa-triangle-exclamation"
          aria-hidden="true"
        />
        <p>{alert.text}</p>
        <i
          className="fa fa-window-close"
          aria-hidden="true"
          onClick={() => closeAlert(alert.id)}
        />
      </div>
    </div>
    ))}
  </ul>
  )
}

export default Alert;