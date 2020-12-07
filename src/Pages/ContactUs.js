import React from 'react';
import Banner from '../components/Banner/Banner'
import FooterIdentity from '../components/footer/FooterIdentity';
import LocationMap from '../components/OurLocation/LocationMap';
import Accordion from '../components/Accordion/Accordion';

const ContactUS = ()=>{
    return (
        <>
        <Banner type="simple" category="Contact Us Banner" />
        <LocationMap/>
        <Accordion/>
        <FooterIdentity/>

        </>
    );
}

export default ContactUS;
