import Link from 'next/link';

export default function Work() {
    const projects = [
        { title: "QardioArm 2 product launch", category: "Product Launch" },
        { title: "Worldpay 360", category: "Branding" },
        { title: "PopSnax by PopYum", category: "Packaging" },
        { title: "Katie Jayne", category: "Branding" },
        { title: "Qardio+ subscription launch", category: "Digital Product" },
        { title: "QardioBase X product launch", category: "Product Launch" },
        { title: "Tommee Tippee", category: "Digital Design" },
        { title: "Qardio events", category: "Event Design" },
        { title: "Playstation", category: "Digital Design" },
        { title: "Jules B", category: "Web Design" },
    ];

    return (
        <section id="work" className="px-6 py-24 bg-white text-black">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-sm font-medium text-gray-500 mb-12 uppercase tracking-wider">
                    Selected Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project, index) => (
                        <Link key={index} href="#" className="group block">
                            <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative">
                                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-700 ease-out" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl font-medium group-hover:opacity-70 transition-opacity">{project.title}</h3>
                                <span className="text-sm text-gray-500">{project.category}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
