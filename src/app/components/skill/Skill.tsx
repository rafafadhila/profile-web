'use client'

import React from 'react'
import skillCategories from '../../../data//skillsData.json'

import { useTheme } from '@/app/providers/themeProvider'
import Image from 'next/image'

export default function Skill() {

  const { isDark } = useTheme()

  return (

  <section
    id="skill"
    className={`flex flex-col justify-center items-center min-h-[75vh] ${isDark ? "bg-neutral-950 text-white" : "bg-white text-black"
      } transition-colors scroll-m-[65px]`}
  >
    <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
      <h1 className="text-4xl font-semibold mb-12 underline-offset-8 underline decoration-indigo-800">
        Skills
      </h1>

      <h2 className="text-xl font-semibold mb-6">
        The skills and technologies I use in front-end, back-end, and DevOps
        during the website projects I&apos;ve worked on.
      </h2>

      {skillCategories.map((category) => (
        <div key={category.title} className="mb-10">
          <h3 className="text-xl font-semibold mb-5">{category.title}</h3>

          <div className="flex gap-5 justify-center items-center flex-wrap">
            {category.tools.map((tool) => (
              <div
                key={tool.name}
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
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}
