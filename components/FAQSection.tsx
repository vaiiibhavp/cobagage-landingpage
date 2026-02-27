import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    q: "How do I get started as a traveler?",
    a: "Sign up and complete your profile to start receiving requests.",
  },

  {
    q: "How is payment handled?",
    a: "Payments are held until delivery confirmation to protect both parties.",
  },
  {
    q: "What if the item I receive is damaged?",
    a: "You can open a dispute; our support team will review the case.",
  },
  {
    q: "Can I request any item from anywhere in the world?",
    a: "Sign up and complete your profile to start receiving requests.",
  },
  {
    q: "How do I communicate with the traveler/shopper?",
    a: "Sign up and complete your profile to start receiving requests.",
  },
  {
    q: "Are there any fees to use the platform?",
    a: "Sign up and complete your profile to start receiving requests.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Find answers to commonly asked questions about our platform
        </p>
        <div className="mt-6 sm:w-2/3 m-auto">
          {faqs.map((f, i) => (
            <FAQItem key={f.q + i} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
