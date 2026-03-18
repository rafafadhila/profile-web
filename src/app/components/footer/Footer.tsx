'use client'

import React from 'react'


import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import SocialMediaLink from '../ui/SocialMediaLink'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export default function Footer() {

    const { isDark } = useThemeToggle()
    const { scrollToSection } = useSmoothScroll()

    return (
        <footer className={`dark:bg-black dark:text-white bg-neutral-300 text-black`}>
            <div className={`flex flex-col max-w-4xl mx-auto py-5 px-3 text-center divide-gray-800 divide-y`}>
                <div className='flex justify-center items-center gap-6 py-3'>
                    <SocialMediaLink></SocialMediaLink>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8 py-3'>
                    <ul className="menu menu-horizontal px-1 font-semibold flex flex-wrap justify-center">
                        <li>
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="hover:underline decoration-indigo-500"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="hover:underline decoration-indigo-500"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('skill')}
                                className="hover:underline decoration-indigo-500"
                            >
                                Skill
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="hover:underline decoration-indigo-500"
                            >
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="hover:underline decoration-indigo-500"
                            >
                                Experience
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="hover:underline decoration-indigo-500"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="py-3 text-center text-sm text-neutral-500">
                    © {new Date().getFullYear()} Created by <span className="font-semibold text-indigo-700">Rafa Fadhila</span>
                </div>

            </div>
        </footer>
    )
}
