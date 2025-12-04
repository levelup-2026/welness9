import React from 'react';
import { Sparkles, Brain } from 'lucide-react';
import './EmpathySection.css';

const EmpathySection = () => {
  return (
    <section className="empathy-section-v2">
      <div className="empathy-container-v2">
        {/* Left Column: Content */}
        <div className="empathy-content-left">
          <h2 className="empathy-headline-v2">
            You Are <br />
            <span className="highlight-blue">Not Alone</span>
          </h2>
          
          <p className="empathy-body-v2">
            The secret anxiety of Erectile Dysfunction and Premature Ejaculation can feel isolating. 
            You've endured the dread before intimacy, the quiet panic, and the feeling of your own body letting you down.
          </p>
          
          <div className="empathy-callout-v2">
            <p className="callout-text">
              You deserve more than quick fixes. You need the confidence that when the moment arrives, 
              your body will respond perfectly, every single time.
              <Sparkles className="inline-sparkle" size={18} fill="#FACC15" color="#FACC15" style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'text-bottom' }} />
            </p>
          </div>
        </div>

        {/* Right Column: Image & Floating Elements */}
        <div className="empathy-image-right">
          <div className="main-image-wrapper">
            <img 
              src={`${process.env.PUBLIC_URL}/why.png`}
              alt="Understanding your journey" 
              className="main-image-v2" 
            />
            
            {/* Floating Badge: Mental Wellness */}
            <div className="floating-badge mental-wellness">
              <div className="badge-icon-circle">
                <Brain size={18} color="white" />
              </div>
              <span className="badge-text">MENTAL WELLNESS</span>
            </div>

            {/* Floating Card: Community */}
            <div className="floating-card community-card">
              <div className="avatar-group-v2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="avatar-v2" />
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" className="avatar-v2" />
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="User" className="avatar-v2" />
                <div className="avatar-plus-v2">+</div>
              </div>
              <p className="community-text">Join thousands of men</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathySection;
