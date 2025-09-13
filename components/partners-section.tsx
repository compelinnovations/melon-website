"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "./logo";

const partners = [
  {
    name: "Glico",
    logo: "/images/glico.png",
    bgColor: "bg-gray-200",
    textColor: "text-gray-800",
  },
  {
    name: "iRisk Management",
    logo: "/images/irisk-mgt.png",
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
  {
    name: "Phoenix Health Insurance",
    logo: "/images/phoenix.png",
    bgColor: "bg-gray-200",
    textColor: "text-gray-800",
  },
  {
    name: "Equity Health Insurance",
    logo: "/images/equity-insurance.png",
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
  // {
  //   name: "Top Pharmacy",
  //   logo: "/images/top-pharm.png",
  //   bgColor: "bg-gray-200",
  //   textColor: "text-gray-800",
  // },
];

export function PartnersSection() {
  return (
    <section className="md:py-16 pt-0 bg-white overflow-hidden w-screen">
      <div className="max-w-[1330px] rounded-l-md mx-auto px-0 md:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-medium text-black flex items-center justify-center gap-0">
            <span className="text-blue-600 md:pt-2 pt-1">
              <Logo className="w-[100px] md:w-[170px]" />
            </span>
            works with
          </h2>
          {/* <p className="text-xl pt-4 text-gray-600 px-4 max-w-2xl mx-auto">
            Your health deserves quality care you can trust.
          </p> */}
        </div>

        {/* Auto-scrolling Partners */}
        <Partners />
      </div>
    </section>
  );
}

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-8 overflow-x-hidden w-screen pb-2"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`flex-shrink-0 ${partner.bgColor} rounded-2xl p-4 md:p-8 shadow-lgg min-w-[200px] md:min-w-[280px] h-24 md:h-32 flex items-center justify-center`}
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
  );
};
