'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
    const skills = [
        "Graphic Design",
        "Digital Design",
        "Web Design",
        "Branding",
        "Packaging Design",
        "3D Design"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % skills.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [skills.length]);

    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-12">
            <div className="max-w-[1200px]">
                <div className="h-[clamp(3rem,10vw,8rem)] overflow-hidden mb-8">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={index}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(3rem,10vw,8rem)] leading-none font-medium tracking-tighter text-black"
                        >
                            {skills[index]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                <div className="max-w-2xl">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-900">
                        Graphic designer based in Newcastle, crafting fresh and technically focused solutions for branding, print, and digital design. My mission? To build lasting connections with businesses and empower them to communicate effectively through creative design.
                    </p>
                </div>
            </div>
        </section>
    );
}
