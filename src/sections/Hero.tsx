import Button from '../components/ui/Button';

const Hero = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`card-base ${className}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '60vh', padding: '4rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Frontend Developer & UI Architect
                </p>
                <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>Manuel Varo</h1>
            </div>

            <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '3rem', fontWeight: 400, color: '#ccc', lineHeight: '1.6' }}>
                Creando interfaces web <span style={{ color: 'white', fontWeight: 600 }}>realistas, robustas y responsivas</span>.
                Foco total en la experiencia de usuario (UX/UI) y rendimiento pixel-perfect.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="mailto:hola@manuelvaro.com" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Contactar por Email</Button>
                </a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '12px' }}>Descargar CV</Button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
