import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Gracias.module.scss';

export const metadata = buildMetadata({
    title: 'Mensaje Enviado',
    description: 'Tu solicitud ha sido enviada con éxito. Contactaremos contigo pronto.',
    path: '/gracias',
});
// Need to add explicit robots config
metadata.robots = {
    index: false,
    follow: false,
};

export default function GraciasPage() {
    return (
        <section style={{
            paddingTop: 'var(--space-32)',
            paddingBottom: 'var(--space-32)',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--color-bg-white)'
        }}>
            <Container size="narrow" className={styles.container}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'var(--color-success)',
                    color: 'var(--color-bg-white)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-8)',
                    boxShadow: 'var(--shadow-lg)'
                }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-4xl)',
                    color: 'var(--color-text-dark)',
                    marginBottom: 'var(--space-4)'
                }}>
                    ¡Solicitud enviada con éxito!
                </h1>

                <p style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--color-text-medium)',
                    lineHeight: 'var(--lh-relaxed)',
                    marginBottom: 'var(--space-10)'
                }}>
                    Hemos recibido correctamente tus datos. Nuestro equipo revisará la información y se pondrá en contacto contigo en las próximas 48 horas laborables (generalmente antes).
                </p>

                <Button href="/" variant="primary" size="lg">
                    Volver a la página principal
                </Button>
            </Container>
        </section>
    );
}
