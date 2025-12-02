'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { Brain, ScrollText, UtensilsCrossed, Leaf, LucideIcon, ArrowUpRight, Github } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
    brain: Brain,
    scroll: ScrollText,
    utensils: UtensilsCrossed,
    leaf: Leaf,
};

// Project data from Notion
const projects = [
    {
        title: "aReader",
        subtitle: "An Evidence-Based Interface for ADHD Minds",
        description: "A research-driven Chrome extension that treats the browser as a cognitive environment. Built from eye-tracking studies and ADHD literature, it strips the web down to a calm, single-column reading field.",
        tags: ["Chrome Extension", "Cognitive Accessibility", "AI", "Open Source"],
        link: "#",
        github: "https://github.com/certaindragon3/aReader",
        gradient: "from-amber-500 to-orange-600",
        bgGradient: "from-amber-500/5 via-orange-500/5 to-yellow-500/5",
        borderColor: "border-amber-500/20 hover:border-amber-500/40",
        iconKey: "brain",
        year: "2025",
    },
    {
        title: "Versecraft",
        subtitle: "When Code Meets the Flesh",
        description: "An AI translation companion that teaches machines to read the subtext of 18th-century feminist literature. Digital excavation for voices that refused to be forgotten.",
        tags: ["AI/ML", "NLP", "Cultural Heritage", "Translation"],
        link: "https://versecraft.vercel.app",
        github: "https://github.com/certaindragon3/prototype-3",
        gradient: "from-violet-500 to-purple-600",
        bgGradient: "from-violet-500/5 via-purple-500/5 to-fuchsia-500/5",
        borderColor: "border-violet-500/20 hover:border-violet-500/40",
        iconKey: "scroll",
        year: "2025",
    },
    {
        title: "Acheng Virtual Museum",
        subtitle: "Extracting the Source Code of a Kitchen",
        description: "A multi-modal digital excavation of a 26-year-old Suzhou restaurant. LiDAR, 61MP photography, and deep interviews capture embodied culinary knowledge before it disappears.",
        tags: ["3D Scanning", "Cultural Heritage", "Virtual Museum", "HCI"],
        link: "https://acheng.jiesen-huang.com",
        github: "https://github.com/certaindragon3/info305-_final",
        gradient: "from-rose-500 to-pink-600",
        bgGradient: "from-rose-500/5 via-pink-500/5 to-red-500/5",
        borderColor: "border-rose-500/20 hover:border-rose-500/40",
        iconKey: "utensils",
        year: "2025",
    },
    {
        title: "Canadian Species at Risk",
        subtitle: "Making the 42% Silence Visible",
        description: "A data visualization system connecting biodiversity law and life. Reveals where conservation protection succeeds—and where it arrives too late.",
        tags: ["Data Visualization", "Conservation", "UN SDG 14 & 15"],
        link: "https://canada.jiesen-huang.com",
        github: "https://github.com/loeeeee/INFOSCI301-Final-Project",
        gradient: "from-emerald-500 to-teal-600",
        bgGradient: "from-emerald-500/5 via-teal-500/5 to-cyan-500/5",
        borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
        iconKey: "leaf",
        year: "2025",
    },
];

export default function Work() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="work" ref={ref} className="relative px-8 py-40 bg-[#0a0a0a] text-white overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-[0.015]">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }} />
            </div>

            <div className="max-w-[1600px] mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center"
                >
                    <span className="text-sm tracking-[0.3em] uppercase text-amber-400/60 mb-6 block">Selected Work</span>
                    <GradientHeading size="xl" variant="light" weight="thin">
                        Digital Refuges I&apos;ve Built
                    </GradientHeading>
                    <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        Each project asks the same question: how can computation hold what the world forgets?
                    </p>
                </motion.div>

                {/* Projects Grid - Equal sizing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, i) => {
                        const IconComponent = iconMap[project.iconKey];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.15, duration: 0.8 }}
                                className="group"
                            >
                                <div className={`relative h-full rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm transition-all duration-500 overflow-hidden`}>
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.bgGradient}`} />
                                    
                                    <div className="relative p-10 lg:p-12 flex flex-col h-full min-h-[420px]">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                                                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-sm text-gray-500 font-light">{project.year}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-3xl lg:text-4xl font-light text-white mb-3 tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className={`text-lg font-medium mb-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                                {project.subtitle}
                                            </p>
                                            <p className="text-gray-400 leading-relaxed text-base mb-8">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tags.map((tag, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="text-xs px-3 py-1.5 bg-white/5 rounded-full text-gray-300 border border-white/10"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                                            <Link 
                                                href={project.link} 
                                                target="_blank" 
                                                className="flex items-center gap-2 text-sm text-white hover:text-amber-400 transition-colors group/link"
                                            >
                                                <span>View Project</span>
                                                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </Link>
                                            <Link 
                                                href={project.github} 
                                                target="_blank" 
                                                className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
