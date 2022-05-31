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
                  path='/mopp'
                  element={<MainLayout route='mopp' />}
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
