import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Samuel Casturino',
      location: 'Bocaiúva do Sul - PR',
      videoPath: '/assets/videos/testimonials/samuel-casturino.mp4#t=0.001'
    },
    {
      name: 'Jonathan Melo Dos Santos',
      location: 'Rondonópolis - MT',
      videoPath: '/assets/videos/testimonials/jonathan-melo-dos-santos.mp4#t=0.001'
    }
  ]

  return (
    <div
      id='testimonials'
      className='bg-primary'
    >
      <div className='container py-5 d-flex flex-column'>
        <Carousel
          navButtonsProps={{
            style: {
              opacity: 1
            }
          }} 
          next={ (next, active) => {} }
          prev={ (prev, active) => {} }
        >
          {
            testimonials.map( (testimonial, i) => (
              <Paper
                key={i}
                className='bg-primary'
              >
                <p className='h1 font-weight-bold text-center'>TESTEMUNHOS</p>
                <p className='h4 font-weight-bold text-center mb-custom'>Veja os testemunhos de quem já comprou com a gente</p>
                <div
                  className='d-flex flex-column justify-content-center align-items-center video-container'
                  style={{ height:'400px' }}
                >
                  <video
                    className='h-100'
                    src={testimonial.videoPath}
                    type='video/mp4'
                    controls
                    style={{ borderRadius: '40px' }}
                  />
                </div>
                <div className='mt-3 white-background-mark'>
                  <p className='h3 mb-0 text-center font-weight-bold'>{testimonial.name}</p>
                  <p className='h3 mb-0 text-center'>{testimonial.location}</p>
                </div>
              </Paper>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
};

export default Testimonials;