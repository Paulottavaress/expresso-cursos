import React from 'react';
import PropTypes from 'prop-types';

const DockedAlert = ({
  type,
  text
}) => {
  return (
    <div
      id='docked-personalized-alert'
      className={'p-2 rounded-2 w-100 alert-' + type}
      role='alert'
    >
      <div className='d-flex align-items-center'>
        {(type === 'warning') && (
          <i className='fa fa-triangle-exclamation'/>
        )}
        {(type === 'danger') && (
          <i className='fa fa-exclamation-circle' />
        )}
        {(type === 'success') && (
          <i className='fa fa-solid fa-check text-light' />
        )}
        <p className={`font-weight-bold text-center ${(type === 'success') ? 'text-light' : 'text-dark'}`}>{text}</p>
      </div>
    </div>
  )
}

DockedAlert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default DockedAlert;