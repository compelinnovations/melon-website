"use client";

import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Students protecting their studies.",
      dialogBgColor: "bg-[#04c751]",
      dialogTextColor: "text-[#151515]",
      dialogStory:
        "Ama is a 21-year-old student at the University of Cape Coast. When she fell ill during exams, one hospital bill could have forced her to call home for money and risk her semester. With Melon, Ama got care without worrying about tuition.",
      dialogHowItWorksTitle: "How Melon works:",
      dialogBenefits: [
        "Affordable cover designed for students",
        "Access to trusted clinics near campuses",
        "Keeps you focused on school, not bills",
      ],
      dialogImage: "/images/we-built-student-info.png",
      dialogImageSmall: "/images/we-built-student-info-small.png",
    },
    {
      title: "Freelancers working without benefits.",
      image: "/images/we-built-freelancers.png",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 top-10 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Freelancers working without benefits.",
      dialogBgColor: "bg-gray-800",
      dialogTextColor: "text-white",
      dialogStory:
        "James is a freelance developer in Lagos. When he needed surgery, he had to choose between his health and his savings. Now with Melon, he gets professional coverage without depending on anyone else.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Individual plans built for independent work",
        "No employer needed - you're covered directly",
        "Flexible coverage that moves with your career",
      ],
      dialogImage: "/images/we-built-freelancers-info.png",
      dialogImageSmall: "/images/we-built-freelancers-info-small.png",
    },
    {
      title: "Tourists staying safe while traveling.",
      image: "/images/we-built-tourists.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "wide",
      hasDecoration: true,
      titleClassName: "flex flex-col md:justify-center items-center h-full",
      imageContainerClassName:
        "absolute bottom-0 right-0 md:w-2/3 md:h-[400px] h-[222px]",
      imageClassName:
        "w-full h-full md:object-contain object-cover object-bottom-right",
      dialogTitle: "Tourists staying safe while traveling.",
      dialogBgColor: "bg-[#04c751]",
      dialogTextColor: "text-[#151515]",
      dialogStory:
        "Sarah planned her dream trip to Ghana but worried about healthcare costs. With Melon's travel coverage, she explored freely knowing unexpected medical bills wouldn't ruin her adventure or savings.",
      dialogHowItWorksTitle: "How Melon works:",
      dialogBenefits: [
        "Coverage across multiple African countries",
        "Emergency medical assistance 24/7",
        "No upfront payments at partner clinics",
      ],
      dialogImage: "/images/we-built-tourist-info.png",
      dialogImageSmall: "/images/we-built-tourist-info-small.png",
    },
    {
      title: "Small businesses caring for employees.",
      image: "/images/we-built-small-businesses.png",
      bgColor: "bg-gray-800",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 right-0 w-full h-auto",
      imageClassName: "w-full h-full object-cover object-center",
      dialogTitle: "Small businesses caring for employees.",
      dialogBgColor: "bg-gray-800",
      dialogTextColor: "text-white",
      dialogStory:
        "Kemi runs a tech startup in Accra. She wanted to offer health benefits like big companies but couldn't afford traditional plans. With Melon, her team gets quality coverage at startup-friendly prices.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Affordable group plans for growing teams",
        "Easy enrollment and management platform",
        "Competitive benefits without corporate costs",
      ],
      dialogImage: "/images/we-built-sme-info.png",
      dialogImageSmall: "/images/we-built-sme-info-small.png",
    },
    {
      title: "Diaspora sending love and support home.",
      image: "/images/we-built-diaspora.png",
      bgColor: "bg-[#005aad]",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName:
        "absolute bottom-0 md:top-auto right-0 w-full md:h-[400px] h-[222px]",
      imageClassName: "w-full object-contain object-center   pl-[150px]",
      dialogTitle: "Diaspora sending love and support home.",
      dialogBgColor: "bg-[#005aad]",
      dialogTextColor: "text-white",
      dialogStory:
        "Kwame lives in London, but his mother Akosua is in Ghana. When she got sick last year, Kwame scrambled to send money for hospital bills. With Melon, he now covers her health directly. Akosua gets care when she needs it, and Kwame has peace of mind.",
      dialogHowItWorksTitle: "How Melon Helps:",
      dialogBenefits: [
        "Cover loved ones back home directly",
        "Fast, reliable access to trusted clinics",
        "More than remittances, real protection",
      ],
      dialogImage: "/images/we-built-diaspora-info.png",
      dialogImageSmall: "/images/we-built-diaspora-info-small.png",
    },
  ];

  const AudienceCard = ({
    audience,
    className,
    altText,
  }: {
    audience: (typeof audiences)[0];
    className: string;
    altText: string;
  }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            audience.bgColor,
            "rounded-3xl p-8 relative overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200",
            className
          )}
        >
          <h3
            className={cn(
              "text-2xl lg:text-3xl font-normal mb-6 max-w-md leading-tight tracking-tight",
              audience.textColor,
              audience.titleClassName
            )}
          >
            {audience.title}
          </h3>
          <div className={cn(audience.imageContainerClassName)}>
            <Image
              width={3000}
              height={3000}
              src={audience.image || "/placeholder.svg"}
              alt={altText}
              className={audience.imageClassName}
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[90vw] md:max-w-[1220px]   p-0 overflow-hidden "
      >
        <div
          className={cn(
            "min-h-[600px]  text-white relative",
            audience.dialogBgColor
          )}
        >
          {/* Custom Close Button */}
          <DialogClose asChild>
            <button className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DialogClose>
          {/* Desktop Layout */}
          <div className="hidden md:grid md:pr-[30px] md:grid-cols-2 min-h-[600px] max-h-[600px]">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                width={2000}
                height={2000}
                src={audience.dialogImage}
                alt={altText}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="relative flex flex-col h-[600px]">
              {/* Scrollable Content */}
              <ScrollArea className="flex-1 p-8 pb-20">
                <h2
                  className={cn(
                    "text-3xl font-normal mb-6",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogTitle}
                </h2>
                <p
                  className={cn(
                    "text-lg mb-8 leading-relaxed",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogStory}
                </p>
                <div className="mb-8">
                  <h3
                    className={cn(
                      "text-xl font-semibold mb-4",
                      audience.dialogTextColor
                    )}
                  >
                    {audience.dialogHowItWorksTitle}
                  </h3>
                  <div className="space-y-4">
                    {audience.dialogBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-main-700 border-white border-2 rounded-full flex items-center justify-center flex-shrink-0"></div>
                        <span
                          className={cn("text-lg", audience.dialogTextColor)}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>

              {/* Fixed Download Button */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-4  from-current to-transparent">
                <button className="w-full bg-main-700 hover:bg-main-600 text-white border-white border-2 px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors">
                  <span>Download the app</span>
                  <div className="border-white border-2 rounded-full p-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden h-[90vh]  relative flex flex-col">
            {/* Scrollable Content */}
            <ScrollArea className="flex-1 h-full">
              <div className="pbb-24">
                <h2
                  className={cn(
                    "text-2xl font-normal mb-6 px-6 pt-6 pb-0",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogTitle}
                </h2>
                <p
                  className={cn(
                    "text-base mb-6 px-6 leading-relaxed",
                    audience.dialogTextColor
                  )}
                >
                  {audience.dialogStory}
                </p>
                <div className="mb-6 px-6">
                  <h3
                    className={cn(
                      "text-lg font-semibold mb-4",
                      audience.dialogTextColor
                    )}
                  >
                    {audience.dialogHowItWorksTitle}
                  </h3>
                  <div className="space-y-3">
                    {audience.dialogBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-main-700 border-white border-2 rounded-full flex items-center justify-center flex-shrink-0"></div>
                        <span
                          className={cn("text-base", audience.dialogTextColor)}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="relative mb-6">
                  <Image
                    width={2000}
                    height={2000}
                    src={audience.dialogImageSmall}
                    alt={altText}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollArea>

            {/* Fixed Download Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pt-4  from-current to-transparent">
              <button className="w-full bg-main-700 border-white border-2 hover:bg-main-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors">
                <span>Download the app</span>
                <div className="border-white border-2 rounded-full p-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Students - Large card */}
        <AudienceCard
          audience={audiences[0]}
          className="md:col-span-1 lg:col-span-1 md:min-h-[500px] min-h-[350px]"
          altText="Students studying together"
        />

        {/* Freelancers - Small card */}
        <AudienceCard
          audience={audiences[1]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Freelancer working on laptop"
        />

        {/* Tourists - Wide card with decoration */}
        <AudienceCard
          audience={audiences[2]}
          className="md:col-span-2 lg:col-span-2 md:min-h-[420px] min-h-[350px]"
          altText="Tourists with passports"
        />

        {/* Small businesses - Small card */}
        <AudienceCard
          audience={audiences[3]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Business team"
        />

        {/* Diaspora - Small card */}
        <AudienceCard
          audience={audiences[4]}
          className="md:min-h-[500px] min-h-[350px]"
          altText="Woman using phone"
        />
      </div>
    </div>
  );
};
