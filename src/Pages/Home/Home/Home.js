import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import NewsShelter from '../NewsShelter/NewsShelter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
            <NewsShelter></NewsShelter>
        </div>
    );
};

export default Home;