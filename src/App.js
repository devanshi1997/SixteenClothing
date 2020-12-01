import React, { Component } from 'react';
import Home from './Pages/Home';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ContactUS from './Pages/ContactUs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Sixteen Clothing Website</h1>
          <Home />
          <OurProducts />
          <AboutUs />
          <ContactUS />
      </div>
    );
  }
}

export default App;
