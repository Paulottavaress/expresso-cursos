import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import FirstImpression from '../components/sellingpage/FirstImpression';
import SchoolInfo from '../components/common/SchoolInfo';
import AboutTheCourse from '../components/sellingpage/AboutTheCourse';
import CourseContent from '../components/sellingpage/CourseContent';
import CourseRequirements from '../components/sellingpage/CourseRequirements';
import CourseMedias from '../components/sellingpage/CourseMedias';
import CartContext from '../context/cart/cartContext';
import CourseFaq from '../components/sellingpage/CourseFaq';
import DidYouKnow from '../components/sellingpage/DidYouKnow';
import Testimonials from '../components/sellingpage/Testimonials';
import CourseCertification from '../components/sellingpage/CourseCertification';
import BuyTheCourse from '../components/sellingpage/BuyTheCourse';
import { upperCaseParseType } from '../utils/ParseType';

const VeiculosDeEmergenciaSellingPage = ({ type }) => {
  const cartContext = useContext(CartContext);
  const { availableCourses } = cartContext;

  const courseName = 'Veículos de Emergência';
  const baseCourseUrl = 'veiculos-emergencia';
  const [courseInfo, setCourseInfo] = useState([]);
  const [courseModules, setCourseModules] = useState([]);
  const [courseRequirements, setCourseRequirements] = useState([]);
  const [courseMedias, setCourseMedias] = useState([]);
  const [faqData] = useState({
    rows: [
      {
        title: "Esse curso é reconhecido pelo detran?",
        content: "Sim! Todos os nossos cursos são homologados por instituição credenciada ao detran e de acordo com a Resolução 168/04 do Contran."
      },
      {
        title: "Eu preciso fazer alguma prova?",
        content: "Mesmo cumprindo a grade integral dos cursos na plataforma de ensino e sendo devidamente aprovado se faz necessário agendamento junto ao CIRETRAN da sua cidade para prova extraordinária no caso de curso de formação."
      },
      {
        title: "Tenho suporte durante o curso?",
        content: "Todas as suas dúvidas pertinentes no que diz respeito desde compra até a conclusão do curso são de nossa inteira responsabilidade te auxiliar em tudo! Conte conosco!"
      }
    ],
    styles: {
      bgColor: 'bg-primary'
    }
  });

  useEffect(() => {
    if (type === 'formacao') {
      setCourseModules([
        {
          number: 'Módulo I',
          name: 'Legislação de trânsito',
          duration: '10 (dez) horas aula'
        },
        {
          number: 'Módulo II',
          name: 'Direção defensiva',
          duration: '15 (quinze) horas aula'
        },
        {
          number: 'Módulo III',
          name: 'Noções de Primeiros Socorros, Respeito ao Meio Ambiente e Convívio Social',
          duration: '10 (dez) horas aula'
        },
        {
          number: 'Módulo IV',
          name: 'Relacionamento Interperssoal',
          duration: '15 (quinze) horas aula'
        }
      ]);

      setCourseRequirements([
        'Ser maior de 21 anos',
        'Estar habilitado em uma das categorias "A", “B”, “C”, “D” ou “E”',
        'Não ter cometido nenhuma infração grave ou gravíssima ou ser reincidente em infrações médias durante os últimos 12 (doze) meses',
        'Não estar cumprindo pena de suspensão'
      ]);

      setCourseMedias([
        {
          name: 'texto(s)',
          amount: 1,
          icon: 'fas fa-book-open'
        },
        {
          name: 'vídeo(s)',
          amount: 22,
          icon: 'fas fa-video'
        },
        {
          name: 'arquivo(s)',
          amount: 16,
          icon: 'fa-solid fa-file'
        },
        {
          name: 'avaliações',
          amount: 5,
          icon: 'fa-solid fa-check'
        },
      ])
    } else {
      setCourseModules([
        {
          number: 'Módulo I',
          name: 'Legislação de trânsito',
          duration: '3 (três) horas aula'
        },
        {
          number: 'Módulo II',
          name: 'Direção defensiva',
          duration: '5 (cinco) horas aula'
        },
        {
          number: 'Módulo III',
          name: 'Noções de Primeiros Socorros, Respeito ao Meio Ambiente e Convívio Social',
          duration: '3 (três) horas aula'
        },
        {
          number: 'Módulo IV',
          name: 'Relacionamento Interpessoal',
          duration: '5 (cinco) horas aula'
        }
      ]);

      setCourseRequirements(['Ter o curso de capacitação de Movimentação de Produtos Perigosos descrito no campo de observações da CNH']);

      setCourseMedias([
        {
          name: 'texto(s)',
          amount: 11,
          icon: 'fas fa-book-open'
        },
        {
          name: 'vídeo(s)',
          amount: 1,
          icon: 'fas fa-video'
        },
        {
          name: 'avaliações',
          amount: 5,
          icon: 'fa-solid fa-check'
        },
      ])
    }
  }, [type]);

  useEffect(() => {
    if (availableCourses.length > 0) {
      setCourseInfo(availableCourses.filter((course) => (course.id.slice(0, 8) === process.env.REACT_APP_VEICULOS_EMERGENCIA_BASE_ID) && (course.type === type)));
    }
  }, [availableCourses]);

  return (
    <div>
      <FirstImpression
        title="FAÇA SEU CURSO NO CONFORTO DA SUA CASA"
        courseName={courseName.toUpperCase()}
        type={upperCaseParseType(type)}
        backgroundImage='/assets/images/backgrounds/ambulance.jpg'
      />
      <SchoolInfo />
      <AboutTheCourse />
      <CourseRequirements requirements={courseRequirements}/>
      <CourseContent
        type={type}
        courseName={courseName}
        baseCourseUrl={baseCourseUrl}
        modules={courseModules}
      />
      <CourseMedias medias={courseMedias} />
      <CourseFaq faqData={faqData} />
      <DidYouKnow courseName={courseName} />
      <Testimonials />
      <CourseCertification />
      {(courseInfo.length > 0) && (<BuyTheCourse courseInfo={courseInfo[0]} />)}
    </div>
  )
};

VeiculosDeEmergenciaSellingPage.propTypes = {
  type: PropTypes.string.isRequired
}

export default VeiculosDeEmergenciaSellingPage;