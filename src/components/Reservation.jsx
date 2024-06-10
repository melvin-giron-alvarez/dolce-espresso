import React from 'react';
import { useState, useEffect } from 'react';
import { reservationIMG } from '../constants';
import reservation1 from '../assets/reservation1.jpg'
import reservation2 from '../assets/reservation2.jpg'
import reservation3 from '../assets/reservation3.jpg'
import { db, collection, addDoc } from '../firebase';
import AOS from 'aos';
import 'aos/dist/aos.css'


const rIMG = [
    reservation1, reservation2, reservation3
]


const Reservation = () => {

    useEffect(() => {
    AOS.init({duration: 700})
}, [])

    const [reservationIndex, setReservationIndex] = useState(0);

    useEffect (() => {
        const interval = setInterval(() => {
            setReservationIndex((prevIndex) => (prevIndex + 1 ) % rIMG.length);
        },4000);

        return () => clearInterval(interval);
    }, []);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            await addDoc(collection(db, 'reservations'), {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            guests: guests
          });
            alert('Reservation request has been sent!');
        } catch (error) {
            alert(error.message);
        }
    
        setName('');
        setEmail('');
        setPhone('');
        setDate('');
        setTime('');
        setGuests('');
      };


  return (
    <div data-aos='fade-up' className='block w-[75%] md:w-5/6 md:flex flex-wrapoverflow-hidden justify-evenly text-center mx-auto my-[14%] sm:my-[8%] bg-darkbrown'>
        <div className='relative mx-auto w-full md:w-[50%] h-[56vh]'>
        {rIMG.map((image, index) => (
        <div key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out w-full h-[56vh] ${index === reservationIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}></div>
        ))}
        </div>
        <div className='py-[15%] md:py-0 m-auto md:w-[50%]'>
            <h1 className='alice-regular w-5/6 mx-auto text-center leading-none text-white text-[1.8em] pb-[5%] sm:pb-[5%] md:text-[1.7em] lg:text-[2em]'>Make a Reservation</h1>
            <form onSubmit={handleSubmit} className='assistant-text leading-tight text-white cursor-pointer text-[.9em] flex flex-wrap w-5/6 mx-auto md:text-[1em] lg:text-[1.2em] outline-none justify-between'>
                <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} className='w-full input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%] bg-[transparent]'  required/>
                <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full sm:w-[48%] input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%] bg-[transparent]' required/>
                <input placeholder='Phone' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full sm:w-[48%] input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%]' required />
                <input placeholder='Date' type="date" value={date} onChange={(e) => setDate(e.target.value)} className='w-[30%] input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%]' required/>
                <input placeholder='Time' type="time" value={time} onChange={(e) => setTime(e.target.value)} className='w-[30%] input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%]' required/>
                <input placeholder='Guests' type="number" value={guests} onChange={(e) => setGuests(e.target.value)} className='w-[30%] input-repeats sm:pt-[2.5%] sm:pb-[1.5%] sm:mt-[1.5%] sm:mb-[2.5%]' required/>
                <button type='submit' className='w-[60%] sm:w-[50%] bg-[#82746A] mx-auto mt-[8%] sm:mt-[4%] p-[3%] text-[.8em] hover:bg-footer'>Request Reservation</button>
            </form>
        </div>
    </div>
  )
}

export default Reservation