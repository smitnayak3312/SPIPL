import React, { useRef } from 'react';
import './Careear.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import profile from "/schin.png";

function Cr() {
    const swiperRef = useRef(null);

    const swiperContent = [
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profile: profile,
            name: "Sachin Brahmbhatt",
            profileName: "CEO | Managing Director"
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profile: profile,
            name: "Sachin Brahmbhatt",
            profileName: "CEO | Managing Director"
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profile: profile,
            name: "Sachin Brahmbhatt",
            profileName: "CEO | Managing Director"
        },
        {
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            profile: profile,
            name: "Sachin Brahmbhatt",
            profileName: "CEO | Managing Director"
        },
        
    ];

    

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
            <div className="career-wrapper">
                 <h2>What our team says!</h2>
        <p>We don’t show up the culture we have; all you can believe is what our team says! We are all because of our team.</p>
                <div className="career-box">
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        spaceBetween={10}
                        allowTouchMove={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false} // Disable default navigation
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {swiperContent.map((content, index) => (
                            <SwiperSlide key={index}>
                                <div className="carrer-container">
                                    <div className="card" key={index}>
                                        <div className="user-identify1">
                                            <div className="user-information1">
                                                <img src={content.profile} className='image' />
                                                <div className="user-name">
                                                    <p>{content.name}</p>
                                                    <p>{content.profileName}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="team-message"> {content.message}</div>


                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="navigation-buttons">
                        <button onClick={handlePrevClick}><i className='fa-solid fa-arrow-left-long'></i></button>
                        <button onClick={handleNextClick}><i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cr;
