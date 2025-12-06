import React, { useState, useRef, useEffect } from 'react';
import './MediaFeatures.css';

const LazyIframe = ({ src, title, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="lazy-iframe-container">
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={className}
          loading="lazy"
        />
      ) : (
        <div className="iframe-placeholder">
          <div className="placeholder-content">
            <div className="play-icon">▶</div>
            <p>Loading video...</p>
          </div>
        </div>
      )}
    </div>
  );
};

const MediaFeatures = () => {
  return (
    <section className="media-features">
      <div className="media-features-container">
        
        {/* Grid Layout - Main Video Left, Secondary Videos Right */}
        <div className="media-grid-layout">
          
          {/* Left Column - Main Featured Video (TEDx) */}
          <div className="featured-video-main">
            <div className="video-wrapper primary-video">
              <LazyIframe
                src="https://www.youtube.com/embed/CyYJGb0etjs?start=2"
                title="TEDx Talk"
                className="video-iframe"
              />
            </div>
          </div>

          {/* Right Column - Secondary Videos */}
          <div className="secondary-videos-column">
            
            {/* Instagram Video - Fiitakofficial */}
            <div className="featured-video-secondary">
              <div className="video-wrapper secondary-video">
                <LazyIframe
                  src="https://www.instagram.com/tv/CTPRCrvD7XO/embed"
                  title="FitTak Instagram - Nutritionist Yash Wardhan"
                  className="video-iframe"
                />
              </div>
            </div>

            {/* YouTube Video - Saas Bahu Betiyaan */}
            <div className="featured-video-secondary">
              <div className="video-wrapper secondary-video">
                <LazyIframe
                  src="https://www.youtube.com/embed/1YFI3y5aAes"
                  title="Saas Bahu Betiyaan"
                  className="video-iframe"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaFeatures;
