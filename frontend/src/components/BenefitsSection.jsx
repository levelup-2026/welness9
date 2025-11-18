import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Natural Ingredients',
      description: 'All formulas use clinically-studied natural ingredients with proven efficacy.',
      icon: '🌿',
      stats: '100% Natural'
    },
    {
      id: 2,
      title: 'Doctor Approved',
      description: 'Formulated by medical professionals specializing in men\'s health.',
      icon: '⚕️',
      stats: 'Medical Grade'
    },
    {
      id: 3,
      title: 'Discreet Delivery',
      description: 'Private packaging delivered right to your door every month.',
      icon: '🔒',
      stats: '100% Private'
    },
    {
      id: 4,
      title: 'Proven Results',
      description: 'Thousands of men have improved their wellness and confidence.',
      icon: '✨',
      stats: '15,000+ Men'
    },
    {
      id: 5,
      title: 'Easy to Use',
      description: 'Daily packs organized by date - just grab and go.',
      icon: '📅',
      stats: 'Daily Packs'
    },
    {
      id: 6,
      title: 'Money Back Guarantee',
      description: 'Not satisfied? Get a full refund within 60 days.',
      icon: '💰',
      stats: '60 Day Guarantee'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">Why Choose Banana Health</h2>
          <p className="benefits-subtitle">Trusted by thousands of men taking control of their wellness</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <div className="benefit-stats">{benefit.stats}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;