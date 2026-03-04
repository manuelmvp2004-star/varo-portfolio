export interface Skill {
    name: string;
    level: number;
    category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML5 / CSS3', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript (ES6+)', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'PHP / MySQL', level: 70, category: 'Backend' },
    { name: 'Git & GitHub', level: 85, category: 'Tools' },
    { name: 'Figma (UI/UX)', level: 80, category: 'Tools' },
    { name: 'Accesibilidad Web (WCAG)', level: 80, category: 'Other' },
];
