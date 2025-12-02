'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TextAnimate } from '@/components/ui/text-animate';
import Image from 'next/image';

export default function Hero() {
    const manifesto = [
        "For a glacier that looked eternal at eight—but isn't.",
        "For a kitchen that's been cooking for 26 years—soon to go silent.",
        "For someone I love, who fights the browser every night just to finish one article.",
    ];

    return (
        <section className="relative h-screen bg-[#0a0a0a] text-white overflow-hidden">
            {/* Spotlight effect */}
            <Spotlight 
                className="-top-40 left-0 md:left-60 md:-top-20" 
                fill="rgba(93, 43, 125, 0.2)" 
            />
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]" 
                fill="rgba(217, 72, 166, 0.15)" 
            />

            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#5D2B7D]/30 to-[#D948A6]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#D948A6]/20 to-white/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />

            {/* Main content container */}
            <div className="relative z-10 h-full flex flex-col lg:flex-row">
                {/* Left side - Text content */}
                <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-16 lg:py-0 lg:max-w-[40%]">
                    {/* Hero Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                        className="mb-10 md:mb-14"
                    >
                        <div className="relative">
                            {/* Decorative accent line */}
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '3rem' }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-[2px] bg-gradient-to-r from-[#D948A6] to-transparent mb-6"
                            />
                            
                            {/* Main title */}
                            <h1 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] font-light tracking-tight text-white">
                                I am a builder of{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5D2B7D] via-[#D948A6] to-white">
                                    refuges.
                                </span>
                            </h1>
                        </div>
                    </motion.div>

                    {/* Manifesto - Poetic statements */}
                    <div className="space-y-4 mb-10 md:mb-12 pl-4 border-l border-[#D948A6]/30">
                        {manifesto.map((item, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                                className="text-sm sm:text-base text-white/50 leading-relaxed font-light italic"
                            >
                                {item}
                            </motion.p>
                        ))}
                    </div>

                    {/* Core Philosophy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 1 }}
                        className="mb-10"
                    >
                        <TextGenerateEffect
                            words="I use computation to hold what the world forgets. To make the invisible visible, the fragile durable, the hostile humane."
                            className="max-w-xl text-sm sm:text-base"
                            textClassName="text-white/80 font-light"
                            duration={0.6}
                        />
                    </motion.div>

                    {/* Portfolio statement */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40 mb-6"
                    >
                        This portfolio is my proof. These interfaces are my practice.
                    </motion.p>

                    {/* Welcome CTA - Bold capsule */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.5, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                        <button 
                            onClick={() => {
                                const workSection = document.getElementById('work');
                                if (workSection) {
                                    workSection.scrollIntoView({ behavior: 'instant' });
                                }
                            }}
                            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden cursor-pointer"
                        >
                            {/* Animated gradient border */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5D2B7D] via-[#D948A6] to-white opacity-60" />
                            <span className="absolute inset-[1px] rounded-full bg-[#0a0a0a]" />
                            
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5D2B7D]/20 via-[#D948A6]/20 to-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Text */}
                            <span className="relative text-base sm:text-lg md:text-xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D948A6] to-[#5D2B7D]">
                                Welcome to my realm
                            </span>
                            
                            {/* Arrow icon */}
                            <motion.span 
                                className="relative text-[#D948A6]"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                ↓
                            </motion.span>
                        </button>
                    </motion.div>
                </div>

                {/* Right side - Nebula image */}
                <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[61.8%] items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        className="relative h-full flex items-center"
                        style={{ transform: 'translateX(50%)' }}
                    >
                        <Image
                            src="/nebula.webp"
                            alt="Nebula - 3D Rendering"
                            width={1200}
                            height={1200}
                            className="h-full w-auto max-w-none object-contain"
                            priority
                        />
                        {/* Glow effect behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#D948A6]/10 to-[#5D2B7D]/20 blur-3xl -z-10" />
                    </motion.div>

                    {/* Artwork info - bottom right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="absolute bottom-8 right-8 text-right"
                    >
                        <p className="text-white/90 text-sm font-medium tracking-wide">&ldquo;Nebula&rdquo;</p>
                        <p className="text-gray-400 text-xs mt-1">3D Rendering · Cinema 4D</p>
                        <p className="text-gray-500 text-xs mt-2">Curated at Duke University</p>
                        <p className="text-gray-500 text-xs">Smith Warehouse</p>
                    </motion.div>
                </div>

                {/* Mobile Nebula image */}
                <div className="lg:hidden flex justify-center pb-24 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        className="relative w-full max-w-[300px]"
                    >
                        <Image
                            src="/nebula.webp"
                            alt="Nebula - 3D Rendering"
                            width={300}
                            height={300}
                            className="w-full h-auto object-contain rounded-xl"
                            priority
                        />
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#5D2B7D]/40 via-[#D948A6]/30 to-white/20 rounded-2xl blur-xl -z-10" />
                        
                        {/* Mobile artwork info */}
                        <div className="mt-4 text-center">
                            <p className="text-white/90 text-xs font-medium tracking-wide">&ldquo;Nebula&rdquo;</p>
                            <p className="text-gray-400 text-[10px] mt-1">3D Rendering · Cinema 4D</p>
                            <p className="text-gray-500 text-[10px] mt-1">Curated at Duke University · Smith Warehouse</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
