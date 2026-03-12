import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Proyectos.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Nuestros Proyectos',
    description: 'Selección de proyectos ejecutados por Multiservicios Varo en Lucena, Córdoba y otros puntos de España: reformas, adecuaciones técnicas y rehabilitación.',
    path: '/proyectos',
});

const projectFocus = [
    {
        title: 'Vivienda habitada',
        description:
            'Intervenciones planificadas para minimizar impacto en el día a día, con secuencias de trabajo limpias y controladas.',
    },
    {
        title: 'Local y oficina en uso',
        description:
            'Ejecución por fases para mantener actividad operativa, reduciendo paradas y coordinando entregas por hitos.',
    },
    {
        title: 'Rehabilitación técnica',
        description:
            'Mejora de envolvente, instalaciones y acabados con criterios de durabilidad, eficiencia y facilidad de mantenimiento.',
    },
];

export default function ProyectosPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop} data-page-reveal data-page-y="24">
                        <SectionHeading
                            eyebrow="Proyectos"
                            title="Intervenciones reales con enfoque técnico y acabado premium"
                            subtitle="Mostramos una selección de trabajos ejecutados en vivienda y negocio. Cada proyecto refleja la misma lógica: planificación, coordinación y control final de calidad."
                            light
                        />
                    </div>

                    <dl className={styles.metrics} data-page-stagger="0.08" data-page-y="14">
                        <div className={styles.metric}>
                            <dt>Planificación</dt>
                            <dd>Definición previa de alcance, plazos y secuencia de oficios.</dd>
                        </div>
                        <div className={styles.metric}>
                            <dt>Ejecución</dt>
                            <dd>Seguimiento diario para mantener ritmo de obra y trazabilidad.</dd>
                        </div>
                        <div className={styles.metric}>
                            <dt>Entrega</dt>
                            <dd>Revisión de detalle y cierre documental de cada intervención.</dd>
                        </div>
                    </dl>
                </Container>
            </section>

            <FeaturedProjects showHeader={false} showViewAll={false} compact />

            <section className={styles.focus}>
                <Container>
                    <header className={styles.focusHead} data-page-reveal>
                        <p className={styles.focusEyebrow}>Tipologías de proyecto</p>
                        <h2>Aplicamos el mismo estándar en distintos contextos de obra</h2>
                    </header>

                    <div className={styles.focusGrid} data-page-stagger="0.09">
                        {projectFocus.map((item) => (
                            <article key={item.title} className={styles.focusCard}>
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
