'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/app/providers/themeProvider'
import testimonialData from '@/data/testimonialData.json'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function Testimonial() {
    const { isDark } = useTheme()
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialData.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
    }

    const { name, company, image, feedback } = testimonialData[currentIndex]

    return (
        <section
            id="testimonial"
            className={`flex flex-col justify-center items-center min-h-[55vh] scroll-m-[65px] ${isDark ? 'bg-neutral-950 text-white' : 'bg-white text-black'
                } transition-colors`}
        >
            <div className="container max-w-5xl mx-auto px-5 md:px-10 py-10 text-center">
                <SectionHeader title='Feedback Corner' subtitle='Thoughts and impressions from those who&apos;ve collaborated with me.' />

                <ScrollReveal direction='up' delay={0.4}>

                    {/* Card Section */}
                    <div
                        className={`relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-[480px] mx-auto rounded-md overflow-hidden ${isDark
                            ? 'bg-neutral-800 text-white'
                            : 'bg-neutral-50 shadow-md text-black'
                            } transition-colors`}
                    >
                        <div className="px-5 sm:px-6 py-6 md:py-8 flex flex-col items-center gap-3">
                            <div className="relative bg-white w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full overflow-hidden">
                                <Image src={image} alt={name} fill className="object-cover" />
                            </div>

                            <h2 className="font-semibold text-base sm:text-lg">{name}</h2>
                            <h3 className="text-xs sm:text-sm font-semibold text-center">
                                {company}
                            </h3>

                            <p className="italic text-center text-sm sm:text-base leading-relaxed px-2 sm:px-0">
                                “{feedback}”
                            </p>
                        </div>

                        {/* Tombol Navigasi */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl font-bold opacity-50 hover:opacity-100 transition"
                        >
                            ◂
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-lg sm:text-xl font-bold opacity-50 hover:opacity-100 transition"
                        >
                            ▸
                        </button>
                    </div>

                    {/* Indicator */}
                    <div className="flex justify-center mt-4 gap-2">
                        {testimonialData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${index === currentIndex
                                    ? 'bg-indigo-600 scale-110'
                                    : isDark
                                        ? 'bg-neutral-700'
                                        : 'bg-neutral-300'
                                    }`}
                            ></button>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>

    )
}
