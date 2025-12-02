'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => void;
        };
    }
}

export default function UnicornHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 加载 UnicornStudio 脚本
        if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: false, init: () => {} };
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js';
            script.onload = function () {
                if (!window.UnicornStudio.isInitialized) {
                    window.UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                }
            };
            (document.head || document.body).appendChild(script);
        } else if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
        }
    }, []);

    return (
        <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
            <div 
                ref={containerRef}
                data-us-project="775t0fdpipna57XQ9oJY" 
                className="absolute inset-0 w-full h-full"
            />
        </section>
    );
}
