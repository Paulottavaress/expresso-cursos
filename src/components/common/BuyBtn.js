import React from 'react';

const BuyBtn = ({
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
}

export default BuyBtn;