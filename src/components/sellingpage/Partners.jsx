import React from 'react'

const Partners = ({ logos }) => {
  return (
    <div
      className='d-flex justify-content-center py-2'
      style={{
        backgroundColor: '#ffffff',
        opacity: 0.7
      }}
    >
      <div className='row mx-auto align-items-end'>        
        {logos.map((logo, i) => (
        <div className='col-4' key={i}>
          <img 
            src={logo}
            alt='logo'
          />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Partners