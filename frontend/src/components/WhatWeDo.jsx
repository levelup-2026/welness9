import React from 'react';
import { ArrowRight } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="scribble-bg-left">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,88.5,-3.3C86.9,11.4,81,25.3,71.8,37.2C62.6,49.1,50.1,59,36.6,65.3C23.1,71.6,8.6,74.3,-5.2,83.3C-19,92.3,-32.1,107.6,-42.7,107.2C-53.3,106.8,-61.4,90.7,-69.3,76.3C-77.2,61.9,-84.9,49.2,-88.3,35.3C-91.7,21.4,-90.8,6.3,-86.3,-7.4C-81.8,-21.1,-73.7,-33.4,-63.3,-43.3C-52.9,-53.2,-40.2,-60.7,-27.4,-68.6C-14.6,-76.5,-1.7,-84.8,12.3,-86.8C26.3,-88.8,52.6,-84.4,44.7,-76.4Z" fill="#E0F2FE" transform="translate(250 250) scale(2.5)" />
        </svg>
      </div>
      <div className="scribble-bg-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#FED7AA" strokeWidth="3" strokeDasharray="5,5" opacity="0.6" />
          <path d="M50,100 Q100,50 150,100" stroke="#93C5FD" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="scribble-underline">
        <svg viewBox="0 0 300 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,15 Q75,5 150,15 T295,15" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="what-we-do-content-wrapper">
        <div className="what-we-do-text-content">
          <div className="what-we-do-header">
            <h2 className="what-we-do-title">
              <span className="highlight-container">
                What We Do
                <svg className="highlight-svg" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.00025 7.00001C30.5003 3.00001 120.5 -3.49999 198 5.50001" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            <p className="what-we-do-subtitle">
              We provide <span className="text-emphasis">comprehensive wellness solutions</span> that combine <span className="text-highlight">cutting-edge diagnostics</span>, <span className="text-highlight">personalized treatment plans</span>, and <span className="text-highlight">natural healing methods</span>. Our approach focuses on identifying <span className="text-emphasis">root causes</span> and delivering sustainable, long-term health improvements that transform lives.
            </p>
            <p className="what-we-do-description">
              In a world where quick fixes often mask underlying issues, we take a different path. We believe that true health is a journey, not a destination. By integrating modern medical science with time-tested holistic practices, we empower you to understand your body's unique language.
            </p>
            <p className="what-we-do-description">
              Our mission goes beyond symptom management. We dive deep into your health story, uncovering patterns and connections that conventional approaches might miss. <span className="text-emphasis">Every person is unique</span>, and so is every healing journey. That's why we craft <span className="text-highlight">individualized protocols</span> that adapt and evolve with you.
            </p>
            <ul className="what-we-do-features">
              <li>
                <span className="feature-icon">✓</span>
                <span>Evidence-based holistic protocols</span>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <span>Continuous support & monitoring</span>
              </li>
              <li>
                <span className="feature-icon">✓</span>
                <span>Lifestyle integration coaching</span>
              </li>
            </ul>
            <div className="scribble-arrow-container">
              <svg className="scribble-arrow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,50 Q30,80 60,50 T90,50" stroke="#93C5FD" strokeWidth="3" fill="none" strokeDasharray="5,5" />
                <path d="M85,45 L90,50 L85,55" stroke="#93C5FD" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="what-we-do-visual">
            <div className="visual-decoration-circle"></div>
            <div className="visual-decoration-dots"></div>
            <div className="visual-decoration-squiggle"></div>
            <div className="visual-decoration-star"></div>
            <img 
              src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f352c33c899c487cbea2_composition-1.svg" 
              alt="What We Do"
              className="what-we-do-svg"
            />
            <div className="floating-text floating-text-1">Holistic</div>
            <div className="floating-text floating-text-2">Evidence-Based</div>
            <div className="floating-text floating-text-3">Personalized</div>
          </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
