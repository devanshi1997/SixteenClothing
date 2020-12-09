import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {ProdProvider} from '../src/context/ProductContext'
import {
  BrowserRouter as Router,
 } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <ProdProvider>
  <Router>
    <App />
    </Router>
    </ProdProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
