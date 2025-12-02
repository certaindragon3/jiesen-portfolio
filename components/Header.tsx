'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-8 py-6 flex justify-between items-center"
        >
            <Link href="/" className="text-lg font-light tracking-[0.2em] uppercase hover:tracking-[0.3em] transition-all duration-500">
                Jiesen Huang
            </Link>
            <nav className="flex gap-8 text-sm font-light tracking-wider">
                <Link href="#work" className="relative group">
                    <span className="hover:opacity-70 transition-opacity">Projects</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
                <Link href="#philosophy" className="relative group">
                    <span className="hover:opacity-70 transition-opacity">Philosophy</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
                <Link href="#contact" className="relative group">
                    <span className="hover:opacity-70 transition-opacity">Contact</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
            </nav>
        </motion.header>
    );
}
