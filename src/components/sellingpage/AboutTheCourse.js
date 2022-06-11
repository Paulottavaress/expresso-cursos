import React from 'react';

const AboutTheCourse = () => {
  return (
    <div className='bg-primary'>
      <div className='container py-5'>
        <p className="h1 text-center font-weight-bold mb-custom">
          COMO FUNCIONA NOSSO CURSO
        </p>
        <div className="row align-items-center justify-content-center">
          <div
            className="row mr-1 mt-3 box"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
          >
            <div className="row pt-3">
              <i className="fa fa-mobile col-2" />
              <p className="h3 col-10 text-center font-weight-bold">
                O CURSO É 100% ONLINE
              </p>
            </div>
            <div className="row align-items-center">
              <p className="h3 text-left">Você pode acessar o curso por qualquer dispositivo que tenha acesso à internet, seja computador, notebook, celular ou tablet. Você recebe o acesso ao nosso portal na confirmação da sua matrícula e a partir daí uma equipe de monitoria e tutoria vai te ajudar durante toda a sua jornada de estudos.</p>
            </div>
          </div>
          <div
            className="row mr-1 mt-3 box"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
          >
            <div className="row pt-3">
              <i className="fa-solid fa-road col-2" />
              <p className="h3 col-10 text-center font-weight-bold">
                DURANTE O CURSO
              </p>
            </div>
            <div className="row">
              <p className="h3 text-left">Basta você realizar todas as atividades propostas por meio de vídeos, textos e simulados no conforto da sua casa ou de qualquer lugar do mundo utilizando através da internet.</p>
            </div>
          </div>
          <div
            className="row mr-1 mt-3 box"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
          >
            <div className="row pt-3">
              <i className="fa-solid fa-clock col-2" />
              <p className="h3 col-10 text-center font-weight-bold">
                OS HORÁRIOS DO CURSO
              </p>
            </div>
            <div className="row">
              <p className="h3 text-left">O curso fica disponível para acesso 24 horas na nossa plataforma! Isso quer dizer que você pode fazer no seus horários vagos, sem comprometer seus compromissos.</p>
            </div>
          </div>
          <div
            className="row mr-1 mt-3 box"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
          >
            <div className="row pt-3">
              <i className="fa-solid fa-flag-checkered col-2" />
              <p className="h3 col-10 text-center font-weight-bold">
                AO TERMINAR O CURSO
              </p>
            </div>
            <div className="row">
              <p className="h3 text-left">Ao concluir todas as etapas do curso, seu certificado será encaminhado ao DETRAN/MG para homologação. Uma vez com o certificado homologado, você pode trabalhar normalmente aplicando tudo que aprendeu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTheCourse;