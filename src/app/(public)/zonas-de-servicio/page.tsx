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

export default function ZonasPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop}>
                        <SectionHeading
                            eyebrow="Cobertura"
                            title="Presencia operativa en Aragón con base en Zaragoza"
                            subtitle="Atendemos proyectos de reforma, mantenimiento y adecuación técnica en las tres provincias, priorizando continuidad de servicio y viabilidad logística."
                            light
                        />
                    </div>

                    <div className={styles.policies}>
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

            <CoverageMap showHeading={false} />

            <FinalCTA />
        </>
    );
}
