import React from 'react';
import { 
  Award, 
  Heart, 
  Target, 
  Users,
  X,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  Sprout,
  Handshake,
  Trophy,
  Tv,
  Briefcase,
  Leaf
} from 'lucide-react';
import './BrandStory.css';

const BrandStory = () => {
  return (
    <section className="brand-story" id="about">
      <div className="story-container">
        {/* CEO Journey Section */}
        <div className="story-hero">
          <div className="story-hero-content">
            <span className="story-label">OUR STORY</span>
            <h2 className="story-title">
              From Personal Struggle to <span className="highlight-gradient">India's Leading Solution</span>
            </h2>
            <p className="story-lead">
              In 2021, our founder Yash Vardhan Swami faced a challenge that millions of Indian men silently struggle with—Erectile Dysfunction. But what he discovered changed everything.
            </p>
          </div>
          <div className="story-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
              alt="Yash Vardhan Swami - Founder & CEO"
              className="founder-image"
            />
            <div className="founder-badge">
              <Award size={20} color="#FFD700" />
              <span>Forbes Featured</span>
            </div>
          </div>
        </div>

        {/* The Journey Cards */}
        <div className="journey-grid">
            <div className="journey-card problem-card">
            <div className="card-number">01</div>
            <h3 className="card-title">The Problem</h3>
            <p className="card-text">
              When Yash sought help, doctors offered only one solution: pills. Viagra, Cialis—temporary fixes that masked symptoms but never addressed the root cause. He felt trapped in a cycle of dependency.
            </p>
            <div className="card-icon">
              <div className="icon-wrapper red">
                  <X size={26} strokeWidth={2.4} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="journey-card turning-card">
            <div className="card-number">02</div>
            <h3 className="card-title">The Turning Point</h3>
            <p className="card-text">
              Refusing to accept a lifetime of medication, Yash dove deep into research. He discovered that ED and PE are often symptoms of deeper biological imbalances—hormones, blood flow, stress, and lifestyle factors that can be naturally corrected.
            </p>
            <div className="card-icon">
              <div className="icon-wrapper yellow">
                  <Lightbulb size={26} strokeWidth={2.2} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="journey-card solution-card">
            <div className="card-number">03</div>
            <h3 className="card-title">The Solution</h3>
            <p className="card-text">
              Three years of development alongside expert coaches, nutritionists, and thousands of test cases led to the <strong>5-Pillar Integrative Approach</strong>—a comprehensive system that permanently reverses ED and PE without any medication.
            </p>
            <div className="card-icon">
              <div className="icon-wrapper green">
                  <CheckCircle2 size={26} strokeWidth={2.4} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mission-section">
          <div className="mission-content">
            <div className="mission-header">
              <Heart size={32} className="mission-icon" />
              <h3 className="mission-title">Our Mission</h3>
            </div>
            <p className="mission-text">
              To enable every man to live an <strong>ED and medicine-free life forever</strong>. We believe sexual health is a fundamental right, not a lifelong prescription. Our mission is to help men reclaim their confidence, relationships, and quality of life—naturally.
            </p>
          </div>

          <div className="mission-stats">
            <div className="mission-stat">
              <Target size={24} />
              <div className="mission-stat-content">
                <span className="mission-stat-number">100%</span>
                <span className="mission-stat-label">Natural Approach</span>
              </div>
            </div>
            <div className="mission-stat">
              <Users size={24} />
              <div className="mission-stat-content">
                <span className="mission-stat-number">5,000+</span>
                <span className="mission-stat-label">Lives Transformed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="leadership-section">
          <h3 className="leadership-title">Meet The Team</h3>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                  alt="Yash Vardhan Swami"
                  className="leader-image"
                />
                <div className="leader-badge forbes">Forbes Featured</div>
              </div>
              <div className="leader-info">
                <h4 className="leader-name">Yash Vardhan Swami</h4>
                <p className="leader-role">CEO & Co-Founder</p>
                <p className="leader-bio">
                  Forbes-featured health coach, recognized among India's best. Transformed personal struggle into a mission to help thousands reclaim their sexual health naturally.
                </p>
                <div className="leader-achievements">
                  <span className="achievement-badge">
                    <Trophy size={16} aria-hidden="true" />
                    Forbes India
                  </span>
                  <span className="achievement-badge">
                    <Tv size={16} aria-hidden="true" />
                    Media Featured
                  </span>
                </div>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                  alt="Chetan Arora"
                  className="leader-image"
                />
              </div>
              <div className="leader-info">
                <h4 className="leader-name">Chetan Arora</h4>
                <p className="leader-role">Co-Founder</p>
                <p className="leader-bio">
                  Wellness expert and operations strategist. Dedicated to scaling natural health solutions and making them accessible to men across India.
                </p>
                <div className="leader-achievements">
                  <span className="achievement-badge">
                    <Briefcase size={16} aria-hidden="true" />
                    Operations Expert
                  </span>
                  <span className="achievement-badge">
                    <Leaf size={16} aria-hidden="true" />
                    Wellness Advocate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-title">What We Stand For</h3>
          <div className="values-grid">
            <div className="value-card">
                <div className="value-icon">
                  <Target size={32} strokeWidth={2.2} aria-hidden="true" />
                </div>
              <h4 className="value-name">Root Cause Focus</h4>
              <p className="value-description">
                We don't mask symptoms. We identify and fix the biological imbalances causing ED and PE.
              </p>
            </div>
            <div className="value-card">
                <div className="value-icon">
                  <Sprout size={32} strokeWidth={2.2} aria-hidden="true" />
                </div>
              <h4 className="value-name">Natural Always</h4>
              <p className="value-description">
                Zero pills, pumps, or invasive procedures. Only science-backed natural methods.
              </p>
            </div>
            <div className="value-card">
                <div className="value-icon">
                  <ShieldCheck size={32} strokeWidth={2.2} aria-hidden="true" />
                </div>
              <h4 className="value-name">Complete Privacy</h4>
              <p className="value-description">
                Your journey is protected by NDA. Total confidentiality guaranteed.
              </p>
            </div>
            <div className="value-card">
                <div className="value-icon">
                  <Handshake size={32} strokeWidth={2.2} aria-hidden="true" />
                </div>
              <h4 className="value-name">Personalized Care</h4>
              <p className="value-description">
                Every man is different. Your program is customized to your unique biology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

