import React from "react";

const items = [
  "Request unique items from anywhere in the world",
  "Save on international shipping and customs fees",
  "Send tips to travelers who fulfill your requests",
  "Track your order in real-time",
];

export default function ForShoppersCard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h4 className="text-2xl font-bold text-[#DB5928]">For Shoppers</h4>
      <ul className="mt-6 space-y-4">
        {items.map((t) => (
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
