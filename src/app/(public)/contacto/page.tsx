import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Contacto.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Contacto',
    description: 'Contacta con Multiservicios Varo para resolver dudas técnicas o solicitar visita de valoración en Zaragoza y Aragón.',
    path: '/contacto',
});

const contactChannels = [
    {
        title: 'Atención telefónica',
        value: '+34 616 424 271',
        href: 'tel:+34616424271',
        note: 'Lunes a viernes · 08:00 a 18:00',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 4.8a1.7 1.7 0 0 1 2-.5l2.2.9a1.7 1.7 0 0 1 1 1.9l-.4 2a1.7 1.7 0 0 0 .5 1.5l2.1 2.1a1.7 1.7 0 0 0 1.5.5l2-.4a1.7 1.7 0 0 1 1.9 1l.9 2.2a1.7 1.7 0 0 1-.5 2c-.8.7-1.9 1-3 1-6.2 0-11.2-5-11.2-11.2 0-1.1.3-2.2 1-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Correo profesional',
        value: 'info@multiserviciosvaro.es',
        href: 'mailto:info@multiserviciosvaro.es',
        note: 'Respuesta habitual en menos de 24 h laborables',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="14" rx="2.3" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4.5 6.7 7.5 6.1 7.5-6.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Base operativa',
        value: 'Zaragoza · Aragón',
        note: 'Cobertura presencial según alcance y planificación',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21c4.5-4.8 6.8-8.5 6.8-11.2a6.8 6.8 0 1 0-13.6 0c0 2.7 2.3 6.4 6.8 11.2Z" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ),
    },
];

export default function ContactoPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <SectionHeading
                        eyebrow="Contacto"
                        title="Hablemos de tu proyecto con enfoque técnico"
                        subtitle="Cuéntanos tu necesidad y te orientaremos sobre el mejor enfoque de intervención, plazos estimados y próximos pasos."
                        light
                    />

                    <ul className={styles.commitments}>
                        <li>Atención por un responsable técnico, no por un call center</li>
                        <li>Respuesta clara para saber si tu caso es viable y cómo abordarlo</li>
                        <li>Comunicación directa durante todo el proceso</li>
                    </ul>
                </Container>
            </section>

            <div className={styles.page}>
                <Container className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.infoCards}>
                            {contactChannels.map((channel) => (
                                <article key={channel.title} className={styles.card}>
                                    <span className={styles.icon}>{channel.icon}</span>
                                    <h3>{channel.title}</h3>
                                    {channel.href ? (
                                        <a href={channel.href}>{channel.value}</a>
                                    ) : (
                                        <p className={styles.value}>{channel.value}</p>
                                    )}
                                    <p>{channel.note}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <div className={styles.formInner}>
                            <h2 className={styles.formTitle}>Envíanos tu consulta</h2>
                            <p className={styles.formSubtitle}>
                                Si nos aportas contexto (ubicación, tipo de trabajo, plazos y estado actual),
                                podremos responderte con mayor precisión.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
