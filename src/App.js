import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Quotes from './Components/Quotes';

const App = () => (
  <>
    <Navigation />
    <Routes>
      <Route
        path="/"
        element={(
          <Home />
        )}
      />
      <Route
        path="/calculator"
        element={(
          <Calculator />
        )}
      />
      <Route
        path="/Quotes"
        element={(
          <Quotes />
        )}
      />
    </Routes>
  </>
);
export default App;
