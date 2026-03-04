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
        image: { src: 'https://via.placeholder.com/300', alt: 'AutomAI Gym' },
        links: { code: '#', demo: '#' },
        featured: true
    }
];
