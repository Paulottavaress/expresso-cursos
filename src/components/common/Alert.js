import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const {
    alerts,
    removeAlert
  } = alertContext;

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
      >
        <div className='d-flex align-items-center'>
          {(alert.type === 'warning') && (
            <i className='fa fa-triangle-exclamation'/>
          )}
          {(alert.type === 'danger') && (
            <i className='fa fa-exclamation-circle' />
          )}
          {(alert.type === 'success') && (
            <i class='fa fa-solid fa-check' />
          )}
          <p>{alert.text}</p>
          <i
            className={(alert.type === 'danger' ? 'fa fa-window-close text-light' : 'text-danger')}
            aria-hidden="true"
            onClick={() => removeAlert(alert.id)}
          />
        </div>
      </div>
    ))}
  </ul>
  )
}

export default Alert;