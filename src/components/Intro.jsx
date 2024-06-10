import React, { useEffect } from 'react'
import intro1 from '../assets/menu/intro1.png'
import intro2 from '../assets/menu/intro2.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {

  useEffect(() => {
    AOS.init({duration: 700})
}, [])


  return (
    <div className='w-full'>
        <div className='w-full overflow-hidden relative lg:h-[32vh]'>
            <img src={intro1} alt='bread' className='w-full'/>
            <div className='absolute z-0 inset-0 bg-[#24221f5e]'></div>
        </div>
        <h1 data-aos='fade-up' className='alice-regular text-white my-[.6em] md:my-[1em] mx-auto text-center leading-none text-[2em] md:text-[2.5em] lg:text-[3em]'>Menu</h1>
        <div className='w-[90%] lg:w-[85%] items-center mx-auto flex flex-wrap justify-evenly'>
            <div className='w-[80%] md:w-[50%] lg:w-[45%] text-center assistant-text text-white text-[1em] leading-tight md:text-[1.2em] lg:text-[1.4em] '>
                <p data-aos='fade-up' className='pb-[.5em]'>At Dolce Espresso, we offer a variety of artisanal coffees and freshly baked pastries. All crafted with our finest locally sourced ingredients, we pride ourselves in serving all for a delightful experience at our restaurant.</p>
                <p data-aos='fade-up' className='pt-[.5em]'>Indulge in our rich espressos, creamy cappuccinos, and specially served lattes all brewed with high-quality Italian beans. Pair your desired coffee with our tasty pastries as we offer many kinds through the help of our expert bakers. Whether it’s a buttery croissant, a sweet cheesecake, or our classic Italian cannoli, our menu showcases our most served items you can enjoy when you  join us at Dolce Espresso. We will create an unforgettable experience that celebrates the finest rich flavors of Italy.</p>
            </div>
            <img src={intro2} className='mt-[1.3em] w-[80%] md:w-[40%] lg:w-[40%]' />
        </div>
    </div>
  )
}

export default Intro