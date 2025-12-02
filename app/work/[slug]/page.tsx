'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { ArrowLeft, ArrowUpRight, Github, Calendar, Layers, Lightbulb, Target } from 'lucide-react';
import { getProjectBySlug, iconMap } from '@/lib/projects';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
    const { slug } = use(params);
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const IconComponent = iconMap[project.iconKey];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section 
                className="relative pt-32 pb-20 px-8"
                style={{ 
                    background: `linear-gradient(135deg, ${project.color}08 0%, white 50%, white 100%)` 
                }}
            >
                <div className="max-w-5xl mx-auto">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link 
                            href="/#work" 
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Work</span>
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-start gap-6 mb-8"
                    >
                        <div 
                            className="p-5 rounded-2xl shadow-lg flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                        >
                            <IconComponent className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-sm text-gray-400 flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {project.year}
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 tracking-tight">
                                {project.title}
                            </h1>
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl lg:text-3xl font-medium mb-8"
                        style={{ color: project.color }}
                    >
                        {project.subtitle}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {project.tags.map((tag, idx) => (
                            <span 
                                key={idx}
                                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 border border-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: project.color }}
                        >
                            <span>View Live Project</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href={project.github}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all hover:scale-105"
                        >
                            <Github className="w-4 h-4" />
                            <span>View Source</span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-light text-gray-900 mb-6">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                    </motion.div>

                    {/* Grid Layout for Features, Tech, Challenges, Outcomes */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Features */}
                        {project.features && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div 
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${project.color}15` }}
                                    >
                                        <Layers className="w-5 h-5" style={{ color: project.color }} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900">Key Features</h3>
                                </div>
                                <ul className="space-y-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                                            <span 
                                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                style={{ backgroundColor: project.color }}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Tech Stack */}
                        {project.techStack && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div 
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${project.color}15` }}
                                    >
                                        <Lightbulb className="w-5 h-5" style={{ color: project.color }} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-3 py-1.5 rounded-full text-sm border"
                                            style={{ 
                                                backgroundColor: `${project.color}10`,
                                                borderColor: `${project.color}30`,
                                                color: project.color
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Challenges */}
                        {project.challenges && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div 
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${project.color}15` }}
                                    >
                                        <Target className="w-5 h-5" style={{ color: project.color }} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900">Challenges</h3>
                                </div>
                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                                            <span 
                                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                style={{ backgroundColor: project.color }}
                                            />
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Outcomes */}
                        {project.outcomes && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div 
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${project.color}15` }}
                                    >
                                        <Target className="w-5 h-5" style={{ color: project.color }} />
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900">Outcomes</h3>
                                </div>
                                <ul className="space-y-3">
                                    {project.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                                            <span 
                                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                style={{ backgroundColor: project.color }}
                                            />
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <p className="text-gray-500 mb-6">Interested in this project?</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white transition-all hover:scale-105"
                                style={{ backgroundColor: project.color }}
                            >
                                <span>Try it Live</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/#work"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition-all"
                            >
                                <span>View More Projects</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
