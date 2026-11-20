import { Helmet } from 'react-helmet-async';
import React from 'react';
import { RefreshCw} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LegalPages.css';

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Banana Health</title>
        <meta name="description" content="Review the Banana Health refund and cancellation policy. Learn about our clear eligibility criteria, timelines, and simple procedures for hassle-free returns." />
        <link rel="canonical" href="https://www.banana.health/refund-policy" />
      </Helmet>
     
       <Header/>
     
      <div className="legal-page">
        <div className="legal-header">
          <div className="legal-icon">
            <RefreshCw size={48} />
          </div>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p className="legal-intro">Our refund policy and payment terms.</p>
          <p className="legal-date">Last Updated: December 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Payment Model</h2>
            <p>
              At Banana Health, we work on a one-time payment model where you will never have to renew the same plan again if you enroll for 4 months.
            </p>
          </section>

          <section className="legal-section">
            <h2>Refund Policy</h2>
            <p>
              The work that Banana Health consulting does on behalf of our clients is a non-tangible piece of intellectual property. Once the work has started, we cannot retrieve it, and you cannot return it to us. It's yours forever. It's for this reason that we do not offer refunds once the evaluation phase has been completed.
            </p>
          </section>

          <section className="legal-section">
            <h2>Receipt and Documentation</h2>
            <p>
              You can take a screenshot or download the receipt through the online payment gateway if needed, and this online receipt is a sufficient acknowledgment — no other receipt will be issued or necessary.
            </p>
          </section>

          <section className="legal-section">
            <h2>Payment Terms</h2>
            <p>
              In case of non-payment of any installment, the services will be stopped with immediate effect.
            </p>
            <p>
              Tokens are non-refundable. If payment for the services rendered is not received within the specified time frame, we kindly reserve the right to pursue appropriate measures to ensure the resolution of any outstanding balances.
            </p>
            <p>
              This may include, but is not limited to, the engagement of third-party assistance in accordance with applicable laws and regulations.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RefundPolicy;
