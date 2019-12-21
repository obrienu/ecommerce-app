import React from "react";
import "./carousel.style.scss";
import dress1 from "./images/dress1.png";
import dress2 from "./images/dress2.png";
import { withRouter } from "react-router-dom";

const Carousel = ({ history, match }) => {
  return (
    <div className="Carousel">
      <div className="Content">
        <h1 className="Title">
          Lorem
          <br /> ipsum dolor
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        <button
          className="btn warm"
          onClick={() => history.push(`${match.url}shop`)}
        >
          Shop Now
        </button>
      </div>

      <img src={dress1} alt="bag" className="Image Image1" />
      <img src={dress2} alt="bag" className="Image Image2" />
    </div>
  );
};

export default withRouter(Carousel);
