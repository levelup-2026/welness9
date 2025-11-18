import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Performance Plus',
      category: 'ED Support',
      description: 'Natural support for lasting performance',
      image: 'https://images.unsplash.com/photo-1550572017-4bdb06043023?w=400&h=400&fit=crop',
      bgColor: '#E5F2FF',
      icon: '⚡'
    },
    {
      id: 2,
      name: 'Control Formula',
      category: 'PE Treatment',
      description: 'Enhance stamina and control',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=400&fit=crop',
      bgColor: '#FFF4B8',
      icon: '🔥'
    },
    {
      id: 3,
      name: 'Vitality Boost',
      category: 'Performance',
      description: 'Daily energy and confidence support',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      bgColor: '#F5E6FF',
      icon: '💪'
    }
  ];

  return (
    <section className="featured-products" id="products">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Solutions</h2>
          <button className="explore-btn">
            Explore All
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" style={{ background: product.bgColor }}>
              <div className="product-card-header">
                <span className="product-category">{product.category}</span>
                <button className="product-link-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 8L8 14M14 8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="product-add-btn">+</button>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>

              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-card-img" />
                <div className="product-badge">
                  <span className="badge-icon">{product.icon}</span>
                </div>
              </div>

              <button className="product-cta">
                Is this right for you?
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