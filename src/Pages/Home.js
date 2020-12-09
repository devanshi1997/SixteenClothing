import React from 'react';
import Banner from '../components/Banner/Banner'
import AboutSixteenClothing from '../components/AboutSixteenClothing/AboutSixteenClothing';
import CreativeSixteenProducts from '../components/CreativeSixteenProducts/CreativeSixteenProducts';
import LatestProducts from '../components/OurProducts/LatestProducts';

import FooterIdentity from '../components/footer/FooterIdentity';
import OurProductShubh from '../components/OurProductShubh/OurProductShubh';


const Home = () => {
    // <ScriptTag type="text/javascript" src="../../Script/jquery.min.js"/>
    return (
        <>  
            <Banner type="carousel" />
            <OurProductShubh />
            <LatestProducts />
            <AboutSixteenClothing />
            <CreativeSixteenProducts />
            <FooterIdentity/>
           
            
        </>
    )
}



export default Home;