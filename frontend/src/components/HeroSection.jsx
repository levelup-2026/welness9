import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>India's Leading</span>
          <span>
            <span className="highlight-blue">
              Erectile Dysfunction and
            </span>
          </span>
          <span>
            <span className="highlight-blue">
              Premature Ejaculation Reversal. <Sparkles className="sparkle-icon" size={28} />
            </span>
          </span>
          <span>Naturally and without pills.</span>
        </h1>

        <h2 className="hero-subtitle">
          Fix ED and PE Permanently in 6 Weeks.
        </h2>

        <p className="hero-description">
          Built by Yash Vardhan Swami who dealt with Erectile Dysfunction himself, understood how it can actually ruin a man’s life, researched and built our ‘5 Pillar Approach ™ ’ and fixed it naturally for himself and now, helped 2000+ men.
        </p>

        <div className="hero-cta-group">
          <a
            className="cta-button primary-cta"
            href="https://bananahealth.scoreapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take Free Assessment
            <ArrowRight size={20} />
          </a>
          <a
            className="cta-button secondary-cta"
            href="https://training.banana.health/lead"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Play size={18} />
            Watch How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;