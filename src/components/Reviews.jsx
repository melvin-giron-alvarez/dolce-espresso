import React, {  useEffect } from 'react'
import { reviews } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { MdStar } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs'
import AOS from 'aos';
import 'aos/dist/aos.css'



const Reviews = () => {

    useEffect(() => {
        AOS.init({duration: 700})
    }, [])


    return (
        <div className='w-5/6 mx-auto pt-[16%] pb-[8%] md:pt-[12%] pb:pb-[6%] lg:pt-[10%] lg:pb-[5%]'>
            <h1 data-aos='fade-up' className='alice-regular w-5/6 mx-auto text-center leading-none text-white text-[2em] pb-[2%] sm:pb-[1%] md:text-[2.5em] lg:text-[3em]'>Customer Feedback</h1>
            <p data-aos='fade-up' className='w-[90%] leading-tight text-center assistant-text text-white mx-auto py-[.6em] text-[.8em] pb-[5%] sm:pb-[3%]'>Swipe for more</p>
            <Swiper
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 40 },
                    450: { slidesPerView: 2, spaceBetween: 40 },
                    700: { slidesPerView: 2, spaceBetween: 40 },
                    900: { slidesPerView: 3, spaceBetween: 30 }
                }}
                freeMode={true}
                thumbs={{ swiper: '.my-thumbs' }}
                modules={[FreeMode, Thumbs]}
                className='w-full'>
                {reviews.map((item, index) => (
                    <SwiperSlide key={item.id} className=''>
                        <div data-aos='fade-up' className='p-[7%] sm:p-[6%] md:p-[4%] bg-beige text-center'>
                            <h1 className='assistant-text font-1000 text-white text-[1.3em] mx-auto leading-tight md:text-[1.4em] lg:text-[1.6em]'><b>{item.name}</b></h1>
                            <div className='flex py-[3%] justify-center text-white text-[2.5em]'>
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <p className='assistant-text text-white text-[1em] leading-tight md:text-[1em] lg:text-[1.2em]'>" {item.description} "</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Reviews