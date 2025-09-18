'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('functional');

  const functionalFAQs = [
    {
      question: "Where can I get software help?",
      answer: "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    },
    {
      question: "How much does data software costs?",
      answer: "Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    },
    {
      question: "What kind of data is needed for software?",
      answer: "Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    },
    {
      question: "What does the guarantee cover?",
      answer: "Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    },
    {
      question: "How might I get in touch with you?",
      answer: "Cennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    },
    {
      question: "Where can I find you?",
      answer: "Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week."
    }
  ];

  const supportFAQs = [
    {
      question: "How do I get started with your platform?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. We provide step-by-step tutorials to help you get up and running quickly."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 customer support through email, chat, and phone. Our support team is highly trained and ready to help you with any questions or issues you might have."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial for all new users. No credit card required to start your trial, and you can cancel anytime during the trial period."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security very seriously. All data is encrypted in transit and at rest, and we follow industry best practices for data protection and privacy."
    },
    {
      question: "Do you offer custom integrations?",
      answer: "Yes, we offer custom integrations for enterprise customers. Contact our sales team to discuss your specific integration needs and requirements."
    }
  ];

  const currentFAQs = activeTab === 'functional' ? functionalFAQs : supportFAQs;

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Want to ask something from us?
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('functional')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'functional'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Functional FAQ
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'support'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Support FAQ
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
