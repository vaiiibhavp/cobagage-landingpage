"use client";
import React, { useState, useId } from "react";

const CHEVRON = "./File_icon/SVG-3.svg";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-gray-200">
      <button
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-base font-medium text-gray-900">{question}</span>
        <img
          src={CHEVRON}
          alt="toggle"
          className={`w-4 h-4 transform transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={`faq-${id}`}
        className={`${open ? "block" : "hidden"} pb-4 text-gray-600`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
