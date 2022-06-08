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
                />
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
              </Routes>
            </div>
          </Router>
        </CheckoutState>
      </CartState>
    </AlertState>
  );
}

export default App;
