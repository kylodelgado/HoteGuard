import React from "react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subheadline, ctaLabel, ctaHref }) => (
  <section
    className="flex flex-col items-center text-center gap-6 pt-8 animate-fade-in"
    aria-labelledby="hero-heading"
    style={{
      backdropFilter: 'blur(8px)',
      background: 'rgba(255,255,255,0.65)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      borderRadius: '1.5rem',
      marginBottom: '2rem',
      padding: '2.5rem 1.5rem',
    }}
  >
    <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold text-blue-900 leading-tight drop-shadow-md">
      {headline}
    </h1>
    <p className="text-lg sm:text-xl text-blue-800 max-w-2xl mx-auto">
      {subheadline}
    </p>
    <a
      href={ctaHref}
      className="inline-block bg-blue-700 text-white font-semibold rounded-lg px-8 py-3 mt-4 shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
    >
      {ctaLabel}
    </a>
  </section>
);

export default HeroSection; 