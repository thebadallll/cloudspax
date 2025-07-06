import React, { useState } from 'react'
import { Star, PlayCircle, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Immigration Law',
      title: 'Immigration Lawyer - USA 🇺🇸',
      avatar: 'S',
      videoUrl: 'https://example.com/testimonial1.mp4',
      thumbnail: '/testimonials/sarah-thumb.jpg',
      content: 'CloudSpax transformed my immigration law practice. Their video marketing expertise helped me reach thousands of potential clients, and their understanding of immigration content is exceptional.',
      duration: '1:45',
      rating: 5
    },
    {
      id: 2,
      name: 'Quest Canada Immigration',
      title: 'Immigration Consultant - Canada 🇨🇦',
      avatar: 'Q',
      videoUrl: 'https://example.com/testimonial2.mp4',
      thumbnail: '/testimonials/quest-thumb.jpg',
      content: 'Working with CloudSpax has been a game-changer for my Canadian immigration consultancy. Their video editing and content strategy specifically for immigration topics helped me become the go-to expert for Express Entry.',
      duration: '2:10',
      rating: 5
    },
    {
      id: 3,
      name: 'Aussie Visa Solutions',
      title: 'Migration Agent - Australia 🇦🇺',
      avatar: 'A',
      videoUrl: 'https://example.com/testimonial3.mp4',
      thumbnail: '/testimonials/aussie-thumb.jpg',
      content: 'The CloudSpax team understands the immigration industry like no other. They helped me create content that resonates with skilled workers wanting to migrate to Australia. My consultation bookings increased by 300%.',
      duration: '1:55',
      rating: 5
    },
    {
      id: 4,
      name: 'UK Immigration Expert',
      title: 'Immigration Advisor - UK 🇬🇧',
      avatar: 'U',
      videoUrl: 'https://example.com/testimonial4.mp4',
      thumbnail: '/testimonials/uk-thumb.jpg',
      content: 'I was struggling to explain UK visa processes on YouTube until CloudSpax stepped in. Their editing and storytelling approach made my content engaging and easy to understand. Now I\'m the top immigration channel for UK visas.',
      duration: '2:30',
      rating: 5
    },
    {
      id: 5,
      name: 'European Migration Guide',
      title: 'Immigration Consultant - Germany 🇩🇪',
      avatar: 'E',
      videoUrl: 'https://example.com/testimonial5.mp4',
      thumbnail: '/testimonials/europe-thumb.jpg',
      content: 'CloudSpax helped me build my YouTube presence for European immigration. Their content strategy specifically for immigration professionals is unmatched. I now get clients from all over the world seeking European visas.',
      duration: '2:15',
      rating: 5
    },
    {
      id: 6,
      name: 'Global Visa Solutions',
      title: 'Immigration Specialist - Multiple Countries 🌍',
      avatar: 'G',
      videoUrl: 'https://example.com/testimonial6.mp4',
      thumbnail: '/testimonials/global-thumb.jpg',
      content: 'As someone who helps clients with visas worldwide, CloudSpax\'s expertise in immigration content marketing is outstanding. They understand the nuances of different countries\' immigration systems and create content that converts.',
      duration: '1:50',
      rating: 5
    }
  ]

  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId);
    // Here you would typically open a modal or video player
    console.log(`Playing video ${videoId}`);
  };

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
              <div className="testimonial-video-container">
                <img 
                  src={testimonial.thumbnail} 
                  alt={`${testimonial.name} testimonial`}
                  className="testimonial-thumbnail"
                />
                <div 
                  className="play-button"
                  onClick={() => handleVideoClick(testimonial.id)}
                >
                  <PlayCircle size={32} />
                </div>
                <div className="video-duration">{testimonial.duration}</div>
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
