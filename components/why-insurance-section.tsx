import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WhyInsuranceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            {/* Green decorative element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-60"></div>

            <div className="relative z-10 bg-gray-100 rounded-3xl p-8">
              <Image
                src="/images/why-insurance-man-new.png"
                alt="Man pointing, explaining why insurance matters"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">Why Insurance</h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Life is unpredictable. Accidents, illness, and hospital bills can happen at any time. Traditional
                insurance is slow, expensive, and complicated.
              </p>

              <p>
                Melon changes that. We put protection in your pocket: fast, affordable coverage you can access
                instantly, so you can focus on living, not worrying.
              </p>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-4 text-lg flex items-center gap-2">
              Get covered in minutes
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
