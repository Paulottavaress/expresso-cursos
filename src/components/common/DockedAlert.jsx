import React from 'react';
import PropTypes from 'prop-types';

const DockedAlert = ({
  type,
  text
}) => {
  return (
    <div
      id='docked-personalized-alert'
      className='p-2 rounded-2 w-100'
      role='alert'
    >
      <div className={'d-flex align-items-center docked-alert-' + type}>
        {(type === 'warning') && (
          <i className='fa fa-triangle-exclamation pr-05'/>
        )}
        {(type === 'danger') && (
          <i className='fa fa-exclamation-circle pr-05' />
        )}
        {(type === 'success') && (
          <i className='fa fa-solid fa-check text-light pr-05' />
        )}
        <p className={`font-weight-bold text-center text-break ${(type === 'success') ? 'text-light' : 'text-dark'}`}>{text}</p>
      </div>
    </div>
  )
}

DockedAlert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default DockedAlert;