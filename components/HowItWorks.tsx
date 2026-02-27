import React from "react";
import ForTravelersCard from "./ForTravelersCard";
import ForShoppersCard from "./ForShoppersCard";

const steps = [
  {
    title: "Sign Up",
    desc: "Create an account as a Traveler or a Shopper",
    bg: "bg-[#DBEAFE]",
    svg: "./File_icon/SVG-11.svg",
  },
  {
    title: "Connect & Request",
    desc: "Shoppers request items, Travelers accept requests that align with their travel plans",
    bg: "bg-[#DCFCE7]",
    svg: "./File_icon/SVG-10.svg",
  },
  {
    title: "Secure Payment",
    desc: "Safe transactions with payment held until delivery confirmation",
    bg: "bg-[#FEF9C3]",
    svg: "./File_icon/SVG-9.svg",
  },
  {
    title: "Delivery & Review",
    desc: "Traveler delivers the item and both parties leave reviews",
    bg: "bg-[#F3E8FF]",
    svg: "./File_icon/SVG-8.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          How It Works
        </h2>
        <p className="sm:w-1/2 max-w-2xl mx-auto text-center text-gray-600 mt-3">
          Our platform makes global shopping and earning while traveling simple
          and secure
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="text-center bg-white p-6 rounded-lg shadow"
            >
              <div
                className={`m-auto h-[64] w-[64] rounded-full ${s.bg} text-[#DB5928] flex items-center justify-center font-semibold`}
              >
                <img src={s.svg} alt={s.title} className="w-[32] h-[32]" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ForTravelersCard />
          <ForShoppersCard />
        </div>
      </div>
    </section>
  );
}
