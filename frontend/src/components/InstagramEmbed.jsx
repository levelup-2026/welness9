import React, { useEffect, useRef } from 'react';
import './InstagramEmbed.css';

const InstagramEmbed = () => {
  const embedRef = useRef(null);
  const processedRef = useRef(false);
  const isMountedRef = useRef(true);
  const originalConsoleErrorRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    let timeouts = [];
    
    // Global error handler to suppress Instagram's React invariant errors
    originalConsoleErrorRef.current = console.error;
    const suppressInstagramErrors = (message, ...args) => {
      // Suppress React invariant errors from Instagram's embed script
      if (
        typeof message === 'string' && 
        (message.includes('Minified invariant') || 
         message.includes('invariant #4412') ||
         message.includes('www.instagram.com/embed.js'))
      ) {
        // Suppress these errors silently
        return;
      }
      // Log other errors normally
      if (originalConsoleErrorRef.current) {
        originalConsoleErrorRef.current.apply(console, [message, ...args]);
      }
    };

    // Override console.error to suppress Instagram errors
    console.error = suppressInstagramErrors;

    const processEmbed = () => {
      // Prevent multiple processing attempts
      if (processedRef.current || !isMountedRef.current) return;
      
      try {
        // Check if Instagram script is available
        if (typeof window.instgrm === 'undefined' || !window.instgrm.Embeds) {
          return;
        }
        
        // Wait for DOM to be ready
        if (!embedRef.current) {
          return;
        }
        
        const blockquote = embedRef.current.querySelector('blockquote.instagram-media');
        if (blockquote && !blockquote.hasAttribute('data-instgrm-processed')) {
          // Use requestAnimationFrame to ensure DOM is fully ready
          requestAnimationFrame(() => {
            // Double-check component is still mounted
            if (!isMountedRef.current || processedRef.current) return;
            
            try {
              // Wrap in additional try-catch to prevent errors from bubbling
              const originalErrorHandler = window.onerror;
              window.onerror = (msg, url, lineNo, columnNo, error) => {
                // Suppress Instagram embed.js errors
                if (url && url.includes('instagram.com/embed.js')) {
                  return true; // Prevent default error handling
                }
                // Allow other errors to propagate
                if (originalErrorHandler) {
                  return originalErrorHandler(msg, url, lineNo, columnNo, error);
                }
                return false;
              };

              // Process the embed
              window.instgrm.Embeds.process();
              processedRef.current = true;

              // Restore original error handler after processing
              setTimeout(() => {
                window.onerror = originalErrorHandler;
              }, 100);
            } catch (error) {
              // Silently catch errors - Instagram's script may throw React invariant errors
              // that don't affect functionality
              if (process.env.NODE_ENV === 'development') {
                console.warn('Instagram embed processing error:', error);
              }
              // Don't mark as processed so we can retry
            }
          });
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Instagram embed error:', error);
        }
        // Silently fail - show fallback content
      }
    };

    // Check if script already exists to avoid duplicates
    const scriptId = 'instagram-embed-script';
    const existingScript = document.getElementById(scriptId);
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      // Process embeds once script loads with delay to ensure DOM is ready
      script.onload = () => {
        // Wait for script to fully initialize
        const timeout = setTimeout(() => {
          processEmbed();
        }, 200);
        timeouts.push(timeout);
      };
      
      // Handle script load errors
      script.onerror = () => {
        console.warn('Failed to load Instagram embed script');
      };
      
      document.body.appendChild(script);
    } else {
      // Script already exists, wait a bit then trigger processing
      const timeout = setTimeout(() => {
        processEmbed();
      }, 200);
      timeouts.push(timeout);
    }

    // Fallback: try processing after a delay in case script was already loaded
    const fallbackTimeout = setTimeout(() => {
      processEmbed();
    }, 1000);
    timeouts.push(fallbackTimeout);

    // Global window error handler to catch React invariant errors from Instagram
    const globalErrorHandler = (event) => {
      // Suppress React invariant errors from Instagram's embed script
      if (
        event.message && 
        (event.message.includes('Minified invariant') || 
         event.message.includes('invariant #4412') ||
         (event.filename && event.filename.includes('instagram.com/embed.js')))
      ) {
        event.preventDefault();
        event.stopPropagation();
        return true; // Suppress the error
      }
      return false; // Allow other errors to propagate
    };

    // Add global error handler
    window.addEventListener('error', globalErrorHandler, true);

    return () => {
      isMountedRef.current = false;
      timeouts.forEach(timeout => clearTimeout(timeout));
      // Restore original console.error if we overrode it
      if (originalConsoleErrorRef.current) {
        console.error = originalConsoleErrorRef.current;
      }
      // Remove global error handler
      window.removeEventListener('error', globalErrorHandler, true);
    };
  }, []);

  const instagramPostUrl = 'https://www.instagram.com/p/DMpF3cURusF/';

  return (
    <section className="instagram-embed-container" aria-label="Instagram post">
      <div className="instagram-content-wrapper" ref={embedRef}>
        {/* Left side - Text content */}
        <article className="instagram-text-content">
          <header className="instagram-profile-header">
            <img 
              src="/insta.jpg" 
              alt="trainedbyyvs profile" 
              className="instagram-profile-picture"
            />
            <div className="instagram-profile-info">
              <div className="instagram-username">trainedbyyvs</div>
              <time className="instagram-time" dateTime="2024-01-01">19w</time>
            </div>
          </header>
          <div className="instagram-post-content">
            <h2 className="instagram-title">Introducing Banana.Health.</h2>
            <p className="instagram-description">
              Here's why we chose to build Banana.Health and why now is the time.
            </p>
            <p className="instagram-signature">-YVS</p>
          </div>
        </article>

        {/* Right side - Instagram embed */}
        <aside className="instagram-embed-wrapper" aria-label="Instagram embed">
          <blockquote 
            className="instagram-media" 
            data-instgrm-permalink={instagramPostUrl}
            data-instgrm-version="14"
          >
            <div className="instagram-media-inner">
              <a 
                href={instagramPostUrl}
                className="instagram-media-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View Instagram post"
              >
                <div className="instagram-media-header">
                  <div className="instagram-media-avatar" aria-hidden="true"></div>
                  <div className="instagram-media-user-info">
                    <div className="instagram-media-skeleton instagram-media-skeleton-medium"></div>
                    <div className="instagram-media-skeleton instagram-media-skeleton-small"></div>
                  </div>
                </div>
                <div className="instagram-media-spacer" aria-hidden="true"></div>
                <div className="instagram-media-icon-wrapper">
                  <svg 
                    className="instagram-media-icon"
                    viewBox="0 0 60 60" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                        <g>
                          <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="instagram-media-view-text">
                  <div className="instagram-media-view-link">
                    View this post on Instagram
                  </div>
                </div>
                <div className="instagram-media-spacer-small" aria-hidden="true"></div>
                <div className="instagram-media-actions">
                  <div className="instagram-media-action-group">
                    <div className="instagram-media-skeleton-circle" style={{ transform: 'translateX(0px) translateY(7px)' }}></div>
                    <div className="instagram-media-skeleton-square" style={{ transform: 'rotate(-45deg) translateX(3px) translateY(1px)', marginRight: '14px', marginLeft: '2px' }}></div>
                    <div className="instagram-media-skeleton-circle" style={{ transform: 'translateX(9px) translateY(-18px)' }}></div>
                  </div>
                  <div className="instagram-media-action-group instagram-media-action-group-spaced">
                    <div className="instagram-media-skeleton-circle-large"></div>
                    <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }}></div>
                  </div>
                  <div className="instagram-media-action-group instagram-media-action-group-auto">
                    <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }}></div>
                    <div className="instagram-media-skeleton-rect" style={{ transform: 'translateY(-4px)' }}></div>
                    <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }}></div>
                  </div>
                </div>
                <div className="instagram-media-content-skeleton">
                  <div className="instagram-media-skeleton instagram-media-skeleton-large"></div>
                  <div className="instagram-media-skeleton instagram-media-skeleton-xlarge"></div>
                </div>
              </a>
              <p className="instagram-media-footer">
                <a 
                  href={instagramPostUrl}
                  className="instagram-media-footer-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  A post shared by Yash Vardhan Swami (@trainedbyyvs)
                </a>
              </p>
            </div>
          </blockquote>
        </aside>
      </div>
    </section>
  );
};

export default InstagramEmbed;

