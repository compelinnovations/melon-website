"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function PartnersSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 30)
    return () => clearInterval(intervalId)
  }, [])

  const partners = [
    {
      name: "iRisk Management",
      logo: "/irisk-management-insurance-brokers-logo.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Glico",
      logo: "/glico-insurance-we-cushion-you-for-life-logo.jpg",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "Phoenix Health Insurance",
      logo: "/phoenix-health-insurance-logo-with-gold-and-black.jpg",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "Equity Health Insurance",
      logo: "/equity-health-insurance-logo-with-red-tie-icon.jpg",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      name: "Prudential",
      logo: "/prudential-insurance-logo.jpg",
      bgColor: "bg-white",
      textColor: "text-gray-800",
    },
    {
      name: "AXA Mansard",
      logo: "/axa-mansard-insurance-logo.jpg",
      bgColor: "bg-blue-600",
      textColor: "text-white",
    },
  ]

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#04c751]">m</span>elon works with
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your health deserves quality care you can trust.</p>
        </div>

        {/* Auto-scrolling Partners */}
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-8 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`flex-shrink-0 ${partner.bgColor} rounded-2xl p-8 shadow-lg min-w-[280px] h-32 flex items-center justify-center`}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
