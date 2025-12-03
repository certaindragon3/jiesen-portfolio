# Jiesen Huang | Portfolio

> *"I am a builder of refuges."*

A modern portfolio website showcasing Jiesen Huang's projects and design philosophy. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion, deployed on Cloudflare Workers.

## Features

- **Immersive Visual Experience** - Unicorn Studio 3D effects, Spotlight animations, gradient transitions for a unique visual identity
- **High Performance** - Built on Next.js 16 App Router with server-side rendering and static generation
- **Edge Deployment** - Deployed to Cloudflare Workers via OpenNext adapter for global low-latency access
- **Responsive Design** - Seamlessly adapts to desktop and mobile devices
- **Crafted Animations** - Smooth page transitions and micro-interactions powered by Framer Motion

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16, React 19 |
| **Styling** | Tailwind CSS 4, tw-animate-css |
| **Animation** | Framer Motion 12, Unicorn Studio |
| **UI Components** | Radix UI, Lucide React, Tabler Icons |
| **Deployment** | Cloudflare Workers (via OpenNext) |
| **Typography** | Manrope (Google Fonts) |

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── work/[slug]/        # Dynamic project detail pages
├── components/             # React components
│   ├── Header.tsx          # Navigation bar
│   ├── UnicornHero.tsx     # 3D Hero animation
│   ├── Hero.tsx            # Main tagline section
│   ├── Work.tsx            # Project showcase
│   ├── Principles.tsx      # Design philosophy
│   ├── Footer.tsx          # Footer with contact info
│   └── ui/                 # Base UI components
│       ├── 3d-card.tsx
│       ├── bento-grid.tsx
│       ├── gradient-heading.tsx
│       ├── spotlight.tsx
│       ├── text-animate.tsx
│       └── text-generate-effect.tsx
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── avatar/             # Avatar images
│   └── projects/           # Project screenshots
└── Configuration
    ├── next.config.ts
    ├── tailwind (via postcss)
    ├── wrangler.jsonc      # Cloudflare Workers config
    └── open-next.config.ts # OpenNext adapter config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Local Preview (Cloudflare Workers)

```bash
npm run preview
```

### Build

```bash
npm run build
```

### Deploy to Cloudflare Workers

```bash
npm run deploy
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run build:worker` | Build Cloudflare Worker |
| `npm run dev:worker` | Run Worker locally |
| `npm run preview` | Build and preview Worker |
| `npm run deploy` | Deploy to Cloudflare Workers |

## Featured Projects

### 1. aReader
*Debugging the Distracted Mind*

A Chrome extension designed for ADHD users, providing a distraction-free reading experience with an AI study companion.

### 2. Versecraft
*When Code Meets the Flesh*

An AI-powered translation assistant for 18th-century Chinese feminist poetry — a "copilot, not autopilot" that preserves the author's voice across languages.

### 3. Acheng Virtual Museum
*Extracting the Source Code of a Kitchen*

A virtual museum built with LiDAR scanning and deep interviews, preserving a 26-year-old Suzhou kitchen before it goes silent.

### 4. Canadian Species at Risk
*Making the 42% Silence Visible*

A data visualization project exposing Canada's "Policy Lag" — the gap between a species vanishing and the law noticing.

## Design Principles

- **Warm Technological Humanism** - Technology that holds, not extracts
- **Subtractive Engineering** - Remove to preserve; less infrastructure, longer lifespan
- **Transparent by Default** - Show your reasoning; let humans decide
- **Accessibility as Aesthetics** - Design for the margins; everyone benefits

## License

MIT License

## Links

- **GitHub**: [github.com/certaindragon3](https://github.com/certaindragon3)
- **LinkedIn**: [linkedin.com/in/jiesen-18a854325](https://www.linkedin.com/in/jiesen-18a854325)
- **Email**: certaindragon3@gmail.com
