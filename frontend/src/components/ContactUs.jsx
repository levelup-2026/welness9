import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare, Users, Shield } from 'lucide-react';
import InteractiveBlob from './InteractiveBlob';
import ScribbleLine from './ScribbleLine';
import BlobBackground from './BlobBackground';
import './ContactUs.css';
import '../styles/BlobAnimations.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const concerns = [
    'Erectile Dysfunction (ED)',
    'Premature Ejaculation (PE)',
    'Low Libido',
    'Performance Anxiety',
    'General Sexual Health',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@bananahealth.in',
      link: 'mailto:support@bananahealth.in'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXX XXX XXXX',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: null
    }
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Confidential',
      description: 'All conversations protected by NDA'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated health professionals ready to help'
    },
    {
      icon: MessageSquare,
      title: 'Quick Response',
      description: 'We respond within 24 hours'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ submitted: false, error: false, message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.concern) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you! Our expert team will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        concern: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-us-section" id="contact-us">
      {/* Enhanced Blob Background */}
      <BlobBackground 
        count={4}
        colors={['blue', 'purple', 'orange', 'green']}
        sizes={['lg', 'md', 'lg', 'md']}
        enableParallax={true}
      />

      {/* Interactive Floating Blobs */}
      <InteractiveBlob
        color="blue"
        size="lg"
        animationType="morph"
        enableMouseTracking={true}
        enableScrollEffect={true}
        intensity={0.15}
        style={{ top: '15%', right: '10%', zIndex: 0 }}
      />
      <InteractiveBlob
        color="purple"
        size="md"
        animationType="float-slow"
        enableMouseTracking={true}
        intensity={0.12}
        style={{ bottom: '20%', left: '8%', zIndex: 0 }}
      />

      {/* Decorative Scribbles */}
      <ScribbleLine
        type="squiggle"
        color="blue"
        animate={true}
        float={true}
        width={300}
        height={80}
        strokeWidth={2}
        style={{ position: 'absolute', top: '10%', left: '5%', opacity: 0.3, zIndex: 0 }}
      />
      <ScribbleLine
        type="wave"
        color="orange"
        animate={true}
        wiggle={true}
        width={280}
        height={70}
        strokeWidth={2}
        style={{ position: 'absolute', bottom: '15%', right: '5%', opacity: 0.3, zIndex: 0 }}
      />

      <div className="contact-us-container">
        {/* Header */}
        <div className="contact-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            Contact Us
          </div>
          <h2 className="contact-title">
            Got Questions About <span className="highlight-gradient">Reversing ED, PE,</span> or Other Sexual Health Challenges?
          </h2>
          <div className="title-doodle">
            <svg viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5,15 Q200,5 395,15" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <p className="contact-subtitle">
            Our expert team is ready to guide you, every step of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="contact-content-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3 className="form-title">Ready to Talk?</h3>
              <p className="form-subtitle">Fill out the form, and our expert team will contact you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="concern" className="form-label">
                  Primary Concern <span className="required">*</span>
                </label>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select your concern</option>
                  {concerns.map((concern, index) => (
                    <option key={index} value={concern}>
                      {concern}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="4"
                  placeholder="Tell us more about your situation..."
                />
              </div>

              {formStatus.submitted && (
                <div className="form-message success-message">
                  <CheckCircle size={20} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.error && (
                <div className="form-message error-message">
                  <AlertCircle size={20} />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Get Started
                  </>
                )}
              </button>

              <p className="privacy-note">
                <Shield size={16} />
                Your information is 100% confidential and protected by our NDA policy.
              </p>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3 className="info-title">Other Ways to Reach Us</h3>
              <div className="contact-methods">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div className="contact-method" key={index}>
                      <div className="method-icon">
                        <IconComponent size={22} strokeWidth={2} />
                      </div>
                      <div className="method-details">
                        <p className="method-label">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="method-value">
                            {info.value}
                          </a>
                        ) : (
                          <p className="method-value">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="commitment-card">
              <div className="commitment-icon">
                <MessageSquare size={32} />
              </div>
              <h4 className="commitment-title">Our Commitment</h4>
              <p className="commitment-text">
                We understand how personal and sensitive these issues are. Every conversation 
                is treated with the utmost respect, professionalism, and confidentiality. 
                Your journey to better health starts with a simple message.
              </p>
            </div>

            <div className="response-card">
              <h4 className="response-title">What Happens Next?</h4>
              <ol className="response-steps">
                <li>You submit the form with your details</li>
                <li>Our expert team reviews your information</li>
                <li>We contact you within 24 hours</li>
                <li>We create a personalized plan for you</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
