import React from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  title: string;
  subtitle?: string; // Subtitle dibuat opsional
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <ScrollReveal direction='up' delay={0}>
      <div className="w-full flex flex-col items-center mb-10 md:mb-5">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          {title}
        </h1>

        <ScrollReveal direction='up' delay={0.1}>
          {/* Garis aksen elegan */}
          <div className="w-14 h-1 bg-indigo-600 rounded-full mt-4 mb-6 opacity-80"></div>
        </ScrollReveal>

        <ScrollReveal direction='up' delay={0.2}>
          {subtitle && (
            <h2 className="text-base md:text-lg font-medium opacity-70 max-w-2xl text-center leading-relaxed">
              {subtitle}
            </h2>
          )}
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
}