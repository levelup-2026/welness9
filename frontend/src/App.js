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
                <title>Contact Banana Health | Get in Touch With Our Team</title>
                <meta name="description" content="Have questions about Banana Health? Contact our team for support, guidance, and information about our natural ED and PE reversal programs." />
                <link rel="canonical" href="https://www.banana.health/contact-form" />
              </Helmet>
              <Header />
              <main className="contact-page">
                <h1>Contact Banana Health – Get in Touch With Our Team</h1>
                <p>
                  Contact Banana Health for expert guidance and support with your queries.
                  <br />
                  Our team is here to help you with ED and PE-related concerns.
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