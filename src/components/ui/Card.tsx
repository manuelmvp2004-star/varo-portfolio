

interface CardProps {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    link?: string;
}

const Card = ({ title, description, image, tags, link }: CardProps) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} />}
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-tags">
                    {tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
            </div>
        </div>
    );
};

export default Card;
