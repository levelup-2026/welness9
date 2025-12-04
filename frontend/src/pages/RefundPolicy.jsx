import React from 'react';
import { RefreshCw, Heart, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const RefundPolicy = () => {
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
          <RefreshCw size={48} />
        </div>
        <h1>Refund Policy</h1>
        <p className="legal-intro">Your satisfaction and transformation matter most to us.</p>
        <p className="legal-date">Last Updated: December 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <div className="section-icon">
            <Heart size={24} />
          </div>
          <h2>Our Promise to You</h2>
          <p>
            We're confident in our program's ability to transform lives, but we understand that every journey
            is unique. If our program isn't the right fit for you, we want to make things right.
            Your investment in yourself should feel safe and supported.
          </p>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <CheckCircle size={24} />
          </div>
          <h2>30-Day Money-Back Guarantee</h2>
          <div className="highlight-box">
            <h3>Try Our Program Risk-Free</h3>
            <p>
              We offer a complete 30-day money-back guarantee on all our programs.
              If you're not satisfied within the first 30 days, we'll refund 100% of your investment—no questions asked.
            </p>
          </div>
          
          <p><strong>What's Covered:</strong></p>
          <ul>
            <li>All program packages and coaching plans</li>
            <li>One-time purchases and subscriptions</li>
            <li>Premium content and resources</li>
            <li>Group and individual coaching sessions</li>
          </ul>

          <p><strong>How It Works:</strong></p>
          <ol>
            <li>Email us at support@bananahealth.in within 30 days</li>
            <li>Share brief feedback (optional but helps us improve)</li>
            <li>Receive confirmation within 24 hours</li>
            <li>Refund processed within 7-10 business days</li>
          </ol>
        </section>

        <section className="legal-section">
          <h2>After 30 Days</h2>
          <p><strong>Special Circumstances:</strong></p>
          <p>
            We understand that life happens. If you need to discontinue after 30 days due to:
          </p>
          <ul>
            <li>Serious health issues preventing participation</li>
            <li>Major life changes or emergencies</li>
            <li>Program not meeting your specific needs</li>
          </ul>
          <p>
            Contact our support team. We'll review your situation with compassion and work out
            a fair solution—whether that's a pro-rated refund, program pause, or alternative arrangement.
          </p>
        </section>

        <section className="legal-section">
          <h2>Subscription Renewals</h2>
          <p><strong>Monthly Plans:</strong></p>
          <ul>
            <li>Cancel anytime before your next billing cycle</li>
            <li>No refund for current month once processed</li>
            <li>Cancellation takes effect at end of paid period</li>
            <li>Retain access until subscription ends</li>
          </ul>

          <p><strong>Annual Plans:</strong></p>
          <ul>
            <li>30-day full refund window from purchase date</li>
            <li>Pro-rated refunds available for special circumstances after 30 days</li>
            <li>Cancel auto-renewal anytime to prevent next year's charge</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Refund Processing</h2>
          <div className="timeline">
            <div className="timeline-item">
              <strong>Day 1:</strong> Submit refund request via email
            </div>
            <div className="timeline-item">
              <strong>Day 1-2:</strong> Receive confirmation and request ID
            </div>
            <div className="timeline-item">
              <strong>Day 2-3:</strong> Refund approved and initiated
            </div>
            <div className="timeline-item">
              <strong>Day 7-10:</strong> Funds appear in your account
            </div>
          </div>
          
          <p><strong>Payment Method Returns:</strong></p>
          <ul>
            <li>Refunds processed to original payment method</li>
            <li>Credit cards: 5-7 business days</li>
            <li>UPI/Net Banking: 3-5 business days</li>
            <li>International cards: 10-14 business days</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>What's Not Refundable</h2>
          <ul>
            <li><strong>One-on-One Sessions:</strong> Individual coaching calls after they've occurred (can reschedule before)</li>
            <li><strong>Downloaded Materials:</strong> Digital resources already downloaded (within reason)</li>
            <li><strong>Third-Party Services:</strong> External tools or subscriptions we don't control</li>
            <li><strong>Promotional Access:</strong> Heavily discounted or gifted memberships</li>
          </ul>
          <p className="note">
            <em>Note: We evaluate exceptions case-by-case with empathy and fairness.</em>
          </p>
        </section>

        <section className="legal-section">
          <h2>Pause Your Program</h2>
          <div className="highlight-box">
            <h3>Need a Break? We Get It</h3>
            <p>
              Instead of canceling, consider pausing your program for 1-3 months:
            </p>
            <ul>
              <li>Freeze your subscription at no charge</li>
              <li>Return when you're ready without re-enrollment</li>
              <li>Keep your progress and data intact</li>
              <li>Perfect for travel, health issues, or life changes</li>
            </ul>
          </div>
        </section>

        <section className="legal-section">
          <h2>Commitment to Satisfaction</h2>
          <p>
            Beyond our formal policies, we're committed to your success and satisfaction.
            If you're struggling with the program, experiencing technical issues, or feeling
            uncertain about your progress, reach out before requesting a refund.
          </p>
          <p>
            Often, a quick adjustment, additional support, or program customization can
            get you back on track to the transformation you deserve.
          </p>
        </section>

        <div className="legal-contact">
          <h3>Questions About Refunds?</h3>
          <p>We're here to help and find the best solution:</p>
          <p><strong>Email:</strong> support@bananahealth.in</p>
          <p><strong>Subject Line:</strong> "Refund Request" or "Program Inquiry"</p>
          <p><strong>Response Time:</strong> Within 24 hours</p>
          <p><strong>Phone Support:</strong> +91 98765 43210 (9 AM - 9 PM IST)</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default RefundPolicy;
