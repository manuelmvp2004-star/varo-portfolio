import Card from '../components/ui/Card';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Proyectos Principales</h2>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {projects.map(project => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
