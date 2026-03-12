import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CoverageMap } from '@/components/home/CoverageMap';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Zonas.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Zonas de Servicio en Córdoba y España',
    description: 'Cobertura de Multiservicios Varo con base en Lucena (Córdoba) y desplazamientos a otras zonas de España según tipología de proyecto.',
    path: '/zonas-de-servicio',
});

const logistics = [
    {
        title: 'Evaluación inicial',
        description:
            'Validamos ubicación, tipología de intervención y volumen de trabajo para confirmar alcance y calendario.',
    },
    {
        title: 'Plan de desplazamiento',
        description:
            'Organizamos equipos y suministros en función de tiempos de traslado para mantener continuidad de obra.',
    },
    {
        title: 'Seguimiento coordinado',
        description:
            'Mantenemos comunicación de hitos y posibles ajustes para que el cliente tenga visibilidad durante todo el proceso.',
    },
];

export default function ZonasPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop} data-page-reveal data-page-y="24">
                        <SectionHeading
                            eyebrow="Cobertura"
                            title="Presencia operativa en Córdoba con base en Lucena"
                            subtitle="Atendemos proyectos de reforma, mantenimiento y adecuación técnica en la provincia de Córdoba y otras zonas de España según alcance y planificación."
                            light
                        />
                    </div>

                    <div className={styles.policies} data-page-stagger="0.08" data-page-y="14">
                        <article className={styles.policy}>
                            <h3>Radio principal</h3>
                            <p>Lucena, Córdoba capital y provincia con disponibilidad prioritaria.</p>
                        </article>
                        <article className={styles.policy}>
                            <h3>Desplazamientos</h3>
                            <p>Resto de Andalucía y proyectos puntuales en España según alcance, plazos y logística.</p>
                        </article>
                        <article className={styles.policy}>
                            <h3>Evaluación previa</h3>
                            <p>Confirmamos cobertura tras revisar ubicación, carga de trabajo y condicionantes.</p>
                        </article>
                    </div>
                </Container>
            </section>

            <CoverageMap showHeading={false} compact />

            <section className={styles.logistics}>
                <Container>
                    <header className={styles.logisticsHead} data-page-reveal>
                        <p className={styles.sectionEyebrow}>Operativa territorial</p>
                        <h2>Cómo organizamos trabajos fuera de Lucena y Córdoba capital</h2>
                    </header>

                    <div className={styles.logisticsGrid} data-page-stagger="0.08">
                        {logistics.map((item) => (
                            <article key={item.title} className={styles.logisticsCard}>
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
