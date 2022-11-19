import React from 'react'
import { Events } from '../components/Events'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Events />
      <Footer />
    </div>
  )
}
