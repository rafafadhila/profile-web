'use client'

import React from 'react'
import { useTheme } from '@/app/providers/themeProvider'
import SectionHeader from '../ui/SectionHeader'
import InfoBadge from './InfoBadge'

import { FaEnvelope, FaFlag, FaMapMarkerAlt, FaGraduationCap, FaUser, FaMedal } from 'react-icons/fa'
import ScrollReveal from '../ui/ScrollReveal'

export default function About() {
  const { isDark } = useTheme()

  const birthDate = new Date('2003-03-17');
  const today = new Date();
  let calculatedAge = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    calculatedAge--;
  }

  return (
    <section
      id="about"
      className={`flex flex-col justify-center items-center min-h-[45vh] scroll-mt-[65px]
        ${isDark === true ? 'bg-neutral-900 text-white' : 'bg-neutral-50 text-black'} transition-colors`}
    >
      <div className="container max-w-5xl mx-auto px-5 py-10 text-center">
        <SectionHeader title='About Me' />

        <ScrollReveal direction='down' delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <p className="sm:text-center md:text-justify mb-4 leading-relaxed">
              I&apos;m Rafa Fadhila, a Computer Science graduate from Bina Nusantara University.
              I have one year of experience as a web developer intern, where I built and maintained websites using modern web technologies.
            </p>
            <p className='sm:text-center md:text-justify mb-4 leading-relaxed'>
              I have experience working with Laravel, JavaScript, PHP, HTML, and CSS to build and maintain websites. I focus on creating functional and clean web applications from both the front-end and back-end sides.
            </p>
            <p className='sm:text-center md:text-justify mb-10 leading-relaxed'>
              During my one-year internship as a web developer, I worked as part of a collaborative team where communication and feedback were essential. I learned to work effectively under pressure, manage my time well, and support teammates to achieve shared goals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction='down' delay={0.5}>
          {/* Info Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto mt-6">
            <InfoBadge
              icon={<FaEnvelope className="text-lg" />}
              label="Email"
              value="rafafadhila03@gmail.com"
            />
            <InfoBadge
              icon={<FaMapMarkerAlt className="text-lg" />}
              label="Location"
              value="Kota Bekasi, Indonesia"
            />
            <InfoBadge
              icon={<FaUser className="text-lg" />}
              label="Age"
              value={String(calculatedAge)}
            />
            <InfoBadge
              icon={<FaFlag className="text-lg" />}
              label="Nationality"
              value="Indonesian"
            />
            <InfoBadge
              icon={<FaGraduationCap className="text-lg" />}
              label="Education"
              value="Binus University"
            />
            <InfoBadge
              icon={<FaMedal className="text-lg" />}
              label="Degree"
              value="Computer Science"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}