'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './ProcessSection.module.scss';
import { cn } from '@/lib/utils/cn';

const steps = [
    {
        step: 1,
        title: 'Visita técnica inicial',
        description: 'Analizamos el estado del espacio, tomamos medidas y validamos alcance con criterios de viabilidad.',
    },
    {
        step: 2,
        title: 'Propuesta y presupuesto',
        description: 'Entregamos partidas desglosadas, materiales definidos y una planificación realista de ejecución.',
    },
    {
        step: 3,
        title: 'Ejecución coordinada',
        description: 'Activamos gremios de forma ordenada y mantenemos seguimiento técnico continuo en cada fase.',
    },
    {
        step: 4,
        title: 'Cierre y validación',
        description: 'Comprobamos acabados, realizamos limpieza final y cerramos contigo la entrega de obra.',
    },
];

export function ProcessSection() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const stepsRef = useGsapReveal<HTMLDivElement>({ stagger: 0.15 });

    return (
        <section className={styles.section} id="proceso">
            <Container>
                <div ref={headerRef}>
                    <SectionHeading
                        eyebrow="Cómo trabajamos"
                        title="Proceso operativo claro de principio a fin"
                        subtitle="Planificación, control y comunicación continua para que la obra avance con orden y previsibilidad."
                        align="center"
                        className="gsap-hidden"
                    />
                </div>

                <div ref={stepsRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
                    {steps.map((item) => (
                        <article key={item.step} className={styles.card}>
                            <div className={styles.stepTop}>
                                <span className={styles.number}>0{item.step}</span>
                                <span className={styles.stepLabel}>Fase {item.step}</span>
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
