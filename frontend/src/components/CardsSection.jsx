import React from 'react';
import { ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react';
import './CardsSection.css';

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="cards-container">
        {/* Left Card - White */}
        <div className="card card-white">
          <div className="card-top">
            <span className="card-tag">
              Meet the Founder <ArrowRight size={14} />
            </span>
          </div>
          <div className="founder-info">
            <h3 className="founder-name">Yash Vardhan</h3>
            <p className="founder-tagline">Transforming Men's Health Naturally</p>
          </div>
          <div className="card-image">
            <img 
              src="/hero1.png" 
              alt="Founder Yash Vardhan coaching session" 
              className="card-img"
            />
            <div className="image-overlay">
              <span className="overlay-badge">Forbes Featured Coach</span>
            </div>
          </div>
        </div>

        {/* Right Column - Trust Badges + Yellow Card */}
        <div className="right-column">
          {/* Trust Badges Grid */}
          <div className="trust-badges-grid">
            <div className="trust-badge-item badge-natural">
              <div className="badge-icon">
                <Shield size={28} strokeWidth={2.5} />
              </div>
              <div className="badge-content">
                <span className="badge-title">100% Natural</span>
                <span className="badge-subtitle">No chemicals or side effects</span>
              </div>
            </div>
            <div className="trust-badge-item badge-results">
              <div className="badge-icon">
                <Clock size={28} strokeWidth={2.5} />
              </div>
              <div className="badge-content">
                <span className="badge-title">Results in 6 Weeks</span>
                <span className="badge-subtitle">Scientifically proven timeline</span>
              </div>
            </div>
            <div className="trust-badge-item badge-success">
              <div className="badge-icon">
                <TrendingUp size={28} strokeWidth={2.5} />
              </div>
              <div className="badge-content">
                <span className="badge-title">5,000+ Success Stories</span>
                <span className="badge-subtitle">Join thousands of transformed men</span>
              </div>
            </div>
          </div>

          {/* Yellow Card - Social Proof */}
          <div className="card card-yellow card-yellow-small">
            <div className="stat-header">
              <h2 className="big-stat">5,000+</h2>
              <span className="stat-badge">And Growing</span>
            </div>
            <p className="stat-text">Men transformed their sexual health naturally</p>
            <div className="stat-footer">
              <div className="avatars">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Success story member" 
                  className="avatar"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/33.jpg" 
                  alt="Success story member" 
                  className="avatar"
                />
                <img 
                  src="https://randomuser.me/api/portraits/men/34.jpg" 
                  alt="Success story member" 
                  className="avatar"
                />
                <div className="avatar-plus">+</div>
              </div>
              <span className="join-text">Join the movement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
