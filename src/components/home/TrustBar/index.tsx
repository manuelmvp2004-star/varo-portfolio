'use client';

import { Container } from '@/components/common/Container';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './TrustBar.module.scss';
import { cn } from '@/lib/utils/cn';

const trustPillars = [
    {
        title: 'Calidad verificable',
        description: 'Control de ejecución por fases y revisión final con checklist de acabados.',
        icon: 'M12 5v14M5 12h14',
    },
    {
        title: 'Plazos realistas',
        description: 'Planificación previa, coordinación de gremios y seguimiento técnico diario.',
        icon: 'M12 7v5l3 3M21 12a9 9 0 11-18 0a9 9 0 0118 0z',
    },
    {
        title: 'Presupuesto trazable',
        description: 'Partidas claras desde el inicio y comunicación continua durante toda la obra.',
        icon: 'M8 7h8M8 12h8M8 17h5M6 3h12a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V5a2 2 0 012-2z',
    },
];

export function TrustBar() {
    const containerRef = useGsapReveal<HTMLDivElement>({ duration: 0.55, y: 18 });

    return (
        <section className={styles.section} aria-label="Confianza y garantías">
            <Container>
                <div ref={containerRef} className={cn(styles.grid, 'gsap-hidden')}>
                    {trustPillars.map((pillar) => (
                        <article key={pillar.title} className={styles.card}>
                            <span className={styles.iconWrap} aria-hidden="true">
                                <svg className={styles.icon} viewBox="0 0 24 24" fill="none">
                                    <path d={pillar.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <div className={styles.text}>
                                <strong>{pillar.title}</strong>
                                <span>{pillar.description}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
