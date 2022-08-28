import React from 'react';
import PropTypes from 'prop-types';

const CourseRequirements = ({ requirements }) => {
  return (
    <div
      id='course-requirements'
      className='bg-secondary'
    >
      <div className='d-flex flex-column container py-5 text-white'>
        <p
          className='h1 text-center font-weight-bold'
          style={{ marginBottom: '20px' }}
        >REQUISITOS PARA INSCRIÇÃO</p>
        {requirements.map((requirement, i) => (
        <div
          className='d-flex align-items-center' 
          key={i}
        >
          <p className='h2 mr-1 mb-0'>{`${i + 1}.`}</p>
          <p className="h3 flex-grow-1 mb-0"><span></span>{requirement}</p>
        </div>
        ))}
      </div>
    </div>
  )
};

CourseRequirements.propTypes = {
  requirements: PropTypes.array.isRequired
}

export default CourseRequirements;