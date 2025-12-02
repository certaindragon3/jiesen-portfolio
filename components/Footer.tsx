'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { TextAnimate } from '@/components/ui/text-animate';
import { Github, Linkedin, Mail } from 'lucide-react';

const iconComponents = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
};

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/certaindragon3', icon: 'github' },
        { name: 'LinkedIn', href: '#', icon: 'linkedin' },
        { name: 'Email', href: 'mailto:jiesen@example.com', icon: 'mail' },
    ];

    return (
        <footer id="contact" ref={ref} className="relative px-8 py-32 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
            {/* Gradient orbs */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/10 to-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm tracking-[0.3em] uppercase text-amber-400/60 mb-6 block">Get in Touch</span>
                    <div className="mb-8">
                        <TextAnimate 
                            text="Let's Build Something"
                            type="calmInUp"
                            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight"
                        />
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
                                Together
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                        I&apos;m always interested in projects that make technology more humane—whether that&apos;s preserving cultural heritage, designing for neurodiversity, or building bridges between data and meaning.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex justify-center gap-6 mb-20"
                >
                    {socialLinks.map((link, i) => {
                        const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
                        return (
                            <Link
                                key={i}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                className="group flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300"
                            >
                                <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                            </Link>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0">
                        <span className="text-2xl font-light tracking-[0.1em]">Jiesen Huang</span>
                        <span className="text-gray-500 text-sm">Builder of Refuges</span>
                    </div>
                    <div className="flex items-center gap-8">
                        <span className="text-gray-500 text-sm">© 2025</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                        >
                            <span>Back to top</span>
                            <motion.span
                                animate={{ y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="inline-block"
                            >
                                ↑
                            </motion.span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
