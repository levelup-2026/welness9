import React from 'react';
import { Heart, Zap, Timer, ArrowRight, CheckCircle } from 'lucide-react';
import './PainPoints.css';

const PainPoints = () => {
  const painPoints = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/happy-couple.png`,
      icon: <Heart strokeWidth={2.5} />,
      title: "2000+ MEN",
      subtitle: "'SAVED THEIR MARRIAGE' AND RELATIONSHIP",
      alt: "Happy couple enjoying their relationship"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/confident-man.png`,
      icon: <Zap strokeWidth={2.5} />,
      title: "1,500+ MEN",
      subtitle: "REVERSED THEIR ERECTILE DYSFUNCTION",
      alt: "Confident man full of vitality"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/relaxed-man.png`,
      icon: <Timer strokeWidth={2.5} />,
      title: "1,300+ MEN",
      subtitle: "FIXED THEIR PREMATURE EJACULATION",
      alt: "Relaxed man in control"
    }
  ];

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pain-points" className="pain-points-section">
      <div className="pain-points-container">
        {/* Section Header */}
        <div className="pain-header">
          <h2 className="pain-title">
            We've <span className="pain-title-highlight">Helped</span>
          </h2>
        </div>

        {/* Success Stats Cards Grid */}
        <div className="pain-points-grid">
          {painPoints.map((point) => (
            <div key={point.id} className="pain-card">
              {/* Card Image */}
              <div className="pain-card-image">
                <img
                  src={point.image}
                  alt={point.alt}
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="pain-card-content">
                {/* Icon - above text */}
                <div className="pain-card-icon">
                  {point.icon}
                </div>

                <div className="pain-card-text-wrapper">
                  <h3 className="pain-card-title">
                    <span>{point.title}</span>
                    <span>{point.subtitle}</span>
                  </h3>

                  {/* Arrow */}
                  <div className="pain-card-arrow">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pain-cta-wrapper">
          <button className="pain-cta-button" onClick={handleCTAClick}>
            <span>DISCOVER A PERMANENT NATURAL SOLUTION</span>
            <ArrowRight className="pain-cta-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
