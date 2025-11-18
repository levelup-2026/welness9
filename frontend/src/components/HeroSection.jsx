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
            <span className="highlight-blue"> healing</span>
            <br />and
            <span className="highlight-yellow"> confidence.</span>
          </h1>

          <div className="unlock-cta">
            <p className="unlock-text">Start your personalized<br />emotional recovery journey.</p>
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
              <p className="card-text">Connect with certified therapists<br />specialized in men's wellness.</p>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop" alt="Therapy session" className="product-img" />
                <div className="product-icons">
                  <span className="icon-circle">💬</span>
                  <span className="icon-circle">🧠</span>
                  <span className="icon-circle">💙</span>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-stat-card">
            <p className="stat-label">→ Begin your journey!</p>
            <div className="stat-number-card">
              <h2 className="stat-number">1847</h2>
              <p className="stat-description">Men started their<br />recovery journey today</p>
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
              <span className="library-label">Services <span className="superscript">02</span></span>
              <button className="add-btn-circle">+</button>
            </div>
            <div className="library-pills">
              <div className="pill-item yellow">1-on-1 Therapy 💭</div>
              <div className="pill-item blue">Group Support 🤝</div>
              <div className="pill-item white">Online Coaching</div>
            </div>
          </div>
        </div>
      </div>

      <button className="browse-library-btn">
        Explore Services
        <span className="arrow-down">↓</span>
      </button>
    </section>
  );
};

export default HeroSection;