import React from "react";
import "./Footer.css";

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
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="footer-box2">
                        <div className="footer-nav-left">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Content</a>
                            </li>
                            <li>
                                <a>Portfolio</a>
                            </li>
                            <li>
                                <a>Service</a>
                            </li>
                            
                        </ul>
                        </div>
                        <div className="footer-nav-right">
                        <ul>
                            <li>
                                <a>Product</a>
                            </li>
                            <li>
                                <a>Marketing & PR</a>
                            </li>
                            <li>
                                <a>Marketing & PR</a>
                            </li>
                            <li>
                                <a>Privacy Policy</a>
                            </li>
                            <li>
                                <a>Terms & Condition</a>
                            </li>
                        </ul>
                        </div>
                        
                    </div>

                    <div class="footer-box3">

                        <div className="footer-address">
                            <div className="address-box">
                                <p>Head Office</p>
                                <p>Spike Point Infotech Pvt. Ltd., 213, Shreedhar Auram, Beside Sivalay,
                                    Kudasan, Gandhinagar - 382421</p>
                            </div>
                            <div class="fh-bar"></div>

              <div class="fv-bar"></div>
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
