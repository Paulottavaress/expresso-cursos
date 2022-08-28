import React from 'react';
import PropTypes from 'prop-types';

const HelpBtn = ({
  btnText,
  textSize,
  wppMsg,
  phone
}) => {
  return (
    <a
      href={'https://api.whatsapp.com/send?phone=' + phone + '&text=' + wppMsg}
      target="_blank"
      rel="noreferrer"
      className="contact-btn btn btn-remove d-flex align-items-center"
    >
      <p className={'m-0 text-light ' + textSize}>{ btnText }</p>
    </a>
  )
};

HelpBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  wppMsg: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default HelpBtn;