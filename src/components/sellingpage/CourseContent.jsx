import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { upperCaseParseType, reverseUpperCaseParseType } from '../../utils/ParseType';

const CourseContent = ({
    type,
    courseName,
    baseCourseUrl,
    modules
  }) => {
  return (
    <div
      id='course-content'
      className='bg-primary'
    >
      <div className="container py-5">
        <p className='h1 text-center font-weight-bold text-secondary'>MÓDULOS DO CURSO</p>
        <p className='h4 text-center font-weight-bold text-secondary mb-custom'>
          {courseName} {upperCaseParseType(type)}
        </p>
        <div className="d-flex flex-column">
          {modules.map((module, i) => (
          <div
            className='module d-flex mb-2 rounded-2 bg-mark'
            key={i}
          >
            <div className={i % 2 === 0 ? 'colored-div bg-danger mr-1' : 'colored-div bg-dark mr-1'} />
            <span className='h3 font-weight-bold mb-0 d-flex align-items-center'>{module.number}</span>
            <span className='module-name h4 mx-1 flex-grow-1 mb-0 d-flex align-items-center font-weight-bold'>
            {module.name}</span>
            <span className='module-length h4 font-weight-bold mb-0 d-flex align-items-center mr-1'>{module.duration}</span>
          </div>
          ))}
        </div>
        <Link to={type === 'formacao' ? `/${baseCourseUrl}-atualizacao` : `/${baseCourseUrl}-formacao`} >
          <p className='h4 mt-4 mb-0 text-danger font-weight-bold text-center cursor-pointer'><u>{`ESTÁ À PROCURA DO CURSO DE ${reverseUpperCaseParseType(type)}? CLIQUE AQUI`}</u></p>
        </Link>
      </div>
    </div>
  )
}

CourseContent.propTypes = {
  type: PropTypes.string.isRequired,
  baseCourseUrl: PropTypes.string.isRequired
}

export default CourseContent;