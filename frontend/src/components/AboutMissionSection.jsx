import React from 'react';
import { Target, Eye, Heart, Users, Award, Sparkles } from 'lucide-react';
import './AboutMissionSection.css';

const AboutMissionSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'We believe in treating the whole person, not just symptoms'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Every journey is unique, and so is our approach'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Backed by science, proven by results'
    },
    {
      icon: Sparkles,
      title: 'Natural Solutions',
      description: 'Sustainable, natural methods for lasting transformation'
    }
  ];

  return (
    <section className="about-mission-section" id="about">
      {/* Background Decorations */}
      <div className="about-bg-decoration about-bg-top">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#E0F2FE" strokeWidth="3" strokeDasharray="10,10" opacity="0.5" />
          <circle cx="100" cy="100" r="50" fill="#BAE6FD" opacity="0.2" />
        </svg>
      </div>
      <div className="about-bg-decoration about-bg-bottom">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,100 Q60,60 100,100 T180,100" stroke="#FEF3C7" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        </svg>
      </div>

      <div className="about-container">
        {/* About Section */}
        <div className="about-section">
          <div className="section-header">
            <div className="section-badge">
              <span className="badge-dot"></span>
              About Us
            </div>
            <h2 className="section-title">
              Empowering Men to <span className="highlight-blue">Reclaim Their Confidence</span>
            </h2>
            <div className="title-doodle">
              <svg viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,15 Q200,5 395,15" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
          </div>

          <div className="about-content">
            <div className="about-text-wrapper">
              <p className="about-text">
                Banana Health was born from a simple yet powerful realization: thousands of Indian men are silently struggling with erectile dysfunction and premature ejaculation, often turning to quick fixes that don't address the root cause.
              </p>
              <p className="about-text">
                We're not just another health company—we're a movement dedicated to changing how men approach sexual wellness. Through evidence-based natural methods, personalized coaching, and a supportive community, we've helped over <strong>5,000+ men</strong> reverse their conditions permanently.
              </p>
              <p className="about-text">
                Our approach is different because we understand that true healing comes from within. We combine ancient wisdom with modern science to create sustainable, lasting results that transform not just your physical health, but your entire life.
              </p>
            </div>

            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-number">5,000+</div>
                <div className="stat-label">Men Helped</div>
                <div className="stat-doodle">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                  </svg>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">92%</div>
                <div className="stat-label">Success Rate</div>
                <div className="stat-doodle">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,50 L80,50" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                    <path d="M50,20 L50,80" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4 Months</div>
                <div className="stat-label">Avg. Transformation</div>
                <div className="stat-doodle">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30,70 Q50,30 70,70" stroke="#FACC15" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mission-vision-wrapper">
          {/* Mission Card */}
          <div className="mission-card">
            <div className="card-icon-wrapper mission-icon">
              <Target size={36} strokeWidth={2} />
              <div className="icon-doodle">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" stroke="#EF4444" strokeWidth="2" strokeDasharray="8,6" opacity="0.4" />
                </svg>
              </div>
            </div>
            <h3 className="card-title">Our Mission</h3>
            <div className="card-divider">
              <svg viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,5 L195,5" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4" />
              </svg>
            </div>
            <p className="card-description">
              To revolutionize men's sexual wellness by providing natural, evidence-based solutions that empower men to overcome ED and PE permanently. We're committed to breaking the stigma, offering compassionate support, and helping men reclaim their confidence, vitality, and relationships.
            </p>
            <div className="card-highlight">
              <span className="highlight-icon">🎯</span>
              <span>Making lasting wellness accessible to every man</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="vision-card">
            <div className="card-icon-wrapper vision-icon">
              <Eye size={36} strokeWidth={2} />
              <div className="icon-doodle">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,60 Q60,20 100,60 Q60,100 20,60" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
            </div>
            <h3 className="card-title">Our Vision</h3>
            <div className="card-divider">
              <svg viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,5 L195,5" stroke="#F0F0F0" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,4" />
              </svg>
            </div>
            <p className="card-description">
              To become India's most trusted platform for men's holistic wellness, where every man feels empowered to take control of his health without fear or shame. We envision a future where natural, sustainable solutions are the first choice—not the last resort.
            </p>
            <div className="card-highlight">
              <span className="highlight-icon">✨</span>
              <span>Creating a stigma-free future for men's wellness</span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <div className="values-header">
            <h3 className="values-title">Our Core Values</h3>
            <p className="values-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon-bg">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,50 Q30,20 50,50 T90,50" stroke="#E0F2FE" strokeWidth="15" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  </div>
                  <div className="value-icon-wrapper">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Story Highlight */}
        <div className="brand-story-highlight">
          <div className="story-decoration">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,20 Q50,50 80,20" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              <path d="M20,80 Q50,50 80,80" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <div className="story-content">
            <div className="story-quote-mark">"</div>
            <p className="story-text">
              We started Banana Health because we saw too many men suffering in silence, trapped in cycles of temporary fixes and growing frustration. We knew there had to be a better way—a natural, holistic approach that addresses the real root causes. Today, we're proud to be that solution.
            </p>
            <div className="story-author">
              <div className="author-line"></div>
              <span>The Banana Health Team</span>
            </div>
          </div>
          <div className="story-decoration story-decoration-right">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6,6" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
