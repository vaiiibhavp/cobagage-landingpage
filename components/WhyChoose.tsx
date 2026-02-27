import React from "react";

const features = [
  {
    title: "Earn",
    desc: "Make money during your travels by fulfilling shopping requests from around the world.",
    svg: "./File_icon/SVG-7.svg",
  },
  {
    title: "Save",
    desc: "Get items directly from their source, bypassing inflated international shipping costs.",
    svg: "./File_icon/SVG-12.svg",
  },
  {
    title: "Connect",
    desc: "Build a global network of travelers and shoppers with shared interests.",
    svg: "./File_icon/SVG-13.svg",
  },
  {
    title: "Share",
    desc: "Experience cultural exchange through the global marketplace of goods and stories.",
    svg: "./File_icon/SVG-14.svg",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Why Choose Cobagage
        </h2>
        <p className="m-auto max-w-2xl mx-auto text-center text-gray-600 mt-3">
          Our platform offers unique benefits for both travelers and shoppers
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm text-center"
            >
              <div className="mx-auto h-[64] w-[64] rounded-full bg-orange-50 text-[#DB5928] flex items-center justify-center font-bold">
                {/* ★ */}
                <img src={f.svg} alt={f.title} className="w-[32] h-[32]" />
              </div>
              <h3 className="mt-4 font-semibold text-[20px] text-[#020817]">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-[16px]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">100+</div>
            <div className="text-gray-600">Countries Covered</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">10k+</div>
            <div className="text-gray-600">Active Travelers</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">50k+</div>
            <div className="text-gray-600">Happy Shoppers</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#DB5928]">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
