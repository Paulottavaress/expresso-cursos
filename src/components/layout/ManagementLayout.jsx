import { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../common/Alert';
import { Outlet } from 'react-router-dom';

const ManagementLayout = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
  <div id='management-layout'>
    <div className='container'>
      <Outlet />
    </div>
    {(alerts && alerts.length > 0) && (
      <Alert
        key={alert.id}
        type={alert.type}
        text={alert.text}
      />
    )}
  </div>
  )
};

export default ManagementLayout;