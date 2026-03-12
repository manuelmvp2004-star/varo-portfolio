'use client';

import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './FinalCTA.module.scss';

export function FinalCTA() {
    const contentRef = useGsapReveal<HTMLDivElement>({ duration: 1, y: 40 });

    return (
        <section className={styles.section} aria-label="Llamada a la acción final">
            {/* Background illustration */}
            <div className={styles.bg} aria-hidden="true" />

            <Container className={styles.inner}>
                <div ref={contentRef} className={styles.content}>
                    <span className={styles.eyebrow}>Asesoramiento técnico inicial</span>
                    <h2 className={styles.title}>
                        ¿Listo para ejecutar tu proyecto con criterio?<br />
                        <span className={styles.accent}>Hablemos de alcance, plazos y costes.</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Realizamos visita técnica, definimos necesidades y te entregamos una propuesta clara
                        para avanzar con seguridad desde el primer día.
                    </p>

                    <div className={styles.actions}>
                        <Button href="/presupuesto" variant="primary" size="lg">
                            Solicitar presupuesto
                        </Button>
                        <Button href="/contacto" variant="outline" size="lg" className={styles.secondaryBtn}>
                            Hablar con un técnico
                        </Button>
                    </div>

                    <p className={styles.contactDirect}>
                        O llámanos directamente al{' '}
                        <a href="tel:+34616424271" className={styles.phone}>+34 616 424 271</a>
                    </p>
                </div>
            </Container>
        </section>
    );
}
