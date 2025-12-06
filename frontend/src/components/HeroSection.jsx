import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>India's #1</span>
          <span>
            <span className="highlight-blue">
              Men's Sexual Health <Sparkles className="sparkle-icon" size={28} />
            </span>
          </span>
          <span>Coaching Brand</span>
        </h1>

        <h2 className="hero-subtitle">
          Fix ED and PE Permanently in 6 Weeks.
        </h2>

        <p className="hero-description">
          We are the #1 natural solution, featured in media houses like Cosmopolitan, The Times of India, and Hindustan Times. Trusted by over 5,000 men, doctors, and experts, we deliver proven methods.
        </p>

        <div className="hero-cta-group">
          <button className="cta-button primary-cta">
            Take Free Assessment
            <ArrowRight size={20} />
          </button>
          <button className="cta-button secondary-cta">
            <Play size={18} />
            Watch How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;