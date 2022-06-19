import React from 'react';

const Testimonials = () => {
  return (
    <div
      id='testimonials'
      className='bg-primary'
    >
      <div className='container py-5 d-flex flex-column'>
        <p className='h1 font-weight-bold text-center'>TESTEMUNHOS</p>
        <p className='h4 font-weight-bold text-center mb-custom'>Veja o testemunho de quem já comprou com a gente</p>
        <div className='d-flex flex-column justify-content-center align-items-center video-container' style={{ height:'400px' }}>
          <video
            className='h-100'
            src='/assets/videos/testimonials/jonathan-melo-dos-santos.mp4#t=0.001'
            type='video/mp4'
            controls
            style={{ borderRadius: '40px' }}
          />
        </div>
        <div className='mt-3 white-background-mark'>
          <p className='h3 mb-0 text-center font-weight-bold'>Jonathan Melo Dos Santos</p>
          <p className='h3 mb-0 text-center'>Rondonópolis - MT</p>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;