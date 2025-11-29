import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-content-wrapper">
        <div className="what-we-do-text-content">
          <div className="what-we-do-header">
            <h2 className="what-we-do-title">What We Do</h2>
            <p className="what-we-do-subtitle">
              We provide <span className="text-emphasis">comprehensive wellness solutions</span> that combine <span className="text-highlight">cutting-edge diagnostics</span>, <span className="text-highlight">personalized treatment plans</span>, and <span className="text-highlight">natural healing methods</span>.
            </p>
            
            <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
              <p className="what-we-do-description">
                Our approach focuses on identifying root causes and delivering sustainable, long-term health improvements. We integrate modern medical science with time-tested holistic practices to empower you to understand your body's unique needs.
              </p>
            </div>
            
            <button 
              className="expand-btn mobile-only"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            
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
          </div>
        </div>
        
        <div className="what-we-do-visual">
          <img 
            src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5d99f352c33c899c487cbea2_composition-1.svg" 
            alt="What We Do"
            className="what-we-do-svg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
