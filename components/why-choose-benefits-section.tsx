import { Smartphone, Building2, Headphones, DollarSign, FileText } from "lucide-react"

export function WhyChooseBenefitsSection() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Instant sign-up",
      description: "No paperwork, no waiting, just download and go.",
    },
    {
      icon: Building2,
      title: "Trusted partner hospitals",
      description: "Access to a growing network of quality hospitals and pharmacies.",
    },
    {
      icon: Headphones,
      title: "Reliable support",
      description: "Get real support from a person, by email, phone, or in real time when you need it.",
    },
    {
      icon: DollarSign,
      title: "Affordable plans",
      description: "Real coverage at prices that fit your budget.",
    },
    {
      icon: FileText,
      title: "Clear terms",
      description: "No hidden fees, no surprises.",
    },
  ]

  return (
    <section className="py-20 bg-[#005bae]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Why Choose <span className="text-[#04c751]">melon</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#04c751] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
