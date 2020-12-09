import React from 'react';
import Banner from '../components/Banner/Banner'
import FooterIdentity from '../components/footer/FooterIdentity';
import LocationMap from '../components/OurLocation/LocationMap';
import HappyCustomers from '../components/HappyCustomers/HappyCustomers'

import SendUSMessageContainer from '../components/SendUsMessageContainer/SendUsMessageContainer';

const ContactUS = ()=>{
    return (
        <>
        <Banner type="simple" category="Contact Us Banner" />
        <LocationMap/>
        <SendUSMessageContainer/>
        {/* <Accordion/> */}
        <HappyCustomers/>
        </>
    );
}

export default ContactUS;
