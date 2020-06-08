import React from 'react';
import './assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage, DetailsPage, Checkout } from './pages';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
      </Router>
      <ToastContainer />
    </div>
  );
}
