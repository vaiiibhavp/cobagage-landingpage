"use client";

import React from "react";
import { useTranslations } from "next-intl";
import ForTravelersCard from "./ForTravelersCard";
import ForShoppersCard from "./ForShoppersCard";

const steps = [
  { key: "step1", bg: "bg-[#DBEAFE]", svg: "./File_icon/SVG-11.svg" },
  { key: "step2", bg: "bg-[#DCFCE7]", svg: "./File_icon/SVG-10.svg" },
  { key: "step3", bg: "bg-[#FEF9C3]", svg: "./File_icon/SVG-9.svg" },
  { key: "step4", bg: "bg-[#F3E8FF]", svg: "./File_icon/SVG-8.svg" },
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {t("title")}
        </h2>

        {/* Subtitle */}
        <p className="m-auto sm:w-1/2 max-w-2xl mx-auto text-center text-gray-600 mt-3">
          {t("subtitle")}
        </p>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.key}
              className="text-center bg-white p-6 rounded-lg shadow"
            >
              <div
                className={`m-auto h-[64] w-[64] rounded-full ${s.bg} text-[#DB5928] flex items-center justify-center font-semibold`}
              >
                <img src={s.svg} alt="" className="w-[32] h-[32]" />
              </div>

              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {t(`steps.${s.key}.title`)}
              </h3>

              <p className="mt-2 text-gray-600">
                {t(`steps.${s.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Cards (unchanged UI) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ForTravelersCard />
          <ForShoppersCard />
        </div>

      </div>
    </section>
  );
}