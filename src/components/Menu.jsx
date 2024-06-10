import React, { useEffect } from 'react'
import { menuIMG } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Menu = () => {

  useEffect(() => {
    AOS.init({duration: 700})
}, [])

  const toCoffee = () => {
    window.location.href = '/menu#coffee';
  }

  const toPastry = () => {
    window.location.href = '/menu#pastry';
  }

  return (
    <div className='w-full flex bg-beige py-[14%] sm:py-[6%]'>
        <div className='flex flex-wrap w-[90%] mx-auto justify-evenly'>
            {menuIMG.map((item, index) => (
                <div key={item.id} data-aos='fade-up' className={`w-[80%] block items-center text-center ${index % 2 === 0 ? 'mb-[15%]' : 'mb-[0%]'} sm:w-[45%] lg:w-[35%] sm:mb-0`}>
                    <div className='w-[100%] overflow-hidden'><img className='w-full duration-700 z-1 hover:scale-110' src={item.image} alt={item.description}/></div>
                    <button onClick={index === 0 ? toCoffee : toPastry } className='assistant-text cursor-pointer mt-[5%] border-solid border-[1px] border-white px-[5.5%] py-[2.5%] hover:bg-[#ffffff20] text-white text-[1em] leading-tight sm:mt-[10%] md:text-[1.2em] lg:text-[1.4em]'>{item.text}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Menu