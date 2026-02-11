'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of dog training services do you offer?',
      answer:
        'We offer obedience training, behavioral correction, advanced skill development, puppy training, and personalized training plans tailored to each dog\'s needs.',
    },
    {
      question: 'Where is A9 Dog Training Academy located?',
      answer:
        'Our headquarters are in Mwabungo, Diani South Coast, Kenya. We also provide services across the country, including Nairobi, Mombasa, and Kisumu.',
    },
    {
      question: 'How long does a typical training program take?',
      answer:
        'Training duration depends on the dog and program, but most obedience courses last between 4-8 weeks. Behavioral or advanced training may take longer.',
    },
    {
      question: 'Do you offer home visits or on-site training?',
      answer:
        'Yes! We offer flexible options including on-site training at our facility in Diani and home visits nationwide, depending on the package selected.',
    },
    {
      question: 'Are your training methods safe and positive?',
      answer:
        'Absolutely. We use reward-based, humane, and positive reinforcement techniques to ensure your dog learns effectively without stress or fear.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-32 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Most Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
          >
            <button
              className="w-full flex justify-between items-center text-left text-gray-800 font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-yellow-400" />
              ) : (
                <FaChevronDown className="text-yellow-400" />
              )}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
