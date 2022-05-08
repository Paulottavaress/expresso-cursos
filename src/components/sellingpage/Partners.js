import React from 'react'

const Partners = ({ logos }) => {
  return (
    <div
      className='d-flex justify-content-center'
      style={{
        backgroundColor: '#ffffff',
        opacity: 0.7
      }}
    >
      <div className='row align-items-center' style={{maxWidth: '1100px'}}>        
        {logos.map((logo, i) => {
          return <div className="col-6" key={i}>
            <img 
              src={logo}
              alt="logo"
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Partners