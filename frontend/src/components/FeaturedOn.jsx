import React from 'react';
import './FeaturedOn.css';

const mediaLogoPath = (fileName) => `${process.env.PUBLIC_URL || ''}/${fileName}`;

const FeaturedOn = () => {
  const mediaLogos = [
    {
      name: 'CNN',
      logo: mediaLogoPath('logo_cnn.webp'),
      alt: 'CNN logo'
    },
    {
      name: 'BBC',
      logo: mediaLogoPath('logo-bbc.webp'),
      alt: 'BBC logo'
    },
    {
      name: 'The New York Times',
      logo: mediaLogoPath('logo_nyt.webp'),
      alt: 'The New York Times logo'
    },
    {
      name: 'USA Today',
      logo: mediaLogoPath('logo_usa-today.webp'),
      alt: 'USA Today logo'
    },
    {
      name: 'Entrepreneur',
      logo: mediaLogoPath('logo_entrepreneur.webp'),
      alt: 'Entrepreneur Magazine logo'
    },
    {
      name: 'Inc.',
      logo: mediaLogoPath('logo-inc.webp'),
      alt: 'Inc. Magazine logo'
    },
    {
      name: 'Forbes',
      logo: mediaLogoPath('logo_forbes.webp'),
      alt: 'Forbes logo'
    }
  ];

  const mediaSpotlights = [
    {
      name: 'Hindustan Times',
      headline: '"India\'s most trusted natural program for men\'s sexual health."',
      description: 'Discover how our comprehensive five-pillar system is transforming the landscape of men\'s wellness through personalized, evidence-based strategies that address the whole person.',
      date: 'May 2024',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      alt: 'Hindustan Times newsroom feature'
    },
    {
      name: 'Times of India',
      headline: 'Featured in the Health & Lifestyle report on long-term ED recovery.',
      description: 'Learn why leading health professionals are embracing our innovative approach that combines cutting-edge research with time-tested wellness principles for lasting results.',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80',
      alt: 'Times of India editorial highlight'
    },
    {
      name: 'Forbes',
      headline: 'Recognized for building a science-backed alternative to quick fixes.',
      description: 'Explore the remarkable success stories and clinical outcomes that demonstrate the power of our holistic methodology in creating sustainable health improvements.',
      date: 'Jan 2025',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      alt: 'Forbes feature imagery'
    }
  ];

  return (
    <div className="featured-on">
      <p className="featured-label">AS FEATURED ON</p>
      <div className="featured-logos-container">
        <div className="featured-logos">
          {/* First set */}
          {mediaLogos.map((media, index) => (
            <div key={`${media.name}-1`} className="media-logo-wrapper">
              <img 
                src={media.logo} 
                alt={media.alt}
                className="media-logo"
                loading="lazy"
              />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {mediaLogos.map((media, index) => (
            <div key={`${media.name}-2`} className="media-logo-wrapper">
              <img 
                src={media.logo} 
                alt={media.alt}
                className="media-logo"
                loading="lazy"
              />
            </div>
          ))}
          {/* Third set to ensure no gaps */}
          {mediaLogos.map((media, index) => (
            <div key={`${media.name}-3`} className="media-logo-wrapper">
              <img 
                src={media.logo} 
                alt={media.alt}
                className="media-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="featured-spotlights">
        {mediaSpotlights.map((feature) => (
          <article key={feature.name} className="spotlight-card">
            <div className="spotlight-image-wrapper">
              <img 
                src={feature.image}
                alt={feature.alt}
                loading="lazy"
                className="spotlight-image"
              />
            </div>
            <div className="spotlight-meta">
              <p className="spotlight-source">{feature.name}</p>
              <h4 className="spotlight-headline">{feature.headline}</h4>
              <p className="spotlight-description">{feature.description}</p>
              <span className="spotlight-date">{feature.date}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOn;

