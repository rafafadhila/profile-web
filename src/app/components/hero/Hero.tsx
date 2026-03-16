'use client'

import React from 'react'
import Image from 'next/image'

import { useTheme } from '@/app/providers/themeProvider';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import SocialMediaLink from '../ui/SocialMediaLink';

export default function Hero() {

  const { scrollToSection } = useSmoothScroll()
  const { isDark } = useTheme()

  return (
    <section
      id="hero"
      className={`${isDark ? 'bg-neutral-950' : 'bg-white'} transition-colors`}

    >
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center max-w-5xl min-h-screen mx-auto px-4 gap-5'>
        <div id="image-container" className="p-5">
          <Image
            src="/images/profile-pic.jpg"
            alt="profile picture rafa"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

        <div className={`about-me text-center md:text-left ${isDark ? 'text-white' : 'text-black'} transition-colors`}>
          <h1 className="text-[52px] font-extrabold mb-1 text-center md:text-left">
            Hi, I&apos;m Rafa Fadhila
          </h1>
          <h3 className="text-[20px] font-medium mb-5 text-center md:text-left">
            I&apos;m a Web Developer, And Web Designer
          </h3>
          {/* socmed */}
          <SocialMediaLink></SocialMediaLink>

          <button
            onClick={() => scrollToSection('about')}
            className="bg-purple-800 hover:bg-purple-600 text-white px-4 py-2 rounded-sm text-md font-semibold transition-color mx-auto w-fit"
          >
            Explore Me
          </button>
        </div>
      </div>

    </section>
  )
}
