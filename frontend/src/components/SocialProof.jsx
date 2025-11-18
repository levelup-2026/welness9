import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael R.',
      age: 34,
      rating: 5,
      text: 'Therapy helped me understand that my struggles were rooted in anxiety, not physical issues. I feel like myself again.',
      result: 'Overcame Anxiety',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
      id: 2,
      name: 'David K.',
      age: 42,
      rating: 5,
      text: 'The emotional approach made all the difference. My therapist helped me rebuild confidence I thought I\'d lost forever.',
      result: 'Confidence Restored',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      id: 3,
      name: 'James T.',
      age: 38,
      rating: 5,
      text: 'Learning to communicate openly with my partner transformed our relationship. We\'re closer than ever.',
      result: 'Relationship Healed',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      id: 4,
      name: 'Robert L.',
      age: 45,
      rating: 5,
      text: 'I was skeptical about therapy, but the mindfulness techniques genuinely changed how I approach intimacy.',
      result: 'Mind-Body Connection',
      avatar: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
    {
      id: 5,
      name: 'Chris M.',
      age: 36,
      rating: 5,
      text: 'The support group showed me I wasn\'t alone. Sharing my journey with others was incredibly healing.',
      result: 'Community Support',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg'
    },
    {
      id: 6,
      name: 'Daniel S.',
      age: 40,
      rating: 5,
      text: 'My therapist helped me see the connection between stress and performance. Addressing the root cause changed everything.',
      result: 'Root Cause Healing',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ];

  const stats = [
    { number: '8,500+', label: 'Men Helped' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '89%', label: 'Success Rate' },
    { number: '100%', label: 'Confidential' }
  ];

  return (
    <section className="social-proof">
      <div className="proof-container">
        <div className="proof-header">
          <h2 className="proof-title">Real Stories, Real Healing</h2>
          <p className="proof-subtitle">Men who chose emotional recovery over quick fixes</p>
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