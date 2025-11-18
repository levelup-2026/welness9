import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            Simplify your
            <span className="highlight-blue"> wellness</span>
            <br />and
            <span className="highlight-yellow"> confidence.</span>
          </h1>

          <div className="unlock-cta">
            <p className="unlock-text">Unlock your personalized<br />wellness plan.</p>
            <button className="cta-button">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="hero-cards-container">
          <div className="info-card floating">
            <div className="card-header">
              <button className="about-tag">About <span className="superscript">01</span></button>
              <button className="link-icon-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="add-btn-circle">+</button>
            </div>
            <div className="card-content">
              <p className="card-text">Receive daily packs personalized<br />to your unique health needs.</p>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop" alt="Wellness supplement" className="product-img" />
                <div className="product-icons">
                  <span className="icon-circle">🌿</span>
                  <span className="icon-circle">⚡</span>
                  <span className="icon-circle">💪</span>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-stat-card">
            <p className="stat-label">→ Start the assessment!</p>
            <div className="stat-number-card">
              <h2 className="stat-number">1151</h2>
              <p className="stat-description">People completed<br />the assessment today</p>
              <div className="avatar-group">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="avatar" />
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User" className="avatar" />
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" className="avatar" />
                <div className="avatar-more">+</div>
              </div>
            </div>
          </div>

          <div className="library-card">
            <div className="library-header">
              <span className="library-label">Library <span className="superscript">02</span></span>
              <button className="add-btn-circle">+</button>
            </div>
            <div className="library-pills">
              <div className="pill-item yellow">Performance ⚡</div>
              <div className="pill-item blue">Confidence 💎</div>
              <div className="pill-item white">ED Support</div>
            </div>
          </div>
        </div>
      </div>

      <button className="browse-library-btn">
        Browse Library
        <span className="arrow-down">↓</span>
      </button>
    </section>
  );
};

export default HeroSection;