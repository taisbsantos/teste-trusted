import React from 'react';
import {Routes as Router, Route, BrowserRouter } from 'react-router-dom';
import Home from '../../presentation/Home';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
          <Route path="/" element={<Home />} />
      </Router>
    </BrowserRouter>
   
  );
};

export default Routes;