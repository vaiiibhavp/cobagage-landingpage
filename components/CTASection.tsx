import React from "react";
import OrangeBlob from "./OrangeBlob";

export default function CTASection() {
  return (
    <section className="relative bg-[#DB5928] text-white py-12 overflow-hidden">
      <OrangeBlob className="absolute z-20 right-[-180px] top-[50px] hidden sm:block" />
      <OrangeBlob
        rad={256}
        className="absolute z-20 left-[-128px] top-[-128px] hidden sm:block"
      />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full text-center ">
          <div>
            <h3 className="text-2xl font-bold">
              Ready to Start Your Global Shopping Journey?
            </h3>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4"> */}
            <div className="w-2/3 my-4 mx-auto text-center">
              <p className="mt-2 text-white/90">
                Join thousands of travelers and shoppers connecting across
                borders to share unique products and experiences.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div>
            <a
              className="inline-block bg-white text-[#DB5928] px-6 py-3 rounded-md font-semibold shadow"
              href="#"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
