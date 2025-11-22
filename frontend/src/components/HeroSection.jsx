import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  TrendingUp,
  Target,
  Dumbbell,
  Sparkles,
  Zap,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import FeaturedOn from './FeaturedOn';
import './HeroSection.css';

const HeroSection = () => {
  const heroProductIcons = [
    { Icon: Target, label: 'Root cause diagnostics' },
    { Icon: Dumbbell, label: 'Strength-based training' },
    { Icon: Sparkles, label: 'Performance breakthroughs' }
  ];

  const expertisePills = [
    { label: 'ED Reversal', color: 'yellow', Icon: Target },
    { label: 'PE Solution', color: 'blue', Icon: Zap },
    { label: 'Performance Boost', color: 'white', Icon: Sparkles }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="hero-title">
            Reverse ED & PE
            <span className="highlight-blue"> Naturally</span>
            <br />
            Without Pills, Pumps, or
            <span className="highlight-yellow">
              Side Effects
              <Sparkles className="highlight-icon" aria-hidden="true" size={28} strokeWidth={2} />
            </span>
          </h1>

          <p className="hero-subtitle">
            India's Leading Natural Sexual Health Solution for Men Who Want <strong>Permanent Results</strong>
          </p>

          <div className="hero-cta-group">
            <button 
              className="cta-button primary-cta"
              onClick={() => window.open('https://example.com/quiz', '_blank')}
            >
              Take Free Assessment
              <ArrowRight size={20} />
            </button>
            <button 
              className="cta-button secondary-cta"
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch How It Works
            </button>
          </div>

          <div className="trust-badges">
            <div className="trust-item">
              <Shield size={18} />
              <span>100% Natural</span>
            </div>
            <div className="trust-item">
              <Clock size={18} />
              <span>Results in 6 Weeks</span>
            </div>
            <div className="trust-item">
              <TrendingUp size={18} />
              <span>5,000+ Success Stories</span>
            </div>
          </div>
        </div>

        <div className="hero-cards-container">
          <div className="info-card floating">
            <div className="card-header">
              <button className="about-tag">Natural Solution <span className="superscript">01</span></button>
              <button className="link-icon-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="add-btn-circle">+</button>
            </div>
            <div className="card-content">
              <p className="card-text">Science-backed 5-Pillar approach to<br />reverse ED & PE permanently.</p>
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop" alt="Natural health transformation" className="product-img" />
                <div className="product-icons">
                    {heroProductIcons.map(({ Icon, label }) => (
                      <span key={label} className="icon-circle" aria-label={label}>
                        <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-stat-card">
            <p className="stat-label">
              <ArrowUpRight size={16} strokeWidth={2.5} aria-hidden="true" />
              Join Thousands of Men!
            </p>
            <div className="stat-number-card">
              <h2 className="stat-number">5,000+</h2>
              <p className="stat-description">Men transformed their<br />sexual health naturally</p>
              <div className="avatar-group">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar" />
                <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User" className="avatar" />
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="User" className="avatar" />
                <div className="avatar-more">+</div>
              </div>
            </div>
          </div>

          <div className="library-card">
            <div className="library-header">
              <span className="library-label">Our Expertise <span className="superscript">02</span></span>
              <button className="add-btn-circle">+</button>
            </div>
            <div className="library-pills">
              {expertisePills.map(({ label, color, Icon }) => (
                <div key={label} className={`pill-item ${color}`}>
                  <Icon size={18} strokeWidth={2.3} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FeaturedOn />

      <button className="browse-library-btn">
        Discover Our Approach
        <ChevronDown className="arrow-down" size={18} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroSection;