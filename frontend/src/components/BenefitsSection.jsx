import React from 'react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Licensed Therapists',
      description: 'All counselors are certified professionals with specialized training in men\'s sexual wellness.',
      icon: '🎓',
      stats: 'Certified Experts'
    },
    {
      id: 2,
      title: 'Evidence-Based',
      description: 'Our approach combines CBT, mindfulness, and proven therapeutic techniques.',
      icon: '🧠',
      stats: 'Science-Backed'
    },
    {
      id: 3,
      title: 'Complete Privacy',
      description: 'Confidential online sessions from the comfort of your own space.',
      icon: '🔒',
      stats: '100% Confidential'
    },
    {
      id: 4,
      title: 'Proven Results',
      description: 'Thousands of men have overcome anxiety and rebuilt confidence through our programs.',
      icon: '✨',
      stats: '8,500+ Success Stories'
    },
    {
      id: 5,
      title: 'Flexible Scheduling',
      description: 'Sessions available evenings and weekends to fit your lifestyle.',
      icon: '📅',
      stats: '7 Days a Week'
    },
    {
      id: 6,
      title: 'Ongoing Support',
      description: 'Access to therapists, community forums, and resources 24/7.',
      icon: '💙',
      stats: 'Always Available'
    }
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">Why Choose Banana Health</h2>
          <p className="benefits-subtitle">Trusted by thousands of men seeking emotional healing and confidence</p>
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