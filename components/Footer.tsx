'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

// Rose quartz color palette inspired by the reference image
const quartzColors = {
    rose: '#d4a5a5',
    blush: '#e8c4c4', 
    pearl: '#f5e6e6',
    crystal: '#f8f0f0',
    ice: '#e8f4f8',
    glacier: '#d0e8f0',
};

// Floating quartz crystal component
const QuartzCrystal = ({ delay, x, y, size, color, rotate }: { 
    delay: number; x: string; y: string; size: number; color: string; rotate: number 
}) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.95, 1.05, 0.95],
            rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{ 
            duration: 8, 
            delay, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
    >
        <svg width={size} height={size * 1.5} viewBox="0 0 40 60" fill="none">
            <defs>
                <linearGradient id={`quartz-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.4" />
                </linearGradient>
            </defs>
            <polygon 
                points="20,0 35,15 35,45 20,60 5,45 5,15" 
                fill={`url(#quartz-${delay})`}
                stroke={color}
                strokeWidth="0.5"
                strokeOpacity="0.5"
            />
            <line x1="20" y1="0" x2="20" y2="60" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.4" />
            <line x1="5" y1="30" x2="35" y2="30" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.3" />
        </svg>
    </motion.div>
);

// Poetic line component with staggered reveal
const PoeticLine = ({ text, delay, isHighlight = false }: { text: string; delay: number; isHighlight?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
    >
        <p className={`
            text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide
            ${isHighlight 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#d4a5a5] via-[#e8c4c4] to-[#d0e8f0]' 
                : 'text-[#8a7575]'
            }
        `}>
            {text}
        </p>
    </motion.div>
);

// Crystal prismatic text effect
const CrystalName = ({ text }: { text: string }) => {
    return (
        <motion.div 
            className="relative cursor-pointer group inline-block"
            initial="initial"
            whileHover="hovered"
        >
            <motion.span
                className="relative z-10 text-2xl md:text-3xl font-light tracking-[0.15em] transition-all duration-500"
                style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent" // Needed for background-clip to work
                }}
                variants={{
                    initial: {
                        backgroundImage: "linear-gradient(90deg, #8a7575 0%, #7a6565 100%)", // Solid slate/brown
                        textShadow: "0 0 0px rgba(212, 165, 165, 0)"
                    },
                    hovered: { 
                        // Darker, richer gradient on hover for better contrast + subtle glow
                        backgroundImage: "linear-gradient(90deg, #a86c6c 0%, #6b5b5b 50%, #a86c6c 100%)", 
                        textShadow: "0 0 12px rgba(212, 165, 165, 0.4)" // Soft rose glow
                    }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
};

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const socialLinks = [
        { name: 'GitHub', href: 'https://github.com/certaindragon3' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jiesen-18a854325' },
        { name: 'Email', href: 'mailto:certaindragon3@gmail.com' },
    ];

    return (
        <footer 
            id="contact" 
            ref={ref} 
            className="relative min-h-screen px-6 md:px-12 py-24 md:py-32 overflow-hidden"
            style={{
                background: `linear-gradient(180deg, 
                    ${quartzColors.crystal} 0%, 
                    ${quartzColors.pearl} 30%, 
                    ${quartzColors.ice} 70%,
                    #fafafa 100%
                )`
            }}
        >
            {/* Ethereal background layers */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Soft gradient orbs - rose quartz glow */}
                <div 
                    className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full blur-[150px] opacity-40"
                    style={{ background: `radial-gradient(circle, ${quartzColors.rose} 0%, transparent 70%)` }}
                />
                <div 
                    className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-[120px] opacity-30"
                    style={{ background: `radial-gradient(circle, ${quartzColors.glacier} 0%, transparent 70%)` }}
                />
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20"
                    style={{ background: `radial-gradient(circle, ${quartzColors.blush} 0%, transparent 70%)` }}
                />
                
                {/* Floating quartz crystals */}
                <QuartzCrystal delay={0} x="10%" y="20%" size={30} color={quartzColors.rose} rotate={-15} />
                <QuartzCrystal delay={1.5} x="85%" y="15%" size={25} color={quartzColors.glacier} rotate={10} />
                <QuartzCrystal delay={3} x="75%" y="60%" size={35} color={quartzColors.blush} rotate={-8} />
                <QuartzCrystal delay={2} x="15%" y="70%" size={28} color={quartzColors.ice} rotate={12} />
                <QuartzCrystal delay={4} x="50%" y="10%" size={22} color={quartzColors.rose} rotate={-20} />
                <QuartzCrystal delay={2.5} x="90%" y="45%" size={20} color={quartzColors.pearl} rotate={5} />
            </div>

            {/* Subtle texture overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Poetic verses section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5 }}
                    className="mb-20 md:mb-32"
                >
                    <div className="space-y-6 md:space-y-8 max-w-3xl">
                        <PoeticLine text="The glacier is still there." delay={0} />
                        <PoeticLine text="The kitchen is still cooking." delay={0.3} />
                        <PoeticLine text="The page is still open..." delay={0.6} />
                    </div>
                </motion.div>

                {/* Say Hello CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mb-24 md:mb-32"
                >
                    <Link 
                        href="mailto:certaindragon3@gmail.com"
                        className="group inline-flex items-center gap-4 md:gap-6"
                    >
                        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-[#7a6565] group-hover:text-[#d4a5a5] transition-colors duration-700">
                            Say hello
                        </span>
                        <motion.span
                            className="text-3xl md:text-5xl lg:text-6xl text-[#d4a5a5] group-hover:text-[#c99595] transition-colors duration-700"
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            →
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Contact links - quartz style buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-wrap gap-4 md:gap-6 mb-20"
                >
                    {socialLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            className="group relative px-6 py-3 md:px-8 md:py-4 overflow-hidden rounded-full transition-all duration-500"
                        >
                            {/* Glass morphism background */}
                            <div 
                                className="absolute inset-0 rounded-full transition-all duration-500"
                                style={{
                                    background: `linear-gradient(135deg, 
                                        rgba(212, 165, 165, 0.15) 0%, 
                                        rgba(255, 255, 255, 0.4) 50%, 
                                        rgba(208, 232, 240, 0.15) 100%
                                    )`,
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(212, 165, 165, 0.3)',
                                }}
                            />
                            {/* Hover glow */}
                            <div 
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(135deg, 
                                        rgba(212, 165, 165, 0.3) 0%, 
                                        rgba(255, 255, 255, 0.5) 50%, 
                                        rgba(208, 232, 240, 0.3) 100%
                                    )`,
                                    boxShadow: '0 8px 32px rgba(212, 165, 165, 0.25)',
                                }}
                            />
                            <span className="relative z-10 text-sm md:text-base font-light tracking-wider text-[#7a6565] group-hover:text-[#5a4545] transition-colors duration-500">
                                {link.name}
                            </span>
                        </Link>
                    ))}
                </motion.div>

                {/* Bottom section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-12"
                    style={{ borderTop: '1px solid rgba(212, 165, 165, 0.2)' }}
                >
                    <div className="space-y-2">
                        <CrystalName text="Jiesen Huang" />
                        <p className="text-sm text-[#a39090] font-light tracking-wider">
                            Solution Always Prevails.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6 md:gap-8">
                        <span className="text-sm text-[#b0a0a0] font-light">© 2025</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="group flex items-center gap-2 text-[#a39090] hover:text-[#d4a5a5] transition-colors duration-500"
                        >
                            <span className="text-sm font-light tracking-wider">Rise</span>
                            <motion.span
                                animate={{ y: [0, -3, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="text-lg"
                            >
                                ↑
                            </motion.span>
                        </button>
                    </div>
                </motion.div>

                {/* Decorative bottom element - quartz cluster silhouette */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 0.1, y: 0 } : {}}
                    transition={{ duration: 2, delay: 2 }}
                    className="absolute bottom-0 right-0 pointer-events-none hidden lg:block"
                >
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
                        <defs>
                            <linearGradient id="crystal-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={quartzColors.rose} stopOpacity="0.5" />
                                <stop offset="100%" stopColor={quartzColors.glacier} stopOpacity="0.3" />
                            </linearGradient>
                        </defs>
                        {/* Abstract crystal cluster */}
                        <polygon points="150,20 180,80 160,80 180,140 140,140 130,200 120,140 80,140 100,80 80,80" 
                            fill="url(#crystal-gradient)" />
                        <polygon points="200,60 220,100 200,100 215,150 185,150 175,200 170,150 150,150 160,100 150,100" 
                            fill="url(#crystal-gradient)" opacity="0.7" />
                        <polygon points="80,80 100,120 85,120 100,170 70,170 60,200 55,170 35,170 45,120 35,120" 
                            fill="url(#crystal-gradient)" opacity="0.5" />
                    </svg>
                </motion.div>
            </div>
        </footer>
    );
}
