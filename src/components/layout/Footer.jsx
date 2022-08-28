import React, { useEffect } from 'react';
import moment from 'moment';

const Footer = ({route}) => {

  useEffect(() => {
    const googleMap = document.createElement('iframe');
    googleMap.setAttribute('title', 'company-location');
    googleMap.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0199185965052!2d-43.96780518499148!3d-19.9235654432545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697145248f92d%3A0xe59a19fefb6f62c5!2sR.%20Cel.%20Pedro%20Jorge%2C%20170%20-%20Prado%2C%20Belo%20Horizonte%20-%20MG%2C%2030411-105!5e0!3m2!1spt-BR!2sbr!4v1656781600810!5m2!1spt-BR!2sbr');
    googleMap.setAttribute('width', '100%');
    googleMap.setAttribute('referrerPolicy', 'no-referrer-when-downgrade');

    const documentContainer = document.querySelector('#page-footer #company-location');

    if (!documentContainer) return;

    documentContainer.innerHTML = '';
    documentContainer.appendChild(googleMap);
  }, [route]);

  return (
    <footer
      id='page-footer'
      className='bg-secondary py-4'
    >
      <main className='container'>
        { (route === 'homepage' || route === 'cart') && (
        <section
          id='company-location'
          className='mb-4'
        >
        </section>          
        )}
        <section id='footer-content'>
          <p className='mb-0 text-center text-size-xs'>© 2022-{moment().year()} EXPRESSO CURSOS LTDA - {process.env.REACT_APP_CNPJ} - Todos os direitos reservados.</p>
        </section>
      </main>
    </footer>
  )
};

export default Footer;