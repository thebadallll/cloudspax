import React from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Immigration Law',
      title: 'Immigration Lawyer - USA 🇺🇸',
      avatar: 'S',
      content: 'CloudSpax transformed my immigration practice! Their YouTube strategy helped me reach thousands of visa applicants. I went from 5 clients per month to over 50 consultations. The content they create perfectly explains complex immigration processes.',
      rating: 5
    },
    {
      id: 2,
      name: 'Quest Canada Immigration',
      title: 'Immigration Consultant - Canada 🇨🇦',
      avatar: 'Q',
      content: 'Working with CloudSpax has been a game-changer for my Canadian immigration consultancy. Their video editing and content strategy specifically for immigration topics helped me become the go-to expert for Express Entry. Highly recommend for any immigration professional.',
      rating: 5
    },
    {
      id: 3,
      name: 'Aussie Visa Solutions',
      title: 'Migration Agent - Australia 🇦🇺',
      avatar: 'A',
      content: 'The CloudSpax team understands the immigration industry like no other. They helped me create content that resonates with skilled workers wanting to migrate to Australia. My consultation bookings increased by 300% in just 6 months.',
      rating: 5
    },
    {
      id: 4,
      name: 'UK Immigration Expert',
      title: 'Immigration Advisor - UK 🇬🇧',
      avatar: 'U',
      content: 'I was struggling to explain UK visa processes on YouTube until CloudSpax stepped in. Their editing and storytelling approach made my content engaging and easy to understand. Now I\'m the top immigration channel for UK visas.',
      rating: 5
    },
    {
      id: 5,
      name: 'European Migration Guide',
      title: 'Immigration Consultant - Germany 🇩🇪',
      avatar: 'E',
      content: 'CloudSpax helped me build my YouTube presence for European immigration. Their content strategy specifically for immigration professionals is unmatched. I now get clients from all over the world seeking European visas.',
      rating: 5
    },
    {
      id: 6,
      name: 'Global Visa Solutions',
      title: 'Immigration Specialist - Multiple Countries 🌍',
      avatar: 'G',
      content: 'As someone who helps clients with visas worldwide, CloudSpax\'s expertise in immigration content marketing is outstanding. They understand the nuances of different countries\' immigration systems and create content that converts viewers into clients.',
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ))
  }

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <h2>IMMIGRATION EXPERTS TESTIMONIALS</h2>
          <p>What immigration professionals worldwide say about our YouTube marketing services</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <Quote size={24} />
              </div>
              
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="client-info">
                  <div className="client-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="client-details">
                    <h4>{testimonial.name}</h4>
                    <span className="client-title">{testimonial.title}</span>
                  </div>
                </div>
                
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta text-center">
          <h3>Join Our Happy Clients</h3>
          <p>Ready to transform your YouTube content and see real results?</p>
          <a href="#contact" className="btn btn-primary btn-large">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
