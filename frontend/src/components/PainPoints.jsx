import React from 'react';
import './PainPoints.css';

const PainPoints = () => {
  return (
    <section id="pain-points" className="pain-points-section">
      {/* Lightweight decorative background */}
      <div className="pain-bg-simple" aria-hidden="true" />

      <div className="pain-points-container">
        {/* Section Header */}
        <div className="pain-header">
          <h2 className="pain-title">
            <span className="pain-highlight-container">
              Are you <span className="highlight-blue">also?</span>
              <svg className="pain-title-underline" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3,8 Q75,3 150,8 T297,8" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Pain Points Cards Grid */}
        <div className="pain-points-grid">
          {/* Connecting Doodles - Desktop only */}
          <svg className="pain-connector connector-1-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,20 100,50 T190,50" stroke="#93C5FD" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <circle cx="100" cy="50" r="4" fill="#60A5FA" opacity="0.8" />
          </svg>
          
          <svg className="pain-connector connector-2-3" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,80 100,50 T190,50" stroke="#FED7AA" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <path d="M95,48 L100,50 L95,52" stroke="#F97316" strokeWidth="2" fill="none" />
          </svg>

          {/* Card 1 - Tired of temporary fixes */}
          <div className="pain-card pain-card-1">
            <div className="pain-card-doodle pain-doodle-1">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="35" stroke="#FEF3C7" strokeWidth="3" strokeDasharray="5,5" opacity="0.6" />
                <path d="M30,70 Q50,40 70,70" stroke="#FDE047" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="pain-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/tiredoftep.png`}
                alt="Tired of temporary fixes"
                className="pain-svg"
                loading="lazy"
              />
            </div>
            <div className="pain-content">
              <h3 className="pain-card-title">Tired of<br />temporary fixes?</h3>
            </div>
          </div>

          {/* Card 2 - Sick of the anxiety */}
          <div className="pain-card pain-card-2">
            <div className="pain-card-doodle pain-doodle-2">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" stroke="#DBEAFE" strokeWidth="3" strokeDasharray="8,4" rx="10" opacity="0.5" />
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="pain-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/anxity.png`}
                alt="Sick of anxiety that ruins intimacy"
                className="pain-svg"
                loading="lazy"
              />
            </div>
            <div className="pain-content">
              <h3 className="pain-card-title">Sick of the anxiety<br />that ruins intimacy?</h3>
            </div>
          </div>

          {/* Card 3 - Frustrated by programs that deliver disappointment */}
          <div className="pain-card pain-card-3">
            <div className="pain-card-doodle pain-doodle-3">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,80 Q30,20 50,50 Q70,80 80,20" stroke="#FEF3C7" strokeWidth="3" fill="none" opacity="0.5" />
                <circle cx="50" cy="50" r="8" fill="#FCD34D" opacity="0.6" />
              </svg>
            </div>
            <div className="pain-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/disapointment.png`}
                alt="Frustrated by programs that deliver disappointment"
                className="pain-svg"
                loading="lazy"
              />
            </div>
            <div className="pain-content">
              <h3 className="pain-card-title">Frustrated by programs<br />that deliver disappointment?</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
