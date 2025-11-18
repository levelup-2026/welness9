import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './ProductLibrary.css';

const ProductLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('performance');

  const categories = [
    { id: 'performance', name: 'Performance Boosters', icon: '⚡' },
    { id: 'confidence', name: 'Confidence', icon: '💎' },
    { id: 'ed-support', name: 'ED Support', icon: '🌿' },
    { id: 'pe-control', name: 'PE Control', icon: '🔥' }
  ];

  const products = {
    performance: [
      {
        id: 1,
        name: 'Nitric Oxide Boost',
        subcategory: 'Blood Flow',
        description: 'Supports healthy circulation and performance',
        image: 'https://images.unsplash.com/photo-1550572017-4bdb06043023?w=500&h=400&fit=crop',
        bgColor: '#E5F2FF'
      },
      {
        id: 2,
        name: 'Energy Complex',
        subcategory: 'Stamina',
        description: 'Natural energy for peak performance',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop',
        bgColor: '#FFF4B8'
      }
    ],
    confidence: [
      {
        id: 3,
        name: 'Mood Enhancer',
        subcategory: 'Mental Wellness',
        description: 'Support stress-free confidence',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&h=400&fit=crop',
        bgColor: '#F5E6FF'
      }
    ],
    'ed-support': [
      {
        id: 4,
        name: 'Recovery Formula',
        subcategory: 'ED Support',
        description: 'Natural support for erectile function',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=400&fit=crop',
        bgColor: '#E5F2FF'
      }
    ],
    'pe-control': [
      {
        id: 5,
        name: 'Control Master',
        subcategory: 'PE Treatment',
        description: 'Enhanced stamina and control',
        image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&h=400&fit=crop',
        bgColor: '#FFF4B8'
      }
    ]
  };

  return (
    <section className="product-library">
      <div className="library-container">
        <div className="library-header-section">
          <h2 className="library-main-title">Product Library</h2>
          <button className="build-pack-btn">
            Build your own personalized monthly pack!
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="library-content">
          <aside className="category-sidebar">
            <div className="sidebar-header">
              <span className="sidebar-label">/ Library <span className="superscript">02</span></span>
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
            {products[activeCategory]?.map((product) => (
              <div key={product.id} className="showcase-card" style={{ background: product.bgColor }}>
                <div className="showcase-card-header">
                  <span className="showcase-category">{product.subcategory}</span>
                  <button className="showcase-link-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="showcase-add-btn">+</button>
                </div>

                <h3 className="showcase-product-name">{product.name}</h3>
                <p className="showcase-description">{product.description}</p>

                <div className="showcase-image-container">
                  <img src={product.image} alt={product.name} className="showcase-img" />
                  <div className="showcase-icons">
                    <span className="showcase-icon-circle">🌿</span>
                    <span className="showcase-icon-circle">✓</span>
                    <span className="showcase-icon-circle">📊</span>
                  </div>
                </div>

                <button className="showcase-cta">
                  Is this right for you?
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