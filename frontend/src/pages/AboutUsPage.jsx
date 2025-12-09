import React, { useEffect } from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="about-us-page">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
