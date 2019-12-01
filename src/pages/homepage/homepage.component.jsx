import React from 'react';
import './homepage.style.scss'
import Directory from '../../components/Directory/Directory.component';
import Carousel from '../../components/Carousel/carousel.component'

const Homepage = ({history}) => {
    return (
        <div className = "Homepage">
            <Carousel />
            <Directory />
        </div>
    );
}

export default Homepage;
