"use client";

import React, { useState } from "react";
import portfolioData from "@/data/portfoliosData.json";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Portfolio() {
    const { isDark } = useThemeToggle();
    const { scrollToSection } = useSmoothScroll();

    const [showAll, setShowAll] = useState(false);

    const reversedData = [...portfolioData].reverse();
    const displayedProjects = showAll ? reversedData : reversedData.slice(0, 2);

    const handleToggleShow = () => {
        if (showAll) {
            setShowAll(false);
            scrollToSection("portfolio");
        } else {
            setShowAll(true);
        }
    };

    return (
        <section
            id="portfolio"
            className={`flex flex-col justify-center items-center min-h-[45vh] scroll-m-[65px] dark:bg-neutral-900 dark:text-white bg-neutral-50 text-black transition-colors`}
        >
            <div className="container max-w-4xl mx-auto px-5 py-10 text-center">
                <SectionHeader
                    title="Portfolio"
                    subtitle="A collection of projects I worked on during my studies and internship, showcasing my experience in developing and improving web applications."
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 tracking-wide"
                >
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <ScrollReveal key={project.id} direction="up" delay={0.5 + index * 0.05} className="h-full">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    key={project.id}
                                    className={`flex flex-col rounded-xl overflow-hidden shadow-md h-full ${isDark ? "bg-neutral-800 text-white" : "bg-white text-black"
                                        } transition-colors`}
                                >
                                    <div className="w-full h-64 p-3 shrink-0">
                                        <div className="relative w-full h-full rounded-md overflow-hidden">
                                            <Image
                                                className="object-cover"
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority={
                                                    reversedData.findIndex((p) => p.id === project.id) < 2
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="px-5 py-4 text-left flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2 gap-3">
                                            <h2 className="font-semibold text-xl leading-tight">
                                                {project.title}
                                            </h2>

                                            {/* Wadah Ikon */}
                                            <div className="flex gap-2 mt-1 shrink-0">
                                                {project.repo && (
                                                    <a
                                                        href={project.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center p-2 rounded-md border transition-all duration-300 ${isDark
                                                            ? "bg-neutral-700 border-neutral-600 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white"
                                                            : "bg-neutral-100 border-neutral-200 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:shadow-md"
                                                            } `}
                                                        title="View Source Code"
                                                        aria-label="View Source Code on GitHub"
                                                    >
                                                        <FaGithub className="text-sm" />
                                                    </a>
                                                )}
                                                {/* Cek apakah demo ada isinya */}
                                                {project.demo && (
                                                    <a
                                                        href={project.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center justify-center p-2 rounded-md border transition-all duration-300 ${isDark
                                                            ? "bg-neutral-700 border-neutral-600 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white"
                                                            : "bg-neutral-100 border-neutral-200 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white hover:shadow-md"
                                                            } `}
                                                        title="View Live Demo"
                                                        aria-label="View Live Website Demo"
                                                    >
                                                        <FaGlobe className="text-sm" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="mb-4 text-sm flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-row gap-2 flex-wrap mt-auto">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs font-bold border-indigo-800 border-2 rounded-3xl px-3 py-1.5"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {portfolioData.length > 2 && (
                    <motion.div layout className="mt-8 flex justify-center">
                        <button
                            onClick={handleToggleShow}
                            className="bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-600 transition-colors shadow-md"
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
