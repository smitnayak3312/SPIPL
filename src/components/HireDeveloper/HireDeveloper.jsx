import React from 'react';
import './HireDeveloper.css';
import Testimonial from './Testimonial';
import FeatureCard from './FeatureCard';
import TabBar from './TabBar';
import Footer from '../Footer/Footer'; // Ensure you import Footer properly


const HireDeveloper = () => {

  const featureCardsData = [
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c07e90fb288214d700ec4ca6ce3504ea78cb74d57d706b6eea3d699d414fac79?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
      title: "Always On time",
      description: "Delivering on time is something which we believes in. strongly. Get always on time delivery with quality."
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bdd893fe0b197d3cdf5b084fca6207fd6f32a65ef268d55544b86d20bb15102?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
      title: "Quality Assurance",
      description: "Delivering quality service/products is the aim of our team. On time quality check services are waiting for you."
    },
    {
      iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53135228b665eaf3bfde3b08303659b0ba911e36475d5b2b174fb8d69fb28071?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
      title: "Highly Experienced",
      description: "No need to worry about. well trained and highly experienced persons are checking it out."
    },
    // {
    //   iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c07e90fb288214d700ec4ca6ce3504ea78cb74d57d706b6eea3d699d414fac79?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
    //   title: "Always On time",
    //   description: "Delivering on time is something which we believes in. strongly. Get always on time delivery with quality."
    // },
    // {
    //   iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bdd893fe0b197d3cdf5b084fca6207fd6f32a65ef268d55544b86d20bb15102?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
    //   title: "Quality Assurance",
    //   description: "Delivering quality service/products is the aim of our team. On time quality check services are waiting for you."
    // },
    // {
    //   iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/53135228b665eaf3bfde3b08303659b0ba911e36475d5b2b174fb8d69fb28071?placeholderIfAbsent=true&apiKey=2fde5a32bd344cefb00f8f59349fe869",
    //   title: "Highly Experienced",
    //   description: "No need to worry about. well trained and highly experienced persons are checking it out."
    // },
  ];
  return(
    <div>
    <div className='wrapper'>
      
            <h1 className='heading'>HIRE FROM BEST</h1>
            <div className='whyus-section'>
              <div className='content'><img className='whyus-content-image' src="Experts-pana.png"></img>
              <div className='whyus-content-text'>
                <h2 className='titile'>
                  <span className='regularText'>Meet The Power Behind</span>
                  <br/>
            <span className='highlightText'>Your Success</span>
                  </h2>
                  <p className='description'>
            Our team of skilled professionals is passionate, innovative, and dedicated to transforming your vision into reality. By hiring us, you're choosing a team that prioritizes quality, embraces the latest tech, and delivers solutions tailored to drive your success. Let's build greatness together!
          </p>
              </div>
              </div>
            </div>
            
            <section className='featureCardsContainer'>
            <div className="hr-bar-left"></div>
            <div className="v-bar"></div>
            <h2 className="main-heading">CORES</h2>
      <p className="small-heading">THINGS YOU CAN NOTICE</p>
      <div className='featureCardsGrid'>
        {featureCardsData.map((card, index) => (
          <div key={index} className='featureCardWrapper'>
            <FeatureCard
              iconSrc={card.iconSrc}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
      <Testimonial></Testimonial>
     <section className='tab-section'>
     <div className="h-bar"></div>

<div className="v-bar"></div>
<h2 className='main-heading'>TECHNOLOGIES</h2>
<p className='small-heading'>WE BELIEVE IN LATEST</p>
     <TabBar></TabBar>
     </section>
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
            
            </div>
            <Footer />
            </div>
            
  );
};

export default HireDeveloper;
