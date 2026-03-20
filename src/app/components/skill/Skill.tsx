'use client'

import React from 'react'
import skillCategories from '../../../data//skillsData.json'

import Image from 'next/image'
import SectionHeader from '../ui/SectionHeader'
import ScrollReveal from '../ui/ScrollReveal'
import { useThemeToggle } from '@/hooks/useThemeToggle'

export default function Skill() {

  const { isDark } = useThemeToggle()

  return (

    <section
      id="skill"
      className={`flex flex-col justify-center items-center min-h-[75vh] dark:bg-neutral-950 dark:text-white bg-white text-black transition-colors scroll-m-[65px]`}
    >
      <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
        <SectionHeader title='Skills & Tech' subtitle='The skills and technologies I use in front-end, back-end, and DevOps
        during the website projects I&apos;ve worked on.'/>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-10">
            <ScrollReveal direction='up' delay={0.4}>
              <h3 className="text-xl font-semibold mb-5">{category.title}</h3>
            </ScrollReveal>

            <div className="flex gap-5 justify-center items-center flex-wrap">
              {/* Tambahkan parameter index pada map */}
              {category.tools.map((tool, index) => (
                /* Pindahkan ScrollReveal untuk membungkus masing-masing item */
                /* Gunakan index untuk membuat delay yang dinamis (bertambah 0.1s setiap item) */
                <ScrollReveal key={tool.name} direction='right' delay={0.5 + (index * 0.05)}>
                  <div
                    className={`w-24 h-24 flex justify-center items-center rounded-full ${isDark ? "bg-neutral-200" : "bg-white"
                      } shadow-sm shadow-indigo-300 hover:shadow-md hover:scale-105 transition-all`}
                  >
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      title={tool.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
