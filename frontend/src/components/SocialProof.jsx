import React from 'react';
import { Star } from 'lucide-react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh M.',
      age: 34,
      location: 'Mumbai',
      rating: 5,
      text: 'After 2 years of ED, I was dependent on pills. In just 8 weeks with Banana Health, I achieved natural erections. No pills needed anymore!',
      result: 'ED Reversed',
      metric: 'Pill-free in 8 weeks',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Vikram K.',
      age: 42,
      location: 'Delhi',
      rating: 5,
      text: 'PE was destroying my marriage. From lasting 2 minutes to 15+ minutes naturally. My confidence and relationship are completely transformed.',
      result: 'PE Overcome',
      metric: 'From 2 to 15+ minutes',
      avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
    },
    {
      id: 3,
      name: 'Amit T.',
      age: 38,
      location: 'Bangalore',
      rating: 5,
      text: 'I tried everything—pills, exercises, nothing worked long-term. The 5-Pillar approach fixed my root hormone imbalance. Results are permanent.',
      result: 'Performance Restored',
      metric: '4 months to full recovery',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    {
      id: 4,
      name: 'Arjun L.',
      age: 29,
      location: 'Pune',
      rating: 5,
      text: 'Performance anxiety made intimacy impossible. The nerve reset techniques eliminated my anxiety completely. I feel like a new person.',
      result: 'Confidence Restored',
      metric: 'Anxiety eliminated in 6 weeks',
      avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
    },
    {
      id: 5,
      name: 'Karthik S.',
      age: 36,
      location: 'Chennai',
      rating: 5,
      text: 'Weak erections for 3 years. The nutrition protocol boosted my testosterone naturally. My energy, stamina, and performance are better than my 20s.',
      result: 'Stronger Erections',
      metric: 'Natural testosterone boost',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
    },
    {
      id: 6,
      name: 'Sanjay P.',
      age: 45,
      location: 'Hyderabad',
      rating: 5,
      text: 'At 45, I thought ED was permanent. The coaches showed me it was fixable biological issues. Now completely medication-free with better performance.',
      result: 'Complete Recovery',
      metric: 'Medication-free at 45',
      avatar: 'https://randomuser.me/api/portraits/men/37.jpg'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Men Transformed' },
    { number: '89%', label: 'Success Rate' },
    { number: '6 Weeks', label: 'Avg. First Results' },
    { number: '100%', label: 'Confidential' }
  ];

  return (
    <section className="social-proof" id="success-stories">
      <div className="proof-container">
        <div className="proof-header">
          <h2 className="proof-title">Real Men, Real Results</h2>
          <p className="proof-subtitle">Success stories from men who reversed ED & PE naturally</p>
        </div>

        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-age">Age {testimonial.age} • {testimonial.location}</div>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={`${testimonial.id}-star-${i}`}
                      className="star-icon"
                      size={14}
                      strokeWidth={1.8}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-result">{testimonial.result}</div>
                <div className="testimonial-metric">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="proof-cta">
          <p className="proof-cta-text">
            Join thousands of men who've transformed their sexual health naturally
          </p>
          <button 
            className="proof-cta-button"
            onClick={() => window.open('https://example.com/quiz', '_blank')}
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;