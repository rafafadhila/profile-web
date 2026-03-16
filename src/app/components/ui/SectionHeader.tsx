import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string; // Subtitle dibuat opsional
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="w-full flex flex-col items-center mb-10 md:mb-14">
  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
    {title}
  </h1>
  
  {/* Garis aksen elegan */}
  <div className="w-14 h-1 bg-indigo-600 rounded-full mt-4 mb-6 opacity-80"></div>
  
  {subtitle && (
    <h2 className="text-base md:text-lg font-medium opacity-70 max-w-2xl text-center leading-relaxed">
      {subtitle}
    </h2>
  )}
</div>
  );
}