import React from 'react';
import { Scan, Utensils, Brain, Calendar, Users, Activity, Sparkles, ArrowRight, Zap } from 'lucide-react';
import './OurApproach.css';

const OurApproach = () => {
  const pillars = [
    {
      number: '01',
      title: 'Primal Trigger Scan',
      description: 'Deep, customized analysis of hormones, mindset, and physical function to map the root cause.',
      icon: Scan,
      image: '/TRIGGERSCAN.jpg'
    },
    {
      number: '02',
      title: 'Erection Nutrition Protocol',
      description: 'Customizing your diet based on hormone studies to optimize blood flow and testosterone—a permanent lifestyle shift, not a diet.',
      icon: Utensils,
      image: '/NUTRITION.jpg'
    },
    {
      number: '03',
      title: 'Cellular Fitness + Nerve & Mind Reset',
      description: 'Targeted, short workouts to build the erection engine, combined with daily neuro-techniques to eliminate performance anxiety.',
      icon: Brain,
      image: '/PERFORMANCE.jpg'
    },
    {
      number: '04',
      title: 'Performance Habit System',
      description: 'Coaching on critical routines: sleep, testosterone optimization, breathwork, and performance journaling for long-term control.',
      icon: Calendar,
      image: '/HABIT.jpg'
    },
    {
      number: '05',
      title: 'Support and Success System',
      description: 'Confidential, daily support and weekly course correction from your four expert coaches via a private group and on-demand check-ins.',
      icon: Users,
      image: '/SUPPORT.jpg'
    }
  ];

  return (
    <section className="our-approach-section">
      <div className="our-approach-container">
        
        {/* Hero Section - Redesigned */}
        <div className="approach-hero-redesigned">
          <div className="approach-header-centered">
            <h2 className="approach-main-heading">
              Our <span className="approach-heading-highlight">Approach</span>
            </h2>
          </div>
          
          <div className="approach-hero-grid">
            {/* Image Column */}
            <div className="approach-image-column">
              <div className="approach-image-decoration"></div>
              <div className="approach-image-card">
                <img 
                  src="/APPROACH.jpg" 
                  alt="A supportive consultation symbolizing leaving shame behind" 
                  className="approach-hero-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="approach-photo-placeholder" style={{ display: 'none' }}>
                  <Activity size={80} className="placeholder-icon" />
                </div>
                <div className="approach-floating-badge">
                  <p className="approach-badge-text">
                    <Zap size={16} />
                    <span>5-Pillar System</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="approach-content-column">
              <div className="approach-content-wrapper">
                
                {/* Tagline */}
                <h2 className="approach-headline">
                  Together, let's leave<br />
                  the shame <span className="approach-highlight-natural">behind. <Sparkles className="approach-inline-sparkle" size={28} /></span>
                </h2>
                
                <div className="approach-main-description">
                  <p>
                    Our <span className="approach-text-highlight">5-Pillar Integrative Approach</span> delivers profound self-understanding by revealing the exact biological blockages causing Erectile Dysfunction, Premature Ejaculation, and other forms of sexual dysfunction in men.
                  </p>
                  <p>
                    You then receive a clear, uncomplicated strategy to achieve and maintain <span className="approach-text-highlight">peak performance for life</span>.
                  </p>
                </div>

                {/* Quick Feature Cards */}
                <div className="approach-feature-cards-grid">
                  <div className="approach-feature-card">
                    <div className="approach-feature-icon yellow-icon">
                      <Activity size={28} strokeWidth={2} />
                    </div>
                    <div className="approach-feature-text">
                      <h3 className="approach-feature-heading">Root Cause Analysis</h3>
                      <p className="approach-feature-description">
                        We identify the exact biological and psychological blockages causing your condition.
                      </p>
                    </div>
                  </div>

                  <div className="approach-feature-card">
                    <div className="approach-feature-icon blue-icon">
                      <ArrowRight size={28} strokeWidth={2} />
                    </div>
                    <div className="approach-feature-text">
                      <h3 className="approach-feature-heading">Clear Action Plan</h3>
                      <p className="approach-feature-description">
                        A step-by-step roadmap to permanent transformation, guided by expert coaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pillars Section */}
        <div className="pillars-section">
          <div className="pillars-header-styled">
            <h2 className="pillars-main-title">
              The Five <span className="pillars-highlight-box">Pillars</span>
            </h2>
            <div className="pillars-divider-line"></div>
            <p className="pillars-intro-text">
              We don't offer a product; we offer a system designed for busy men seeking lasting change. This is a targeted, step-by-step commitment to health, guided by four expert coaches.
            </p>
          </div>
          
          <div className="pillars-list">
            {pillars.map((pillar, index) => (
              <div key={index} className={`pillar-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="pillar-content-side">
                  <div className="pillar-number-large">{pillar.number}</div>
                  <div className="pillar-text-content">
                    <div className="pillar-icon-box">
                      <pillar.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="pillar-title-large">{pillar.title}</h3>
                    <p className="pillar-description-large">{pillar.description}</p>
                  </div>
                </div>
                <div className="pillar-image-side">
                  <div className="pillar-image-container">
                    <img src={pillar.image} alt={pillar.title} className="pillar-image" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section - Redesigned */}
        <div className="vision-section-redesigned">
          <div className="vision-header-styled">
            <h2 className="vision-main-title">
              Our <span className="vision-highlight-box">Vision</span>
            </h2>
            <div className="vision-divider-line"></div>
            <p className="vision-subtitle">The Future We Are Creating</p>
          </div>
          
          <div className="vision-content-grid">
            <div className="vision-story-card">
              <div className="vision-story-content">
                <div className="vision-quote-icon">
                  <Sparkles size={32} />
                </div>
                <div className="vision-story-text">
                  <p>
                    As a fitness coach with peak health, I was shocked to personally experience Erectile Dysfunction in 2021. Despite my health being on point, the first incident quickly led to crippling performance anxiety, proving ED is a silent pandemic that can hit anyone.
                  </p>
                  <p>
                    My subsequent 18 months of research revealed the standard solutions were insufficient: doctors only offered the "Blue Pill" (Viagra) forever, which I determined was an unnatural band-aid that would prevent a natural fix.
                  </p>
                  <p>
                    Driven by the need for a permanent, natural solution, and my goal to see every man live an ED and medicine-free life forever, I dedicated my team and three years of effort to crafting the most advanced solution on the planet to reverse ED permanently.
                  </p>
                </div>
                <div className="vision-founder-badge">
                  <span className="founder-name">— Yash Vardhan Swami</span>
                  <span className="founder-title">Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
