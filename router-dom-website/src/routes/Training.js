import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TrainingCards from '../components/TrainingCards'
const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINING' text='Pe-Flight & In-Flight Training' />
      <TrainingCards/>
      <Footer />
    </div>
  )
}

export default Training