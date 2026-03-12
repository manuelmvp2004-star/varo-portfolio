import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CoverageMap } from '@/components/home/CoverageMap';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';
import styles from './Zonas.module.scss';
import { cn } from '@/lib/utils/cn';

export const metadata = buildMetadata({
    title: 'Zonas de Servicio en Aragón',
    description: 'Cobertura de Multiservicios Varo en Aragón: Zaragoza, Huesca y Teruel con evaluación técnica previa de desplazamiento.',
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
                            title="Presencia operativa en Aragón con base en Zaragoza"
                            subtitle="Atendemos proyectos de reforma, mantenimiento y adecuación técnica en las tres provincias, priorizando continuidad de servicio y viabilidad logística."
                            light
                        />
                    </div>

                    <div className={styles.policies} data-page-stagger="0.08" data-page-y="14">
                        <article className={styles.policy}>
                            <h3>Radio principal</h3>
                            <p>Zaragoza capital y área metropolitana con disponibilidad prioritaria.</p>
                        </article>
                        <article className={styles.policy}>
                            <h3>Desplazamientos</h3>
                            <p>Huesca y Teruel según alcance, plazos y planificación técnica.</p>
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
                        <h2>Cómo organizamos trabajos fuera de Zaragoza capital</h2>
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
