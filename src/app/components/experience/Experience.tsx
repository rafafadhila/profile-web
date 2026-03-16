'use client'

import React from 'react'

import { useTheme } from '@/app/providers/themeProvider'
import experienceData from '@/data/experiencesData.json'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'

export default function Experience() {

    const { isDark } = useTheme()

    return (
        <section
            id="experience"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px] ${isDark ? 'bg-neutral-950' : 'bg-white text-black'} transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <SectionHeader title='Experience' subtitle='A summary of my work experience' />

                <ScrollReveal direction='up' delay={0.4}>
                    {experienceData.map((exp, index) => (
                        <div key={index} className={`max-w-full rounded-md overflow-hidden ${isDark ? 'bg-neutral-800 text-white' : 'bg-neutral-50 shadow-md text-black'} transition-colors tracking-wide`}>
                            <div className="px-4 py-5 text-left">
                                <h2 className="font-semibold text-2xl mb-2">{exp.title}</h2>
                                <h2 className="font-semibold text-lg mb-2">{exp.company} <span className="text-sm ml-3">{exp.year}</span></h2>
                                <p className="mb-3">{exp.description}</p>
                                <ul className="list-disc ml-4 space-y-1.5 ">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </ScrollReveal>

            </div>
        </section>
    )
}
