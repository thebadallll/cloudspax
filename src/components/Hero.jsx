import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  const clientLogos = [
    { 
      name: 'Immigration Expert CA', 
      subscribers: '25k+ Subscribers',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      flag: '🇨🇦'
    },
    { 
      name: 'Visa Journey USA', 
      subscribers: '42k+ Subscribers',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      flag: '🇺🇸'
    },
    { 
      name: 'Aussie Immigration', 
      subscribers: '18k+ Subscribers',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e83d2e?w=150&h=150&fit=crop&crop=face',
      flag: '🇦🇺'
    },
    { 
      name: 'UK Visa Guide', 
      subscribers: '12k+ Subscribers',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      flag: '🇬🇧'
    },
    { 
      name: 'Europe Migration', 
      subscribers: '8k+ Subscribers',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
      flag: '🇩🇪'
    }
  ]

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`} id="home">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              IMMIGRATION EXPERTS ONLY
            </div>
            
            <h1 className="hero-title">
              <p>Turn Your Immigration Expertise Into</p> 
              <span className="gradient-text">PAYING CLIENTS</span>
            </h1>
            
            <p className="hero-description">
              We help immigration consultants and lawyers in USA, Canada, Australia & other countries 
              become the #1 trusted expert on YouTube and convert viewers into high-paying clients.
            </p>
            
            <div className="hero-actions">
              <a href="/contact" className="btn btn-large">
                Get Immigration Clients
              </a>
            </div>
          </div>
        </div>
        
        <div className="client-showcase">
          <div className="client-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-avatar">
                  <img src={client.image} alt={client.name} />
                  <span className="country-flag">{client.flag}</span>
                </div>
                <div className="client-info">
                  <h4>{client.name}</h4>
                  <span className="subscribers" data-text={client.subscribers}>{client.subscribers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
