import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">CloudSpax</span>
            </div>
            <p className="footer-description">
              We help immigration consultants and lawyers in USA, Canada, Australia & other countries 
              become the #1 trusted experts on YouTube and convert viewers into paying clients.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>hello@cloudspax.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Remote Team, Worldwide</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Immigration Services</h4>
            <ul className="footer-links">
              <li><a href="/immigration-video-editing">Immigration Video Editing</a></li>
              <li><a href="/visa-guide-thumbnails">Visa Guide Thumbnails</a></li>
              <li><a href="/immigration-seo">Immigration SEO</a></li>
              <li><a href="/client-conversion">Client Conversion</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Countries We Serve</h4>
            <ul className="footer-links">
              <li><a href="/usa-immigration-marketing">🇺🇸 USA Immigration</a></li>
              <li><a href="/canada-immigration-marketing">🇨🇦 Canada Immigration</a></li>
              <li><a href="/australia-immigration-marketing">🇦🇺 Australia Immigration</a></li>
              <li><a href="/uk-immigration-marketing">🇬🇧 UK Immigration</a></li>
              <li><a href="/europe-immigration-marketing">🇪🇺 Europe Immigration</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="/immigration-blog">Immigration Blog</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/visa-guides">Visa Guides</a></li>
              <li><a href="/consultation">Free Consultation</a></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h4>Immigration Marketing Newsletter</h4>
            <p>Get exclusive immigration marketing tips and client conversion strategies.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-btn">
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} All rights reserved || CloudSpax</p>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100073667690196&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/thebadall?igsh=MTQxZmdkbmo4OXQ2dQ==" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/badal-vishwakarma-a474a91b1/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Process Plans Section */}
        <div className="process-plans">
          <div className="section-header text-center">
            <h2>Who We Help</h2>
            <p>Tailored solutions for different stages of your YouTube journey</p>
          </div>

          <div className="plans-grid">
            <div className="plan-card">
              <h3>Haven't Started Yet</h3>
              <div className="process-list">
                <h4>Process</h4>
                <ul>
                  <li>Competitor Analysis</li>
                  <li>Channel Setup</li>
                  <li>Content Strategy</li>
                  <li>Post Production</li>
                  <li>Getting Leads from Content</li>
                </ul>
              </div>
              <a href="/contact" className="btn btn-secondary">Choose Plan</a>
            </div>

            <div className="plan-card featured">
              <h3>Struggling to Grow</h3>
              <div className="process-list">
                <h4>Process</h4>
                <ul>
                  <li>Reoptimize YouTube channel</li>
                  <li>Refine Content Strategy</li>
                  <li>Post Production</li>
                  <li>Getting Traffic</li>
                  <li>Getting ROI From Content</li>
                </ul>
              </div>
              <a href="/contact" className="btn btn-primary">Choose Plan</a>
            </div>

            <div className="plan-card">
              <h3>No Leads/Clients</h3>
              <div className="process-list">
                <h4>Process</h4>
                <ul>
                  <li>Getting Decent View But Not getting Leads from it</li>
                  <li>Refine Content Strategy</li>
                  <li>Post Production</li>
                  <li>Start getting leads</li>
                </ul>
              </div>
              <a href="/contact" className="btn btn-secondary">Choose Plan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
