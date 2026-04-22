"use client";

import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const LOGO = "/File_img/source/CobagageLogo.png";

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();

  // ✅ derive locale from URL (MOST RELIABLE)
  const locale = pathname.split("/")[1] || "en";

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(/^\/(en|fr)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${locale}`} className="block w-28">
          {/* <img src={LOGO} alt="Cobagage" className="w-full h-auto" /> */}
          <Image
            src={LOGO}
            alt="Cobagage"
            width={120}
            height={40}
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href={`/${locale}/#`}>{t("home")}</Link>
          <Link href={`/${locale}/#about`}>{t("about")}</Link>
          <Link href={`/${locale}/#how-it-works`}>{t("howItWorks")}</Link>
          <Link href={`/${locale}/#faqs`}>{t("faqs")}</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Language Toggle */}
          <div className="flex items-center gap-2 border rounded-md px-2 py-1">

            <button
              onClick={() => switchLanguage("en")}
              className={`px-2 py-1 text-sm rounded transition ${locale === "en" ? "bg-gray-200 font-semibold" : ""
                }`}
            >
              🇬🇧 EN
            </button>

            <button
              onClick={() => switchLanguage("fr")}
              className={`px-2 py-1 text-sm rounded transition ${locale === "fr" ? "bg-gray-200 font-semibold" : ""
                }`}
            >
              🇫🇷 FR
            </button>

          </div>

          {/* Contact */}
          <Link
            href={`/${locale}/contact`}
            className="bg-[#DB5928] text-white px-4 py-2 rounded-md shadow-md hover:opacity-95"
          >
            {t("contact")}
          </Link>

        </div>

      </div>
    </header>
  );
}