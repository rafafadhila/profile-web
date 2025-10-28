'use client'

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { useTheme } from '@/app/providers/themeProvider'

export default function Footer() {

    const { isDark } = useTheme()

    return (
        <footer className={`${isDark ? 'bg-black text-white' : 'bg-neutral-300 text-black'}`}>
            <div className={`flex flex-col max-w-4xl mx-auto py-5 px-3 text-center divide-gray-800 divide-y`}>
                <div className='flex justify-center items-center gap-6 py-3'>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <FaGithub className='text-2xl' />
                    </a>

                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                    >
                        <FaLinkedin className='text-2xl' />
                    </a>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-8 py-3'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Skill</span>
                    <span>Portfolio</span>
                    <span>Experience</span>
                    <span>Contact</span>
                </div>
                <div className='py-3'>
                    <h3>Rafa Fadhila Web Developer</h3>
                </div>
            </div>
        </footer>
    )
}
