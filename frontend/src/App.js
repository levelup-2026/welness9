import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurApproachPage from './pages/OurApproachPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import ConfidentialityCommitment from './pages/ConfidentialityCommitment';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-approach" element={<OurApproachPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/confidentiality" element={<ConfidentialityCommitment />} />
        {['/contact-form', '/contact-form.html'].map((path) => (
          <Route key={path} path={path} element={
            <>
              <Helmet>
                <title>Contact Us | Banana Health</title>
                <meta name="description" content="Have questions or need medical support? Contact the Banana Health care team today through our online contact form. We are dedicated to assisting you promptly." />
                <link rel="canonical" href="https://www.banana.health/contact-form" />
              </Helmet>
              <Header />
              <main className="contact-page">
                <h1>Get in Touch With Us</h1>
                <p>
                  Have questions or need medical support? Contact the Banana Health care team today through our online contact form.
                  <br />
                  We are dedicated to assisting you promptly.
                </p>
              </main>
              <Footer />
            </>
          } />
        ))}
      </Routes>
    </div>
  );
}

export default App;