
import Card from '../components/ui/Card';
import { projects } from '../data/projects';

const FeaturedProject = ({ className = "" }: { className?: string }) => {
    const featured = projects.find(p => p.featured) || projects[0];

    return (
        <div className={className}>
            <Card
                title={featured.title}
                description={featured.description}
                tech={featured.tech}
                links={featured.links}
                image={featured.image}
                className="featured-card"
                style={{ height: '100%' }}
            />
        </div>
    );
};

export default FeaturedProject;
