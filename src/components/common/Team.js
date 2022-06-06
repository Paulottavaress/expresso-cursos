import React from 'react';
import PropTypes from 'prop-types';

const Team = ({ teamMember }) => {
  return (
    <div
      id='team-members'
      className='bg-light'
    >
      <div className='container py-5'>
        <p
          className="h1 text-center font-weight-bold"
          style={{marginBottom: '30px'}}
        >NOSSO TIME</p>
        <div className='team-members-container d-flex align-items-center'>
          { teamMember && teamMember.map((member, i) => (
          <div
            className="team-member d-flex flex-column"
            key={i}
            style={{ margin: i === 1 ? '0px 15px' : '0px' }}
          >
            <div className="img-container">
              <img
                src={member.photo}
                alt={`Foto do membro do time Expresso Cursos: ${member.name}`}
                className="rounded-circle"
              />
            </div>
            <p className="name h3 text-center font-weight-bold">{member.name}</p>
            <p className='position h6 text-center'>{member.position}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
};

Team.propTypes = {
  teamMember: PropTypes.array.isRequired
}

export default Team;