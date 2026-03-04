export interface Skill {
    name: string;
    level: number;
    category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
];
