import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, Target, TrendingUp, Award, Sparkles, ShieldCheck, BadgeCheck } from 'lucide-react';
import './ImpactStats.css';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    edReversed: 0,
    peOvercome: 0,
    intimacy: 0,
    erections: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'clients',
      target: 5000,
      label: 'Clients Served',
      icon: Users,
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
    },
    {
      id: 'edReversed',
      target: 1500,
      label: 'Men Reversed ED',
      icon: Award,
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      id: 'peOvercome',
      target: 1800,
      label: 'Men Overcame PE',
      icon: Target,
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
    },
    {
      id: 'intimacy',
      target: 2000,
      label: 'Improved Intimacy',
      icon: Heart,
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)'
    },
    {
      id: 'erections',
      target: 1000,
      label: 'Stronger Erections',
      icon: TrendingUp,
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let currentCount = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [stat.id]: Math.floor(currentCount)
        }));
      }, interval);
    });
  }, [isVisible]);

  return (
    <section className="impact-stats" ref={sectionRef}>
      <div className="impact-container">
        <div className="impact-header">
          <h2 className="impact-title">
            Transforming Lives Across <span className="highlight-text">India</span>
          </h2>
          <p className="impact-subtitle">
            Real results from real men who chose the natural path to sexual wellness
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`stat-card ${isVisible ? 'visible' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--card-gradient': stat.gradient
                }}
              >
                <div className="stat-icon-wrapper" style={{ background: stat.gradient }}>
                  <Icon size={28} color="white" strokeWidth={2.5} />
                </div>
                <div className="stat-content">
                  <div className="stat-number-wrapper">
                    <span className="stat-number">{counts[stat.id].toLocaleString()}</span>
                    <span className="stat-plus">+</span>
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
                <div className="stat-glow" style={{ background: `${stat.color}33` }}></div>
              </div>
            );
          })}
        </div>

        <div className="impact-footer">
          {[
            { Icon: Sparkles, text: '100% Natural & Medication-Free' },
            { Icon: ShieldCheck, text: 'Completely Confidential' },
            { Icon: BadgeCheck, text: 'Money-Back Guarantee' }
          ].map(({ Icon, text }) => (
            <div key={text} className="impact-badge">
              <Icon className="badge-icon" size={18} strokeWidth={2.4} aria-hidden="true" />
              <span className="badge-text">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

