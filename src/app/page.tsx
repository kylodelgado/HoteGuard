import HeroSection from "../components/HeroSection";
import ComplianceSection from "../components/ComplianceSection";
import ProductSection from "../components/ProductSection";
import CaseStudySection from "../components/CaseStudySection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-16">
      <HeroSection
        headline="NYC Hotel Emergency Beacon System"
        subheadline="Ensure compliance with the NYC Safe Hotels Act. Protect your staff with advanced Bluetooth panic buttons, real-time location tracking, and seamless monitoring."
        ctaLabel="Request a Compliance Consultation"
        ctaHref="/demo"
      />
      <ComplianceSection>
        <h2 id="compliance-heading" className="text-2xl font-bold text-blue-900 mb-4">NYC Safe Hotels Act Compliance</h2>
        <ul className="list-disc list-inside text-blue-900 space-y-2">
          <li>Meets all requirements for panic button deployment (NYC Safe Hotels Act, 2024).</li>
          <li>Provides real-time alerts and precise location data for rapid response.</li>
          <li>Includes compliance documentation and audit-ready reporting.</li>
          <li>Supports human trafficking training verification.</li>
        </ul>
        <p className="mt-4 text-blue-800 text-sm">*Citations and legal references available upon request.</p>
      </ComplianceSection>
      <ProductSection>
        <div className="flex-1">
          <h2 id="product-heading" className="text-2xl font-bold text-blue-900 mb-4">How the System Works</h2>
          <ul className="list-disc list-inside text-blue-900 space-y-2">
            <li>Wearable Bluetooth panic buttons for staff</li>
            <li>Room-based beacons for precise location</li>
            <li>Gateway devices for secure data relay</li>
            <li>Centralized monitoring software (Windows-based)</li>
          </ul>
          <p className="mt-4 text-blue-800">Easy installation, minimal infrastructure changes, and full support included.</p>
        </div>
        <div className="flex-1 flex justify-center">
          {/* Placeholder for system diagram */}
          <div className="w-64 h-48 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400 border-2 border-blue-200">
            <span className="text-lg">[System Diagram SVG]</span>
          </div>
        </div>
      </ProductSection>
      <CaseStudySection>
        <h2 id="case-heading" className="text-2xl font-bold text-blue-900 mb-4">Proven Results in NYC Hotels</h2>
        <blockquote className="italic text-blue-800 border-l-4 border-blue-400 pl-4 mb-2">
          &quot;Since installing the beacon system, our staff feel safer and we passed our compliance audit with ease.&quot;
        </blockquote>
        <p className="text-blue-900 font-semibold">– General Manager, Midtown NYC Hotel</p>
      </CaseStudySection>
      <ContactSection>
        <h2 id="contact-heading" className="text-2xl font-bold text-blue-900 mb-4">Contact & Quote Request</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" autoComplete="off" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-blue-900">Name</label>
            <input id="name" name="name" type="text" required className="rounded border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-blue-900">Email</label>
            <input id="email" name="email" type="email" required className="rounded border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="hotel" className="font-semibold text-blue-900">Hotel Name</label>
            <input id="hotel" name="hotel" type="text" required className="rounded border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="font-semibold text-blue-900">Message</label>
            <textarea id="message" name="message" rows={4} className="rounded border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="How can we help?" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all">
              Submit Request
            </button>
          </div>
        </form>
      </ContactSection>
    </main>
  );
}
