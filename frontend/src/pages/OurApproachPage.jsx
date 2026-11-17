import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import OurApproach from '../components/OurApproach';
import Footer from '../components/Footer';

const OurApproachPage = () => {
  // Enable smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-approach-page">
      <Helmet>
        <title>Our Approach to Healthcare | Banana Health</title>
        <meta name="description" content="Our Five-Pillar Integrative Approach to overcome Erectile Dysfunction and Premature Ejaculation through personalized guidance, holistic care, and lasting wellness." />
        <link rel="canonical" href="https://www.banana.health/our-approach" />
      </Helmet>
      <Header />
      <OurApproach />
      <Footer />
    </div>
  );
};

export default OurApproachPage;
