import React from 'react';
import './TrustedBanner.css';

const TrustedBanner = () => {
    return (
        <section className="trusted-banner">
            <div className="trusted-container">
                <div className="trusted-wrapper">
                    <p className="trusted-text">
                        We are the <span className="highlight-text">#1 natural and 100% discreet solution</span>, featured in media houses like Cosmopolitan, The Times of India, and Hindustan Times. Trusted by over <span className="highlight-text">2000+ men, doctors, and experts</span>, we deliver proven methods—without pills, pumps, or painful procedures.
                    </p>
                    <p className="trusted-cta">
                        Get ready to take control again, because you are at the right place!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustedBanner;
