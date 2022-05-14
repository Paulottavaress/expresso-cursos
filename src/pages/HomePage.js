import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SchoolInfo from '../components/common/SchoolInfo';

const HomePage = () => {
  const [backgroundImage] = useState('/assets/images/backgrounds/truck-in-a-road.jpg');
  const [title] = useState('CURSOS RÁPIDOS, 100% ONLINE E CREDENCIADOS');
  const [subtitle] = useState('Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG.');

  return (
    <div className='homepage'>
      <div 
        className='d-flex flex-column ios-background-image'
        style={{
          height: '100vh',
          background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(' + backgroundImage +') no-repeat center center fixed',
          backgroundSize: 'cover',
          WebkitBackgroundSize: 'cover',
          OBackgroundSize: 'cover',
          MozBackgroundSize: 'cover',
          opacity: 0.9
        }}
      >
        <div className="container text-light">
          <div className='d-flex flex-column align-items-center text-center'>
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
      </div>
      <SchoolInfo />
      <div
        className="courses-area bg-primary"
      >
        <div className='container py-5 '>
          <div className='text-center mb-5'>
            <h1 className='font-weight-bold'>CONHEÇA NOSSOS CURSOS</h1>
            <h3>Todos os cursos são 100% online e credenciados</h3>
          </div>
          <div className="grid row">
            <div className="col-md bg-secondary courses-card">
              <h1 className='text-primary font-weight-bold text-center m-0'>MOPP</h1>
              <div className='img-container my-3'>
                <div>
                  <Link
                    to='/mopp'
                  >
                    <img
                      src="/assets/images/backgrounds/mopp.jpeg"
                      alt="mopp" 
                    />
                  </Link>
                </div>
              </div>
              <Link
                to='/mopp'
                className="btn btn-block btn-success"
              >
                <h3 className='font-weight-bold m-0 text-light'>SAIBA MAIS</h3>
              </Link>
            </div>
            <div className="col-md bg-secondary courses-card">
            <h3 className='font-weight-bold m-0 text-light'> Muito em breve um novo curso...</h3>
            </div>
            <div className="col-md bg-secondary courses-card">
              <h3 className='font-weight-bold m-0 text-light'> Muito em breve um novo curso...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;