import React from 'react';
import { Sparkles, Zap, Heart, TrendingUp } from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import './TransformationVision.css';
import '../styles/BlobAnimations.css';

const TransformationVision = () => {
  // Custom SVG Icons matching hero section style
  const FirmIcon = () => (
    <img src="/arm-muscles-silhouette-svgrepo-com.svg" width="24" height="24" alt="" />
  );

  const FreedomIcon = () => (
    <img src="/heart-pulse-svgrepo-com.svg" width="24" height="24" alt="" />
  );

  const HealthyBodyIcon = () => (
    <img src="/stopwatch-svgrepo-com.svg" width="24" height="24" alt="" />
  );

  const visionCards = [
    {
      icon: <FirmIcon />,
      title: 'Erections that are naturally firm, strong, and lasting',
      color: 'blue',
      gradient: 'from-blue-50 to-blue-100',
      accentColor: '#3B82F6',
      decorativeElement: 'squiggle'
    },
    {
      icon: <FreedomIcon />,
      title: 'Freedom from timing sex around medication schedules',
      color: 'purple',
      gradient: 'from-purple-50 to-purple-100',
      accentColor: '#A78BFA',
      decorativeElement: 'wave'
    },
    {
      icon: <HealthyBodyIcon />,
      title: 'A healthier body and better energy that radiates confidence',
      color: 'orange',
      gradient: 'from-orange-50 to-orange-100',
      accentColor: '#FB923C',
      decorativeElement: 'spiral'
    }
  ];

  return (
    <section id="transformation" className="transformation-vision-section">
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={6}
        colors={['blue', 'purple', 'orange', 'yellow', 'blue', 'purple']}
        sizes={['xl', 'lg', 'md', 'lg', 'md', 'sm']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="xl"
        animationType="morph"
        enableMouseTracking={true}
        enableScrollEffect={true}
        intensity={0.25}
        style={{ top: '8%', right: '5%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="lg"
        animationType="float"
        enableMouseTracking={true}
        intensity={0.2}
        style={{ top: '45%', left: '3%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="orange"
        size="md"
        animationType="morph-reverse"
        enableScrollEffect={true}
        style={{ bottom: '15%', right: '8%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="yellow"
        size="md"
        animationType="pulse"
        enableMouseTracking={true}
        intensity={0.15}
        style={{ top: '30%', right: '12%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="arrow"
        color="blue"
        animate={true}
        float={true}
        width={320}
        height={80}
        strokeWidth={3}
        style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="squiggle"
        color="purple"
        animate={true}
        wiggle={true}
        width={350}
        height={100}
        strokeWidth={2}
        style={{ position: 'absolute', top: '55%', right: '8%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="wave"
        color="orange"
        animate={true}
        float={true}
        width={280}
        height={90}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '20%', left: '10%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="spiral"
        color="yellow"
        animate={true}
        wiggle={true}
        width={150}
        height={150}
        strokeWidth={2}
        style={{ position: 'absolute', top: '35%', left: '15%', opacity: 0.3, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '15%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '35%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#FB923C', top: '55%', animationDuration: '4.5s' }} />
        <div className="particle" style={{ color: '#FCD34D', top: '75%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '22%', left: '85%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '62%', left: '15%', animationDelay: '1.5s' }} />
        <div className="sparkle" style={{ top: '42%', left: '90%', animationDelay: '2.5s' }} />
        <div className="sparkle" style={{ top: '82%', left: '80%', animationDelay: '3s' }} />
      </div>

      <div className="transformation-container">
        {/* Section Header */}
        <div className="transformation-header">
          <div className="header-eyebrow">
            <Sparkles size={20} className="eyebrow-icon" />
            <span>IMAGINE YOUR TRANSFORMATION</span>
          </div>
          
          <h2 className="transformation-main-title">
            What if you could
            <span className="title-highlight">
              achieve...
              <svg className="title-underline" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,12 Q100,8 200,12 T395,12" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                <path d="M5,14 Q100,10 200,14 T395,14" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Vision Cards Grid */}
        <div className="vision-cards-grid">
          {visionCards.map((card, index) => {
            // Map images to each card
            const cardImages = [
              `${process.env.PUBLIC_URL}/muscle transparent.png`,
              `${process.env.PUBLIC_URL}/couple-transparent.png`,
              `${process.env.PUBLIC_URL}/hiking-transparent.png`
            ];
            
            const backgroundImages = [
              `${process.env.PUBLIC_URL}/blur-gym.jpeg`,
              `${process.env.PUBLIC_URL}/blur-beach.jpeg`,
              `${process.env.PUBLIC_URL}/blur-muntaain.jpeg`
            ];
            
            const imageAlts = [
              'Man flexing showing strength',
              'Couple showing freedom and connection',
              'Person hiking showing vitality and energy'
            ];

            return (
              <div 
                key={index}
                className={`vision-card vision-card-${card.color}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Image Layer */}
                <div className="transformation-card-background-layer">
                  <img 
                    src={backgroundImages[index]} 
                    alt="" 
                    className="transformation-card-background-image"
                  />
                </div>

                {/* Card Image (Transparent PNG) */}
                <img 
                  src={cardImages[index]} 
                  alt={imageAlts[index]} 
                  className="transformation-card-image"
                />

                {/* Card Content Wrapper */}
                <div className="transformation-card-content">
                  {/* Card Number Badge */}
                  <div className="card-number-badge">
                    <span className="badge-number">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Icon Circle */}
                  <div className="vision-icon-wrapper">
                    <div className="vision-icon-circle" style={{ background: `linear-gradient(135deg, ${card.accentColor}20, ${card.accentColor}40)` }}>
                      {card.icon}
                    </div>
                    
                    {/* Decorative ring */}
                    <svg className="icon-ring" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        stroke={card.accentColor} 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                        fill="none"
                        opacity="0.3"
                      />
                    </svg>
                  </div>

                  {/* Card Content */}
                  <h3 className="vision-card-title">{card.title}</h3>

                  {/* Decorative Element */}
                  <div className="card-decorative">
                    {card.decorativeElement === 'squiggle' && (
                      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <path 
                          d="M5,20 C15,10 25,30 35,20 S55,10 65,20 S75,30 75,20" 
                          stroke={card.accentColor} 
                          strokeWidth="2" 
                          opacity="0.3"
                        />
                      </svg>
                    )}
                    {card.decorativeElement === 'wave' && (
                      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <path 
                          d="M5,20 Q20,10 35,20 T65,20" 
                          stroke={card.accentColor} 
                          strokeWidth="2" 
                          opacity="0.3"
                        />
                      </svg>
                    )}
                    {card.decorativeElement === 'spiral' && (
                      <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                        <circle cx="40" cy="20" r="15" stroke={card.accentColor} strokeWidth="2" strokeDasharray="3 3" fill="none" opacity="0.3" />
                      </svg>
                    )}
                  </div>

                  {/* Gradient overlay */}
                  <div className={`card-gradient-overlay bg-gradient-to-br ${card.gradient}`}></div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default TransformationVision;
