export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Example Project',
        description: 'A brief description of the project.',
        image: 'https://via.placeholder.com/300',
        tags: ['React', 'TypeScript', 'Vite'],
        link: '#'
    }
];
