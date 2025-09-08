"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, Mail } from "lucide-react";
import Logo from "./logo";
import { motion } from "motion/react";

export function WhyChooseMelonSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 flex items-center justify-center gap-2">
            Hello{" "}
            <span className="text-blue-600">
              <Logo className="w-[170px]" />
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-pretty">
            A new kind of health insurance experience, simple, digital, and
            affordable for Africans and their families, whether at home, abroad,
            or on the move.
          </p>

          <Button className="bg-[#04c751] hover:bg-green-600 text-white rounded-full px-8 py-5 text-lg">
            Download the App
          </Button>
        </div>

        <div className="relative max-w-5xl mx-auto flex justify-center items-start gap-8">
          {/* Left Phone */}
          <motion.div
            className="relative "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/hello-melon-phone1.png"
              alt="Melon app showing service provider search"
              width={300}
              height={600}
              className="w-auto h-auto max-w-[300px]"
            />
          </motion.div>

          {/* Right Phone */}
          <motion.div
            className="relative pt-14  "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ animationDelay: "1s" }}
          >
            <Image
              src="/images/hello-melon-phone2.png"
              alt="Melon app showing points modal"
              width={300}
              height={600}
              className="w-auto h-auto max-w-[300px]"
            />
          </motion.div>

          {/* Notification Cards */}
          {/* Care Package Renewal Card */}
          <motion.div
            className="absolute top-12 left-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-xs z-10"
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#23BDEE] rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6" color="white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Your Melon Care package
                </p>
                <p className="text-sm text-gray-600">has been renewed</p>
                <p className="text-sm text-gray-600">successfully!</p>
              </div>
            </div>
          </motion.div>

          {/* Congratulations Card */}
          <motion.div
            className="absolute bottom-12 right-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-xs z-10"
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#F88C3D] rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6" color="white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Congratulations!
                </p>
                <p className="text-sm text-gray-600">You earned Melon Points</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
