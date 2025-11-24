import React from 'react';
import { ArrowRight } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-header">
        <h2 className="what-we-do-title">How We Help You</h2>
        <p className="what-we-do-subtitle">
          Our comprehensive approach combines modern science with natural healing to deliver lasting results.
        </p>
      </div>

      <div className="what-we-do-grid">
        {/* Card 1 - Diagnosis */}
        <div className="category-card card-diagnosis">
          <div className="card-visual">
            <img 
              src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5d5e309c8f10c53017fd8f15_roller-skating.svg" 
              alt="2X Faster Diagnosis"
              className="card-svg"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Get Diagnosis<br />2X Faster</h3>
            <p className="card-description">
              Advanced diagnostics that identify the root cause of your issues, not just the symptoms.
            </p>
          </div>
        </div>

        {/* Card 2 - Recovery */}
        <div className="category-card card-recovery">
          <div className="card-visual">
            <img 
              src="https://cdn.prod.website-files.com/5d5e2ff58f10c53dcffd8683/5da4a2a996a90ccc56796336_sitting-reading.svg" 
              alt="Natural Recovery"
              className="card-svg"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Natural<br />Recovery</h3>
            <p className="card-description">
              Heal naturally with personalized wellness plans designed to restore balance and vitality to your life.
            </p>
          </div>
        </div>

        {/* Card 3 - Control */}
        <div className="category-card card-control">
          <div className="card-visual">
            <img 
              src="https://opendoodles.s3-us-west-1.amazonaws.com/dancing.svg" 
              alt="Take Control of Your Health"
              className="card-svg"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title">Take Control<br />Of Your Health</h3>
            <p className="card-description">
              Regain your confidence with sustainable, long-term health improvements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
