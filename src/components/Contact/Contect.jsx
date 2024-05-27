import React, { useRef, useState, useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Contact = () => {
  const form = useRef();
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://spikepointinfotech.com/careerData.php');
        setCareerData(response.data);
      } catch (error) {
        console.error('Error fetching the career data:', error);
      }
    };

    fetchData();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_broxqq3', 'template_0ihvgsr', form.current, '6eAgbcsK4bR-CaM5z')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contact-wrapper">
      <h1 className="heading">CONTACT</h1>
      <div className="contact-container">
        <div className="contact-box1">
          <h1>
            "GET IN TOUCH WITH US FOR ALL YOUR <span>QUESTIONS"</span>
          </h1>
        </div>
        <div className="dotted-line"></div>
        <div className="contact-box2">
          <h3>REACH US</h3>
          <p>GET IN TOUCH WITH US!</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="email" id="email" name="from_email" placeholder="Enter your email here" required />
            <input type="text" id="username" name="to_name" placeholder="Enter your name here" required />
            <select id="department" name="subject" required>
              <option value="Need a quotation for project" name="sales">Need a quotation for project</option>
              <option value="Want to discuss over a cup of coffee" name="sales">Want to discuss over a cup of coffee</option>
              <option value="Need custom solution for your business" name="sales">Need custom solution for your business</option>
              <option value="Want to explore products" name="sales">Want to explore products</option>
            </select>
            <textarea id="message" name="message" placeholder="Enter detailed message" required></textarea>
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
              <p>Team Members</p>
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
        <p className="small-heading">LOCATIONS, FOR DISCUSSING OVER A CUP OF COFFEE</p>
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

      <div className="career-data">
        <h2>Career Opportunities</h2>
        {careerData.length ? (
          <ul>
            {careerData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Loading career opportunities...</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
