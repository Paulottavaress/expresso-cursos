import React from 'react';

const BuyBtn = ({
  btnText,
  wppMsg,
  phone 
}) => {
  return (
    <button
      type="button"
      className="btn btn-success p-1"
    >
      <a
        href={'https://api.whatsapp.com/send?phone=' + phone + '&text=' + wppMsg}
        target="_blank"
        rel="noreferrer"
      >
        <p className='h1 m-0'>{ btnText }</p>
      </a>
    </button>
  )
}

export default BuyBtn;