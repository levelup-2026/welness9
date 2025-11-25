import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/WhatWeDo';
import KeyBenefits from '../components/KeyBenefits';
import ImpactStats from '../components/ImpactStats';
import BrandStory from '../components/BrandStory';
import ProgramSection from '../components/ProgramSection';
import AboutMissionSection from '../components/AboutMissionSection';
import SocialProof from '../components/SocialProof';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <WhatWeDo />
      <KeyBenefits />
      <ProgramSection />
      <AboutMissionSection />
      <SocialProof />
      <ImpactStats />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;