
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="projects-grid">
                {projects.map(project => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
