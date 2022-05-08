import React from 'react';
import FirstImpression from '../components/sellingpage/FirstImpression';
import SchoolInfo from '../components/sellingpage/SchoolInfo';
import AboutTheCourse from '../components/sellingpage/AboutTheCourse';

const MoppSellingPage = () => {
  return (
    <div>
      <FirstImpression
        title="MOPP - FAÇA SEU CURSO DO CONFORTO DA SUA CASA"
        subtitle="Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG."
        backgroundImage='/assets/images/mopp.jpeg'
      />
      <SchoolInfo />
      <AboutTheCourse />
    </div>
  )
}

export default MoppSellingPage;