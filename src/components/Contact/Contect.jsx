import React from 'react';
import "./Contact.css";
import { useRef,useState  } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';
const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
          .sendForm(
            'service_broxqq3',          // EmailJS service ID
            'template_0ihvgsr',         // EmailJS template ID
            form.current,               // Reference to the form
            '6eAgbcsK4bR-CaM5z'         // Public key (user ID)
          )
          .then(
            () => {
              console.log('EMAIL SENT SUCCESSFULLY!');
              // Sending acknowledgment email to the user
                sendAcknowledgmentEmail();
              form.current.reset(); // Reset form only on success
            },
            (error) => {
                alert('FAILED TO SENT EMAIL...');
                setLoading(false);
            }
          );
          
      };

      const sendAcknowledgmentEmail = () => {
        const userEmail = form.current['from_email'].value;
        const userName = form.current['to_name'].value;
    
        const acknowledgmentParams = {
          to_email: userEmail,  // The user's email address
          to_name: userName,    // The user's name
        };
    
        emailjs
          .send(
            'service_broxqq3', // Your EmailJS service ID (use the same or a different one)
            'template_w8a63hk', // Your EmailJS template ID for the acknowledgment email
            acknowledgmentParams,
            '6eAgbcsK4bR-CaM5z' // Your public key (user ID)
          )
          .then(
            () => {
                alert('EMAIL SENT SUCCESSFULLY!');
                form.current.reset();
            },
            (error) => {
            //   console.error('FAILED TO SEND ACKNOWLEDGMENT EMAIL...', error);
            alert('FAILED TO SENT EMAIL...');
            setLoading(false);
            }
          )
          .finally(() => {
            setLoading(false); // Stop loading in both success and error cases
          });
      };
    return (
        <div>
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
                    <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="email"
                        id="email"
                        name="from_email"
                        placeholder="Enter your email here"
                        required
                    />
                    <input
                        type="text"
                        id="username"
                        name="to_name"
                        placeholder="Enter your name here"
                        required
                    />
                    <select id="department" name="subject" required>
                        <option value="Need a quotation for project">Need a quotation for project</option>
                        <option value="Want to discuss over a cup of coffee">Want to discuss over a cup of coffee</option>
                        <option value="Need a custom solution for your business">Need a custom solution for your business</option>
                        <option value="Want to explore products">Want to explore products</option>
                    </select>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter detailed message."
                        required
                    ></textarea>
                    <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit'}
                    </button>
                    </form>
                    {/* Loading Spinner */}
                    {loading && (
                        <div className="spinner">
                        <div className="loader"></div>
                        <p>Sending email...</p>
                        </div>
                    )}
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
                            <p>&#8226; Creative & Accurate Mindset – Our team thrives on innovation while ensuring precision in every project we undertake.</p>
                            <p>&#8226; Experienced & Collaborative – With 7+ years of expertise, our 17+ team members work together to deliver top-notch solutions tailored to your needs.</p>
                        </div>
                    </div>
                    <div className="number-content-right">
                        <div className="myHover number-content-number1">
                            <h1>7+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className="myHover number-content-number2">
                            <h1>17+</h1>
                            <p>Team Mambers</p>
                        </div>
                        <div className="myHover number-content-number3">
                            <h1>50+</h1>
                            <p>Running Projects</p>
                        </div>
                        <div className="myHover number-content-number4">
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
                                <p>Spike Point Infotech Pvt. Ltd., 204, Shreedhar Auram, Beside Sivalay, Kudasan, Gandhinagar - 382421</p>
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
        <Footer />
        </div>
    );
};

export default Contact;
