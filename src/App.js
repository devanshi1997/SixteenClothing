import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ContactUS from './Pages/ContactUs';
import Navigation from './components/Navigation/Navigation';
import ServiceDetail from './components/ServicesSixteenClothing/ServiceDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
            <Redirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/products" component={OurProducts} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUS} />
            <Route path="/services/:service_name" component={ServiceDetail} />           
      </Router>
    );
  }
}

export default App;
