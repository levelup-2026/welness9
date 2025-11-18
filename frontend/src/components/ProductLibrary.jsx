import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './ProductLibrary.css';

const ProductLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('therapy');

  const categories = [
    { id: 'therapy', name: 'Therapy Programs', icon: '💭' },
    { id: 'coaching', name: 'Coaching', icon: '🎯' },
    { id: 'workshops', name: 'Workshops', icon: '🧠' },
    { id: 'support', name: 'Support Groups', icon: '🤝' }
  ];

  const programs = {
    therapy: [
      {
        id: 1,
        name: 'Performance Anxiety',
        subcategory: 'Individual',
        description: 'Overcome mental blocks and build lasting confidence',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=400&fit=crop',
        bgColor: '#E5F2FF'
      },
      {
        id: 2,
        name: 'Relationship Therapy',
        subcategory: 'Couples',
        description: 'Strengthen intimacy and communication with your partner',
        image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=400&fit=crop',
        bgColor: '#FFF4B8'
      }
    ],
    coaching: [
      {
        id: 3,
        name: 'Confidence Building',
        subcategory: 'Self-Development',
        description: 'Develop self-assurance and positive mindset',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=400&fit=crop',
        bgColor: '#F5E6FF'
      }
    ],
    workshops: [
      {
        id: 4,
        name: 'Mindfulness for Intimacy',
        subcategory: 'Workshop',
        description: 'Learn techniques to stay present and connected',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=400&fit=crop',
        bgColor: '#E5F2FF'
      }
    ],
    support: [
      {
        id: 5,
        name: 'Weekly Support Circle',
        subcategory: 'Group',
        description: 'Share experiences in a judgment-free community',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop',
        bgColor: '#FFF4B8'
      }
    ]
  };

  return (
    <section className="product-library">
      <div className="library-container">
        <div className="library-header-section">
          <h2 className="library-main-title">Program Library</h2>
          <button className="build-pack-btn">
            Schedule Free Consultation
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="library-content">
          <aside className="category-sidebar">
            <div className="sidebar-header">
              <span className="sidebar-label">/ Programs <span className="superscript">02</span></span>
            </div>
            <nav className="category-nav">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.name} {category.icon}</span>
                  <span className="plus-icon">+</span>
                </button>
              ))}
            </nav>
          </aside>

          <div className="products-showcase">
            {programs[activeCategory]?.map((program) => (
              <div key={program.id} className="showcase-card" style={{ background: program.bgColor }}>
                <div className="showcase-card-header">
                  <span className="showcase-category">{program.subcategory}</span>
                  <button className="showcase-link-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="showcase-add-btn">+</button>
                </div>

                <h3 className="showcase-product-name">{program.name}</h3>
                <p className="showcase-description">{program.description}</p>

                <div className="showcase-image-container">
                  <img src={program.image} alt={program.name} className="showcase-img" />
                  <div className="showcase-icons">
                    <span className="showcase-icon-circle">💭</span>
                    <span className="showcase-icon-circle">✓</span>
                    <span className="showcase-icon-circle">🎯</span>
                  </div>
                </div>

                <button className="showcase-cta">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLibrary;