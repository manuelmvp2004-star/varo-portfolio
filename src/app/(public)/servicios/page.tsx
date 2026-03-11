import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { FinalCTA } from '@/components/home/FinalCTA';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Nuestros Servicios',
    description: 'Explora nuestros servicios de pintura, pladur, electricidad, reformas, mantenimiento y aislamientos. Todo lo que necesitas con un único interlocutor.',
    path: '/servicios',
});

export default function ServiciosPage() {
    return (
        <>
            <section style={{ paddingTop: 'var(--space-32)', backgroundColor: 'var(--color-bg-light)' }}>
                <Container>
                    <SectionHeading
                        eyebrow="Qué hacemos"
                        title="Todos los gremios. Un solo nivel de exigencia."
                        subtitle="Olvídate de coordinar a diferentes profesionales que no se conocen entre sí. En Multiservicios Varo contamos con especialistas para cada área de tu proyecto."
                    />
                </Container>
            </section>

            {/* Reusing the ServicesPreview component without its own top header for the grid */}
            <ServicesPreview />

            <FinalCTA />
        </>
    );
}
