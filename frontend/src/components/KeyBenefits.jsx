import React from 'react';
import './KeyBenefits.css';

const KeyBenefits = () => {
  return (
    <section className="key-benefits-section">
      {/* Background decorative elements */}
      <div className="benefits-bg-decoration benefits-bg-left">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" stroke="#E0F2FE" strokeWidth="4" strokeDasharray="8,8" opacity="0.4" />
          <path d="M50,150 Q100,80 150,150 T250,150" stroke="#93C5FD" strokeWidth="3" fill="none" opacity="0.5" />
        </svg>
      </div>
      <div className="benefits-bg-decoration benefits-bg-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,-50C45,-40,60,-30,70,-15C80,0,85,20,82,35C79,50,68,60,55,65C42,70,27,70,15,62C3,54,-5,38,-8,22C-11,6,-9,-10,-2,-23C5,-36,15,-46,30,-50Z" fill="#FED7AA" opacity="0.3" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="key-benefits-container">
        {/* Section Header */}
        <div className="benefits-header">
          <h2 className="benefits-title">
            <span className="benefits-highlight-container">
              Your Path to Wellness
              <svg className="benefits-title-underline" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3,8 Q75,3 150,8 T297,8" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p className="benefits-subtitle">
            Experience transformative health outcomes through our comprehensive approach
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="key-benefits-grid">
          {/* Connecting Doodles - Desktop only */}
          <svg className="benefits-connector connector-1-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,20 100,50 T190,50" stroke="#93C5FD" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <circle cx="100" cy="50" r="4" fill="#60A5FA" opacity="0.8" />
          </svg>
          
          <svg className="benefits-connector connector-2-3" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,80 100,50 T190,50" stroke="#FED7AA" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <path d="M95,48 L100,50 L95,52" stroke="#F97316" strokeWidth="2" fill="none" />
          </svg>

          {/* Card 1 - 2X Faster Diagnosis */}
          <div className="benefit-card benefit-card-1">
            <div className="benefit-card-doodle benefit-doodle-1">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="35" stroke="#FEF3C7" strokeWidth="3" strokeDasharray="5,5" opacity="0.6" />
                <path d="M30,70 Q50,40 70,70" stroke="#FDE047" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e309c8f10c53017fd8f15_roller-skating.svg" 
                alt="2X Faster Diagnosis"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge">Lightning Fast</div>
              <h3 className="benefit-title">Get Diagnosis<br />2X Faster</h3>
              <p className="benefit-description">
                Advanced diagnostics that identify the root cause of your issues, not just the symptoms.
              </p>
            </div>
          </div>

          {/* Card 2 - Take Control */}
          <div className="benefit-card benefit-card-2">
            <div className="benefit-card-doodle benefit-doodle-2">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" stroke="#DBEAFE" strokeWidth="3" strokeDasharray="8,4" rx="10" opacity="0.5" />
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src="https://opendoodles.s3-us-west-1.amazonaws.com/dancing.svg" 
                alt="Take Control of Your Health"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge benefit-badge-blue">Empowered</div>
              <h3 className="benefit-title">Take Control<br />Of Your Health</h3>
              <p className="benefit-description">
                Regain your confidence with sustainable, long-term health improvements.
              </p>
            </div>
          </div>

          {/* Card 3 - Natural Recovery */}
          <div className="benefit-card benefit-card-3">
            <div className="benefit-card-doodle benefit-doodle-3">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,80 Q30,20 50,50 Q70,80 80,20" stroke="#FEF3C7" strokeWidth="3" fill="none" opacity="0.5" />
                <circle cx="50" cy="50" r="8" fill="#FCD34D" opacity="0.6" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5da4a2a996a90ccc56796336_sitting-reading.svg" 
                alt="Natural Recovery"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge benefit-badge-orange">Holistic</div>
              <h3 className="benefit-title">Natural<br />Recovery</h3>
              <p className="benefit-description">
                Heal naturally with personalized wellness plans designed to restore balance and vitality to your life.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Doodles */}
        <div className="benefits-bottom-doodles">
          <svg className="bottom-doodle-left" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,75 Q50,20 80,75 T140,75" stroke="#93C5FD" strokeWidth="3" strokeDasharray="10,5" strokeLinecap="round" opacity="0.4" />
            <circle cx="75" cy="50" r="6" fill="#60A5FA" opacity="0.5" />
          </svg>
          <svg className="bottom-doodle-right" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,100 L50,50 L90,100 L130,50" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            <circle cx="50" cy="50" r="5" fill="#FB923C" opacity="0.6" />
            <circle cx="90" cy="100" r="5" fill="#FDBA74" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
