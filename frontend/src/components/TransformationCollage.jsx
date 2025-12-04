import React from 'react';
import './TransformationCollage.css';

const TransformationCollage = () => {
  return (
    <section className="transformation-collage">
      <div className="collage-container">
        
        {/* Left Column - Text Content */}
        <div className="collage-content">
          <h2 className="collage-headline">
            Unachievable?
          </h2>
          
          <p className="collage-description">
            We don't think so. That's why we engineered a scientifically proven method that has helped over{' '}
            <span className="highlight-text">5,000 men</span>{' '}
            escape the endless cycle of quick fixes.
          </p>

          <div className="cta-wrapper">
            <button className="collage-cta-button">
              Take Free Assessment →
            </button>
            <img 
              src="/doodle-arrow.svg" 
              className="doodle-arrow" 
              alt=""
              aria-hidden="true"
            />
          </div>

          <div className="root-cause-badge">
            <span className="badge-label">ROOT CAUSE APPROACH</span>
            <p className="badge-text">
              By targeting the true root cause of Erectile Dysfunction and Premature Ejaculation, 
              our approach delivers measurable results that last—not just temporary relief.
            </p>
          </div>
        </div>

        {/* Right Column - Visual Collage */}
        <div className="collage-visual">
          
          {/* Main Character Image */}
          <div className="main-character">
            <img 
              src="/unachheivable.png" 
              alt="Man walking confidently" 
              className="character-image"
            />
          </div>

          {/* Stat Box 1 - Top Right */}
          <div className="stat-box stat-box-1">
            <img src="/doodle-box.svg" className="stat-box-bg" alt="" aria-hidden="true" />
            <div className="stat-box-content">
              <span className="stat-number">6 Weeks</span>
              <span className="stat-label">To Measurable Results</span>
            </div>
          </div>

          {/* Stat Box 2 - Bottom Left */}
          <div className="stat-box stat-box-2">
            <img src="/doodle-box.svg" className="stat-box-bg" alt="" aria-hidden="true" />
            <div className="stat-box-content">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Success Stories</span>
            </div>
          </div>

          {/* Stat Box 3 - Bottom Right */}
          <div className="stat-box stat-box-3">
            <img src="/doodle-box.svg" className="stat-box-bg" alt="" aria-hidden="true" />
            <div className="stat-box-content">
              <span className="stat-number">100%</span>
              <span className="stat-label">Natural Method</span>
            </div>
          </div>

          {/* Decorative Icons */}
          <img src="/heart-pulse-svgrepo-com.svg" className="doodle-star star-1" alt="" aria-hidden="true" />
          <img src="/stopwatch-svgrepo-com.svg" className="doodle-star star-2" alt="" aria-hidden="true" />
          <img src="/arm-muscles-silhouette-svgrepo-com.svg" className="doodle-star star-3" alt="" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
};

export default TransformationCollage;
