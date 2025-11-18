import React from 'react';
import { Check } from 'lucide-react';
import './ScienceSection.css';

const ScienceSection = () => {
  const approaches = [
    {
      name: 'Cognitive Behavioral Therapy',
      benefit: 'Reframe negative thought patterns and reduce performance anxiety',
      percentage: '94%',
      studies: 'Evidence-Based'
    },
    {
      name: 'Mindfulness Training',
      benefit: 'Stay present, reduce stress, and enhance intimate connections',
      percentage: '91%',
      studies: 'Clinically Proven'
    },
    {
      name: 'Emotional Regulation',
      benefit: 'Manage anxiety and build emotional resilience for lasting confidence',
      percentage: '89%',
      studies: 'Research-Backed'
    },
    {
      name: 'Relationship Counseling',
      benefit: 'Improve communication and intimacy with your partner',
      percentage: '93%',
      studies: 'Therapist-Led'
    }
  ];

  return (
    <section className="science-section" id="about">
      <div className="science-container">
        <div className="science-content">
          <div className="science-text">
            <h2 className="science-title">Our Approach</h2>
            <p className="science-description">
              We believe lasting recovery comes from addressing the emotional and psychological 
              roots of ED and PE. Our evidence-based therapeutic approach helps you overcome 
              anxiety, rebuild confidence, and create healthy intimate relationships.
            </p>
            <div className="science-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Evidence-Based Therapy Methods</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Licensed Mental Health Professionals</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Holistic Emotional Wellness</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Safe, Judgment-Free Environment</span>
              </div>
            </div>
          </div>

          <div className="ingredients-list">
            {approaches.map((approach, index) => (
              <div key={index} className="ingredient-card">
                <div className="ingredient-header">
                  <h4 className="ingredient-name">{approach.name}</h4>
                  <span className="ingredient-percentage">{approach.percentage}</span>
                </div>
                <p className="ingredient-benefit">{approach.benefit}</p>
                <span className="ingredient-studies">{approach.studies}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;