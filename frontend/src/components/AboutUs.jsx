import React from 'react';
import { Target, Users, Shield, Heart, Sparkles, TrendingUp, MessageSquare } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Science-Backed Methods',
      description: 'Proven, evidence-based natural solutions developed by experts'
    },
    {
      icon: Users,
      title: 'Communication First',
      description: 'Success through open dialogue, not perfection. We\'re here to support you daily'
    },
    {
      icon: Shield,
      title: 'Privacy Paramount',
      description: 'Your journey is protected with NDA-level confidentiality and security'
    },
    {
      icon: Heart,
      title: '100% Natural',
      description: 'No pills, no pumps, no side effects—just permanent, natural transformation'
    }
  ];

  const mediaLogos = [
    { name: 'Hindustan Times', logo: 'ht-logo.png' },
    { name: 'Cosmopolitan', logo: 'cosmo-logo.png' },
    { name: 'The Times of India', logo: 'toi-logo.png' },
    { name: 'India Today', logo: 'indiatoday-logo.png' }
  ];

  const stats = [
    { number: '5,000+', label: 'Men Transformed' },
    { number: '6 Weeks', label: 'Average Results' },
    { number: '100%', label: 'Natural Methods' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">

        {/* Main Who We Are Section - Redesigned */}
        <div className="who-we-are-hero">
          <div className="section-header-centered">
            <h2 className="main-heading">
              Who Are <span className="heading-highlight">We?</span>
            </h2>
          </div>
          <div className="who-we-are-grid">
            
            {/* Image Column */}
            <div className="founder-column">
              <div className="founder-image-decoration"></div>
              <div className="founder-image-card">
                <img 
                  src={`${process.env.PUBLIC_URL}/founders-full.jpg`} 
                  alt="Yash Vardhan Swami & Chetan Arora - Founders" 
                  className="founder-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="founder-photo-placeholder" style={{ display: 'none' }}>
                  <Users size={80} className="placeholder-icon" />
                </div>
                <div className="founder-badge">
                  <p className="founder-badge-text">
                    Yash, <span className="founder-badge-subtitle">Founder</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="content-column">
              <div className="content-wrapper">
                
                {/* Tagline */}
                <h2 className="headline">
                  Solving Men's Biggest <br />
                  Hidden Problem, <span className="highlight-natural">Naturally. <Sparkles className="inline-sparkle" size={28} /></span>
                </h2>
                
                <div className="main-description">
                  <p>
                    Banana Health was founded by Yash Vardhan Swami and Chetan Arora with a mission to help men fix ED and PE <span className="text-highlight">100% naturally</span>. Our science-backed methods are developed by men, for men.
                  </p>
                  <p>
                    We believe success comes through communication, not perfection. We offer a permanent solution without reliance on medication.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="feature-cards-grid">
                  <div className="feature-card">
                    <div className="feature-icon yellow-icon">
                      <Shield size={32} strokeWidth={2} />
                    </div>
                    <div className="feature-text">
                      <h3 className="feature-heading">100% Private & Secure</h3>
                      <p className="feature-description">
                        We secure your work with a Non-Disclosure Agreement (NDA). Focus on your health with absolute confidence.
                      </p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon blue-icon">
                      <MessageSquare size={32} strokeWidth={2} />
                    </div>
                    <div className="feature-text">
                      <h3 className="feature-heading">Communication First</h3>
                      <p className="feature-description">
                        Our only ask is that you communicate. We are your dedicated team, ready to fix any challenge fast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values Grid */}
        <div className="core-values-section">
          <h3 className="section-subtitle">Our Commitment to You</h3>
          <div className="values-grid">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div className="value-card" key={index}>
                  <div className="value-icon">
                    <IconComponent size={28} strokeWidth={2} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-showcase">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Features Section */}
        <div className="media-section">
          <div className="media-header">
            <h3 className="section-subtitle">What the Media Says</h3>
            <p className="media-subtitle">
              <strong>India's leading sexual health transformation platform</strong>
            </p>
            <p className="media-description">
              Featured by major media houses like Hindustan Times, Cosmopolitan, and The Times of India, 
              Banana Health is trusted by over <strong>5,000 men, doctors, and experts</strong> for treating 
              sexual deformities in men in as little as <strong>six weeks</strong>.
            </p>
          </div>

          <div className="media-logos-grid">
            {mediaLogos.map((media, index) => (
              <div className="media-logo-item" key={index}>
                <div className="media-logo-placeholder">
                  <TrendingUp size={32} className="placeholder-icon" />
                  <span className="media-name">{media.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="media-note">
            <Sparkles size={18} />
            <p>Featured in leading publications for our revolutionary natural approach to men's sexual health</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
