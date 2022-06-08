import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FirstImpression from '../components/sellingpage/FirstImpression';
import SchoolInfo from '../components/common/SchoolInfo';
import AboutTheCourse from '../components/sellingpage/AboutTheCourse';
import CourseContent from '../components/sellingpage/CourseContent';
import CourseRequirements from '../components/sellingpage/CourseRequirements';
import CourseMedias from '../components/sellingpage/CourseMedias';

const TransporteEscolarSellingPage = ({ type }) => {
  const courseName = 'TRANSPORTE ESCOLAR';
  const baseCourseUrl = 'transporte-escolar';
  const [parsedType, setParsedType] = useState('');
  const [courseModules, setCourseModules] = useState([]);
  const [courseRequirements, setCourseRequirements] = useState([]);
  const [courseMedias, setCourseMedias] = useState([]);

  useEffect(() => {
    setParsedType((type === 'formacao' ? 'formação' : 'atualização'));

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
          name: 'Relacionamento Interpessoal',
          duration: '15 (quinze) horas aula'
        }
      ]);

      setCourseRequirements([
        'Ser maior de 21 anos',
        'Estar habilitado na categoria “D” ou "E"',
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
          amount: 21,
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

      setCourseRequirements(['Ter o curso de capacitação de Transporte Escolar descrito no campo de observações da CNH']);

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
          amount: 6,
          icon: 'fa-solid fa-check'
        },
      ])
    }
  }, [type]);

  return (
    <div>
      <FirstImpression
        title="FAÇA SEU CURSO NO CONFORTO DA SUA CASA"
        courseName={courseName.toUpperCase()}
        type={parsedType.toUpperCase()}
        subtitle="Não é necessário perder dias de trabalho para fazer o seu curso de transportes especializados. Faça no seu próprio horário, 100% online e saia com um curso devidamente credenciado pelo DETRAN/MG."
        backgroundImage='/assets/images/backgrounds/school-bus.jpg'
      />
      <SchoolInfo />
      <CourseContent
        type={type}
        courseName={courseName}
        baseCourseUrl={baseCourseUrl}
        modules={courseModules}
      />
      <CourseMedias medias={courseMedias}/>
      <AboutTheCourse />
      <CourseRequirements requirements={courseRequirements}/>
    </div>
  )
};

TransporteEscolarSellingPage.propTypes = {
  type: PropTypes.string.isRequired
}

export default TransporteEscolarSellingPage;