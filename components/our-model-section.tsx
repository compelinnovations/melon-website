import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function OurModelSection() {
  return (
    <section className="md:py-20 md:pb-10 py-20 pb-0  md:mt-[100px] w-screen relative overflow-hiddenN">
      {/* Phone Mockups - Positioned above the card on the right */}
      <div className="absolute -right-[20px] -top-[93px] z-20 hidden lg:block">
        <Image
          src="/images/our-model-phones.png"
          alt="Melon app interface showing service providers and features"
          width={3000}
          height={3000}
          className="w-full max-w-[650px] translate-y-10"
          priority
        />
      </div>

      {/* Green Card Container */}
      <div className="px-4 md:px-10 md:pl-6 w-screen md:w-screen">
        <div className="bg-gradient-to-br from-[#04c751] to-[#03b347] relative overflow-hidden rounded-3xl">
          {/* Background decorative shapes */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

          <div className="px-8 lg:px-12 py-16 lg:py-16 pb-[250px]">
            <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl lg:mr-[300px] xl:mr-[200px]">
              {/* Left Content - Text */}
              <div className="text-white space-y-8 relative z-10">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left text-balance">
                    Our Model
                  </h2>
                  <p className="md:text-xl text-lg text-green-100 leading-relaxed mb-8 text-center md:text-left">
                    Melon is a digital insurance marketplace, not an insurer. We
                    partner with iRisk (a licensed broker) and top providers to
                    give you affordable health plans in one simple app,
                    combining trusted insurance with modern convenience.
                  </p>

                  <div className="flex justify-center md:justify-start">
                    <Button
                      size="lg"
                      className="relative z-20 bg-[#005bae] hover:bg-[#004a94] text-white px-8 py-3 rounded-full text-lg font-semibold"
                      style={{ backgroundColor: "#005bae !important" }}
                    >
                      Get covered in minutes
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Phone Mockups - Positioned outside the card */}
        <div className="lg:hidden relative -mt-[140px] -top-[100px] -left-[20px] z-30 flex justify-center">
          <Image
            src="/images/our-model-phones-mobile.png"
            alt="Melon app interface showing service providers and features"
            width={4000}
            height={4000}
            className="w-full max-w-sm mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
