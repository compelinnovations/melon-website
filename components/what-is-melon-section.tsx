"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import Logo from "./logo";
import { motion } from "motion/react";

export function WhatIsMelonSection() {
  return (
    <section id="what-is-melon" className="py-10 bg-white">
      <div className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 md:w-full w-screen">
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

          <button className="bg-main-700 hover:bg-main-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors">
            <span>Download the app</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <Features />
      </div>
    </section>
  );
}

const Features = () => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-start gap-8 relative">
        {/* Decorative smile images */}
        <motion.div
          className="absolute top-1/4 -left-32 z-0  "
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          style={{ maxWidth: "63vw", translate: "-20vw" }}
        >
          <Image
            src="/images/smile.png"
            alt="Smile emoji"
            width={1920}
            height={1080}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Left Phone */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hello-melon-phone1.png"
            alt="Melon app showing service provider search"
            width={3000}
            height={3000}
            className="w-auto h-auto max-w-[300px]"
          />
        </motion.div>

        {/* Right Phone */}
        <motion.div
          className="relative pt-14 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hello-melon-phone2.png"
            alt="Melon app showing points modal"
            width={3000}
            height={3000}
            className="w-auto h-auto max-w-[300px]"
          />
        </motion.div>

        {/* Desktop Notification Cards */}
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

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center pt-7 space-y-12 px-4 relative">
        {/* Mobile decorative smile images */}
        <motion.div
          className="absolute top-[210px] -left-32 z-0"
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          // style={{ maxWidth: "50vw", translate: "-15vw" }}
        >
          <Image
            src="/images/smile.png"
            alt="Smile emoji"
            width={1920}
            height={1080}
            className="drop-shadow-md"
          />
        </motion.div>

        {/* First Phone Section with Card */}
        <motion.div
          className="relative flex justify-center w-full z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="ml-16">
            <Image
              src="/images/hello-melon-phone1.png"
              alt="Melon app showing service provider search"
              width={3000}
              height={3000}
              className="w-auto h-auto max-w-[280px]"
            />
          </div>

          {/* Care Package Renewal Card - Mobile */}
          <motion.div
            className="absolute -top-1 -left-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-3 max-w-[200px] z-10"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#23BDEE] rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" color="white" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900 leading-tight">
                  Your Melon Care package
                </p>
                <p className="text-xs text-gray-600">has been renewed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second Phone Section with Card */}
        <motion.div
          className="relative flex justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mr-8">
            <Image
              src="/images/hello-melon-phone2.png"
              alt="Melon app showing points modal"
              width={3000}
              height={3000}
              className="w-auto h-auto max-w-[280px]"
            />
          </div>

          {/* Congratulations Card - Mobile */}
          <motion.div
            className="absolute -bottom-0 -right-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-3 max-w-[200px] z-10"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#F88C3D] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" color="white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">
                  Congratulations!
                </p>
                <p className="text-xs text-gray-600">You earned Melon Points</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
