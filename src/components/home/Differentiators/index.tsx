'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { Differentiator } from '@/types';
import styles from './Differentiators.module.scss';
import { cn } from '@/lib/utils/cn';

const differentiators: Differentiator[] = [
    {
        icon: '🎯',
        title: 'Precisión y detalle',
        description: 'Trabajamos con meticulosidad obsesiva. Desde la protección del espacio hasta el último remate, el acabado siempre debe ser perfecto.',
    },
    {
        icon: '🤝',
        title: 'Un solo interlocutor',
        description: 'Coordinamos a todos los gremios. No tienes que preocuparte por gestionar fontaneros, electricistas o albañiles. Nosotros lo hacemos todo.',
    },
    {
        icon: '⏳',
        title: 'Tiempos cumplidos',
        description: 'Establecemos fechas realistas y las cumplimos. Tu tiempo es oro, por eso planificamos al detalle antes del primer día de ejecución.',
    },
    {
        icon: '💎',
        title: 'Materiales premium',
        description: 'No rebajamos presupuestos a costa de la calidad. Seleccionamos materiales duraderos y profesionales que garantizan un resultado de alto nivel.',
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
                        title="La diferencia está en la ejecución"
                        subtitle="Hay muchas empresas de multiservicios. Nosotros aportamos tranquilidad mental, orden y resultados premium reales para proyectos donde la calidad importa."
                        light
                        className="gsap-hidden"
                    />
                </div>

                <div ref={listRef} className={cn(styles.right, 'gsap-stagger-parent')}>
                    {differentiators.map((item, i) => (
                        <div key={item.title} className={styles.item}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{item.icon}</span>
                                <span className={styles.number}>0{i + 1}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
