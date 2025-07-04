import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './Gallery.css'

const Gallery = () => {
  // Create refs for scroll animations
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
  
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  // Thumbnail data for both rows
  const thumbnailRows = [
    // First row - moves left (right to left)
    [
      { id: 1, title: 'ChatGPT Integration Guide', category: 'AI Tools', image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-5fa9cd79a6367f8446a5208e4540a493_screen.jpg?ts=1699135222' },
      { id: 2, title: 'Reality of Living in America', category: 'Lifestyle', image: 'https://i.ibb.co/yq4fVLd/reality-america.jpg' },
      { id: 3, title: 'Life & Money Habits', category: 'Finance', image: 'https://i.ibb.co/cCjrsKw/life-money-habits.jpg' },
      { id: 4, title: 'AI Automation Tools', category: 'Technology', image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-5fa9cd79a6367f8446a5208e4540a493_screen.jpg?ts=1699135222' },
      { id: 9, title: 'ChatGPT Integration Guide', category: 'AI Tools', image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-5fa9cd79a6367f8446a5208e4540a493_screen.jpg?ts=1699135222' },
      { id: 10, title: 'Reality of Living in America', category: 'Lifestyle', image: 'https://i.ibb.co/yq4fVLd/reality-america.jpg' },
    ],
    // Second row - moves right (left to right)
    [
      { id: 5, title: 'Python Automation Tester Roadmap', category: 'Coding', image: 'https://i.ibb.co/j3S9WGH/python-tester.jpg' },
      { id: 6, title: 'Business Analyst Interview Tips', category: 'Career', image: 'https://i.ibb.co/0cnFzjk/business-analyst.jpg' },
      { id: 7, title: 'AWS re:Invent 2023', category: 'Cloud', image: 'https://i.ibb.co/xHBr9XH/aws-reinvent.jpg' },
      { id: 8, title: 'Manual Tester Guide', category: 'QA', image: 'https://i.ibb.co/xLw3xpJ/manual-tester.jpg' },
      { id: 11, title: 'Python Automation Tester Roadmap', category: 'Coding', image: 'https://i.ibb.co/j3S9WGH/python-tester.jpg' },
      { id: 12, title: 'Business Analyst Interview Tips', category: 'Career', image: 'https://i.ibb.co/0cnFzjk/business-analyst.jpg' },
    ]
  ];

  // Generate backup colors for thumbnails that might fail to load
  const generateThumbnailColor = (index) => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    return colors[index % colors.length];
  };

  return (
    <section 
      ref={sectionRef}
      className={`gallery section ${sectionInView ? 'animate-section' : ''}`}
      id="gallery"
    >
      <div className="container">
        {/* Match Services section heading style */}
        <div 
          ref={headingRef} 
          className={`section-header text-center ${headingInView ? 'animate-heading' : ''}`}
          style={{ 
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
        >
          <h2>CONTENT PORTFOLIO</h2>
          <p>High-converting thumbnails designed for maximum engagement</p>
        </div>

        <div 
          ref={contentRef}
          className={`gallery-content ${contentInView ? 'animate-content' : ''}`}
        >
          <div className="thumbnails-wrapper">
            {/* First row - Moving left */}
            <div className="thumbnails-row row-left">
              {/* Original thumbnails */}
              {thumbnailRows[0].map((item) => (
                <div key={`original-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set 1 for continuous scrolling */}
              {thumbnailRows[0].map((item) => (
                <div key={`duplicate1-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set 2 for seamless loop */}
              {thumbnailRows[0].map((item) => (
                <div key={`duplicate2-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - Moving right */}
            <div className="thumbnails-row row-right">
              {/* Original thumbnails */}
              {thumbnailRows[1].map((item) => (
                <div key={`original-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set 1 for continuous scrolling */}
              {thumbnailRows[1].map((item) => (
                <div key={`duplicate1-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set 2 for seamless loop */}
              {thumbnailRows[1].map((item) => (
                <div key={`duplicate2-${item.id}`} className="thumbnail-card">
                  <div 
                    className="thumbnail-image"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="thumbnail-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Match Services section CTA style */}
        <div 
          ref={ctaRef} 
          className={`gallery-cta text-center ${ctaInView ? 'animate-cta' : ''}`}
          style={{ opacity: ctaInView ? 1 : 0, transform: ctaInView ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <a href="/portfolio" className="btn btn-primary btn-large cta-button">
            View More Content <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Background particles for visual interest */}
      <div className="gallery-background-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
