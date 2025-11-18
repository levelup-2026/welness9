import React from 'react';
import { Share2, Instagram, Youtube, Facebook } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">🍌</div>
          <span className="logo-text">Banana Health</span>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#about" className="nav-link">About</a>
        <a href="#products" className="nav-link">Products</a>
        <button className="quiz-btn-header">
          Take The Assessment
          <span className="quiz-icon">❓</span>
        </button>
      </nav>

      <div className="header-right">
        <button className="icon-btn">
          <Share2 size={18} />
        </button>
        <button className="icon-btn">
          <Instagram size={18} />
        </button>
        <button className="icon-btn">
          <Youtube size={18} />
        </button>
        <button className="icon-btn">
          <Facebook size={18} />
        </button>
        <div className="profile-avatar">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;