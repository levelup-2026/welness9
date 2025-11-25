import React from 'react';
import { FAQ } from '@/components/ui/faq-section';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import '../styles/BlobAnimations.css';

const FAQSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={4}
        colors={['blue', 'yellow', 'purple', 'orange']}
        sizes={['lg', 'md', 'xl', 'md']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        enableScrollEffect={true}
        intensity={0.2}
        style={{ top: '10%', right: '5%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="yellow"
        size="md"
        animationType="float-slow"
        enableMouseTracking={true}
        intensity={0.18}
        style={{ bottom: '15%', left: '8%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="sm"
        animationType="pulse"
        enableScrollEffect={true}
        style={{ top: '50%', left: '5%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="wave"
        color="blue"
        animate={true}
        float={true}
        width={350}
        height={100}
        strokeWidth={3}
        style={{ position: 'absolute', top: '15%', left: '5%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="squiggle"
        color="yellow"
        animate={true}
        wiggle={true}
        width={320}
        height={90}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '20%', right: '8%', opacity: 0.4, zIndex: 0 }}
      />
      <ScribbleLine
        type="circle"
        color="purple"
        animate={true}
        float={true}
        width={170}
        height={170}
        strokeWidth={2}
        style={{ position: 'absolute', top: '45%', right: '10%', opacity: 0.3, zIndex: 0 }}
      />

      {/* Particle Effects */}
      <div className="particle-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <div className="particle" style={{ color: '#60A5FA', top: '20%', animationDuration: '5s' }} />
        <div className="particle" style={{ color: '#FCD34D', top: '40%', animationDuration: '6s' }} />
        <div className="particle" style={{ color: '#A78BFA', top: '60%', animationDuration: '4.5s' }} />
        <div className="particle" style={{ color: '#FB923C', top: '80%', animationDuration: '7s' }} />
        <div className="sparkle" style={{ top: '28%', left: '85%', animationDelay: '0s' }} />
        <div className="sparkle" style={{ top: '68%', left: '15%', animationDelay: '1.5s' }} />
        <div className="sparkle" style={{ top: '50%', left: '90%', animationDelay: '2.5s' }} />
      </div>

      <FAQ />
    </div>
  );
};

export default FAQSection;