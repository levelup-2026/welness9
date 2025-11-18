import React, { useState, useEffect } from 'react';
import { Share2, Instagram, Youtube, Facebook, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">🍌</div>
              <span className="logo-text">Banana Health</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <a href="#about" className="nav-link">Our Approach</a>
            <a href="#services" className="nav-link">Services</a>
            <button className="quiz-btn-header">
              Free Consultation
              <span className="quiz-icon">💬</span>
            </button>
          </nav>

          {/* Desktop Social Icons */}
          <div className="header-right desktop-social">
            <button className="icon-btn" aria-label="Share">
              <Share2 size={18} />
            </button>
            <button className="icon-btn" aria-label="Instagram">
              <Instagram size={18} />
            </button>
            <button className="icon-btn" aria-label="YouTube">
              <Youtube size={18} />
            </button>
            <button className="icon-btn" aria-label="Facebook">
              <Facebook size={18} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="hamburger-btn" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
            Our Approach
          </a>
          <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>
            Services
          </a>
          <button className="quiz-btn-mobile" onClick={closeMobileMenu}>
            Free Consultation
            <span className="quiz-icon">💬</span>
          </button>

          <div className="mobile-social">
            <button className="icon-btn" aria-label="Share" onClick={closeMobileMenu}>
              <Share2 size={18} />
            </button>
            <button className="icon-btn" aria-label="Instagram" onClick={closeMobileMenu}>
              <Instagram size={18} />
            </button>
            <button className="icon-btn" aria-label="YouTube" onClick={closeMobileMenu}>
              <Youtube size={18} />
            </button>
            <button className="icon-btn" aria-label="Facebook" onClick={closeMobileMenu}>
              <Facebook size={18} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;