'use client'

import React from 'react'
import Hero1 from '../Components/Hero1'
import Abs from '../Components/Abs'
import Footer from '../Components/Footer'
import VisionMission from '../Components/VisionMission'
import Navbar from '../Components/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Hero1/>
        <Abs/>
        <VisionMission/>
        <Footer/>
        
    </div>
  )
}

export default page