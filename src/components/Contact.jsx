import React, { useEffect } from 'react'
import { contactIMG } from '../constants';
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 700})
    }, [])


  return (
    <div id='contact' className='w-5/6 mx-auto block md:flex flex-wrap py-0 sm:pt-[5.5%] sm:pb-[4%]'>
        <div className='block items-center w-5/6 md:w-[55%] mx-auto'>
            <h1 data-aos='fade-up' className='alice-regular w-5/6 mx-auto text-center leading-none text-white text-[2em] pb-[5%] sm:pb-[5%] md:text-[2.5em] lg:text-[3em]'>Want to stop by? Visit us here:</h1>
            <div data-aos='fade-up' className='mx-auto w-full flex flex-wrap md:w-full'>
                <p className='assistant w-auto text-left text-white text-[1em] mx-auto leading-tight pb-[6%] md:text-[1.2em] lg:text-[1.4em]'>Dolce Espresso<br />Via dell'acero, 003<br />0123 Roma RM<br />Italia</p>
                <div className='block text-white assistant-text w-auto items-center mx-auto'>
                    <div className='flex flex-wrap items-center'>
                        <FaPhone className='w-auto mr-2 text-[1.5em] md:text-[1.8em] lg:text-[2.3em]'/>
                        <p className='w-auto text-[1em] leading-tight md:text-[1.2em] lg:text-[1.4em]'>+39 06 1234 5678</p>
                    </div>
                    <div className='flex pt-[5%] flex-wrap items-center'>
                        <MdMailOutline className='w-auto mr-2 text-[1.5em] md:text-[1.8em] lg:text-[2.3em]' />
                        <p className='w-auto text-[1em] leading-tight md:text-[1.2em] lg:text-[1.4em]'> ciao@dolce.com</p>
                    </div>
                </div>
            </div>
            <p data-aos='fade-up' className='assistant text-center text-white assistant-text text-[1em] leading-tight pt-[8%] sm:pt-[6%] md:text-[1.2em] lg:text-[1.4em]'>Give us a call or email us any questions or concerns that you may have. We will try our best to get back to you when we can!</p>
        </div>

        <div data-aos='fade-up' className='w-5/6 overflow-hidden mx-auto mt-[10%] md:w-[40%] md:mt-0'>
            <div className='relative w-full h-[50vh] bg-cover bg-center transition-opacity duration-1000' style={{ backgroundImage: `url(${contactIMG[0].image})` }}>
            <div className='absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-1000' style={{ backgroundImage: `url(${contactIMG[1].image})` }}></div></div>
        </div>
    </div>
  )
}

export default Contact