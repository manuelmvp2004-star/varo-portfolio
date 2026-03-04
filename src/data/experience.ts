export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
}

export const experience: Experience[] = [
    {
        id: "exp-1",
        role: "Front-End Developer",
        company: "Empresa Actual/Freelance",
        period: "2023 - Presente",
        description: "Desarrollo de interfaces de usuario interactivas, accesibles y pixel-perfect enfocadas en la conversión y la experiencia del usuario.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
        id: "exp-2",
        role: "Desarrollador Web",
        company: "Agencia XYZ",
        period: "2021 - 2023",
        description: "Creación y mantenimiento de sitios web corporativos y e-commerce con un enfoque en el rendimiento web y SEO.",
        tech: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
];
