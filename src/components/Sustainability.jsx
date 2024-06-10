import React, { useEffect } from 'react'
import { sustainabilityIMG } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Sustainability = () => {

  useEffect(() => {
    AOS.init({duration: 700})
}, [])


  return (
    <div className='flex flex-wrap w-[90%] justify-evenly items-center text-center m-auto py-[14%] sm:py-[6%]'>
        <div data-aos='fade-up' className='flex flex-wrap w-[80%] sm:w-[90%] md:w-[48%]'>
            {sustainabilityIMG.map((item, index) => (
                <div key={item.id} className='w-[50%] sm:w-[25%] md:w-[50%]'><img src={item.image} className='w-full h-full'/></div>
            ))}
        </div>

        <div className='w-[80%] items-center md:w-[40%]'>
            <h1 data-aos='fade-up' className='alice-regular mx-auto text-center leading-none text-white text-[2em] mt-[6%] md:mb-[0] md:text-[2.5em] lg:text-[3em]'>Learn More About Our Sustainability Practices.</h1>
            <p data-aos='fade-up' className='assistant-text text-white text-[1em] leading-tight pt-[8%] sm:pt-[6%] md:text-[1.2em] lg:text-[1.4em]'>At Dolce Espresso  we are driven by passion to provide exceptional brews and pastries that cater to your discerning taste.</p>
            <p data-aos='fade-up' className='assistant-text text-white text-[1em] leading-tight pt-[6%] sm:pt-[4%] md:text-[1.2em] lg:text-[1.4em]'>We are a community dedicated to serving all with fresh, locally sourced ingredients and high-quality Italian beans, cultivated with ethical care. Through our partnership with our local farmers, we bring the best of our region directly to your cup and plate. Every sip and bite at Dolce Espresso is infused with the natural flavors of ingredients that are carefully handpicked and expertly crafted.</p>
        </div>
    </div>
  )
}

export default Sustainability