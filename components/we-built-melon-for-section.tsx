"use client";

import Image from "next/image";
import Logo from "./logo";

export function WeBuiltMelonForSection() {
  return (
    <section id="who-is-melon-for" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-medium text-black flex items-center justify-center gap-0">
            We built{" "}
            <span className="text-blue-600 md:pt-2 pt-1">
              <Logo className="w-[100px] md:w-[170px]" />
            </span>
            for
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Melon is designed for everyday life. Whoever you are, Melon makes
            health coverage simple and accessible.
          </p>
        </div>
        <Features />
      </div>
    </section>
  );
}

const Features = () => {
  const audiences = [
    {
      title: "Students protecting their studies.",
      image: "/images/we-built-students.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "small",
    },
    {
      title: "Freelancers working without benefits.",
      image: "/images/we-built-freelancers.png",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
    },
    {
      title: "Tourists staying safe while traveling.",
      image: "/images/we-built-tourists.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "wide",
      hasDecoration: true,
    },
    {
      title: "Small businesses caring for employees.",
      image: "/images/we-built-small-businesses.png",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
    },
    {
      title: "Diaspora sending love and support home.",
      image: "/images/we-built-diaspora.png",
      bgColor: "bg-[#005aad]",
      textColor: "text-white",
      size: "small",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Students - Large card (2 cols on lg) */}
        <div
          className={`${audiences[0].bgColor} rounded-3xl p-8 md:col-span-1 lg:col-span-1 relative overflow-hidden min-h-[500px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[0].textColor} mb-6 max-w-md leading-tight tracking-tight`}
          >
            {audiences[0].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-auto">
            <Image
              width={3000}
              height={3000}
              src={audiences[0].image || "/placeholder.svg"}
              alt="Students studying together"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Freelancers - Small card (1 col) */}
        <div
          className={`${audiences[1].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[500px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[1].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[1].title}
          </h3>
          <div className="absolute bottom-0 top-10 right-0 w-full h-auto">
            <Image
              width={3000}
              height={3000}
              src={audiences[1].image || "/placeholder.svg"}
              alt="Freelancer working on laptop"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Tourists - Wide card with decoration (3 cols) */}
        <div
          className={`${audiences[2].bgColor} rounded-3xl p-8 md:col-span-2 lg:col-span-3 relative overflow-hidden min-h-[420px]`}
        >
          <h3
            className={`text-2xl   lg:text-3xl flex flex-col justify-center items-center h-full font-normal ${audiences[2].textColor} mb-6 max-w-md leading-tight tracking-tight`}
          >
            {audiences[2].title}
          </h3>

          <div className="absolute bottom-0 right-0 w-2/3 h-[400px]">
            <Image
              width={3000}
              height={3000}
              src={audiences[2].image || "/placeholder.svg"}
              alt="Tourists with passports"
              className="w-full h-full object-contain object-bottom-right"
            />
          </div>
        </div>

        {/* Small businesses - Small card (1 col) */}
        <div
          className={`${audiences[3].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[500px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[3].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[3].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-auto">
            <Image
              width={3000}
              height={3000}
              src={audiences[3].image || "/placeholder.svg"}
              alt="Business team"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Diaspora - Small card (1 col) */}
        <div
          className={`${audiences[4].bgColor} rounded-3xl p-8 relative overflow-hidden min-h-[500px]`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-normal ${audiences[4].textColor} mb-6 max-w-xs leading-tight`}
          >
            {audiences[4].title}
          </h3>
          <div className="absolute bottom-0 right-0 w-full h-[400px]">
            <Image
              width={3000}
              height={3000}
              src={audiences[4].image || "/placeholder.svg"}
              alt="Woman using phone"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
