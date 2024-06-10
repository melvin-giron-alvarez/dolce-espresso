import React, { useEffect } from 'react'
import { eventsIMG } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Events = () => {

    useEffect(() => {
        AOS.init({duration: 700})
    }, [])


  return (
    <div id='events' className='block w-full justify-evenly items-center text-center m-auto py-[14%] sm:py-[6%]'>
        <div className='w-5/6 mx-auto'>
            <h1 data-aos='fade-up' className='alice-regular mx-auto text-center leading-none text-white text-[1.4em] pb-[2%] sm:pb-[1%] md:text-[1.8em] lg:text-[2.3em]'>Our next upcoming event...</h1>
            <h1 data-aos='fade-up' className='alice-regular mx-auto text-center leading-none text-white text-[2em] md:text-[2.5em] lg:text-[3em]'>Baking Class</h1>
            <p data-aos='fade-up' className='assistant-text text-white text-[1em] leading-tight pt-[8%] sm:pt-[6%] md:text-[1.2em] lg:text-[1.4em]'>Come discover the beauty in baking as you learn to craft our Italian Apple Pie with our expert pastry chefs! Whether you’re a beginner or have a desire in becoming a baker, our hands-on baking class will guide you through the process in creating our beloved pastry. </p>
            <p data-aos='fade-up' className='assistant-text text-white text-[1em] leading-tight pt-[6%] sm:pt-[4%] md:text-[1.2em] lg:text-[1.4em]'>This is an amazing opportunity to get the secrets of our traditional Italian pastries, meet fellow baking enthusiasts, and enjoy a delightful coffee to end the day. </p>
            <p data-aos='fade-up' className='assistant-text text-white text-[1em] leading-tight pt-[6%] sm:pt-[4%] md:text-[1.2em] lg:text-[1.4em]'>Space is limited, so be sure to come on time! We would love to have you here!</p>
        </div>
        <div data-aos='fade-up' className='w-full flex flex-wrap mx-auto py-[8%] sm:py-[4%]'>
            <div className='w-full bg-darkbrown assistant-text text-white text-[1em] leading-tight mx-auto p-[6%] sm:w-[60%] md:w-[46%] md:text-[1.2em] md:p-[5%%] lg:text-[1.4em] lg:p-[3%]'>
                <p className='text-[1.1em] py-[2%] md:text-[1.3em] lg:text-[1.5em]'>Schedule</p>
                <p className='py-[2%] text-left'><b>When:</b> September 14<br /><b>Where:</b> Dolce Espresso Baking Room<br /><b>Time:</b> 12:00pm</p>
                <p className='py-[2%]'>No costs needed only your enthusiasm!</p>
            </div>
            {eventsIMG.map((item, index) => (
                <div key={item.id} className={`bg-cover bg-center w-[50%] h-[30vh] ${index <  2 ? 'sm:w-[40%] sm:h-[38vh] md:w-[27%] md:h-[45vh]' : 'sm:w-[30%] sm:h-[38vh] md:w-[50%] md:h-[45vh]'}`} style={{ backgroundImage: `url(${item.image})` }}>
                </div>
            ))}
        </div>
    </div>
)
}

export default Events