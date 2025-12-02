'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Sprout, Sparkles, Handshake, Star } from 'lucide-react';

const iconMap = {
    sprout: Sprout,
    sparkles: Sparkles,
    handshake: Handshake,
    star: Star,
};

export default function Principles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const principles = [
        {
            number: "01",
            title: "Warm Technological Humanism",
            description: "Technology appears as a warm, patient companion—not a productivity machine. The interfaces I build don't shout for attention; they hold space for human experience to unfold.",
            icon: "sprout"
        },
        {
            number: "02",
            title: "Digital Humanity",
            description: "I use computation to hold what the world forgets. Every project asks: how can interactive media slow the erasure of knowledge, culture, and lived experience?",
            icon: "sparkles"
        },
        {
            number: "03",
            title: "Copilot, Not Autopilot",
            description: "AI surfaces context; humans make decisions. My systems show their reasoning, their sources, their uncertainty. Accountability isn't optional when culture is at stake.",
            icon: "handshake"
        },
        {
            number: "04",
            title: "Progress at the Scale of One",
            description: "The ambition is humble: to change the world not in the abstract, but in the way one distracted student reads one difficult article, or one endangered kitchen passes on its wisdom.",
            icon: "star"
        }
    ];

    return (
        <section id="philosophy" ref={ref} className="relative px-8 py-32 bg-white text-[#0a0a0a] overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="w-full h-full" style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="max-w-[1400px] mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <span className="text-sm tracking-[0.3em] uppercase text-amber-600/80 mb-4 block">My Compass</span>
                    <GradientHeading size="xl" variant="default" weight="thin">
                        Design Philosophy
                    </GradientHeading>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-amber-50/0 to-violet-50/0 group-hover:from-amber-50 group-hover:to-violet-50 rounded-2xl transition-all duration-500" />
                            <div className="relative p-6 md:p-8">
                                <div className="flex items-start gap-6 mb-6">
                                    {(() => {
                                        const IconComponent = iconMap[principle.icon as keyof typeof iconMap];
                                        return <IconComponent className="w-10 h-10 text-amber-600" strokeWidth={1.5} />;
                                    })()}
                                    <div>
                                        <span className="text-xs font-medium text-amber-600 tracking-[0.2em] uppercase">{principle.number}</span>
                                        <h3 className="text-2xl md:text-3xl font-light mt-2 tracking-tight">{principle.title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
