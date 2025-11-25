import React, { useEffect, useRef, useState } from 'react';
import '../styles/BlobAnimations.css';

/**
 * InteractiveBlob Component
 * A highly interactive blob that responds to mouse/touch movements
 * and scroll position with smooth animations
 */
const InteractiveBlob = ({ 
  color = 'blue',
  size = 'md',
  animationType = 'morph',
  enableMouseTracking = true,
  enableScrollEffect = false,
  intensity = 0.3,
  className = '',
  style = {},
  children
}) => {
  const blobRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouchDevice();
  }, []);

  useEffect(() => {
    if (!enableMouseTracking && !enableScrollEffect) return;
    
    // Reduce tracking on touch devices for performance
    const shouldTrackMouse = enableMouseTracking && !isTouchDevice;

    const handleMouseMove = (e) => {
      if (!shouldTrackMouse || !blobRef.current) return;
      
      const rect = blobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;
      
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(() => {
        setPosition({ x: deltaX, y: deltaY });
      });
    };

    const handleTouchMove = (e) => {
      if (!enableMouseTracking || !isTouchDevice || !blobRef.current) return;
      
      const touch = e.touches[0];
      if (!touch) return;
      
      const rect = blobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (touch.clientX - centerX) * intensity * 0.5; // Reduced intensity for touch
      const deltaY = (touch.clientY - centerY) * intensity * 0.5;
      
      requestAnimationFrame(() => {
        setPosition({ x: deltaX, y: deltaY });
      });
    };

    const handleScroll = () => {
      if (!enableScrollEffect) return;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    // Use passive listeners for better performance
    if (shouldTrackMouse) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    if (isTouchDevice && enableMouseTracking) {
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
    }
    if (enableScrollEffect) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableMouseTracking, enableScrollEffect, intensity, isTouchDevice]);

  const blobClasses = [
    'blob',
    `blob-${size}`,
    `blob-${color}`,
    animationType ? `blob-${animationType}` : '',
    className
  ].filter(Boolean).join(' ');

  const transformStyle = {
    transform: `translate(${position.x}px, ${position.y}px) translateY(${scrollY * 0.1}px)`,
    transition: isTouchDevice ? 'transform 0.3s ease-out' : 'transform 0.2s ease-out',
    ...style
  };

  return (
    <div 
      ref={blobRef}
      className={blobClasses}
      style={transformStyle}
    >
      {children}
    </div>
  );
};

export default InteractiveBlob;
