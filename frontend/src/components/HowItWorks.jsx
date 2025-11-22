import React from 'react';
import { ArrowRight, MessageCircle, ClipboardCheck, Handshake, LineChart, ChevronRight } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'Share your concerns in a confidential, judgment-free session with our specialists.',
      Icon: MessageCircle,
      bgColor: '#FFF4B8'
    },
    {
      id: 2,
      title: 'Personalized Plan',
      description: 'Receive a custom recovery roadmap tailored to your emotional needs and goals.',
      Icon: ClipboardCheck,
      bgColor: '#E5F2FF'
    },
    {
      id: 3,
      title: 'Ongoing Support',
      description: 'Regular therapy sessions, coaching calls, and access to support community.',
      Icon: Handshake,
      bgColor: '#F5E6FF'
    },
    {
      id: 4,
      title: 'Track Progress',
      description: 'Monitor your emotional growth and celebrate milestones on your healing journey.',
      Icon: LineChart,
      bgColor: '#E8F5E9'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <h2 className="how-title">Your Recovery Journey</h2>
          <p className="how-subtitle">A compassionate, evidence-based approach to emotional healing</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.id} className="step-card" style={{ background: step.bgColor }}>
              <div className="step-number">0{step.id}</div>
              <div className="step-icon">
                <step.Icon size={24} strokeWidth={2.4} aria-hidden="true" />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  <ChevronRight size={20} strokeWidth={2.4} />
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="start-assessment-btn">
          Book Free Consultation
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;