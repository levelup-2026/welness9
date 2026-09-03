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
              <div className="footer-logo-icon">
                <img src="/footer.svg" alt="Banana Health" loading="lazy" />
              </div>
            </div>
            <p className="footer-tagline">
              India's leading natural sexual health transformation platform. Reverse ED & PE permanently without pills, pumps, or side effects.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/banana-health-with-chetan" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v5.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75V14a2 2 0 0 0-4 0v5.25a.75.75 0 0 1-.75.75h-3.5A.75.75 0 0 1 8 19.25V9a.75.75 0 0 1 .75-.75h3.5A.75.75 0 0 1 13 9v.5a6 6 0 0 1 3-1.5Zm-8 2.25V19.25A.75.75 0 0 1 7.25 20h-3.5A.75.75 0 0 1 3 19.25V10.25A.75.75 0 0 1 3.75 9.5h3.5A.75.75 0 0 1 8 10.25ZM5 7.5A2 2 0 1 1 5 3.5a2 2 0 0 1 0 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="https://www.instagram.com/mybanana.health?igsh=MW14ZmxkZGo4bGhkbQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61572211965994&sk=reels_tab" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@trainedbyyvs?si=j5KhjEX4wWXHN2mL" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><a href="/#pain-points">Our Understanding</a></li>
                <li><a href="/#transformation">Transformation</a></li>
                <li><a href="/#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Get Started</h4>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/our-approach">Our Approach</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/about-us#contact-banana-health">Contact Us</Link></li>
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
            <span>yvs@banana.health</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>+91 94323 00089 (9 AM - 9 PM IST)</span>
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
