"use client";
import React from "react";
import { useTranslations } from "next-intl";

const features = [
  { key: "earn", svg: "./File_icon/SVG-7.svg" },
  { key: "save", svg: "./File_icon/SVG-12.svg" },
  { key: "connect", svg: "./File_icon/SVG-13.svg" },
  { key: "share", svg: "./File_icon/SVG-14.svg" },
];

export default function WhyChoose() {
  const t = useTranslations("whyChoose");

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          {t("title")}
        </h2>

        <p className="m-auto max-w-2xl mx-auto text-center text-gray-600 mt-3">
          {t("subtitle")}
        </p>

        {/* Features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.key}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm text-center"
            >
              <div className="mx-auto h-[64] w-[64] rounded-full bg-orange-50 text-[#DB5928] flex items-center justify-center font-bold">
                <img src={f.svg} alt={f.key} className="w-[32] h-[32]" />
              </div>

              <h3 className="mt-4 font-semibold text-[20px] text-[#020817]">
                {t(`features.${f.key}.title`)}
              </h3>

              <p className="mt-2 text-gray-600 text-[16px]">
                {t(`features.${f.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">100+</div>
            <div className="text-gray-600">{t("stats.countries")}</div>
          </div>

          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">10k+</div>
            <div className="text-gray-600">{t("stats.travelers")}</div>
          </div>

          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">50k+</div>
            <div className="text-gray-600">{t("stats.shoppers")}</div>
          </div>

          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">99%</div>
            <div className="text-gray-600">{t("stats.satisfaction")}</div>
          </div>
        </div>

      </div>
    </section>
  );
}