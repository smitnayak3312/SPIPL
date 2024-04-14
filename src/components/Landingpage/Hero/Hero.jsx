import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
            <img src="./hero1.png" ></img>

            <h1 className="hero-heading">
              No. 1 Web Development Company In India
            </h1>
            <p className="hero-text">
              From over 7 years we are serving the quality tech solutions to
              business in india. We have archived some really powerful numbers
              to inidcate.
            </p>
            <div className="button">
            <Link to="/service" id="button">Explore More</Link>
            </div>
            
          </div>
          <div className="hero-right">
            <img src="./hero2.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
