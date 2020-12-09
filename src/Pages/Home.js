import React from 'react';
import Banner from '../components/Banner/Banner'
import AboutSixteenClothing from '../components/AboutSixteenClothing/AboutSixteenClothing';
import CreativeSixteenProducts from '../components/CreativeSixteenProducts/CreativeSixteenProducts';
// import LatestProducts from '../components/OurProducts/LatestProducts';

// import FooterIdentity from '../components/footer/FooterIdentity';
import OurProduct from '../components/OurProduct/OurProduct';


const Home = () => {
    // <ScriptTag type="text/javascript" src="../../Script/jquery.min.js"/>
    return (
        <>  
            <Banner type="carousel" />
            <OurProduct />
           
            <AboutSixteenClothing />
            <CreativeSixteenProducts />
           
            
        </>
    )
}



export default Home;