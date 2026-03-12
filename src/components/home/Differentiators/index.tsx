'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './Differentiators.module.scss';
import { cn } from '@/lib/utils/cn';

const differentiators = [
    {
        title: 'Planificación técnica',
        description: 'Definimos alcance, secuencia y materiales antes de comenzar. Menos improvisación, más control de ejecución.',
    },
    {
        title: 'Coordinación integral',
        description: 'Un único responsable organiza todos los gremios para evitar desajustes de tiempos y acabados.',
    },
    {
        title: 'Tiempos consistentes',
        description: 'Trabajamos con hitos claros y seguimiento diario para cumplir entregas sin comprometer calidad.',
    },
    {
        title: 'Acabado profesional',
        description: 'Cada detalle se revisa en entrega: alineaciones, juntas, pintura, limpieza y remates finales.',
    },
];

export function Differentiators() {
    const headerRef = useGsapReveal<HTMLDivElement>({ x: -20 });
    const listRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={cn(styles.section, 'section--dark')}>
            <Container className={styles.inner}>
                <div ref={headerRef} className={styles.left}>
                    <SectionHeading
                        eyebrow="Por qué nosotros"
                        title="La diferencia está en cómo se ejecuta"
                        subtitle="No vendemos promesas vacías: método, seguimiento y criterio técnico en cada intervención."
                        light
                        className="gsap-hidden"
                    />
                </div>

                <div ref={listRef} className={cn(styles.right, 'gsap-stagger-parent')}>
                    {differentiators.map((item, i) => (
                        <article key={item.title} className={styles.item}>
                            <span className={styles.number}>0{i + 1}</span>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
