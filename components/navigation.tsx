"use client";

import { useObservable, Computed } from "@legendapp/state/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const isScrolled = useObservable(false);
  const isMobileMenuOpen = useObservable(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      isScrolled.set(scrolled);
    };

    // Check initial scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Computed>
      {() => (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-200 ${
            isScrolled.get()
              ? `bg-white/20 backdrop-blur-md `
              : `bg-transparent  `
          }`}
        >
          <div className="max-w-7xl mx-auto ">
            <div className="flex  px-4 md:px-6 lg:px-8 items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div
                  className={`text-2xl font-bold transition-colors ease-in-out ${
                    isScrolled.get() ? "text-gray-900" : "text-white"
                  }`}
                >
                  <Computed>
                    {() => (
                      <Image
                        src="/images/logo-white.png"
                        alt="Melon logo"
                        width={1920}
                        height={1080}
                        className={`w-full h-auto max-w-[100px] transition-all ease-in-out   lg:max-w-[100px] object-contain ${
                          isScrolled.get() ? "hidden" : "block"
                        }`}
                        priority
                      />
                    )}
                  </Computed>

                  <Computed>
                    {() => (
                      <Image
                        src="/images/logo.png"
                        alt="Melon logo"
                        width={1920}
                        height={1080}
                        className={`w-full h-auto max-w-[100px]  transition-all ease-in-out  lg:max-w-[100px] object-contain ${
                          isScrolled.get() ? "block" : "hidden"
                        }`}
                        priority
                      />
                    )}
                  </Computed>
                </div>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Computed>
                    {() => (
                      <a
                        href="#what-is-melon"
                        className={`transition-colors font-medium ${
                          isScrolled.get() ? "text-gray-900" : "text-white"
                        }`}
                      >
                        What is Melon
                      </a>
                    )}
                  </Computed>
                  <Computed>
                    {() => (
                      <a
                        href="#why-melon"
                        className={`transition-colors font-medium ${
                          isScrolled.get() ? "text-gray-900" : "text-white"
                        }`}
                      >
                        Why Melon
                      </a>
                    )}
                  </Computed>
                  <Computed>
                    {() => (
                      <a
                        href="#who-is-melon-for"
                        className={`transition-colors font-medium ${
                          isScrolled.get() ? "text-gray-900" : "text-white"
                        }`}
                      >
                        Who is Melon for
                      </a>
                    )}
                  </Computed>
                  <Computed>
                    {() => (
                      <a
                        href="#how-it-works"
                        className={`transition-colors font-medium ${
                          isScrolled.get() ? "text-gray-900" : "text-white"
                        }`}
                      >
                        How it works
                      </a>
                    )}
                  </Computed>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="hidden sm:flex bg-sec-500 hover:bg-green-600 text-white rounded-full px-6 py-2 items-center gap-2">
                  Download the App
                  <ArrowRight className="w-4 h-4" />
                </Button>

                {/* Mobile menu */}
                <Sheet
                  open={isMobileMenuOpen.get()}
                  onOpenChange={(open) => isMobileMenuOpen.set(open)}
                >
                  <SheetTrigger asChild>
                    <Computed>
                      {() => (
                        <Button
                          className={`group md:hidden h-auto w-auto p-2 ${
                            isScrolled.get() ? "text-gray-900" : "text-white"
                          }`}
                          variant="ghost"
                          aria-label={
                            isMobileMenuOpen.get() ? "Close menu" : "Open menu"
                          }
                        >
                          <svg
                            className="pointer-events-none size-6"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12L20 12"
                              className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                            />
                            <path
                              d="M4 12H20"
                              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                            />
                            <path
                              d="M4 12H20"
                              className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                            />
                          </svg>
                        </Button>
                      )}
                    </Computed>
                  </SheetTrigger>
                  <SheetContent
                    side="top"
                    className="bg-main-700 border-none [&>button:first-of-type]:hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top data-[state=closed]:duration-200 data-[state=open]:duration-300"
                  >
                    <div className="flex justify-between items-center pt-5 px-6">
                      <Image
                        src="/images/logo-white.png"
                        alt="Melon logo"
                        width={1920}
                        height={1080}
                        className={`w-full h-auto max-w-[100px] lg:max-w-[100px] object-contain block`}
                        priority
                      />

                      {/* Custom close button with hamburger in X state */}
                      <SheetClose asChild>
                        <Button
                          className="group h-auto w-auto p-2 text-white"
                          variant="ghost"
                          aria-label="Close menu"
                        >
                          <svg
                            className="pointer-events-none size-6"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12L20 12"
                              className="origin-center translate-x-0 translate-y-0 rotate-[315deg] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                            />
                            <path
                              d="M4 12H20"
                              className="origin-center rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                            />
                            <path
                              d="M4 12H20"
                              className="origin-center translate-y-0 rotate-[135deg] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                            />
                          </svg>
                        </Button>
                      </SheetClose>
                    </div>
                    <div className="flex flex-col space-y-6 mt-8 px-7">
                      <Link
                        href="#what-is-melon"
                        className="text-xl font-light text-white hover:text-white/80 transition-colors"
                        onClick={() => isMobileMenuOpen.set(false)}
                      >
                        What is Melon
                      </Link>
                      <Link
                        href="#why-melon"
                        className="text-xl font-light text-white hover:text-white/80 transition-colors"
                        onClick={() => isMobileMenuOpen.set(false)}
                      >
                        Why Melon
                      </Link>
                      <Link
                        href="#who-is-melon-for"
                        className="text-xl font-light text-white hover:text-white/80 transition-colors"
                        onClick={() => isMobileMenuOpen.set(false)}
                      >
                        Who is Melon for
                      </Link>
                      <Link
                        href="#how-it-works"
                        className="text-xl font-light text-white hover:text-white/80 transition-colors"
                        onClick={() => isMobileMenuOpen.set(false)}
                      >
                        How it works
                      </Link>

                      <div className="pt-8 pb-8">
                        <Button className="w-full bg-[#04c751] hover:bg-green-600 text-white rounded-full px-6 py-5 flex items-center justify-center gap-2">
                          Download the App
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      )}
    </Computed>
  );
}
