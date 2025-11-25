import React from 'react';
import '../styles/BlobAnimations.css';

/**
 * ScribbleLine Component
 * Animated scribble/doodle lines with various styles
 */
const ScribbleLine = ({ 
  type = 'underline',
  color = 'blue',
  animate = true,
  float = false,
  wiggle = false,
  width = 200,
  height = 20,
  strokeWidth = 3,
  className = '',
  style = {}
}) => {
  const scribbleClasses = [
    'scribble',
    animate ? 'scribble-animated' : '',
    float ? 'scribble-float' : '',
    wiggle ? 'scribble-wiggle' : '',
    className
  ].filter(Boolean).join(' ');

  const lineClasses = `scribble-line scribble-${color}`;

  const renderPath = () => {
    switch(type) {
      case 'underline':
        return (
          <path 
            d={`M5,${height-5} Q${width/4},${height-10} ${width/2},${height-5} T${width-5},${height-5}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
      
      case 'circle':
        const radius = Math.min(width, height) / 2 - 10;
        return (
          <circle
            cx={width/2}
            cy={height/2}
            r={radius}
            className={lineClasses}
            strokeWidth={strokeWidth}
            strokeDasharray="5,5"
          />
        );
      
      case 'arrow':
        return (
          <>
            <path 
              d={`M10,${height/2} Q${width/3},${height/4} ${width/2},${height/2} T${width-20},${height/2}`}
              className={lineClasses}
              strokeWidth={strokeWidth}
            />
            <path 
              d={`M${width-25},${height/2-8} L${width-10},${height/2} L${width-25},${height/2+8}`}
              className={lineClasses}
              strokeWidth={strokeWidth}
            />
          </>
        );
      
      case 'wave':
        return (
          <path 
            d={`M10,${height/2} Q${width/6},${height/4} ${width/3},${height/2} T${(2*width)/3},${height/2} Q${(5*width)/6},${height/4} ${width-10},${height/2}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
      
      case 'zigzag':
        return (
          <path 
            d={`M10,${height/2} L${width/4},${height/4} L${width/2},${height/2} L${(3*width)/4},${height/4} L${width-10},${height/2}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
      
      case 'spiral':
        return (
          <path 
            d={`M${width/2},${height/2} Q${width/3},${height/3} ${width/4},${height/2} Q${width/3},${(2*height)/3} ${width/2},${(2*height)/3} Q${(2*width)/3},${(2*height)/3} ${(3*width)/4},${height/2} Q${(2*width)/3},${height/3} ${width/2},${height/3}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
      
      case 'squiggle':
        return (
          <path 
            d={`M10,${height/2} C${width/6},${height/4} ${width/5},${(3*height)/4} ${width/3},${height/2} S${width/2},${height/4} ${(2*width)/3},${height/2} S${(5*width)/6},${(3*height)/4} ${width-10},${height/2}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
      
      default:
        return (
          <path 
            d={`M5,${height-5} L${width-5},${height-5}`}
            className={lineClasses}
            strokeWidth={strokeWidth}
          />
        );
    }
  };

  return (
    <svg 
      className={scribbleClasses}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderPath()}
    </svg>
  );
};

export default ScribbleLine;
