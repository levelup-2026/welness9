import React from 'react';
import './TransformationCollage.css';

const TransformationCollage = () => {
  return (
    <section className="transformation-collage">
      <div className="collage-container">
        
        {/* === LEFT COLUMN: Content === */}
        <div className="collage-content">
          <h2 className="collage-headline">
            Unachievable?
          </h2>

          {/* The "We don't think so" Box */}
          <div className="message-box">
            <p className="message-text">
              <strong>We don't think so.</strong> That's why we engineered a scientifically proven method that has helped over <span className="highlight">5,000 men</span> escape the endless cycle of quick fixes. By targeting the true root cause of Erectile Dysfunction and Premature Ejaculation, our approach delivers measurable results in as little as 6 weeks.
            </p>
          </div>

          {/* Arrow pointing to button */}
          <div className="arrow-wrapper">
             <img src="/doodle-arrow.svg" alt="Arrow" className="connector-arrow" />
          </div>

          <div className="cta-wrapper">
            <button className="collage-cta-button">
              Take Free Assessment →
            </button>
          </div>
        </div>

        {/* === RIGHT COLUMN: Visuals === */}
        <div className="collage-visual">
          
          {/* Main Character (Man holding tablet) */}
          <div className="main-character-wrapper">
            <img 
              src="/realprogress.jpg" 
              alt="Successful man showing results" 
              className="main-character-img"
              loading="lazy"
            />
          </div>

          {/* Floating Card 1: Top Left (Man looking at watch) */}
          <div className="float-card card-top-left">
            <img src="/man-waiting.jpg" alt="Man waiting" className="card-img-cover" />
          </div>

          {/* Floating Card 2: Top Right (Text Only - 6 Weeks) */}
          <div className="float-card card-top-right text-card">
            <span className="card-big-text">6 Weeks</span>
          </div>

          {/* Floating Card 3: Bottom Left (Group of men) */}
          <div className="float-card card-bottom-left">
             <img src="/successtories.jpg" alt="Success stories" className="card-img-cover" />
             <div className="card-caption">
                <strong>5,000+</strong><br/>Success Stories
             </div>
          </div>

           {/* Floating Card 4: Bottom Right (Counseling) */}
           <div className="float-card card-bottom-right">
             <img src="/coun celling.jpg" alt="Counseling" className="card-img-cover" />
             <div className="card-caption">
                <strong>100%</strong><br/>Super Natural
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationCollage;
