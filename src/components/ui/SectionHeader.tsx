import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader = ({ title, description, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`relative text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      
      {/* Gradient Underline */}
      <div className="absolute w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full left-1/2 -translate-x-1/2" />

      {description && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-8">
          {description}
        </p>
      )}
    </div>
  );
};