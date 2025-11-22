import React from 'react';
import { Clock, Calendar, Users, CheckCircle, Shield, TrendingUp, Frown, AlertTriangle, CircleSlash, HelpCircle, Check, X, Flame } from 'lucide-react';
import './ProgramSection.css';

const ProgramSection = () => {
  const programFeatures = [
    {
      icon: Clock,
      title: '30 Minutes Daily',
      description: 'Simple routines that fit into your busy schedule'
    },
    {
      icon: Calendar,
      title: '4-Month Program',
      description: 'Comprehensive transformation timeline'
    },
    {
      icon: TrendingUp,
      title: 'Results in 6 Weeks',
      description: 'Noticeable improvements typically within 6 weeks'
    },
    {
      icon: Users,
      title: '4 Expert Coaches',
      description: 'Personal support team dedicated to your success'
    }
  ];

  const benefits = [
    'Permanent ED & PE reversal without medication',
    'Increased testosterone and blood flow naturally',
    'Enhanced stamina and performance',
    'Restored confidence and self-esteem',
    'Better intimate relationships',
    'Improved overall health and energy',
    'No side effects or dependencies',
    'Private and confidential support'
  ];

  const whoIsItFor = {
    included: [
      'Men aged 25-55 experiencing ED or PE',
      'Those seeking natural, permanent solutions',
      'Men tired of temporary pharmaceutical fixes',
      'Anyone committed to 30 min/day for 4 months',
      'Men in India looking for expert guidance'
    ],
    excluded: [
      'Those seeking overnight miracle cures',
      'Men unwilling to make lifestyle changes',
      'People expecting results without effort'
    ]
  };

  const painPoints = [
    {
      Icon: Frown,
      text: "You've tried pills, but they only work temporarily and come with side effects"
    },
    {
      Icon: AlertTriangle,
      text: 'Performance anxiety is affecting your confidence and relationships'
    },
    {
      Icon: CircleSlash,
      text: "You're frustrated with temporary solutions that don't address the root cause"
    },
    {
      Icon: HelpCircle,
      text: "You feel stuck and don't know where to turn for real, lasting help"
    }
  ];

  return (
    <section className="program-section" id="program">
      <div className="program-container">
        {/* Problem Agitation */}
        <div className="problem-section">
          <h2 className="problem-title">
            If You're Struggling with ED or PE, You're <span className="highlight-red">Not Alone</span>
          </h2>
          <div className="problem-grid">
            {painPoints.map(({ Icon, text }) => (
              <div key={text} className="problem-card">
                <span className="problem-emoji">
                  <Icon size={32} strokeWidth={2.4} aria-hidden="true" />
                </span>
                <p className="problem-text">{text}</p>
              </div>
            ))}
          </div>
          <p className="problem-solution-intro">
            <strong>Here's the truth:</strong> ED and PE aren't permanent conditions. They're symptoms of fixable biological imbalances. And we've helped over 5,000 Indian men reverse them completely—naturally.
          </p>
        </div>

        {/* VSL Section */}
        <div className="vsl-section">
          <h3 className="vsl-title">Watch: How Our System Works</h3>
          <p className="vsl-subtitle">
            See how we've helped thousands of men reverse ED & PE naturally in just 4 months
          </p>
          <div className="video-wrapper">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Banana Health Program Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div className="program-overview">
          <h3 className="overview-title">The Banana Health Program</h3>
          <div className="program-features-grid">
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="program-feature-card">
                  <div className="feature-icon-wrapper">
                    <Icon size={28} color="#3B82F6" strokeWidth={2} />
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="benefits-section">
          <h3 className="benefits-title">What You'll Achieve</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <CheckCircle size={20} color="#10B981" strokeWidth={2.5} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className="audience-section">
          <h3 className="audience-title">Is This Program Right For You?</h3>
          <div className="audience-grid">
            <div className="audience-card included">
              <div className="audience-header">
                <CheckCircle size={24} color="#10B981" strokeWidth={2.5} />
                <h4 className="audience-card-title">This Program Is Perfect If You:</h4>
              </div>
              <ul className="audience-list">
                {whoIsItFor.included.map((item, index) => (
                  <li key={index} className="audience-item">
                    <span className="audience-check" aria-hidden="true">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="audience-card excluded">
              <div className="audience-header">
                <Shield size={24} color="#EF4444" strokeWidth={2.5} />
                <h4 className="audience-card-title">This May Not Be For You If:</h4>
              </div>
              <ul className="audience-list">
                {whoIsItFor.excluded.map((item, index) => (
                  <li key={index} className="audience-item">
                    <span className="audience-cross" aria-hidden="true">
                      <X size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="program-cta">
          <div className="cta-badge">
            <span className="cta-badge-text">
              <Flame size={16} strokeWidth={2.4} aria-hidden="true" />
              Limited Spots Available
            </span>
          </div>
          <h3 className="cta-title">Ready to Transform Your Sexual Health?</h3>
          <p className="cta-text">
            Take our free 2-minute assessment to see if you qualify for our program and get personalized recommendations.
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-btn primary"
              onClick={() => window.open('https://example.com/quiz', '_blank')}
            >
              Take Free Assessment
            </button>
            <button 
              className="cta-btn secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Strategy Call
            </button>
          </div>
          <p className="cta-guarantee">
            <Shield size={16} />
            <span>100% Money-Back Guarantee if no results after program completion</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

