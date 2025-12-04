import React from 'react';
import './MediaFeatures.css';

const MediaFeatures = () => {
  return (
    <section className="media-features">
      <div className="media-features-container">
        
        {/* Grid Layout - Main Video Left, Secondary Videos Right */}
        <div className="media-grid-layout">
          
          {/* Left Column - Main Featured Video (TEDx) */}
          <div className="featured-video-main">
            <div className="video-wrapper primary-video">
              <iframe
                src="https://www.youtube.com/embed/CyYJGb0etjs?start=2"
                title="TEDx Talk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Secondary Videos */}
          <div className="secondary-videos-column">
            
            {/* Instagram Video - Fiitakofficial */}
            <div className="featured-video-secondary">
              <div className="video-wrapper secondary-video">
                <iframe
                  src="https://www.instagram.com/tv/CTPRCrvD7XO/embed"
                  title="FitTak Instagram - Nutritionist Yash Wardhan"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            </div>

            {/* YouTube Video - Saas Bahu Betiyaan */}
            <div className="featured-video-secondary">
              <div className="video-wrapper secondary-video">
                <iframe
                  src="https://www.youtube.com/embed/1YFI3y5aAes"
                  title="Saas Bahu Betiyaan"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaFeatures;
