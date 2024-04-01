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
          message: "\"Such a Quality services by spike point infotech private limited.",
          title:"They Delivered over expected!\"",
          profile: profile,
          brand: profile,
          name: "Sachin Bansal",
          profileName: "  - CEO, Flipkart india"
        },
        {
            message: "\"Such a Quality services by spike point infotech private limited.",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Sachin Bansal",
            profileName: "  - CEO, Flipkart india"
        },
        {
            message: "\"Such a Quality services by spike point infotech private limited.",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Sachin Bansal",
            profileName: "  - CEO, Flipkart india"
        },
        {
            message: "\"Such a Quality services by spike point infotech private limited.",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Sachin Bansal",
            profileName: "  - CEO, Flipkart india"
        },
        {
            message: "\"Such a Quality services by spike point infotech private limited.",
            title:"They Delivered over expected!\"",
            profile: profile,
            brand: profile,
            name: "Sachin Bansal",
            profileName: "  - CEO, Flipkart india"
        }
      ]
    
      return (
        <>
    <div className="wrapper">
    <div class="hr-bar"></div>
            <div class="v-bar"></div>
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
                  <SwiperSlide>
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
