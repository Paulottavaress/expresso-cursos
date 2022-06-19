import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../../utils/WindowSize';

const AboutTheCourse = () => {
  const boxes = [
    {
      title: 'O CURSO É 100% ONLINE',
      icon: 'fa fa-mobile fa-2xl',
      content: 'Você pode acessar o curso por qualquer dispositivo que tenha acesso à internet, seja computador, notebook, celular ou tablet. Você recebe o acesso ao nosso portal na confirmação da sua matrícula e a partir daí uma equipe de monitoria e tutoria vai te ajudar durante toda a sua jornada de estudos.'
    },
    {
      title: 'DURANTE O CURSO',
      icon: 'fa-solid fa-road fa-2xl',
      content: 'Basta você realizar todas as atividades propostas por meio de vídeos, textos e simulados no conforto da sua casa ou de qualquer lugar do mundo utilizando através da internet.'
    },
    {
      title: 'OS HORÁRIOS DO CURSO',
      icon: 'fa-solid fa-clock fa-2xl',
      content: 'O curso fica disponível para acesso 24 horas na nossa plataforma! Isso quer dizer que você pode fazer no seus horários vagos, sem comprometer seus compromissos.'
    },
    {
      title: 'AO TERMINAR O CURSO',
      icon: 'fa fa-flag-checkered fa-2xl',
      content: 'Ao concluir todas as etapas do curso, seu certificado será encaminhado ao DETRAN/MG para homologação. Uma vez com o certificado homologado, você pode trabalhar normalmente aplicando tudo que aprendeu.'
    }
  ];

  const [minHeight, setMinHeight] = useState(0);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const boxGroup = document.querySelectorAll('.content-box');

    let currentMinHeight = 0;

    boxGroup.forEach((box) => currentMinHeight = (box.clientHeight > currentMinHeight) ? box.clientHeight : currentMinHeight);

    boxGroup.forEach((box) => box.style.maxHeight = currentMinHeight + 'px !important');

    setMinHeight(currentMinHeight);
  }, [width, height]);

  return (
    <div className='bg-primary'>
      <div className='container py-5'>
        <p className='h1 text-center font-weight-bold mb-custom'>
          COMO FUNCIONA NOSSO CURSO
        </p>
        <div className='row g-2'>
          {boxes.map((box, i) => (
          <div
            className='content-box d-flex col-md-6'
            key={i}
            style={{ 
              minHeight: minHeight + 'px',
              maxHeight: minHeight === 0 ? '1000px' : minHeight
            }}
          >
            <div className='d-flex align-items-center flex-column justify-content-center bg-mark p-3 rounded-3'>
              <div className='d-flex align-items-center mb-custom justify-content-center w-100'>
                <i className={`mr-1 ${box.icon}`} />
                <p className='h2 col-10 text-center font-weight-bold flex-grow-1 mb-0'>{box.title}</p>
              </div>
              <p className='h3 text-left mb-0 flex-grow-1 d-flex justify-content-center align-items-center'>{box.content}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutTheCourse;