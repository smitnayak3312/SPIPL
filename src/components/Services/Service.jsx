import React from 'react'
import "./Service.css";
import Marquee from "react-fast-marquee";
import Footer from '../Footer/Footer'; // Ensure you import Footer properly
const Service = () => {
    return (
        <div>
        <div className="service-wrapper">
            <h1 className='heading'>SERVICES</h1>
            <div className="service-container">
                <div className="service-heading">
                    <img src="service1.png" alt="" />
                    <h4>Web Designing</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>With the help of some creative minds we are manage to build popular and responsive web designs on web and with that we are top on the table to build for your business.</p>

                    <p>We deliver on almost major web designing technologies we provide prototyping and wireframe services for web as well.</p>

                    <p>   We have good quality team with enough experience in web.</p>
                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>


            <div className="service-container">
                <div className="vline"></div>
                <div className="service-heading">
                    <img src="service1.png" alt="" />
                    <h4>Web Development</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>With the help of some creative minds we are manage to build popular and responsive web application and with that we are top on the table to build for your business.</p>
                    <p>We are managed to build heavy software logic for web applications, we have enough experience as we have builded robust web softwares for business and organisation.</p>
                    <p>You can try our web development team to build better for your business.</p>


                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>


            <div className="service-container">
                <div className="vline"></div>
                <div className="service-heading">
                    <img src="service2.png" alt="" />
                    <h4>Application Development</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>We believe in building applications for cross platforms with better technology like flutter.</p>
                    <p>We have builded mobile application for almost major business categories, and we are successfully able to deliver apps for android and IOS both.</p>
                    <p>We provice complete deployment on respected platform stores like app stores and play stores. </p>
                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>



            <div className="service-container">
                <div className="vline"></div>
                <div className="service-heading">
                    <img src="service3.png" alt="" />
                    <h4>Marketing & PR</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>We believe in serving some quality and  organic reach to people who really required or need your business. </p>
                    <p>We provide popular plans in marketing and PR for your business and personal promotions.</p>
                    <p>On social media, google ads, facebook ads and other platforms which can give you better rich.</p>
                    <p>Get in touch with us for marketing plans for your needs.</p>
                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>



            <div className="service-container" >
                <div className="vline"></div>
                <div className="service-heading">
                    <img src="service4.png" alt="" />
                    <h4>UI/UX Designing</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>UI/UX and wire framing service are available according your project work.</p>
                    <p>We have enough amount of creative minds which can make better prototyping and wire framing for your products, we believe in “First impression is everything.” concept.</p>
                    <p>We serve better for your products which makes an perfect user interface and experience.</p>
                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>

            <div className="service-container" >
                <div className="vline"></div>
                <div className="service-heading">
                    <img src="service5.png" alt="" />
                    <h4>Custom Solutions</h4>
                    <p>We can proudly say that we are table toppers in web designing.</p>
                </div>
                <div className="service-text">
                    <p>We serve for business so we understand that every business has different needs and different requirements so we serve in custom solutions and custom product development.</p>
                    <p>We have pre-builded solutions for colleges, educational institutes, govt organisations and corporate organisation as well.,</p>
                    <p>Get in touch with us for custom solution for your business.</p>
                    <Marquee pauseOnHover>
                        <img src="safe.png" alt="" />
                        <img src="img3.png" alt="" />
                        <img src="gate.png" alt="" />
                        <img src="soor.png" alt="" />

                    </Marquee>
                </div>
            </div>
            
            
        </div>
        <Footer/>
        </div>
    )
}

export default Service
