import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; 

const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="footer-box1">
                        <h3>SPIKE POINT</h3>
                        <h6>INFOTECH PRIVATE LIMITED</h6>
                        <p>
                            From over 7 years we are serving the quality tech solutions to
                            business in india. We have archived some really powerful numbers
                            to inidcate.
                        </p>
                        <div className="social">
                            <a href="https://www.instagram.com/spinfotechpvtltd/"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.facebook.com/spinfotechpvtltd"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/spinfotechpl/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/spike-point-104b41278/about/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-box2">
                    <div className="footer-nav-left">
                            <ul>
                                {/* Use Link instead of anchor tags */}
                                <li><Link className="links" to="/">Home</Link></li>
                                <li><Link className="links" to="/about">About</Link></li>
                                <li><Link className="links" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="links" to="/hire-developer">Hire Developer</Link></li>
                                <li><Link className="links" to="/service">Service</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav-right">
                            <ul >
                                {/* <li ><Link className="links" to="/team">Team</Link></li> */}
                                <li ><Link className="links" to="/contact">Contact</Link></li>
                                <li ><Link className="links" to="/privacy-policy">Privacy Policy</Link></li>
                                <li ><Link className="links" to="/Terms">Terms & Condition</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="footer-box3">

                        <div className="footer-address">
                            <div className="address-box">
                                <p>Head Office</p>
                                <p>Spike Point Infotech Pvt. Ltd., 204, Shreedhar Auram, Beside Sivalay,
                                    Kudasan, Gandhinagar - 382421</p>
                            </div>
                            <div className="fh-bar"></div>

                            <div className="fv-bar"></div>
                            <div className="address-box">
                                <p>Branch Office</p>
                                <p>Spike Point Infotech Pvt. Ltd., 1-Amrutnagar Society, Deesa – Palanpur Highway Road, Gujarat-385535</p>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div className="contact-box number">
                                <p>+ 91 95128 48130</p>
                                <p>+91 63542 12716</p>
                            </div>
                            <div className="contact-box">
                                <p>admin@spikepointinfotech.com</p>
                                <p>hrdesk@spikepointinfotech.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
