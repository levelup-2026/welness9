import React from 'react';
import { FileText, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const TermsConditions = () => {
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
          <FileText size={48} />
        </div>
        <h1>Terms & Conditions</h1>
        <p className="legal-intro">Clear, honest terms for your wellness transformation journey.</p>
        <p className="legal-date">Last Updated: December 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <div className="section-icon">
            <CheckCircle size={24} />
          </div>
          <h2>Welcome to Banana Health</h2>
          <p>
            By accessing our platform and enrolling in our programs, you agree to these terms.
            We believe in transparency and want you to understand exactly what you're signing up for—
            a science-backed, holistic approach to intimate wellness transformation.
          </p>
        </section>

        <section className="legal-section">
          <h2>Program Overview</h2>
          <p><strong>What We Offer:</strong></p>
          <ul>
            <li>Evidence-based wellness coaching and education</li>
            <li>Personalized lifestyle transformation programs</li>
            <li>Mental health and mindfulness guidance</li>
            <li>Nutritional and fitness recommendations</li>
            <li>Community support and accountability</li>
          </ul>
          <p><strong>What We're Not:</strong></p>
          <ul>
            <li>We are not medical practitioners or healthcare providers</li>
            <li>We don't diagnose, treat, or cure medical conditions</li>
            <li>We don't prescribe medication or medical devices</li>
            <li>We complement, but don't replace, medical care</li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <AlertCircle size={24} />
          </div>
          <h2>Your Responsibilities</h2>
          <ul>
            <li><strong>Medical Clearance:</strong> Consult your doctor before starting if you have health conditions</li>
            <li><strong>Honest Information:</strong> Provide accurate health information for safe guidance</li>
            <li><strong>Active Participation:</strong> Success requires your commitment and follow-through</li>
            <li><strong>Safe Practice:</strong> Stop any exercise or practice that causes pain or discomfort</li>
            <li><strong>Communication:</strong> Keep your coach informed of changes or concerns</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Results and Expectations</h2>
          <p>
            <strong>Individual Results:</strong> Transformation timelines and outcomes vary based on:
          </p>
          <ul>
            <li>Your starting point and current health status</li>
            <li>Commitment level and adherence to the program</li>
            <li>Biological factors and individual physiology</li>
            <li>External life circumstances and stress levels</li>
          </ul>
          <p>
            <strong>No Guarantees:</strong> While our methods are evidence-based and have helped thousands,
            we cannot guarantee specific results. Success stories represent real outcomes but may not be typical.
          </p>
        </section>

        <section className="legal-section">
          <h2>Payment Terms</h2>
          <ul>
            <li><strong>Pricing:</strong> All prices are listed in INR and include applicable taxes</li>
            <li><strong>Payment Methods:</strong> We accept cards, UPI, net banking, and EMI options</li>
            <li><strong>Billing:</strong> Payment is due at time of enrollment unless on payment plan</li>
            <li><strong>Auto-Renewal:</strong> Subscriptions renew automatically unless cancelled 7 days before</li>
            <li><strong>Price Changes:</strong> We'll notify you 30 days before any price changes</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Refund Policy</h2>
          <p><strong>30-Day Money-Back Guarantee:</strong></p>
          <ul>
            <li>Full refund if you're not satisfied within first 30 days</li>
            <li>No questions asked—we want you to feel confident</li>
            <li>Refunds processed within 7-10 business days</li>
          </ul>
          <p><strong>After 30 Days:</strong></p>
          <ul>
            <li>Pro-rated refunds available for special circumstances</li>
            <li>Contact support to discuss your situation</li>
            <li>We'll work with you to find the best solution</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Content and Intellectual Property</h2>
          <ul>
            <li><strong>Our Content:</strong> All materials, videos, and resources are proprietary</li>
            <li><strong>Your Use:</strong> Personal, non-commercial use only during active enrollment</li>
            <li><strong>Restrictions:</strong> No sharing, copying, or distributing program materials</li>
            <li><strong>Your Content:</strong> You retain rights to feedback and testimonials you share</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Account and Access</h2>
          <ul>
            <li><strong>Account Security:</strong> Keep your login credentials confidential</li>
            <li><strong>Personal Use:</strong> Accounts are non-transferable and for individual use</li>
            <li><strong>Suspension:</strong> We reserve the right to suspend accounts for policy violations</li>
            <li><strong>Termination:</strong> Either party can terminate with 30 days written notice</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Confidentiality Commitment</h2>
          <ul>
            <li>All your information is protected by strict NDA agreements</li>
            <li>Coaches and staff are bound by confidentiality obligations</li>
            <li>We never share your identity or journey publicly without consent</li>
            <li>Community forums use anonymous handles for privacy</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            Banana Health provides educational and wellness coaching services. We are not liable for:
          </p>
          <ul>
            <li>Medical complications or health issues (consult your doctor)</li>
            <li>Indirect or consequential damages</li>
            <li>Force majeure events beyond our control</li>
            <li>Third-party services or links</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Updates to Terms</h2>
          <p>
            We may update these terms to improve our services or comply with legal requirements.
            Material changes will be communicated 30 days in advance via email.
            Continued use after changes indicates acceptance.
          </p>
        </section>

        <div className="legal-contact">
          <h3>Questions or Concerns?</h3>
          <p>We're here to help clarify anything:</p>
          <p><strong>Email:</strong> legal@bananahealth.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Banana Health Pvt. Ltd., Bangalore, India</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsConditions;
