import React from 'react'
import './Team.css'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { managementTeam, Teamdata2, Teamdata1 } from './Teamdata';
// import TeamData from './Teamdata';
import Footer from '../Footer/Footer';
export default function Team() {


    return (
        <div>
            <div className="wrapper">
                <h1 className='heading'>TEAM</h1>
                <div className="h-bar"></div>

                <div className="v-bar"></div>
                <h2 className="main-heading">MANAGEMENT</h2>
                <p className="small-heading">BUILDING ENVIRONMENT IS STILL ON</p>
                <div className="team1-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{

                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1020: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {managementTeam.map((content, index) => (
                            <SwiperSlide key={index}>
                                <div className="container1">
                                    <div className="card1">
                                        <div className="team1-profile">
                                            <img src={content.profile} alt="" />
                                        </div>
                                        <div className="team1-desc">
                                            <h4>{content.name}</h4>
                                            <p>{content.profileName}</p>
                                            {content.socialLinks.map((link, idx) => (
                                                <a key={idx} href={link}>
                                                    {idx === 0 && <i className="fa-brands fa-square-instagram"></i>}
                                                    {idx === 1 && <i className="fa-brands fa-facebook-f"></i>}
                                                    {idx === 2 && <i className="fa-brands fa-twitter"></i>}
                                                    {idx === 3 && <i className="fa-brands fa-linkedin-in"></i>}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            <div className="wrapper">
                <div className="hr-bar"></div>

                <div className="v-bar"></div>
                <h2 className="main-heading">TEAM FLUTTER</h2>
                <p className="small-heading">WE BUILD FOR CROSS PLATFORMS</p>
                <div className="team-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 70,
                            },
                            1020: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200:
                            {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },

                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {Teamdata2.map((content, index) => (
                            <SwiperSlide key={index}>
                                <div className="container1">
                                    <div className="card1">
                                        <div className="team-profile">
                                            <img src={content.profile} alt="" />
                                        </div>
                                        <div className="team-desc">
                                            <h4>{content.name}</h4>
                                            <p>{content.profileName}</p>
                                            {content.socialLinks.map((link, idx) => (
                                                <a key={idx} href={link}>
                                                    {idx === 0 && <i className="fa-brands fa-square-instagram"></i>}
                                                    {idx === 1 && <i className="fa-brands fa-facebook-f"></i>}
                                                    {idx === 2 && <i className="fa-brands fa-twitter"></i>}
                                                    {idx === 3 && <i className="fa-brands fa-linkedin-in"></i>}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="wrapper">
                <div className="h-bar"></div>

                <div className="v-bar"></div>
                <h2 className="main-heading">TEAM WEB</h2>
                <p className="small-heading">WE BUILD FOR BROWSERS, ALWYAS ACCESSIBLE.</p>
                <div className="team-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 70,
                            },
                            1020: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200:
                            {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },

                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {Teamdata1.map((content, index) => (
                            <SwiperSlide key={index}>
                                <div className="container1">
                                    <div className="card1">
                                        <div className="team-profile">
                                            <img src={content.profile} alt="" />
                                        </div>
                                        <div className="team-desc">
                                            <h4>{content.name}</h4>
                                            <p>{content.profileName}</p>
                                            {content.socialLinks.map((link, idx) => (
                                                <a key={idx} href={link}>
                                                    {idx === 0 && <i className="fa-brands fa-square-instagram"></i>}
                                                    {idx === 1 && <i className="fa-brands fa-facebook-f"></i>}
                                                    {idx === 2 && <i className="fa-brands fa-twitter"></i>}
                                                    {idx === 3 && <i className="fa-brands fa-linkedin-in"></i>}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            <Footer />
        </div>

    );
}


