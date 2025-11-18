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
              Natural solutions for men's sexual wellness. Reclaim your confidence and vitality.
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
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-list">
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Product Library</a></li>
                <li><a href="#">Science</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Track Order</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Medical Disclaimer</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={18} />
            <span>support@bananahealth.com</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>1-800-BANANA-1</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Banana Health. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;