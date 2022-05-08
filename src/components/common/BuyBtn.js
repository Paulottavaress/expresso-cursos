import React from 'react';

const BuyBtn = ({ text }) => {
  return (
    <button type="button" className="btn btn-success">
      <a
        href="https://api.whatsapp.com/send?phone=5531991373568"
        target="_blank"
        rel="noreferrer"
      >
        <p className='h1'>{ text }</p>
      </a>
    </button>
  )
}

export default BuyBtn;