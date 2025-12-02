'use client';

import { motion } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TextAnimate } from '@/components/ui/text-animate';

export default function Hero() {
    const manifesto = [
        "For a glacier that looked eternal at eight—but isn't.",
        "For a kitchen that's been cooking for 26 years—soon to go silent.",
        "For someone I love, who fights the browser every night just to finish one article.",
    ];

    return (
        <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center">
            {/* Spotlight effect */}
            <Spotlight 
                className="-top-40 left-0 md:left-60 md:-top-20" 
                fill="rgba(251, 191, 36, 0.15)" 
            />
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]" 
                fill="rgba(167, 139, 250, 0.1)" 
            />

            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/20 to-rose-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 lg:px-24 py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="mb-8"
                >
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-sm tracking-[0.3em] uppercase text-amber-400/80 mb-6"
                    >
                        Welcome to my realm
                    </motion.p>
                    
                    <div className="mb-12">
                        <TextAnimate 
                            text="I am a builder"
                            type="calmInUp"
                            className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light tracking-tight text-white"
                        />
                        <h1 className="text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
                                of refuges.
                            </span>
                        </h1>
                    </div>
                </motion.div>

                <div className="max-w-3xl space-y-4 mb-16">
                    {manifesto.map((item, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                        >
                            {item}
                        </motion.p>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="pt-8 border-t border-white/10"
                >
                    <TextGenerateEffect
                        words="I use computation to hold what the world forgets. To make the invisible visible, the fragile durable, the hostile humane."
                        className="max-w-4xl"
                        duration={0.8}
                    />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
