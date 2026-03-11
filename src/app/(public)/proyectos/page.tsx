import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Nuestros Proyectos',
    description: 'Galería de proyectos ejecutados por Multiservicios Varo. Reformas integrales, locales comerciales, pintura decorativa y más.',
    path: '/proyectos',
});

export default function ProyectosPage() {
    return (
        <>
            <section style={{ paddingTop: 'var(--space-32)', backgroundColor: 'var(--color-bg-white)' }}>
                <Container>
                    <SectionHeading
                        eyebrow="Casos de éxito"
                        title="Nuestro portfolio de trabajos"
                        subtitle="Nos gusta que nuestro trabajo hable por nosotros. Explora una selección de los proyectos que hemos completado recientemente."
                    />
                </Container>
            </section>

            {/* For this MVP, we reuse the FeaturedProjects grid to act as the gallery. 
          In a full implementation, this could be a dedicated grid component with filtering. */}
            <div style={{ marginTop: 'calc(var(--space-12) * -1)' }}>
                <FeaturedProjects />
            </div>

            <FinalCTA />
        </>
    );
}
