"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextAnimate } from "./magicui/text-animate";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative md:h-[calc(100vh-5rem)]   overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-main-700  "></div>

      <div className="relative md:h-[calc(100vh-5rem)] mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] gap-0 md:h-[calc(100vh-5rem)] items-center">
          {/* Right Content - Hero Text (Mobile: Order 1) */}
          <div className="text-white space-y-6 flex-1 lg:pr-8 lg:pl-8 z-10 order-1 lg:order-2 px-4 lg:px-0 pt-[100px] lg:pt-0 flex flex-col justify-center lg:justify-start">
            <TextAnimate
              animation="fadeIn"
              className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold leading-[1.3] tracking-tight"
              by="line"
              as="h1"
            >
              {`Health Insurance Made Simple,\nAffordable, and Built for Africans\nEverywhere.`}
            </TextAnimate>

            <TextAnimate
              animation="fadeIn"
              className="text-center md:text-left text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl"
              by="line"
              as="p"
              delay={0.5}
            >
              {` Sign up in minutes. Get covered instantly. Protect yourself and your loved ones with peace of mind that travels wherever you do.`}
            </TextAnimate>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button className="bg-[#00B74A] hover:bg-[#00A041] text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 min-w-[240px]">
                Get covered in minutes
                <div className="bg-white/20 rounded-full p-1">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0066CC] rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3 bg-transparent transition-all duration-200 min-w-[200px]"
              >
                How Melon Works
                <div className="bg-white/20 hover:bg-[#0066CC]/20 rounded-full p-1 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Left Content - Main Image (Mobile: Order 2) */}
          <div className="relative flex items-start md:h-[calc(100vh-5rem)] justify-start lg:justify-start order-2 lg:order-1">
            {/* Main image container */}
            <div className="relative z-10">
              <Image
                src="/images/woman-smiling-looking-at-melon-app.png"
                alt="Smiling woman with phone using Melon health insurance app"
                width={4000}
                height={4000}
                className="w-full h-auto md:max-w-[660px]] lg:max-w-[760px]] xl md:max-h-[calc(100vh-5rem)]  object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
}
