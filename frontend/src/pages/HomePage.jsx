import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductLibrary from '../components/ProductLibrary';
import HowItWorks from '../components/HowItWorks';
import BenefitsSection from '../components/BenefitsSection';
import ScienceSection from '../components/ScienceSection';
import SocialProof from '../components/SocialProof';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <ProductLibrary />
      <HowItWorks />
      <BenefitsSection />
      <ScienceSection />
      <SocialProof />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;