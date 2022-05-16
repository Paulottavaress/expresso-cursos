import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import SetCart from './utils/SetCart';
import MainLayout from './components/layout/MainLayout';
import MoppSellingPage from './pages/MoppSellingPage';
import CartState from './context/cart/CartState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
  return (
    <CartState>
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
              element={<MoppSellingPage />} 
            />
          </Routes>
        </div>
      </Router>
    </CartState>
  );
}

export default App;
