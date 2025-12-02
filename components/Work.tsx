'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects, iconMap } from '@/lib/projects';

export default function Work() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="work" ref={ref} className="relative px-8 py-40 bg-white text-gray-900 overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
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
                    <span className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-6 block">Selected Work</span>
                    <GradientHeading size="xl" variant="default" weight="thin">
                        Digital Refuges I&apos;ve Built
                    </GradientHeading>
                    <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        The Warm Tech
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
                                <Link href={`/work/${project.slug}`} className="block h-full">
                                    <div 
                                        className="relative h-full rounded-2xl border border-gray-200 hover:border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden cursor-pointer"
                                        style={{ 
                                            background: `linear-gradient(135deg, ${project.color}08 0%, white 50%, white 100%)` 
                                        }}
                                    >
                                        {/* Hover glow effect */}
                                        <div 
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ background: `linear-gradient(135deg, ${project.color}10 0%, transparent 60%)` }}
                                        />
                                        
                                        <div className="relative p-10 lg:p-12 flex flex-col h-full min-h-[420px]">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-8">
                                                <div 
                                                    className="p-4 rounded-2xl shadow-lg"
                                                    style={{ backgroundColor: project.color }}
                                                >
                                                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                                                </div>
                                                <span className="text-sm text-gray-400 font-light">{project.year}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-3 tracking-tight">
                                                    {project.title}
                                                </h3>
                                                <p 
                                                    className="text-lg font-medium mb-6"
                                                    style={{ color: project.color }}
                                                >
                                                    {project.subtitle}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed text-base mb-8">
                                                    {project.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {project.tags.map((tag, idx) => (
                                                        <span 
                                                            key={idx} 
                                                            className="text-xs px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 border border-gray-200"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Links */}
                                            <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                                                <span 
                                                    className="flex items-center gap-2 text-sm text-gray-900 transition-colors group/link"
                                                    style={{ color: project.color }}
                                                >
                                                    <span>View Details</span>
                                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </span>
                                                <span 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        window.open(project.link, '_blank');
                                                    }}
                                                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                                                >
                                                    <span>Live Demo</span>
                                                </span>
                                                <span 
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        window.open(project.github, '_blank');
                                                    }}
                                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    <span>Source</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
