import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'USA Immigration Law Firm',
      description: 'Helped US immigration lawyers grow from 2K to 45K subscribers, generating 200+ consultation leads monthly',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
      category: 'USA 🇺🇸',
      results: ['2250% subscriber growth', '200+ monthly consultations', '$500K+ revenue increase']
    },
    {
      id: 2,
      title: 'Quest Canada Immigration',
      description: 'Canadian immigration consultant achieving 25K subscribers with Express Entry content',
      image: 'https://images.unsplash.com/photo-1590736969955-11918a12e2f3?w=400&h=300&fit=crop',
      category: 'Canada 🇨🇦',
      results: ['25K+ subscribers', '150% lead increase', 'Top Express Entry channel']
    },
    {
      id: 3,
      title: 'Australia Migration Services',
      description: 'Australian migration agent becoming #1 skilled migration resource on YouTube',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      category: 'Australia 🇦🇺',
      results: ['18K subscribers', '300% client increase', '#1 skilled migration channel']
    },
    {
      id: 4,
      title: 'UK Immigration Expert',
      description: 'UK immigration advisor building authority with Skilled Worker visa content',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      category: 'UK 🇬🇧',
      results: ['12K+ subscribers', 'Viral visa guides', '400% consultation bookings']
    },
    {
      id: 5,
      title: 'European Immigration Network',
      description: 'Multi-country European immigration services expanding through YouTube',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      category: 'Europe 🇪🇺',
      results: ['35K+ network reach', '5 country expansion', 'Multi-lingual content']
    },
    {
      id: 6,
      title: 'Global Student Visa Services',
      description: 'International education consultants helping students worldwide',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
      category: 'Student Visas 🎓',
      results: ['50K+ student applications', '15 university partnerships', 'Global reach']
    }
  ]

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <div className="container">
          <div className="portfolio-header">
            <h1>Immigration Success <span className="gradient-text">Stories</span></h1>
            <p>Discover how we've helped immigration professionals worldwide transform their YouTube presence into thriving client acquisition systems</p>
          </div>
        </div>
      </div>

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{item.category}</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-results">
                    <h4>Results:</h4>
                    <ul>
                      {item.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
