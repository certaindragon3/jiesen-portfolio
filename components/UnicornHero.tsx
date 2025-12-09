'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => Promise<unknown>;
            destroy: () => void;
        };
    }
}

export default function UnicornHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initUnicorn = () => {
            if (window.UnicornStudio?.init) {
                window.UnicornStudio.init().catch((err) => {
                    console.error('UnicornStudio init failed', err);
                });
            }
        };

        const existingScript = document.querySelector<HTMLScriptElement>('script[data-us-loader="true"]');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.async = true;
            script.dataset.usLoader = 'true';
            script.onload = () => {
                initUnicorn();
            };
            (document.head || document.body).appendChild(script);
        } else {
            initUnicorn();
        }

        return () => {
            if (window.UnicornStudio?.destroy) {
                try {
                    window.UnicornStudio.destroy();
                } catch (e) {
                }
            }
        };
    }, []);

    return (
        <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
            <div 
                ref={containerRef}
                data-us-project-src="/unicornhero.json"
                data-us-scale="1"
                data-us-dpi="1.5"
                data-us-lazyload="true"
                data-us-alttext="Noise masked hero unicorn scene"
                data-us-arialabel="Interactive Unicorn Studio canvas scene"
                className="absolute inset-0 w-full h-full"
            />
        </section>
    );
}
