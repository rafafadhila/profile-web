'use client'

import React from 'react'

import { useTheme } from '@/app/providers/themeProvider'

interface AboutProps {
  isDark: boolean
}

export default function About() {

  const { isDark, toggleTheme } = useTheme()

  return (
    <section
      id="about"
      className={`flex flex-col justify-center items-center min-h-[45vh] scroll-mt-[65px]
        ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} transition-colors`}
    >
      <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
        <h2 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">About Me</h2>

        <p className="sm:text-left md:text-justify mb-6 leading-relaxed">
          I'm Rafa Fadhila, a Computer Science graduate from Bina Nusantara University.
          I have one year of experience as a web developer intern, where I built and maintained websites using modern web technologies.
        </p>
        <p className='text-justify mb-6 leading-relaxed'>
          I have experience working with Laravel, JavaScript, PHP, HTML, and CSS to build and maintain websites. I focus on creating functional and clean web applications from both the front-end and back-end sides.
        </p>
        <p className='text-justify mb-6 leading-relaxed'>
          During my one-year internship as a web developer, I worked as part of a collaborative team where communication and feedback were essential. I learned to work effectively under pressure, manage my time well, and support teammates to achieve shared goals.
        </p>

        <div
          id="info"
          className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 max-w-xl mx-auto text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Email:</span>
            <span>rafafadhila03@gmail.com</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Nationality:</span>
            <span>Indonesian</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Location:</span>
            <span>Kota Bekasi, Indonesia</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Education:</span>
            <span>Binus University</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Age:</span>
            <span>22</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <span className="font-semibold">Degree:</span>
            <span>Computer Science</span>
          </div>
        </div>
      </div>
    </section>
  )
}
