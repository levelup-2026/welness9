import React from 'react';
import { Shield, Lock, Eye, Heart, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

const ConfidentialityCommitment = () => {
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
        <h1>Confidentiality Commitment</h1>
        <p className="legal-intro">Your journey is private, sacred, and completely confidential.</p>
        <p className="legal-date">Last Updated: December 2024</p>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <div className="section-icon">
            <Heart size={24} />
          </div>
          <h2>We Understand the Courage It Takes</h2>
          <p>
            Seeking help for intimate wellness requires vulnerability and trust. We honor that trust
            with an unwavering commitment to your privacy. Everything you share—every conversation,
            every question, every struggle—remains strictly confidential. This isn't just a policy;
            it's a sacred promise from our entire team.
          </p>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <Lock size={24} />
          </div>
          <h2>Our NDA-Protected Approach</h2>
          <div className="highlight-box">
            <h3>Every Team Member Signs Strict NDAs</h3>
            <p>
              Before anyone at Banana Health can access client information, they sign comprehensive
              Non-Disclosure Agreements with serious legal consequences for violations. This includes:
            </p>
            <ul>
              <li>All wellness coaches and program facilitators</li>
              <li>Customer support and success team members</li>
              <li>Technical staff with system access</li>
              <li>Contractors and third-party service providers</li>
              <li>Leadership and administrative personnel</li>
            </ul>
          </div>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <CheckCircle size={24} />
          </div>
          <h2>What We Keep Confidential</h2>
          <ul>
            <li><strong>Personal Identity:</strong> Your name, contact details, and personal information</li>
            <li><strong>Health Information:</strong> All wellness assessments, concerns, and progress data</li>
            <li><strong>Coaching Conversations:</strong> Everything discussed in private sessions</li>
            <li><strong>Payment Information:</strong> Financial details and transaction history</li>
            <li><strong>Community Participation:</strong> Your activity in private groups and forums</li>
            <li><strong>Progress Photos:</strong> Any images shared for tracking or support</li>
            <li><strong>Personal Struggles:</strong> Emotional challenges and intimate concerns</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Anonymous Success Stories</h2>
          <p>
            You may see success stories and testimonials on our platform. Here's how we handle these:
          </p>
          <ul>
            <li><strong>Explicit Consent Only:</strong> We never share stories without written permission</li>
            <li><strong>Identity Protection:</strong> Names changed, identifying details removed</li>
            <li><strong>Optional Participation:</strong> Sharing your story is 100% voluntary</li>
            <li><strong>Control & Approval:</strong> You review and approve anything before it's published</li>
            <li><strong>Right to Retract:</strong> Remove your story anytime, no questions asked</li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="section-icon">
            <Eye size={24} />
          </div>
          <h2>Who Can Access Your Information</h2>
          <div className="access-levels">
            <div className="access-item">
              <h4>Your Dedicated Coach</h4>
              <p>Full access to support your personalized program and progress</p>
            </div>
            <div className="access-item">
              <h4>Support Team (Limited)</h4>
              <p>Basic contact info only, to help with technical or account issues</p>
            </div>
            <div className="access-item">
              <h4>System Administrators</h4>
              <p>Technical access for maintenance, encrypted data only</p>
            </div>
            <div className="access-item">
              <h4>No One Else</h4>
              <p>Zero access to your personal information—not family, not partners, not anyone</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Technical Security Measures</h2>
          <ul>
            <li><strong>End-to-End Encryption:</strong> All data encrypted during transmission and storage</li>
            <li><strong>Secure Servers:</strong> Industry-leading cloud infrastructure with multiple redundancies</li>
            <li><strong>Access Logging:</strong> Every data access is monitored and logged</li>
            <li><strong>Regular Audits:</strong> Quarterly security reviews and vulnerability assessments</li>
            <li><strong>Two-Factor Authentication:</strong> Enhanced account security for all users</li>
            <li><strong>Secure Communications:</strong> Encrypted messaging for sensitive conversations</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>What We Don't Do</h2>
          <div className="dont-list">
            <div className="dont-item">
              <strong>❌ Never Sell Your Data</strong>
              <p>Your information is not for sale—ever, to anyone</p>
            </div>
            <div className="dont-item">
              <strong>❌ Never Share with Marketers</strong>
              <p>No third-party marketing or advertising partnerships</p>
            </div>
            <div className="dont-item">
              <strong>❌ Never Disclose to Employers/Insurers</strong>
              <p>Your participation remains completely confidential</p>
            </div>
            <div className="dont-item">
              <strong>❌ Never Use for Research Without Consent</strong>
              <p>Anonymous aggregated data only, with explicit permission</p>
            </div>
            <div className="dont-item">
              <strong>❌ Never Publicly Identify Clients</strong>
              <p>Your journey stays private unless you choose to share</p>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <h2>Legal Disclosure Exceptions</h2>
          <p>
            We may be required to disclose information only in these rare circumstances:
          </p>
          <ul>
            <li><strong>Legal Obligation:</strong> Valid court order or legal requirement</li>
            <li><strong>Harm Prevention:</strong> Imminent risk of serious harm to self or others</li>
            <li><strong>Child Protection:</strong> Suspected child abuse or neglect (as mandated by law)</li>
          </ul>
          <p className="note">
            <em>Even in these cases, we disclose only the minimum necessary information and inform you when legally permitted.</em>
          </p>
        </section>

        <section className="legal-section">
          <h2>Your Rights and Control</h2>
          <ul>
            <li><strong>Access Your Data:</strong> Request a complete copy of your information anytime</li>
            <li><strong>Correct Information:</strong> Update or fix any inaccurate details</li>
            <li><strong>Delete Everything:</strong> Request complete removal of your data</li>
            <li><strong>Export Your Records:</strong> Download your progress and history</li>
            <li><strong>Restrict Processing:</strong> Limit how we use certain information</li>
            <li><strong>Withdraw Consent:</strong> Change permissions for data usage anytime</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Breach Notification</h2>
          <p>
            In the unlikely event of a data breach affecting your information:
          </p>
          <ul>
            <li>We'll notify you within 24 hours of discovery</li>
            <li>Provide clear details about what information was affected</li>
            <li>Explain steps we're taking to protect you</li>
            <li>Offer credit monitoring or additional protection services</li>
            <li>Be fully transparent about the incident and resolution</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Community Spaces</h2>
          <p>
            Our private community forums and groups maintain confidentiality through:
          </p>
          <ul>
            <li><strong>Anonymous Handles:</strong> Use pseudonyms, never real names</li>
            <li><strong>Moderated Spaces:</strong> Active monitoring for privacy protection</li>
            <li><strong>Respect Guidelines:</strong> All members agree to confidentiality rules</li>
            <li><strong>Report Function:</strong> Flag any privacy concerns immediately</li>
            <li><strong>Closed Groups:</strong> Only enrolled members can access discussions</li>
          </ul>
        </section>

        <div className="legal-contact">
          <h3>Privacy Concerns or Questions?</h3>
          <p>We take confidentiality seriously. Reach out anytime:</p>
          <p><strong>Confidentiality Officer:</strong> yvs@banana.health</p>
          <p><strong>Emergency Line:</strong> +91 92641 27497 (24/7 for urgent concerns)</p>
          <p><strong>Secure Contact:</strong> Request encrypted communication for sensitive matters</p>
          <p><strong>Response Time:</strong> Within 6 hours for privacy concerns</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConfidentialityCommitment;
