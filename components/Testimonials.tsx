import React from "react";
import StarRating from "@/components/StarRating";

const reviews = [
  {
    name: "Alex Johnson",
    text: "I\'ve been able to fund my travels across Asia by fulfilling shopping requests. Not only do earn extra cash, but I also meet interesting people along the way.",
    desc: "Traveler • New York, USA",
    avatar: "./File_img/Alex Johnson.png",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Cobagage helped me get authentic French skincare products at a fraction of the import cost. The traveler even shared tips on how to use them!",
    desc: "Shopper • Mumbai, India",
    avatar: "./File_img/Priya Sharma.png",
    rating: 5,
  },
  {
    name: "Carlos Mendez",
    text: "As a frequent business traveler, I've turned my trips into opportunities to earn extra income while helping others access products from Spain.",
    desc: "Traveler • Madrid, Spain",
    avatar: "./File_img/Carlos Mendez.png",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          What Our Community Says
        </h2>
        <p className="m-auto max-w-2xl mx-auto text-center text-gray-600 mt-3">
          Join thousands of satisfied travelers and shoppers from around the
          globe
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-6 rounded-lg shadow">
              <div className="mt-1 mb-4">
                <StarRating rating={r.rating} size={16} />
              </div>
              <p className="text-[#4B5563]">“{r.text}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#020817]">
                    {r.name}
                  </div>
                  <div className="text-xs text-[#6B7280]">{r.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
