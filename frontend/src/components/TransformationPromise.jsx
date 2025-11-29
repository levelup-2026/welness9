import React from 'react';
import { Zap, ShieldCheck, Activity, ArrowRight } from 'lucide-react';
import './TransformationPromise.css';

const TransformationPromise = () => {
  return (
    <section className="transformation-section">
      <div className="transformation-container">
        <div className="transformation-grid">
          {/* Left Column: The Vision */}
          <div className="transformation-content">
            <div className="transformation-header">
              <h2 className="transformation-title">
                What if you could <span className="highlight-blue">achieve</span>
              </h2>
              <p className="transformation-subtitle">
                Imagine a life where confidence isn't a question, but a constant state of being.
              </p>
            </div>

            <ul className="transformation-list">
              <li className="transformation-item">
                <div className="icon-box">
                  <Zap className="item-icon" size={24} />
                </div>
                <div className="item-content">
                    <h3 className="item-title">Natural Potency</h3>
                    <p className="item-text">Erections that are naturally firm, strong, and lasting without anxiety.</p>
                </div>
              </li>
              <li className="transformation-item">
                <div className="icon-box">
                  <Activity className="item-icon" size={24} />
                </div>
                <div className="item-content">
                    <h3 className="item-title">Spontaneous Freedom</h3>
                    <p className="item-text">Freedom from timing sex around medication schedules.</p>
                </div>
              </li>
              <li className="transformation-item">
                <div className="icon-box">
                  <ShieldCheck className="item-icon" size={24} />
                </div>
                <div className="item-content">
                    <h3 className="item-title">Radiant Confidence</h3>
                    <p className="item-text">A healthier body and better energy that radiates confidence.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column: The Promise/Solution */}
          <div className="transformation-visual">
            <div className="promise-card">
                <div className="promise-header">
                    <h3 className="promise-title">Unachievable?</h3>
                    <span className="promise-badge">We don't think so</span>
                </div>
                <p className="promise-description">
                    That's why we engineered a scientifically proven method that has helped over 5,000 men escape the endless cycle of quick fixes.
                </p>
                <p className="promise-description-secondary">
                    By targeting the true root cause of Erectile Dysfunction and Premature Ejaculation, our approach delivers measurable results.
                </p>
                <div className="promise-stats">
                    <div className="stat-item">
                        <span className="stat-value">6</span>
                        <span className="stat-label">Weeks to Results</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">5k+</span>
                        <span className="stat-label">Success Stories</span>
                    </div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="visual-decoration circle-1"></div>
            <div className="visual-decoration circle-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationPromise;
