import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most men start noticing improvements within 2-4 weeks of consistent use. However, optimal results typically appear after 8-12 weeks as the natural ingredients build up in your system and work synergistically.'
    },
    {
      question: 'Are your products safe?',
      answer: 'Yes, all our products use natural, clinically-tested ingredients. They are manufactured in GMP-certified facilities and third-party lab tested for purity and potency. However, we recommend consulting with your healthcare provider if you have any pre-existing conditions or take medications.'
    },
    {
      question: 'How does the personalized plan work?',
      answer: 'After completing our comprehensive wellness assessment, our algorithm analyzes your responses and creates a customized formula based on your specific needs, health goals, and lifestyle factors. Your plan can be adjusted as your needs change.'
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 60-day money-back guarantee. If you\'re not completely satisfied with your results, simply contact our support team for a full refund. No questions asked.'
    },
    {
      question: 'Is delivery really discreet?',
      answer: 'Absolutely. All packages are shipped in unmarked boxes with no indication of contents. Billing appears as "Wellness Subscription" on statements. Your privacy is our top priority.'
    },
    {
      question: 'Can I cancel or pause my subscription?',
      answer: 'Yes, you have complete control. You can pause, skip, or cancel your subscription at any time from your account dashboard. No hidden fees or cancellation charges.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship to the United States, Canada, UK, and Australia. We\'re working on expanding to more countries soon.'
    },
    {
      question: 'Will this interact with my medications?',
      answer: 'While our products use natural ingredients, some may interact with certain medications. We strongly recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you take prescription medications.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about Banana Health</p>
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
          <h3 className="faq-cta-title">Still have questions?</h3>
          <p className="faq-cta-text">Our wellness experts are here to help</p>
          <button className="contact-btn">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;