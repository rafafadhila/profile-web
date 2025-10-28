'use client'

import React from 'react'

import { useTheme } from '@/app/providers/themeProvider'

export default function Experience() {

    const { isDark } = useTheme()

    return (
        <section
            id="experience"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px] ${isDark ? 'bg-neutral-950' : 'bg-white text-black'} transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <h1 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">Experience</h1>

                <h2 className='text-xl font-semibold mb-6'>
                    A summary of my work experience
                </h2>

                <div className=''>
                    <div className={`max-w-full rounded-md overflow-hidden ${isDark ? 'bg-neutral-800 text-white' : 'bg-neutral-50 shadow-md text-black'} transition-colors`}>
                        <div className='px-4 py-5 text-left'>
                            <h2 className='font-semibold text-2xl mb-2'>Intern Web Developer</h2>
                            <h2 className='font-semibold text-lg mb-2'>PT.ANOMALI LINTAS CAKRAWALA <span className='text-sm ml-3'>2023-2024</span></h2>
                            <p className=' mb-3'>During my one-year internship as a web developer, I was responsible for designing and developing company profile websites, as well as creating internal applications for office use. I used the Laravel framework as my main development tool.</p>
                            <ul className=' list-disc ml-4'>
                                <li >Mendesign dan merancang Website company profile</li>
                                <li >Membuat dan memperbaiki dokumentasi website yang dirancang team</li>
                                <li >Membuat aplikasi sederhana untuk keperluan kantor</li>
                                <li >Testing dan debugging aplikasi yang dirancang team</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
