import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { FinalCTA } from '@/components/home/FinalCTA';
import { getServiceBySlug, services } from '@/data/services';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './ServiceDetail.module.scss';
import { cn } from '@/lib/utils/cn';

function ServiceIcon({ slug }: { slug: string }) {
    switch (slug) {
        case 'pintura':
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.5 9.5h10.8a2.7 2.7 0 0 0 2.7-2.7V5.2a1.7 1.7 0 0 0-1.7-1.7H6.2A2.7 2.7 0 0 0 3.5 6.2v3.3Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M9 9.5v4.3c0 1.4 1.1 2.5 2.5 2.5h2.8c1.5 0 2.7 1.2 2.7 2.7V20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case 'pladur-techos':
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 5.5h16M4 12h16M4 18.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M8 5.5V18.5M16 5.5V18.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
                </svg>
            );
        case 'electricidad':
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M13.8 2.5 6.4 13.2h4.8L10.2 21.5l7.4-10.7h-4.8l1-8.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
            );
        case 'reformas-interiores':
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3.5 11.3 12 4l8.5 7.3v8.2a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5v-8.2Z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M9.3 21V13.5h5.4V21" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            );
        case 'mantenimiento':
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m20 7.4-3.1 3.1a3.8 3.8 0 0 1-5.4-5.4L14.6 2a5.3 5.3 0 0 0-6.5 7.9l-5.6 5.6a1.8 1.8 0 1 0 2.6 2.6l5.6-5.6A5.3 5.3 0 0 0 20 7.4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7.5h16M4 12h16M4 16.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <rect x="6.5" y="3.5" width="11" height="17" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            );
    }
}

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
                    <div className={styles.heroContent} data-page-reveal data-page-y="24">
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>
                                <ServiceIcon slug={service.slug} />
                            </span>
                        </div>
                        <h1 className={styles.title}>{service.title}</h1>
                        <p className={styles.description}>{service.description}</p>
                        <ul className={styles.badges} data-page-stagger="0.08" data-page-y="12">
                            <li>Visita técnica previa</li>
                            <li>Propuesta de alcance detallada</li>
                            <li>Control de calidad en entrega</li>
                        </ul>
                        <Button href="/presupuesto" variant="primary" size="lg" className={styles.cta}>
                            Solicitar presupuesto
                        </Button>
                    </div>
                </Container>
            </section>

            <section className={styles.details}>
                <Container className={styles.grid}>
                    <div className={styles.content} data-page-reveal>
                        <h2 className={styles.heading}>Qué resolvemos con este servicio</h2>
                        <p className={styles.longDesc}>{service.longDescription}</p>

                        <h3 className={styles.subHeading}>Incluye habitualmente</h3>
                        <ul className={styles.featuresList} data-page-stagger="0.06" data-page-y="10">
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

                    <div className={styles.sidebar} data-page-reveal data-page-delay="0.1" data-page-y="16">
                        <div className={styles.contactCard}>
                            <h3 className={styles.cardTitle}>¿Quieres una valoración real de tu caso?</h3>
                            <p className={styles.cardText}>Revisamos estado actual, objetivos y calidades para definir un presupuesto ajustado al alcance real del trabajo.</p>
                            <ul className={styles.cardList}>
                                <li>Respuesta inicial en menos de 48 h laborables</li>
                                <li>Sin compromiso ni presión comercial</li>
                                <li>Asesoramiento técnico antes de decidir</li>
                            </ul>
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
