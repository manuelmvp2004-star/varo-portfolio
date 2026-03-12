'use client';

import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { CoverageZone } from '@/types';
import styles from './CoverageMap.module.scss';
import { cn } from '@/lib/utils/cn';

const zones: CoverageZone[] = [
    { name: 'Lucena', province: 'Córdoba', featured: true },
    { name: 'Córdoba Capital', province: 'Córdoba', featured: true },
    { name: 'Cabra', province: 'Córdoba', featured: true },
    { name: 'Puente Genil', province: 'Córdoba' },
    { name: 'Montilla', province: 'Córdoba' },
    { name: 'Priego de Córdoba', province: 'Córdoba' },
    { name: 'Baena', province: 'Córdoba' },
    { name: 'Rute', province: 'Córdoba' },
];

interface CoverageMapProps {
    showHeading?: boolean;
    compact?: boolean;
}

export function CoverageMap({ showHeading = true, compact = false }: CoverageMapProps = {}) {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const listRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={cn(styles.section, compact && styles.sectionCompact)}>
            <Container className={styles.inner}>
                <div ref={headerRef} className={styles.content}>
                    {showHeading && (
                        <SectionHeading
                            eyebrow="Nuestra cobertura"
                            title="Córdoba es nuestro terreno operativo"
                            subtitle="Base principal en Lucena (Córdoba) y capacidad de desplazamiento a otros puntos de España según alcance, calendario y logística de obra."
                            className="gsap-hidden"
                        />
                    )}

                    <div className={styles.contactCard}>
                        <div className={styles.icon} aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12 21c4.5-4.8 6.8-8.5 6.8-11.2a6.8 6.8 0 1 0-13.6 0c0 2.7 2.3 6.4 6.8 11.2Z" stroke="currentColor" strokeWidth="1.6" />
                                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                            </svg>
                        </div>
                        <div className={styles.text}>
                            <strong>¿Tu localidad no aparece en la lista?</strong>
                            <span>Estudiamos desplazamientos especiales según tipología de obra, planificación y volumen de intervención.</span>
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
