import React from 'react'
import './Testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import profile from "/prifile.png"


function Testimonial  () {
    const swiperContent = [
        {
          message: "\"Team Spike Point Infotech PVT. LTD. provides the best web services at a medium price range. They provide excellent user support. We ordered an e-commerce website for our business, and they delivered a website that exceeded our expectations. Thank you, Spike Point Infotech PVT. LTD., for the best website.\"",
          title:"They Delivered over expected!\"",
          profile: profile,
          brand: profile,
          name: "Monika thakkar",
          profileName: " - Entrepreneur"
        },
        {
            message: "\"Spike Point Infotech PVT. LTD. is the best web development company in the market. They provide the best services at a great price, and the team of Spike Point Infotech PVT. LTD. is always helping me with any problem related to my website. Thank you, Spike Point Infotech PVT. LTD.. Your team has helped me a lot in growing my business.\"",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Raghav & Arjun",
            profileName: "  - CEO, Flipkart india"
        },
        {
            message: "\"Such a quality service! They have grown my business with brilliant services. I appreciate the teamwork from their team. 'The right place to grow your business.'\"",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Shravan vaghela",
            profileName: " - Head, Philan herbomedix"
        },
        {
            message: "\"Such quality service by Team Spike Point Infotech PVT. LTD., and the customer support is very powerful. I am really impressed by the service of Spike Point Infotech PVT. LTD..\"",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Charmin patel",
            profileName: "  - CEO, MVS – India"
        },
        // {
        //     message: "\"Such a Quality services by spike point infotech private limited.",
        //     title:"They Delivered over expected!\"",
        //     profile: profile,
        //     brand: profile,
        //     name: "Sachin Bansal",
        //     profileName: "  - CEO, Flipkart india"
        // }
      ]
    
      return (
        <>
    <div className="wrapper">
    <div className="hr-bar"></div>
            <div className="v-bar"></div>
            <div className="testimonial-title">
            <img src="quote1.png" alt="" />
                <div className="testimonial-heading">
                    <h2 className='main-heading'>TESTIMONIALS</h2>
                    <p className='small-heading'>YOU WILL SURELY LOVE THIS</p>
                </div>
                <img src="quote.png" alt="" />
            </div>

            
            
          
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              allowTouchMove={true}
              // mousewheel= {true}
              pagination={{
                clickable: true,
                
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween:10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
    
    
              {
                swiperContent.map((content, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-container">
                    <div className="card-1" key={index}>
                      <div className="client-message">{content.message}</div>
                      <div className="client-title">{content.title}</div>
                      <div className="user-identify">
                        <div className="user-information">
                          <img src={content.profile} className='avtar' />
                          <div className="user-name">
                            <p>{content.name}</p>
                            <p>{content.profileName}</p>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    </div>
                   
                  </SwiperSlide>
    
                ))
              }
            </Swiper>
            {/* <div className="button-Atrrangment">
              <div className="swiper-pagination"></div>
            </div> */}
    
          </div>
    
          
        </>
      )
    }

export default Testimonial
