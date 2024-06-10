import React, { useEffect } from 'react'
import { aboutInfoImg } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css'


const About = () => {

    useEffect(() => {
        AOS.init({duration: 700})
    }, [])

  return (
    <div id='about' className='w-full py-[12%] sm:py-[6%]'>
        <h1 data-aos='fade-up' className='alice-regular w-5/6 mx-auto text-center leading-none text-white text-[2em] pb-[5%] sm:pb-[5%] md:text-[2.5em] lg:text-[3em]'>Benvenuto! We are glad you are here! </h1>
        {aboutInfoImg.map((item, index) => (
            <div key={item.id} data-aos='fade-up' className={`flex w-[90%] justify-evenly items-center text-center m-auto ${index === aboutInfoImg.length - 1 ? 'pb-[0]' : 'pb-[4%]'} ${index % 2 === 0 ? 'flex-wrap' : 'flex-wrap-reverse' }`}>
                {index % 2 === 0 ? (
                    <>
                        <p className='assistant-text text-white text-[1em] leading-tight w-[80%] py-[4%] sm:w-[50%] sm:py-0 md:text-[1.2em] lg:text-[1.4em]'>{item.text}</p>
                        <div className='w-[80%] py-[4%] sm:w-[40%] sm:py-0'><img className='w-full' src={item.image} alt={item.description} /></div>
                    </>
                ) : ( 
                    <>
                        <div className='w-[80%] py-[4%] sm:w-[40%] sm:py-0'><img className='w-full' src={item.image} alt={item.description} /></div>
                        <p className='assistant-text text-white text-[1em] leading-tight w-[80%] py-[4%] sm:w-[50%] sm:py-0 md:text-[1.2em] lg:text-[1.4em]'>{item.text}</p>
                    </>
                )}
            </div>
        ))}
    </div>
)
}

export default About