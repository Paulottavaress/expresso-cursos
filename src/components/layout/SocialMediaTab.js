import React from 'react';

const SocialMediaTab = () => {
  return (
    <div
      id='social-media-tab'
      className='bg-mark position-fixed rounded-2'
    >
      <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
        <a
          href={process.env.REACT_APP_INSTAGRAM}
          target='_blank'
          rel="noreferrer"
        > 
          <img
            className='pt-3'
            src='/assets/images/logos/instagram-square-logo.png'
            alt='Logo do Instagram'
          />
        </a>
        <a
          href={process.env.REACT_APP_FACEBOOK}
          target='_blank'
          rel="noreferrer"
        >
          <img
            className='pt-1 pb-3'
            src='/assets/images/logos/facebook-square-logo-resized.png'
            alt='Logo do Facebook'
          />
        </a>
      </div>
    </div>
  )
};

export default SocialMediaTab;