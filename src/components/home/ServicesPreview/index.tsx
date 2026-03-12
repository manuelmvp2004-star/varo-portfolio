'use client';

import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './ServicesPreview.module.scss';
import { cn } from '@/lib/utils/cn';

const serviceIcons: Record<string, string[]> = {
    pintura: ['M4 20l4-1 10-10-3-3L5 16l-1 4z', 'M14 5l3 3'],
    'pladur-techos': ['M4 7h16', 'M4 12h16', 'M4 17h10'],
    electricidad: ['M13 2L5 14h6l-1 8 8-12h-6l1-8z'],
    'reformas-interiores': ['M3 11l9-7 9 7', 'M5 10v10h14V10', 'M10 20v-6h4v6'],
    mantenimiento: ['M9 12l6-6', 'M14 4l6 6', 'M5 20l4-4'],
    'aislamiento-acabados': ['M4 12h16', 'M8 8l-4 4 4 4', 'M16 8l4 4-4 4'],
};

interface ServicesPreviewProps {
    showHeader?: boolean;
    showViewAll?: boolean;
    compact?: boolean;
}

export function ServicesPreview({
    showHeader = true,
    showViewAll = true,
    compact = false,
}: ServicesPreviewProps = {}) {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={cn(styles.section, compact && styles.sectionCompact)} id="servicios">
            <Container>
                {showHeader && (
                    <div className={styles.top} ref={headerRef}>
                        <SectionHeading
                            eyebrow="Especialidades"
                            title="Servicios técnicos con criterio de ejecución"
                            subtitle="Cada servicio se presta con metodología, personal cualificado y control de calidad en obra."
                            className="gsap-hidden"
                        />
                        {showViewAll && (
                            <Button href="/servicios" variant="outline" className={cn(styles.viewAllBtn, 'gsap-hidden')}>
                                Ver catálogo completo
                            </Button>
                        )}
                    </div>
                )}

                <div className={cn(styles.grid, 'gsap-stagger-parent')} ref={gridRef}>
                    {services.map((service) => (
                        <Link key={service.id} href={`/servicios/${service.slug}`} className={styles.card}>
                            <div className={styles.cardInner}>
                                <span className={styles.icon} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        {(serviceIcons[service.slug] ?? serviceIcons.pintura).map((path) => (
                                            <path key={path} d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        ))}
                                    </svg>
                                </span>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                                <ul className={styles.features}>
                                    {service.features.slice(0, 2).map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <div className={styles.action}>
                                    <span className={styles.actionText}>Ver detalle técnico</span>
                                    <svg className={styles.arrow} width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
