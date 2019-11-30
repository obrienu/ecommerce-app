import React from 'react';
import Directory from '../../components/Directory/Directory.component';
import Carousel from '../../components/Carousel/carousel.component'

const Homepage = () => {
    return (
        <div className = "Homepage">
            <Carousel />
            <Directory />
        </div>
    );
}

export default Homepage;
