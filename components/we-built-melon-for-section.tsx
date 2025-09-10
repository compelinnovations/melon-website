"use client";

import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      dialogTitle: "Coverage for Students",
      dialogDescription:
        "Comprehensive health insurance designed specifically for students who need affordable, reliable coverage while focusing on their education.",
      dialogContent:
        "Whether you're studying locally or abroad, Melon provides essential health coverage that fits your student budget. Get protection for medical emergencies, routine check-ups, and prescription medications without breaking the bank.",
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
      dialogTitle: "Coverage for Freelancers",
      dialogDescription:
        "Health insurance solutions for independent contractors and freelancers who don't have employer-sponsored benefits.",
      dialogContent:
        "As a freelancer, you deserve the same quality healthcare as traditional employees. Melon offers flexible plans that cover your medical needs while giving you the freedom to work on your terms.",
    },
    {
      title: "Tourists staying safe while traveling.",
      image: "/images/we-built-tourists.png",
      bgColor: "bg-[#04c751]",
      textColor: "text-[#151515]",
      size: "wide",
      hasDecoration: true,
      titleClassName: "flex flex-col justify-center items-center h-full",
      imageContainerClassName: "absolute bottom-0 right-0 w-2/3 h-[400px]",
      imageClassName: "w-full h-full object-contain object-bottom-right",
      dialogTitle: "Coverage for Travelers",
      dialogDescription:
        "Travel insurance and health coverage for tourists exploring new destinations safely.",
      dialogContent:
        "Don't let health concerns limit your adventures. Melon's travel coverage protects you from unexpected medical expenses while you explore the world, giving you peace of mind wherever your journey takes you.",
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
      dialogTitle: "Coverage for Small Businesses",
      dialogDescription:
        "Affordable group health insurance solutions for small business owners who want to take care of their team.",
      dialogContent:
        "Show your employees you care by providing quality health benefits. Melon makes it easy and affordable for small businesses to offer competitive health insurance packages that attract and retain top talent.",
    },
    {
      title: "Diaspora sending love and support home.",
      image: "/images/we-built-diaspora.png",
      bgColor: "bg-[#005aad]",
      textColor: "text-white",
      size: "small",
      titleClassName: "",
      imageContainerClassName: "absolute bottom-0 right-0 w-full h-[400px]",
      imageClassName: "w-full object-contain object-center h-[450px] pl-[150px]",
      dialogTitle: "Coverage for Diaspora",
      dialogDescription:
        "Health insurance solutions for diaspora communities supporting family members back home.",
      dialogContent:
        "Support your loved ones with quality healthcare coverage. Melon enables diaspora communities to provide health insurance for family members in their home countries, ensuring they receive the care they need.",
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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {audience.dialogTitle}
          </DialogTitle>
          <DialogDescription className="text-lg mt-2">
            {audience.dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <div className="mb-6">
            <Image
              width={400}
              height={300}
              src={audience.image}
              alt={altText}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-700 leading-relaxed">
            {audience.dialogContent}
          </p>
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
          className="md:col-span-1 lg:col-span-1 min-h-[500px]"
          altText="Students studying together"
        />

        {/* Freelancers - Small card */}
        <AudienceCard
          audience={audiences[1]}
          className="min-h-[500px]"
          altText="Freelancer working on laptop"
        />

        {/* Tourists - Wide card with decoration */}
        <AudienceCard
          audience={audiences[2]}
          className="md:col-span-2 lg:col-span-2 min-h-[420px]"
          altText="Tourists with passports"
        />

        {/* Small businesses - Small card */}
        <AudienceCard
          audience={audiences[3]}
          className="min-h-[500px]"
          altText="Business team"
        />

        {/* Diaspora - Small card */}
        <AudienceCard
          audience={audiences[4]}
          className="min-h-[500px]"
          altText="Woman using phone"
        />
      </div>
    </div>
  );
};
