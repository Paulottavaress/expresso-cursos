import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import MoppSellingPage from './pages/MoppSellingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={<MainLayout route='homepage' />}
          />
          <Route
            path='/mopp'
            element={<MoppSellingPage />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
