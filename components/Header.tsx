import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
            <Link href="/" className="text-xl font-medium tracking-tight">
                Stephen Mickle
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
                <Link href="#work" className="hover:opacity-70 transition-opacity">
                    Work
                </Link>
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                    About
                </Link>
            </nav>
        </header>
    );
}
