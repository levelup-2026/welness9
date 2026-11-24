import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

import TrustedBanner from '../components/TrustedBanner';

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
      <Helmet>
        <title>Sexual Health Solutions | Natural ED &amp; PE | Banana Health</title>
        <meta name="description" content="Overcome ED &amp; PE naturally in India with private, personalized guidance. No pills or pumps. Book your consultation today." />
        <link rel="canonical" href="https://www.banana.health/" />
      </Helmet>
      {createPortal(
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.banana.health/#organization",
      "name": "Banana Health",
      "legalName": "Banana Wellness LLP",
      "url": "https://www.banana.health/",
      "logo": "https://www.banana.health/spn.png",
      "founder": { "@id": "https://www.banana.health/about-us#founder" },
      "sameAs": [
        "https://www.linkedin.com/company/banana-health-with-chetan",
        "https://www.instagram.com/mybanana.health",
        "https://www.facebook.com/profile.php?id=61572211965994"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.banana.health/#website",
      "url": "https://www.banana.health/",
      "name": "Banana Health",
      "publisher": { "@id": "https://www.banana.health/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://www.banana.health/about-us#founder",
      "name": "Yash Vardhan Swami",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://www.banana.health/#organization" },
      "url": "https://www.banana.health/about-us",
      "sameAs": [
        "https://www.youtube.com/@trainedbyyvs"
      ]
    }
  ]
}
`}</script>,
        document.head
      )}
      <Header />
      <HeroSection />
      <TrustedBanner />
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