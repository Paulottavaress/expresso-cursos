import React from 'react';
import FirstImpression from '../components/sellingpage/FirstImpression';
import SchoolInfo from '../components/common/SchoolInfo';
import AboutTheCourse from '../components/sellingpage/AboutTheCourse';

const MoppSellingPage = () => {
  return (
    <div>
      <FirstImpression
        title="MOPP - FAÇA SEU CURSO NO CONFORTO DA SUA CASA"
        subtitle="Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG."
        backgroundImage='/assets/images/backgrounds/mopp.jpeg'
      />
      <SchoolInfo />
      <AboutTheCourse />
    </div>
  )
}

export default MoppSellingPage;