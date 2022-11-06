import { 
  forwardRef,
  useRef,
  useImperativeHandle
} from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import ptBr from '../../internationalization/pt-br';

const LeftSidebar = forwardRef((props, ref) => {
  const navigate = useNavigate();

  useImperativeHandle(ref, (e) => ({
    openSidebar(e) {
      e.target.style.display = 'none';
  
      const sidebar = document.querySelector('#left-sidebar');
      sidebar.style.transform = 'translateX(0)';
  
      const closeBtn = document.querySelector('#left-sidebar-close-btn-container');
      closeBtn.style.transform = 'translateX(0)';
    },
    closeSidebar() {
      const openBtns = document.querySelector('.left-sidebar-open-btn');
      setTimeout(() => openBtns.style.display = 'block', 1000);
  
      const sidebar = document.querySelector('#left-sidebar');
      sidebar.style.transform = 'translateX(-175px)';
  
      const closeBtn = document.querySelector('#left-sidebar-close-btn-container');
      closeBtn.style.transform = 'translateX(-175px)';
    }
  }));

  return (
    <menu id='left-sidebar'>
      <li
        id="left-sidebar-logo-container"
        onClick={() => navigate('/management')}
      >
        <img
          src='/assets/images/logos/logo-v1-white-resized.png'
          alt='Expresso Cursos Logo'
        />
      </li>
      <li
        className='left-sidebar-btn'
        onClick={() => navigate('/management/profile')}
      >
        <p><i className='fa-solid fa-id-card-clip' />{capitalizeFirstLetter(ptBr.leftSidebar['profile'])}</p>
      </li>
      <li
        className='left-sidebar-btn'
        onClick={() => navigate('/management/leads')}
      >
        <p><i className='fa-solid fa-magnet' /> {capitalizeFirstLetter(ptBr.leftSidebar['leads'])}</p>
      </li>
      <li
        className='left-sidebar-btn'
        onClick={() => navigate('/management/coupons')}
      >
        <p><i className='fa-solid fa-ticket' />{capitalizeFirstLetter(ptBr.leftSidebar['coupons'])}</p>
      </li>
      <li
        className='left-sidebar-btn'
        onClick={() => navigate('/management/courses')}
      >
        <p><i className='fa-sharp fa-solid fa-truck-fast' />{capitalizeFirstLetter(ptBr.leftSidebar['courses'])}</p>
      </li>
    </menu>
  )
});

export default LeftSidebar;