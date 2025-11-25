import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Users, CheckCircle, Shield, TrendingUp, Flame } from 'lucide-react';
import './ProgramSection.css';

const ProgramSection = () => {
  const navigate = useNavigate();
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

  const painPoints = [
    {
      illustration: '/illustration.svg',
      text: "You've tried pills, but they only work temporarily and come with side effects"
    },
    {
      illustration: '/illustration2.svg',
      text: 'Performance anxiety is affecting your confidence and relationships'
    },
    {
      illustration: '/illustration3.svg',
      text: "You're frustrated with temporary solutions that don't address the root cause"
    },
    {
      illustration: '/illustration4.svg',
      text: "You feel stuck and don't know where to turn for real, lasting help"
    }
  ];

  return (
    <section className="program-section" id="program">
      {/* Background Doodles */}
      <div className="program-bg-decoration program-bg-left">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40,160 Q10,100 40,40 T160,40 T160,160 T40,160" stroke="#E0F2FE" strokeWidth="4" fill="none" opacity="0.6" />
          <circle cx="100" cy="100" r="10" fill="#BAE6FD" opacity="0.4" />
        </svg>
      </div>
      <div className="program-bg-decoration program-bg-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,20 L180,180" stroke="#FEF3C7" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
          <path d="M180,20 L20,180" stroke="#FEF3C7" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      <div className="program-container">
        {/* Problem Agitation */}
        <div className="problem-section">
          <div className="section-doodle-header">
            <svg className="doodle-underline" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,15 Q150,5 295,15" stroke="#FCA5A5" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
            <h2 className="problem-title">
              If You're Struggling with ED or PE, You're <span className="highlight-red">Not Alone</span>
            </h2>
          </div>
          
          <div className="problem-grid">
            {painPoints.map(({ illustration, text }, index) => (
              <div key={text} className={`problem-card problem-card-${index + 1}`}>
                <div className="problem-card-doodle">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="#F1F5F9" strokeWidth="2" strokeDasharray="4,4" />
                  </svg>
                </div>
                <div className="problem-card-content">
                  <div className="problem-illustration">
                    <img src={illustration} alt="" className="problem-svg" />
                  </div>
                  <p className="problem-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="problem-solution-wrapper">
            <svg className="solution-arrow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,10 L50,80 M50,80 L20,50 M50,80 L80,50" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="problem-solution-intro">
              <strong>Here's the truth:</strong> ED and PE aren't permanent conditions. They're symptoms of fixable biological imbalances. And we've helped over 5,000 Indian men reverse them completely—naturally.
            </p>
          </div>
        </div>

        {/* VSL Section - YouTube Embed */}
        <div className="vsl-section">
          <div className="vsl-header-doodle">
            <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,25 Q50,5 90,25" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="vsl-title">Watch: How Our System Works</h3>
          <p className="vsl-subtitle">
            See how we've helped thousands of men reverse ED & PE naturally in just 4 months
          </p>
          
          <div className="video-wrapper-outer">
            <div className="video-doodle-bg"></div>
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
        </div>

        {/* Program Overview */}
        <div className="program-overview">
          <h3 className="overview-title">The Banana Health Program</h3>
          <div className="program-features-grid">
            {programFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="program-feature-card">
                  <div className="feature-doodle-bg">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,50 Q30,20 50,50 T90,50" stroke="#E0F2FE" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  </div>
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

        {/* Final CTA - Assessment Card Only */}
        <div className="program-cta">
          <div className="assessment-card-program">
            <div className="assessment-card-inner">
              <div className="assessment-left-side">
                <div className="assessment-blob-wrapper-program">
                  <svg className="assessment-blob-program" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgba(59, 130, 246, 0.2)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.4,90,-15.8,88.5,-0.3C87,14.2,81.4,27.7,73.2,39.8C65,51.9,54.2,62.6,41.3,69.8C28.4,77,13.2,80.7,-1.6,83.5C-16.4,86.3,-32.8,88.2,-46.3,81.9C-59.8,75.6,-70.4,61.1,-77.8,45.3C-85.2,29.5,-89.4,12.4,-88.3,-4.2C-87.2,-20.8,-80.8,-36.9,-71.2,-50.1C-61.6,-63.3,-48.8,-73.6,-34.5,-80.6C-20.2,-87.6,-4.4,-91.3,9.8,-88.5C24,-85.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                  <div className="scribble-circle-program">
                    <svg className="scribble-program" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20,50 Q30,30 50,50 T80,50" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="35" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="3,6" />
                    </svg>
                    <Flame size={28} className="assessment-icon-program" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="assessment-right-side">
                <div className="assessment-content-program">
                  <div className="assessment-badge-program">
                    <span className="badge-dot-program"></span>
                    Free • 2 Minutes
                  </div>
                  <h4 className="assessment-title-program">Take Free Assessment</h4>
                </div>
              </div>
              <div className="assessment-button-wrapper">
                <button 
                  className="assessment-btn-program"
                  onClick={() => navigate('/quiz')}
                >
                  <span>Start Now</span>
                  <svg className="arrow-scribble-program" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10 L16 10 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="assessment-decorative-program">
              <svg className="doodle-program doodle-program-1" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,20 Q15,10 20,20 T30,20" stroke="#FACC15" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <svg className="doodle-program doodle-program-2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="12" stroke="#60A5FA" strokeWidth="2" fill="none" strokeDasharray="2,4" />
              </svg>
              <div className="mini-blob-program mini-blob-program-1"></div>
              <div className="mini-blob-program mini-blob-program-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

