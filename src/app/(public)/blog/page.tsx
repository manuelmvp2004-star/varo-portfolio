import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata = buildMetadata({
    title: 'Blog y Novedades',
    description: 'Artículos, consejos e inspiración sobre reformas, decoración y mantenimiento del hogar.',
    path: '/blog',
});

export default function BlogPage() {
    return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column' }}>
            <section style={{ paddingTop: 'var(--space-32)', flexGrow: 1, backgroundColor: 'var(--color-bg-white)' }}>
                <Container>
                    <SectionHeading
                        eyebrow="Nuestro blog"
                        title="Inspiración y consejos prácticos"
                        subtitle="Muy pronto publicaremos aquí artículos detallados sobre materiales, tendencias de decoración, eficiencia energética y guías de mantenimiento para tu hogar o negocio."
                    />

                    <div style={{
                        marginTop: 'var(--space-12)',
                        padding: 'var(--space-12)',
                        backgroundColor: 'var(--color-bg-light)',
                        borderRadius: 'var(--radius-xl)',
                        border: '1px dashed var(--color-border)',
                        textAlign: 'center',
                        color: 'var(--color-text-medium)'
                    }}>
                        <p style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--fw-medium)' }}>
                            Sección en construcción
                        </p>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Vuelve pronto para descubrir nuestro nuevo contenido.
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    );
}
