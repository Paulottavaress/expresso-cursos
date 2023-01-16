import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import SetCart from './utils/SetCart';
import AlertState from './context/alert/AlertState';
import CartState from './context/cart/CartState';
import CheckoutState from './context/checkout/CheckoutState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import MainLayout from './components/layout/MainLayout';
import Cart from './pages/Cart';
import HomePage from './pages/HomePage';
import CheckoutLayout from './components/layout/CheckoutLayout';
import Checkout from './pages/Checkout';
import SellingPageLayout from './components/layout/SellingPageLayout';
import MoppSellingPage from './pages/sellingpage/MoppSellingPage';
import TransporteColetivoSellingPage from './pages/sellingpage/TransporteColetivoSellingPage';
import TransporteEscolarSellingPage from './pages/sellingpage/TransporteEscolarSellingPage';
import TransporteCargaIndivisivelSellingPage from './pages/sellingpage/TransporteCargaIndivisivelSellingPage';
import VeiculosDeEmergenciaSellingPage from './pages/sellingpage/VeiculosDeEmergenciaSellingPage';
import ManagementLayout from './components/layout/ManagementLayout';
import Leads from './pages/management/Leads';
import Lead from './components/management/Lead';
import Courses from './pages/management/Courses';

const App = () => {
  return (
    <AlertState>
      <CartState>
        <CheckoutState>
          <Router>
            <div className="App">
              <ScrollToTop />
              <SetCart />
              <Routes>
                <Route path='/' element={<MainLayout />}>
                  <Route path='/carrinho' element={<Cart />} />
                  <Route index element={<HomePage />} />
                </Route>
                <Route path='/checkout' element={<CheckoutLayout />}>
                  <Route path='/checkout/matricula' element={<Checkout />} />
                  <Route path='/checkout/pagamento' element={<Checkout />} />
                  <Route path='/checkout/confirmacao-de-compra' element={<Checkout />} />
                </Route>
                <Route path='/cursos' element={<SellingPageLayout />}>
                  <Route path='/cursos/mopp/formacao' element={<MoppSellingPage />} />
                  <Route path='/cursos/mopp/atualizacao' element={<MoppSellingPage />} />
                  <Route path='/cursos/transporte-coletivo/formacao' element={<TransporteColetivoSellingPage />} />
                  <Route path='/cursos/transporte-coletivo/atualizacao' element={<TransporteColetivoSellingPage />} />
                  <Route path='/cursos/transporte-escolar/formacao' element={<TransporteEscolarSellingPage />} />
                  <Route path='/cursos/transporte-escolar/atualizacao' element={<TransporteEscolarSellingPage />} />
                  <Route path='/cursos/transporte-carga-indivisivel/formacao' element={<TransporteCargaIndivisivelSellingPage />} />
                  <Route path='/cursos/transporte-carga-indivisivel/atualizacao' element={<TransporteCargaIndivisivelSellingPage />} />
                  <Route path='/cursos/veiculos-de-emergencia/formacao' element={<VeiculosDeEmergenciaSellingPage />} />
                  <Route path='/cursos/veiculos-de-emergencia/atualizacao' element={<VeiculosDeEmergenciaSellingPage />} />
                </Route>
                <Route path='/management' element={<ManagementLayout />}>
                  <Route path='/management/leads' element={<Leads />} />
                  <Route path='/management/leads/create' element={<Lead />} />
                  <Route path='/management/leads/:identificationNumber/visualize' element={<Lead />} />
                  <Route path='/management/leads/:identificationNumber/edit' element={<Lead />} />
                  <Route path='/management/courses' element={<Courses />} />
                </Route>
                <Route path='*' element={
                    <main
                      className='d-flex justify-content-center align-items-center font-weight-bold'
                      style={{ height: '100vh' }}
                    >
                      <p className='h3'>Está perdido? Acho que você errou o caminho.</p>
                    </main>
                  }
                >
                </Route>
              </Routes>
            </div>
          </Router>
        </CheckoutState>
      </CartState>
    </AlertState>
  );
};

export default App;
