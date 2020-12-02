import React, { Component } from 'react';
import Home from './Pages/Home';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ContactUS from './Pages/ContactUs';
import './App.css';
import Banner from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Sixteen Clothing Website</h1>
          <Home />
          <OurProducts />
          <AboutUs />
          <ContactUS />
          <Banner type="simple" category="About Us Banner"/>
          <Banner type="carousel" />
      </div>
    );
  }
}

export default App;
