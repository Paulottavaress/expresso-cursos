import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { firstAndLastNames } from '../../utils/FormatPersonalName';

const Testimonials = ({ carousel }) => {
  const testimonials = [
    {
      name: 'Douglas Alves de Freitas',
      location: 'Belo Horizonte - MG',
      videoPath: '/assets/videos/testimonials/douglas-alves-de-freitas.mp4#t=0.001'
    },
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
  ];

  return (
    <div
      id='testimonials'
      className='bg-primary'
    >
      <div className='container py-5 d-flex flex-column'>
        {carousel ? (
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
              testimonials.map((testimonial, i) => (
                <Paper
                  key={i}
                  className='bg-primary'
                >
                  <p className='h1 font-weight-bold text-center'>DEPOIMENTOS</p>
                  <p className='h4 font-weight-bold text-center mb-custom'>Veja os depoimentos de quem já comprou com a gente</p>
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
                    <p className='h3 mb-0 text-center font-weight-bold'>{firstAndLastNames(testimonial.name)}</p>
                    <p className='h3 mb-0 text-center'>{testimonial.location}</p>
                  </div>
                </Paper>
              ))
            }
          </Carousel>
        ) : (
          <div>
            <div className='bg-primary'>
              <p className='h1 font-weight-bold text-center'>DEPOIMENTOS</p>
              <p className='h4 font-weight-bold text-center mb-custom'>Veja os depoimentos de quem já comprou com a gente</p>
            </div>
            <div className='d-flex justify-content-center gap-2 flex-wrap'>
              {
                testimonials.map((testimonial, i) => (
                  <div
                    key={i}
                    className='bg-primary'
                  >
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
                      <p className='h3 mb-0 text-center font-weight-bold text-nowrap'>{firstAndLastNames(testimonial.name)}</p>
                      <p className='h3 mb-0 text-center text-nowrap'>{testimonial.location}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Testimonials.defaultProps = {
  carousel: false
};

Testimonials.propTypes = {
  carousel: PropTypes.bool.isRequired
};

export default Testimonials;