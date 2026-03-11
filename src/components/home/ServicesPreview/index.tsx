'use client';

import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { services } from '@/data/services';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import styles from './ServicesPreview.module.scss';
import { cn } from '@/lib/utils/cn';

export function ServicesPreview() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={styles.section} id="servicios">
            <Container>
                <div className={styles.top} ref={headerRef}>
                    <SectionHeading
                        eyebrow="Nuestras Especialidades"
                        title="Soluciones completas para tu espacio"
                        subtitle="Dominamos cada gremio para ofrecerte un servicio integral. Un solo interlocutor, resultados de primer nivel."
                        className="gsap-hidden"
                    />
                    <Button href="/servicios" variant="outline" className={cn(styles.viewAllBtn, 'gsap-hidden')}>
                        Ver todos los servicios
                    </Button>
                </div>

                <div className={cn(styles.grid, 'gsap-stagger-parent')} ref={gridRef}>
                    {services.map((service) => (
                        <Link key={service.id} href={`/servicios/${service.slug}`} className={styles.card}>
                            <div className={styles.cardInner}>
                                <span className={styles.icon}>{service.icon}</span>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                                <div className={styles.action}>
                                    <span className={styles.actionText}>Saber más</span>
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
