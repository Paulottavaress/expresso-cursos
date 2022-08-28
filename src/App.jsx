import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import SetCart from './utils/SetCart';
import MainLayout from './components/layout/MainLayout';
import AlertState from './context/alert/AlertState';
import CartState from './context/cart/CartState';
import CheckoutState from './context/checkout/CheckoutState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import ManagementLayout from './pages/management/ManagementLayout';
import Leads from './pages/management/Leads';
import Lead from './pages/management/Lead';

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
                <Route
                  path='/'
                  element={<MainLayout route='homepage' />}
                >
                </Route>
                <Route
                  path='/management'
                  element={<ManagementLayout />}
                >
                  <Route
                    path='/management/leads'
                    element={<Leads />}
                  />
                    <Route
                      path='/management/leads/create'
                      element={<Lead />}
                    />
                    <Route
                      path='/management/leads/:identificationNumber/visualize'
                      element={<Lead />}
                    />
                    <Route
                      path='/management/leads/:identificationNumber/edit'
                      element={<Lead />}
                    />
                  <Route
                    path='*'
                    element={
                      <main
                        className='d-flex justify-content-center align-items-center font-weight-bold'
                        style={{ height: '100vh' }}
                      >
                        <p className='h3'>Está perdido? Acho que você errou o caminho.</p>
                      </main>
                    }
                  />
                </Route>
                <Route
                  path='/cart'
                  element={<MainLayout route='cart' />}
                />
                <Route
                  path='/checkout'
                  element={<MainLayout route='checkout' />}
                />
                <Route
                  path='/mopp-formacao'
                  element={<MainLayout route='mopp-formacao' />}
                />
                <Route
                  path='/mopp-atualizacao'
                  element={<MainLayout route='mopp-atualizacao' />}
                />
                <Route
                  path='/transporte-coletivo-formacao'
                  element={<MainLayout route='transporte-coletivo-formacao' />}
                />
                <Route
                  path='/transporte-coletivo-atualizacao'
                  element={<MainLayout route='transporte-coletivo-atualizacao' />}
                />
                <Route
                  path='/transporte-escolar-formacao'
                  element={<MainLayout route='transporte-escolar-formacao' />}
                />
                <Route
                  path='/transporte-escolar-atualizacao'
                  element={<MainLayout route='transporte-escolar-atualizacao' />}
                />
                <Route
                  path='/transporte-carga-indivisivel-formacao'
                  element={<MainLayout route='transporte-carga-indivisivel-formacao' />}
                />
                <Route
                  path='/transporte-carga-indivisivel-atualizacao'
                  element={<MainLayout route='transporte-carga-indivisivel-atualizacao' />}
                />
                <Route
                  path='/veiculos-emergencia-formacao'
                  element={<MainLayout route='veiculos-emergencia-formacao' />}
                />
                <Route
                  path='/veiculos-emergencia-atualizacao'
                  element={<MainLayout route='veiculos-emergencia-atualizacao' />}
                />
              </Routes>
            </div>
          </Router>
        </CheckoutState>
      </CartState>
    </AlertState>
  );
}

export default App;
