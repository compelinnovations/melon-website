import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Logo and Tagline */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold">
                  <span className="text-[#04c751]">m</span>
                  <span className="text-[#005aad]">elon</span>
                </span>
              </div>
              <p className="text-gray-700 text-lg max-w-md">Your health. Your peace of mind. Protected in minutes.</p>
            </div>

            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-green-400 to-yellow-400 rounded-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </Link>

              <Link href="#" className="inline-block">
                <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Copyright and Legal */}
            <div className="text-sm text-gray-600">
              © 2025 Melon |
              <Link href="#" className="hover:text-gray-800 ml-1">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="#" className="hover:text-gray-800 ml-1">
                Terms of Use
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="text-right">
              <div className="mb-2">
                <span className="text-gray-700">Talk to Us: </span>
                <Link href="mailto:hello@joinmelon.co" className="text-gray-900 hover:text-blue-600">
                  hello@joinmelon.co
                </Link>
              </div>
              <div>
                <span className="text-gray-700">For Support: </span>
                <Link href="mailto:help@joinmelon.co" className="text-gray-900 hover:text-blue-600">
                  help@joinmelon.co
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 justify-end">
              <Link
                href="#"
                className="w-12 h-12 bg-[#04c751] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-[#04c751] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-[#04c751] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-[#04c751] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-[#04c751] rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
