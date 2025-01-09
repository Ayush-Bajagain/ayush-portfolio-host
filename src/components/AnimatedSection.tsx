import { FadeIn } from "./FadeIn";

interface Item {
    id: number;
    title: string;
    description: string;
}

export const AnimatedSection = () => {
    const items: Item[] = [
        { id: 1, title: "Item 1", description: "Description 1" },
        { id: 2, title: "Item 2", description: "Description 2" },
        { id: 3, title: "Item 3", description: "Description 3" },
    ];

    return (
        <section className="py-20 space-y-20">
            <FadeIn>
                <h2 className="text-3xl font-bold text-center">
                    Our Services
                </h2>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, index) => (
                    <FadeIn 
                        key={item.id} 
                        delay={index * 0.2} 
                        direction="up"
                        className="p-6 rounded-lg bg-white shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p>{item.description}</p>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}; 