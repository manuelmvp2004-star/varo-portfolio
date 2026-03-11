'use client';

import { Container } from '@/components/common/Container';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './TrustBar.module.scss';
import { cn } from '@/lib/utils/cn';

export function TrustBar() {
    const containerRef = useGsapReveal<HTMLDivElement>({ duration: 0.6, y: 20 });

    return (
        <section className={styles.section} aria-label="Confianza y garantías">
            <Container>
                <div ref={containerRef} className={cn(styles.grid, 'gsap-hidden')}>
                    <div className={styles.item}>
                        <span className={styles.icon}>🏆</span>
                        <div className={styles.text}>
                            <strong>Garantía de calidad</strong>
                            <span>Materiales premium y acabados perfectos</span>
                        </div>
                    </div>
                    <div className={styles.divider} aria-hidden="true" />
                    <div className={styles.item}>
                        <span className={styles.icon}>⚡</span>
                        <div className={styles.text}>
                            <strong>Cumplimiento de plazos</strong>
                            <span>Planificación estricta sin retrasos</span>
                        </div>
                    </div>
                    <div className={styles.divider} aria-hidden="true" />
                    <div className={styles.item}>
                        <span className={styles.icon}>🤝</span>
                        <div className={styles.text}>
                            <strong>Trato transparente</strong>
                            <span>Presupuestos cerrados sin sorpresas</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
