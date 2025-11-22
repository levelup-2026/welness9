import React, { useState, useEffect, useRef } from 'react';
import { Search, Apple, Dumbbell, Moon, Users, Check } from 'lucide-react';
import './FivePillarApproach.css';

const FivePillarApproach = () => {
  const [visiblePillars, setVisiblePillars] = useState([]);
  const sectionRef = useRef(null);

  const pillars = [
    {
      id: 1,
      number: '01',
      icon: Search,
      title: 'Primal Trigger Scan',
      subtitle: 'Deep Root Cause Analysis',
      description: 'Comprehensive assessment that maps your hormones, mindset, and physical function to identify the exact biological triggers causing ED or PE.',
      features: [
        'Hormone profile analysis',
        'Blood flow assessment',
        'Psychological trigger mapping',
        'Lifestyle factor evaluation'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      color: '#3B82F6'
    },
    {
      id: 2,
      number: '02',
      icon: Apple,
      title: 'Erection Nutrition Protocol',
      subtitle: 'Customized Diet Engineering',
      description: 'Personalized nutrition plan based on your hormone analysis designed to optimize testosterone levels and enhance blood flow naturally.',
      features: [
        'Testosterone-boosting foods',
        'Blood flow optimization',
        'Inflammation reduction',
        'Nutrient timing strategy'
      ],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
      color: '#10B981'
    },
    {
      id: 3,
      number: '03',
      icon: Dumbbell,
      title: 'Cellular Fitness + Nerve Reset',
      subtitle: 'Body & Mind Transformation',
      description: 'Targeted exercises combined with neuro-techniques to eliminate performance anxiety and build physical stamina without heavy workouts.',
      features: [
        'Pelvic floor strengthening',
        'Cardiovascular optimization',
        'Anxiety elimination techniques',
        'Confidence rebuilding methods'
      ],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
      color: '#F59E0B'
    },
    {
      id: 4,
      number: '04',
      icon: Moon,
      title: 'Performance Habit System',
      subtitle: 'Lifestyle Optimization',
      description: 'Daily routines for sleep quality, breathwork, and testosterone optimization that compound into permanent sexual health improvements.',
      features: [
        'Sleep architecture optimization',
        'Breathwork protocols',
        'Stress management techniques',
        'Energy regulation system'
      ],
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=400&fit=crop',
      color: '#8B5CF6'
    },
    {
      id: 5,
      number: '05',
      icon: Users,
      title: 'Support & Success System',
      subtitle: '4-Coach Team + Community',
      description: 'Daily support with weekly progress reviews from four expert coaches, plus private community access for on-demand guidance.',
      features: [
        'Daily coach accessibility',
        'Weekly progress corrections',
        'Private community support',
        'Real-time adjustments'
      ],
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
      color: '#EF4444'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pillarId = parseInt(entry.target.dataset.pillarId);
            if (!visiblePillars.includes(pillarId)) {
              setVisiblePillars(prev => [...prev, pillarId]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const pillarElements = sectionRef.current?.querySelectorAll('.pillar-card');
    pillarElements?.forEach((el) => observer.observe(el));

    return () => {
      pillarElements?.forEach((el) => observer.unobserve(el));
    };
  }, [visiblePillars]);

  return (
    <section className="five-pillar-approach" id="approach" ref={sectionRef}>
      <div className="pillar-container">
        <div className="pillar-header">
          <span className="pillar-label">OUR METHODOLOGY</span>
          <h2 className="pillar-title">
            The <span className="highlight-gradient">5-Pillar Integrative Approach</span>
          </h2>
          <p className="pillar-subtitle">
            Our proprietary system developed over 3 years, combining science-backed nutrition, fitness, mindset work, and expert coaching to permanently reverse ED and PE.
          </p>
        </div>

        <div className="pillars-list">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isVisible = visiblePillars.includes(pillar.id);
            const isEven = index % 2 === 0;

            return (
              <div
                key={pillar.id}
                className={`pillar-card ${isEven ? 'even' : 'odd'} ${isVisible ? 'visible' : ''}`}
                data-pillar-id={pillar.id}
              >
                <div className="pillar-content">
                  <div className="pillar-number" style={{ color: pillar.color }}>
                    {pillar.number}
                  </div>
                  <div className="pillar-icon-wrapper" style={{ background: `${pillar.color}15` }}>
                    <Icon size={32} color={pillar.color} strokeWidth={2} />
                  </div>
                  <h3 className="pillar-name">{pillar.title}</h3>
                  <p className="pillar-tagline" style={{ color: pillar.color }}>
                    {pillar.subtitle}
                  </p>
                  <p className="pillar-description">{pillar.description}</p>
                  <ul className="pillar-features">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="pillar-feature">
                        <span className="feature-check" style={{ background: pillar.color }}>
                          <Check size={14} strokeWidth={3} aria-hidden="true" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pillar-image-wrapper">
                  <img src={pillar.image} alt={pillar.title} className="pillar-image" />
                  <div className="pillar-overlay" style={{ background: `linear-gradient(135deg, ${pillar.color}80, ${pillar.color}40)` }}></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pillar-cta">
          <div className="pillar-cta-content">
            <h3 className="pillar-cta-title">Ready to Start Your Transformation?</h3>
            <p className="pillar-cta-text">
              Take our free assessment to discover which pillars need the most attention in your unique case.
            </p>
          </div>
          <div className="pillar-cta-buttons">
            <button 
              className="pillar-cta-button primary"
              onClick={() => window.open('https://example.com/quiz', '_blank')}
            >
              Take Free Assessment
            </button>
            <button 
              className="pillar-cta-button secondary"
              onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Program Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePillarApproach;

