import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export function TermsAndConditions() {
  const sections = [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance of Terms",
      content: (
        <p>
          By accessing or using the Melon app or website ("Platform"), you agree
          to be bound by these Terms and Conditions, our Privacy Policy, and any
          other applicable policies. If you do not agree with these terms,
          please do not use the Platform.
        </p>
      ),
    },
    {
      id: "who-we-are",
      title: "2. Who We Are",
      content: (
        <p>
          Melon is a digital health insurance platform providing access to
          health insurance plans and related services for young people and
          startups in Ghana. We partner with licensed insurance providers to
          deliver these services.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "3. Eligibility",
      content: (
        <div>
          <p className="mb-4">To use Melon, you must:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Be at least 18 years old or have parental/guardian consent.</li>
            <li>
              Be a resident of Ghana or authorized to access our services.
            </li>
            <li>Register with accurate and complete information.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-accounts",
      title: "4. User Accounts",
      content: (
        <div className="space-y-4">
          <p>
            You may be required to create an account. You are responsible for
            maintaining the confidentiality of your login credentials and for
            all activities under your account.
          </p>
          <p>
            Melon may suspend or terminate your account at any time if you
            breach these terms.
          </p>
        </div>
      ),
    },
    {
      id: "insurance-services",
      title: "5. Insurance Services",
      content: (
        <div className="space-y-4">
          <p className="bg-amber-50 p-4 rounded-lg">
            Melon is not liable for claims, coverage, or denial of services
            under any insurance policy.
          </p>
          <p>
            All insurance services are provided by third-party licensed
            insurance providers. Melon acts as a facilitator and is not
            responsible for policy terms, claims processing, or coverage
            decisions.
          </p>
        </div>
      ),
    },
    {
      id: "payments",
      title: "6. Payments",
      content: (
        <div>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              All payments for insurance plans or services on Melon must be made
              through approved methods.
            </li>
            <li>Prices and fees are subject to change with notice.</li>
            <li>
              You agree to pay all applicable charges incurred through your
              account.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-privacy",
      title: "7. Data Privacy",
      content: (
        <p>
          We collect, use, and protect your personal information in accordance
          with our{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline font-medium"
          >
            Privacy Policy
          </Link>
          . By using our services, you consent to this data collection and
          processing.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            All content, trademarks, software, and design elements on the
            Platform are the property of Melon or its licensors and are
            protected by applicable copyright and intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or modify any part of the
            Platform without express written consent from Melon.
          </p>
        </div>
      ),
    },
    {
      id: "user-content",
      title: "9. User Content",
      content: (
        <p>
          You are solely responsible for any content (including reviews,
          messages, or feedback) you post on the Platform. You grant Melon a
          non-exclusive, royalty-free license to use, reproduce, and display
          such content for marketing or improvement purposes.
        </p>
      ),
    },
    {
      id: "prohibited-conduct",
      title: "10. Prohibited Conduct",
      content: (
        <div>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>
              Use the Platform for unlawful, fraudulent, or harmful activities.
            </li>
            <li>Upload viruses or malicious code.</li>
            <li>Interfere with or disrupt the Platform or its systems.</li>
            <li>Impersonate another person or misrepresent your identity.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-party-links",
      title: "11. Third-Party Links and Services",
      content: (
        <p>
          Melon may link to third-party websites or services. We are not
          responsible for the content, accuracy, or practices of these third
          parties. Your use of those services is at your own risk.
        </p>
      ),
    },
    {
      id: "disclaimer-of-warranties",
      title: "12. Disclaimer of Warranties",
      content: (
        <div>
          <p className="mb-4">
            The Platform is provided "as is" without warranties of any kind,
            whether express or implied. Melon does not guarantee that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>The Platform will be uninterrupted or error-free.</li>
            <li>Information on the Platform is accurate or complete.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation-of-liability",
      title: "13. Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law, Melon shall not be liable for
          any direct, indirect, incidental, or consequential damages arising
          from your use of the Platform or any insurance service provided by
          third parties.
        </p>
      ),
    },
    {
      id: "indemnity",
      title: "14. Indemnity",
      content: (
        <p>
          You agree to indemnify and hold harmless Melon and its affiliates from
          any claims, losses, or damages arising from your use of the Platform
          or violation of these Terms.
        </p>
      ),
    },
    {
      id: "termination",
      title: "15. Termination",
      content: (
        <p>
          Melon may suspend or terminate your access to the Platform at any time
          without prior notice if you breach these Terms or for any other reason
          deemed necessary.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "16. Governing Law",
      content: (
        <p>
          These Terms are governed by the laws of the Republic of Ghana. Any
          disputes arising from these Terms shall be resolved in the courts of
          competent jurisdiction in Ghana.
        </p>
      ),
    },
    {
      id: "changes-to-terms",
      title: "17. Changes to Terms",
      content: (
        <p>
          Melon reserves the right to modify or update these Terms at any time.
          Continued use of the Platform after changes means you accept the
          revised Terms.
        </p>
      ),
    },
    {
      id: "contact",
      title: "18. Contact Us",
      content: (
        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="mb-4 text-gray-700">
            If you have any questions about these Terms, please contact:
          </p>
          <div className="space-y-2">
            <p className="text-gray-900">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@meloninsurance.co"
                className="text-blue-600 hover:underline"
              >
                hello@meloninsurance.co
              </a>
            </p>
            <p className="text-gray-900">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+233599629666"
                className="text-blue-600 hover:underline"
              >
                +233 599 629 666
              </a>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-main-700 flex h-full items-center justify-center sticky top-0 z-50">
        <Link href="/" className="hidden md:block pl-2 flex-shrink-0">
          <Logo className="w-[100px] md:w-[120px]" useWhite={true} />
        </Link>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="flex-shrink-0 block md:hidden">
                <Logo className="w-[120px]" useWhite={true} />
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between w-full">
              <Link
                href="/"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <Link href="/" className="flex-shrink-0">
                <Logo className="w-[100px]" useWhite={true} />
              </Link>
            </div>

            <div className="hidden md:block text-sm text-gray-200">
              Effective Year: 2025
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <div className="text-lg text-gray-600 max-w-3xl mx-auto space-y-2">
            <p>
              <strong>Jurisdiction:</strong> Republic of Ghana
            </p>
            <p>
              <strong>Platform:</strong> Mobile App and Website (
              <a
                href="https://www.meloninsurance.co"
                className="text-blue-600 hover:underline"
              >
                www.meloninsurance.co
              </a>
              )
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Table of Contents
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline text-sm py-1 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Copyright © 2025 Melon. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
