import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CoverageMap } from '@/components/home/CoverageMap';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Zonas de Servicio en Aragón',
    description: 'Conoce nuestras áreas de cobertura. Realizamos reformas, pintura y mantenimiento en Zaragoza, Huesca y Teruel.',
    path: '/zonas-de-servicio',
});

export default function ZonasPage() {
    return (
        <>
            <section style={{ paddingTop: 'var(--space-32)', backgroundColor: 'var(--color-bg-light)' }}>
                <Container>
                    <SectionHeading
                        eyebrow="Dónde trabajamos"
                        title="Llegamos a tu proyecto"
                        subtitle="Principalmente damos servicio en Zaragoza capital y alrededores, pero nuestro equipo móvil de especialistas da cobertura a proyectos en todo Aragón."
                    />
                </Container>
            </section>

            {/* Reuse the CoverageMap home block */}
            <CoverageMap />

            <FinalCTA />
        </>
    );
}
