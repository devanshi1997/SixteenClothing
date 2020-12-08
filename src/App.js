import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ContactUS from './Pages/ContactUs';
import Navigation from './components/Navigation/Navigation';
import ServiceDetail from "./components/ServicesSixteenClothing/ServiceDetail";
import ProductDetail from "./components/OurProducts/ProductDetails";
import FooterCopyright from './components/footer/FooterIdentity';

import './App.css';


class App extends Component {
  render() {
    return (

      <Router>
        <Navigation />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={OurProducts} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUS} />
            <Route path="/services/:service_name" component={ServiceDetail}/>
            <Route path="/ProductDetails" component={ProductDetail}/>
        <FooterCopyright/>       
      </Router>

    );
  }
}

export default App;
