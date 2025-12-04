import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedOn from '../components/FeaturedOn';
import PainPoints from '../components/PainPoints';
import EmpathySection from '../components/EmpathySection';
import TransformationVision from '../components/TransformationVision';
import TransformationCollage from '../components/TransformationCollage';
import ImpactStats from '../components/ImpactStats';
import FAQSection from '../components/FAQSection';
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
      <FeaturedOn />
      {/* <WhatWeDo /> */}
      <PainPoints />
      <EmpathySection />
      <TransformationVision />
      <TransformationCollage />
      {/* <ProgramSection />
      <AboutMissionSection /> */}
      {/* <SocialProof /> */}
      <ImpactStats />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;