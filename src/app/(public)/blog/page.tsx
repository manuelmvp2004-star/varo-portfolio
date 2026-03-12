import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { buildMetadata } from '@/lib/seo/metadata';
import { cn } from '@/lib/utils/cn';
import styles from './Blog.module.scss';

export const metadata = buildMetadata({
    title: 'Blog y Novedades',
    description: 'Artículos, consejos e inspiración sobre reformas, decoración y mantenimiento del hogar.',
    path: '/blog',
});

const upcomingArticles = [
    {
        category: 'Reforma interior',
        title: 'Cómo planificar una reforma sin desviaciones de plazo',
        description: 'Checklist operativo para definir alcance, tiempos y coordinación de gremios desde el inicio.',
    },
    {
        category: 'Mantenimiento',
        title: 'Mantenimiento preventivo en vivienda y local: qué revisar cada semestre',
        description: 'Guía práctica para evitar averías costosas y prolongar la vida útil de instalaciones y acabados.',
    },
    {
        category: 'Aislamiento',
        title: 'Qué sistema de aislamiento elegir según uso y tipología del inmueble',
        description: 'Comparativa de soluciones térmicas y acústicas con criterios técnicos y de retorno.',
    },
];

const themes = [
    'Materiales y acabados',
    'Eficiencia energética',
    'Planificación de obra',
    'Conservación del inmueble',
];

export default function BlogPage() {
    return (
        <>
            <section className={cn(styles.hero, 'section--dark')}>
                <Container>
                    <div className={styles.heroTop} data-page-reveal data-page-y="24">
                        <SectionHeading
                            eyebrow="Blog técnico"
                            title="Contenido útil para decidir mejor antes de una obra"
                            subtitle="Estamos preparando una biblioteca de artículos prácticos sobre reforma, mantenimiento y eficiencia para clientes particulares y empresas."
                            light
                        />
                    </div>

                    <div className={styles.themes} data-page-stagger="0.08" data-page-y="12">
                        {themes.map((theme) => (
                            <span key={theme} className={styles.themeTag}>{theme}</span>
                        ))}
                    </div>
                </Container>
            </section>

            <section className={styles.preview}>
                <Container>
                    <header className={styles.previewHead} data-page-reveal>
                        <p className={styles.sectionEyebrow}>Próximas publicaciones</p>
                        <h2>Avances editoriales</h2>
                    </header>

                    <div className={styles.previewGrid} data-page-stagger="0.09">
                        {upcomingArticles.map((article) => (
                            <article key={article.title} className={styles.card}>
                                <span className={styles.cardCategory}>{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className={styles.cta} data-page-reveal data-page-delay="0.1">
                        <p>Mientras publicamos los primeros artículos, puedes consultarnos tu caso directamente.</p>
                        <div className={styles.actions}>
                            <Button href="/contacto" variant="outline">Hablar con un técnico</Button>
                            <Button href="/presupuesto" variant="primary">Solicitar presupuesto</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
