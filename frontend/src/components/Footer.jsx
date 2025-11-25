import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube, Shield } from 'lucide-react';
import LogoMark from './LogoMark';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import './Footer.css';
import '../styles/BlobAnimations.css';

const Footer = () => {
  return (
    <footer className="main-footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={3}
        colors={['blue', 'purple', 'yellow']}
        sizes={['lg', 'md', 'xl']}
        enableParallax={false}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        intensity={0.15}
        style={{ top: '10%', right: '10%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="md"
        animationType="float"
        enableMouseTracking={true}
        intensity={0.12}
        style={{ bottom: '15%', left: '8%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="wave"
        color="blue"
        animate={true}
        float={true}
        width={300}
        height={90}
        strokeWidth={2}
        style={{ position: 'absolute', top: '20%', left: '5%', opacity: 0.3, zIndex: 0 }}
      />
      <ScribbleLine
        type="squiggle"
        color="purple"
        animate={true}
        wiggle={true}
        width={280}
        height={85}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '20%', right: '8%', opacity: 0.3, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '15%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '45%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#FCD34D', top: '75%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '30%', left: '85%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '65%', left: '15%', animationDelay: '2s' }} />
      </div>

      <div className="footer-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <LogoMark />
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