import React from 'react';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}/>
      </Router>
    </div>
  );
}