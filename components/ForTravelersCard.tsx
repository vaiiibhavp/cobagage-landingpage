import { useTranslations } from "next-intl";
import React from "react";

const items = [
  "Earn money by fulfilling shopping requests during your travels",
  "Sell items you no longer need during your trip",
  "Donate goods and make a positive impact",
  "Connect with locals and enhance your travel experience",
];

export default function ForTravelersCard() {
  const t = useTranslations("forTravelers");

  const items = t.raw("items");
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-[#DB5928]">  {t("title")}</h4>
      <ul className="mt-6 space-y-4">
        {items.map((t: any) => (
          <li key={t} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1 p-2 rounded-full bg-[#DB5928] text-white flex items-center justify-center">
              ✓
            </div>
            <p className="text-gray-800">{t}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
