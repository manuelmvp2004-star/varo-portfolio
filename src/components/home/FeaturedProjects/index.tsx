'use client';

import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import type { Project } from '@/types';
import styles from './FeaturedProjects.module.scss';
import { cn } from '@/lib/utils/cn';

const projects: Project[] = [
    {
        id: 'vivienda-centro',
        title: 'Reforma integral de vivienda en zona centro',
        description: 'Redistribución interior, renovación de instalaciones y acabados continuos con control de detalle.',
        category: 'Reformas Interiores',
        location: 'Zaragoza',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        tags: ['Pladur técnico', 'Electricidad', 'Pintura interior', 'Aislamiento'],
        year: 2024,
        featured: true,
    },
    {
        id: 'oficina-corporativa',
        title: 'Adecuación técnica de oficina corporativa',
        description: 'Intervención por fases con cero interrupciones operativas y entrega coordinada en plazo cerrado.',
        category: 'Mantenimiento y Reforma',
        location: 'Huesca',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
        tags: ['Techos continuos', 'Iluminación', 'Pintura técnica'],
        year: 2023,
        featured: true,
    },
    {
        id: 'fachada-sate',
        title: 'Rehabilitación de fachada con sistema SATE',
        description: 'Mejora de envolvente térmica y acabado exterior con criterios de durabilidad y eficiencia energética.',
        category: 'Aislamiento y Pintura',
        location: 'Zaragoza',
        image: 'https://images.unsplash.com/photo-1541888069507-6bb9fdf06e89?q=80&w=800&auto=format&fit=crop',
        tags: ['SATE', 'Impermeabilización', 'Revestimientos'],
        year: 2024,
        featured: true,
    },
];

export function FeaturedProjects() {
    const headerRef = useGsapReveal<HTMLDivElement>();
    const gridRef = useGsapReveal<HTMLDivElement>({ stagger: 0.1 });

    return (
        <section className={styles.section} id="proyectos">
            <Container>
                <div ref={headerRef} className={styles.top}>
                    <SectionHeading
                        eyebrow="Casos de éxito"
                        title="Proyectos ejecutados con criterio"
                        subtitle="Una muestra de intervenciones reales en vivienda y negocio, con foco en control técnico y acabado final."
                        className="gsap-hidden"
                    />
                    <Button href="/proyectos" variant="outline" className={cn(styles.viewAllBtn, 'gsap-hidden')}>
                        Ver proyectos
                    </Button>
                </div>

                <div ref={gridRef} className={cn(styles.grid, 'gsap-stagger-parent')}>
                    {projects.map((project) => (
                        <Link key={project.id} href={`/proyectos#${project.id}`} id={project.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                                <div className={styles.overlay} />
                                <span className={styles.categoryBadge}>{project.category}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.year}>{project.year}</span>
                                    <span className={styles.dot}>·</span>
                                    <span className={styles.location}>{project.location}</span>
                                </div>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.excerpt}>{project.description}</p>
                                <ul className={styles.tags}>
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <li key={tag} className={styles.tag}>{tag}</li>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <li className={styles.tag}>+{project.tags.length - 3}</li>
                                    )}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
