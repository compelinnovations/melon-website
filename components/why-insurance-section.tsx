"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export function WhyInsuranceSection() {
  return (
    <section className="py-20 pt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 md:pl-0 md:pr-[50px]">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Desktop Decorative smile image */}
          <motion.div
            className="absolute top-1/4 -left-32 z-0"
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "63vw", translateX: "-14vw" }}
          >
            <Image
              src="/images/smile-green.png"
              alt="Green smile emoji"
              width={1920}
              height={1080}
              className="drop-shadow-lg"
            />
          </motion.div>

          {/* Left Content - Image */}
          <div className="relative z-10">
            <div className="relative z-10 rounded-3xl p-8 pl-0">
              <Image
                src="/images/why-insurance.png"
                alt="Man pointing, explaining why insurance matters"
                width={4000}
                height={4000}
                className="w-full h-auto md:max-w-[660px]] lg:max-w-[760px]] xl md:max-h-[calc(100vh-5rem)]  object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 z-10 relative mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
              Why Insurance
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Life is unpredictable. Accidents, illness, and hospital bills
                can happen at any time. Traditional insurance is slow,
                expensive, and complicated.
              </p>

              <p>
                Melon changes that. We put protection in your pocket: fast,
                affordable coverage you can access instantly, so you can focus
                on living, not worrying.
              </p>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200 min-w-[240px]">
              Get covered in minutes
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-8 relative px-4">
          {/* Mobile decorative smile image */}
          <motion.div
            className="absolute top-[320px] -left-32 z-0"
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            // style={{ maxWidth: "50vw", translateX: "-10vw" }}
          >
            <Image
              src="/images/smile-green.png"
              alt="Green smile emoji"
              width={1920}
              height={1080}
              className="drop-shadow-md "
            />
          </motion.div>

          {/* Mobile Content Order */}
          {/* 1. Title */}
          <motion.div
            className="text-center z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Insurance
            </h2>
          </motion.div>

          {/* 2. Description */}
          <motion.div
            className="space-y-4 text-base text-gray-700 leading-relaxed text-center px-4 z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Life is unpredictable. Accidents, illness, and hospital bills can
              happen at any time. Traditional insurance is slow, expensive, and
              complicated.
            </p>
          </motion.div>

          {/* 3. Button */}
          <motion.div
            className="flex justify-center z-10 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 min-w-[240px]">
              Get covered in minutes
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </motion.div>

          {/* 4. Image with smile behind */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-3xl  p-4 pr-10 pt-10">
              <Image
                src="/images/why-insurance.png"
                alt="Man pointing, explaining why insurance matters"
                width={4000}
                height={4000}
                className="w-full h-auto   mx-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
