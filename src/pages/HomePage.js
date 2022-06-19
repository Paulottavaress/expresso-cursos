import React, { useState } from 'react';
import Partners from '../components/sellingpage/Partners';
import SchoolInfo from '../components/common/SchoolInfo';
import Courses from '../components/homepage/Courses';
import Team from '../components/common/Team';

const HomePage = () => {
  const [backgroundImage] = useState('/assets/images/backgrounds/truck-in-a-road.jpg');
  const [title] = useState('CURSOS RÁPIDOS, 100% ONLINE E CREDENCIADOS');
  // const [subtitle] = useState('Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG.');

  const [partnersLogos] = useState(
    [
      '/assets/images/logos/denatran-transparent.png',
      '/assets/images/logos/inove-cropped-resized.png',
      '/assets/images/logos/pvra-cropped-resized.png'
    ]
  )

  const [teamMember] = useState([
    {
      name: 'Mateus Battaglin',
      photo: '/assets/images/common/mateus-photo.jpeg',
      position: 'Comercial'
    },
    {
      name: 'Paulo Andrade',
      photo: '/assets/images/common/paulo-photo.jpg',
      position: 'TI'
    },
    {
      name: 'Laura Tavares',
      photo: '/assets/images/common/laura-photo.jpg',
      position: 'Marketing'
    }
  ])

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
        <div className='container text-light'>
          <div className='d-flex flex-column align-items-center text-center'>
            <p className='h1 font-weight-bold mb-custom'>{title}</p>
            {/* <p className='h3 text-align-left-important'>{subtitle}</p> */}
          </div>
        </div>
        <Partners logos={partnersLogos} />
      </div>
      <SchoolInfo />
      <Team teamMember={teamMember}/>
      <Courses />
    </div>
  )
}

export default HomePage;