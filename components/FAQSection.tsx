"use client";
import React from "react";
import FAQItem from "./FAQItem";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("faq");

  const faqs = t.raw("items");

  return (
    <section id="faqs" className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-900 text-center">
          {t("title")}
        </h2>

        <p className="text-center text-gray-600 mt-2">
          {t("subtitle")}
        </p>

        <div className="mt-6 sm:w-2/3 m-auto">
          {faqs.map((f: { q: string; a: string }, i: number) => (
            <FAQItem
              key={i}
              question={f.q}
              answer={f.a}
            />
          ))}
        </div>

      </div>
    </section>
  );
}