import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    "Create your account and choose a package.",
    "Get covered instantly",
    "Visit a partner hospital whenever you need care.",
    "Billing is handled directly between our insurance partners and healthcare providers.",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#005bae] to-[#004a94] relative overflow-hidden">
      {/* Background decorative shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/how-it-works-woman-new.png"
                alt="Woman using Melon app on phone"
                width={600}
                height={700}
                className="w-full max-w-md mx-auto"
                priority
              />
            </div>
            {/* White decorative shape behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300/30 rounded-full -z-10"></div>
          </div>

          {/* Right Content - Text and Steps */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">How it Works</h2>
              <p className="text-xl text-blue-50 mb-8">Download. Sign up. Covered. Just like that.</p>

              <Button
                size="lg"
                className="bg-[#04c751] hover:bg-[#03b347] text-white px-8 py-3 rounded-full text-lg font-semibold mb-12"
              >
                Download the App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#04c751] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg text-blue-50 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
