import React from 'react';
import { FadeIn } from "./FadeIn";

// Define the interface for your items
interface Item {
    id: number;
    content: string;
}

// Define props interface
interface YourSectionProps {
    items: Item[];
}

export const YourSection: React.FC<YourSectionProps> = ({ items }) => {
    return (
        <section>
            <FadeIn delay={0.2}>
                <h2>Section Title</h2>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
                <p>Some content that fades in and slides up</p>
            </FadeIn>

            {/* For a list of items, you can stagger the animations */}
            {items.map((item: Item, index: number) => (
                <FadeIn key={item.id} delay={0.2 * index} direction="up">
                    <div>{item.content}</div>
                </FadeIn>
            ))}
        </section>
    );
}; 