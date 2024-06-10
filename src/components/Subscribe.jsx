import React, { useEffect } from 'react'
import { useState } from 'react';
import { db, collection, addDoc } from'../firebase';
import AOS from 'aos';
import 'aos/dist/aos.css'



const Subscribe = () => {

  useEffect(() => {
    AOS.init({duration: 700})
}, [])

    const [subscribe, setSubscribe] = useState('');

    const handleSubscribed = async (e) => {
        e.preventDefault();
    
        try {
            await addDoc(collection(db, 'subscriptions'), {
            subscribe: subscribe,
          });
            alert('You have subscribed!');
        } catch (error) {
            alert(error.message);
        }
    
        setSubscribe('');
      };

  return (
    <div data-aos='fade-up' className='w-[90%] flex flex-wrap mx-auto py-[8%] text-center sm:py-[2%] md:py-[1%]'>
        <div className='w-full'>
            <h1 className='w-5/6 mx-auto alice-regular text-white leading-none text-[1.9em] md:text-[1.8em] lg:text-[2.1em]'>Subscribe to our newsletter</h1>
            <p  className='w-[90%] assistant-text leading-tight text-white mx-auto py-[.6em] text-[.8em]'>Receive updates, exclusive deals, and information on our upcoming events by subscribing.</p>
        </div>
        <form onSubmit={handleSubscribed} className='flex flex-wrap w-[80%] sm:w-[70%] md:w-[50%] mx-auto text-white assistant-text leading-tight my-[1.5em] '>
            <input placeholder='Enter your email' type='email' value={subscribe} onChange={(e) => setSubscribe(e.target.value)} className='w-full tracking-wide mx-auto sm:w-[70%] py-[.5em] px-[.7em] border-2 border-[#72665D] outline-none bg-[transparent]' required />
            <button type='submit' className='w-full sm:w-[30%] py-[.8em] px-[.9em] text-center m-auto bg-[#72665D] border-2 border-[#72665D] text-[.85em] hover:bg-footer tracking-wide'>Subscribe</button>
        </form>
    </div>
)
}

export default Subscribe