import React from "react";

const LOGO = "./File_img/CobagageLogo 1.png";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Cobagage home" className="block w-28">
            <img src={LOGO} alt="Cobagage" className="w-full h-auto" />
          </a>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-gray-700 font-medium"
        >
          <a href="#" className="hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="hover:text-gray-900">
            About Us
          </a>
          <a href="#how-it-works" className="hover:text-gray-900">
            How It Works
          </a>
          <a href="#faqs" className="hover:text-gray-900">
            FAQs
          </a>
        </nav>

        <div className="ml-4">
          <a
            href="#contact"
            className="inline-block bg-[#DB5928] text-white px-4 py-2 rounded-md shadow-md hover:opacity-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
