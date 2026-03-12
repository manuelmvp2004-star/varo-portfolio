import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Proyectos.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Nuestros Proyectos',
    description: 'Selección de proyectos ejecutados por Multiservicios Varo en Zaragoza y Aragón: reformas, adecuaciones técnicas y rehabilitación.',
    path: '/proyectos',
});

export default function ProyectosPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop}>
                        <SectionHeading
                            eyebrow="Proyectos"
                            title="Intervenciones reales con enfoque técnico y acabado premium"
                            subtitle="Mostramos una selección de trabajos ejecutados en vivienda y negocio. Cada proyecto refleja la misma lógica: planificación, coordinación y control final de calidad."
                            light
                        />
                    </div>

                    <dl className={styles.metrics}>
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

            <FeaturedProjects showHeader={false} showViewAll={false} />

            <FinalCTA />
        </>
    );
}
