'use client'

import React from 'react'

import { useTheme } from '@/app/providers/themeProvider'

export default function Portfolio() {

    const { isDark, toggleTheme } = useTheme()

    return (
        <section
            id="portfolio"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px]
                ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <h1 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">Portfolio</h1>

                <h2 className='text-xl font-semibold mb-6'>
                    A collection of projects I worked on during my studies and internship, showcasing my experience in developing and improving web applications.
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                    <div className={`rounded-md overflow-hidden shadow-md
                        ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-white text-black'} transition-colors`}>
                        <div className='w-full'>
                            <img
                                className='w-full object-cover'
                                src="./portfolio/ludolog.png" alt="" />
                        </div>
                        <div className='px-5 py-4 text-left'>
                            <h2 className='font-semibold text-xl mb-2'>Web Apps for Game Tracking </h2>
                            <p className='mb-2'>This project aimed to solve issues with game discovery and tracking. My main duties involved web design and documentation creation. A primary challenge was using Figma to develop an effective and memorable UI. Ultimately, the user feedback received has been very positive.</p>
                            <div className='flex flex-row gap-2'>
                                <span className='text-sm font-bold border border-indigo-800 rounded-3xl p-2'>Laravel</span>
                                <span className='text-sm font-bold border border-indigo-800 rounded-3xl p-2'>React</span>
                            </div>
                        </div>
                    </div>

                    <div className={`rounded-md overflow-hidden shadow-md
                        ${isDark === true ? 'bg-neutral-800 text-white' : 'bg-white text-black'} transition-colors`}>
                        <div className='w-full'>
                            <img
                                className='w-full object-cover'
                                src="./portfolio/ludolog.png" alt="" />
                        </div>
                        <div className='px-5 py-4 text-left'>
                            <h2 className='font-semibold text-xl mb-2'>Developed Company Profile for PT.Phizeta </h2>
                            <p className='mb-2'>The primary goal of this web project was to enhance the company's online visibility and presence. My core tasks were to develop the Company Profile website and an internal Dashboard for component editing. The tech stack utilized for this development was Laravel and PostgreSQL. The final presentation to my supervisor was highly successful and well-received.</p>
                            <div className='flex flex-row gap-2'>
                                <span className='text-sm font-bold border border-indigo-800 rounded-3xl p-2'>Laravel</span>
                                <span className='text-sm font-bold border border-indigo-800 rounded-3xl p-2'>PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
