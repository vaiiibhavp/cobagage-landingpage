"use client";
import Link from "next/link";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LOGO = "./File_img/CobagageLogo 1.png";

export default function Footer() {
  const t = useTranslations("footer");
  console.log(t("description"));
  const pathname = usePathname();


  // ✅ derive locale from URL (MOST RELIABLE)
  const locale = pathname.split("/")[1] || "en";

  // const L = (path: string) => {
  //   if (path.startsWith("/#")) {
  //     return `/${locale}${path}`;
  //   }
  //   return `/${locale}${path}`;
  // };
  console.log(locale)

  return (
    <footer className="bg-[#0b1417] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + description */}
        <div>
          <a href="#" className="block w-36 mb-4">
            <Image
              src="/File_img/CobagageLogo 1.png"
              alt="Cobagage"
              width={144}
              height={40}
            />
          </a>

          <p className="text-sm text-gray-400">
            {t("description")}
          </p>

          <div className="mt-4 flex items-center gap-3 text-gray-400">
            <a href="#" aria-label="facebook" className="hover:text-white">
              {/* facebook */}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17.09 5.85 21.21 10.66 21.95v-7.55H8.08v-2.93h2.58V9.41c0-2.56 1.52-3.97 3.84-3.97 1.11 0 2.28.2 2.28.2v2.5h-1.28c-1.26 0-1.65.78-1.65 1.58v1.9h2.81l-.45 2.93h-2.36V21.95C18.15 21.21 22 17.09 22 12.07z" />
              </svg>
            </a>
            <a href="#" aria-label="twitter" className="hover:text-white">
              {/* twitter */}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.92c-.63.28-1.3.47-2 .56.72-.43 1.27-1.1 1.53-1.9-.68.4-1.43.7-2.22.86C18.7 4.5 17.6 4 16.4 4c-1.6 0-2.9 1.3-2.9 2.9 0 .23.02.46.07.67C10 7.4 7 5.9 5 3.6c-.25.43-.4.92-.4 1.45 0 1 .5 1.9 1.3 2.4-.5 0-1-.15-1.4-.4v.04c0 1.4 1 2.6 2.4 2.9-.25.07-.5.1-.77.1-.19 0-.38 0-.56-.05.38 1.2 1.5 2.1 2.8 2.1C7.7 17 6 17.5 4.2 17.5c-.25 0-.5 0-.74-.04C5.5 18.6 7.9 19.3 10.5 19.3c6.3 0 9.8-5.2 9.8-9.8v-.44c.68-.5 1.27-1.1 1.74-1.8-.62.28-1.3.47-2 .56z" />
              </svg>
            </a>
            <a href="#" aria-label="instagram" className="hover:text-white">
              {/* instagram */}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-3.3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
            <a href="#" aria-label="linkedin" className="hover:text-white">
              {/* linkedin */}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6V24H.2zM8.8 8h4.4v2.2h.1c.6-1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-4.6v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8.8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {t("quickLinks.title")}
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-white">
                {t("quickLinks.home")}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/#about`} className="hover:text-white">
                {t("quickLinks.about")}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/#how-it-works`} className="hover:text-white">
                {t("quickLinks.how")}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/#faqs`} className="hover:text-white">
                {t("quickLinks.faqs")}
              </Link>
            </li>

            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white">
                {t("quickLinks.contact")}
              </Link>
            </li>
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