import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, X } from 'lucide-react';
import './MobileFloatingCTA.css';

const MobileFloatingCTA = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isExpanded) {
      navigate('/quiz');
    } else {
      setIsExpanded(true);
      // Auto-collapse after 5 seconds
      setTimeout(() => setIsExpanded(false), 5000);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Only (< 768px) */}
      <div className="mobile-floating-cta-wrapper">
        <button 
          className={`mobile-fab ${isExpanded ? 'expanded' : ''}`}
          onClick={handleClick}
          aria-label="Take Free Assessment"
        >
          {isExpanded ? (
            <>
              <span className="fab-text">Free Assessment</span>
              <Flame size={22} strokeWidth={2.5} />
            </>
          ) : (
            <Flame size={26} strokeWidth={2.5} />
          )}
        </button>

        {isExpanded && (
          <button 
            className="fab-close"
            onClick={() => setIsExpanded(false)}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </>
  );
};

export default MobileFloatingCTA;
