import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CardsSection from '../components/CardsSection';
import FeaturedOn from '../components/FeaturedOn';
import PainPoints from '../components/PainPoints';
import EmpathySection from '../components/EmpathySection';
import TransformationVision from '../components/TransformationVision';
import TransformationCollage from '../components/TransformationCollage';
import InstagramEmbed from '../components/InstagramEmbed';
import MediaFeatures from '../components/MediaFeatures';
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
      <CardsSection />
      <FeaturedOn />
      {/* <WhatWeDo /> */}
      <PainPoints />
      <EmpathySection />
      
      {/* Ambient spacing before transformation vision */}
      <div className="ambient-spacer" style={{ height: '120px', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.02) 0%, rgba(15, 23, 42, 0.08) 100%)' }}></div>
      
      <TransformationVision />
      <TransformationCollage />
      <InstagramEmbed />
      <MediaFeatures />
      {/* <ProgramSection /> */}
      {/* <SocialProof /> */}
      {/* <ImpactStats /> */}
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;