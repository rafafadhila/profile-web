'use client'

import React, { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface ScrollRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    delay?: number
    duration?: number
    className?: string
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6, // Animasi dibuat sedikit lebih lambat (0.6s) agar terkesan halus/subtle
    className = ''
}: ScrollRevealProps) {

    // Konfigurasi arah masuknya elemen
        const variants: Variants = {
            hidden: {
                opacity: 0,
                y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
                x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
            },
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    // use a cubic-bezier array (Easing) instead of a string to satisfy framer-motion types
                    ease: [0.22, 1, 0.36, 1],
                },
            },
        }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false}} // once: true -> animasi hanya jalan sekali saat di-scroll ke bawah
            variants={direction === 'none' ? undefined : variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}