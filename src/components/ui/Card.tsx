
interface CardProps {
    title: string;
    description: string;
    image?: { src: string, alt: string };
    tech?: string[];
    links?: { code?: string, demo?: string };
    className?: string;
    style?: React.CSSProperties;
}

const Card = ({ title, description, image, tech, links, className = "", style }: CardProps) => {
    return (
        <div className={`card-base ${className}`} style={{ ...style, display: 'flex', flexDirection: 'column' }}>
            {image && (
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                    <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                </div>
            )}
            <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{description}</p>
                <div className="card-tags" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {tech?.map(t => <span key={t} className="tag" style={{ background: '#262626', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>{t}</span>)}
                </div>
                <div className="card-links" style={{ display: 'flex', gap: '1rem' }}>
                    {links?.code && <a href={links.code} style={{ fontSize: '0.8rem', color: 'white' }}>Code</a>}
                    {links?.demo && <a href={links.demo} style={{ fontSize: '0.8rem', color: 'white' }}>Live Demo</a>}
                </div>
            </div>
        </div>
    );
};

export default Card;
