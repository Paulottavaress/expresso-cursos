import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoppSellingPage from './pages/MoppSellingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/mopp' element={<MoppSellingPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
