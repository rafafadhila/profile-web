'use client'

import React from 'react'
import { useTheme } from '@/app/providers/themeProvider'
import portfolioData from '@/data/portfoliosData.json'
import Image from 'next/image'

export default function Portfolio() {
    const { isDark } = useTheme()

    return (
        <section
            id="portfolio"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px]
        ${isDark ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <h1 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">
                    Portfolio
                </h1>

                <h2 className="text-xl font-semibold mb-6">
                    A collection of projects I worked on during my studies and internship, showcasing my experience in developing and improving web applications.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 tracking-wide">
                    {portfolioData.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-md overflow-hidden shadow-md ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-black'
                                } transition-colors`}
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    className="object-cover"
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index < 2} // optional: preloads first few images
                                />
                            </div>

                            <div className="px-5 py-4 text-left">
                                <h2 className="font-semibold text-xl mb-2">{project.title}</h2>
                                <p className="mb-2">{project.description}</p>
                                <div className="flex flex-row gap-2 flex-wrap">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-sm font-bold border-indigo-800 border-2 rounded-3xl p-2"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
