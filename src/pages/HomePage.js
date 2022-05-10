import React, { useState } from 'react'
import Navbar from '../components/layout/Navbar';

const HomePage = () => {
  const [backgroundImage] = useState('/assets/images/backgrounds/truck-in-a-road.jpg');
  const [title] = useState('CURSOS RÁPIDOS, 100% ONLINE E CREDENCIADOS');
  const [subtitle] = useState('Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG.');

  return (
    <div>
      <Navbar />
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
    </div>
  )
}

export default HomePage;