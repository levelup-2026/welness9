import React from 'react';
import { Target, Users, Shield, Heart, Sparkles, TrendingUp, MessageSquare, Clock, Leaf, Headset, FlaskConical, MessageCircle, ShieldCheck, Sprout, Mail, Phone } from 'lucide-react';
import LogoMark from './LogoMark';
import './AboutUs.css';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Science-Backed Methods',
      description: 'Proven, evidence-based natural solutions developed by experts'
    },
    {
      icon: Users,
      title: 'Communication First',
      description: 'Success through open dialogue, not perfection. We\'re here to support you daily'
    },
    {
      icon: Shield,
      title: 'Privacy Paramount',
      description: 'Your journey is protected with NDA-level confidentiality and security'
    },
    {
      icon: Heart,
      title: '100% Natural',
      description: 'No pills, no pumps, no side effects—just permanent, natural transformation'
    }
  ];

  const mediaLogos = [
    { name: 'Hindustan Times', logo: 'ht-logo.png' },
    { name: 'Cosmopolitan', logo: 'cosmo-logo.png' },
    { name: 'The Times of India', logo: 'toi-logo.png' },
    { name: 'India Today', logo: 'indiatoday-logo.png' }
  ];

  const stats = [
    { number: '5,000+', label: 'Men Transformed' },
    { number: '6 Weeks', label: 'Average Results' },
    { number: '100%', label: 'Natural Methods' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">

        {/* Main Who We Are Section - Redesigned */}
        <div className="who-we-are-hero">
          <div className="section-header-centered">
            <h2 className="main-heading">
              Who Are <span className="heading-highlight">We?</span>
            </h2>
          </div>
          <div className="who-we-are-grid">
            
            {/* Image Column */}
            <div className="founder-column">
              <div className="founder-image-decoration"></div>
              <div className="founder-image-card">
                <img 
                  src={`${process.env.PUBLIC_URL}/founders-full.jpg`} 
                  alt="Yash Vardhan Swami & Chetan Arora - Founders" 
                  className="founder-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="founder-photo-placeholder" style={{ display: 'none' }}>
                  <Users size={80} className="placeholder-icon" />
                </div>
                <div className="founder-badge">
                  <p className="founder-badge-text">
                    Yash, <span className="founder-badge-subtitle">Founder</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="content-column">
              <div className="content-wrapper">
                
                {/* Tagline */}
                <h2 className="headline">
                  Solving Men's Biggest <br />
                  Hidden Problem, <span className="highlight-natural">Naturally. <Sparkles className="inline-sparkle" size={28} /></span>
                </h2>
                
                <div className="main-description">
                  <p>
                    Banana Health was founded by Yash Vardhan Swami and Chetan Arora with a mission to help men fix ED and PE <span className="text-highlight">100% naturally</span>. Our science-backed methods are developed by men, for men.
                  </p>
                  <p>
                    We believe success comes through communication, not perfection. We offer a permanent solution without reliance on medication.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="feature-cards-grid">
                  <div className="feature-card">
                    <div className="feature-icon yellow-icon">
                      <Shield size={32} strokeWidth={2} />
                    </div>
                    <div className="feature-text">
                      <h3 className="feature-heading">100% Private & Secure</h3>
                      <p className="feature-description">
                        We secure your work with a Non-Disclosure Agreement (NDA). Focus on your health with absolute confidence.
                      </p>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon blue-icon">
                      <MessageSquare size={32} strokeWidth={2} />
                    </div>
                    <div className="feature-text">
                      <h3 className="feature-heading">Communication First</h3>
                      <p className="feature-description">
                        Our only ask is that you communicate. We are your dedicated team, ready to fix any challenge fast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>



        {/* Media Features Section - Redesigned with Cards */}
        <div className="media-section-new">
          <div className="section-header-media">
            <h2 className="media-heading-styled">
              In The <span className="media-highlight-box">Spotlight</span>
            </h2>
            <div className="media-divider-line"></div>
            <p className="media-intro-styled">
              Recognized across the nation for redefining men's wellness standards.
            </p>
          </div>

          <div className="media-cards-wrapper">
            <div className="media-cards-track">
              
              {/* Card 1 - Cosmopolitan */}
              <a 
                href="https://www.cosmopolitan.in/life/features/story/watch-out-these-food-triggers-can-make-you-overeat-663741-2021-06-25"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/cosmopolitian.jpg`}
                    alt="Cosmopolitan"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">Cosmopolitan</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Cosmopolitan</span>
                  <h4 className="article-title">
                    Watch Out: These Food Triggers Can Make You Overeat
                  </h4>
                  <p className="article-excerpt">
                    Understanding the science behind food triggers and how to manage them for better health outcomes.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">June 2021</span>
                    <div className="article-badge">Health</div>
                  </div>
                </div>
              </a>

              {/* Card 2 - India Today */}
              <a 
                href="https://www.indiatoday.in/impact-feature/story/meet-10-leaders-who-make-india-a-global-bright-spot-2309980-2022-12-16"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/indiatoday.jpg`}
                    alt="India Today"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">India Today</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">India Today</span>
                  <h4 className="article-title">
                    Meet 10 Leaders Who Make India a Global Bright Spot
                  </h4>
                  <p className="article-excerpt">
                    Featuring influential leaders transforming India's wellness and fitness landscape.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">December 2022</span>
                    <div className="article-badge">Leadership</div>
                  </div>
                </div>
              </a>
              {/* Card 3 - Times of India */}
              <a 
                href="https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-story-i-did-cardio-and-weight-training-5-days-to-lose-44-kilos/photostory/87607509.cms?from=mdr"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/TOI.jpg`}
                    alt="Times of India"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">Times of India</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Times of India</span>
                  <h4 className="article-title">
                    Weight Loss Story: I Did Cardio and Weight Training 5 Days to Lose 44 Kilos
                  </h4>
                  <p className="article-excerpt">
                    Inspiring transformation journey showcasing the power of consistent fitness routines.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">December 2021</span>
                    <div className="article-badge">Transformation</div>
                  </div>
                </div>
              </a>

              {/* Card 4 - Mid-Day */}
              <a 
                href="https://www.mid-day.com/entertainment/bollywood-news/article/yash-vardhan-swami-takes-fitness-and-entrepreneurship-to-next-level-21197158"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/MIDDAY.jpg`}
                    alt="Mid-Day"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">Mid-Day</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Mid-Day</span>
                  <h4 className="article-title">
                    Yash Vardhan Swami Takes Fitness and Entrepreneurship to Next Level
                  </h4>
                  <p className="article-excerpt">
                    How one fitness entrepreneur is revolutionizing the wellness industry.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">May 2019</span>
                    <div className="article-badge">Innovation</div>
                  </div>
                </div>
              </a>

              {/* Card 5 - Red Bull */}
              <a 
                href="https://www.redbull.com/in-en/nutrition-tips-to-achieve-fitness-goals"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/REDBULL.jpg`}
                    alt="Red Bull"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">Red Bull</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Red Bull</span>
                  <h4 className="article-title">
                    Nutrition Tips to Achieve Fitness Goals
                  </h4>
                  <p className="article-excerpt">
                    Expert advice on nutrition strategies for optimal fitness performance.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">2023</span>
                    <div className="article-badge">Nutrition</div>
                  </div>
                </div>
              </a>

              {/* Card 6 - DNA India */}
              <a 
                href="https://www.dnaindia.com/lifestyle/report-real-body-positivity-is-misunderstood-celebrity-fitness-coach-yash-vardhan-swami-2842993"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/DNA.jpg`}
                    alt="DNA India"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">DNA India</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">DNA India</span>
                  <h4 className="article-title">
                    Real Body Positivity is Misunderstood - Celebrity Fitness Coach
                  </h4>
                  <p className="article-excerpt">
                    Celebrity fitness coach Yash Vardhan Swami shares insights on true body positivity.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">April 2021</span>
                    <div className="article-badge">Wellness</div>
                  </div>
                </div>
              </a>

              {/* Card 7 - The Pioneer */}
              <a 
                href="https://www.dailypioneer.com/2022/vivacity/inch-away.html"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/PIONEER.jpg`}
                    alt="The Pioneer"
                    className="article-publisher-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('image-fallback');
                      e.target.parentElement.innerHTML = '<div class="fallback-content"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg><span class="fallback-name">The Pioneer</span></div>';
                    }}
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">The Pioneer</span>
                  <h4 className="article-title">
                    Inch Away - The Journey to Better Health
                  </h4>
                  <p className="article-excerpt">
                    Exploring sustainable approaches to wellness and fitness transformation.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">May 2022</span>
                    <div className="article-badge">Fitness</div>
                  </div>
                </div>
              </a>

              {/* Duplicate cards for seamless loop */}
              <a 
                href="https://www.cosmopolitan.in/life/features/story/watch-out-these-food-triggers-can-make-you-overeat-663741-2021-06-25"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/cosmopolitian.jpg`}
                    alt="Cosmopolitan"
                    className="article-publisher-image"
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Cosmopolitan</span>
                  <h4 className="article-title">
                    Watch Out: These Food Triggers Can Make You Overeat
                  </h4>
                  <p className="article-excerpt">
                    Understanding the science behind food triggers and how to manage them for better health outcomes.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">June 2021</span>
                    <div className="article-badge">Health</div>
                  </div>
                </div>
              </a>

              <a 
                href="https://www.indiatoday.in/impact-feature/story/meet-10-leaders-who-make-india-a-global-bright-spot-2309980-2022-12-16"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/indiatoday.jpg`}
                    alt="India Today"
                    className="article-publisher-image"
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">India Today</span>
                  <h4 className="article-title">
                    Meet 10 Leaders Who Make India a Global Bright Spot
                  </h4>
                  <p className="article-excerpt">
                    Featuring influential leaders transforming India's wellness and fitness landscape.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">December 2022</span>
                    <div className="article-badge">Leadership</div>
                  </div>
                </div>
              </a>

              <a 
                href="https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-story-i-did-cardio-and-weight-training-5-days-to-lose-44-kilos/photostory/87607509.cms?from=mdr"
                target="_blank"
                rel="noopener noreferrer"
                className="media-article-card"
              >
                <div className="article-image-header">
                  <img 
                    src={`${process.env.PUBLIC_URL}/TOI.jpg`}
                    alt="Times of India"
                    className="article-publisher-image"
                  />
                </div>
                <div className="article-content">
                  <span className="publisher-tag">Times of India</span>
                  <h4 className="article-title">
                    Weight Loss Story: I Did Cardio and Weight Training 5 Days to Lose 44 Kilos
                  </h4>
                  <p className="article-excerpt">
                    Inspiring transformation journey showcasing the power of consistent fitness routines.
                  </p>
                  <div className="article-footer">
                    <span className="article-date">December 2021</span>
                    <div className="article-badge">Transformation</div>
                  </div>
                </div>
              </a>

            </div>
          </div>

          <div className="media-trust-badge">
            <Sparkles size={20} />
            <p>Trusted by leading media outlets across India for authentic wellness transformation</p>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-banana-health" className="contact-section-wrapper">
          <div className="contact-content-box">
            <div className="contact-logo-wrapper">
              <LogoMark className="contact-logo-svg" />
            </div>
            
            <h2 className="contact-heading">Contact Banana Health</h2>
            
            <p className="contact-subtext">
              Got questions about reversing ED, PE, or solving other sexual health challenges? Our expert team is ready to guide you, every step of the way.
            </p>

            <div className="contact-action-area">
              <p className="contact-action-text">
                Ready to talk? Fill out the form, and our expert team will contact you shortly.
              </p>
              <a href="/contact-form" className="contact-cta-button">
                Get Started
              </a>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-item">
                <Mail size={18} />
                <a href="mailto:yvs@banana.health">yvs@banana.health</a>
              </div>
              <div className="contact-info-item">
                <Phone size={18} />
                <span>+91 94323 00089</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
