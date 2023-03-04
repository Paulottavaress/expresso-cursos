import PropTypes from 'prop-types';
import { ISOtoBRDate } from '../../utils/FormatDate';
import { CurrentPromo } from '../../utils/Promotions';
import Countdown from './Countdown';

const CenteredModal = ({ 
  switchPromotionalModal,
  wppMsg,
  phone
}) => {
  const scrollToPayment = () => {
    switchPromotionalModal();
    window.scrollTo(0, document.getElementById('selling-page-layout').scrollHeight);
  };

  const currentPromo = CurrentPromo();

  return (
  <div className='centered-modal-container'>
    <div className='overlay cursor-pointer' onClick={() => switchPromotionalModal()}></div>
    <div className='centered-modal'>
      <header className='header'>
        <div className='header-color-mark'></div>
      </header>
      <main className='body d-flex flex-column gap-3 mb-3'>
        <div className='title'>
          <p className='h4 m-0 text-center font-weight-bold'>{currentPromo.title}</p>
          <p className='h4 m-0 text-center font-weight-bold'>Expresso Cursos</p>
        </div>
        <p className='h6 m-0'><span className='font-weight-bold'>TODOS</span> os cursos com até <span className='font-weight-bold'>{currentPromo.percentage}</span> de desconto</p>
        <p className='h6 mb-0'>Promoção válida para os primeiros <span className='font-weight-bold'>{currentPromo.amount}</span> compradores até às <span className='font-weight-bold text-left'>23:59</span> de <span className='font-weight-bold'>{ISOtoBRDate(currentPromo.endDt)}</span></p>
        <Countdown endDt={currentPromo.endDt}/>
      </main>
      <footer className='header-footer d-flex gap-3'>
        <button
          type='button'
          className='btn btn-block btn-success text-light font-weight-bold'
          onClick={() => scrollToPayment()}
        >
          Saber mais
        </button>
        <button
          type='button'
          className='d-flex align-items-center justify-content-center btn btn-block btn-remove text-light font-weight-bold'
          onClick={() => window.open('https://api.whatsapp.com/send?phone=' + phone + '&text=' + wppMsg, '_blank')}
        >
          <img
            src='/assets/images/common/wpp-transparent.png'
            alt='ícone do whatsapp'
            className='mr'
            style={{ maxWidth: '30px' }}
          />
          Contato
        </button>
      </footer>
      {/* START -- Black friday tag -- START*/}
      { (currentPromo.name === 'black friday') &&
        <img
          className='black-friday-tag'
          src='/assets/images/seasonal/black-friday-tag.png'
          alt='Etiqueta de Black Friday' 
        />
      }
      {/* END -- Black friday tag -- END*/}
      {/* START -- Christmas decor -- START*/}
      { (currentPromo.name === 'christmas') &&
        <>
          <img
            className='christmas-corner-decor'
            src='/assets/images/seasonal/christmas-corner-decor.png'
            alt='Decoração natalina' 
          />
          <img
            className='christmas-balls-decor'
            src='/assets/images/seasonal/christmas-balls-decor.png'
            alt='Bolas natalinas' 
          />
        </>
      }
      {/* END -- Christmas decor -- END*/}
      {/* START -- New years decor -- START */}
      { (currentPromo.name === 'new years') &&
        <>
          <img
            className='new-years-top-decor'
            src='/assets/images/seasonal/new-years-top-decor.png'
            alt='Confete dourado de ano novo' 
          />
        </>
      }
      {/* END -- New years decor -- END*/}
      {/* START -- Carnival decor -- START */}
      { (currentPromo.name === 'carnival') &&
        <>
          <img
            className='carnival-top-decor'
            src='/assets/images/seasonal/carnival-top-decor.png'
            alt='Máscara de carnaval' 
          />
        </>
      }
      {/* END -- Carnival decor -- END*/}
    </div>
  </div>
  )
}

CenteredModal.propTypes = {
  switchPromotionalModal: PropTypes.func.isRequired,
  wppMsg: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

CenteredModal.defaultProps = {
  phone: process.env.REACT_APP_CONTACT_NUMBER_MATEUS
}

export default CenteredModal;