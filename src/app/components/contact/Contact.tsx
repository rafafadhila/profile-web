'use client'

import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

import { useTheme } from '@/app/providers/themeProvider'
import FormMessage from '@/features/message/components/FormMessage';

export default function Contact() {

    const { isDark, toggleTheme } = useTheme()

    return (
        <section
            id="contact"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px] ${isDark ? 'bg-neutral-900' : 'bg-neutral-50 text-black'} transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <h1 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">Contact</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-[45%_55%] gap-2 md:gap-10 items-center'>

                    <div className='flex flex-col items-center gap-6'>
                        <h2 className='text-xl font-semibold'>
                            Let's Build Our Next Project Together!
                        </h2>
                        <a href='tel:+6281388180048'
                        className='flex gap-3 border-2 border-indigo-800 px-3 py-2 rounded-2xl hover:cursor-pointer hover:scale-110 shadow-md transition-all'>
                            <FaPhone className='text-2xl'/>
                            <span>+62 813-8818-0048</span>
                        </a>
                        <a href='mailto:rafafadhila03@gmail.com' 
                        className='flex gap-3 border-2 border-indigo-800 px-3 py-2 rounded-2xl hover:cursor-pointer hover:scale-110 shadow-md transition-all'>
                            <GoMail className='text-2xl'/>
                            <span>rafafadhila03@gmail.com</span>
                        </a>
                        <div className="flex gap-3 mb-10">
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
                    </div>
                    
                    <FormMessage></FormMessage>

                </div>


            </div>
        </section>
    )
}
