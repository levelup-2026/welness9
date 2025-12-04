import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedOn from '../components/FeaturedOn';
import KeyBenefits from '../components/KeyBenefits';
import TransformationVision from '../components/TransformationVision';
import TransformationCollage from '../components/TransformationCollage';
import ImpactStats from '../components/ImpactStats';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import MobileFloatingCTA from '../components/MobileFloatingCTA';

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
      <FeaturedOn />
      {/* <WhatWeDo /> */}
      <KeyBenefits />
      <TransformationVision />
      <TransformationCollage />
      {/* <ProgramSection />
      <AboutMissionSection /> */}
      {/* <SocialProof /> */}
      <ImpactStats />
      <FAQSection />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
};

export default HomePage;