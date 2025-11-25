import React from "react";
import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
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

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Frequently Asked Questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Everything you need to know about reversing ED & PE naturally. Our 5-Pillar approach 
                  addresses root causes for permanent results without medication.
                </p>
              </div>
              <div className="">
                <Button 
                  className="gap-4" 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Free Strategy Call <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
