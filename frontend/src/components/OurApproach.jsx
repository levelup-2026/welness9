import React from 'react';
import { Scan, Utensils, Brain, Calendar, Users, Activity } from 'lucide-react';
import LogoMark from './LogoMark';
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
      image: '/HABIT.jpg'
    },
    {
      number: '04',
      title: 'Performance Habit System',
      description: 'Coaching on critical routines: sleep, testosterone optimization, breathwork, and performance journaling for long-term control.',
      icon: Calendar,
      image: '/PERFORMANCE.jpg'
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

        {/* Hero Section */}
        <div className="approach-hero">
          <div className="approach-badge">
            <Activity size={16} />
            <span>Our Approach: How We Fix</span>
          </div>

          <div className="approach-grid">
            <div className="approach-content">
              <h1 className="approach-title">
                Together, let’s leave the{' '}
                <span className="approach-highlight">shame behind.</span>
              </h1>
              <p className="approach-description">
                Our 5-Pillar Integrative Approach delivers profound self-understanding by revealing the exact biological blockages causing Erectile Dysfunction, Premature Ejaculation, and other forms of sexual dysfunction in men. You then receive a clear, uncomplicated strategy to achieve and maintain peak performance for life.
              </p>
            </div>
            <div className="approach-image-container">
              <div className="approach-image-decoration" />
              <img
                src="/APPROACH.jpg"
                alt="A supportive consultation symbolizing leaving shame behind"
                className="approach-hero-image"
              />
            </div>
          </div>
        </div>

        {/* 5 Pillars Section */}
        <div className="pillars-section">
          <div className="pillars-header">
            <span className="pillars-badge">The System</span>
            <h2>The Five Pillars: A Holistic Approach</h2>
            <p>
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

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-image">
            <div className="vision-logo-badge">
              <LogoMark className="vision-logo-mark" />
            </div>
            <img
              src="/_DSC1103(1).jpg"
              alt="Our Vision - The Future We Are Creating"
              className="vision-hero-image"
            />
          </div>
          <div className="vision-content">
            <h2 className="vision-heading">
              Our Vision:{' '}
              <span className="vision-heading-highlight">The Future We Are Creating</span>
            </h2>
            <div className="vision-text">
              <p>
                As a fitness coach with TrainedbyYVS, I was shocked to personally experience Erectile Dysfunction in 2021. Despite my health being on point, the first incident quickly led to crippling performance anxiety, proving ED is a{' '}
                <span className="vision-text-highlight">silent pandemic that can hit anyone</span>.
              </p>
              <p>
                My subsequent 18 months of research revealed the standard solutions were insufficient: doctors only offered the "Blue Pill" (Viagra) forever, which I determined was an{' '}
                <span className="vision-text-highlight">unnatural band-aid that would prevent a natural fix</span>.
              </p>
              <p>
                Driven by the need for a <span className="vision-text-highlight">permanent, natural solution</span>, and my goal to see every man live an{' '}
                <span className="vision-text-highlight">ED and medicine-free life forever</span>, I dedicated my team and three years of effort to crafting the most advanced solution on the planet to reverse ED permanently.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurApproach;
