import { 
  useContext,
  useRef
} from 'react';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../common/Alert';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';

const ManagementLayout = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  const leftSidebar = useRef(null);

  return (
  <div id='management-layout'>
    <LeftSidebar ref={leftSidebar} />
    <i
      className='fa-solid fa-arrow-right left-sidebar-open-btn'
      style={{ display: 'none' }}
      onClick={(e) => leftSidebar.current.openSidebar(e)}
    />
    <li id='left-sidebar-close-btn-container'>
      <i
        className='fa-solid fa-arrow-left'
        onClick={() => leftSidebar.current.closeSidebar()}
      />
    </li>
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