'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { CoverageZone } from '@/types';
import styles from './CoverageMap.module.scss';
import { cn } from '@/lib/utils/cn';

const zones: CoverageZone[] = [
    { name: 'Zaragoza Capital', province: 'Zaragoza', featured: true },
    { name: 'Utebo', province: 'Zaragoza', featured: true },
    { name: 'Cuarte de Huerva', province: 'Zaragoza', featured: true },
    { name: 'Zuera', province: 'Zaragoza' },
    { name: 'La Muela', province: 'Zaragoza' },
    { name: 'Huesca Capital', province: 'Huesca', featured: true },
    { name: 'Jaca', province: 'Huesca' },
    { name: 'Teruel Capital', province: 'Teruel' },
];

export function CoverageMap() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const listRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={styles.section}>
            <Container className={styles.inner}>
                <div ref={headerRef} className={styles.content}>
                    <SectionHeading
                        eyebrow="Nuestra cobertura"
                        title="Aragón es nuestro terreno"
                        subtitle="Tenemos nuestra base en Zaragoza, pero nuestro equipo móvil de especialistas da cobertura a proyectos en las tres provincias de Aragón."
                        className="gsap-hidden"
                    />

                    <div className={styles.contactCard}>
                        <div className={styles.icon}>📍</div>
                        <div className={styles.text}>
                            <strong>¿Tu localidad no está en la lista?</strong>
                            <span>Dependiendo del volumen del proyecto, estudiamos desplazamientos especiales. Consúltanos.</span>
                        </div>
                    </div>
                </div>

                <div ref={listRef} className={cn(styles.listWrapper, 'gsap-stagger-parent')}>
                    <ul className={styles.list}>
                        {zones.map((zone) => (
                            <li key={zone.name} className={cn(styles.item, zone.featured && styles.itemFeatured)}>
                                <span className={styles.bullet} />
                                <span className={styles.name}>{zone.name}</span>
                                {zone.province !== zone.name && !zone.name.includes('Capital') && (
                                    <span className={styles.province}>({zone.province})</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
