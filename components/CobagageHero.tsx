import React from "react";

const IMG_MAIN = "./File_img/hero1.png"; // hero mascot / image (frame 8660:4784)
const IMG_BADGE_IOS = "./File_img/pngwing.com (39).png"; // pngwing 39
const IMG_BADGE_ANDROID = "./File_img/pngwing.com (38).png"; // pngwing 38
const IMG_VECTOR = "./File_icon/hugeicons_ai-magic.svg";

export default function CobagageHero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: copy */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              <span className="relative ">
                Shop the World
                <img
                  src="./File_icon/Vector 1.svg"
                  className="absolute right-[-25px] top-[-50px]"
                />
                <img
                  src="./File_icon/Vector 2.svg"
                  className="absolute  right-[-45px] top-[-5px]"
                />
                <img
                  src="./File_icon/Vector 3.svg"
                  className="absolute  right-[5px] top-[-25px]"
                />
              </span>
              <br />
              <span className="text-[#DB5928]">Through Travelers</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl text-lg">
              Connect with travelers worldwide to get unique items from around
              the globe, or earn during your travels by fulfilling shopping
              requests.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-[#DB5928] px-6 py-3 text-white font-medium shadow-sm hover:opacity-95"
              >
                Get Started
              </a>

              <a
                href="#features"
                className="text-[#374151] font-medium hover:underline"
              >
                Learn more
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <img
                src={IMG_BADGE_IOS}
                alt="App Store"
                className="h-12 w-auto object-contain"
              />
              <img
                src={IMG_BADGE_ANDROID}
                alt="Google Play"
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Right: image + floating cards */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[320px] sm:w-[420px] md:w-[520px]">
              {/* decorative orange blob + vector behind the mascot */}
              {/* <OrangeBlob className="absolute -z-20 right-[-80px] top-[-40px] hidden sm:block" /> */}
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

              {/* Floating travelers joined card */}
              {/* <div className="absolute -left-[132] top-[424] bg-white rounded-xl shadow-lg p-3 w-56 gap-3">
                <div className="text-sm text-gray-700">Travelers Joined</div>
                <div className=" flex items-center ">
                  <div className="flex -space-x-3">
                    <img
                      src={IMG_AVATAR_1}
                      alt="avatar1"
                      className="w-9 h-9 rounded-full ring-2 ring-white"
                    />
                    <img
                      src={IMG_AVATAR_2}
                      alt="avatar2"
                      className="w-9 h-9 rounded-full ring-2 ring-white"
                    />
                    <img
                      src={IMG_AVATAR_3}
                      alt="avatar3"
                      className="w-9 h-9 rounded-full ring-2 ring-white"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white bg-[#DB5928] inline-block px-3 py-1 rounded-full mt-1">
                      1208+
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Floating support card */}
              {/* <div className="absolute left-[291] top-[460] bg-white rounded-xl shadow-lg p-3 w-[264] flex items-center gap-3">
                <img
                  src={IMG_ELLIPSE_4}
                  alt="support"
                  className="w-11 h-11 rounded-full"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    24/7 Customer
                  </div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
