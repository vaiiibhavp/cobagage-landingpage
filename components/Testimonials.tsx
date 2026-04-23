"use client";
import React from "react";
import StarRating from "@/components/StarRating";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const reviews = t.raw("items");

  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          {t("title")}
        </h2>

        <p className="m-auto max-w-2xl mx-auto text-center text-gray-600 mt-3">
          {t("subtitle")}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r: any, i: number) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">

              <div className="mt-1 mb-4">
                <StarRating rating={r.rating} size={16} />
              </div>

              <p className="text-[#4B5563]">“{r.text}”</p>

              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div>
                  <div className="font-semibold text-sm text-[#020817]">
                    {r.name}
                  </div>
                  <div className="text-xs text-[#6B7280]">{r.desc}</div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}