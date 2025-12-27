'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { getImgUrl } from '@/lib/utils';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Heart, Minus, Eye, Accessibility, ChevronDown } from 'lucide-react';

const iconMap = {
    heart: Heart,
    minus: Minus,
    eye: Eye,
    accessibility: Accessibility,
};

export default function Principles() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const principles = [
        {
            title: "Warm Technological Humanism",
            subtitle: "Technology that holds, not extracts.",
            quote: "Digital tools are sharp enough to capture the data, but soft enough to hold the culture.",
            description: [
                "The tech industry optimizes for engagement, extraction, and scale. I optimize for care.",
                "My work begins with a simple question: who is struggling, and how can computation make their world a little more bearable? A reader with ADHD fighting a hostile browser. A retiring chef whose muscle memory has no backup. A species that vanished before the law noticed.",
                "I build interfaces that hold what the world forgets—not to monetize attention, but to create refuge."
            ],
            icon: "heart"
        },
        {
            title: "Subtractive Engineering",
            subtitle: "Remove to preserve. Less infrastructure, longer lifespan.",
            quote: "In a world devouring its own archives, I chose to etch, not entomb.",
            description: [
                "Most engineers add. I subtract.",
                "When I realized my biodiversity archive depended on servers that could die, I tore down the backend and fossilized the data into static JSON. When I built a virtual museum for a 26-year-old kitchen, I rejected databases entirely—the site lives as pure files, archivable on a USB drive, runnable decades from now.",
                "True resilience isn't about building fortresses. It's about removing the things that rot."
            ],
            icon: "minus"
        },
        {
            title: "Transparent by Default",
            subtitle: "Show your reasoning. Let humans decide.",
            quote: "Accountability isn't optional. The interface shows its sources.",
            description: [
                "Black boxes create dependence. Transparency builds trust.",
                "When my AI translation tool suggests a phrase, it shows why—the source document, the similarity score, the retrieval path. When my reading assistant refuses a question, it explains the boundary.",
                "I design systems where the human is always the final author. Copilot, not autopilot. The machine proposes; the person disposes."
            ],
            icon: "eye"
        },
        {
            title: "Accessibility as Aesthetics",
            subtitle: "Design for the margins; everyone benefits.",
            quote: "Choice is respect.",
            description: [
                "Accessibility is not a compliance checkbox. It is a design stance—a way of seeing.",
                "When I built color-blind modes for my species visualization, I didn't treat it as an edge case; I treated it as an alternate aesthetic, equally valid. When I offered three AI providers in my translation tool, I wasn't just being practical—I was acknowledging that access looks different for a professor in Kunshan and a scholar in Durham.",
                "Universal design isn't about lowering the bar. It's about widening the door."
            ],
            icon: "accessibility"
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
                    className="mb-24 relative"
                >
                    {/* Avatar Image - positioned to the right of title */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden md:block absolute right-0 lg:right-20 top-1/2 -translate-y-1/2"
                    >
                        <Image
                            src={getImgUrl("/avatar/2.webp")}
                            alt="Avatar"
                            width={150}
                            height={150}
                            className="rounded-2xl object-cover brightness-110 contrast-105"
                        />
                    </motion.div>

                    {/* Text Content - stays centered */}
                    <div className="text-center">
                        <span className="text-sm tracking-[0.3em] uppercase text-amber-600/80 mb-4 block">My Compass</span>
                        <GradientHeading size="xl" variant="default" weight="thin">
                            Design Philosophy
                        </GradientHeading>
                        <p className="text-gray-500 mt-4 text-lg italic">Four principles.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {principles.map((principle, index) => (
                        <PrincipleCard 
                            key={index} 
                            principle={principle} 
                            index={index} 
                            isInView={isInView}
                            maxDescLength={Math.max(...principles.map(p => p.description.join('').length))}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PrincipleCard({ 
    principle, 
    index, 
    isInView,
    maxDescLength
}: { 
    principle: { 
        title: string; 
        subtitle: string; 
        quote: string; 
        description: string[]; 
        icon: string; 
    }; 
    index: number; 
    isInView: boolean;
    maxDescLength: number;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            className="group relative h-full"
        >
            {/* Card with border glow effect */}
            <div 
                className={`relative bg-white rounded-2xl p-8 md:p-10 border transition-all duration-500 cursor-pointer h-full flex flex-col
                    ${isExpanded 
                        ? 'border-amber-500 shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]' 
                        : 'border-transparent group-hover:border-amber-500 group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]'
                    }`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Glow overlay - simplified for Safari performance */}
                <div 
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300
                        ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    style={{ 
                        boxShadow: '0 0 30px -8px rgba(245,158,11,0.35)',
                        // Use transform: translateZ(0) to force GPU acceleration on Safari
                        transform: 'translateZ(0)'
                    }} 
                />
                
                {/* Header with icon */}
                <div className="flex items-center justify-between mb-6">
                    {(() => {
                        const IconComponent = iconMap[principle.icon as keyof typeof iconMap];
                        return <IconComponent className="w-10 h-10 text-amber-600" strokeWidth={1.5} />;
                    })()}
                    <div 
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                        <ChevronDown className="w-5 h-5 text-amber-500/50" />
                    </div>
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-amber-600 italic text-base mb-5">{principle.subtitle}</p>

                {/* Quote */}
                <blockquote className="border-l-2 border-amber-600/40 pl-4 mb-5">
                    <p className="text-gray-500 italic text-sm leading-relaxed">&ldquo;{principle.quote}&rdquo;</p>
                </blockquote>

                {/* Content area with fixed minimum height for consistency */}
                <div className="flex-grow flex flex-col">
                    {/* First paragraph - always visible */}
                    <p className="text-gray-600 leading-relaxed text-base">{principle.description[0]}</p>

                    {/* Expandable content - use max-height for Safari compatibility */}
                    <div 
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{ willChange: isExpanded ? 'max-height, opacity' : 'auto' }}
                    >
                        <div className="pt-4 space-y-3">
                            {principle.description.slice(1).map((paragraph, i) => (
                                <p key={i} className="text-gray-600 leading-relaxed text-base">{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Spacer to push hint to bottom */}
                    <div className="flex-grow" />

                    {/* Read more hint - only show on hover */}
                    {!isExpanded && principle.description.length > 1 && (
                        <p className="text-amber-500/70 text-sm mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Click to expand
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
