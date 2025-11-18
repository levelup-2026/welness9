import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael R.',
      age: 34,
      rating: 5,
      text: 'After just 3 months, I noticed significant improvements. My confidence is back and my relationship has never been better.',
      result: 'Improved Performance',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      id: 2,
      name: 'David K.',
      age: 42,
      rating: 5,
      text: 'I was skeptical at first, but the natural approach really works. No side effects, just real results.',
      result: 'Natural Solution',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      id: 3,
      name: 'James T.',
      age: 38,
      rating: 5,
      text: 'The personalized plan made all the difference. Finally found something that works for my specific needs.',
      result: 'Personalized Care',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      id: 4,
      name: 'Robert L.',
      age: 45,
      rating: 5,
      text: 'Discreet delivery and effective results. Banana Health has changed my life for the better.',
      result: 'Life Changing',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
      id: 5,
      name: 'Chris M.',
      age: 36,
      rating: 5,
      text: 'Easy to incorporate into my daily routine. The daily packs make it foolproof.',
      result: 'Easy to Use',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 6,
      name: 'Daniel S.',
      age: 40,
      rating: 5,
      text: 'Great customer support and quality products. Highly recommend to anyone struggling.',
      result: 'Highly Recommend',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Active Members' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '92%', label: 'Success Rate' },
    { number: '60 Days', label: 'Money Back' }
  ];

  return (
    <section className="social-proof">
      <div className="proof-container">
        <div className="proof-header">
          <h2 className="proof-title">Trusted by Thousands</h2>
          <p className="proof-subtitle">Real men, real results</p>
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
                  <div className="testimonial-age">Age {testimonial.age}</div>
                </div>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-result">{testimonial.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;