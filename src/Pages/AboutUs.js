
import React from 'react';
import Banner from '../components/Banner/Banner'
import ServicesSixteenClothing from "../components/ServicesSixteenClothing/ServicesSixteenClothing";
import HappyPartners from "../components/HappyPartners/HappyPartners"

const AboutUs = ()=>{
    return (
        <>
            <Banner type="simple" category="About Us Banner" />
            <ServicesSixteenClothing />
            <HappyPartners/>
        </>

    );
}

export default AboutUs;
