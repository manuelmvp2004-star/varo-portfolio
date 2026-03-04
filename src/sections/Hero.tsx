
import Button from '../components/ui/Button';

const Hero = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`card-base ${className}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Front-End Architect & UI Designer
                </p>
                <h1>Varo</h1>
            </div>

            <p style={{ fontSize: '1.5rem', maxWidth: '700px', marginBottom: '3rem', fontWeight: 400, color: '#aaa' }}>
                Crafting <span style={{ color: 'white' }}>precise, interactive</span> interfaces.
                Focused on the intersection of design and clean engineering.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
                <Button variant="primary">View Projects</Button>
                <Button variant="secondary" style={{ borderRadius: '12px' }}>Download CV</Button>
            </div>
        </div>
    );
};

export default Hero;
