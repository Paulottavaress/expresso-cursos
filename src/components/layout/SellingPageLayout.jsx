import { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SocialMediaTab from './SocialMediaTab';
import WhatsAppModal from '../../components/common/WhatsAppModal';
import BuyBtnArea from '../../components/sellingpage/BuyBtnArea';

const SellingPageLayout = () => {
  const location = useLocation();

  const [showWppModal, setShowWppModal] = useState(false);
  const [wppMessage, setWppMessage] = useState('');

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
      }
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

  const switchWppModal = () => setShowWppModal(prevShowWppModal => !prevShowWppModal);

  return (
    <div id='selling-page-layout'>
      <Navbar />
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