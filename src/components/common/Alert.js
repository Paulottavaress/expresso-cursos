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
    isCloseAlertBtnClicked = true;

    removeAlert(alertId);
  }

  const goToUrl = (alertUrl) => {
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
        {alert.type === 'warning'} {
        <i className='fa fa-triangle-exclamation'/>
        }
        {alert.type === 'danger'} {
        <i className='fa-exclamation-circle' />
        }
        {alert.type === 'success'} {
          <i class='fa-solid fa-check' />
        }
        <p>{alert.text}</p>
        <i
          className='fa fa-window-close'
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