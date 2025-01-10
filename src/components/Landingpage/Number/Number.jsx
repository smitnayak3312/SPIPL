import React from "react";
import "./Number.css"; 

const Number = () => {
  return (
    <div className="wrapper">
      <div className="h-bar"></div>

      <div className="v-bar"></div>
      <h2 className="main-heading">NUMBERS</h2>
      <p className="small-heading">WE ARE STILL COUNTING THIS</p>
      <div className="number-container1">
        <div className="num-box first">
          <h2 >
            “THERE IS STRENGTH IN <span>NUMBERS!"</span>
          </h2>
        </div>
        <div className="number-line"></div>
        <div className="num-box">
          <h2 className="number-main">7+</h2>
          <h6 className="number-small">Years of experience</h6>
        </div>
        <div className="num-box green">
          <h2 className="number-main">17</h2>
          <h6 className="number-small">Team Mambers</h6>
        </div>
        <div className="num-box ">
          <h2 className="number-main">50+</h2>
          <h6 className="number-small">Running Projects</h6>
        </div>
        {/* <div className="number-line2"></div> */}
        <div className="num-box ">
          <h2 className="number-main">1M+</h2>
          <h6 className="number-small">Lines of code</h6>
        </div>
      </div>
    </div>
  );
};

export default Number;
