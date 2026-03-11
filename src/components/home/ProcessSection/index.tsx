'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { ProcessStep } from '@/types';
import styles from './ProcessSection.module.scss';
import { cn } from '@/lib/utils/cn';

const steps: ProcessStep[] = [
    {
        step: 1,
        title: 'Toma de contacto',
        description: 'Visitamos el espacio, escuchamos tus necesidades y tomamos mediciones precisas sin ningún compromiso.',
        icon: '📏',
    },
    {
        step: 2,
        title: 'Presupuesto cerrado',
        description: 'En menos de 48 horas recibes un presupuesto detallado por partidas. Sin letra pequeña ni sobrecostes ocultos.',
        icon: '📋',
    },
    {
        step: 3,
        title: 'Ejecución y control',
        description: 'Comenzamos en la fecha acordada. Nuestro responsable de obra supervisa a todos los gremios diariamente.',
        icon: '🔨',
    },
    {
        step: 4,
        title: 'Entrega impecable',
        description: 'Realizamos una limpieza profesional y revisamos contigo cada detalle antes de dar el proyecto por finalizado.',
        icon: '✨',
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
                        title="Un proceso sin estrés"
                        subtitle="Olvídate de las obras caóticas. Nuestro método de trabajo está diseñado para darte visibilidad total y resultados garantizados."
                        align="center"
                        className="gsap-hidden"
                    />
                </div>

                <div ref={stepsRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
                    {steps.map((item) => (
                        <div key={item.step} className={styles.card}>
                            <span className={styles.number}>0{item.step}</span>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{item.icon}</span>
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
