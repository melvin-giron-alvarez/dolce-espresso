import React from 'react'
import { Background, About, Menu, Sustainability, Events, Contact, Reviews, Reservation, Subscribe, Footer } from '../components';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {

    const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <div>
        <Background />
        <About />
        <Menu />
        <Sustainability />
        <Events />
        <Contact />
        <Reviews />
        <Reservation />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home