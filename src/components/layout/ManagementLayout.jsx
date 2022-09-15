import React from 'react';
import { Outlet } from 'react-router-dom';

const ManagementLayout = () => {
  return (
  <div id='management-layout'>
    <div className='container'>
      <Outlet />
    </div>
  </div>
  )
};

export default ManagementLayout;