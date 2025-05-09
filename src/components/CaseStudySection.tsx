import React from "react";

interface CaseStudySectionProps {
  children: React.ReactNode;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ children }) => (
  <section
    className="bg-white rounded-xl p-8 shadow-lg animate-fade-in"
    aria-labelledby="case-heading"
    style={{
      backdropFilter: 'blur(4px)',
      background: 'rgba(255,255,255,0.85)',
      boxShadow: '0 4px 24px 0 rgba(37, 99, 235, 0.10)',
      marginBottom: '2rem',
    }}
  >
    {children}
  </section>
);

export default CaseStudySection; 