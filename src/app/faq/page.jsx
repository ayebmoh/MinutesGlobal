"use client";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer in IT consulting?",
      answer:
        "Our startup specializes in providing tailored software solutions, IT consulting, and system integrations. We help businesses adopt cutting-edge technologies to achieve their goals efficiently.",
    },
    {
      question: "Can your solutions scale with my business?",
      answer:
        "Absolutely! Our solutions are designed to grow with your business, ensuring flexibility and scalability at every stage of your journey.",
    },
    {
      question: "How does your pricing model work?",
      answer:
        "We offer flexible pricing based on the complexity and scale of the project. Whether you're a startup or an established business, we provide a plan tailored to your needs.",
    },
    {
      question: "Can you help with social media management?",
      answer:
        "Yes, we provide social media consulting and management services. We develop strategies to enhance your online presence, engage your audience, and grow your brand on platforms like Facebook, Instagram, and LinkedIn.",
    },

    {
      question: "Who are your services designed for?",
      answer:
        "Our services are designed for [target audience, e.g., small businesses, enterprises, individuals looking to establish their online presence]. Whether you're just starting or looking to scale, we can help.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is simple! You can [mention steps like contacting you, scheduling a consultation, or signing up for an account]. We'll guide you through the process and ensure all your questions are answered.",
    },
    {
      question: " Is there a minimum contract period?",
      answer:
        "It depends on the service. While some of our offerings are subscription-based, others are project-specific. We can discuss flexible terms based on your needs.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b py-24 from-sky-400 to-sky-200 ">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold  lg:text-3xl text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {faqData.map((item, index) => (
              <div key={index} className="p-8  rounded-lg bg-white">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleAnswer(index)}
                >
                  <h1 className="font-semibold  text-black">{item.question}</h1>
                  <span className="text-white bg-sky-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transition-transform duration-200 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </button>
                {activeIndex === index && (
                  <p className="mt-6 text-sm  text-gray-400">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
