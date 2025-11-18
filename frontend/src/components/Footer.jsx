import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">🍌</div>
              <span className="footer-logo-text">Banana Health</span>
            </div>
            <p className="footer-tagline">
              Emotional wellness and counseling for men seeking confidence, healing, and healthier intimate relationships.
            </p>
            <div className="footer-socials">
              <button className="social-btn">
                <Instagram size={18} />
              </button>
              <button className="social-btn">
                <Facebook size={18} />
              </button>
              <button className="social-btn">
                <Twitter size={18} />
              </button>
              <button className="social-btn">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li><a href="#">Individual Therapy</a></li>
                <li><a href="#">Couples Counseling</a></li>
                <li><a href="#">Group Support</a></li>
                <li><a href="#">Online Coaching</a></li>
                <li><a href="#">Workshops</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="#">Our Approach</a></li>
                <li><a href="#">Meet Our Therapists</a></li>
                <li><a href="#">Success Stories</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Book Consultation</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">HIPAA Compliance</a></li>
                <li><a href="#">Therapist Code</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={18} />
            <span>hello@bananahealth.com</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>1-800-HEALING</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Available Nationwide</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Banana Health. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            Banana Health provides counseling and emotional wellness services. We are not a medical provider. If you are experiencing a mental health crisis, please contact 988 (Suicide & Crisis Lifeline) or your local emergency services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;