import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  const location = useLocation();

  // Enable smooth scrolling and handle hash navigation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check if there's a hash in the URL
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top on page load if no hash
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [location]);

  return (
    <div className="about-us-page">
      <Helmet>
        <title>About Us | Banana Health</title>
        <meta name="description" content="Learn about Banana Health's mission to improve men's sexual wellness through expert guidance, personalized care, and natural holistic support." />
        <link rel="canonical" href="https://www.banana.health/about-us" />
      </Helmet>
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
