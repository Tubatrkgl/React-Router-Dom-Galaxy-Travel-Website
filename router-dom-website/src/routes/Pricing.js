import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PricingCards from "../components/PricingCards"
import HeroImage from '../components/HeroImage'
const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading="PRICING" text="Chosee your trip."/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Pricing