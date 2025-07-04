import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import VideoShowcase from '../components/VideoShowcase'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <Team />
    </div>
  )
}

export default Home
