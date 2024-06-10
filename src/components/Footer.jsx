import React from 'react';
import { navLinks } from '../constants';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {



  return (
    <div className='w-full flex flex-wrap bg-footer mt-[4%]'>
        <ul className='w-[50%] md:w-[17%] my-[1em] justify-evenly text-center mx-auto border-e-[1px] border-[#82746A]'>
            <h1 className='assistant-text leading-tight tracking-wide pb-[.4em] text-white text-[.89em]'><b>Navigation</b></h1>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`assistant-text cursor-pointer text-[.6em] text-white p-1 tracking-wide hover:font-normal`}>
                    <a href={`${nav.id}`}>{nav.text}</a>
                </li>
            ))}
        </ul>
        <ul  className='w-[50%] md:w-[17%] my-[1em] justify-evenly text-center mx-auto md:border-e-[1px] border-[#82746A]'>
            <h1 className='assistant-text leading-tight tracking-wide pb-[.4em] text-white text-[.89em]'><b>Contact</b></h1>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider `}>ciao@dolce.com</li>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider`}>+39 06 1234 5678</li>
        </ul>
        <div className='w-full md:w-[30%] my-auto justify-evenly text-center mx-auto'>
            <h1 className='font-[castle] text-[1.6em] leading-[.8em] text-[#F9C8D9] mb-[.2em] sm:mb-[.5em] font-bold text-center sm:text-[2em]'>DOLCE ESPRESSO</h1>
            <p className='assistant-text text-[.6em] sm:text-[.7em] text-white p-1 tracking-wider'>© 2024 Dolce Espresso<br />all rights reserved</p>
        </div>
        <ul  className='w-[50%] md:w-[17%] my-[1em] justify-evenly text-center mx-auto md:border-s-[1px] border-[#82746A]'>
            <h1 className='assistant-text leading-tight tracking-wide pb-[.4em] text-white text-[.89em]'><b>Quick Insight</b></h1>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider `}>Organic</li>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider`}>Cruelty Free</li>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider`}>Recyclable</li>
        </ul>
        <ul  className='w-[50%] md:w-[17%] my-[1em] justify-evenly text-center mx-auto border-s-[1px] border-[#82746A]'>
            <h1 className='assistant-text leading-tight tracking-wide pb-[.4em] text-white text-[.89em]'><b>Location</b></h1>
            <li className={`assistant-text text-[.6em] text-white p-1 tracking-wider`}>Dolce Espresso<br/>Via dell'acero, 003<br/>0123 Roma RM<br/>Italia</li>
        </ul>
    </div>
  )
}

export default Footer