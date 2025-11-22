import React from 'react';
import { GraduationCap, Brain, ShieldCheck, Sparkles, CalendarDays, LifeBuoy } from 'lucide-react';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Licensed Therapists',
      description: 'All counselors are certified professionals with specialized training in men\'s sexual wellness.',
      stats: 'Certified Experts',
      Icon: GraduationCap
    },
    {
      id: 2,
      title: 'Evidence-Based',
      description: 'Our approach combines CBT, mindfulness, and proven therapeutic techniques.',
      stats: 'Science-Backed',
      Icon: Brain
    },
    {
      id: 3,
      title: 'Complete Privacy',
      description: 'Confidential online sessions from the comfort of your own space.',
      stats: '100% Confidential',
      Icon: ShieldCheck
    },
    {
      id: 4,
      title: 'Proven Results',
      description: 'Thousands of men have overcome anxiety and rebuilt confidence through our programs.',
      stats: '8,500+ Success Stories',
      Icon: Sparkles
    },
    {
      id: 5,
      title: 'Flexible Scheduling',
      description: 'Sessions available evenings and weekends to fit your lifestyle.',
      stats: '7 Days a Week',
      Icon: CalendarDays
    },
    {
      id: 6,
      title: 'Ongoing Support',
      description: 'Access to therapists, community forums, and resources 24/7.',
      stats: 'Always Available',
      Icon: LifeBuoy
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
                <benefit.Icon className="benefit-icon" aria-hidden="true" size={28} strokeWidth={1.8} />
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