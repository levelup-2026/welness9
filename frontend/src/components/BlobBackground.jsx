import React, { useEffect, useState } from 'react';
import '../styles/BlobAnimations.css';

/**
 * BlobBackground Component
 * Creates an animated blob background with multiple layers
 */
const BlobBackground = ({
  count = 3,
  colors = ['blue', 'purple', 'yellow'],
  sizes = ['lg', 'md', 'xl'],
  enableParallax = true,
  className = '',
  style = {}
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);

  const blobs = Array.from({ length: count }, (_, i) => ({
    color: colors[i % colors.length],
    size: sizes[i % sizes.length],
    position: {
      top: `${(i * 30) % 80}%`,
      left: `${(i * 40) % 90}%`
    },
    delay: i * 0.5,
    parallaxSpeed: 0.05 + (i * 0.02)
  }));

  return (
    <div 
      className={`blob-background ${className}`}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      }}
    >
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`blob blob-${blob.size} blob-${blob.color} blob-morph blob-float`}
          style={{
            position: 'absolute',
            top: blob.position.top,
            left: blob.position.left,
            animationDelay: `${blob.delay}s`,
            transform: enableParallax 
              ? `translateY(${scrollY * blob.parallaxSpeed}px)` 
              : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default BlobBackground;
