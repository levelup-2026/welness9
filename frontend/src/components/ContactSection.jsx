import React from 'react';
import { Mail, Phone, Clock, MapPin, Shield, MessageCircle, Calendar, Zap } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Ready to Get Started?</h2>
          <p className="contact-subtitle">
            Multiple ways to reach us. We respond within 2 hours during business hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Primary Contact Methods */}
          <div className="contact-card primary-contact">
            <h3 className="contact-card-title">Get In Touch</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon-wrapper email">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <div className="method-label">Email Us</div>
                  <a href="mailto:support@bananahealth.in" className="method-value">
                    support@bananahealth.in
                  </a>
                  <p className="method-note">Best for detailed inquiries</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon-wrapper phone">
                  <Phone size={24} />
                </div>
                <div className="method-details">
                  <div className="method-label">Call or WhatsApp</div>
                  <a href="tel:+919876543210" className="method-value">
                    +91 98765 43210
                  </a>
                  <p className="method-note">9 AM - 9 PM IST, 7 days a week</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon-wrapper whatsapp">
                  <MessageCircle size={24} />
                </div>
                <div className="method-details">
                  <div className="method-label">WhatsApp Chat</div>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="method-value"
                  >
                    Start Chat
                  </a>
                  <p className="method-note">Instant messaging support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div className="contact-card info-card">
            <h3 className="contact-card-title">Support Information</h3>
            <div className="info-items">
              <div className="info-item">
                <Clock size={20} className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Business Hours</div>
                  <div className="info-value">9 AM - 9 PM IST</div>
                  <div className="info-subtext">Monday - Sunday (7 days)</div>
                </div>
              </div>

              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Service Area</div>
                  <div className="info-value">All of India</div>
                  <div className="info-subtext">Remote program • Join from anywhere</div>
                </div>
              </div>

              <div className="info-item">
                <Shield size={20} className="info-icon" />
                <div className="info-content">
                  <div className="info-label">Privacy Guarantee</div>
                  <div className="info-value">100% Confidential</div>
                  <div className="info-subtext">Protected by NDA • HIPAA compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Banner */}
        <div className="response-banner">
          <div className="response-content">
            <div className="response-badge">
              <Zap size={16} strokeWidth={2.5} aria-hidden="true" />
              <span>Fast Response</span>
            </div>
            <h3 className="response-title">We typically respond within 2 hours during business hours</h3>
            <p className="response-text">
              For urgent matters, call us directly or use WhatsApp for immediate assistance
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="contact-actions">
          <div className="action-card urgent">
            <Calendar size={32} className="action-icon" />
            <h4 className="action-title">Book Free Strategy Call</h4>
            <p className="action-description">
              30-minute consultation to discuss your situation and see if our program is right for you
            </p>
            <button className="action-button primary">
              Schedule Call Now
            </button>
          </div>

          <div className="action-card assessment">
            <MessageCircle size={32} className="action-icon" />
            <h4 className="action-title">Take Free Assessment</h4>
            <p className="action-description">
              2-minute quiz to get personalized recommendations for your specific case
            </p>
            <button 
              className="action-button secondary"
              onClick={() => window.open('https://example.com/quiz', '_blank')}
            >
              Start Assessment
            </button>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="privacy-note">
          <Shield size={16} />
          <p>
            Your privacy is our priority. All communication is confidential and protected by NDA. 
            We never share your information with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

