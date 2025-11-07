'use client'

import React from 'react'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { useTheme } from '@/app/providers/themeProvider'

export default function Navbar() {

    const { scrollToSection } = useSmoothScroll()
    const { isDark, toggleTheme } = useTheme()

    return (
        <header className={`fixed w-screen ${isDark === true ? 'bg-neutral-950 text-white' : 'bg-white text-black'} transition-colors z-10 `}>
            <div className={` navbar px-5 max-w-6xl mx-auto`}>

                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`btn btn-ghost text-xl ${isDark === true ? 'text-white' : 'text-black'} transition-colors`}>
                        RF.connect
                    </button>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
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

                <div className="navbar-end">
                    <button
                        onClick={toggleTheme}
                        className={`btn ${isDark === true ? 'bg-neutral-950 text-white' : 'bg-white'} transition-colors`} >
                        {isDark === true ? '☀️' : '🌙'}
                    </button>
                </div>

            </div>
        </header>
    )
}
