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
            <div className="assessment-blob-wrapper">
              <svg className="assessment-blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E0F2FE" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.4,90,-15.8,88.5,-0.3C87,14.2,81.4,27.7,73.2,39.8C65,51.9,54.2,62.6,41.3,69.8C28.4,77,13.2,80.7,-1.6,83.5C-16.4,86.3,-32.8,88.2,-46.3,81.9C-59.8,75.6,-70.4,61.1,-77.8,45.3C-85.2,29.5,-89.4,12.4,-88.3,-4.2C-87.2,-20.8,-80.8,-36.9,-71.2,-50.1C-61.6,-63.3,-48.8,-73.6,-34.5,-80.6C-20.2,-87.6,-4.4,-91.3,9.8,-88.5C24,-85.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
              <div className="scribble-circle">
                <svg className="scribble" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,50 Q30,30 50,50 T80,50" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="35" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="3,6" />
                </svg>
                <Zap size={28} className="assessment-main-icon" strokeWidth={2.5} />
              </div>
            </div>
            <div className="assessment-content">
              <div className="assessment-badge">
                <span className="badge-dot"></span>
                Free • 2 Minutes
              </div>
              <h4 className="action-title">Take Free Assessment</h4>
              <p className="action-description">
                Get personalized recommendations for your specific case
              </p>
            </div>
            <button 
              className="action-button assessment-btn"
              onClick={() => window.open('https://example.com/quiz', '_blank')}
            >
              <span>Start Now</span>
              <svg className="arrow-scribble" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10 L16 10 M11 5 L16 10 L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="assessment-decorative-elements">
              <svg className="doodle doodle-1" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,20 Q15,10 20,20 T30,20" stroke="#FACC15" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
              <svg className="doodle doodle-2" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="12" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="2,4" />
              </svg>
              <div className="mini-blob mini-blob-1"></div>
              <div className="mini-blob mini-blob-2"></div>
            </div>
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

