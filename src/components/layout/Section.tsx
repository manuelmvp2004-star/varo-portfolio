import type { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    title?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, title, children, className = "" }: SectionProps) => {
    return (
        <section id={id} className={`section ${className}`}>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
};

export default Section;
