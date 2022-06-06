import React from 'react';
import PropTypes from 'prop-types';

const CourseMedias = ({ medias }) => {
  return (
    <div
      id='course-medias' 
      className='bg-secondary'
    >
      <div className='container d-flex py-5 text-white justify-content-around'>
        {medias.map((media, i) => (
        <div
          className={'content-circle rounded-circle d-flex flex-column justify-content-center align-items-center ' + ((i === 0) ? 'bg-danger' : (i === 1) ? 'bg-warning' : 'bg-success')}
          key={i}
        >
          <p className="h3 mb-1"><span></span>{media.amount} {media.name}</p>
          <i className={media.icon} />
        </div>
        ))}
      </div>
    </div>
  )
}

CourseMedias.propTypes = {
  medias: PropTypes.array.isRequired
}


export default CourseMedias;