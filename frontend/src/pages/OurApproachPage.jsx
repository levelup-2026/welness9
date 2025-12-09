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
      <Header />
      <OurApproach />
      <Footer />
    </div>
  );
};

export default OurApproachPage;
