'use client'

import React from 'react'

import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

import FormMessage from '@/features/message/components/FormMessage';
import SocialMediaLink from '../ui/SocialMediaLink';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export default function Contact() {

    const { isDark } = useThemeToggle()

    return (
        <section
            id="contact"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px] dark:bg-neutral-900 dark:text-white bg-neutral-50 text-black transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <SectionHeader title='Contact' />
                <div className='grid sm:grid-cols-1 md:grid-cols-[45%_55%] gap-2 md:gap-10 items-center'>

                    <ScrollReveal direction='right' delay={0.4}>
                        <div className='flex flex-col items-center gap-6'>
                            <h2 className='text-xl font-semibold'>
                                Lets&apos; Build Our Next Project Together!
                            </h2>
                            <a href='tel:+6281388180048'
                                className='flex gap-3 border-2 border-indigo-800 px-3 py-2 rounded-2xl hover:cursor-pointer hover:scale-110 shadow-md transition-all'>
                                <FaPhone className='text-2xl' />
                                <span>+62 813-8818-0048</span>
                            </a>
                            <a href='mailto:rafafadhila03@gmail.com'
                                className='flex gap-3 border-2 border-indigo-800 px-3 py-2 rounded-2xl hover:cursor-pointer hover:scale-110 shadow-md transition-all'>
                                <GoMail className='text-2xl' />
                                <span>rafafadhila03@gmail.com</span>
                            </a>
                            {/* socmed */}
                            <SocialMediaLink></SocialMediaLink>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction='left' delay={0.4}>
                        <FormMessage />
                    </ScrollReveal>

                </div>


            </div>
        </section>
    )
}
