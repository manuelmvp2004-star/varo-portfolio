export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    role: string;
    image: { src: string, alt: string };
    links: { code?: string, demo?: string };
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'AutomAI Gym',
        title: 'AutomAI Gym',
        description: 'Web para la gestión de gimnasios con el uso de IA para la creación de rutinas de entrenamiento y planes de alimentación.',
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        role: 'Front-end + Accesibilidad + módulos específicos',
        image: { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', alt: 'Dashboard AutomAI Gym' },
        links: { code: 'https://github.com/manuel-varo', demo: '#' },
        featured: true
    },
    {
        id: 'E-commerce UI Kit',
        title: 'E-commerce UI Kit',
        description: 'Design system y componentes reutilizables orientados a tiendas online de alta conversión. Interfaz continua y pixel-perfect.',
        tech: ["React", "TypeScript", "Tailwind CSS", "Storybook"],
        role: 'Frontend Architect & UI Designer',
        image: { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', alt: 'E-commerce Frontend' },
        links: { code: 'https://github.com/manuel-varo' },
        featured: true
    }
];
