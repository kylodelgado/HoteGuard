import React from "react";

interface ProductSectionProps {
  children: React.ReactNode;
}

const ProductSection: React.FC<ProductSectionProps> = ({ children }) => (
  <section
    className="flex flex-col md:flex-row gap-8 items-center animate-fade-in"
    aria-labelledby="product-heading"
    style={{
      backdropFilter: 'blur(6px)',
      background: 'rgba(255,255,255,0.7)',
      boxShadow: '0 4px 24px 0 rgba(37, 99, 235, 0.10)',
      borderRadius: '1.5rem',
      marginBottom: '2rem',
      padding: '2rem 1.5rem',
    }}
  >
    {children}
  </section>
);

export default ProductSection; 