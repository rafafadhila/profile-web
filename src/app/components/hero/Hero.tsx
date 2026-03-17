'use client'

import React from 'react'
import Image from 'next/image'

import { useTheme } from '@/app/providers/themeProvider';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import SocialMediaLink from '../ui/SocialMediaLink';
import { FaChevronDown } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';

export default function Hero() {

  const { scrollToSection } = useSmoothScroll()
  const { isDark } = useTheme()

  return (
    <section
      id="hero"
      className={`${isDark ? 'bg-neutral-950' : 'bg-white'} transition-colors`}
    >
      <div className='flex flex-col md:flex-row justify-center md:justify-center items-center max-w-5xl min-h-screen mx-auto px-4 gap-3 pt-[64px] md:pt-0'>

        <div id="image-container" className="p-5 shrink-0">
          <Image
            src="/images/profile-pic.jpg"
            alt="profile picture rafa"
            width={300}
            height={300}
            className="w-55 h-55 sm:w-65 sm:h-60 md:w-[300px] md:h-[300px] rounded-full object-cover"
            priority
          />
        </div>

        <div className={`about-me flex flex-col gap-3 text-center md:text-left p-5 ${isDark ? 'text-white' : 'text-black'} transition-colors`}>
          <h1 className="text-[52px] font-extrabold text-center md:text-left">
            Hi, I&apos;m Rafa Fadhila
          </h1>
          <h3 className="text-[20px] font-medium text-center md:text-left">
            I&apos;m a Web Developer, And Web Designer
          </h3>
          {/* socmed */}
          <SocialMediaLink></SocialMediaLink>

          <button
            onClick={() => scrollToSection('about')}
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full transition-colors hover:bg-indigo-500/20 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
            aria-label="Scroll to About section"
          >
            <SlArrowDown className="text-2xl md:text-3xl" />
          </button>

        </div>
      </div>
    </section>
  )
}