import React, { useRef, useState, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import { breadIMG } from '../constants';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'


const Bread = () => {

    useEffect(() => {
        AOS.init({duration: 700})
    }, [])
    
    
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className='w-[90%] mx-auto pt-[5em] md:pt-[6em] pb-[2em]'>
        <h1 data-aos='fade-up' className='w-[80%] alice-regular text-white mx-auto text-center leading-none text-[2em] md:text-[2.5em] lg:text-[3em]'>
        Our Beloved Bread Selection
        </h1>
        <div data-aos='fade-up' className=' text-white text-[1.5em] w-[15%] flex justify-between mx-auto my-[2%]'>
        <div ref={prevRef} className='mx-auto cursor-pointer'><FaLongArrowAltLeft /></div>
        <div ref={nextRef} className='mx-auto cursor-pointer'><FaLongArrowAltRight /></div>
        </div>
        <Swiper data-aos='fade-up'
        spaceBetween={15}
        grabCursor={true}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        thumbs={{ swiper: '.my-thumbs' }}
        modules={[Thumbs, Navigation]}
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
        }}
        breakpoints={{
            0: { slidesPerView: 1 },
            450: { slidesPerView: 2 },
            700: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
        }}
        className='w-full h-[500px] py-[3.5em] my-auto'>
        {breadIMG.map((item, index) => (
            <SwiperSlide key={item.id} className={` ${index === activeIndex ? 'active-slide' : ''}`}>
            <div className={`w-full relative overflow-hidden cursor-pointer duration-700 transition-transform flex items-center justify-center ${index === activeIndex ? 'h-[400px] bottom-[50px] hover:scale-105' : 'h-[300px]'}`}>
                <div className='absolute duration-700 transition-opacity  bg-cover bg-center w-full h-full flex items-center justify-center'
                style={{ backgroundImage: `url(${item.image})`, opacity: index === activeIndex ? 1 : 0.9 }}>
                <div className={`absolute inset-0 ${index === activeIndex ? '' : 'bg-[#24221f5e]'}`}></div>
                </div>
            </div>
            <p className={`relative text-center text-white leading-tight ${index === activeIndex ? 'bottom-[40px] text-[1.5em] md:text-[1.9em] lg:text-[2.4em]' : 'text-[1em] md:text-[1.2em] lg:text-[1.4em] pt-[2%]' }`}>{item.text}</p>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className='w-[80%] sm:w-[90%] text-white flex flex-wrap justify-between mx-auto'>
            {breadIMG.map((item, index) => (
                <div data-aos='fade-up' key={item.id} className={`sm:w-[45%] py-[1.5em]`}>
                    <div className='flex items-center justify-between'>
                        <p className='alice-regular text-[1.5em] pb-[.1em] leading-none md:text-[1.8em]'>{item.text}</p>
                        <p className='text-[.8em] leading-tight md:text-[.9em] lg:text-[.95em]'>{item.price}</p>
                    </div>
                    <p className='text-[.8em] leading-tight md:text-[.9em] lg:text-[.95em]'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
);
}

export default Bread;