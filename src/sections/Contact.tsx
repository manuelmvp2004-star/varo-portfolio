import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <div className="card-base" style={{ textAlign: 'center', padding: '4rem 2rem', marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '0' }}>¿Hablamos?</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta o simplemente quieres saludar, intentaré responderte lo antes posible.
            </p>
            <a href="mailto:hola@manuelvaro.com" style={{ textDecoration: 'none' }}>
                <Button variant="primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Di Hola</Button>
            </a>
        </div>
    );
};

export default Contact;
