import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import HomePge from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul className='header'>
              <Link className='App-link' to="/">Home</Link>
              <Link className='App-link' to="/about">About</Link>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePge />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;
