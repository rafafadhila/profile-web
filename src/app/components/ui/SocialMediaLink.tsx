import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function SocialMediaLink() {
    return (
        <div className="flex gap-3 justify-center md:justify-start">
            <a
                href="https://github.com/rafafadhila"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <FaGithub className='text-2xl' />
            </a>

            <a
                href="https://linkedin.com/in/rafa-fadhila-3817231a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
            >
                <FaLinkedin className='text-2xl' />
            </a>
        </div>
    )
}
