import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact-us" className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo">
                <img src={`${process.env.PUBLIC_URL}/footer.svg`} alt="Banana Health" />
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
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-list">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                <li><a href="#pain-points" onClick={(e) => { e.preventDefault(); scrollToSection('pain-points'); }}>Our Understanding</a></li>
                <li><a href="#transformation" onClick={(e) => { e.preventDefault(); scrollToSection('transformation'); }}>Transformation</a></li>
                <li><a href="#impact" onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}>Impact Stories</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Get Started</h4>
              <ul className="footer-list">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Begin Your Journey</a></li>
                <li><a href="#transformation" onClick={(e) => { e.preventDefault(); scrollToSection('transformation'); }}>Our Approach</a></li>
                <li><a href="#impact" onClick={(e) => { e.preventDefault(); scrollToSection('impact'); }}>Success Stories</a></li>
                <li><a href="#contact-us" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>Help Center</a></li>
                <li><a href="mailto:support@bananahealth.in">Email Support</a></li>
                <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></li>
                <li><a href="#contact-us" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Get In Touch</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/confidentiality">Confidentiality</Link></li>
                <li><Link to="/refund-policy">Refund Policy</Link></li>
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