import React from 'react';

const SectionHeading = ({ title, subtitle, viewAllLink }) => {
  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <a href={viewAllLink} className="text-sm font-medium hover:underline">
          VIEW ALL →
        </a>
      )}
    </div>
  );
};

export default SectionHeading;