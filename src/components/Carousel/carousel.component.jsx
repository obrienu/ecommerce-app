import React from "react";
import "./carousel.style.scss";
import dress1 from "./images/dress1.png";
import dress2 from "./images/dress2.png";

const Carousel = () => {
  return (
    <div className="Carousel">
      <div className="Content">
        <h1 className="Title">
          Lorem
          <br /> ipsum dolor
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <button className="btn warm">Shop Now</button>
      </div>

      <img src={dress1} alt="bag" className="Image Image1" />
      <img src={dress2} alt="bag" className="Image Image2" />
    </div>
  );
};

export default Carousel;
