
import React from 'react';
import Banner from '../components/Banner/Banner'
import OurBackground from '../components/OurBackground/OurBackground';
import OurTeam from '../components/OurTeam/OurTeam';
import ServicesSixteenClothing from "../components/ServicesSixteenClothing/ServicesSixteenClothing";
import HappyPartners from "../components/HappyPartners/HappyPartners";
import FooterIdentity from '../components/footer/FooterIdentity';




const AboutUs = () => {
    return (
        <>
            <Banner type="simple" category="About Us Banner" />
            <OurBackground/>
            <OurTeam />
            <ServicesSixteenClothing />
            <HappyPartners/>
            <FooterIdentity/>

        </>
    );
}

export default AboutUs;
