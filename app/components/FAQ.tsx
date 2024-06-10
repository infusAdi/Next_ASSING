"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What is Toingg’s pricing?", answer: "Toingg offers flexible pricing plans tailored to your needs. Contact our sales team for a quote." },
        { question: "How to use Material Tailwind?", answer: "Material Tailwind is easy to use. Just install the package and start using the pre-built components." },
        { question: "What can I do with Material Tailwind?", answer: "With Material Tailwind, you can quickly build beautiful, responsive websites with minimal effort." },
        { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial for you to explore our services and features." },
        { question: "How do I get support?", answer: "You can get support by contacting our support team via email or live chat." },
        { question: "Can I customize the components?", answer: "Absolutely! Material Tailwind is fully customizable to fit your project's needs." },
        { question: "What is the refund policy?", answer: "We offer a 30-day money-back guarantee if you're not satisfied with our product." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-12">Frequently asked questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex text-lg justify-between items-center text-left text-gray-500 font-medium"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-gray-500" />
              ) : (
                <FaPlus className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
