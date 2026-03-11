import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import { getServiceBySlug, services } from '@/data/services';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './ServiceDetail.module.scss';
import { cn } from '@/lib/utils/cn';

export async function generateStaticParams() {
    return services.map((s) => ({
        slug: s.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) return {};

    return buildMetadata({
        title: service.title,
        description: service.description,
        path: `/servicios/${slug}`,
    });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero */}
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroContent}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>{service.icon}</span>
                        </div>
                        <h1 className={styles.title}>{service.title}</h1>
                        <p className={styles.description}>{service.description}</p>
                        <Button href="/presupuesto" variant="primary" size="lg" className={styles.cta}>
                            Solicitar presupuesto
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Details */}
            <section className={styles.details}>
                <Container className={styles.grid}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Sobre este servicio</h2>
                        <p className={styles.longDesc}>{service.longDescription}</p>

                        <h3 className={styles.subHeading}>¿Qué incluye?</h3>
                        <ul className={styles.featuresList}>
                            {service.features.map((feature) => (
                                <li key={feature} className={styles.featureItem}>
                                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.contactCard}>
                            <h3 className={styles.cardTitle}>¿Hablamos sobre tu proyecto?</h3>
                            <p className={styles.cardText}>Un especialista visitará tu espacio para darte un presupuesto exacto sin compromiso.</p>
                            <Button href="/contacto" variant="outline" fullWidth>
                                Contactar por dudas
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <FinalCTA />
        </>
    );
}
