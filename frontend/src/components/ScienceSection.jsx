import React from 'react';
import { Check } from 'lucide-react';
import './ScienceSection.css';

const ScienceSection = () => {
  const ingredients = [
    {
      name: 'L-Arginine',
      benefit: 'Boosts nitric oxide for improved blood flow',
      percentage: '95%',
      studies: '12 Clinical Studies'
    },
    {
      name: 'Tribulus Terrestris',
      benefit: 'Supports testosterone and libido naturally',
      percentage: '89%',
      studies: '8 Clinical Studies'
    },
    {
      name: 'Maca Root',
      benefit: 'Enhances energy, stamina, and performance',
      percentage: '92%',
      studies: '15 Clinical Studies'
    },
    {
      name: 'Ginseng Extract',
      benefit: 'Improves energy and reduces stress',
      percentage: '88%',
      studies: '20 Clinical Studies'
    }
  ];

  return (
    <section className="science-section" id="about">
      <div className="science-container">
        <div className="science-content">
          <div className="science-text">
            <h2 className="science-title">Backed by Science</h2>
            <p className="science-description">
              Our formulas combine traditional wisdom with modern science. Every ingredient 
              is carefully selected based on clinical research and proven efficacy in supporting 
              men's sexual health and wellness.
            </p>
            <div className="science-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Clinically Tested Ingredients</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>Third-Party Lab Verified</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>GMP Certified Facility</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <Check size={20} />
                </div>
                <span>No Artificial Additives</span>
              </div>
            </div>
          </div>

          <div className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-card">
                <div className="ingredient-header">
                  <h4 className="ingredient-name">{ingredient.name}</h4>
                  <span className="ingredient-percentage">{ingredient.percentage}</span>
                </div>
                <p className="ingredient-benefit">{ingredient.benefit}</p>
                <span className="ingredient-studies">{ingredient.studies}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;