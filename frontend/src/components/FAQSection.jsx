import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does therapy help with ED and PE?',
      answer: 'Most cases of ED and PE have psychological roots - performance anxiety, stress, relationship issues, or past trauma. Therapy addresses these underlying emotional causes, helping you develop healthier thought patterns, reduce anxiety, and rebuild confidence naturally. Many men see significant improvement within 8-12 weeks.'
    },
    {
      question: 'Are your therapists qualified?',
      answer: 'Yes, all our therapists are licensed mental health professionals (LMFT, LCSW, or psychologists) with specialized training in sex therapy and men\'s wellness. They undergo rigorous background checks and continuing education to provide the highest quality care.'
    },
    {
      question: 'How long does treatment typically take?',
      answer: 'Every journey is unique. Many clients notice improvements within 4-8 weeks, with significant progress by 12-16 weeks. We create personalized treatment plans that adapt to your progress, ensuring you get the support you need for lasting change.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Absolutely. We adhere to strict HIPAA guidelines and all sessions are completely confidential. Your privacy is our top priority - billing appears discreetly on statements, and we never share your information without explicit consent.'
    },
    {
      question: 'What if I\'m not comfortable talking about this?',
      answer: 'That\'s completely normal and expected. Our therapists specialize in creating safe, judgment-free spaces. They\'re trained to help you open up at your own pace. Many clients feel nervous at first but find relief in finally being able to discuss these concerns openly.'
    },
    {
      question: 'Do you offer couples counseling?',
      answer: 'Yes! We offer both individual and couples therapy. Many sexual wellness issues benefit from involving partners, and our therapists are skilled at facilitating healthy communication and rebuilding intimacy in relationships.'
    },
    {
      question: 'How do online sessions work?',
      answer: 'Sessions are conducted via secure video conferencing from anywhere you feel comfortable. You\'ll receive a private link before your appointment. It\'s just like an in-person session but with the added comfort and privacy of your own space.'
    },
    {
      question: 'What if therapy doesn\'t work for me?',
      answer: 'While our success rate is high, we understand therapy isn\'t one-size-fits-all. If you\'re not seeing progress, we\'ll work with you to adjust your treatment plan or connect you with additional resources. Your healing is what matters most.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Your Questions Answered</h2>
          <p className="faq-subtitle">Everything you need to know about emotional recovery</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta-title">Ready to start your journey?</h3>
          <p className="faq-cta-text">Book a free consultation with our wellness specialists</p>
          <button className="contact-btn">Schedule Free Call</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;