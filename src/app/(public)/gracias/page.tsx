import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Gracias.module.scss';
import { cn } from '@/lib/utils/cn';

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

const nextSteps = [
    'Revisamos la información recibida y validamos viabilidad técnica.',
    'Contactamos contigo para aclarar alcance y resolver dudas.',
    'Si procede, agendamos visita y propuesta de ejecución.',
];

export default function GraciasPage() {
    return (
        <section className={cn(styles.section, 'section--dark')}>
            <div className={styles.bg} aria-hidden="true" />
            <Container size="narrow" className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.iconWrap} data-page-reveal>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className={styles.header} data-page-reveal data-page-delay="0.04">
                        <p className={styles.eyebrow}>Solicitud registrada</p>
                        <h1>Hemos recibido tu mensaje correctamente</h1>
                        <p className={styles.subtitle}>
                            Gracias por contactar con Multiservicios Varo. Nuestro equipo revisará tu solicitud y
                            te responderá en un plazo aproximado de 24 a 48 horas laborables.
                        </p>
                    </div>

                    <ol className={styles.steps} data-page-stagger="0.08" data-page-y="14">
                        {nextSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>

                    <div className={styles.actions} data-page-reveal data-page-delay="0.12">
                        <Button href="/" variant="secondary" size="lg">
                            Volver al inicio
                        </Button>
                        <Button href="/servicios" variant="primary" size="lg">
                            Ver servicios
                        </Button>
                    </div>

                    <p className={styles.contactNote}>
                        Si necesitas atención inmediata puedes llamarnos al{' '}
                        <a href="tel:+34616424271">+34 616 424 271</a>.
                    </p>
                </div>
            </Container>
        </section>
    );
}
