'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        UnicornStudio: {
            isInitialized: boolean;
            init: () => void;
            destroy: () => void;
        };
    }
}

export default function UnicornHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scriptLoaded = false;

        const initUnicorn = () => {
            if (window.UnicornStudio && window.UnicornStudio.init) {
                window.UnicornStudio.init();
            }
        };

        // 检查脚本是否已加载
        const existingScript = document.querySelector('script[src*="unicornStudio"]');
        
        if (!existingScript) {
            // 首次加载脚本
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js';
            script.onload = () => {
                scriptLoaded = true;
                initUnicorn();
            };
            (document.head || document.body).appendChild(script);
        } else {
            // 脚本已存在，直接初始化
            // 使用 setTimeout 确保 DOM 已经准备好
            setTimeout(initUnicorn, 0);
        }

        // 清理函数：组件卸载时销毁实例
        return () => {
            if (window.UnicornStudio && window.UnicornStudio.destroy) {
                try {
                    window.UnicornStudio.destroy();
                } catch (e) {
                    // 忽略销毁时的错误
                }
            }
        };
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
