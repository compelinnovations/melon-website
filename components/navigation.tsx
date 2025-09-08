"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled);
      setIsScrolled(scrolled);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/20 backdrop-blur-md border-b border-gray-200/20"
          : "bg-transparent border-b border-main-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              <Image
                src="/images/logo-white.png"
                alt="Melon logo"
                width={1920}
                height={1080}
                className={`w-full h-auto max-w-[100px] lg:max-w-[100px] object-contain ${
                  isScrolled ? "hidden" : "block"
                }`}
                priority
              />

              <Image
                src="/images/logo.png"
                alt="Melon logo"
                width={1920}
                height={1080}
                className={`w-full h-auto max-w-[100px] lg:max-w-[100px] object-contain ${
                  isScrolled ? "block" : "hidden"
                }`}
                priority
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#what-is-melon"
                className={`transition-colors font-medium ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                What is Melon
              </a>
              <a
                href="#why-melon"
                className={`transition-colors font-medium ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Why Melon
              </a>
              <a
                href="#who-is-melon-for"
                className={`transition-colors font-medium ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Who is Melon for
              </a>
              <a
                href="#how-it-works"
                className={`transition-colors font-medium ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                How it works
              </a>
            </div>
          </div>

          <Button className="bg-[#04c751] hover:bg-green-600 text-white rounded-full px-6 py-2 flex items-center gap-2">
            Download the App
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
