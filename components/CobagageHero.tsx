"use client";

import React from "react";
import { useTranslations } from "next-intl";

const IMG_MAIN = "./File_img/hero1.png";
const IMG_BADGE_IOS = "./File_img/pngwing.com (39).png";
const IMG_BADGE_ANDROID = "./File_img/pngwing.com (38).png";
const IMG_VECTOR = "./File_icon/hugeicons_ai-magic.svg";

export default function CobagageHero() {
  const t = useTranslations("hero"); // ✅ important

  return (
    <section id="/" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="relative ">
                {t("title1")}
                <img
                  src="./File_icon/Vector 1.svg"
                  className="absolute right-[-25px] top-[-50px]"
                />
                <img
                  src="./File_icon/Vector 2.svg"
                  className="absolute right-[-45px] top-[-5px]"
                />
                <img
                  src="./File_icon/Vector 3.svg"
                  className="absolute right-[5px] top-[-25px]"
                />
              </span>
              <br />
              <span className="text-[#DB5928]">{t("title2")}</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl text-lg">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#DB5928] px-6 py-3 text-white font-medium shadow-sm hover:opacity-95"
              >
                {t("getStarted")}
              </a>

              <a
                href="#features"
                className="text-[#374151] font-medium hover:underline"
              >
                {t("learnMore")}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <img src={IMG_BADGE_IOS} alt="App Store" className="h-12 w-auto object-contain" />
              <img src={IMG_BADGE_ANDROID} alt="Google Play" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Right (UNCHANGED UI) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[320px] sm:w-[420px] md:w-[520px]">
              <img
                src={IMG_VECTOR}
                alt="decor"
                className="absolute z-10 left-1/3 top-0 w-[42] sm:w-[82px] opacity-100"
              />

              <img
                src={IMG_MAIN}
                alt="Cobagage mascot"
                className="w-full h-auto rounded-2xl relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}