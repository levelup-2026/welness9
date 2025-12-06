import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
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
          <p className="legal-intro">Terms and conditions for using our services.</p>
          <p className="legal-date">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>
              This website is operated by Banana Health. Throughout the site, the terms "we", "us" and "our" refer to Banana Health. Banana Health offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions, including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
            </p>
            <p>
              Any new features or tools that are added to the current platform shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="legal-section">
            <h2>1. Payment</h2>
            <p>
              By registering for a consultation, webinar, or any other service provided by Banana Health, you agree to pay the stated fee in full before the start of the session or event. Payment can be made securely through the Razorpay payment gateway.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Refunds</h2>
            <p>
              Refunds will only be provided if the session or webinar is cancelled by the organizer. No refunds will be issued if you are unable to attend for any reason. All booking tokens or consultation fees are non-refundable.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Access</h2>
            <p>
              Your registration provides you with access to the live session and any associated materials. You are responsible for ensuring that you have the necessary hardware, software, and stable internet connection to participate.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All materials, strategies, and content shared during the consultation or webinar are the intellectual property of Banana Health and are protected by copyright laws.
            </p>
            <p>
              You are not authorized to reproduce, distribute, record, or use any of the materials without prior written permission from Banana Health.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Disclaimer</h2>
            <p>
              The organizer makes no guarantees regarding the accuracy, completeness, or usefulness of the information provided during the consultation or webinar. The information shared is for educational and informational purposes only and is not a substitute for professional medical advice.
            </p>
            <p>
              Banana Health is not liable for any damages, losses, or outcomes resulting from the application of the information provided.
            </p>
            <p>
              All services focus on natural and lifestyle-based approaches for addressing Erectile Dysfunction (ED) and Premature Ejaculation (PE) and do not replace medical diagnosis or treatment.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Termination</h2>
            <p>
              Banana Health reserves the right to terminate your registration and deny access to services if you violate any of these terms and conditions or engage in disruptive, abusive, or inappropriate behavior during any session.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Privacy</h2>
            <p>
              We will collect and process your personal data solely for the purposes of organizing the consultation, webinar, or service and providing you with relevant information.
            </p>
            <p>
              All personal data will be handled in accordance with applicable data protection laws and our Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Razorpay Policies</h2>
            <p>
              By using the Razorpay payment gateway, you agree to comply with Razorpay's terms and conditions and privacy policy. You acknowledge that payment services are provided by Razorpay, and any disputes related to payment must be resolved through Razorpay's dispute resolution process.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of the jurisdiction in which Banana Health operates. Any disputes arising from these terms and conditions shall be resolved under the applicable laws of that jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
