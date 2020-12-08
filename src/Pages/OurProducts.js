import React from 'react';
import Banner from '../components/Banner/Banner'
import FilteredProducts from '../components/OurProducts/FilteredProducts'
import FooterIdentity from '../components/footer/FooterIdentity';

const OurProducts = () =>{
    return (
        <>
            <Banner type="simple" category="Our Products Banner" />
            <FilteredProducts/>
        </>
    );
}

export default OurProducts;
