import React from 'react';
import { Heart, Sparkles, Brain } from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import './KeyBenefits.css';
import '../styles/BlobAnimations.css';

const KeyBenefits = () => {
  return (
    <section className="key-benefits-section">
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={5}
        colors={['blue', 'yellow', 'orange', 'purple', 'blue']}
        sizes={['xl', 'lg', 'md', 'lg', 'sm']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        enableScrollEffect={true}
        intensity={0.25}
        style={{ top: '5%', left: '10%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="yellow"
        size="md"
        animationType="float-slow"
        enableMouseTracking={true}
        intensity={0.15}
        style={{ top: '50%', right: '5%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="orange"
        size="md"
        animationType="morph-reverse"
        enableScrollEffect={true}
        style={{ bottom: '10%', left: '8%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="sm"
        animationType="pulse"
        enableMouseTracking={true}
        intensity={0.2}
        style={{ top: '30%', right: '15%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="squiggle"
        color="blue"
        animate={true}
        float={true}
        width={350}
        height={100}
        strokeWidth={3}
        style={{ position: 'absolute', top: '12%', right: '8%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="wave"
        color="yellow"
        animate={true}
        wiggle={true}
        width={300}
        height={90}
        strokeWidth={2}
        style={{ position: 'absolute', top: '55%', left: '5%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="spiral"
        color="orange"
        animate={true}
        float={true}
        width={160}
        height={160}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '15%', right: '10%', opacity: 0.3, zIndex: 0 }}
      />
      <ScribbleLine
        type="arrow"
        color="purple"
        animate={true}
        wiggle={true}
        width={280}
        height={70}
        strokeWidth={2}
        style={{ position: 'absolute', top: '40%', left: '8%', opacity: 0.4, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '18%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#FCD34D', top: '38%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#FB923C', top: '58%', animationDuration: '4.5s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '78%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '25%', left: '80%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '65%', left: '20%', animationDelay: '1.5s' }} />
        <div className="sparkle" style={{ top: '45%', left: '88%', animationDelay: '2.5s' }} />
      </div>

      {/* Background decorative elements */}
      <div className="benefits-bg-decoration benefits-bg-left">
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="120" stroke="#E0F2FE" strokeWidth="4" strokeDasharray="8,8" opacity="0.4" />
          <path d="M50,150 Q100,80 150,150 T250,150" stroke="#93C5FD" strokeWidth="3" fill="none" opacity="0.5" />
        </svg>
      </div>
      <div className="benefits-bg-decoration benefits-bg-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,-50C45,-40,60,-30,70,-15C80,0,85,20,82,35C79,50,68,60,55,65C42,70,27,70,15,62C3,54,-5,38,-8,22C-11,6,-9,-10,-2,-23C5,-36,15,-46,30,-50Z" fill="#FED7AA" opacity="0.3" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="key-benefits-container">
        {/* Section Header */}
        <div className="benefits-header">
          <h2 className="benefits-title">
            <span className="benefits-highlight-container">
              Are you <span className="highlight-blue">also?</span>
              <svg className="benefits-title-underline" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3,8 Q75,3 150,8 T297,8" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p className="benefits-subtitle">
            If these struggles feel familiar, you're not alone
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="key-benefits-grid">
          {/* Connecting Doodles - Desktop only */}
          <svg className="benefits-connector connector-1-2" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,20 100,50 T190,50" stroke="#93C5FD" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <circle cx="100" cy="50" r="4" fill="#60A5FA" opacity="0.8" />
          </svg>
          
          <svg className="benefits-connector connector-2-3" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 Q50,80 100,50 T190,50" stroke="#FED7AA" strokeWidth="3" strokeDasharray="6,6" strokeLinecap="round" opacity="0.6" />
            <path d="M95,48 L100,50 L95,52" stroke="#F97316" strokeWidth="2" fill="none" />
          </svg>

          {/* Card 1 - Tired of temporary fixes */}
          <div className="benefit-card benefit-card-1">
            <div className="benefit-card-doodle benefit-doodle-1">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="35" stroke="#FEF3C7" strokeWidth="3" strokeDasharray="5,5" opacity="0.6" />
                <path d="M30,70 Q50,40 70,70" stroke="#FDE047" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/tiredoftep.png`}
                alt="Tired of temporary fixes"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge">We Understand</div>
              <h3 className="benefit-title">Tired of<br />temporary fixes?</h3>
            </div>
          </div>

          {/* Card 2 - Sick of the anxiety */}
          <div className="benefit-card benefit-card-2">
            <div className="benefit-card-doodle benefit-doodle-2">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" stroke="#DBEAFE" strokeWidth="3" strokeDasharray="8,4" rx="10" opacity="0.5" />
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/anxity.png`}
                alt="Sick of anxiety that ruins intimacy"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge benefit-badge-blue">You're Not Alone</div>
              <h3 className="benefit-title">Sick of the anxiety<br />that ruins intimacy?</h3>
            </div>
          </div>

          {/* Card 3 - Frustrated by programs that deliver disappointment */}
          <div className="benefit-card benefit-card-3">
            <div className="benefit-card-doodle benefit-doodle-3">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20,80 Q30,20 50,50 Q70,80 80,20" stroke="#FEF3C7" strokeWidth="3" fill="none" opacity="0.5" />
                <circle cx="50" cy="50" r="8" fill="#FCD34D" opacity="0.6" />
              </svg>
            </div>
            <div className="benefit-visual">
              <img 
                src={`${process.env.PUBLIC_URL}/disapointment.png`}
                alt="Frustrated by programs that deliver disappointment"
                className="benefit-svg"
              />
            </div>
            <div className="benefit-content">
              <div className="benefit-badge benefit-badge-orange">We're Different</div>
              <h3 className="benefit-title">Frustrated by programs<br />that deliver disappointment?</h3>
            </div>
          </div>
        </div>

        {/* Empathy Closing Statement - Redesigned with Hero Style */}
        <div className="empathy-section-v2">
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
        </div>

        {/* Bottom Decorative Doodles */}
        <div className="benefits-bottom-doodles">
          <svg className="bottom-doodle-left" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,75 Q50,20 80,75 T140,75" stroke="#93C5FD" strokeWidth="3" strokeDasharray="10,5" strokeLinecap="round" opacity="0.4" />
            <circle cx="75" cy="50" r="6" fill="#60A5FA" opacity="0.5" />
          </svg>
          <svg className="bottom-doodle-right" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,100 L50,50 L90,100 L130,50" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            <circle cx="50" cy="50" r="5" fill="#FB923C" opacity="0.6" />
            <circle cx="90" cy="100" r="5" fill="#FDBA74" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
