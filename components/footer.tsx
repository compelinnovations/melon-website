import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Logo from "./logo";

export function Footer() {
  // Centralized data
  const footerData = {
    socialLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/joinmelonhq",
        icon: <Instagram className="w-6 h-6 text-black" />,
      },
      {
        name: "Twitter/X",
        url: "https://x.com/JoinmelonHQ",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ),
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/people/Hello-Melon/61579631022537",
        icon: <Facebook className="w-6 h-6 text-black" />,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/melon-insurance-app",
        icon: <Linkedin className="w-6 h-6 text-black" />,
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@joinmelonhq",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-black">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.10-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        ),
      },
    ],
    appStoreLinks: {
      googlePlay: {
        url: "https://play.google.com/store",
        image: "/images/playstore-badge.png",
        alt: "Get it on Google Play",
      },
      appStore: {
        url: "https://apps.apple.com/app",
        image: "/images/appstore-badge.png",
        alt: "Download on the App Store",
      },
    },
    contactInfo: {
      general: "hello@joinmelon.co",
      support: "help@joinmelon.co",
    },
    legalLinks: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Use", href: "/terms-conditions" },
    ],
  };

  return (
    <footer className="mt-[70px] px-4 sm:px-6 lg:px-8  md:mb-8 mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 py-16 pt-8 pb-8 rounded-3xl px-6 sm:px-8 lg:px-12">
          {/* Mobile Layout */}
          <div className="flex flex-col items-start text-left gap-8 md:hidden">
            <div className="flex items-center gap-2">
              <Logo className="w-[140px]" />
            </div>
            <p className="text-gray-700 text-md max-w-md">
              Your health. Your peace of mind. <br />
              Protected in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
              <div>
                <span className="text-gray-700">Talk to Us: </span>
                <Link
                  href={`mailto:${footerData.contactInfo.general}`}
                  className="text-gray-900 hover:text-blue-600 underline"
                >
                  {footerData.contactInfo.general}
                </Link>
              </div>
              <div>
                <span className="text-gray-700">For Support: </span>
                <Link
                  href={`mailto:${footerData.contactInfo.support}`}
                  className="text-gray-900 hover:text-blue-600 underline"
                >
                  {footerData.contactInfo.support}
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href={footerData.appStoreLinks.googlePlay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={footerData.appStoreLinks.googlePlay.image}
                  alt={footerData.appStoreLinks.googlePlay.alt}
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              <a
                href={footerData.appStoreLinks.appStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src={footerData.appStoreLinks.appStore.image}
                  alt={footerData.appStoreLinks.appStore.alt}
                  width={200}
                  height={60}
                  className="min-w-[188px] h-14 w-auto"
                />
              </a>
            </div>
            <div className="flex gap-3 justify-start w-full">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  className="w-12 h-12 bg-sec-300 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              © 2025 Melon |
              {footerData.legalLinks.map((link, index) => (
                <span key={index}>
                  <Link href={link.href} className="hover:text-gray-800 ml-1">
                    {link.name}
                  </Link>
                  {index < footerData.legalLinks.length - 1 && " |"}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col w-full">
            <div className="flex justify-between items-start mb-8">
              {/* Left Side */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Logo className="w-[170px]" />
                </div>
                <p className="text-gray-700 text-md max-w-md">
                  Your health. Your peace of mind. Protected in minutes.
                </p>
                <div className="flex gap-4">
                  <a
                    href={footerData.appStoreLinks.googlePlay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={footerData.appStoreLinks.googlePlay.image}
                      alt={footerData.appStoreLinks.googlePlay.alt}
                      width={200}
                      height={60}
                      className="h-14 w-auto"
                    />
                  </a>
                  <a
                    href={footerData.appStoreLinks.appStore.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={footerData.appStoreLinks.appStore.image}
                      alt={footerData.appStoreLinks.appStore.alt}
                      width={200}
                      height={60}
                      className="min-w-[188px] h-14 w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Info Only */}
              <div className="text-right space-y-2">
                <div>
                  <span className="text-gray-700">Talk to Us: </span>
                  <Link
                    href={`mailto:${footerData.contactInfo.general}`}
                    className="text-gray-900 hover:text-blue-600 underline"
                  >
                    {footerData.contactInfo.general}
                  </Link>
                </div>
                <div>
                  <span className="text-gray-700">For Support: </span>
                  <Link
                    href={`mailto:${footerData.contactInfo.support}`}
                    className="text-gray-900 hover:text-blue-600 underline"
                  >
                    {footerData.contactInfo.support}
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Row - Copyright and Social Icons */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                © 2025 Melon |
                {footerData.legalLinks.map((link, index) => (
                  <span key={index}>
                    <Link href={link.href} className="hover:text-gray-800 ml-1">
                      {link.name}
                    </Link>
                    {index < footerData.legalLinks.length - 1 && " |"}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {footerData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.url}
                    className="w-12 h-12 bg-sec-300 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
