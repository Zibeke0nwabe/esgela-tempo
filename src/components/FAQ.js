import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Esgela?",
    answer: "Esgela is an online coding bootcamp offering free courses. It was founded by Onwabe Zibeke, a software developer who graduated from Durban University of Technology (DUT) in 2022. Esgela aims to provide accessible education to the rural community of Port St. Johns and beyond."
  },
  {
    question: "Are there any hidden charges or fees associated with the courses?",
    answer: "No, all courses offered by Esgela are completely free. We believe in providing accessible education to everyone."
  },
  {
    question: "How many free courses can I enroll in at the same time?",
    answer: "You can enroll in as many courses as you like. There is no limit to the number of courses you can take simultaneously."
  },
  {
    question: "Can these free courses help me get a job?",
    answer: "Yes, our courses are designed to provide practical skills that can help you secure a job in the tech industry. We focus on hands-on learning and real-world projects."
  },
  {
    question: "How will I get the course completion certificate?",
    answer: "Upon successfully completing a course, you will receive a certificate of completion that you can download from our platform."
  },
  {
    question: "Is there any time duration for completing these courses?",
    answer: "No, you can complete the courses at your own pace. There are no deadlines or time constraints."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-8"> {/* Increased max width */}
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="p-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;