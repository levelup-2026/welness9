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
      question: 'Who is the CEO of Banana Health?',
      answer: 'The CEO of Banana Health is Yash Vardhan Swami who is also one of the founders of the brand. Featured in Forbes, global health platforms, and award-winning wellness programs, Yash Vardhan Swami is also among the best health coaches in India.'
    },
    {
      question: 'Is Banana Health credible?',
      answer: 'Banana Health is a highly credible and reputable platform for treating male sexual health issues. It offers well-structured programs from healthcare experts and has a strong track record supported by a large community of satisfied clients.'
    },
    {
      question: 'What is the 5-Pillar Integrative Approach?',
      answer: 'Our 5-Pillar Integrative Approach precisely reveals the exact biological root causes of Erectile Dysfunction, Premature Ejaculation, or other sexual issues in men. This foundation of profound self-understanding immediately equips you with a simple, effective strategy to reclaim and maintain your peak sexual health permanently.'
    },
    {
      question: 'How much time does each session take?',
      answer: 'Our structured sessions require only 30 minutes of your day over a period of four months. We meticulously track your daily improvements, providing necessary corrections and guidance whenever needed.'
    },
    {
      question: 'Does Banana Health maintain secrecy of their clients?',
      answer: 'At Banana Health, we prioritize your privacy above all else. We secure every client\'s personal health information with a comprehensive Non-Disclosure Agreement (NDA). This strict commitment to confidentiality ensures you can focus entirely on your health journey with absolute confidence and peace of mind.'
    },
    {
      question: 'How long does it typically take to see improvements?',
      answer: 'Recognizing that one size does not fit all, we implement customized methods tailored specifically to your needs. These personalized approaches are clinically proven to achieve demonstrable improvements in sexual health within a six-week timeframe.'
    },
    {
      question: 'What happens if the client doesn\'t see any results?',
      answer: 'If clients don\'t experience any betterment in their sexual health, they are eligible for a full refund. We stand by our Money-Back Guarantee policy, which becomes applicable after the course is completed and no results are achieved. Terms and conditions apply.'
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
                  Get answers to your most pressing questions about Banana Health and our proven approach to men's sexual wellness.
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
