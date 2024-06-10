import React from 'react'
import { Intro, Bread, Coffee, Pastry, Footer } from '../components'

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
        <Intro />
        <Bread />
        <Coffee />
        <Pastry />
        <Footer />
    </div>
)
}

export default Home