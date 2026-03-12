import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Servicios.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Nuestros Servicios',
    description: 'Servicios técnicos de reforma, pintura, electricidad, mantenimiento y aislamiento con ejecución coordinada en Zaragoza y Aragón.',
    path: '/servicios',
});

const guarantees = [
    'Presupuesto claro y alcance definido desde el inicio',
    'Coordinación real entre gremios y control de tiempos',
    'Entrega con revisión final y criterios de calidad acordados',
];

const sectors = [
    {
        title: 'Vivienda particular',
        description:
            'Reformas parciales o integrales con foco en confort, durabilidad de acabados y mínima fricción durante la obra.',
    },
    {
        title: 'Locales comerciales',
        description:
            'Adecuaciones técnicas para apertura, actualización o mejora de espacios de venta y atención al cliente.',
    },
    {
        title: 'Oficinas y despachos',
        description:
            'Intervenciones por fases para mejorar funcionalidad, imagen corporativa y rendimiento del entorno de trabajo.',
    },
    {
        title: 'Comunidades y patrimonio',
        description:
            'Mantenimiento preventivo y correctivo para zonas comunes, elementos técnicos y mejoras de eficiencia.',
    },
];

export default function ServiciosPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop} data-page-reveal data-page-y="24">
                        <SectionHeading
                            eyebrow="Servicios"
                            title="Especialidades técnicas bajo un mismo estándar de ejecución"
                            subtitle="Integramos oficios clave para resolver reformas y mantenimiento con un enfoque único: planificación rigurosa, calidad consistente y comunicación clara."
                            light
                        />
                    </div>

                    <ul className={styles.guarantees} data-page-stagger="0.08" data-page-y="14">
                        {guarantees.map((item) => (
                            <li key={item} className={styles.guaranteeItem}>
                                <span className={styles.check} aria-hidden="true">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <section className={styles.context}>
                <Container className={styles.contextGrid} data-page-stagger="0.1">
                    <article className={styles.contextCard}>
                        <h3>Capacidad multi-gremio</h3>
                        <p>
                            Pintura, pladur, electricidad, aislamiento, reforma interior y mantenimiento
                            técnico. Cubrimos el ciclo completo para que el cliente no tenga que coordinar
                            proveedores dispersos.
                        </p>
                    </article>
                    <article className={styles.contextCard}>
                        <h3>Intervención a medida</h3>
                        <p>
                            Adaptamos cada propuesta al uso real del espacio, al presupuesto disponible y al
                            calendario operativo de la propiedad, priorizando soluciones duraderas.
                        </p>
                    </article>
                </Container>
            </section>

            <ServicesPreview showHeader={false} showViewAll={false} compact />

            <section className={styles.sectors}>
                <Container>
                    <header className={styles.sectorsHead} data-page-reveal>
                        <p className={styles.sectionEyebrow}>Entornos de trabajo</p>
                        <h2>Adaptamos cada servicio al contexto real del cliente</h2>
                    </header>

                    <div className={styles.sectorsGrid} data-page-stagger="0.08">
                        {sectors.map((item) => (
                            <article key={item.title} className={styles.sectorCard}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <FinalCTA />
        </>
    );
}
