import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Share2, Instagram, Youtube, Facebook, Linkedin, Menu, X } from 'lucide-react';
import LogoMark from './LogoMark';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const ticking = useRef(false);

  // Optimized scroll handler with requestAnimationFrame throttling
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const lastScrollY = lastScrollYRef.current;
          
          // Set scrolled state for styling
          setIsScrolled(currentScrollY > 10);
          
          // Show header when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY || currentScrollY < 100) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
          }
          
          lastScrollYRef.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <header className={`main-header ${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
          <div className="header-left">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <LogoMark />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/our-approach" className="nav-link">Our Approach</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/about-us#contact-banana-health" className="nav-link">Contact Us</Link>
          </nav>

          {/* Desktop Social Icons */}
          <div className="header-right desktop-social">
            <a
              className="icon-btn"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/banana-health-with-chetan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Instagram"
              href="https://www.instagram.com/mybanana.health?igsh=MW14ZmxkZGo4bGhkbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="YouTube"
              href="https://youtube.com/@trainedbyyvs?si=j5KhjEX4wWXHN2mL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Facebook"
              href="https://www.facebook.com/profile.php?id=61572211965994&sk=reels_tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={18} />
            </a>
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
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/our-approach" className="mobile-nav-link" onClick={closeMobileMenu}>
            Our Approach
          </Link>
          <Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link to="/about-us#contact-banana-health" className="mobile-nav-link" onClick={closeMobileMenu}>
            Contact Us
          </Link>

          <div className="mobile-social">
            <a
              className="icon-btn"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/banana-health-with-chetan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <Linkedin size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Instagram"
              href="https://www.instagram.com/mybanana.health?igsh=MW14ZmxkZGo4bGhkbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <Instagram size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="YouTube"
              href="https://youtube.com/@trainedbyyvs?si=j5KhjEX4wWXHN2mL"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <Youtube size={18} />
            </a>
            <a
              className="icon-btn"
              aria-label="Facebook"
              href="https://www.facebook.com/profile.php?id=61572211965994&sk=reels_tab"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;