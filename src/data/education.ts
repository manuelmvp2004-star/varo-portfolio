export interface Education {
    id: string;
    title: string;
    institution: string;
    period: string;
    description: string;
}

export const education: Education[] = [
    {
        id: "edu-1",
        title: "Grado en Desarrollo Software / Boot-camp",
        institution: "Institución XYZ",
        period: "2020 - 2022",
        description: "Formación especializada en desarrollo frontend, arquitecturas web y diseño de interfaces (UI/UX)."
    },
    {
        id: "edu-2",
        title: "Diseño Web y Accesibilidad",
        institution: "Curso Autodidacta / Plataforma Online",
        period: "2023",
        description: "Profundización en estándares de accesibilidad (WCAG) y patrones avanzados de CSS y responsive design."
    }
];
