import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Does this really work without medication?',
      answer: 'Yes! ED and PE are often symptoms of fixable biological imbalances—hormones, blood flow, stress, and lifestyle factors. Our 5-Pillar approach addresses these root causes naturally. Over 5,000 men have reversed their ED and PE completely without pills, with an 89% success rate. Unlike medication which masks symptoms, our approach creates permanent change.'
    },
    {
      question: 'How long until I see results?',
      answer: 'Most men notice improvements within 6 weeks, with significant progress by 3 months. The complete 4-month program is designed for permanent reversal. Results vary based on individual biology and commitment, but you\'ll have weekly progress reviews with your coaches to ensure you\'re on track.'
    },
    {
      question: 'Is this backed by science?',
      answer: 'Absolutely. Every pillar of our approach is grounded in peer-reviewed research on testosterone optimization, blood flow enhancement, pelvic health, and performance psychology. Our system was developed over 3 years with input from nutritionists, fitness experts, and sexual health specialists. It\'s not a quick fix—it\'s a comprehensive, evidence-based methodology.'
    },
    {
      question: 'What if I\'ve tried everything and nothing worked?',
      answer: 'Most men who come to us have tried pills, exercises, or other methods without lasting success. That\'s because those approaches only address one aspect of the problem. Our 5-Pillar system is different—it simultaneously addresses nutrition, fitness, psychology, lifestyle, and provides daily coaching support. It\'s the most comprehensive natural approach available in India.'
    },
    {
      question: 'Is my information confidential?',
      answer: 'Yes, 100%. All client information is protected under strict Non-Disclosure Agreement (NDA). Your coaches, communication, and progress are completely private. We never share your information with anyone. Privacy and discretion are paramount to us.'
    },
    {
      question: 'What\'s the money-back guarantee?',
      answer: 'We offer a full money-back guarantee if you complete the 4-month program as prescribed and see no improvement. We\'re confident in our system because it works—but if it doesn\'t deliver results for you, you get your investment back. Terms and conditions apply. Contact us for full details.'
    },
    {
      question: 'Do I need to exercise heavily?',
      answer: 'No. Our Cellular Fitness protocol requires just 30 minutes per day and doesn\'t involve heavy gym workouts. It\'s focused on targeted exercises for pelvic health, cardiovascular function, and nerve optimization—not bodybuilding. Even if you\'re not currently active, our program is designed to be sustainable and effective.'
    },
    {
      question: 'Will I need to take supplements or buy products?',
      answer: 'The program is based on whole foods and natural lifestyle changes—no expensive supplements required. Your personalized nutrition protocol focuses on regular foods available in India that optimize your hormones and blood flow. Everything you need is included in the program fee.'
    },
    {
      question: 'How does the coaching support work?',
      answer: 'You\'ll have a team of 4 expert coaches available daily through private messaging and weekly video check-ins. They monitor your progress, answer questions, make adjustments to your protocol, and keep you accountable. You\'re never alone in this journey—your success team is with you every step of the way.'
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
          <p className="faq-subtitle">Everything you need to know about reversing ED & PE naturally</p>
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
          <p className="faq-cta-text">Book a free strategy call with our team to discuss your specific situation</p>
          <button 
            className="contact-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;