import React from 'react';
import './FeaturedOn.css';

const mediaLogoPath = (fileName) => `${process.env.PUBLIC_URL || ''}/${fileName}`;

const FeaturedOn = () => {

  const mediaLogos = [
    {
      name: 'Featured 1',
      logo: mediaLogoPath('test/p6nzkkfsqo-fhfvjhuhal-6929ca03b6f38.webp'),
      alt: 'Featured logo 1'
    },
    {
      name: 'Featured 2',
      logo: mediaLogoPath('test/ef9yj9ovritcqbrrtunpd-6929ca01f043f.webp'),
      alt: 'Featured logo 2'
    },
    {
      name: 'Featured 3',
      logo: mediaLogoPath('test/tkqmw9hderhpjcqmzytwi-6929ca048329e.webp'),
      alt: 'Featured logo 3'
    },
    {
      name: 'Featured 4',
      logo: mediaLogoPath('test/kgln7da-nmv0zajfn0bky-6929ca02e2957.webp'),
      alt: 'Featured logo 4'
    },
    {
      name: 'Featured 5',
      logo: mediaLogoPath('test/kx-bltualv8tbqaeeg4ws-6929ca0398d15.webp'),
      alt: 'Featured logo 5'
    },
    {
      name: 'Featured 6',
      logo: mediaLogoPath('test/tnn0sf6tmeonrxijy5zc3-6929ca057a5a7.webp'),
      alt: 'Featured logo 6'
    },
    {
      name: 'Featured 7',
      logo: mediaLogoPath('test/ix8m3vvtaehd-v2csjdrt-6929ca02c3ce7.webp'),
      alt: 'Featured logo 7'
    },
    {
      name: 'Featured 8',
      logo: mediaLogoPath('test/wymvxl1vue11sn-gjqlfy-6929ca058ebdf.webp'),
      alt: 'Featured logo 8'
    },
    {
      name: 'Featured 9',
      logo: mediaLogoPath('test/tndxhxaa59kntcozt1ffp-6929ca0496442.webp'),
      alt: 'Featured logo 9'
    },
    {
      name: 'Featured 10',
      logo: mediaLogoPath('test/cnltnsug-zvzeo5aafc5n-6929ca00cb953.webp'),
      alt: 'Featured logo 10'
    },
    {
      name: 'Featured 11',
      logo: mediaLogoPath('test/4hocejvnxynzbvywvr84l-6929ca00a81c6.webp'),
      alt: 'Featured logo 11'
    },
    {
      name: 'Featured 12',
      logo: mediaLogoPath('test/h4aptdiblrmrni9l8t03e-6929ca020254d.webp'),
      alt: 'Featured logo 12'
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

