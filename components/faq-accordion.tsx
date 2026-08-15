"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div className="border-b border-zinc-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors pr-6">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-blue-600 border-blue-600" : "bg-zinc-50 group-hover:border-blue-300"}`}>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-zinc-500 group-hover:text-blue-600"}`} 
          />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I sell my generator to RJ Generators?",
      answer: "Simply contact us with your generator's make, model, kVA rating, and a few photos. We respond with a fair market valuation within hours. If you accept, we arrange free collection and pay you on the spot."
    },
    {
      question: "What generators do you buy?",
      answer: "We buy all makes and models — diesel, natural gas, portable, mobile, industrial, and marine — from small 5kVA units up to 3000kVA. New, used, and even non-running generators can be considered."
    },
    {
      question: "How much will I get for my generator?",
      answer: "Valuations are based on the unit's make, model, age, condition, running hours, and current market demand. We provide a transparent, no-obligation quote — what we offer is what you get paid, with no hidden fees."
    },
    {
      question: "Do the generators you sell come with a warranty?",
      answer: "Yes. Every generator we sell is inspected, load-tested, and certified before it leaves our yard, and all units are backed by our written warranty. Warranty terms depend on the unit's condition and specification."
    },
    {
      question: "Can I trade in my old generator toward a new one?",
      answer: "Absolutely. When you buy a unit from us, we deduct the fair market value of your old generator from the purchase price. One exchange handles both the sale of your old unit and the purchase of your new one."
    },
    {
      question: "Do you arrange delivery and installation?",
      answer: "Yes. We offer nationwide delivery with optional installation, testing, and commissioning. All logistics are handled by our team so your new generator is up and running with minimal disruption."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto w-full">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
