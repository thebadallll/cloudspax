import React from 'react'
import { Users, Video, Globe, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Services.css'

const Services = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });
  
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });
  
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });
  
  const services = [
    {
      icon: <Users size={48} className="service-icon-svg" />,
      title: 'Immigration Content Strategy',
      description: 'We create targeted YouTube strategies specifically for immigration consultants and lawyers to attract clients from USA, Canada, Australia and other countries seeking visa and immigration services.',
      link: '/service-single/immigration-content-strategy'
    },
    {
      icon: <Video size={48} className="service-icon-svg" />,
      title: 'Immigration Video Production',
      description: 'From visa process explanations to country-specific guides, we handle everything—research, scripts, thumbnails, editing, and SEO for immigration-focused content.',
      link: '/service-single/immigration-video-production'
    },
    {
      icon: <Globe size={48} className="service-icon-svg" />,
      title: 'Client Conversion System',
      description: 'We help convert your YouTube viewers into paying immigration clients through proven funnels, lead magnets, and consultation booking systems.',
      link: '/service-single/client-conversion'
    }
  ]

  // Add a useEffect to make sure the CTA button is visible after a delay
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const button = document.querySelector('.cta-button');
      if (button) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`services section ${sectionInView ? 'animate-section' : ''}`} 
      id="services"
    >
      <div className="container">
        <div 
          ref={headingRef} 
          className={`section-header text-center ${headingInView ? 'animate-heading' : ''}`}
          style={{ 
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
        >
          <h2>IMMIGRATION SERVICES WE PROVIDE</h2>
          <p>Specialized YouTube marketing solutions for immigration professionals worldwide</p>
        </div>
        
        <div 
          ref={gridRef} 
          className={`services-grid ${gridInView ? 'animate-grid' : ''}`}
        >
          {services.map((service, index) => {
            // Each card needs its own ref hook
            const { ref: cardRef, inView: cardInView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
              delay: 100,
            });
            
            return (
              <div 
                key={index} 
                ref={cardRef} 
                className={`service-card ${cardInView ? 'animate-card' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="service-icon">
                  {service.icon}
                  <div className="service-icon-pulse"></div>
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                
                <p className="service-description">
                  {service.description}
                </p>
                
                <a href={service.link} className="service-link">
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
        
        <div 
          ref={ctaRef} 
          className={`services-cta text-center ${ctaInView ? 'animate-cta' : ''}`}
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <h3 className="cta-heading">Ready to Transform Your YouTube Channel?</h3>
          <p className="cta-text">Let's discuss how we can help you turn views into valuable customers</p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-large cta-button"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            Get Started Today
            <ArrowRight size={20} />
          </a>
          <div className="cta-background-effect"></div>
        </div>
      </div>
      <div className="services-background-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  )
}

export default Services
