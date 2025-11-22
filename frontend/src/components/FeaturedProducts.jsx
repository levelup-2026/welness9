import React from 'react';
import { ArrowRight, UserRound, UsersRound, Sparkles } from 'lucide-react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const services = [
    {
      id: 1,
      name: 'Individual Therapy',
      category: 'One-on-One',
      description: 'Private sessions with certified therapists specialized in sexual wellness',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      bgColor: '#E5F2FF',
      Icon: UserRound
    },
    {
      id: 2,
      name: 'Group Counseling',
      category: 'Community',
      description: 'Connect with others on similar journeys in a safe, supportive space',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop',
      bgColor: '#FFF4B8',
      Icon: UsersRound
    },
    {
      id: 3,
      name: 'Emotional Coaching',
      category: 'Recovery',
      description: 'Build confidence and overcome anxiety with expert guidance',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
      bgColor: '#F5E6FF',
      Icon: Sparkles
    }
  ];

  return (
    <section className="featured-products" id="services">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <button className="explore-btn">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="products-grid">
          {services.map((service) => (
            <div key={service.id} className="product-card" style={{ background: service.bgColor }}>
              <div className="product-card-header">
                <span className="product-category">{service.category}</span>
                <button className="product-link-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="product-add-btn">+</button>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{service.name}</h3>
                <p className="product-description">{service.description}</p>
              </div>

              <div className="product-image-wrapper">
                <img src={service.image} alt={service.name} className="product-card-img" />
                <div className="product-badge">
                  <service.Icon className="badge-icon" aria-hidden="true" size={20} strokeWidth={2.2} />
                </div>
              </div>

              <button className="product-cta">
                Book a Session
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;