import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Award } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      service: ''
    })
  }

  const services = [
    'Immigration Content Strategy',
    'Immigration Video Production',
    'Client Conversion System',
    'Visa Guide Creation',
    'Immigration Thumbnail Design',
    'Immigration SEO Optimization'
  ]

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="contact-header">
            <h1>Get Immigration <span className="gradient-text">Clients</span></h1>
            <p>Ready to transform your immigration practice? Let's discuss your YouTube strategy and turn your viewers into high-paying clients from USA, Canada, Australia & beyond.</p>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <h3>Let's Start a Conversation</h3>
                <p>We're here to help you every step of the way. From strategy to execution, our team is ready to make your YouTube dreams a reality.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <Mail size={20} />
                    <div>
                      <h4>Email Us</h4>
                      <p>hello@cloudspax.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <Phone size={20} />
                    <div>
                      <h4>Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <MapPin size={20} />
                    <div>
                      <h4>Location</h4>
                      <p>Remote Team, Worldwide</p>
                    </div>
                  </div>
                </div>

                <div className="contact-features">
                  <div className="feature-item">
                    <Clock size={16} />
                    <span>24/7 Support</span>
                  </div>
                  <div className="feature-item">
                    <Award size={16} />
                    <span>Expert Team</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company/Channel Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or channel name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
