import React from 'react';
import PropTypes from 'prop-types';
import Leads from './Leads';

const ManagementHome = ({route}) => {
  return (
    <div
    id='managementHome'
    className='container bg-primary pb-5'
  >
    {(route.endsWith('leads')) && (
      <Leads route={route} />
    )} {(route === 'management') && (
      <p className='h1 font-weight-bold text-center'>MANAGEMENT HOME</p>
    )}
  </div>
  )
};

ManagementHome.propTypes = {
  route: PropTypes.string.isRequired
}

export default ManagementHome;