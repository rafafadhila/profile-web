'use client'

import React from 'react'
import { useTheme } from '@/app/providers/themeProvider'

interface InfoBadgeProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

export default function InfoBadge({ icon, label, value }: InfoBadgeProps) {
    const { isDark } = useTheme();

    return (
        <div
            className={`flex items-center  gap-4 px-4 py-3 rounded-full w-full ${isDark
                    ? 'bg-neutral-100 hover:bg-neutral-200 shadow-md'
                    : 'shadow-md'
                } hover:scale-105 transition-all duration-300 hover:shadow-indigo-400`}
        >
            {/* Icon Container - Lingkaran di dalam kapsul */}
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${isDark
                        ? 'border-2 border-indigo-300 text-indigo-600'
                        : 'border-2 border-indigo-300 text-indigo-600'
                    }`}
            >
                {icon}
            </div>

            {/* Text Container */}
            <div className={`flex flex-col text-left overflow-hidden ${isDark === true ? ' text-black' : 'text-black'}`}>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider opacity-60">
                    {label}
                </span>
                <span className="text-xs md:text-sm font-semibold truncate">
                    {value}
                </span>
            </div>
        </div>
    );
}