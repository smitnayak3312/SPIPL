import React from 'react'
import "./terms.css";
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";
const Privacy = () => {
    return (
        <div>
        <div className='header'>
            <h1>Privacy Policy </h1><br />
            <p>This Privacy Policy was last updated on November 01, 2022.</p>
            <div className='tp_box'>
                <h3>1. What Data We Get</h3>
                <div className='textt-box'>
                    <ul>
                        <li>
                            <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with WideCademy. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                        </li>
                    </ul>

                </div>

                <h3>2. Data You Provide to Us</h3>
                <div className='text-box'>
                    <ul>
                        <li>
                            <p>We may collect different data from or about you depending on how you use the Services. Below are some examples to help you better understand the data we collect.</p>
                        </li>
                    </ul>

                </div>

                <h3>3. How We Get Data About You</h3>
                <div className='text-box'>
                    <ul>
                        <li>
                            <p>We use tools like cookies, web beacons, analytics services, and advertising providers to gather the data listed above. Some of these tools offer you the ability to opt out of data collection.</p>
                        </li>
                    </ul>

                </div>

                <h3>4. What We Use Your Data For</h3>
                <div className='text-box'>
                    <ul>
                        <li>
                            <p>Responding to your questions and concerns;</p>
                        </li>
                        <li>
                            <p>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</p>
                        </li>
                        <li>
                            <p>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</p>
                        </li>
                    </ul>
                </div>

                <h3>5. Your Choices About the Use of Your Data</h3>
                <div className='text-box'>
                    <ul>
                        <li>
                            <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
                        </li>
                        <li>
                            <p>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</p>
                        </li>
                        <li>
                            <p>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</p>
                        </li>
                        <li>
                            <p>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customise Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</p>
                        </li>
                        <li>
                            <p>To update data you provide directly, log into your account and update your account at any time.</p>
                        </li>
                    </ul>
                </div>


                <h3>6. Our Policy Concerning Children</h3>
                <div className='text-box'>
                    <ul>
                        <li>
                            <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we’ve collected personal data from a child under those ages, we will take reasonable steps to delete it.</p>
                        </li>
                    </ul>

                </div>




                <h3>Contact US</h3>
                <div className="text-box">
                    <p>
                        <li>Website : <Link className="links" to="/contact">https://spikepointinfotech.com/</Link></li>
                        <li> Email Id : contact@spikepointinfotech.com</li>
                    </p>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Privacy
