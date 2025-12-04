import React from 'react';
import { Shield, Lock, Eye, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="legal-nav">
        <Link to="/" className="back-button">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
      <div className="legal-page">
      <div className="legal-header">
        <div className="legal-icon">
          <Shield size={48} />
        </div>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">Your privacy is sacred to us. We understand the sensitive nature of your wellness journey.</p>
        <p className="legal-date">Last Updated: December 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <div className="section-icon">
            <Heart size={24} />
          </div>
          <h2>Our Commitment to You</h2>
          <p>
            At Banana Health, we understand that seeking help for intimate wellness takes courage. 
            Your trust is sacred, and we protect your privacy with the highest standards of confidentiality.
            Every conversation, every piece of information, and every step of your journey remains strictly private.
          </p>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <Lock size={24} />
          </div>
          <h2>Information We Collect</h2>
          <p><strong>Personal Information:</strong></p>
          <ul>
            <li>Name, email, and phone number (for program access)</li>
            <li>Health information you choose to share during assessments</li>
            <li>Progress tracking data to personalize your transformation</li>
          </ul>
          <p><strong>Automatic Information:</strong></p>
          <ul>
            <li>Device and browser information for optimal experience</li>
            <li>Usage patterns to improve our platform</li>
            <li>Anonymous analytics to enhance our programs</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>How We Protect Your Data</h2>
          <ul>
            <li><strong>Military-Grade Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Secure Servers:</strong> Hosted on industry-leading secure cloud infrastructure</li>
            <li><strong>Limited Access:</strong> Only authorized wellness coaches access your information</li>
            <li><strong>NDA Protected:</strong> All team members sign strict confidentiality agreements</li>
            <li><strong>No Third-Party Sharing:</strong> We never sell or share your personal information</li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <Eye size={24} />
          </div>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>Personalizing your wellness program and recommendations</li>
            <li>Communicating with you about your progress and support</li>
            <li>Improving our programs based on aggregated, anonymous data</li>
            <li>Providing customer support and answering your questions</li>
            <li>Sending program updates (you can unsubscribe anytime)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Your Privacy Rights</h2>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data anytime</li>
            <li><strong>Correction:</strong> Update or correct your information</li>
            <li><strong>Deletion:</strong> Request complete removal of your data</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from non-essential communications</li>
            <li><strong>Data Portability:</strong> Export your data in standard formats</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Cookies and Tracking</h2>
          <p>
            We use minimal, essential cookies to ensure platform functionality and improve your experience.
            You can disable non-essential cookies through your browser settings without affecting core features.
          </p>
        </section>

        <section className="legal-section">
          <h2>Data Retention</h2>
          <p>
            We retain your information only as long as necessary to provide our services or as required by law.
            After account deletion, personal data is permanently removed within 30 days, except for minimal 
            records required for legal or financial purposes.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy to reflect changes in our practices or legal requirements.
            We'll notify you of significant changes via email and provide 30 days notice before implementation.
          </p>
        </section>

        <div className="legal-contact">
          <h3>Questions About Privacy?</h3>
          <p>We're here to address any concerns:</p>
          <p><strong>Email:</strong> privacy@bananahealth.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Response Time:</strong> Within 24 hours</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
