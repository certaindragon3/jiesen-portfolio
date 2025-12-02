export default function Principles() {
    const principles = [
        {
            number: "01",
            title: "Team culture",
            description: "Building strong teams across various industries around the business ensures I can deliver creative solutions that align with the vision. Whether working with developers, marketers, or business teams, collaboration drives success in each design project."
        },
        {
            number: "02",
            title: "User-centered design",
            description: "Designing with the end-user in mind is key. Every decision is focused on creating intuitive and visually appealing designs that provide users with the best experience, ensuring their voice is reflected in every project."
        },
        {
            number: "03",
            title: "Design excellence",
            description: "Achieving exceptional design comes from pushing creative boundaries. I aim to foster an environment where experimentation and innovation is encouraged, ensuring that every project is visually appealing, distinctive, and tailored to business needs."
        },
        {
            number: "04",
            title: "Continuous learning",
            description: "I constantly strive to learn new skills and stay ahead of the game. I enjoy tackling complex challenges and exploring new trends, and I thrive on creating innovative designs that make a lasting impression."
        }
    ];

    return (
        <section className="px-6 py-24 bg-[#f9f9f9] text-[#171717]">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-sm font-medium text-gray-500 mb-20 uppercase tracking-wider">
                    What's important to me
                </h2>
                <div className="grid grid-cols-1 gap-20">
                    {principles.map((principle, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-t border-gray-200 pt-8">
                            <span className="text-sm font-medium text-gray-400">{principle.number}</span>
                            <div>
                                <h3 className="text-2xl font-medium mb-4">{principle.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{principle.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
