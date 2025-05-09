import React from "react";

interface ComplianceSectionProps {
  children: React.ReactNode;
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({ children }) => (
  <section
    className="bg-blue-50 rounded-xl p-8 shadow-lg animate-fade-in"
    aria-labelledby="compliance-heading"
    style={{
      backdropFilter: 'blur(6px)',
      background: 'rgba(236, 245, 255, 0.85)',
      boxShadow: '0 4px 24px 0 rgba(37, 99, 235, 0.10)',
      marginBottom: '2rem',
    }}
  >
    {children}
  </section>
);

export default ComplianceSection; 