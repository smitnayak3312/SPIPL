import React from 'react';
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.reset();

    emailjs
      .sendForm('service_atx3zra', 'template_l3fa0nd', form.current, {
        publicKey: 'IqiMexQHWnLhwdSdK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <section className='contact-wrapper'>
            <h1 className='heading'>CONTACT</h1>
            <div className="contact-container">
                <div className="contact-box1">
                    <h1>"GET IN TOUCH WITH US FOR ALL YOUR <span>QUESTIONS"</span></h1>
                </div>
                <div className="dotted-line"></div>
                <div className="contact-box2">
                    <h3>REACH US</h3>
                    <p>GET IN TOUCH WITH US!</p>
                    <form  ref={form} onSubmit={sendEmail}>
                        <input type="email" id="email" name="user_email" placeholder="Enter your email here" required />
                        <input type="text" id="username" name="user_name" placeholder="Enter your name here" required />
                        
                        <select id="department" name="department" required>
                            <option name="user_sales" value="sales">Need a quotation for project</option>
                            <option name="user_sales" value="support">Want to discuss on cup of coffee.</option>
                            <option name="user_sales" value="marketing">Need custom solution for your business.</option>
                            <option name="user_sales" value="other">Want to explore products.</option>
                        </select>

                        <div className="dropdown">
                            <div className="dropdown-btn">

                            </div>
                        </div>
                        <textarea id="message" name="message" placeholder="Enter detailed message." required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className="number-container">
                <div className="h-bar"></div>
                <div className="v-bar"></div>
                <h2 className="main-heading">NUMBERS</h2>
                <p className="small-heading">WE ARE STILL COUNTING THIS</p>
                <div className="number-content">
                    <div className="number-content-left">
                        <img src="Group 51.png" alt="" height="60px" width="60px" />
                        <div className="number-content-left-text">
                            <p>&#8226; 17 members with creative and accurate mindset are ready to build your product.</p>
                            <p>&#8226; 17 members with creative and accurate mindset are ready to build your product.</p>
                        </div>
                    </div>
                    <div className="number-content-right">
                        <div className="number-content-number1">
                            <h1>7+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className="number-content-number2">
                            <h1>17+</h1>
                            <p>Team Mambers</p>
                        </div>
                        <div className="number-content-number3">
                            <h1>50+</h1>
                            <p>Running Projects</p>
                        </div>
                        <div className="number-content-number4">
                            <h1>1+</h1>
                            <p>Lines of code</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper">
                <div className="hr-bar"></div>
                <div className="v-bar"></div>
                <h2 className="main-heading">REACH US THROUGH</h2>
                <p className="small-heading">LOCATIONS, FOR DISCUSSING WITH CUP OF COFFEE</p>
                <div className="reachus-container">
                    <div className="reachus-left">
                        <div className="rechusleft1">
                            <img src="Group 52.png" alt="" />
                            <div className="rechus-left1-text">
                                <p>&#8226; admin@spikepointinfotech.com</p>
                                <p>&#8226; contact@spikepointinfotech.com</p>
                            </div>
                            <img src="Group 53.png" alt="" />
                            <div className="rechus-left1-text">
                                <p>&#8226; +91 95128 48130</p>
                                <p>&#8226; +91 63542 12716</p>
                            </div>
                        </div>
                        <div className="reachus-left2"></div>
                    </div>
                    <div className="reachus-right">
                        <img src="Group 54.png" alt="" />
                        <div className="reachus-right-text">
                            <div className="reachus-right-box">
                                <p>HEAD OFFICE</p>
                                <p>Spike Point Infotech Pvt. Ltd., 213, Shreedhar Auram, Beside Sivalay, Kudasan, Gandhinagar - 382421</p>
                            </div>
                            <div className="reachus-right-box">
                                <p>BRANCH OFFICE</p>
                                <p>Spike Point Infotech Pvt. Ltd., 1-Amrutnagar Society, Deesa – Palanpur Highway Road, Gujarat-385535</p>
                            </div>
                            <a href="https://www.instagram.com/spinfotechpvtltd/"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.facebook.com/spinfotechpvtltd"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/spinfotechpl/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/spike-point-104b41278/about/"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
