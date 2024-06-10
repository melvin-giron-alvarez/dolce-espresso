import { useState, useEffect } from 'react'
import { ReactTyped } from "react-typed";
import background1 from '../assets/background1.jpg'
import background2 from '../assets/background2.png'
import background3 from '../assets/background3.jpg'
import background4 from '../assets/background4.jpg'
import background5 from '../assets/background5.jpg'
import background6 from '../assets/background6.png'
import background7 from '../assets/background7.jpg'
import background8 from '../assets/background8.jpg'

const bgIMG = [
    background1, background2,
    background3, background4,
    background5, background6,
    background7, background8
];


const Background = () => {

    const [bgAnimation, setbgAnimation] = useState(0);

    const toMenu = () => {
        window.location.href = '/menu';
    }

    useEffect (() => {
        const interval = setInterval(() => {
            setbgAnimation((prevIndex) => (prevIndex + 1 ) % bgIMG.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
            <div id='home' className="w-full mb-[2%] h-screen overflow-hidden">
                {bgIMG.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute z-[-10] inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === bgAnimation ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url(${image})` }}
                    >
                    </div>
                ))}
                    <div className="absolute z-0 inset-0 bg-[#24221f5e] flex items-center justify-center">
                        <div className='block text-center w-[95%] sm:pt-[3em]'>
                            <h1 className='font-[castle] w-full leading-[.8em] text-pink font-bold text-center text-[3.5em] pb-[20px] sm:text-[5em] md:text-[7.5em] lg:text-[9em]'>DOLCE<br />ESPRESSO</h1>
                            <p className='alice-regular text-white text-[1.2em] leading-none pb-[20px] sm:text-[2em]'><ReactTyped strings={["Brewed to Perfection for a Sweet Escape."]} typeSpeed={105} backSpeed={12}loop/></p>
                            <button onClick={toMenu} className="assistant-text mt-[1.3em] cursor-pointer text-white text-[.89em] border-solid border-[1px] border-white px-[1.5%] py-[.8%] hover:bg-[#ffffff20]">Browse Menu</button>
                        </div>
                    </div>
            </div>
)
}

export default Background