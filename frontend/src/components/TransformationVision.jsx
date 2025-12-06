import React from 'react';
import { Sparkles } from 'lucide-react';
import './TransformationVision.css';

const TransformationVision = () => {
  // Custom SVG Icons matching hero section style
  const FirmIcon = () => (
    <img src="/arm-muscles-silhouette-svgrepo-com.svg" width="24" height="24" alt="" loading="lazy" />
  );

  const FreedomIcon = () => (
    <img src="/heart-pulse-svgrepo-com.svg" width="24" height="24" alt="" loading="lazy" />
  );

  const HealthyBodyIcon = () => (
    <img src="/stopwatch-svgrepo-com.svg" width="24" height="24" alt="" loading="lazy" />
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
      {/* Lightweight decorative background */}
      <div className="transformation-bg-simple" aria-hidden="true" />

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
                    loading="lazy"
                  />
                </div>

                {/* Card Image (Transparent PNG) */}
                <img 
                  src={cardImages[index]} 
                  alt={imageAlts[index]} 
                  className="transformation-card-image"
                  loading="lazy"
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
