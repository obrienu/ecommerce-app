import React from 'react';
import './carousel.style.scss'
import image1 from './images/carousel1.jpg';
import image2 from './images/carousel2.jpg';
import image3 from './images/carousel3.jpg';

const Carousel = () => {
    return (
        <div className="Carousel">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 img-fluid" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100 img-fluid" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100 img-fluid" alt="background" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a clasNames="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    );
}

export default Carousel;
