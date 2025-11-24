import React, { useState, useEffect } from 'react';
import { Share2, Instagram, Youtube, Facebook, Menu, X, ClipboardCheck } from 'lucide-react';
import LogoMark from './LogoMark';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll for floating effect and hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 10);
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
          <div className="header-left">
            <div className="logo">
              <div className="logo-icon">
                <LogoMark />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <a href="#approach" className="nav-link">Our Approach</a>
            <a href="#success-stories" className="nav-link">Success Stories</a>
            <button className="quiz-btn-header" onClick={() => window.open('https://example.com/quiz', '_blank')}>
              Free Assessment
              <span className="quiz-icon" aria-hidden="true">
                <ClipboardCheck size={16} strokeWidth={2.5} />
              </span>
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
          <a href="#approach" className="mobile-nav-link" onClick={closeMobileMenu}>
            Our Approach
          </a>
          <a href="#success-stories" className="mobile-nav-link" onClick={closeMobileMenu}>
            Success Stories
          </a>
          <button className="quiz-btn-mobile" onClick={() => { closeMobileMenu(); window.open('https://example.com/quiz', '_blank'); }}>
            Free Assessment
            <span className="quiz-icon" aria-hidden="true">
              <ClipboardCheck size={16} strokeWidth={2.5} />
            </span>
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