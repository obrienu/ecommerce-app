import React from 'react';
import './carousel.style.scss'
import bag from './images/bag.png'

const Carousel = () => {
    return (
        <div className="Carousel">
            <div className="Content">
            <h1 className="Title">Lorem<br/> ipsum dolor</h1>
            <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing.</small></p>
            <button className="btn btn-primary">Shop Now</button>
            </div>

            <img src={bag} alt="bag" className="Image"/>
        </div>
    );
}

export default Carousel;
