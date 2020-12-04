
import React from 'react';
import Banner from '../components/Banner/Banner'
import OurTeam from '../components/OurTeam/OurTeam';
import ServicesSixteenClothing from "../components/ServicesSixteenClothing/ServicesSixteenClothing";


const AboutUs = () => {
    return (
        <>
            <Banner type="simple" category="About Us Banner" />
            <OurTeam />
            <ServicesSixteenClothing />
        </>
    );
}

export default AboutUs;
