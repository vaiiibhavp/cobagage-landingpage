import CobagageHero from "@/components/CobagageHero";
import HowItWorks from "@/components/HowItWorks";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactUsSection from "@/components/ContactUsSection";

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-900">
      <CobagageHero />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
