import React from 'react'
import Hero from './Hero/Hero'
import Service from './Service/Service'
import Testimonial from './Testimonial/Testimonial'
import Number from './Number/Number'
import Client from './Client/Client'
import Technology from './Technology/Technology'
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
   <Hero/>
   <Service/>
   <Testimonial/>
   <Number/>
   <Client/>
   <Technology/>
   <Footer />
    </>
  )
  
}

export default Home
