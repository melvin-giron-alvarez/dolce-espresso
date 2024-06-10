import React from 'react'
import { navLinks } from '../constants'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const pathme = useLocation();
    
    const [toggle, setToggle] = useState(false)
    const handleMenu = () => {
        setToggle(!toggle)
    }

    const [slide, setSlide] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          var viewportWidth = window.innerWidth;
    
          if (viewportWidth > 450) {
            if (window.scrollY > 20) {
              setSlide(true);
            } else {
              setSlide(false);
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
    <div className='w-full'>
        <nav className={`w-full fixed top-0 z-[1000] justify-center mx-auto py-[1.3em] ${slide ? 'bg-[#24221f64] backdrop-blur-sm' : 'bg-transparent'} transition-colors duration-300 hidden sm:flex`}>
            <ul className='list-none w-3/4 justify-evenly flex'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`assistant-text cursor-pointer text-[.89em] p-1 tracking-wide text-white hover:font-normal`}>
                        <a href={`${nav.id}`}>{nav.text}</a>
                    </li>
                ))}
            </ul>
        </nav>

        <div className='absolute z-[12] top-[1em] right-[1em] sm:hidden' onClick={handleMenu}>
            {toggle ? <IoCloseSharp className='text-white text-[3em]'/> : <IoMenuSharp className='text-white text-[3em]'/>}
        </div>
        <div className={`absolute z-10 top-0 left-0 w-full transition-all duration-300 ease-in-out ${toggle ? `animate-slideDown` : `animate-slideUp`}`}>
            {toggle && (
                <ul className='list-none w-full flex flex-col justify-evenly items-center bg-[#24221f64] backdrop-blur-sm'>
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`assistant-text text-center cursor-pointer text-[.95em] text-white p-1 tracking-wide hover:font-normal pt-[1.5em] ${index === navLinks.length - 1 ? 'pb-[1.5em]' : 'pb-[0]'}`}>
                            <a href={`${nav.id}`}>{nav.text}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  )
}

export default Navbar