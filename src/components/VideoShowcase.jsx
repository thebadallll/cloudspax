import React, { useEffect } from 'react'
import { Play } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import './VideoShowcase.css'

const VideoShowcase = () => {
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
  
  // Load Wistia script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Sample video data with Wistia IDs
  const videos = [
    {
      id: 1,
      wistiaId: 'abcde12345', // Replace with actual Wistia video ID
      thumbnail: 'https://i.ibb.co/VTf4YKR/video-grab1.jpg',
      duration: '0:29',
      title: 'A Million? A Million.',
      type: 'vertical', // 9:16
      domain: 'gbb.com'
    },
    {
      id: 2,
      wistiaId: 'fghij67890', // Replace with actual Wistia video ID
      thumbnail: 'https://i.ibb.co/JR8Y5Fw/video-grab2.jpg',
      duration: '0:25',
      title: 'Breaking Client Success Story',
      type: 'vertical', // 9:16
      domain: 'gbb.com'
    },
    {
      id: 3,
      wistiaId: 'klmno12345', // Replace with actual Wistia video ID
      thumbnail: 'https://i.ibb.co/tpsMWZ7/video-grab3.jpg', 
      duration: '0:29',
      title: 'What? Doc?',
      type: 'vertical', // 9:16
      domain: 'gbb.com'
    },
    {
      id: 4,
      wistiaId: 'pqrst67890', // Replace with actual Wistia video ID
      thumbnail: 'https://i.ibb.co/QJgZB7d/video-grab4.jpg',
      duration: '15:28',
      title: 'Million Users in 5 Days',
      type: 'wide-center', // 16:9
      domain: 'gbb.com'
    },
    {
      id: 5,
      wistiaId: 'uvwxy12345', // Replace with actual Wistia video ID
      thumbnail: 'https://i.ibb.co/ZVjYxTB/video-grab5.jpg',
      duration: '0:27',
      title: 'Acquisition Strategy',
      type: 'vertical', // 9:16
      domain: 'gbb.com'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`video-showcase section ${sectionInView ? 'animate-section' : ''}`}
      id="videos"
    >
      <div className="container video-container">
        <div 
          ref={headingRef} 
          className={`section-header text-center ${headingInView ? 'animate-heading' : ''}`}
          style={{ 
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s cubic-bezier(0.19, 1, 0.22, 1), transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
        >
          <h2>Videos That Grab Attention</h2>
          <p>Compelling content that keeps viewers watching</p>
          <div className="highlight-underline"></div>
        </div>
        
        <div 
          ref={gridRef} 
          className={`video-grid ${gridInView ? 'animate-grid' : ''}`}
        >
          {/* Top row with 2 vertical videos */}
          <div className="top-row">
            {videos.slice(0, 2).map((video, index) => {
              const { ref: cardRef, inView: cardInView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
                delay: 100 + (index * 100),
              });
              
              return (
                <div 
                  key={video.id}
                  ref={cardRef}
                  className={`video-card ${video.type} ${cardInView ? 'animate-card' : ''}`}
                  style={{ 
                    backgroundImage: `url(${video.thumbnail})`,
                    animationDelay: `${index * 0.2}s`
                  }}
                  onClick={() => {
                    // Using Wistia's embed API to open the video in a lightbox
                    if (window.Wistia) {
                      window.Wistia.api.popup({
                        popover: true,
                        videoFoam: true,
                        videoQuality: "hd-only",
                        volume: 1,
                        playerColor: "1e5af0",
                        id: video.wistiaId
                      });
                    }
                  }}
                >
                  <div className="domain-badge">{video.domain}</div>
                  <div className="video-overlay">
                    <button className="video-play-button">
                      <Play fill="#fff" size={24} />
                    </button>
                    <div className="video-info">
                      <div className="video-duration">
                        <div className="time-progress">
                          <div className="progress-bar"></div>
                        </div>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="video-title-overlay">
                    <h4>{video.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom row with 3 videos (vertical, wide-center, vertical) */}
          <div className="bottom-row">
            {videos.slice(2, 5).map((video, index) => {
              const { ref: cardRef, inView: cardInView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
                delay: 300 + (index * 100),
              });
              
              return (
                <div 
                  key={video.id}
                  ref={cardRef}
                  className={`video-card ${video.type} ${cardInView ? 'animate-card' : ''}`}
                  style={{ 
                    backgroundImage: `url(${video.thumbnail})`,
                    animationDelay: `${(index + 2) * 0.2}s`
                  }}
                  onClick={() => {
                    // Using Wistia's embed API to open the video in a lightbox
                    if (window.Wistia) {
                      window.Wistia.api.popup({
                        popover: true,
                        videoFoam: true,
                        videoQuality: "hd-only",
                        volume: 1,
                        playerColor: "1e5af0",
                        id: video.wistiaId
                      });
                    }
                  }}
                >
                  <div className="domain-badge">{video.domain}</div>
                  <div className="video-overlay">
                    <button className="video-play-button">
                      <Play fill="#fff" size={video.type === 'wide-center' ? 30 : 24} />
                    </button>
                    <div className="video-info">
                      <div className="video-duration">
                        <div className="time-progress">
                          <div className="progress-bar"></div>
                        </div>
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="video-title-overlay">
                    <h4>{video.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="video-background-particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </section>
  )
}

export default VideoShowcase
