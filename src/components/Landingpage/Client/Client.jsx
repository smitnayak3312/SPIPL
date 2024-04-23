import React from "react";
import "./Client.css"; 

const images = [
  "safe.png",
  "soor.png",
  "img3.png",
  "kmall.png",
  "gate.png",
  "social.png",
  "post.png",
  "newspoint.png",
  "seal.png",
  "yog.png",
  "dhf.png",
  "portfolio1.png",
  
];

const Client = () => {
  return (
    <div className="wrapper">
      <div class="hr-bar"></div>
      <div class="v-bar"></div>
      <h2 className='main-heading'>CLIENTS</h2>
<p className='small-heading'>THEY TRUST US</p>
      <div className="client-container">
        {images.map((image, index) => (
          <div key={index} className="item">
            <img
              className="client-img"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
