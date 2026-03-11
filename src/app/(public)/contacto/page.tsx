import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Contacto.module.scss';

export const metadata = buildMetadata({
    title: 'Contacto',
    description: 'Contacta con Multiservicios Varo. Cuéntanos qué necesitas y te responderemos en menos de 24 horas laborables.',
    path: '/contacto',
});

export default function ContactoPage() {
    return (
        <div className={styles.page}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <SectionHeading
                        eyebrow="Atención al cliente"
                        title="Estamos a tu disposición"
                        subtitle="Cuéntanos brevemente en qué podemos ayudarte. Te responderemos lo antes posible para asesorarte o concertar una visita."
                    />

                    <div className={styles.infoCards}>
                        <div className={styles.card}>
                            <span className={styles.icon}>📞</span>
                            <h3>Llámanos</h3>
                            <a href="tel:+34616424271">+34 616 424 271</a>
                            <p>Lunes a Viernes, 8:00 - 18:00</p>
                        </div>

                        <div className={styles.card}>
                            <span className={styles.icon}>✉️</span>
                            <h3>Escríbenos</h3>
                            <a href="mailto:info@multiserviciosvaro.es">info@multiserviciosvaro.es</a>
                            <p>Respondemos en menos de 24h</p>
                        </div>

                        <div className={styles.card}>
                            <span className={styles.icon}>📍</span>
                            <h3>Oficina</h3>
                            <p>Zaragoza (Aragón)</p>
                            <p>Servicio presencial en provincia</p>
                        </div>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    <div className={styles.formInner}>
                        <h2 className={styles.formTitle}>Envíanos un mensaje</h2>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    );
}
