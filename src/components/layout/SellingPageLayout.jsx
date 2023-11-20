import { useState, useEffect, useContext } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import CenteredModal from '../common/CenteredModal';
import SocialMediaTab from './SocialMediaTab';
import WhatsAppModal from '../../components/common/WhatsAppModal';
import BuyBtnArea from '../../components/sellingpage/BuyBtnArea';
import { parseType } from '../../utils/ParseType';
import { CurrentPromo } from '../../utils/Promotions';
import CartContext from '../../context/cart/cartContext';

const SellingPageLayout = () => {
  const location = useLocation();

  const [showWppModal, setShowWppModal] = useState(false);
  const [wppMessage, setWppMessage] = useState('');
  const [isPromotionalModalOpen, setModal] = useState(true);
  const [promotionalWppMsg, setPromotionalWppMessage] = useState('');

  const currentPromo = CurrentPromo();

  const cartContext = useContext(CartContext);

  let { setAvailableCourses } = cartContext;

  useEffect(() => {
    setAvailableCourses();
   },[]);

  useEffect(() => {
    if (location) {
      switch(location.pathname) {
        case '/cursos/mopp/formacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso do Mopp - formação. Pode me ajudar?');
          break;
        case '/cursos/mopp/atualizacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso do Mopp - atualização. Pode me ajudar?');
          break;
        case '/cursos/transporte-coletivo/formacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte de Coletivo de Passageiros - formação. Pode me ajudar?');
          break;
        case '/cursos/transporte-coletivo/atualizacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte de Coletivo de Passageiros - atualização. Pode me ajudar?');
          break;
        case '/cursos/transporte-escolar/formacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte Escolar - formação. Pode me ajudar?');
          break;
        case '/cursos/transporte-escolar/atualizacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte Escolar - atualização. Pode me ajudar?');
          break;
        case '/cursos/transporte-carga-indivisivel/formacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte Carga Indivisível - formação. Pode me ajudar?');
          break;
        case '/cursos/transporte-carga-indivisivel/atualizacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Transporte Carga Indivisível - atualização. Pode me ajudar?');
          break;
        case '/cursos/veiculos-de-emergencia/formacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Veículos de Emergência - formação. Pode me ajudar?');
          break;
        case '/cursos/veiculos-de-emergencia/atualizacao':
          setWppMessage('Gostaria de tirar uma dúvida referente ao curso de Veículos de Emergência - atualização. Pode me ajudar?');
          break;
        default:
          setWppMessage('Gostaria de tirar uma dúvida. Pode me ajudar?');
      };

      const splittedLocation = window.location.pathname.split('/');
      let formattedCourse = splittedLocation[2].replaceAll('-', ' ');

      if (currentPromo) setPromotionalWppMessage(`Gostaria de saber mais sobre a promoção de ${currentPromo.title.toLowerCase()} para o curso ${formattedCourse} - ${parseType(splittedLocation[3])}. Pode me ajudar?`)
    }
  }, [location]);

  useEffect(() => {
    let script = document.createElement('script');

    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-355317261';
    script.async = true;

    document.head.appendChild(script);

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-355317261');";
    document.head.appendChild(script);
  }, []);

  const switchPromotionalModal = () => setModal(prevSetModal => !prevSetModal);

  const switchWppModal = () => setShowWppModal(prevIsPromotionalModalOpen=> !prevIsPromotionalModalOpen);

  return (
    <div id='selling-page-layout'>
      <Navbar />
      {currentPromo && isPromotionalModalOpen && (
        <CenteredModal 
          switchPromotionalModal={switchPromotionalModal}
          wppMsg={promotionalWppMsg}
        />
      )}
      <SocialMediaTab />
      <Outlet />
      <BuyBtnArea switchWppModal={switchWppModal} />
      {showWppModal && (
      <WhatsAppModal
        wppMsg={wppMessage}
        switchWppModal={switchWppModal} 
      />
      )}
    </div>
  )
};

export default SellingPageLayout;