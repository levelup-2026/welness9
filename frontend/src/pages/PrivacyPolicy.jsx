import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
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
          <p className="legal-intro">Your privacy and data protection information.</p>
          <p className="legal-date">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Collection of Personal Information</h2>
            <p>
              We collect personal information, such as your name, email address, and payment details, when you register for a consultation or program related to Erectile Dysfunction (ED) and Premature Ejaculation (PE) and make a payment using the Razorpay payment gateway.
            </p>
          </section>

          <section className="legal-section">
            <h2>Use of Personal Information</h2>
            <p>
              We use your personal information to organize the consultation, provide you with relevant information, and process your payment through Razorpay. We may also use your personal information to send you marketing communications about our future consultations, webinars, or related products or services. You can opt out of these communications at any time.
            </p>
          </section>

          <section className="legal-section">
            <h2>Sharing of Personal Information</h2>
            <p>
              We do not share your personal information with third parties except as necessary to process your payment through Razorpay and comply with applicable laws and regulations.
            </p>
          </section>

          <section className="legal-section">
            <h2>Security of Personal Information</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use industry-standard encryption and security protocols to protect your payment information.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide the consultation and related services, process your payment, and comply with applicable laws and regulations.
            </p>
          </section>

          <section className="legal-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, correct, and delete your personal information. You can also object to the processing of your personal information or request that we restrict its processing. To exercise these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section className="legal-section">
            <h2>Razorpay Policies</h2>
            <p>
              By using the Razorpay payment gateway, you agree to comply with Razorpay's privacy policy. You acknowledge that Razorpay collects, processes, and stores your personal information to process your payment and comply with applicable laws and regulations.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
