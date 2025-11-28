import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src="/footer.svg" alt="Banana Health" />
              </div>
            </div>
            <p className="footer-tagline">
              India's leading natural sexual health transformation platform. Reverse ED & PE permanently without pills, pumps, or side effects.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com/bananahealth" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/bananahealth" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@bananahealth" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#approach">5-Pillar Approach</a></li>
                <li><a href="#program">Our Program</a></li>
                <li><a href="#success-stories">Success Stories</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Program</h4>
              <ul className="footer-list">
                <li><a href="#program">How It Works</a></li>
                <li><a href="#approach">Methodology</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('https://example.com/quiz', '_blank'); }}>Free Assessment</a></li>
                <li><a href="#contact">Book Strategy Call</a></li>
                <li><a href="#success-stories">Results & Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#faq">Help Center</a></li>
                <li><a href="mailto:support@bananahealth.in">Email Support</a></li>
                <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#nda">NDA Commitment</a></li>
                <li><a href="#refund">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={18} />
            <span>support@bananahealth.in</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+91 98765 43210 (9 AM - 9 PM IST)</span>
          </div>
          <div className="contact-item">
            <Shield size={18} />
            <span>100% Confidential & NDA Protected</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Banana Health. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            Results may vary between individuals. This program is designed for educational and wellness purposes. Please consult with a healthcare professional before starting any new health program. Banana Health does not provide medical diagnosis or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;