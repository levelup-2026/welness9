import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Take the Assessment',
      description: 'Answer questions about your wellness goals, lifestyle, and health history.',
      icon: '📋',
      bgColor: '#FFF4B8'
    },
    {
      id: 2,
      title: 'Get Your Plan',
      description: 'Receive a personalized wellness plan tailored to your unique needs.',
      icon: '🎯',
      bgColor: '#E5F2FF'
    },
    {
      id: 3,
      title: 'Monthly Delivery',
      description: 'Get daily packs delivered to your door with exactly what you need.',
      icon: '📦',
      bgColor: '#F5E6FF'
    },
    {
      id: 4,
      title: 'Track Progress',
      description: 'Monitor your journey and adjust your plan as your needs evolve.',
      icon: '📊',
      bgColor: '#E8F5E9'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">How It Works</h2>
          <p className="how-subtitle">Your personalized wellness journey in 4 simple steps</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card" style={{ background: step.bgColor }}>
              <div className="step-number">0{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        <button className="start-assessment-btn">
          Start Your Assessment
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;