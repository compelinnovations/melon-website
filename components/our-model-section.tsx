import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OurModelSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#04c751] to-[#03b347] relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-white space-y-8 relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Our Model</h2>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Melon is a digital insurance marketplace, not an insurer. We partner with iRisk (a licensed broker) and
                top providers to give you affordable health plans in one simple app, combining trusted insurance with
                modern convenience.
              </p>

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

          {/* Right Content - Phone Mockups */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/our-model-phones-new.png"
                alt="Melon app interface showing service providers and features"
                width={600}
                height={400}
                className="w-full max-w-lg mx-auto"
                priority
              />
            </div>
            {/* White decorative shape behind phones */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
