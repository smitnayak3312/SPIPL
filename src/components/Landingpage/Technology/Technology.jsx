import React from 'react';
import Marquee from "react-fast-marquee";
// import androidImage from "./assets/Android.png";
import "./Technolgy.css";


const Technology = () => {
    return (
        <div className="wrapper">
            <div className="h-bar"></div>

            <div className="v-bar"></div>
            <h2 className='main-heading'>TECHNOLOGIES</h2>
            <p className='small-heading'>WE BELIEVE IN LATEST</p>
            <div className="technology-container">
                <Marquee pauseOnHover>
                    <div className='tech'>

                        <img src="/flutter.png" alt="" />
                        <img src="/Android.png" alt="" />
                        <img src="/Appstore.png" alt="" />
                        <img src="/Atom.png" alt="" />
                        <img src="/Php.png" alt="" />
                        <img src="/Python.png" alt="" />
                        <img src="/Nodejs.png" alt="" />
                        <img src="/Mysql.png" alt="" />
                        <img src="/Html.png" alt="" />
                        <img src="/CSS3.png" alt="" />
                        
                    </div>
                </Marquee>
                <div className="technology-text">
        <p>With the use of many popular and strong framework we are building reliable solutions for your business</p>
      </div>
            </div>

        </div>


    )
}

export default Technology
