import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  TrendingUp,
  Target,
  Dumbbell,
  Sparkles,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import './HeroSection.css';
import '../styles/BlobAnimations.css';

const HeroSection = () => {
  const heroProductIcons = [
    { Icon: Target, label: 'Root cause diagnostics' },
    { Icon: Dumbbell, label: 'Strength-based training' },
    { Icon: Sparkles, label: 'Performance breakthroughs' }
  ];

  const heroNoMeds = [
    { 
      text: 'No pills', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.5 20.5L3.5 13.5C1.5 11.5 1.5 8 3.5 6C5.5 4 9 4 11 6L18 13C20 15 20 18.5 18 20.5C16 22.5 12.5 22.5 10.5 20.5Z"/>
          <path d="M8.5 8.5L15.5 15.5"/>
          <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      )
    },
    { 
      text: 'No pumps', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3l4 4"/>
          <path d="M19 5l-9.5 9.5"/>
          <rect x="4" y="14" width="6" height="8" rx="1" transform="rotate(-45 4 14)"/>
          <path d="M2 21l1.5-1.5"/>
          <path d="M12 7l1-1"/>
          <path d="M14 9l1-1"/>
          <path d="M16 11l1-1"/>
          <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      )
    },
    { 
      text: 'No painful procedures', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3l12 9-3 3-12-9 3-3z"/>
          <path d="M15 12l5 5"/>
          <path d="M18 19l2-2"/>
          <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="hero-section">
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={5}
        colors={['blue', 'purple', 'yellow', 'orange', 'blue']}
        sizes={['xl', 'lg', 'md', 'lg', 'md']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        intensity={0.2}
        style={{ top: '10%', right: '5%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="yellow"
        size="md"
        animationType="morph-reverse"
        enableMouseTracking={true}
        intensity={0.15}
        style={{ bottom: '20%', left: '8%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="sm"
        animationType="pulse"
        enableScrollEffect={true}
        style={{ top: '40%', right: '15%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="squiggle"
        color="blue"
        animate={true}
        float={true}
        width={300}
        height={100}
        strokeWidth={2}
        style={{ position: 'absolute', top: '15%', left: '5%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="wave"
        color="orange"
        animate={true}
        wiggle={true}
        width={250}
        height={80}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '15%', right: '10%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="spiral"
        color="purple"
        animate={true}
        float={true}
        width={150}
        height={150}
        strokeWidth={2}
        style={{ position: 'absolute', top: '50%', left: '2%', opacity: 0.3, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '20%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#FCD34D', top: '40%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '60%', animationDuration: '4s' }} />
        <div className="particle" style={{ color: '#FB923C', top: '30%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '25%', left: '80%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '70%', left: '20%', animationDelay: '1s' }} />
        <div className="sparkle" style={{ top: '45%', left: '90%', animationDelay: '2s' }} />
      </div>

      <div className="hero-content">
        <div className="hero-main">

          <h1 className="hero-title">
            India's #1
            <span className="highlight-blue">Men's Sexual Health</span>
            <br />
            <span className="hero-title-inline">
              Coaching Brand
              <span className="hero-title-icon">
                <Sparkles className="highlight-icon" aria-hidden="true" size={28} strokeWidth={2} />
              </span>
            </span>
          </h1>

          <p className="hero-subtitle">
            <strong>Fix ED and PE Permanently in 6 Weeks.</strong> We are the #1 natural solution, featured in media houses like Cosmopolitan, The Times of India, and Hindustan Times. Trusted by over 5,000 men, doctors, and experts, we deliver proven methods.
          </p>

          <div className="hero-no-meds" aria-label="No shortcuts promise">
            <span className="hero-no-meds-label">Without:</span>
            {heroNoMeds.map((item) => (
              <span key={item.text} className="hero-pill soft">
                {item.icon}
                {item.text}
              </span>
            ))}
          </div>

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
              <p className="card-text" style={{ marginBottom: '1rem' }}>Get ready to take control again,<br />because you are at the right place!</p>
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
        </div>
      </div>

      <button className="browse-library-btn">
        Discover Our Approach
        <ChevronDown className="arrow-down" size={18} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroSection;