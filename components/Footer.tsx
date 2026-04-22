"use client";
import Link from "next/link";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const LOGO = "./File_img/CobagageLogo 1.png";

export default function Footer() {
  const t = useTranslations("footer");
  console.log(t("description"));
  const locale = useLocale();
  console.log("ACTIVE LOCALE:", locale);

  return (
    <footer className="bg-[#0b1417] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + description */}
        <div>
          <a href="#" className="block w-36 mb-4">
            <img src={LOGO} alt="Cobagage" className="w-full h-auto" />
          </a>

          <p className="text-sm text-gray-400">
            {t("description")}
          </p>

          <div className="mt-4 flex items-center gap-3 text-gray-400">
            {/* icons unchanged */}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("quickLinks.title")}
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">{t("quickLinks.home")}</a></li>
            <li><a href="#about" className="hover:text-white">{t("quickLinks.about")}</a></li>
            <li><a href="#how-it-works" className="hover:text-white">{t("quickLinks.how")}</a></li>
            <li><a href="#faqs" className="hover:text-white">{t("quickLinks.faqs")}</a></li>
            <li><a href="#contact" className="hover:text-white">{t("quickLinks.contact")}</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("legal.title")}
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/terms&conditions" className="hover:text-white">
                {t("legal.terms")}
              </Link>
            </li>
            <li>
              <Link href="/privacyPolicy" className="hover:text-white">
                {t("legal.privacy")}
              </Link>
            </li>
            <li><a href="#" className="hover:text-white">{t("legal.cookie")}</a></li>
            <li><a href="#" className="hover:text-white">{t("legal.shipping")}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("contact.title")}
          </h4>

          <address className="not-italic text-sm text-gray-400">
            {t("contact.address")}
          </address>

          <div className="mt-4 text-sm text-gray-400">
            hello@Cobagage.com
            <br />
            +1 (234) 567-890
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <div>{t("bottom.copy")}</div>

          <div className="mt-3 md:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white">{t("bottom.terms")}</a>
            <a href="#" className="hover:text-white">{t("bottom.privacy")}</a>
            <a href="#" className="hover:text-white">{t("bottom.cookies")}</a>
          </div>

        </div>
      </div>
    </footer>
  );
}