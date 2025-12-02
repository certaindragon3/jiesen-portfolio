'use client';

export default function Footer() {
    return (
        <footer className="px-6 py-12 border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto flex justify-between items-end">
                <div>
                    <p className="text-sm text-gray-500 mb-2">Stephen Mickle © 2025</p>
                    <a href="mailto:hello@example.com" className="text-xl font-medium hover:underline">
                        hello@example.com
                    </a>
                </div>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm font-medium hover:opacity-70"
                >
                    Back to top
                </button>
            </div>
        </footer>
    );
}
