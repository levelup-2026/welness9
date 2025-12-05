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
      name: 'Cosmopolitan',
      headline: 'Watch Out: These Food Triggers Can Make You Overeat',
      description: 'Understanding the science behind food triggers and how to manage them for better health outcomes.',
      date: 'June 2021',
      url: 'https://www.cosmopolitan.in/life/features/story/watch-out-these-food-triggers-can-make-you-overeat-663741-2021-06-25',
      publisher: 'Cosmopolitan',
      image: mediaLogoPath('cosmopolitian.jpg')
    },
    {
      name: 'India Today',
      headline: 'Meet 10 Leaders Who Make India a Global Bright Spot',
      description: 'Featuring influential leaders transforming India\'s wellness and fitness landscape.',
      date: 'December 2022',
      url: 'https://www.indiatoday.in/impact-feature/story/meet-10-leaders-who-make-india-a-global-bright-spot-2309980-2022-12-16',
      publisher: 'India Today',
      image: mediaLogoPath('indiatoday.jpg')
    },
    {
      name: 'Times of India',
      headline: 'Weight Loss Story: I Did Cardio and Weight Training 5 Days to Lose 44 Kilos',
      description: 'Inspiring transformation journey showcasing the power of consistent fitness routines.',
      date: 'December 2021',
      url: 'https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-story-i-did-cardio-and-weight-training-5-days-to-lose-44-kilos/photostory/87607509.cms?from=mdr',
      publisher: 'Times of India',
      image: mediaLogoPath('TOI.jpg')
    },
    {
      name: 'Mid-Day',
      headline: 'Yash Vardhan Swami Takes Fitness and Entrepreneurship to Next Level',
      description: 'How one fitness entrepreneur is revolutionizing the wellness industry.',
      date: 'May 2019',
      url: 'https://www.mid-day.com/entertainment/bollywood-news/article/yash-vardhan-swami-takes-fitness-and-entrepreneurship-to-next-level-21197158',
      publisher: 'Mid-Day',
      image: mediaLogoPath('MIDDAY.jpg')
    },
    {
      name: 'Red Bull',
      headline: 'Nutrition Tips to Achieve Fitness Goals',
      description: 'Expert advice on nutrition strategies for optimal fitness performance.',
      date: '2023',
      url: 'https://www.redbull.com/in-en/nutrition-tips-to-achieve-fitness-goals',
      publisher: 'Red Bull',
      image: mediaLogoPath('REDBULL.jpg')
    },
    {
      name: 'DNA India',
      headline: 'Real Body Positivity is Misunderstood - Celebrity Fitness Coach',
      description: 'Celebrity fitness coach Yash Vardhan Swami shares insights on true body positivity.',
      date: 'April 2021',
      url: 'https://www.dnaindia.com/lifestyle/report-real-body-positivity-is-misunderstood-celebrity-fitness-coach-yash-vardhan-swami-2842993',
      publisher: 'DNA',
      image: mediaLogoPath('DNA.jpg')
    },
    {
      name: 'The Pioneer',
      headline: 'Inch Away - The Journey to Better Health',
      description: 'Exploring sustainable approaches to wellness and fitness transformation.',
      date: 'May 2022',
      url: 'https://www.dailypioneer.com/2022/vivacity/inch-away.html',
      publisher: 'The Pioneer',
      image: mediaLogoPath('PIONEER.jpg')
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

      <div className="featured-spotlights-container">
        <div className="featured-spotlights">
          {mediaSpotlights.map((feature, index) => (
            <a 
              key={index} 
              href={feature.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="spotlight-card"
            >
              <div className="spotlight-image-wrapper">
                {feature.image ? (
                  <img 
                    src={feature.image} 
                    alt={`${feature.publisher} logo`}
                    className="spotlight-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="spotlight-placeholder">
                    <span className="spotlight-publisher-name">{feature.publisher}</span>
                  </div>
                )}
              </div>
              <div className="spotlight-meta">
                <p className="spotlight-source">{feature.name}</p>
                <h4 className="spotlight-headline">{feature.headline}</h4>
                <p className="spotlight-description">{feature.description}</p>
                <span className="spotlight-date">{feature.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Men We've Helped Section */}
      <div className="men-helped">
        <div className="men-helped-header">
          <p className="men-helped-kicker">Real Results</p>
          <h3>Men We've Helped</h3>
        </div>
        <div className="men-helped-stats">
          <div className="men-helped-card">
            <div className="men-helped-icon-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/heart-pulse.svg'}
                alt="ED recovery icon"
                className="men-helped-icon"
                loading="lazy"
              />
            </div>
            <div className="men-helped-content">
              <p className="men-helped-number">1,500+</p>
              <p className="men-helped-text">men reversed their Erectile Dysfunction</p>
            </div>
          </div>
          <div className="men-helped-card">
            <div className="men-helped-icon-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/time-past.svg'}
                alt="PE solution icon"
                className="men-helped-icon"
                loading="lazy"
              />
            </div>
            <div className="men-helped-content">
              <p className="men-helped-number">1,800+</p>
              <p className="men-helped-text">men fixed their Premature Ejaculation</p>
            </div>
          </div>
          <div className="men-helped-card">
            <div className="men-helped-icon-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/couple.svg'}
                alt="Intimacy improvement icon"
                className="men-helped-icon"
                loading="lazy"
              />
            </div>
            <div className="men-helped-content">
              <p className="men-helped-number">2,000+</p>
              <p className="men-helped-text">men improved their intimacy</p>
            </div>
          </div>
          <div className="men-helped-card">
            <div className="men-helped-icon-wrapper">
              <img 
                src={process.env.PUBLIC_URL + '/muscle-gain.svg'}
                alt="Stronger erections icon"
                className="men-helped-icon"
                loading="lazy"
              />
            </div>
            <div className="men-helped-content">
              <p className="men-helped-number">1,000+</p>
              <p className="men-helped-text">men gained stronger erections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;

