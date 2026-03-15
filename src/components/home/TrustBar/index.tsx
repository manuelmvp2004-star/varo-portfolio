'use client';

import { Container } from '@/components/common/Container';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import { useHomeIntro } from '@/components/motion/HomeIntroContext';
import styles from './TrustBar.module.scss';
import { cn } from '@/lib/utils/cn';

const trustStats = [
    { label: 'Respuesta inicial', value: '24-48 h' },
    { label: 'Interlocutor técnico', value: '1 responsable' },
    { label: 'Cobertura operativa', value: 'Lucena · Córdoba · España' },
];

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
    const { isReadyForReveals } = useHomeIntro();
    const headingRef = useGsapReveal<HTMLDivElement>({ duration: 0.5, enabled: isReadyForReveals, y: 18 });
    const statsRef = useGsapReveal<HTMLDListElement>({ stagger: 0.08, enabled: isReadyForReveals, y: 14 });
    const cardsRef = useGsapReveal<HTMLDivElement>({ stagger: 0.08, enabled: isReadyForReveals, y: 18 });

    return (
        <section className={styles.section} aria-label="Confianza y garantías">
            <Container>
                <div ref={headingRef} className={cn(styles.top, 'gsap-hidden')}>
                    <p className={styles.eyebrow}>Señales de confianza</p>
                    <h2 className={styles.title}>Ejecución controlada, comunicación clara y resultado verificable</h2>
                </div>

                <dl ref={statsRef} className={cn(styles.stats, 'gsap-stagger-parent')}>
                    {trustStats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <dt>{stat.value}</dt>
                            <dd>{stat.label}</dd>
                        </div>
                    ))}
                </dl>

                <div ref={cardsRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
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
