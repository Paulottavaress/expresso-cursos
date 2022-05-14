import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Partners from './Partners';
import { Link } from 'react-router-dom';

const FirstImpression = ({ logo, title, subtitle, backgroundImage }) => {
  const [partnersLogos] = useState(
    [
      '/assets/images/logos/detran-mg-transparent.png',
      '/assets/images/logos/inove-transparent-resized.png'
    ]
  )

  return (
    <div 
      className='d-flex flex-column ios-background-image'
      style={{
        height: '100vh',
        background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+ backgroundImage +') no-repeat center center fixed',
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        opacity: 0.9
      }}
    >
      <div className='container text-light'>
        <div className='d-flex flex-column align-items-center text-center'>
          <Link to="/">
            <img
              style={{
                width: '50%',
                marginBottom: '30px'
              }}
              src={logo}
              alt="logo"
            />
          </Link>
          <p
            className='h1'
            style={{
              fontWeight: 'bold',
              marginBottom: '30px'
            }}
          >
            {title}
          </p>
          <p className='h3 text-align-left-important'>
            {subtitle}
          </p>
        </div>
      </div>
      <Partners logos={partnersLogos} />
    </div>
  )
}

FirstImpression.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired
}

FirstImpression.defaultProps = {
  logo: '/assets/images/logos/logo-v1-white-resized.png',
  title: 'TITLE',
  subtitle: 'SUBTITLE',
  backgroundImage: '/assets/images/backgrounds/mopp.jpeg'
}

export default FirstImpression;