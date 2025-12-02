import { Brain, ScrollText, UtensilsCrossed, Leaf, LucideIcon } from 'lucide-react';

// Icon mapping
export const iconMap: Record<string, LucideIcon> = {
    brain: Brain,
    scroll: ScrollText,
    utensils: UtensilsCrossed,
    leaf: Leaf,
};

export interface Project {
    title: string;
    slug: string;
    subtitle: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    link: string;
    github: string;
    color: string;
    iconKey: string;
    year: string;
    features?: string[];
    techStack?: string[];
    challenges?: string[];
    outcomes?: string[];
}

// Project data
export const projects: Project[] = [
    {
        title: "aReader",
        slug: "areader",
        subtitle: "An Evidence-Based Interface for ADHD Minds",
        description: "The modern web is hostile to the ADHD mind. I built a Chrome extension that strips pages to a calm, single-column reading field—then adds an AI study partner that summarizes, explains, and never judges.",
        fullDescription: "A research-driven Chrome extension that treats the browser as a cognitive environment. Built from eye-tracking studies and ADHD literature, it strips the web down to a calm, single-column reading field. The extension includes an AI-powered study companion that helps users summarize content, explain complex concepts, and maintain focus without judgment.",
        tags: ["Chrome Extension", "Cognitive Accessibility", "AI", "Open Source"],
        link: "#",
        github: "https://github.com/certaindragon3/aReader",
        color: "#E05463",
        iconKey: "brain",
        year: "2025",
        features: [
            "Single-column reading mode for reduced distraction",
            "AI-powered content summarization",
            "Customizable reading environment",
            "Progress tracking and bookmarking",
            "Dark mode and typography controls"
        ],
        techStack: ["TypeScript", "Chrome Extension API", "OpenAI API", "React", "TailwindCSS"],
        challenges: [
            "Balancing accessibility features without overwhelming users",
            "Ensuring consistent experience across different websites",
            "Optimizing AI response times for seamless interaction"
        ],
        outcomes: [
            "Open source project with active community",
            "Positive feedback from ADHD community",
            "Featured in accessibility tech discussions"
        ]
    },
    {
        title: "Versecraft",
        slug: "versecraft",
        subtitle: "When Code Meets the Flesh",
        description: "Machine translation flattens voice. Human translation doesn't scale. I built a copilot, not autopilot for translating 18th-century Chinese feminist verse—RAG-powered, transparent, and designed to preserve the author's soul across languages.",
        fullDescription: "An AI translation companion that teaches machines to read the subtext of 18th-century feminist literature. This digital excavation tool helps translators preserve voices that refused to be forgotten, using RAG (Retrieval-Augmented Generation) to provide context-aware suggestions while maintaining transparency about AI limitations.",
        tags: ["AI/ML", "NLP", "Cultural Heritage", "Translation"],
        link: "https://versecraft.vercel.app",
        github: "https://github.com/certaindragon3/prototype-3",
        color: "#3465E0",
        iconKey: "scroll",
        year: "2025",
        features: [
            "RAG-powered contextual translation suggestions",
            "Side-by-side original and translation view",
            "Historical and cultural context annotations",
            "Collaborative translation workspace",
            "Export to multiple formats"
        ],
        techStack: ["Next.js", "Python", "LangChain", "Vector Database", "OpenAI API", "TailwindCSS"],
        challenges: [
            "Preserving poetic nuance in machine-assisted translation",
            "Building comprehensive historical context database",
            "Balancing AI assistance with translator autonomy"
        ],
        outcomes: [
            "Used by academic researchers in literary translation",
            "Contributed to digital humanities discussions",
            "Published research on AI-assisted translation methodologies"
        ]
    },
    {
        title: "Acheng Virtual Museum",
        slug: "acheng",
        subtitle: "Extracting the Source Code of a Kitchen",
        description: "How do you archive a gut feeling? Before a 26-year-old Suzhou kitchen goes silent, I captured its sensory algorithms—LiDAR scans, 61MP photos, deep interviews—and reassembled them into a pedagogical micro-museum.",
        fullDescription: "A multi-modal digital excavation of a 26-year-old Suzhou restaurant. Using LiDAR scanning, 61MP photography, and deep interviews, this project captures embodied culinary knowledge before it disappears. The result is an interactive virtual museum that preserves not just the physical space, but the intangible heritage of traditional cooking techniques.",
        tags: ["3D Scanning", "Cultural Heritage", "Virtual Museum", "HCI"],
        link: "https://acheng.jiesen-huang.com",
        github: "https://github.com/certaindragon3/info305-_final",
        color: "#FF800F",
        iconKey: "utensils",
        year: "2025",
        features: [
            "Interactive 3D environment exploration",
            "Multi-angle high-resolution photography",
            "Oral history audio integration",
            "Recipe and technique documentation",
            "Mobile-responsive virtual tours"
        ],
        techStack: ["Three.js", "React", "LiDAR Processing", "Photogrammetry", "WebGL", "Next.js"],
        challenges: [
            "Processing and optimizing large 3D scan data for web",
            "Capturing intangible aspects of culinary heritage",
            "Creating intuitive navigation for non-technical users"
        ],
        outcomes: [
            "Preserved cultural heritage of traditional Suzhou cuisine",
            "Educational resource for culinary students",
            "Case study in digital heritage preservation"
        ]
    },
    {
        title: "Canadian Species at Risk",
        slug: "canada-species",
        subtitle: "Making the 42% Silence Visible",
        description: "At eight, Banff's glacier looked eternal. The data says otherwise. I visualized Canada's Policy Lag — the gap between a species vanishing and the law noticing—turning invisible decline into an explorable, permanent witness.",
        fullDescription: "A data visualization system connecting biodiversity law and life. This project reveals where conservation protection succeeds—and where it arrives too late. By visualizing the 'Policy Lag' between species decline and legal protection, it transforms abstract environmental data into compelling narratives that inspire action.",
        tags: ["Data Visualization", "Conservation", "UN SDG 14 & 15"],
        link: "https://canada.jiesen-huang.com",
        github: "https://github.com/loeeeee/INFOSCI301-Final-Project",
        color: "#DD4B2F",
        iconKey: "leaf",
        year: "2025",
        features: [
            "Interactive species timeline visualization",
            "Geographic distribution mapping",
            "Policy lag analysis tools",
            "Comparative species status charts",
            "Data export and citation tools"
        ],
        techStack: ["D3.js", "React", "Python", "Pandas", "MapboxGL", "Next.js"],
        challenges: [
            "Cleaning and normalizing historical biodiversity data",
            "Designing visualizations that convey urgency without despair",
            "Making complex ecological relationships accessible"
        ],
        outcomes: [
            "Used by environmental advocacy organizations",
            "Cited in conservation policy discussions",
            "Educational tool for environmental science courses"
        ]
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map(project => project.slug);
}
