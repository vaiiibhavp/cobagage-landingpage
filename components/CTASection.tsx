"use client";
import React from "react";
import OrangeBlob from "./OrangeBlob";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative bg-[#DB5928] text-white py-12 overflow-hidden">

      <OrangeBlob className="absolute z-20 right-[-180px] top-[50px] hidden sm:block" />
      <OrangeBlob
        rad={256}
        className="absolute z-20 left-[-128px] top-[-128px] hidden sm:block"
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="w-full text-center">

          <h3 className="text-2xl font-bold">
            {t("title")}
          </h3>

          <div className="w-2/3 my-4 mx-auto text-center">
            <p className="mt-2 text-white/90">
              {t("subtitle")}
            </p>
          </div>

          <div>
            <a
              className="inline-block bg-white text-[#DB5928] px-6 py-3 rounded-md font-semibold shadow"
              href="#"
            >
              {t("button")}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}