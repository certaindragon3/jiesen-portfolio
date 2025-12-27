'use client';

import { useParams, notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getImgUrl } from '@/lib/utils';

// 项目数据配置
const projectsData: Record<string, {
    title: string;
    subtitle: string;
    color: string;
    link: string;
    github: string;
    pages: number; // 设计稿页数
}> = {
    areader: {
        title: "aReader",
        subtitle: "An Evidence-Based Interface for ADHD Minds",
        color: "#E05463",
        link: "https://areader.jiesen-huang.com",
        github: "https://github.com/certaindragon3/aReader-public",
        pages: 4,
    },
    versecraft: {
        title: "Versecraft",
        subtitle: "When Code Meets the Flesh",
        color: "#3465E0",
        link: "https://versecraft.vercel.app",
        github: "https://github.com/certaindragon3/prototype-3",
        pages: 5,
    },
    acheng: {
        title: "Acheng Virtual Museum",
        subtitle: "Extracting the Source Code of a Kitchen",
        color: "#FF800F",
        link: "https://acheng.jiesen-huang.com",
        github: "https://github.com/certaindragon3/info305-_final",
        pages: 5,
    },
    "canada-species": {
        title: "Canadian Species at Risk",
        subtitle: "Making the 42% Silence Visible",
        color: "#DD4B2F",
        link: "https://canada.jiesen-huang.com",
        github: "https://github.com/loeeeee/INFOSCI301-Final-Project",
        pages: 4,
    },
};

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    
    const project = projectsData[slug];
    
    if (!project) {
        notFound();
    }

    // 导航回主页并滚动到 work 部分
    const handleBackToWork = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push('/');
        // 等待页面加载后滚动到 work 部分
        setTimeout(() => {
            const workSection = document.getElementById('work');
            if (workSection) {
                workSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // 生成页面图片数组
    const pageImages = Array.from({ length: project.pages }, (_, i) => 
        getImgUrl(`/projects/${slug}/page-${i + 1}.webp`)
    );

    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            {/* 顶部导航栏 */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-[1800px] mx-auto px-6 py-4 flex items-center">
                    {/* 左侧区域 - 占据等量空间 */}
                    <div className="flex-1 flex justify-start">
                        <button 
                            onClick={handleBackToWork}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="text-sm font-medium">Back to Work</span>
                        </button>
                    </div>
                    
                    {/* 中间标题 - 保持原始大小 */}
                    <div className="flex-shrink-0">
                        <h1 
                            className="text-lg font-medium"
                            style={{ color: project.color }}
                        >
                            {project.title}
                        </h1>
                    </div>

                    {/* 右侧区域 - 占据等量空间 */}
                    <div className="flex-1 flex items-center justify-end gap-4">
                        {project.link !== "#" && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span className="hidden sm:inline">Live Demo</span>
                            </Link>
                        )}
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:inline">Source</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* 设计稿展示区域 */}
            <div className="pt-20 pb-16">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* 项目标题区 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-12 lg:py-16"
                    >
                        <h1 
                            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-4"
                            style={{ color: project.color }}
                        >
                            {project.title}
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                            {project.subtitle}
                        </p>
                    </motion.div>

                    {/* 设计稿页面 - 响应式展示 */}
                    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
                        {pageImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative w-full"
                            >
                                {/* 设计稿容器 - 保持 1600:820 宽高比 */}
                                <div 
                                    className="relative w-full bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                                    style={{ 
                                        aspectRatio: '1600 / 820',
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`${project.title} - Page ${index + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, (max-width: 1400px) 90vw, 1600px"
                                        priority={index === 0}
                                    />
                                </div>
                                
                                {/* 页码指示器（多页时显示） */}
                                {project.pages > 1 && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                        <span 
                                            className="px-3 py-1 text-xs font-medium rounded-full text-white"
                                            style={{ backgroundColor: project.color }}
                                        >
                                            {index + 1} / {project.pages}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* 底部操作区 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-16 lg:py-24"
                    >
                        {project.link !== "#" && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-transform hover:scale-105"
                                style={{ backgroundColor: project.color }}
                            >
                                <span>View Live Project</span>
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        )}
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 text-gray-700 hover:text-gray-900 font-medium transition-all hover:border-gray-400"
                            style={{ borderColor: '#e5e5e5' }}
                        >
                            <Github className="w-5 h-5" />
                            <span>View Source Code</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
